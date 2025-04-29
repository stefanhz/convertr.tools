import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';


const LOG_FILE_PATH = path.join(process.cwd(), 'convertr.tools', 'logs', 'usage-log.csv');

function ensureLogFileExists() {
  if (!fs.existsSync(LOG_FILE_PATH)) {
    fs.mkdirSync(path.dirname(LOG_FILE_PATH), { recursive: true });
    fs.writeFileSync(LOG_FILE_PATH, 'timestamp,ip,action,details\n', 'utf8');
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { action, details } = req.body;

  if (!action) {
    return res.status(400).json({ message: 'Missing action in request body' });
  }

  const timestamp = new Date().toISOString();
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';

  ensureLogFileExists();

  const logLine = `"${timestamp}","${ip}","${action}","${details ? details.replace(/"/g, '""') : ''}"\n`;

  try {
    fs.appendFileSync(LOG_FILE_PATH, logLine, 'utf8');
    return res.status(200).json({ message: 'Log entry saved' });
  } catch (error) {
    console.error('Error writing log:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
