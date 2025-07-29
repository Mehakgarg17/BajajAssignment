const express=require("express");
const bodyParser=require("body-parser");
const bfhlRoute=require("./routes/bfhl");

const app=express();
const PORT=process.env.PORT||3000;

app.use(bodyParser.json());
app.use("/bfhl",bfhlRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});