import type { NextApiRequest, NextApiResponse } from "next";
import { Skills } from "../../typings";

type Data = {
    skills: Skills[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    // const skills: Skills[] = await sanityClient.fetch(query);
    const skills: Skills[] = [];
    res.status(200).json({ skills });
}
