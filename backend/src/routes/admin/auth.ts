import { Router } from "express";

const router = Router()

router.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    res.status(200).json({
        status: "Success",
        Credentials: {
            username: username,
            password: password
        }
    })
})

export default router