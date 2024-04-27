import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function POST(request: NextApiRequest, response: NextApiResponse) {

  const formData = await request.json();
  const name = formData.name
  const email = formData.email;
  const message = formData.message;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'ostervold.berent@gmail.com',
    subject: `Portfolio form: ${name}`,
    text: 'Reponse email: ' + email + '\n\n' + message,
  };


  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const res = await transporter.sendMail(mailOptions);

  if(res) {
    return new Response('Email sent successfully');
  } 
}
