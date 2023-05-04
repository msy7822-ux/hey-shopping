// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { seed } from "@/db/seed";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await seed();
    res.status(200).json({ message: "seed complete🚀" });
  } catch (error) {
    res.status(500).json({ message: "seed failture😖" });
  }
}
