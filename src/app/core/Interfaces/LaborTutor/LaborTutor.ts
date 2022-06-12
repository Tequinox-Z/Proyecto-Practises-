import { Practise } from '../Practise/Practise';
import { Business } from '../business/Business';
import { Rol } from '../personDto/person-dto';

export interface LaborTutor {
    dni?: string,                                    // Dni del administrador
    birthDate?: string,                              // Fecha de nacimiento
    password?: string,                               // Contraseña 
    name?: string,                                   // Nombre
    lastName?: string,                               // Apellidos
    image?: string,                                  // Imagen
    telefone?: string,                               // Teléfono
    address?: string,
    practises ?: Practise[],
    business ?: Business,
    enabled ?: boolean,
    email ?: string,
    rol?: Rol                                    // Rol
}
