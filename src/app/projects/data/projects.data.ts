import { IProjects } from '../models/projects.model';

export class ProjectsData {
    public static Projects: IProjects[] = [
        {
            title: 'Helix by MedicalDirector',
            imageLink: 'assets/helix.png',
            description: [
                'Profoundly involved in water-scrum-fall hybrid agile methodologies.',
                'Applied the software development life cycle within a squad to engineer solutions tailored to product needs.',
                'Engineering via full-stack to deliver the next-generation cloud-based SaaS web product within the medical general-practice industry.',
                'Enabling Ideal Healthcare.',
                'Project skills include: HTML, SASS/CSS, Angular, Angular.js, TypeScript, JavaScript, WebAPI, C# (.NET 4.5.2, .NET Core 2.2), Entity Framework, MSSQL, Microsoft Azure.'
            ]
        }, {
            title: 'Royal Box Software Solution',
            imageLink: 'assets/rbs.png',
            description: [
                'Initiated the proposal and design of an automated industry-specific business process.',
                'Developed and delivered a scalable software solution for known changes in future requirements.',
                'Enabled a reduction in staff error and saving hours of weekly managerial time for supervisors.',
                'Project skills include: C#, WinForms'
            ]
        }, {
            title: 'MIT Self-Driving Racecar',
            imageLink: 'assets/racecar.JPG',
            description: [
                'Group collaboration to engineer a self-driving autonomous vehicle.',
                'Applied the software development lifecycle in an XP/Agile methodology.',
                'Leveraged knowledge of artificial intelligence to achieve machine vision via convolutional neural network.',
                'Project skills include: Python2, Python3, Python AI libraries such as TensorFlow / Keras, Google Cloud, Working with RaspberryPi\'s and Nvidia Jetson TX2\'s.'
            ]
        }
    ]
}