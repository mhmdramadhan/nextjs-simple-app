// url
// /api/new-meetup

// import connect mysql
import executeQuery from './lib/db';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;

    try {
      const result = await executeQuery({
        query:
          'INSERT INTO users (id, createdAt, email, hash, salt) VALUES(?, ?, ?, ?, ?)',
        values: [
          user.id,
          user.createdAt.toString(),
          user.email,
          user.hash,
          user.salt,
        ],
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}

export default handler;
