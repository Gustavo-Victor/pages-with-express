import express from "express"; 
import path from "node:path";
import url from "node:url"; 
import userRouter from "./users/index.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url)); 
const basePath = path.join(__dirname, "templates"); 
const app = express();
const port = 5000; 

app.use("/users", userRouter);
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
}); 


app.use((req, res, next) => {
    res.sendFile(`${basePath}/not_found.html`);
})


app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}/`); 
});


