import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

interface image {
  imageBuffer: HTMLImageElement;
  error: boolean;
  message: string;
}
interface error {
  imageBuffer: HTMLImageElement;
  error: boolean;
  message: string;
}
export default function handler(req: NextApiRequest, res: NextApiResponse<image>) {
  const name = req.query.imageName;
  const filePath = path.join(process.cwd(), `/public/resources/${name}`);
  try {
    const imageBuffer = fs.readFileSync(filePath);

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(imageBuffer);
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: true, message: "Image not found" });
  }
}
