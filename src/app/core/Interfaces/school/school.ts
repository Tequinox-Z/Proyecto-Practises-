import { Administrator } from '../administrator/administrator';
import { ProfessionalDegree } from '../professionalDegree/professional-degree';

export interface School {
    id?: number,
	name?: string,
	address?: string,
	image?: string,
	password?: string,
	administrators?: Administrator[],
	professionalDegrees?: ProfessionalDegree[]
}
