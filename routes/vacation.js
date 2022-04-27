const express = require("express");
const isLoggedIn = require("../helper/isLoggedIn")

const router = express.Router();

const vacationCntrl = require("../controllers/vacation");

router.post("/vacation/add", vacationCntrl.vacation_create_post);
router.get("/vacation/index", vacationCntrl.vacation_index_get);
router.get("/vacation/detail", vacationCntrl.vacation_show_get);
router.get("/vacation/delete", vacationCntrl.vacation_delete_get);
router.get("/vacation/edit", vacationCntrl.vacation_edit_get);
router.put("/vacation/update", vacationCntrl.vacation_update_put);

module.exports = router;
