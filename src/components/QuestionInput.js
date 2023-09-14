import React from "react";
import {Input} from "@nextui-org/react";

export default function QuestionInput() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="text" label="Question" placeholder="Enter your prompt here" />
    </div>
  );
}
