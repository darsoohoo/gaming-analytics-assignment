const  Recommendations  = require('../recommendationData.json');

exports.getRecommendations = (req, res) => {
        res.json(Recommendations);
};

