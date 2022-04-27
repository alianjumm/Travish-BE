const express = require('express');
const router = express.Router();
const isLoggedIn = require("../helper/isLoggedIn");
const wishListCntrl = require('../controllers/wishList');   


router.get("/wishList/index", isLoggedIn, wishListCntrl.wishList_index_get);
router.post("/wishList/add", isLoggedIn, wishListCntrl.wishList_create_post);
router.get("/wishList/detail", isLoggedIn, wishListCntrl.wishList_show_get);
router.delete("/wishList/delete", isLoggedIn, wishListCntrl.wishList_delete_get);
router.get("/wishList/edit", isLoggedIn, wishListCntrl.wishList_edit_get);
router.put("/wishList/update", isLoggedIn, wishListCntrl.wishList_update_put);

module.exports = router;
