const express = require("express");
const subjectController = require("..//controllers/subject.controllers");
const router = express.Router();

router.get("/", subjectController.getAllSubjects);
router.get("/:id", subjectController.getSubjectById);
router.post("/", subjectController.createSubject);
router.put("/", subjectController.updateSubject);
router.put("/id", subjectController.updateSubject);
router.delete("/", subjectController.updateSubject);
router.delete("/id", subjectController.updateSubject);

module.exports = router;