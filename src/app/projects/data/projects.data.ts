import { IProject } from '../../shared/models/project.interface';

export class ProjectsData {
    public static Projects: IProject[] = [
        {
            title: 'Cryptocurrency trading bot',
            imageLink: 'assets/projects/crypto.jpg',
            description: [
                'Inception and creation of a trading bot',
                'Utilised online public API\'s to capture data and vectors of information',
                'Leveraging pre-processing of analytics, post-processing of analytics and building artificial intelligence models via captured data',
                'Integrated with third-party online trading systems via Web API\'s to execute trade deals',
                'Architected algorithms to distinguish changes in future captured data to maximise AI model prediction accuracy',
                'Built for compliance, managing and logging all transactions and necessary information for proper tax declarations',
                'Designed to run with minimal RAM utilisation and low processing power',
                'Runs off a RaspberryPI with minimal-to-no electricity cost'
            ],
            projectSkills: [
                'C# .Net Core',
                'Weka - analytics pre-processing and machine learning effeciency',
                'ML.NET artificial intelligence',
                'Depoloyment and continual execution of code via Raspberry PI',
            ]
        },
        {
            title: 'Roma Bush Gardens community website',
            imageLink: 'assets/projects/rbg.jpg',
            description: [
                'Inception and creation of a community website for a rural QLD environmental conservational gardening society',
                'Built on a serverless model, enabling a cost-effective website hosting solution',
                'Taught members of the gardening society how to dynamically add/change website content into the firebase database without any re-deployment of code',
                'Helping the town of Roma by attracting tourism to the rural QLD bush gardens, offering virtual audio-guides and information on local fauna & flora while walking around the gardens'
            ],
            url: 'https://www.roma-bush-gardens.firebaseapp.com',
            projectSkills: [
                'Angular 2+',
                'Google Firebase (sub-division of Google Cloud)',
                'Node.js',
            ]
        },
        {
            title: 'MIT Self-Driving Racecar',
            imageLink: 'assets/projects/racecar.JPG',
            description: [
                'Group collaboration to engineer a self-driving autonomous vehicle',
                'Applied the software development lifecycle in an XP/Agile methodology',
                'Leveraged knowledge of artificial intelligence to achieve machine vision via optical algorithms and convolutional neural networks',
            ],
            projectSkills: [
                'Python',
                'Python AI libraries such as TensorFlow / Keras',
                'Google Cloud',
                'Working with RaspberryPi\'s and Nvidia Jetson TX2\'s',
            ]
        }
    ]
}