require("dotenv").config()
const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
const { calc , list } = require("./controller");

const carModels = {
    toyota: {
        0: { id: 1, label: "Corolla" },
        1: { id: 2, label: "Camry" },
        2: { id: 3, label: "RAV4" },
        3: { id: 4, label: "Highlander" }
    },
    honda: {
        0: { id: 5, label: "Civic" },
        1: { id: 6, label: "Accord" },
        2: { id: 7, label: "CR-V" },
        3: { id: 8, label: "Pilot" }
    },
    ford: {
        0: { id: 9, label: "Fiesta" },
        1: { id: 10, label: "Focus" },
        2: { id: 11, label: "Mustang" },
        3: { id: 12, label: "Explorer" }
    },
    bmw: {
        0: { id: 13, label: "3 Series" },
        1: { id: 14, label: "5 Series" },
        2: { id: 15, label: "X5" },
        3: { id: 16, label: "X3" }
    },
    mercedes: {
        0: { id: 17, label: "C-Class" },
        1: { id: 18, label: "E-Class" },
        2: { id: 19, label: "GLA" },
        3: { id: 20, label: "GLC" }
    },
    audi: {
        0: { id: 21, label: "A3" },
        1: { id: 22, label: "A4" },
        2: { id: 23, label: "Q5" },
        3: { id: 24, label: "Q7" }
    }
};

const carOptions = [
    { value: "toyota", label: "Toyota" },
    { value: "honda", label: "Honda" },
    { value: "ford", label: "Ford" },
    { value: "bmw", label: "BMW" },
    { value: "mercedes", label: "Mercedes" },
    { value: "audi", label: "Audi" }
];

app.use(express.json());

app.get('/list',list);
app.get('/cal', calc);
app.get('/', (req,res)=>{
    
    res.status(200).json({
        success:true,
        data: carOptions
    })
});


app.get('/model', (req, res) => {
    let { model } = req.body;

    if (carModels[model]) {
        res.status(200).json({
            success: true,
            data: carModels[model]
        });
    } else {
        res.status(404).json({
            success: false,
            message: "Model not found"
        });
    }
});


app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
})