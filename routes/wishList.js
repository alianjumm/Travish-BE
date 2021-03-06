const express = require('express');
const router = express.Router();
const isLoggedIn = require("../helper/isLoggedIn");
const wishListCntrl = require('../controllers/wishList');   



router.get("/wishList/index",  wishListCntrl.wishList_index_get);
router.post("/wishList/add",  wishListCntrl.wishList_create_post);
router.get("/wishList/detail",  wishListCntrl.wishList_show_get);
router.delete("/wishList/delete",  wishListCntrl.wishList_delete_get);
router.get("/wishList/edit",  wishListCntrl.wishList_edit_get);
router.put("/wishList/update",  wishListCntrl.wishList_update_put);
router.post("/wishList/addVac/:wishListID/:vacationID", wishListCntrl.wishList_addVac_post)
router.delete("/wishList/deleteVac/:wishListID/:vacationID", wishListCntrl.wishList_deleteVac_get)



module.exports = router;
