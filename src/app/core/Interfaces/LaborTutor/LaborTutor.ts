import { Practise } from '../Practise/Practise';
import { Business } from '../business/Business';
import { Rol } from '../personDto/person-dto';

// Interfaz de tutor laboral

export interface LaborTutor {
    dni?: string,                                    // Dni del administrador
    birthDate?: string,                              // Fecha de nacimiento
    password?: string,                               // Contraseña 
    name?: string,                                   // Nombre
    lastName?: string,                               // Apellidos
    image?: string,                                  // Imagen
    telefone?: string,                               // Teléfono
    address?: string,                                // Dirección
    practises ?: Practise[],                         // Lista de prácticas
    business ?: Business,                            // Empresa
    enabled ?: boolean,                              // Habilitado    
    email ?: string,                                 // Correo
    rol?: Rol                                        // Rol
}
