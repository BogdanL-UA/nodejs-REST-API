const express = require("express");
const router = express.Router();

const { authenticate, isValidId } = require("../../middlewares/index");
const validateBody = require("../../utils/validateBody");
const { schema } = require("../../models/contact");

const ctrl = require("../../controllers/contacts-controllers");

router.get("/", authenticate, ctrl.getAllContacts);

router.get("/:contactId", isValidId, authenticate, ctrl.getContactById);

router.post("/", authenticate, validateBody(schema.addSchema), ctrl.addContact);

router.delete("/:contactId", isValidId, authenticate, ctrl.deleteContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schema.addSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schema.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
