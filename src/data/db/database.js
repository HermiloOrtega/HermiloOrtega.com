import Mock from "../mock";

const database = {
  information: {
    name: 'Hermilo Ortega',
    aboutContent: "I am an Energetic Software Engineer with 6+ years of experience helping companies to reduce time, costs and effort automating processes through high-performance web technologies, implementing advanced methodologies to manage business according to their needs.",
    age: 30,
    phone: '(236) 878 1239',
    nationality: 'Mexican',
    language: 'Spanish, English',
    email: 'hermilo.jh@gmail.com',
    address: '567 Clarke Rd, Coquitlam',
    freelanceStatus: 'Available',
    socialLinks: {
      github: 'https://github.com/HermiloOrtega',
      facebook: 'https://www.facebook.com/josehermilo1',
      // twitter: 'https://twitter.com/Hermilo_O_Mtz',
      linkedin: 'https://www.linkedin.com/in/hermiloortega/',
      instagram: 'https://www.instagram.com/hermilomtz/'
      // ,
      // pinterest: 'https://www.pinterest.es/hermilojh',
      // behance: 'https://www.behance.net/HermiloMartinez',
      // dribbble: ''
    },
    brandImage: '/images/Hermilo-Ortega.png',
    aboutImage: '/images/about-image.png',
    aboutImageLg: '/images/about-image-lg.png',
    cvfile: '/files/Jose_Hermilo_Ortega_Martinez_Resume.pdf'
  },
  services: [
    {
      title: "Software Engineer",
      icon: 'code',
      details: "Development of Windows Form Application using the best practices, patterns and technologies with C# and MSSQL"
    },
    {
      title: "Web Development",
      icon: 'code-alt',
      details: "Website and Web Application Development using ASP.NET Core, ASP.NET, C#, MSSQL, Php, MySql, Js, Html, Css"
    },
    {
      title: "Wordpress Developer",
      icon: 'wordpress',
      details: "WordPress Website Development, Themes and Plugins Customization using Php, MySQL, Html, Css and Java Script"
    },
    {
      title: "E-Commerce",
      icon: 'cart',
      details: "WordPress E-Commerce Development, Themes and Plugins Customization using Php, MySQL, Html, Css and Java Script"
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Hermilo is very knowledgeable in web development. He utilizes his high technical skills and a can do personality to provide exceptional service. It was a pleasure working with Hermilo!",
      author: {
        name: 'Rohan Sambandam CPA, CMA',
        designation: ''
      }
    },
    {
      id: 2,
      content: "Hermilo has been developing my website and E-Commerce for my business in Mexico, He has been a great person with very good atention to the details and friendly",
      author: {
        name: 'Cristela Berenice',
        designation: 'Web Developer, Inlab Mexico'
      }
    },
    {
      id: 3,
      content: "Hermilo Developed 2 website (1 E-Commerce) for my couple Years ago and I'm more than happy to say that is a pleasure to work with him. Always with an smaile and great attitude to work",
      author: {
        name: 'Paulo Cesar Ortiz',
        designation: 'Business Website (English and Tours) and E-Commerce Develiopment (MrCachuchero)'
      }
    },
    {
      id: 4,
      content: "I have been working with Hermilo for the past 3 years to develop 2 E-Commerce for my businesses, Hermilo has been always a very attent person to all my requirements, always deliverying all project on time.",
      author: {
        name: 'Jose Barrera',
        designation: 'E-Commerce Develiopment (LineUp Boutique and Globos Toys Ericka)'
      }
    }
    // ,
    // {
    //   id: 4,
    //   content: "working with Hermilo has been a really good experience and I'm more than happy that he could develop my Web Application for my Building Management Business, I'm more than satisfy that he helpe me with this project and also to keep my existing website updated and running.",
    //   author: {
    //     name: 'Fernando Aguilar',
    //     designation: 'Web Application Development (Building Management)'
    //   }
    // }
  ],
  hobies: [
    {
      title: "Photography",
      icon: 'camera',
      details: "I have been taking photos for the past 5+ Years for Mexico, USA and Canada"
    },
    {
      title: "Flag Fotball",
      icon: 'flag-alt',
      details: "One of my favourites sports nowadays, 3+ yrs of experience"
    },
    {
      title: "Softball",
      icon: 'cup',
      details: "2+ years of experience playing in different tournaments in mexico"
    }
  ],
  skills: [
    {
      title: "C#",
      value: 95
    },
    {
      title: "Microsoft SQL Server",
      value: 90
    },
    {
      title: "ASP.Ner Core",
      value: 70
    },
    {
      title: "ASP.Net 5",
      value: 85
    },
    {
      title: "Php",
      value: 80
    },
    {
      title: "MySQL",
      value: 90
    },
    {
      title: "Html",
      value: 85
    },
    {
      title: "Java Script",
      value: 65
    },
    {
      title: "Css",
      value: 80
    },
    {
      title: "WordPress",
      value: 85
    }
  ],
  portfolios: [
    // {
    //   id: 1,
    //   title: "Building Management Web App",
    //   subtitle: "A Web App to Control and Manage Tenants Reports, cases, mailing delivery, email notifications and calendar.",
    //   imageUrl: "/images/portfolio-image-1.jpg",
    //   largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
    //   url: ''
    // },
    {
      id: 1,
      title: "Suministros y Servicios del Norte",
      subtitle: "Development of a WordPress Website to show all the services that Suministros y Servicios del Norte Offers",
      imageUrl: "/images/portfolio-image-suministrosyserviciosdelnorte.png",
      url: 'https://ssnmx.com'
    },
    {
      id: 2,
      title: "English and Tours",
      subtitle: "Development of a WordPress Website to show all the products offered to the clients for Traveling.",
      imageUrl: "/images/portfolio-image-englishandtours.png",
      url: 'https://englishandtours.com'
    },
    {
      id: 3,
      title: "InLab Mexico",
      subtitle: "Development of a WordPress Website to show all the products offered to the clients for Laboratory insumes.",
      imageUrl: "/images/portfolio-image-4.jpg",
      // largeImageUrl: [
      //   "/images/portfolio-image-1-lg.jpg",
      //   "/images/portfolio-image-4-lg2.jpg"
      // ],
      imageUrl: "/images/portfolio-image-inlabmexico.png",
      url: 'https://inlabmexico.com'
    },
    {
      id: 4,
      title: "Working4U",
      subtitle: "Management, Maintenance and Development of WordPress Pages",
      imageUrl: "/images/portfolio-image-working4u.png",
      url: 'https://working4ubc.ca'
    },
    {
      id: 5,
      title: "Line Up Boutique",
      subtitle: "Development of a WordPress E-Commerce with the intention to show all the products offered by Line Up Boutique",
      imageUrl: "/images/portfolio-image-lineupboutique.png",
      url: 'https://lineupboutique.com'
    },
    {
      id: 6,
      title: "Mr Cachuchero",
      subtitle: "Development of a WordPress E-Commerce with the intention to show all the products offered by Mr Cachuchero",
      imageUrl: "/images/portfolio-image-mrcachuchero.png",
      url: 'https://mrcachuchero.com'
    },
    {
      id: 7,
      title: "Globos Toys Ericka",
      subtitle: "Development of a WordPress E-Commerce with the intention to show all the products offered by Globos Toys Ericka",
      imageUrl: "/images/portfolio-image-globostoysericka.png",
      url: 'https://globostoysericka.com'
    },
    {
      id: 8,
      title: "Fasedem",
      subtitle: "Management, Maintenance and Development of WordPress Pages",
      imageUrl: "/images/portfolio-image-fasedem.png",
      url: 'https://fasedem.com'
    },
    {
      id: 9,
      title: "B&O - Integration",
      subtitle: "",
      imageUrl: "/images/portfolio-image-BEOIntegration.png",
      url: 'https://integration.bang-olufsen.com'
    },
    {
      id: 10,
      title: "BeoCanada",
      subtitle: "",
      imageUrl: "/images/portfolio-image-BEOVancouver.png",
      url: 'https://beocanada.ca'
    },
    {
      id: 11,
      title: "Prime One Living",
      subtitle: "",
      imageUrl: "/images/portfolio-image-PrimeOneLiving.png",
      url: 'https://primeoneliving.com'
    },
    {
      id: 12,
      title: "Burquitlam TownHomes",
      subtitle: "",
      imageUrl: "/images/portfolio-image-BurquitlamTownhomes.png",
      url: 'https://burquitlamtownhomes.com'
    },
    {
      id: 13,
      title: "Evermark Real Estate - Projects",
      subtitle: "",
      imageUrl: "/images/portfolio-image-ProjectsEvermarkRealEstateGroup.png",
      url: 'https://projects.evermarkrealestate.ca'
    },
    {
      id: 14,
      title: "Private Pension Partners",
      subtitle: "",
      imageUrl: "/images/portfolio-image-PrivatePensionPartners.png",
      url: 'https://privatepensionpartners.com'
    },
    {
      id: 15,
      title: "Private Pension Partners - Invest",
      subtitle: "",
      imageUrl: "/images/portfolio-image-InvestPrivatePensionPartners.png",
      url: 'https://invest.privatepensionpartners.com'
    },
    {
      id: 16,
      title: "Empress Chilliwack",
      subtitle: "",
      imageUrl: "/images/portfolio-image-EmpressChilliwack.png",
      url: 'https://empresschilliwack.com'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "Jul 2020 - Present",
        position: "Web Developer / System Administrator",
        company: "Epic Inspired",
        details: "• Plan, organize and produce web design concepts for clients in different areas." + 
                "• Implement new methodologies and procedures which help in the processing of information, workflow and daily jobs." + 
                "• Implement new policies, procedures and formats for development of software and software security in the company." + 
                "• Design and programming of Query used in the database using the best practices to performance in the best way." + 
                "• Complete planning, analysis, design, development and execution of the system, web applications" + 
                "• End-user support and training to answer questions or solve any issue about systems." + 
                "• Research and review a variety of software, websites, and other interactive/new media" + 
                "• Plan, design, write, modify, integrate and test website related code" + 
                "• Design the flow, layout, and look of the website or application" + 
                "• Make decisions on what is needed for the hardware and software" + 
                "• Prepare wireframes, design mock-ups and storyboards to show others how the website will look throughout the development process, and get approval" + 
                "• Communicate the decisions made about how the website will look and work"
      },
      {
        id: 2,
        year: "Jan 2020 - Present",
        position: "Full Stack Software Developer",
        company: "Jucod IT Company · Self-employed",
        details: "• Help companies to reduce time, costs and effort by automating processes through high-performance web technologies and implementing advanced methodologies to manage business according to their needs."
      },
      {
        id: 3,
        year: "Mar 2019 - Jul 2020 · 1 yr 5 mos",
        position: "Team Manager",
        company: "Spanish Banks East Concession",
        details: "• Improve the operations time with the implementation of new methodologies in the front desk, kitchen and storage, increase the productivity of employees and teamwork, reducing time lost and disorganization." + 
                "• Implemented new methodologies with the management of the food, beverages and products." + 
                "• Attention to customers and suppliers to answer questions and solve any complaints."
      },
      {
        id: 4,
        year: "Aug 2019 - Dec 2019 · 5 mos",
        position: "Full Stack Software Developer",
        company: "10 STAR",
        details: "• Improve the management and control of contracts, events and budgets of the company developing a high-quality internal web application implementing new frameworks and methodologies in the process." + 
        "• Complete planning, analysis, design, development and execution of the system." + 
        "• Design and programming of Query used in the database using the best practices."
      },
      {
        id: 5,
        year: "Jun 2013 - Dec 2018 · 5 yrs 7 mos",
        position: "Senior Software Engineer",
        company: "Altos Hornos de Mexico S.A.B. de C.V",
        details: "• Reduced the time of operations, enforce and money lost of different departments of the company developing more than 10 high-quality and reliable internal software in different platforms. " + 
                "• Improved the performance of 10 additional internal software previously developed by other developers, implementing new methodologies and algorithms which help in the processing of the information." + 
                "• Design and programming of Query used in the database using the best practices." + 
                "• Complete planning, analysis, design, development and execution of the system." + 
                "• Creation and coordination of reports, policies, formats, system manuals, and meetings. " + 
                "• End-user support and training to answer questions or solve any issue about systems."
      },
      {
        id: 6,
        year: "Jun 2011 - Dec 2011 · 7 mos",
        position: "Software Engineer Intern",
        company: "Altos Hornos de Mexico S.A.B. de C.V",
        details: "• Helped create and improve efficient and reliable internal website to show the agreements and benefits to employees with city businesses" + 
                "• End-user support and training to answer questions or solve any issue about systems."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2020 - 2022",
        graduation: "Diploma, Web and Mobile Application Development",
        university: "Cornerstone International Community Collage of Canada",
        details: ""
      },
      {
        id: 2,
        year: "2016 - 2017",
        graduation: "Master's Degree, Software Engineering",
        university: "IEU Universidad",
        details: ""
      },
      {
        id: 3,
        year: "2014 - 2016",
        graduation: "Master's Degree, Leadership and Management",
        university: "Universidad Autonoma del Noreste",
        details: ""
      },
      {
        id: 4,
        year: "2009 - 2013",
        graduation: "Bachelor's Degree, Computer Science",
        university: "Instituto Tecnológico Superior de Monclova 'Ejército Mexicano'",
        details: ""
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+012-3456-7891', '+012-3456-7892'],
    emailAddress: ['admin.sitename@example.com', 'info.sitename@example.com'],
    address: "121 King Street, Melbourne, Victoria 3000, Australia"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/hobies").reply(config => {
  const response = database.hobies;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});