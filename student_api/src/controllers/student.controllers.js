const prisma = require("..//prisma");

// ดึงข้อมูลทั้งหมด และ ค้นหาข้อมูลจากชื่อ
exports.getAllStudents = async (req, res) => {
    try{
        const search = req.query.search || "";
        const students = await prisma.student.findMany({
            where: { name: {contains: search}},
            orderBy: { id: "asc" },
        });
        res.json(students);
    }catch (error) {
        res.status(500).json({ message: "Error"});
    }
}

exports.getStudentById = async (req, res) => {
    try {
            const id = Number(req.params.id);
            const student = await prisma.student.findUnique({
                where: {id}
            });
            if (!student) {
                return res.status(404).json({ message: 'Student is not found'});
            }
            res.json(student);
    } catch {
        res.status(500).json({ message: 'Internal Sever Error'});
    }
};

exports.createStudent = async (req, res) => {
    try {
        const{ name,age,major } = req.body;
        if(!name || !age || !major) {
            return res.status(400).json({ message: 'please field Information' });
        }

        const newStudent = await prisma.student.create({
            data: { name, age: Number(age), major },
        });
        res.status(201).json(newStudent);
    }catch (error) {
        res.status(500).json({ message : 'Fail' });
    }
};

// แก้ไขข้อมูลนักเรียน
exports.updateStudent = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, age, major } = req.body;

        if (!name || !age || !major) {
            return res.status(400).json({ message: 'please field Information' });
        }

        const student = await prisma.student.findUnique({
            where: { id }
        });

        if (!student) {
            return res.status(404).json({ message: 'Student is not found' });
        }

        const updatedStudent = await prisma.student.update({
            where: { id },
            data: {
                name,
                age: Number(age),
                major
            }
        });

        res.json(updatedStudent);

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// ลบข้อมูลนักเรียน
exports.deleteStudent = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const student = await prisma.student.findUnique({
            where: { id }
        });

        if (!student) {
            return res.status(404).json({ message: 'Student is not found' });
        }

        await prisma.student.delete({
            where: { id }
        });

        res.json({ message: 'Student deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        }
};