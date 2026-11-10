
const prisma = require("..//prisma");

// ดึงข้อมูลทั้งหมด และ ค้นหาข้อมูลจากชื่อวิชา
exports.getAllSubjects = async (req, res) => {
    try {
        const search = req.query.search || "";

        const subjects = await prisma.subject.findMany({
            where: {
                name: { contains: search }
            },
            orderBy: { id: "asc" },
        });

        res.json(subjects);

    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
};

// ดึงข้อมูลรายวิชาตาม ID
exports.getSubjectById = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const subject = await prisma.subject.findUnique({
            where: { id }
        });

        if (!subject) {
            return res.status(404).json({ message: "Subject is not found" });
        }

        res.json(subject);

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// เพิ่มข้อมูลรายวิชา
exports.createSubject = async (req, res) => {
    try {
        const { name, objective, discription, teacher, credit } = req.body;

        if (!name || !objective || !discription || !teacher || credit === undefined || credit === null || credit === "") {
            return res.status(400).json({ message: "Please fill all information" });
        }

        const newSubject = await prisma.subject.create({
            data: {
                name,
                objective,
                discription,
                teacher,
                credit: Number(credit)
            },
        });

        res.status(201).json(newSubject);

    } catch (error) {
        res.status(500).json({ message: "Fail" });
    }
};

// แก้ไขข้อมูลรายวิชา
exports.updateSubject = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, objective, discription, teacher, credit } = req.body;

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        if (!name || !objective || !discription || !teacher || credit === undefined || credit === null || credit === "") {
            return res.status(400).json({ message: "Please fill all information" });
        }

        const subject = await prisma.subject.findUnique({
            where: { id }
        });

        if (!subject) {
            return res.status(404).json({ message: "Subject is not found" });
        }

        const updatedSubject = await prisma.subject.update({
            where: { id },
            data: {
                name,
                objective,
                discription,
                teacher,
                credit: Number(credit)
            }
        });

        res.json(updatedSubject);

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// ลบข้อมูลรายวิชา
exports.deleteSubject = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        const subject = await prisma.subject.findUnique({
            where: { id }
        });

        if (!subject) {
            return res.status(404).json({ message: "Subject is not found" });
        }

        await prisma.subject.delete({
            where: { id }
        });

        res.json({ message: "Subject deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
