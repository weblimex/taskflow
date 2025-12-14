import type { Express } from "express";
import type { Server } from "http";
import fs from "fs";
import path from "path";

// Always resolve paths from project root
const BASE_DIR = process.cwd();

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Capture interest + stuck point
  app.post("/api/interest", async (req, res) => {
    try {
      const { task, resistanceType, interest } = req.body;

      // Basic validation
      if (
        !task ||
        !resistanceType ||
        !["yes", "no"].includes(interest)
      ) {
        return res.status(400).json({ error: "Invalid data provided" });
      }

      // Format log entry
      const timestamp = new Date().toISOString();
      const logEntry =
        `${timestamp} | ${task} | ${resistanceType} | ${interest}\n`;

      // rsp directory + file
      const rspDir = path.join(BASE_DIR, "rsp");
      const rspFile = path.join(rspDir, "interest.log");

      // Ensure rsp directory exists
      await fs.promises.mkdir(rspDir, { recursive: true });

      // Append safely (never overwrite)
      if (!fs.existsSync(rspFile)) {
        await fs.promises.writeFile(rspFile, logEntry, { flag: "wx" });
      } else {
        await fs.promises.appendFile(rspFile, logEntry);
      }

      return res.json({ success: true });
    } catch (error) {
      console.error("Error logging interest:", error);
      return res.status(500).json({ error: "Failed to log interest" });
    }
  });

  return httpServer;
}
