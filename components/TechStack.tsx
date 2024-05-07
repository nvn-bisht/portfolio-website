"use client";

import TechCard from "./TechCard";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

interface TechStackProps {}

const TechStack = ({}: TechStackProps) => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className=" scroll-mt-28 mb-28 max-w-[80rem] col-span-2  md:col-span-2 lg:col-span-3"
    >
      <SectionHeading>What I know</SectionHeading>
      <p className="text-xl text-center max-w-600 text-secondary">
        Here are some of my skills on which I have been working on for the past
        3 years.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <TechCard
            title="Frontend"
            className=""
            tech={[
              {
                name: "HTML",
                image:
                  "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
              },
              {
                name: "CSS",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
              },
              {
                name: "Typescript",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201",
              },
              {
                name: "Javascript",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
              },
              {
                name: "Tailwind",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042",
              },
              {
                name: "React Js",
                image:
                  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
              },
              {
                name: "Next Js 14",
                image:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
              },
              {
                name: "Framer",
                image:
                  "https://cdn.iconscout.com/icon/free/png-512/free-framer-3628781-3030143.png?f=webp&w=256",
              },

              {
                name: "Redux",
                image:
                  "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
              },
            ]}
          />
        </div>

        <div className="">
          <TechCard
            title="Backend"
            className="min-h-[284px]"
            tech={[
              {
                name: "Node Js",
                image:
                  "https://cdn.iconscout.com/icon/free/png-512/free-node-js-1174925.png?f=webp&w=256",
              },
              {
                name: "Express Js",
                image:
                  "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
              },
              {
                name: "Nest Js",
                image: "https://nestjs.com/logo-small-gradient.76616405.svg",
              },
              {
                name: "GraphQL",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
              },
              {
                name: "Next Auth",
                image:
                  "https://next-auth.js.org/img/logo/logo-sm.png",
              },
              {
                name: "Sequelize",
                image: "https://sequelize.org/img/logo.svg",
              },
              {
                name: "Clerk",
                image:
                  "https://cdn.sanity.io/images/o0o2tn5x/production/2399b991025c365aafaa6fca85d91deac801e654-1046x1046.png",
              },
            ]}
          />
        </div>

        <div>
          <TechCard
            title="Database"
            className=""
            tech={[
              {
                name: "MySql",
                image: "https://pngimg.com/uploads/mysql/mysql_PNG9.png",
              },
              {
                name: "MongoDB",
                image:
                  "https://cdn.iconscout.com/icon/free/png-512/free-mongodb-3521676-2945120.png?f=webp&w=256",
              },
              {
                name: "PostgreSQL",
                image:
                  "https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_original_wordmark_logo_icon_146392.png",
              },
              {
                name: "Zod",
                image: "https://zod.dev/logo.svg",
              },
              {
                name: "Redis",
                image: "https://www.pngrepo.com/download/303460/redis-logo.png",
              },
              {
                name: "Prisma",
                image:
                  "https://seeklogo.com/images/P/prisma-logo-3805665B69-seeklogo.com.png",
              },
            ]}
          />
        </div>

        <div className="">
          <TechCard
            title="Others"
            className=""
            tech={[
              {
                name: "Linux",
                image:
                  "https://th.bing.com/th?id=OSK.975a9c7d8b6395ef609f5fb5e47123d5&w=46&h=46&c=11&rs=1&qlt=80&o=6&dpr=2&pid=SANGAM",
              },
              {
                name: "Kubernetes",
                image:
                  "https://th.bing.com/th/id/OIP.HbJxuUZ_VQKORqzLtj-CIwHaHa?rs=1&pid=ImgDetMain",
              },
              {
                name: "GIT",
                image:
                  "https://th.bing.com/th/id/OIP.Xa0BEkwl0Zx4qnY9lMbD7gHaHa?rs=1&pid=ImgDetMain",
              },
              {
                name: "Docker",
                image:
                  "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3253696/docker-icon-icon-md.png",
              },
              {
                name: "Ansible",
                image:
                  "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3269501/ansible-icon-md.png",
              },
              {
                name: "AWS",
                image:
                  "https://th.bing.com/th/id/OIP.Sd4Hxz8_CqID29kyj5-k9wHaEc?rs=1&pid=ImgDetMain",
              },
              {
                name: "JQuery",
                image:
                  "https://th.bing.com/th/id/R.9999c1a8c347b81c5cb5df967664c4c3?rik=FHsenlk6erszpg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fjquery-logo-png--800.gif&ehk=gsP%2bp%2brVzzjyjQeEjqAhY1ODCpzk5LsWcq2W9rIaTQs%3d&risl=&pid=ImgRaw&r=0",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
