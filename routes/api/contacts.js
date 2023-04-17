const express = require("express");
const router = express.Router();

const validateBody = require("../../utils/validateBody");
const { schema } = require("../../models/contact");

const ctrl = require("../../controllers/contacts-controllers");

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(schema.addSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", validateBody(schema.addSchema), ctrl.updateContact);

router.patch(
  "/:contactId/favorite",
  validateBody(schema.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
