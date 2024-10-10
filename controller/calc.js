module.exports = (req, res) => {
    try{
        let { travel_1, travel_2, travel_3 } = req.body;

        let totalCost = [travel_1, travel_2, travel_3].reduce((sum, travel) => sum + (travel === "Yes" ? 5000 : (travel === "No" ? 3000 : 0)), 0);
        
        return res.status(400).json({
            message:"success",
            totalAmount : totalCost
        })
    }
    catch(error)
    {
        return res.status(400).json({
            message:"Please try again later"
        })
    }
}
