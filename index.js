require("dotenv").config()
const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
const { calc , list } = require("./controller");

app.use(express.json());

app.get('/list',list);
app.get('/cal', calc);
app.get('/', (req,res)=>{
    const carOptions = [
        { value: "toyota", label: "Toyota" },
        { value: "honda", label: "Honda" },
        { value: "ford", label: "Ford" },
        { value: "bmw", label: "BMW" },
        { value: "mercedes", label: "Mercedes" },
        { value: "audi", label: "Audi" }
    ];
    res.status(200).json({
        success:true,
        data: carOptions
    })
});

app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
})