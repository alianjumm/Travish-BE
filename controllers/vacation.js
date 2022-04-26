const {Vacation} = require("../models/Vacation");

const moment = require("moment");
const { WishList } = require("../models/wishList");

exports.vacation_create_get = (req, res) => {

    WishList.find().populate('vacation')
    .then((wishlist) => {
        res.render('vacation/add', {wishlist});
    })
    .catch((err) => {
        console.log(err);
    })

}

exports.vacation_create_post = (req, res) => {
    console.log(req.body);

    let vacation = new Vacation(req.body);

    article.save()
    .then(() => {
        
        req.body.wishlist.forEach(wishlist => {
            WishList.findById(wishlist, (error, wishList) => {
              wishList.vacation.push(vacation);
              wishList.save();
              });
          });
          res.redirect("/vacation/index");
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.vacation_index_get = (req, res) => {
    Vacation.find().populate('wishlist')
    .then(vacations => {
        res.render("vacation/index", {vacations: vacations, moment}) 
    })
    .catch(err => {
        console.log(err);
    });
};

exports.vacation_show_get = (req, res) => {
    console.log(req.query.id);

    Vacation.findById(req.query.id).populate('wishlist')
    .then(vacation => {
        res.render("vacation/detail", {vacation, moment})
    })
    .catch(err => {
        console.log(err);
    });
};

exports.vacation_delete_get = (req, res) => {
    console.log(req.query.id);
    Vacation.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("vacation/index")
    })
    .catch(err => {
        console.log(err);
    })
}

exports.vacation_edit_get = (req, res) =>{
    Vacation.findById(req.query.id)
    .then((vacation) => {
        res.render("vacation/edit", {vacation})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.vacation_update_put = (req, res) => {
    Vacation.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/vacation/index");
    })
    .catch(err => {
        console.log(err);
    })
}