import { IProfessionalProject } from 'src/app/shared/models/professional-project.interface';
import { Tuple } from 'src/app/shared/models/tuple.interface';

export class ProfessionalProjectsData {
    public static ProfessionalProjects: IProfessionalProject[] = [
        {
            title: 'JobAdder',
            imageLink: 'assets/projects/jobadder.png',
            description: [
                'Full-Stack end to end development',
                'Proactive leading of a SCRUM/Agile development team of 8 people - facilitating and measuring the efficiency of all team processes',
                'Responsible for the team\'s planned delivery of product backlogs',
                'Effective collaboration with all development stakeholders, conveying technical initiatives, strategy and technology roadmaps',
                'Proposal and implementation of viable processes and measurements of solutions within the squad. Research of external processes and creating proposals of adoption strategies',
                'Responsibility of formal mentoring and facilitating career development via regular one on ones to all squad members',
                'Simplifying recruitment by working on a next-generation cloud-based SAAS web product for recruiters and candidates across the world',
            ],
            projectSkills: [
                'Angular 2+',
                'ASP.NET Web API',
                'MVC',
                'C#',
                'MS SQL',
                'AWS',
                'Soon-To-Be Microservices',
                'Leadership',
                'Team efficiency',
                'Formal mentoring',
                'Delivery'
            ],
            company: 'JobAdder',
            experience: [
                <Tuple<string, string>>{
                    key: 'Acting Development Manager',
                    value: '2 months - present'
                },
                <Tuple<string, string>>{
                    key: 'Full-Stack Software Developer',
                    value: '7 months'
                }
            ]
        },
        {
            title: 'Helix',
            imageLink: 'assets/projects/helix.png',
            description: [
                'Full-Stack end to end development',
                'Actively involved in a SCRUM/Agile development environment - contributing to the planning, sizing, development and delivery of product backlogs',
                'Carried out effective communication between management, product, design and other development squads',
                'Enabling ideal healthcare by working on a next-generation cloud-based SAAS web product for doctors and medical practitioners',
            ],
            projectSkills: [
                'Angular 2+',
                'ASP.NET Web API',
                'C#',
                'MS SQL',
                'Microsoft Azure'
            ],
            company: 'MedicalDirector',
            experience: [
                <Tuple<string, string>>{
                    key: 'Junior Software Engineer',
                    value: '18 months'
                }
            ]
        }, {
            title: 'Royal Box Software Solution',
            imageLink: 'assets/projects/rbs.png',
            description: [
                'Initiated the proposal and design of an automated industry-specific business process',
                'Developed and delivered a scaling software solution for known changes in future requirements',
                'Enabled a reduction in staff error and saving hours of weekly managerial time for supervisors',
            ],
            projectSkills: [
                'C#',
                'WinForms',
            ],
            company: 'Capitol Theatre',
            experience: [
                <Tuple<string, string>>{
                    key: 'Software Developer',
                    value: '3 months'
                }
            ]
        }
    ]
}