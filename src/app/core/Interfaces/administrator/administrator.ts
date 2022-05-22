import { School } from '../school/school';

// Interfaz de aministrador
export interface Administrator {
    dni?: string,                                    // Dni del administrador
    birthDate?: string,                              // Fecha de nacimiento
    password?: string,                               // Contraseña 
    name?: string,                                   // Nombre
    lastName?: string,                               // Apellidos
    image?: string,                                  // Imagen
    telefone?: string,                               // Teléfono
    address?: string,                                // Dirección
    school?: School                                  // Escuela que administra
}
