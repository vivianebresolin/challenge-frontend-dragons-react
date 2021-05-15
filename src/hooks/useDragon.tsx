import Swal from 'sweetalert2';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { Dragon, DragonInput } from '../types';

interface DragonProviderProps {
    children: ReactNode;
}

interface DragonContextData {
    dragons: Dragon[];
    dragon: Dragon;
    showDragon: (dragonId: string) => Promise<void>;
    addDragon: (newDragon: DragonInput) => Promise<void>;
    removeDragon: (dragonId: string) => Promise<void>;
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
                setDragon(getDragon);
            }
        }
        catch {

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
        }
        catch {

        }
    }

    async function removeDragon(dragonId: string) {
        try {
            const response = await api.delete<Dragon>(`/${dragonId}`)
            console.log(response);

            if (response) {
                const updatedDragons = dragons.filter(dragon => dragonId !== dragon.id);

                setDragons(updatedDragons);

                Swal.fire(
                    'Deletado!',
                    'O dragão escolhido foi deletado.',
                    'success'
                )
            }

        }
        catch {

        }
    }

    return (
        <DragonContext.Provider
            value={{ dragons, dragon, showDragon, addDragon, removeDragon }}
        >
            {children}
        </DragonContext.Provider>
    );
}

export function useDragon(): DragonContextData {
    const context = useContext(DragonContext);

    return context;
}