
import { MongoClient } from "mongodb";
import Card from "./Card";
const uri = "mongodb+srv://bhargav:bhargav227@cluster0.r0cqany.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function call() {
    var res;
    try {
      await client.connect();
      const col = client.db("form").collection("data");
      res = await col.find().toArray();
      
    } finally {
        
      await client.close();
      return res;
    }
  }
export default async  function Home(){
const res=await call();
    return(
        <div className="gap-2 grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 justify-center m-3 p-3" >{
        res.map((val,i)=>(
            <div key={i}>
            <Card  pro={{...val}} />
            </div>
        ))}
        </div>
    )
}