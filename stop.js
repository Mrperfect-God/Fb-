export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { taskId } = req.body;

  if (!taskId) {
    return res.status(400).json({ error: "Task ID is required" });
  }

  console.log(`Stopping task with ID: ${taskId}`);
  res.status(200).json({ message: "Task stopped successfully!" });
}
