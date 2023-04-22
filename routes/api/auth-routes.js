const express = require("express");

const ctrl = require("../../controllers/auth-controllers");

const { schema } = require("../../models/user");

const { authenticate } = require("../../middlewares/index");

const validateBody = require("../../utils/validateBody");

const router = express.Router();

router.post("/register", validateBody(schema.registerSchema), ctrl.register);

router.post("/login", validateBody(schema.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
