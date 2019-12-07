import { IProject } from './project.interface';
import { Tuple } from './tuple.interface';

export interface IProfessionalProject extends IProject {
    company: string;
    experience: Tuple<string, string>[];
}