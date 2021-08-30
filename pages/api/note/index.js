// pages/api/note/index.js
import nc from 'next-connect'
import notes from '../../../src/data/data'

 const getNote = id => notes.find(note => note.id === parseInt(id))

const handler = nc()
  .get((req, res) => {
    res.json({data: notes})
  })
  .post((req, res) => {
    const id = Date.now()
    const note = {...req.body, id }

    notes.push(note)
    res.json({data: note})
  })
export default handler
