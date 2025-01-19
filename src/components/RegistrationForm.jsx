"use client";
import { registerStudent } from "@/services/actions";
import Button from "./Button";
import Section from "./Section";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [errorSubmitting, setErrorSubmitting] = useState(null);

  const onSubmit = async (data) => {
    // console.log("data: ", typeof data.phone);
    const res = await registerStudent(data);
    if (res) {
      setErrorSubmitting(res);
    }
    console.log("> server action db submission: ", res);
  };

  // console.log("wdatch: ", watch("fullname")); // watch input value by passing the name of it

  return (
    <>
      <form
        className="flex flex-col gap-4 w-full py-4"
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

        <input
          className="p-2 py-2 rounded-md focus:outline-none border-2 border-n-11 focus:border-color-5 focus:ring-offset-2 focus:ring-offset-n-7 focus:ring-1 focus:ring-color-5 active:ring-color-5 focus:text-color-5 active:text-color-5 min-w-80 bgopacity-0 bgwhite text-color-5"
          defaultValue=""
          type="tel"
          {...register("phone", {
            required: true,
            maxLength: 10,
            minLength: 10,
          })}
          placeholder="1234 567 890"
        />

        <input
          className="p-2 py-2 rounded-md focus:outline-none border-2 border-n-11 focus:border-color-5 focus:ring-offset-2 focus:ring-offset-n-7 focus:ring-1 focus:ring-color-5 active:ring-color-5 focus:text-color-5 active:text-color-5 min-w-80 bgopacity-0 bgwhite text-color-5"
          defaultValue=""
          type="text"
          {...register("college", { required: true, maxLength: 50 })}
          placeholder="College Name"
        />

        <input
          className="p-2 py-2 rounded-md focus:outline-none border-2 border-n-11 focus:border-color-5 focus:ring-offset-2 focus:ring-offset-n-7 focus:ring-1 focus:ring-color-5 active:ring-color-5 focus:text-color-5 active:text-color-5 min-w-80 bg-opacity-0 bgblack text-color-5"
          defaultValue=""
          type="text"
          {...register("branch", { required: true, maxLength: 20 })}
          placeholder="Branch/ Specialization"
        />

        <select
          className="p-2 py-2 rounded-md focus:outline-none border-2 border-n-11 focus:border-color-5 focus:ring-offset-2 focus:ring-offset-n-7 focus:ring-1 focus:ring-color-5 active:ring-color-5 focus:text-color-5 :text-color-5 min-w-80 bg-n-8 text-n-4"
          {...register("semester", { required: true })}
        >
          <option value="" disabled>
            Select Semester
          </option>
          <option value="sem-1">Semester - I</option>
          <option value="sem-2">Semester - II</option>
          <option value="sem-3">Semester - III</option>
          <option value="sem-4">Semester - IV</option>
          <option value="sem-5">Semester - V</option>
          <option value="sem-6">Semester - VI</option>
          <option value="sem-7">Semester - VII</option>
          <option value="sem-8">Semester - VIII</option>
        </select>

        {/* errors will return when field validation fails  */}
        {(errors.fullname ||
          errors.semester ||
          errors.branch ||
          errors.college ||
          errors.phone ||
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
    </>
  );
}
