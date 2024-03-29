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
    _id: 4,
    title: 'Engineer',
    subTitle: 'CareStack - (01/2024 - Present)',
    location: 'Bangalore, India',
    description: []
  },
  {
    _id: 3,
    title: "Software Engineer",
    subTitle: "Blackhawk Network - (03/2022 - 01/2024)",
    location: "Bangalore, India",
    description: [
      "Successfully optimized server calls to improve performance by reducing response payload size and utilizing server-side pagination techniques",
      "Developed a cutting-edge web application using Microsoft technology, resulting in a more efficient employee-query process and leveraging Azure Active Directory and Microsoft Graph API.",
      "Implemented a custom Azure web job to proactively send reminder emails for pending queries, streamlining communication for leaders.",
      "Took ownership of production deployment, creating comprehensive release plans and SQL scripts to ensure seamless integration of new features.",
      "Improved application code coverage to 75% by designing and implementing service test cases, utilizing technologies like NUnit and Moq, highlighting the application’s quality and reliability."
    ],
  },
  {
    _id: 2,
    title: "Associate Software Engineer",
    subTitle: "ThinkBridge - (12/2021 - 03/2022)",
    location: "Pune, India",
    description: [
      "Spearheaded the development of an Azure Logic App that significantly enhanced data consistency and streamlined overall operations, and created a trigger mechanism that increased the interview reschedule rate by 60%",
      "Consolidated expertise in database management through successfully migrating SQL DB to Azure SQL DB and integrated cutting-edge third-party libraries to enhance the platform&apos;s user experience."
    ],
  },
  {
    _id: 1,
    title: "Programmer Analyst",
    subTitle: "Cognizant Technology Solutions - (11/2020 - 12/2021)",
    location: "Pune, India",
    description: [
      "Developed a robust console application that efficiently fetched records from a SQL database and dynamically generated batches of PDFs using specific templates for individual users. Implemented an automated process to transfer these PDFs to a secure SFTP location, significantly streamlining the downloading process.",
      "Orchestrated the successful implementation of a load balancer on the UAT environment. Took full responsibility for adding and configuring a new server, installing the application on IIS, and ensuring seamless integration with MSMQ. Conducted rigorous end-to-end testing to guarantee the smooth functioning of the entire application.",
      "Exhibited outstanding problem-solving skills while working closely with clients to understand their requirements. Accomplished a series of enhancements to existing functionalities, effectively resolving critical bugs and delivering fully customized solutions. Meticulously prepared comprehensive documentation to ensure seamless understanding and ease of future project maintenance."
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    title: "Cozy Comfort",
    des: "Created a fully functional e-commerce web application that allows users to browse and purchase products. Integrated with Stripe, for payment gateway and utilized MongoDB as the data storage solution, ensuring that the website remains reliable and scalable.",
    src: "/assets/cozy-comfort.png",
    websiteLink: "https://vrajshah-ecommerce.vercel.app",
    githubLink: "https://github.com/Vraj9799/Cozy-Comfort"
  },
  {
    title: "Blog Application",
    des: "I developed a comprehensive blog application that enables users to create, comment on, and explore various blogs categorized by topic. Utilizing React for the frontend, Java Spring Boot for the backend, and MySQL for the database, this application ensures seamless user experience and efficient data management. With a user-friendly interface and robust functionality.",
    src: "/assets/Blog_Application.png",
    websiteLink: "https://drive.google.com/file/d/16BuZIoShKz3HFJj4sx9DBhP3Fy1_7prO/view?usp=share_link",
    githubLink: "https://github.com/Vraj9799/Blog-Application"
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
  frontend: ["HTML", "CSS", "Javascript", "Typescript", "ReactJS", "NextJS","Angular"],
  backend: [
    "C#",
    "ASP.NET Core",
    "Java",
    "Spring Boot",
    "Microservices",
    "SQL",
    "Hibernate",
    "Entity Framework Core",
    "Azure",
  ],
};

export const bestSkills = [
  'C#', 'ASP.NET Core', 'Microservices', 'Angular', 'SQL', 'Azure'
];

export const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;
