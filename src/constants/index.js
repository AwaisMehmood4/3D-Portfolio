import {
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
    finsweet,
    memberstack,
    relume,
    webflow,
    wordpress,
    Zapier
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
      title: "Webflow Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Wordpress Developer",
      icon: backend,
    }
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
      name: "Webflow",
      icon: webflow,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "memberstack",
      icon: memberstack,
    },

    {
      name: "finsweet",
      icon: finsweet,
    },

    {
      name: "relume",
      icon: relume,
    },
    {
      name: "wordpress",
      icon: wordpress,
    },
    {
      name: "Zapier",
      icon: Zapier,
    }
  ];
  
  const experiences = [
    {
      title: "Webflow Developer",
      company_name: "Youpal",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Apr 2023 - Dec 2024",
      points: [
        "Designed and developed responsive and visually engaging websites using Webflow, ensuring a seamless user experience.",
        "Collaborated closely with cross-functional teams to translate design concepts into functional websites, meeting project deadlines consistently.",
        "Implemented custom code and integrations when necessary to enhance website functionality and optimize performance.",
        "Maintained and updated existing websites, ensuring they remained current and aligned with the company's branding and objectives.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Venture Reoublic",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Feb 2023 - Jan 2024",
      points: [
        "Working as a Webflow expert in creating and maintaining websites.",
        "Involved in developing and designing custom, responsive layouts and develop complex interactions and animations.",
        "Integrated third party libraries and payment gateways.",
        "Collaborated with the marketing department to align web design and functionality with marketing strategies.",
        "Designed custom landing pages to support marketing campaigns, ensuring a seamless user experience.",
        "Integrated marketing tools and analytics platforms for data-driven marketing decisions.",
        "• Contributed to SEO optimization efforts, resulting in improved organic traffic.",
        "Working on wordpress, figma, and nextjs for company projects."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Onebyte",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Nov 2021 - Feb 2023",
      points: [
        "Worked closely with Project Managers, Team Leads and clients on change request functions as a frontend developer.",
        "Developed and maintained web application in react.",
        "Design and developed custom and responsive web applications in Web-flow and WordPress.",
        "Integrated third party libraries / tools",
        "Worked on revamping and maintaining websites.",
        "Worked in a multidisciplinary development team."
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };