// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from "nodemailer";
import readline from "readline";

const Solution = async () => {
    // Write your code here
    const q = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const transponder = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "codingninjas2k16@gmail.com",
            pass: "slwvvlczduktvhdj",
        },
    });

    q.question("Enter your Email id: ", (userMail) => {
        const mailOptions = {
            form: "codingninjas2k16@gmail.com",
            to: userMail,
            subject: "Coding Ninjas",
            text: "The world has enough coders; be a coding ninja!",
        };

        transponder.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log(`Success: Email sent to ${userMail}`);
            }
        });
        q.close();
    });
};

export default Solution;
