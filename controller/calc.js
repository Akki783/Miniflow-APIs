module.exports = (req, res) => {
    let { travel_1, travel_2, travel_3 } = req.body;

    let totalCost = [travel_1, travel_2, travel_3].reduce((sum, travel) => sum + (travel === "Yes" ? 5000 : (travel === "No" ? 3000 : 0)), 0);
    res.send(`TotalCost : ${totalCost}`);
}
