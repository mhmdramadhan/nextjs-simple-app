import executeQuery from "./lib/db";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const result = await executeQuery({
        query: "SELECT * FROM meetups",
        values: [],
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
