export default function handler(req, res) {
  const name = req.query.name || "world";
  res.status(200).json({ message: `Hello, ${name}!` });
}
