"use server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function registerStudent({ ...data }) {
  // console.log("> data: ", data.email);
  const fullname = data.fullname;
  const email = data.email;
  const phone = data.phone;
  const college = data.college;
  const semester = data.semester;
  const branch = data.branch;
  try {
    await prisma.registrations.create({
      data: { fullname, email, phone, college, branch, semester },
    });
  } catch (error) {
    return error;
  }
}

export async function sendInquiry({ ...data }) {
  const fullname = data.fullname;
  const email = data.email;
  const message = data.message;
  try {
    await prisma.inquiry.create({
      data: { fullname, email, message },
    });
  } catch (error) {
    return error;
  }
}
