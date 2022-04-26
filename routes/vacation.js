const express = require("express");
var methodOverride = require('method-override')
const isLoggedIn = require("../helper/isLoggedIn")

const router = express.Router();

router.use(methodOverride('_method'))

const vacationCntrl = require("../controllers/vacation");

router.get("/vacation/add", isLoggedIn, vacationCntrl.vacation_create_get);
router.post("/vacation/add", vacationCntrl.vacation_create_post);
router.get("/vacation/index", vacationCntrl.vacation_index_get);
router.get("/vacation/detail", vacationCntrl.vacation_show_get);
router.get("/vacation/delete", vacationCntrl.vacation_delete_get);
router.get("/vacation/edit", vacationCntrl.vacation_edit_get);
router.put("/vacation/update", vacationCntrl.vacation_update_put);

module.exports = router;