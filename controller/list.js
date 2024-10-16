module.exports = (req, res) => {

    data = {
        "list_1": "Item 1",
        "list_2": "Item 2",
        "list_3": "Item 3",
        "list_4": "Item 4",
        "list_5": "Item 5",
    }

    return res.status(400).json({
        success: true,
        data: data
    })
}