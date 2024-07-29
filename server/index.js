const express = require('express')

const cors = require('cors');
const app = express();
app.use(cors())
const port = 8000

app.use(express.json())
app.get('/', (req, res) => {
 res.send("Process is running")
})

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mern-book:man0045chau@cluster0.ceuepvl.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
 serverApi: {
  version: ServerApiVersion.v1,
  strict: true,
  deprecationErrors: true,
 }
});

async function run() {
 try {
  await client.connect();

  const projectCollection = client.db("Project_Manangement").collection("Projects");
  app.post("/upload_projects", async (req, res) => {
   const data = req.body;
   const result = await projectCollection.insertOne(data);
   res.send(result);
  });
  app.get("/project/:id", async (req, res)=>{
   const id = req.params.id;
   const filter = {_id: new ObjectId(id)};
   const result = projectCollection.findOne(filter);
   res.status(200).send({message: 'following data gets from the id', result});
  })
  app.delete("/project/:id", async (req, res) => {
   const id = req.params.id;
   try {
    const filter = { _id: new ObjectId(id) };
    const result = await projectCollection.deleteOne(filter);

    if (result.deletedCount === 1) {
     res.status(200).send({ message: 'Project deleted successfully', result });
    } else {
     res.status(404).send({ message: 'Project not found' });
    }
   } catch (error) {
    res.status(500).send({ message: 'Error deleting project', error });
   }
  });

  app.patch("/projects/:id", async(req, res)=>{
    const id = req.params.id;
    const update_data = req.body;
    const filter = {_id: new ObjectId(id)};
 
    const updateDoc = {
     $set: {
      ...update_data
     },
    }
    const option = {upsert: true};
    const result = await projectCollection.updateOne(filter, updateDoc, option);
    res.send(result);
   
   
  });

  app.get("/all-projects", async(req, res) =>{
   let query = {};
    if(req.query?.category){
     query={category: req.query.category}
    }
    const result = await projectCollection.find(query).toArray();
    res.status(200).send({message: 'we get the result', result})
  })

  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
 }
 finally { }
}
run().catch(console.dir);

app.listen(port, () => {
 console.log(`Process is running at following stages:  http://localhost:${port}`)
})