import type { NextApiRequest, NextApiResponse } from "next";
import { Projects } from "../../typings";

type Data = {
    projects: Projects[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    // const projects: Projects[] = await sanityClient.fetch(query);
    const projects: Projects[] = [];
    res.status(200).json({ projects });
}
