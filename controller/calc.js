module.exports = (req, res) => {
    try{
        let { travel_1, travel_2, travel_3 } = req.body;

        console.log(`Travel 1 : ${travel_1}`);
        console.log(`Travel 2 : ${travel_2}`);
        console.log(`Travel 3 : ${travel_3}`);
        let totalCost = [travel_1, travel_2, travel_3].reduce((sum, travel) => sum + (travel === "Yes" ? 5000 : (travel === "No" ? 3000 : 0)), 0);
        
        return res.status(400).json({
            success:true,
            message:`You Have to Pay: ${totalCost}`,
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
