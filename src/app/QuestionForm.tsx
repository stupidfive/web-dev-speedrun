"use client"

import {Button, Form, Input, Textarea} from "@nextui-org/react";
import {submitQuestion} from "@/app/SubmitQuestion";

export default function QuestionForm() {
  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const title = formData.get("title") as string;
      const content = formData.get("content") as string;
      console.log({title, content})
      submitQuestion({
        title,
        content,
        createAt: Date.now(),
      });
    }}>
      <Input type="text" label="Title" name="title"></Input>
      <Textarea
        label="Content" name="content">
      </Textarea>
      <Button type="submit" color="primary">Submit</Button>
    </Form>
  )
}