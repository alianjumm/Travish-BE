const { Vacation } = require('../models/Vacation');
const { WishList } = require('../models/WishList');


exports.wishList_create_post = (req, res) => {
    console.log(req.body);

    let wishList = new WishList(req.body);
    wishList.save()
        .then((wishList) => {
            res.json(wishList)
        })
        .catch((err) => {
            console.log(err);
            res.send("error");
        });
};

exports.wishList_addVac_post = async (req, res) => {
    let wishlist = await WishList.findById(req.params.wishListID)
    console.log(wishlist)
    console.log(req.params.vacationID)
    if (!wishlist.vacation.includes(req.params.vacationID)){
    wishlist.vacation.push(req.params.vacationID)
    wishlist.save()
    }
    res.status(200).send("Done")
}


exports.wishList_index_get = (req, res) => {
    WishList.find()
        .then(wishLists => {
            res.json(wishLists)
        })
        .catch(err => {
            console.log(err);
            res.json(err)
        });
};

exports.wishList_show_get = (req, res) => {
    console.log(req.query.id);

    WishList.findById(req.query.id).populate('vacation')
        .then(wishList => {
            res.json(wishList)
        })
        .catch(err => {
            console.log(err);
        });
};

exports.wishList_delete_get = (req, res) => {
    console.log(req.query.id);
    WishList.findByIdAndDelete(req.query.id)
        .then((wishList) => {
            res.json(wishList)
        })
        .catch(err => {
            console.log(err);
        })
};

exports.wishList_deleteVac_get = async (req, res) => {
    console.log(req.params.vacationID);
    console.log(req.params.wishListID);
    let list = await WishList.findById(req.params.wishListID)
    list.vacation = list.vacation.filter(listItem => listItem.toString() !== req.params.vacationID)
    list.save()
    console.log(list.vacation.length)
    res.status(200).send("Done")
};




exports.wishList_show_get = (req, res) => {
    console.log(req.query.id);

    WishList.findById(req.query.id).populate('vacation')
        .then(wishList => {
            res.json({ wishList })
        })
        .catch(err => {
            console.log(err);
        });
};
exports.wishList_edit_get = (req, res) => {
    WishList.findById(req.query.id)
        .then((wishList) => {
            res.json({ wishList })
        })
        .catch(err => {
            console.log(err);
        })
};
exports.wishList_update_put = (req, res) => {
    WishList.findByIdAndUpdate(req.body._id, req.body, { new: true })
        .then((wishList) => {
            res.json({ wishList })
        })
        .catch(err => {
            console.log(err);
        })
};