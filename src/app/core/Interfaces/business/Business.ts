import { Practise } from '../Practise/Practise';
import { LaborTutor } from '../LaborTutor/LaborTutor';
import { ContactWorker } from '../ContactWorker/ContactWorker';
import { Location } from '../Location/Location';
// Interfaz de empresa

export interface Business {
    cif?: string,                                                        // Cif 
    name?: string,                                                       // Nombre 
    numberOfStudents?: number,
    image ?: string,                                        // Número de estudiantes
    location ?: Location,
    practises ?: Practise[],
    tutors ?: LaborTutor[],
    contactWorkers ?: ContactWorker[]
}
