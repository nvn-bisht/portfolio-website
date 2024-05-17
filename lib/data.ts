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

export const educationData = [
  {
    title: "High-School",
    location: "SGRR Public School, Dehradun, UK",
    description:
      "I completed my high-school with 88% grade from Shri Guru Ram Rai Public School, Bindal, Dehradun.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Intermediate",
    location: "SGRR Public School (PCM with CS)",
    description:
      "I completed my intermediate education with 85% grade from Shri Guru Ram Rai Public School, Bindal, Dehradun",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Graduation",
    location: "DAV College, Dehradun, UK",
    description:
      "I completed my graducation. I completed online courses of Javascript, React, Python, DevOps and created projects.",
    icon: React.createElement(FaReact),
    date: "2021 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "NVN Music",
    description:
      "An online music applicaion that allows users to listen to music from an external API. The main focus of this project was redux and frontend development.",
    tags: ["React", "Jio Saavn API", "Redux", "Tailwind", "Axios"],
    imageUrl: nvnMusicImg,
    link: "https://github.com/nvn152/nvnmusic",
  },
  {
    title: "Spotify Clone",
    description:
      "An online full-stack spotify clone. User can upload songs, listen to them and add them to their playlist.",
    tags: ["React", "Javascript", "MongoDB", "Tailwind", "Express JS"],
    imageUrl: spotifyproject,
    link: "https://github.com/nvn152/spotify-clone",
  },
  {
    title: "Chat Application",
    description:
      "A full-stack chat application. User can login, search users, and chat with other users .",
    tags: ["Next JS", "React", "Javascript", "Tailwind", "Firebase"],
    imageUrl: chatapplicationProject,
    link: "https://github.com/nvn152/chat-appliication",
  },
  {
    title: "Discord Clone",
    description: "A Discord clone using Next JS .",
    tags: ["React", "Next.js", "SQL", "Tailwind", "ShadCN"],
    imageUrl: discrodproject,
    link: "https://github.com/nvn152/discord-clone",
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
