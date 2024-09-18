import nodemailer from "nodemailer";
import { render } from '@react-email/components';
import { ReactElement } from "react";
const user = process.env.EMAIL_KEY;
const pass = process.env.PASSWORD_EMAIL;

type MailParams = {
  email: string;
  message: string;
  name: string;
};

export async function SendMailNode(email: string,template: ReactElement, name: string='',  message: string='') {
    const emailHtml = await render(template);
    const transporter = nodemailer.createTransport({
        host: "smtp.yandex.ru",
        port: 465,
        secure: true,
        auth: {
          user,
          pass,
        },
      });
  
      const mailOptions = {
        from: user,
        to: email,
        subject: "New message from your-website",
        html: emailHtml,
        
      };
  
      await transporter.sendMail(mailOptions);
}
