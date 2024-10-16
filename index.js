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


app.get('/model', (req,res)=>{

    let {model} = req.body;

    model = model.toLowerCase();

    const carModels = {
        toyota: {
            corolla: "Corolla",
            camry: "Camry",
            rav4: "RAV4",
            highlander: "Highlander"
        },
        honda: {
            civic: "Civic",
            accord: "Accord",
            crv: "CR-V",
            pilot: "Pilot"
        },
        ford: {
            fiesta: "Fiesta",
            focus: "Focus",
            mustang: "Mustang",
            explorer: "Explorer"
        },
        bmw: {
            series3: "3 Series",
            series5: "5 Series",
            x5: "X5",
            x3: "X3"
        },
        mercedes: {
            cclass: "C-Class",
            eclass: "E-Class",
            gla: "GLA",
            glc: "GLC"
        },
        audi: {
            a3: "A3",
            a4: "A4",
            q5: "Q5",
            q7: "Q7"
        }
    };
    
    
    
    res.status(200).json({
        success:true,
        data: carModels.model
    })
});


app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
})