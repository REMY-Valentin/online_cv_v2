import type { NextApiRequest, NextApiResponse } from "next";

interface data {
  id: number;
  name: string;
  technos: {
    name: string;
    size: number;
  }[];
  text: string[];
  image: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<data[]>) {
  const data = [
    {
      id: 1,
      name: "Todolist react",
      technos: [
        { name: "FaReact", size: 30 },
        { name: "FaSymfony", size: 30 },
        { name: "FaDocker", size: 30 },
      ],
      text: [
        "lodsgfjlkhfdqsgmdqfhgmldfqhgôh oqdfhg dofgh dropgh dprog erpi",
        "lkdfgoikhjpqsdglkhjqsdgkljhrqgdsjlkgsqfdlk^hj",
        "lkzdjsfpoilsdfmlishdfpij dslgh qsrg hf",
      ],
      image: "todo_login.png",
    },
    {
      id: 2,
      name: "Todolist vueJs",
      technos: [
        { name: "FaVuejs", size: 30 },
        { name: "FaSymfony", size: 30 },
        { name: "FaDocker", size: 30 },
      ],
      text: [
        "lodsgfjlkhfdqsgmdqfhgmldfqhgôh oqdfhg dofgh dropgh dprog erpi",
        "lkdfgoikhjpqsdglkhjqsdgkljhrqgdsjlkgsqfdlk^hj",
        "lkzdjsfpoilsdfmlishdfpij dslgh qsrg hf",
      ],
      image: "todo_panel.png",
    },
    {
      id: 3,
      name: "Message App",
      technos: [
        { name: "FaReact", size: 30 },
        { name: "FaSymfony", size: 30 },
        { name: "FaDocker", size: 30 },
      ],
      text: [
        "lodsgfjlkhfdqsgmdqfhgmldfqhgôh oqdfhg dofgh dropgh dprog erpi",
        "lkdfgoikhjpqsdglkhjqsdgkljhrqgdsjlkgsqfdlk^hj",
        "lkzdjsfpoilsdfmlishdfpij dslgh qsrg hf",
      ],
      image: "test_site.png",
    },
    {
      id: 4,
      name: "Online CV",
      technos: [
        { name: "FaReact", size: 30 },
        { name: "SiNextdotjs", size: 30 },
        { name: "SiTailwindcss", size: 30 },
      ],
      text: [
        "lodsgfjlkhfdqsgmdqfhgmldfqhgôh oqdfhg dofgh dropgh dprog erpi",
        "lkdfgoikhjpqsdglkhjqsdgkljhrqgdsjlkgsqfdlk^hj",
        "lkzdjsfpoilsdfmlishdfpij dslgh qsrg hf",
      ],
      image: "test_site.png",
    },
    {
      id: 5,
      name: "Projet jeux de role",
      technos: [
        { name: "FaReact", size: 30 },
        { name: "FaSymfony", size: 30 },
        { name: "SiApache", size: 30 },
      ],
      text: [
        "lodsgfjlkhfdqsgmdqfhgmldfqhgôh oqdfhg dofgh dropgh dprog erpi",
        "lkdfgoikhjpqsdglkhjqsdgkljhrqgdsjlkgsqfdlk^hj",
        "lkzdjsfpoilsdfmlishdfpij dslgh qsrg hf",
      ],
      image: "test_site.png",
    },
  ];
  res.status(200).json(data);
}
