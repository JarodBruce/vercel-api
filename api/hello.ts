import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const name = req.query.name || 'world';
  res.status(200).json({ TypeScript: `Hello, ${name}` });
}
