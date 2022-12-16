import * as yup from 'yup'

export const sellerSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    number: yup.string().required(),
    password: yup.string().required(),
    active: yup.boolean().default(true)
})

export const imgSchema = yup.object().shape({
    img: yup.array().nullable().default(null)
})