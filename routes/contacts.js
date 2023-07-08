const express = require("express");

const contactsController = require("../controllers/contacts");

const router = express.Router();

router.use(express.json());

router.get("/", contactsController.getContacts);

router.get("/:id", contactsController.getContactById);

router.post("/", contactsController.createContact);

router.put("/:id", contactsController.updateContact);

router.patch("/:id", contactsController.updateStatusContact);

router.delete("/:id", contactsController.deleteContact);

module.exports = router;