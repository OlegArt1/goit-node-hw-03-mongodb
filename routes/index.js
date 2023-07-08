const express = require("express");

const contactsRoutes = require("./contacts");
const router = express.Router();

router.use("/contacts", contactsRoutes);

module.exports = router;