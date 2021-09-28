import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  url: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ url: 'linkedin.com/in/ismailkiziltas' })
}
