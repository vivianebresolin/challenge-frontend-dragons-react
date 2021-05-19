export interface Dragon {
    id: string;
    name: string;
    type: string;
    histories: string;
    createdAt: string;
    dateFormatted?: string
    updatedAt?: string
}

export type DragonInput = Omit<Dragon, 'id' | 'createdAt'>

export type DragonToUpdate = Omit<Dragon, 'createdAt'>

export interface User {
    email: string,
    password: string
}

