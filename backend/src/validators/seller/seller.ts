import * as yup from 'yup'

export const sellerEditSchema = yup.object().shape({
    name: yup.string().nullable().default(null),
    number: yup.string().nullable().default(null)
})