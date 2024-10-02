"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I am a passionate and dedicated software developer with over 4 years of experience in creating innovative software solutions. My expertise encompasses a wide range of programming languages, including C#, Java, Python, and JavaScript, as well as popular frameworks like React, Angular, and Django. I thrive on tackling complex challenges and enjoy collaborating with teams to bring ideas to life. Currently, I work as a freelance full stack developer, where I enjoy the flexibility to engage with diverse projects and clients, allowing me to continuously learn and adapt. My commitment to delivering high-quality, user-centered applications drives my work, and I take pride in crafting solutions that not only meet technical requirements but also enhance user experiences. Outside of coding, I’m always eager to explore new technologies and stay updated on industry trends, as I believe that continuous learning is key to success in this ever-evolving field.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mohamed Awad",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+33)780 244 429",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sudanese",
    },
    {
      fieldName: "Email",
      fieldValue: "melgid@list.ru",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Arabic, Russian",
    },
  ],
};

// Experience data
const experience = {
  icon: "/",
  title: "My experience",
  description:
    "As a dedicated software developer with 4+ years of experience, I specialize in designing, implementing, and maintaining innovative software solutions. My expertise spans various programming languages, including C#, Java, Python, JavaScript, and frameworks such as React, Angular, Django.",
  items: [
    {
      company: "VTB24",
      position: "Full Stack Developer",
      duration: "2020 - 2024",
    },
    {
      company: "Upwork",
      position: "Freelance Full Stack Developer",
      duration: "2024 - present",
    },
  ],
};

// Education data
const education = {
  icon: "/",
  title: "My education",
  description:
    "I hold a Bachelor of Science in Computer Science and Technology from Kazan National Research Technological University, where I built a strong foundation in programming, algorithms, and software development. My academic journey was enriched by hands-on projects that fostered critical thinking and problem-solving skills. To further my expertise, I completed several specialized courses: a Data Machine Learning Specialization on Coursera, where I learned advanced machine learning techniques and predictive modeling; and a Data Analytics course that focused on data visualization and statistical analysis, enabling me to derive actionable insights from complex datasets. I also enhanced my web development skills through Codecademy, completing a Front-end Track to master HTML, CSS, and JavaScript, followed by a Full Stack Development Bootcamp that integrated both front-end and back-end technologies, allowing me to build comprehensive web applications. This blend of formal education and specialized training has equipped me with a diverse skill set in technology and data science.",
  items: [
    {
      institution: "Kazan National Research Technological University",
      degree: "BSc Computer Science and Technology",
      duration: "2017 - 2021",
    },
    {
      institution: "Coursera",
      degree: "Data Machine Learning Specialization",
      duration: "2024",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Codecademy",
      degree: "Full Stack Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Coursera",
      degree: "Data Analytics",
      duration: "2024",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description:
    "I possess a robust skill set in web development and design, including proficiency in HTML5 and CSS3 for creating responsive and structured web pages, and JavaScript for adding interactivity. I am experienced in building dynamic user interfaces with React.js and leveraging Next.js for server-side rendering and enhanced performance. My expertise extends to Tailwind CSS for rapid styling and Node.js for backend development, allowing me to create scalable RESTful APIs. Additionally, I use Figma for UI/UX design, enabling me to create visually appealing and user-centric interfaces. This combination of front-end and back-end skills equips me to deliver cohesive and impactful web applications.",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skilllist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
