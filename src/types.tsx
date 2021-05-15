export interface Dragon {
    id: string;
    name: string;
    type: string;
    histories: string
    createdAt: string;
}

export type DragonInput = Omit<Dragon, 'id' | 'createdAt'>