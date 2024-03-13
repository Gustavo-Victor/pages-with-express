import express from "express"; 
import url from "node:url";
import path from "node:path"; 

const router = express(); 
const __dirname = url.fileURLToPath(new URL(".", import.meta.url)); 
const basePath = path.join(__dirname, "../templates"); 

router.use(express.static("../public")); 


router.get("/", (req, res) => {
    res.sendFile(`${basePath}/users.html`);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`<h1>User Id = ${id}</h1>`);
});


export default router; 
