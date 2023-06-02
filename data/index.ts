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
    title: "Skills",
    link: "skills",
  },
  {
    _id: 1004,
    title: "Projects",
    link: "projects",
  },
  {
    _id: 1005,
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
    title: "Blog Application",
    des: "I developed a comprehensive blog application that enables users to create, comment on, and explore various blogs categorized by topic. Utilizing React for the frontend, Java Spring Boot for the backend, and MySQL for the database, this application ensures seamless user experience and efficient data management. With a user-friendly interface and robust functionality.",
    src: "/assets/Blog_Application.png",
    websiteLink: "https://drive.google.com/file/d/16BuZIoShKz3HFJj4sx9DBhP3Fy1_7prO/view?usp=share_link",
    githubLink: "https://github.com/Vraj9799/Blog-Application"
  },
  {
    title: "VS Books",
    des: "The project utilized React.js for the frontend, Express.js for the backend, MongoDB as the database, and Stripe for payment processing. It included features such as product catalogs, filters, shopping carts, checkout, and an admin portal for easy management, resulting in a robust and user-friendly e-commerce website.",
    src: "/assets/VSBooks.png",
    githubLink: "https://github.com/Vraj9799/ECommerce-App",
  },
  {
    title: "Retail Banking System",
    des: "A web app was built with 6 microservices and 1 MVC app using Microservice Architecture. API Gateway performance was improved by JWT Authentication and Authorization, while server and client-side validations were implemented. 90% code coverage was achieved using NUnit and Moq for unit testing.",
    src: "/assets/RetailBankingSystem.jpg",
  },
  {
    title: "QnA",
    des: "The Q&A web app was developed using ASP.NET MVC, allowing users to ask questions and receive community answers. Categories and authentication were included, and users could upvote/downvote answers. The project resulted in a functional and user-friendly application.",
    src: "/assets/QA.png",
    githubLink: "https://github.com/Vraj9799/StackOverflowClone",
  },
  {
    title: "Todo App",
    des: "A todo app was created using React and Firebase for authentication and storage. Users could create, edit, and delete tasks with real-time updates. The Firebase Authentication service was implemented for security. The end result is an efficient and user-friendly application.",
    src: "/assets/TodoApp.png",
    websiteLink: "https://vraj-todo.netlify.app/",
    githubLink: "https://github.com/VRAJ9799/Todo-App",
  },
];

export const skills = {
  frontend: ["HTML", "CSS", "Javascript", "Typescript", "ReactJS", "NextJS"],
  backend: [
    "C#",
    "ASP.NET Core",
    "Java",
    "Spring Boot",
    "Maven",
    "SQL",
    "Hibernate",
    "Entity Framework Core",
    "Azure",
  ],
};

export const bestSkills = [
  "JavaScript",
  "C#",
  "ASP.NET Core",
  "Java",
  "Spring Boot",
  "SQL",
];

export const resumeLink = "https://drive.google.com/file/d/1G_QHn8gNxqOGChV1g2cam8BN_Fj6a2E1/view?usp=sharing";
