"use server"

import QuestionForm from "@/app/QuestionForm";
import {MongoClient} from "mongodb";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {cookies} from "next/headers";

export default async function Home() {
  await cookies();
  const client = new MongoClient((process.env.MONGODB_CONNECTION_STRING)!)
  const questions = await client.db("web-dev-speedrun")
    .collection("questions")
    .find({})
    .sort({createAt: -1})
    .toArray();
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-bold text-3xl py-4">Web Dev Speedrun</h1>
      <QuestionForm />
      <hr className="w-full max-w-2xl"/>
      {questions.map((question) => (
        <Card
          className="w-full max-w-2xl"
          key={question.createAt}>
          <CardHeader className="font-bold">{question.title}</CardHeader>
          <CardBody>{question.content}</CardBody>
        </Card>
      ))}
    </div>
  );
}
