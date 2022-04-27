const User = require("../models/User");
const {Vacation} = require("../models/Vacation")


let {WishList} = require("../models/WishList");




exports.vacation_create_post = (req, res) => {
    console.log(req.body);

    let vacation = new Vacation(req.body);
    vacation.save()
    .then((vacation) => {
        res.json(vacation)
    })
    .catch((err) => {
        console.log(err);
        res.send("error");
    });
};


exports.vacation_index_get = (req, res) => {
    Vacation.find()
    .then(vacations => {
        res.json(vacations) 
    })
    .catch(err => {
        console.log(err);
    });
};

exports.vacation_show_get = (req, res) => {
    console.log(req.query.id);

    Vacation.findById(req.query.id).populate('wishlist')
    .then(vacation => {
        res.json({vacation})
    })
    .catch(err => {
        console.log(err);
    });
};

exports.vacation_delete_get = (req, res) => {
    console.log(req.query.id);
    Vacation.findByIdAndDelete(req.query.id)
    .then((vacation) => {
        res.json({vacation})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.vacation_edit_get = (req, res) =>{
    Vacation.findById(req.query.id)
    .then((vacation) => {
        res.json({vacation})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.vacation_update_put = (req, res) => {
    Vacation.findByIdAndUpdate(req.body.id, req.body)
    .then((vacation) => {
        res.json({vacation})
    })
    .catch(err => {
        console.log(err);
    })
}