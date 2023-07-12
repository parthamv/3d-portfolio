import {
  postergpt,
  Huskyhive,
  emotion,
  gameprediction,
  twitter,
  crypto,
  java,
  vertex,
  northeastern,
    cognizant,
    influencer,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    spring,
    aws,
    numpy,
    pandas,
    scikit,
    tensorflow,
    python,
    pytorch,
    nltk,
    keras
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Data Scientist",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "ML Engineer",
      icon: creator,
    }
  ];
  
  const technologies = [
    
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name:"Java",
      icon:java,
    },
   
    
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Cognizant",
      icon: cognizant,
      iconBg: "#383E56",
      date: "Feb 2021 - July 2021",
      points: [
        "Regulated periodic migration of centralized monolithic applications to cloud-based microservices using Java, Spring Boot, and Spring MVC enhancing unit testing accuracy by a margin of 36% ",
        " Overhauled and refactored modules of a live microservice developed on Spring boot, Rest APIs, and Spring MVC pattern based on functional feedback reducing traffic transactional workload by 30% ",
        "Built an API Gateway as a middleware to bolster user authorization by deploying Netflix-Eureka library",
        "Collaborated on building responsive webpages using HTML, CSS, ReactJS for a medical portal system",
        "Conducted unit and integration testing to ensure that the platform was stable and secure increasing user security by 60%",
        "Implemented data persistence and manipulation using Spring Data JPA, interacting with relational databases such as MySQL or PostgreSQL."
      ],
    },
    {
      title: "Programmer Analyst",
      company_name: "Cognizant",
      icon: cognizant,
      iconBg: "#E6DEDD",
      date: "July 2021 - Dec 2021",
      points: [
        "Developed full-stack applications using React for the front end, Node.js and Express for the server-side logic, and MongoDB for data storage.",
"Created RESTful API endpoints in Node.js and Express, handling CRUD operations to interact with the MongoDB database and provide data to the front end.",
"Implemented client-side functionality in React, including form validation, user authentication, and data rendering using React components and state management libraries like Redux or React Context.",
"Collaborated with cross-functional teams, such as designers and UX/UI specialists, to ensure seamless integration of front-end and back-end components, delivering high-quality and user-friendly applications.",
"Conducted thorough testing of the application's functionality and performance, including unit tests, integration tests, and end-to-end tests, to identify and resolve any issues or bug."
      ],
    },
    {
      title: "Research Assistant",
      company_name: "Northeastern University",
      icon: northeastern,
      iconBg: "#383E56",
      date: "June 2022 - Dec 2022",
      points: [
        "Collected and refactored local Giga word corpora data of 16,000 articles from different sources to a structured feather format improving transaction tolerance by 30%",
 "Performed extensive EDA to obtain insights regarding the correlation clusters between different dialog responses using Dendrogram and Cophenetic Correlation methods",
"Created embedding vectors and matrix for the dialog responses using Word2Vec, MBERT, Glove, Elmo methods to identify the positional dimension of dialog responses thus constructing a pipeline providing an accuracy of 71%."
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Vertex Pharmaceuticals",
      icon: vertex,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Developing a sophisticated interactive application using Python, JavaScript, and Django for SAS log analysis. Implemented advanced NLP and machine learning algorithms for automated log summarization based on comprehensive error keywords.",
        "Building a custom search engine for efficient navigation to specific log lines, utilizing parallel processing for real-time analysis of large log files",
        "Building an enterprise-grade SAS batch submission application using Python, JavaScript, React, and Redux. Developing a complex drag and drop interface with event-driven architecture, enabling precise execution of SAS files in a predefined sequence",
        "Automated batch file generation with advanced templating techniques, integrated cloud storage for optimized file handling, and employed encryption algorithms to secure job sequence information",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "HuskyHive",
      description:
        " A cutting-edge online platform designed to empower students by providing them with a comprehensive marketplace and gig solving portal.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
        {
          name:"Next.js",
          color:"blue-text-gradient",
        }
      ],
      image: Huskyhive,
      source_code_link: "https://github.com/parthamv",
    },
    {
      name: "PosterGPT",
      description:
        "An AI powered Web application that enables users to generate their own custom posters by giving their own text prompts using chat GPT and Midjourney APIs.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "express.js",
          color: "pink-text-gradient",
        },
        {
          name:"Node.js",
          color:"blue-text-gradient",
        }
      ],
      image: postergpt,
      source_code_link: "https://github.com/parthamv",
    },
    {
      name: "Video Game Rating Prediction ",
      description:
        "Implemented machine learning ensemble models to predict video game ratings based on character relevance.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pandas",
          color: "pink-text-gradient",
        },
        {
          name:"scikit-learn",
          color:"blue-text-gradient",
        },
        {
          name:"PyTorch",
          color:"green-text-gradient",
        }
      ],
      image: gameprediction,
      source_code_link: "https://github.com/parthamv",
    },
    {
      name: "Twitter Clone ",
      description:
        "A Twitter clone which can be used as a social media platform that mimics the functionality and features of the original Twitter. Users can leverage the clone for micro-blogging, networking, info-sharing, socio-interaction.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "express.js",
          color: "pink-text-gradient",
        },
        {
          name:"redux",
          color:"green-text-gradient",
        },
        {
          name:"tailwind",
          color:"blue-text-gradient",
        }
      ],
      image: twitter,
      source_code_link: "https://github.com/parthamv",
    },
    {
      name: "Video/Sound based Emotion Recognition",
      description:
        "An Emotion Recognition system using MLP classifier and VGGNet from scratch, enabling classification of sound waveforms and facial expressions in images and live videos.",
      tags: [
        {
          name: " Python",
          color: "blue-text-gradient",
        },
        {
          name: "PyTorch",
          color: "green-text-gradient",
        },
        {
          name: "Keras",
          color: "pink-text-gradient",
        },
        {
          name:"Librosa",
          color:"blue-text-gradient",
        },
        {
          name:" OpenCV",
          color:"green-text-gradient",
        }
      ],
      image: emotion,
      source_code_link: "https://github.com/parthamv",
    },
    {
      name: "MADC",
      description:
        "A python package that centralizes all cryptocurrency pricing patterns and whereabouts in one place, making it more accessible to developers working on related products as well as normal retail investors trying to make better data-backed investment decisions.",
      tags: [
        {
          name: " Python",
          color: "blue-text-gradient",
        },
        {
          name: "PyTorch",
          color: "green-text-gradient",
        },
        {
          name: "ARIMA",
          color: "pink-text-gradient",
        },
        {
          name:"numpy",
          color:"blue-text-gradient",
        },
       
        
      ],
      image: crypto,
      source_code_link: "https://github.com/parthamv",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };