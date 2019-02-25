import { ISkillGroups } from '../models/skill-groups.interface';

export class SkillGroupsData {
    public static SkillGroups: ISkillGroups[] = [
        {
            title: 'Frontend Skills',
            skills: [
                'Angular',
                'TypeScript',
                'JavaScript',
                'HTML',
                'CSS / SASS'
            ]
        }, {
            title: 'Backend Skills',
            skills: [
                '.NET (inc Core 2.2)',
                'C#',
                'Java',
                'Python',
                'SQL',
                'ASP.NET Web API',
                'Entity Framework'
            ]
        }, {
            title: 'Other Skills',
            skills: [
                'Git',
                'Test-Driven Development (TDD)',
                'Agile Methodologies',
                'Artificial Intelligence (AI)'
            ]
        }, {
            title: 'Devops',
            skills: [
                'CI/CD: Octopus / VSTS',
                'Azure',
                'Docker',
                'Kubernetes',
                'Powershell'
            ]
        }
    ]
}