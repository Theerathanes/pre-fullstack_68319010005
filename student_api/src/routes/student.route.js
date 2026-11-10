const express = require("express");
const studentController = require("..//controllers/student.controllers")
const router = express.Router();

router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.post("/", studentController.createStudent);
router.put("/", studentController.updateStudent);
router.put("/id", studentController.updateStudent);
router.delete("/", studentController.deleteStudent);
router.delete("/id", studentController.deleteStudent);

module.exports = router;