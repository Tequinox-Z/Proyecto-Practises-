import { Administrator } from '../administrator/administrator';
import { Location } from '../Location/Location';
import { ProfessionalDegree } from '../ProfessionalDegree/ProfessionalDegree';

// Interfaz de escuela

export interface School {
    id?: number,											// Identificador de la escuela
	name?: string,											// Nombre de la escuela
	address?: string,										// Dirección de la escuela
	image?: string,											// Imagen de la escuela
	password?: string,										// Contraseña de la escuela
	administrators?: Administrator[],						// Lista de administradores 
	professionalDegrees?: ProfessionalDegree[],				// Lista de ciclos
	openingTime ?: string,									// Hora de apertura
	closingTime ?: string,									// Hora de cierre
	location ?: Location									// Localización
}
