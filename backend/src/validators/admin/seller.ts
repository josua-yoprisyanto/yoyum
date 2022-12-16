import * as yup from 'yup'

export const sellerSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    number: yup.string().required(),
    password: yup.string().required(),
    active: yup.boolean().default(true),
    img: yup.string().nullable().default(null)
})