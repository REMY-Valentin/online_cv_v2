import type { NextApiRequest, NextApiResponse } from "next";

interface data {
  id: number;
  name: string;
  iconeName: string;
  library: string;
  size: number;
  lvl: number;
  directionLeft?: boolean;
}
[];

export default function handler(req: NextApiRequest, res: NextApiResponse<data[]>) {
  let data = [
    {
      id: 1,
      name: "html",
      iconeName: "FaHtml5",
      library: "fa",
      size: 80,
      lvl: 100,
      directionLeft: false,
    },
    {
      id: 2,
      name: "CSS",
      iconeName: "FaCss3",
      library: "fa",
      size: 80,
      lvl: 90,
      directionLeft: false,
    },
    {
      id: 3,
      name: "PHP",
      iconeName: "FaPhp",
      library: "fa",
      size: 80,
      lvl: 80,
      directionLeft: true,
    },
    {
      id: 4,
      name: "JS",
      iconeName: "SiJavascript",
      library: "si",
      size: 80,
      lvl: 80,
      directionLeft: true,
    },
    {
      id: 5,
      name: "Vuejs",
      iconeName: "FaVuejs",
      library: "fa",
      size: 80,
      lvl: 50,
      directionLeft: false,
    },
    {
      id: 6,
      name: "React",
      iconeName: "FaReact",
      library: "fa",
      size: 80,
      lvl: 50,
      directionLeft: false,
    },
    {
      id: 7,
      name: "NextJs",
      iconeName: "SiNextdotjs",
      library: "si",
      size: 80,
      lvl: 30,
      directionLeft: false,
    },
    {
      id: 8,
      name: "Symfony",
      iconeName: "FaSymfony",
      library: "fa",
      size: 80,
      lvl: 60,
      directionLeft: true,
    },
    {
      id: 9,
      name: "Wordpress",
      iconeName: "FaWordpress",
      library: "fa",
      size: 80,
      lvl: 40,
      directionLeft: true,
    },
    {
      id: 10,
      name: "Apache",
      iconeName: "SiApache",
      library: "si",
      size: 80,
      lvl: 60,
      directionLeft: false,
    },
    {
      id: 11,
      name: "Docker",
      iconeName: "FaDocker",
      library: "fa",
      size: 80,
      lvl: 60,
      directionLeft: true,
    },
    {
      id: 12,
      name: "Tailwind",
      iconeName: "SiTailwindcss",
      library: "si",
      size: 80,
      lvl: 30,
      directionLeft: true,
    },
  ];
  res.status(200).json(data);
}
