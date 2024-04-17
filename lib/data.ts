import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nvnMusicImg from "@/public/nvnMuusic.png";
import chatapplicationProject from "@/public/chatapplicationproject.png";
import discrodproject from "@/public/discordproject.png";
import spotifyproject from "@/public/spotifyproject.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },

  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "NVN Music",
    description:
      "An online music applicaion that allows users to listen to music from an external API. The main focus of this project was redux and frontend development.",
    tags: ["React", "Jio Saavn API", "Redux", "Tailwind", "Axios"],
    imageUrl: nvnMusicImg,
  },
  {
    title: "Spotify Clone",
    description:
      "An online full-stack spotify clone. User can upload songs, listen to them and add them to their playlist.",
    tags: ["React", "Javascript", "MongoDB", "Tailwind", "Express JS"],
    imageUrl: spotifyproject,
  },
  {
    title: "Chat Application",
    description:
      "A full-stack chat application. User can login, search users, and chat with other users .",
    tags: ["Next JS", "React", "Javascript", "Tailwind", "Firebase"],
    imageUrl: chatapplicationProject,
  },
  {
    title: "Discord Clone",
    description: "A Discord clone using Next JS .",
    tags: ["React", "Next.js", "SQL", "Tailwind", "ShadCN"],
    imageUrl: discrodproject,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
