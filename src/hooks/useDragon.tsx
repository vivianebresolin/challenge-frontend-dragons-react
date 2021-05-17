import Swal from 'sweetalert2';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { formatDate } from '../utils/fomatDate';
import { Dragon, DragonInput, DragonToUpdate } from '../types';

interface DragonProviderProps {
    children: ReactNode;
}

interface DragonContextData {
    dragons: Dragon[];
    dragon: Dragon;
    showDragon: (dragonId: string) => Promise<void>;
    addDragon: (newDragon: DragonInput) => Promise<void>;
    removeDragon: (dragonId: string) => Promise<void>;
    updateDragon: (dragon: DragonToUpdate) => Promise<void>;
}

const DragonContext = createContext<DragonContextData>({} as DragonContextData);

export function DragonProvider({ children }: DragonProviderProps): JSX.Element {
    const [dragons, setDragons] = useState<Dragon[]>([]);
    const [dragon, setDragon] = useState<Dragon>({} as Dragon);

    useEffect(() => {
        api.get<Dragon[]>('/')
            .then(response => setDragons(response.data));
    }, []);

    async function showDragon(dragonId: string) {
        try {
            const response = await api.get<Dragon>(`/${dragonId}`)
            const getDragon = response.data;

            if (getDragon) {
                const dragonFormatted = {
                    ...getDragon,
                    dateFormatted: formatDate(getDragon.createdAt)
                }
                setDragon(dragonFormatted);
            }
        }
        catch {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo deu errado!',
            });
        }
    }

    async function addDragon(newDragon: DragonInput) {
        try {
            const response = await api.post<Dragon>('/', {
                ...newDragon,
                createdAt: new Date(),
            });
            const registeredDragon = response.data;

            setDragons([
                ...dragons,
                registeredDragon
            ]);

            Swal.fire(
                'Parabéns!',
                'Você criou seu dragão.',
                'success'
            );
        }
        catch {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo deu errado!',
            });
        }
    }

    async function updateDragon(dragon: DragonToUpdate) {
        try {
            const response = await api.put<Dragon>(`/${dragon.id}`, {
                ...dragon,
                name: dragon.name,
                type: dragon.type,
                histories: dragon.histories,
                updatedAt: new Date(),
            });
            const dragonUpdated = response.data;

            if (dragonUpdated) {
                await api.get<Dragon[]>('/')
                    .then(response => setDragons(response.data));

                setDragon(dragonUpdated);

                Swal.fire(
                    'Feito!',
                    'O dragão foi atualizado.',
                    'success'
                );
            }

        }
        catch {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo deu errado!',
            });
        }
    }

    async function removeDragon(dragonId: string) {
        try {
            const response = await api.delete<Dragon>(`/${dragonId}`)

            if (response) {
                const updatedDragons = dragons.filter(dragon => dragonId !== dragon.id);

                setDragons(updatedDragons);

                Swal.fire(
                    'Excluído!',
                    'O dragão escolhido foi banido da Terra.',
                    'success'
                )
            } else {
                throw Error();
            }

        }
        catch {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo deu errado!',
            });
        }
    }

    return (
        <DragonContext.Provider
            value={{ dragons, dragon, showDragon, addDragon, removeDragon, updateDragon }}
        >
            {children}
        </DragonContext.Provider>
    );
}

export function useDragon(): DragonContextData {
    const context = useContext(DragonContext);

    return context;
}