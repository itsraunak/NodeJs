// Write your code here
import readline from "readline";
import { writeBlog, publishBlog } from "./blogActions.js";

const inter = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

inter.question("Enter Your Blog Data: ", (data) => {
    writeBlog("myblog.txt", data);
    inter.close();
    publishBlog("myblog.txt");
});
