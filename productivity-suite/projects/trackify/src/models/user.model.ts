export interface User {
    id?: number;
    name: string;
    gender: 'male' | 'female' | 'other';
    avatar?: string;
    createdAt: number;
}