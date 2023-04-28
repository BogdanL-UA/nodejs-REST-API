const express = require("express");

const ctrl = require("../../controllers/auth-controllers");

const { schema } = require("../../models/user");

const { authenticate, upload } = require("../../middlewares/index");

const validateBody = require("../../utils/validateBody");

const router = express.Router();

router.post("/register", validateBody(schema.registerSchema), ctrl.register);

router.post("/login", validateBody(schema.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.get("/verify/:verificationCode", ctrl.verify);

router.post(
  "/resend-verify-email",
  validateBody(schema.emailSchema),
  ctrl.resendVerifyEmail
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
