"use client";
import { registerStudent, sendInquiry } from "@/services/actions";
import Button from "./Button";
import Section from "./Section";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function GetInTouch() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [errorSubmitting, setErrorSubmitting] = useState(null);

  const onSubmit = async (data) => {
    // console.log("data: ", typeof data.phone);
    const res = await sendInquiry(data);
    if (res) {
      setErrorSubmitting(res);
    }
    console.log("> server action db submission: ", res);
  };

  return (
    <Section className={"container"}>
      <h1 className="h1">
        Get In <span className="text-color-5">Touch</span>
      </h1>
      <p className="tagline">Have a question? Need help?</p>

      <form
        className="flex flex-col gap-4 md:max-w-xl py-4 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="p-2 py-2 rounded-md focus:outline-none border-2 border-n-11 focus:border-color-5 focus:ring-offset-2 focus:ring-offset-n-7 focus:ring-1 focus:ring-color-5 active:ring-color-5 focus:text-color-5 active:text-color-5 min-w-80 bgopacity-0 bgwhite text-color-5"
          defaultValue=""
          {...register("fullname", { required: true, maxLength: 100 })}
          placeholder="Full Name"
        />

        <input
          className="p-2 py-2 rounded-md focus:outline-none border-2 border-n-11 focus:border-color-5 focus:ring-offset-2 focus:ring-offset-n-7 focus:ring-1 focus:ring-color-5 active:ring-color-5 focus:text-color-5 active:text-color-5 min-w-80 bgopacity-0 bgwhite text-color-5"
          defaultValue=""
          type="email"
          {...register("email", {
            required: true,
            maxLength: 100,
            pattern: "/^[w-.]+@([w-]+.)+[w-]{2,4}$/g",
          })}
          placeholder="example@email.com"
        />

        <textarea
          className="p-2 py-2 rounded-md focus:outline-none border-2 border-n-11 focus:border-color-5 focus:ring-offset-2 focus:ring-offset-n-7 focus:ring-1 focus:ring-color-5 active:ring-color-5 focus:text-color-5 active:text-color-5 min-w-80 bgopacity-0 bgwhite text-color-5"
          defaultValue=""
          type="text"
          {...register("message", {
            required: true,
          })}
          placeholder="your message"
        />

        {/* errors will return when field validation fails  */}
        {(errors.fullname ||
          errors.message ||
          errors.email ||
          errorSubmitting) && (
          <span className="bg-red-950 bg-opacity-50 border border-red-700 p-1 rounded-md text-red-600 ">
            This field is required
          </span>
        )}

        <Button type="submit">
          <input type="submit" />
        </Button>
      </form>
    </Section>
  );
}
