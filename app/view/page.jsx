
import { MongoClient } from "mongodb";
const uri = "mongodb+srv://bhargav:bhargav227@cluster0.r0cqany.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function call() {
    try {
      await client.connect();
      const col = client.db("form").collection("data");
      const res = await col.find().toArray();
      return res;
    } finally {
      await client.close();
    }
  }
export default async  function Home(){
const res=await call();
    return(
        <div>{JSON.stringify(res)}</div>
    )
}