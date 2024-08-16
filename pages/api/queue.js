// pages/api/queue.js
let queue = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(queue);
  } else if (req.method === 'POST') {
    const newCustomer = req.body;
    queue.push(newCustomer);
    res.status(201).json(newCustomer);
  } else if (req.method === 'PUT') {
    queue = req.body;
    res.status(200).json(queue);
  } else {
    res.status(405).end();
  }
}