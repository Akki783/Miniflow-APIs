exports.module = (req, res) => {

    data = {
        "list 1": "Item 1",
        "list 2": "Item 2",
        "list 3": "Item 3",
        "list 4": "Item 4",
        "list 5": "Item 5",
    }

    return res.status(400).json({
        success: true,
        data: data
    })
}