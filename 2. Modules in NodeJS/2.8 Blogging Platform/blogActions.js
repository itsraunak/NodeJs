// Write your code here
import { appendFileSync, readFileSync } from "fs";

export const writeBlog = (add, data) => {
    appendFileSync(add, data);
};

export const publishBlog = (path) => {
    return readFileSync(path, "utf-8");
};
