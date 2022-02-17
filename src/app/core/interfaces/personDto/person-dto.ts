export interface PersonDto {
    dni ?: string,
    birthDate?: Date,
    name?: string,
    lastName?: string,
    image?: string,
    telefone?: string,
    address?: string,
    rol?: Rol
}

export enum Rol {
    ROLE_STUDENT,
    ROLE_TEACHER,
    ROLE_ADMIN
}