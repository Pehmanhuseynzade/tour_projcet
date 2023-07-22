const paymentModel = require("../models/payment.model")

const paymentModelController = {
    getAll: async (req, res) => {
        const { paymenttourName } = req.query
        const getpayment = await paymentModel.find()
        if (!paymenttourName) {
            res.status(200).send(getpayment)
        }
        else {
            const searched = get.filter((x) =>
                x.paymenttourName.toLowerCase().trim().includes(paymenttourName.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deletepayment = await paymentModel.findByIdAndDelete(id)
        res.status(200).send(deletepayment)
    },
    post: async (req, res) => {
        const { paymenttourName, paymenttourPrice, paymenttourDesc,paymenttourImage } = req.body
        const postpayment = new paymentModel({
            paymenttourName: paymenttourName,
            paymenttourPrice: paymenttourPrice,
            paymenttourDesc: paymenttourDesc,
            paymenttourImage : paymenttourImage

        })
        await postpayment.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: postpayment
        })
    }
}

module.exports = paymentModelController;