import { Rol } from '../personDto/person-dto';

// Interfaz de estudiantes

export interface Student {
    dni?: string,                                                            // Dni 
    birthDate?: string,                                                      // Fecha de nacimiento
    name?: string,                                                           // Nombre
    lastName?: string,                                                       // Apellidos
    image?: string,                                                          // Imagen
    telefone?: string,                                                       // Teléfono
    address?: string,                                                        // Dirección
    password?: string,                                                       // Contraseña
    enabled ?: boolean,                                                      // Habilitado
    email ?: string,                                                         // Correo electrónico
    rol?: Rol                                                                // Rol
}
