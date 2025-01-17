"use server"

import {MongoClient} from "mongodb";
import {redirect} from "next/navigation";

export async function submitQuestion(question: {
  title: string;
  content: string;
  createAt: number
}) {
  const client = new MongoClient((process.env.MONGODB_CONNECTION_STRING)!)
  client.db("web-dev-speedrun")
    .collection("questions")
    .insertOne(question);
  redirect("/");
}