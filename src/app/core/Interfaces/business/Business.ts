import { Practise } from '../Practise/Practise';
import { LaborTutor } from '../LaborTutor/LaborTutor';
import { ContactWorker } from '../ContactWorker/ContactWorker';
import { Location } from '../Location/Location';


// Interfaz de empresa

export interface Business {
    cif?: string,                                                        // Cif 
    name?: string,                                                       // Nombre 
    numberOfStudents?: number,                                           // Número de estudiantes
    image ?: string,                                                     // Imagen
    location ?: Location,                                                // Localización
    practises ?: Practise[],                                             // Practicas
    tutors ?: LaborTutor[],                                              // Tutores
    contactWorkers ?: ContactWorker[]                                    // Trabajadores de contacto
}
