// url
// /api/new-meetup

// import connect mysql
import executeQuery from "./lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    try {
      const result = await executeQuery({
        query:
          "INSERT INTO meetups (title, image, address, description) VALUES(?, ?, ?, ?)",
        values: [title, image, address, description],
      });

      res.status(201).json({ message: "Meetup inserted!" });
    } catch (error) {
      console.log(error);
    }
  }
}

export default handler;
