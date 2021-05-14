import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { Dragon } from '../types';

interface DragonProviderProps {
    children: ReactNode;
}

// interface CartContextData {
//   cart: Product[];
//   addProduct: (productId: number) => Promise<void>;
//   removeProduct: (productId: number) => void;
//   updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
// }
interface DragonContextData {
    dragons: Dragon[];
    showDragon: (dragonId: string) => Promise<void>;
    dragon: Dragon;
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

    return (
        <DragonContext.Provider
            value={{ dragons, showDragon, dragon }}
        >
            {children}
        </DragonContext.Provider>
    );
}

export function useDragon(): DragonContextData {
    const context = useContext(DragonContext);

    return context;
}