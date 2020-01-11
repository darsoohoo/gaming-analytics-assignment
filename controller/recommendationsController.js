const  Recommendation  = require('../recommendationData.js');

exports.getRecommendations = (req, res) => {
    Recommendation.find()
    .exec((err , recommendations) => {
        if(err) {
            return res.status(400).json({
                error: "Recommendations not found"
            });
        }
        res.json(recommendations);
    })
};

