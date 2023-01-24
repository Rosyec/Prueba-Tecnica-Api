const { Router } = require("express");
const Suma = require("../models/Suma");
const router = Router();

router.post("/api", async (req = Request, resp = Response) => {
    const numbers = req.query;
    if ( numbers.num1 && numbers.num2 ) {
        const num1 = +numbers.num1;
        const num2 = +numbers.num2;
        const result = num1 + num2;

        try {
            const newSum = new Suma({
                num1,
                num2,
                result,
            });

            const responseBD = await newSum.save();

            resp.status(201).json({
                code: 201,
                message: "Was created successfully",
                error: false,
                response: responseBD.result,
            });
        } catch (error) {
            resp.status(500).json({
                code: 500,
                message: "There was an unexpected error",
                error: true,
                response: undefined,
            });
        }
    } else {
        return resp.status(400).json({
            code: 400,
            message: "Parameters num1 and num2 are required!",
            error: true,
            response: undefined,
        });
    }
});

module.exports = router;