// pages/api/data.js
// route => /api/data

// pages/api/data
import nc from 'next-connect';
import cors from 'cors'

const handler = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    res.json({ hello: 'world' })
  })
  .post((req, res) => {
    res.send('Hello world')
  })
  .put(async (req, res) => {
    res.end('hello')
  })  
  
export default handler;

// export default (req, res) => {
//  res.statusCode = 200
//  res.setHeader('Content-Type', 'application/json')
//  res.end(JSON.stringify({ message: 'hello' }))
//}
// Add GET POST PATCH PUT DELETE
// yarn add next-connect
//  npm install cors || yarn add cors