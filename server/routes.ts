import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // POST /api/interest endpoint
  app.post('/api/interest', async (req, res) => {
    try {
      const { task, resistanceType, interest } = req.body;

      // Validate input
      if (!task || !resistanceType || !interest || !['yes', 'no'].includes(interest)) {
        return res.status(400).json({ error: 'Invalid data provided' });
      }

      // Create log entry with timestamp
      const timestamp = new Date().toISOString();
      const logEntry = `${timestamp} | ${task} | ${resistanceType} | ${interest}\n`;

      // Define log directory and file path
      const logDir = path.join(__dirname, 'logs');
      const logFile = path.join(logDir, 'interest.log');

      // Ensure the logs directory exists
      await fs.promises.mkdir(logDir, { recursive: true });

      // Append the log entry to the file
      await fs.promises.appendFile(logFile, logEntry);

      // Respond with success
      res.json({ success: true });
    } catch (error) {
      console.error('Error logging interest:', error);
      res.status(500).json({ error: 'Failed to log interest' });
    }
  });

  return httpServer;
}
