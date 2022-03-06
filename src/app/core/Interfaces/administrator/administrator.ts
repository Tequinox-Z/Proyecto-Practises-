import { School } from '../school/school';
export interface Administrator {
    dni?: string,
    birthDate?: string,
    password?: string,
    name?: string,
    lastName?: string,
    image?: string,
    telefone?: string,
    address?: string,
    school?: School
}
