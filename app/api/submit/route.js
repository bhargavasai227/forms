import { MongoClient } from 'mongodb';
import {  NextResponse } from "next/server";
const uri = "mongodb+srv://bhargav:bhargav227@cluster0.r0cqany.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export  async function POST(req, res) {
    
      try 
      {
        await client.connect();
        const col = client.db("form").collection("data");
        const data = await req.json();
        const result = await col.insertOne(data);
        console.log(result);
        return NextResponse.json({ data: result }, { status: 201 });
      } catch (error) {
        console.error("Error inserting data:", error);
        return NextResponse.json({ error: error}, { status: 500 });
      } finally {
        await client.close();
      }
    
    
} 
  