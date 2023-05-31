const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const schema = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schema.addSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", validateBody(schema.addSchema), ctrl.updateById);

module.exports = router;
