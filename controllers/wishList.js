const WishList = require('../models/WishList');

exports.wishList_create_post = (req, res) => {
    console.log(req.body);

    let wishList = new WishList(req.body);

    // Save wishList
    wishList.save()
    .then((wishList) => {
        res.json({wishList})
    })
    .catch((err) => {
        console.log(err);
        res.send("error");
    });
};
exports.wishList_index_get = (req, res) => {
    WishList.find()
    .then(wishLists => {
        res.json({wishLists})
    })
    .catch(err => {
        console.log(err);
    });
};
