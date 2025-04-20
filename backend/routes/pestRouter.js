const express = require("express")
const multer = require("multer")
const {detectPestFromImage} = require("../detect")

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

router.post("/", upload.single('pest-image'), async (req, res) => {

    console.log(req.file)
    const photoUrl = `http://localhost:3000/uploads/${req.file.filename}`;

    try {
        const result = await detectPestFromImage({ photoUrl: photoUrl });
        console.log('Pest detection result:', result);
        return res.json(result);
    } catch (error) {
        console.error('Error detecting pest:', error);
        return res.status(404).json({ msg: "Can't detect pest from image , something went wrong!" })
    }

})

module.exports = router;