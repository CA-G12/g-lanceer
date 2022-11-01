import nodemailer from 'nodemailer';

const sendEmail = (userEmail: string, jobTitle: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'glancerUser@gmail.com',
      pass: 'amhcmhzrrbswlprw',
    },
  });

  const mailOptions = {
    from: 'glancerUser@gmail.com',
    to: userEmail,
    subject: 'Glancer: Your proposal is accepted',
    text: `your proposal to is accepte ${jobTitle} check your account in Glancer`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    } else {
      return '';
    }
  });
};

export default sendEmail;
