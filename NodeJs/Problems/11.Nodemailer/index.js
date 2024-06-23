// // Please don't change the pre-written code
// Problem statement
//11.Nodemailer
// Develop a Node.js application enabling automated email notifications by sending messages from a user-provided address. Gain valuable skills applicable for scenarios like password reset emails or order confirmations in web applications.


// Guide to upload Coding Problems:

// Objectives

// i) Build a Node.js application to send emails using the provided nodemailer module.
// ii) Prompt the user to enter the recipient's email address using the provided readline module.
// iii) Send an email with the subject "Coding Ninjas" and the message body "The world has enough coders; be a coding ninja!", using the following email credentials:
//   mail: codingninjas2k16@gmail.com
//   password: slwvvlczduktvhdj

// Note:
// Please write your code only inside the provided Solution function. You can run the output.js file to see the implementation's output.
// The use of the keyword interface is not permitted, as it may function correctly on a local machine but may result in test failure.
// Do not modify any pre-written code.

// Expected Output

// The application should send an email from 'codingninjas2k16@gmail.com' to the user-provided email address. The description of the email should be as described in objective.
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';

const Solution = () => {
  const sendmail= async () => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('please enter your mail: ', async (email) => {
      const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
          user:'codingninjas2k16@gmail.com',
          pass:'slwvvlczduktvhdj',
        }
      });

      const mailoption={
        from:'codingninjas2k16@gmail.com',
        to:email,
        subject:'Coding Ninjas',
        text:'The world has enough coders; be a coding ninja!',
      };

      try{
        const result = await transporter.sendMail(mailoption);
        console.log(`Success :Email sent to ${email}`);
      }catch(error){
        console.log("Error occurred: ", error);
      }
      rl.close();
    });
  }

  sendmail();
};

export default Solution;
