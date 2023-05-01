interface NavItem {
  _id: number;
  title: string;
  link: string;
}
interface WorkExperienceItem {
  _id: number;
  title: string;
  subTitle: string;
  location: string;
  description: string[];
}

interface ProjectItem {
  title: string;
  des: string;
  src?: string;
  githubLink?: string;
  websiteLink?: string;
}
export const navLinks: NavItem[] = [
  {
    _id: 1001,
    title: "About",
    link: "about",
  },
  {
    _id: 1002,
    title: "Experience",
    link: "experience",
  },
  {
    _id: 1003,
    title: "Projects",
    link: "projects",
  },
  {
    _id: 1004,
    title: "Contact",
    link: "contact",
  },
];

export const workExperiences: WorkExperienceItem[] = [
  {
    _id: 3,
    title: "Software Engineer",
    subTitle: "Blackhawk Network - (03/2022 - Present)",
    location: "Bangalore, India",
    description: [
      "Developed various functionality based on the business requirements.",
      "Improving performance of various pages by around 80% using best practices like optimizing server calls, decreasing response payload, etc.",
      "Handling deployment in different environments and preparing release plan for the smooth deployment process.",
      "Developed an Azure web job for email monitoring in the internal project.",
      "Worked in developing an QnA application in teams for India SDC .",
      "Performed Unit testing for various business modules using Nunit.",
    ],
  },
  {
    _id: 2,
    title: "Associate Software Engineer",
    subTitle: "ThinkBridge - (12/2021 - 03/2022)",
    location: "Pune, India",
    description: [
      "Developed an Azure Logic App which runs at specific intervals for data sync between SenseHq and sql Server Database.",
      "Developed an endpoint that helps to notify the candidate's absence in an interview via mail/sms, thereby increasing the interview reschedule rate by 80%.",
      "Performed Unit testing for various business modules using Xunit and Moq",
      "Used third-party libraries such as SenseHq, and Xenqu to integrate the features and functionalities.",
      "Prepare SQL scripts to migrate on-premises SQL database to Azure SQL database.",
    ],
  },
  {
    _id: 1,
    title: "Programmer Analyst",
    subTitle: "Cognizant Technology Solutions - (11/2020 - 12/2021)",
    location: "Pune, India",
    description: [
      "Worked on the customer requirement and enhanced the code and deployed the same in IIS and services.",
      "Conducted testing protocols to evaluate the level of mobile responsiveness, download speed, and overall functionality of the website.",
      "Developed a new console application for archiving the existing data for migration purposes.",
      "Created a new server setup and deployed the application and other prerequisites.",
      "Involved in all team-related activities and provided the solution.",
      "Prepared project-related documents and manage same for future.",
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    title: "VS Books",
    des: "The project is built using the React.js library for the front-end, Express.js as the back-end, and Stripe for payment processing. The website typically includes features like product catalogs, shopping carts, checkout process, and payment process!",
    githubLink: "https://github.com/Vraj9799/ECommerce-App",
  },
];
