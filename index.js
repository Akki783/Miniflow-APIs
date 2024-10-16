require("dotenv").config()
const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
const { calc , list } = require("./controller");

const carModels = {
    toyota: {
        corolla: { id: 1, label: "Corolla" },
        camry: { id: 2, label: "Camry" },
        rav4: { id: 3, label: "RAV4" },
        highlander: { id: 4, label: "Highlander" }
    },
    honda: {
        civic: { id: 5, label: "Civic" },
        accord: { id: 6, label: "Accord" },
        crv: { id: 7, label: "CR-V" },
        pilot: { id: 8, label: "Pilot" }
    },
    ford: {
        fiesta: { id: 9, label: "Fiesta" },
        focus: { id: 10, label: "Focus" },
        mustang: { id: 11, label: "Mustang" },
        explorer: { id: 12, label: "Explorer" }
    },
    bmw: {
        series3: { id: 13, label: "3 Series" },
        series5: { id: 14, label: "5 Series" },
        x5: { id: 15, label: "X5" },
        x3: { id: 16, label: "X3" }
    },
    mercedes: {
        cclass: { id: 17, label: "C-Class" },
        eclass: { id: 18, label: "E-Class" },
        gla: { id: 19, label: "GLA" },
        glc: { id: 20, label: "GLC" }
    },
    audi: {
        a3: { id: 21, label: "A3" },
        a4: { id: 22, label: "A4" },
        q5: { id: 23, label: "Q5" },
        q7: { id: 24, label: "Q7" }
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