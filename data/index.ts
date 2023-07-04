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
      "As part of my work on performance improvement, I've had great success optimizing server calls through a strategic approach. I focus on segregating and retrieving necessary details first, which in turn decreases response payload size and makes server-side pagination even more effective. Additionally, Redis cache comes in really handy. I use it as often as possible to further improvise the overall efficiency of the system.",
      "Key contributor in the development of a cutting-edge web application, deployed as a Teams application, that redefined the employee-query process by leveraging Microsoft technology. Utilized Azure Active Directory and Microsoft Graph API for intuitive user data modeling. Additionally, developed and implemented a custom Azure web job that proactively sent reminder emails to leaders for their pending queries.",
      "Taking full ownership of the entire production deployment, diligently prepared comprehensive release plans and SQL scripts that aided in the seamless integration of new features and functionalities. Effectively collaborated with infrastructure and database teams to ensure a smooth and efficient deployment process.",
      "Demonstrating expertise in software testing, successfully increased application code coverage to 75% by designing and implementing test cases for services, using best-in-class technologies such as NUnit and Moq. This meticulous approach to testing underscored the quality and reliability of the overall application."
    ],
  },
  {
    _id: 2,
    title: "Associate Software Engineer",
    subTitle: "ThinkBridge - (12/2021 - 03/2022)",
    location: "Pune, India",
    description: [
      "Spearheaded the development of an Azure Logic App that efficiently synchronized data at specific intervals between SenseHq and SQL Server DB. This groundbreaking solution significantly enhanced data consistency and streamlined overall operations.",
      "Designed and implemented a trigger mechanism that proactively notified candidates about their absence in interviews via email or SMS. As a result of this strategic innovation, the interview reschedule rate increased by a remarkable 60%.",
      "Leveraged the power of cutting-edge third-party libraries, including SenseHq and Xenqu, to seamlessly integrate advanced features and functionalities into the application. This implementation enhanced user experience and delivered an intuitive platform for users.",
      "Consolidated expertise in database management through the successful migration of SQL DB to Azure SQL DB. Developed and modified essential SQL scripts to efficiently handle schemas, views, functions, stored procedures, and triggers. This pivotal effort ensured a smooth transition."
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

export const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;
