const router = require("express").Router({ mergeParams: true });
const controller = require("./quotes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
    .route("/:quoteId")
    .get(controller.read)
    .all(methodNotAllowed);

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed);

module.exports = router;
