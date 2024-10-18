require("dotenv").config()
const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
const { calc, list } = require("./controller");

const carModels = {
    toyota: [
        { id: 1, label: "Corolla" },
        { id: 2, label: "Camry" },
        { id: 3, label: "RAV4" },
        { id: 4, label: "Highlander" }
    ],
    honda: [
        { id: 5, label: "Civic" },
        { id: 6, label: "Accord" },
        { id: 7, label: "CR-V" },
        { id: 8, label: "Pilot" }
    ],
    ford: [
        { id: 9, label: "Fiesta" },
        { id: 10, label: "Focus" },
        { id: 11, label: "Mustang" },
        { id: 12, label: "Explorer" }
    ],
    bmw: [
        { id: 13, label: "3 Series" },
        { id: 14, label: "5 Series" },
        { id: 15, label: "X5" },
        { id: 16, label: "X3" }
    ],
    mercedes: [
        { id: 17, label: "C-Class" },
        { id: 18, label: "E-Class" },
        { id: 19, label: "GLA" },
        { id: 20, label: "GLC" }
    ],
    audi: [
        { id: 21, label: "A3" },
        { id: 22, label: "A4" },
        { id: 23, label: "Q5" },
        { id: 24, label: "Q7" }
    ]
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

// app.get('/list',list);
// app.get('/cal', calc);
app.get('/', (req, res) => {

    res.status(200).json({
        success: true,
        data: carOptions
    })
});


app.get('/model', (req, res) => {

    try {
        let { model } = req.body;

        let webhook_url = "https://webhook.site/da83169b-1e50-4f2c-98f1-e2d14f8b0116";

        axios.post(webhook_url, model)
            .then(response => {
                console.log('Data sent successfully!');
                console.log('Response status:', response.status);
                console.log('Response data:', response.data);
            })
            .catch(error => {
                console.error('Error sending data:', error.message);
            });


        if (carModels[model]) {
            res.status(200).json({
                success: true,
                data: carModels[model]
            });
        }
    }
    catch (error) {

        res.status(404).json({
            success: false,
            message: "Model not found"
        });

    }
});




app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
})