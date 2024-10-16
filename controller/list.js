module.exports = (req, res) => {

    const carOptions = [
        { value: "toyota", label: "Toyota" },
        { value: "honda", label: "Honda" },
        { value: "ford", label: "Ford" },
        { value: "bmw", label: "BMW" },
        { value: "mercedes", label: "Mercedes" },
        { value: "audi", label: "Audi" }
    ];

    return res.status(400).json({
        success: true,
        data: carOptions
    })
}