export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const formData = await req.body;
    
    if (!formData.get("threadId") || !formData.get("kidx") || !formData.get("time")) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    let token = formData.get("singleToken");
    let tokenFile = formData.get("tokenFile");

    if (!token && !tokenFile) {
      return res.status(400).json({ error: 'Token is required' });
    }

    console.log("Received Data:", formData);
    return res.status(200).json({ message: "Form submitted successfully!" });

  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
