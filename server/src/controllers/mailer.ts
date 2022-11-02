import nodemailer from 'nodemailer';

const sendEmail = ({ recieverEmail, jobTitle }: any) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'shatha123@gmail.com',
      pass: 'shatha1234',
    },
  });

  const mailOptions = {
    from: 'youremail@gmail.com',
    to: recieverEmail,
    subject: 'Glancer: Your proposal is accepted',
    text: `your proposal to ${jobTitle} is accepted check your account in Glancer`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

export default sendEmail;
