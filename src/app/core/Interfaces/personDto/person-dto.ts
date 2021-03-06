
// Interfaz de persona

export interface PersonDto {
    dni ?: string,                                // Dni de la persona
    birthDate?: Date,                             // Fecha de nacimiento
    name?: string,                                // Nombre
    lastName?: string,                            // Apellidos
    image?: string,                               // Imagen
    telefone?: string,                            // Teléfono
    password?: string,                            // Contraseña
    address?: string,                             // Dirección
    rol?: Rol,                                    // Rol
    email?: string,                               // Correo
    enabled?: boolean                             // Habilitado
}


// Enumerado de roles 

export enum Rol {
    ROLE_ADMIN,                                  // Rol de administrador
    ROLE_STUDENT,                                // Rol de estudiante
    ROLE_TEACHER,                                // Rol de profesor
    ROLE_LABOR_TUTOR                             // Rol de tutor laboral
}