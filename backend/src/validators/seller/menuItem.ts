import * as yup from 'yup'

export const menuItemSchema = yup.object().shape({
    name: yup.string().required(),
    img: yup.string().nullable().default(null),
    price: yup.number().required(),
    type: yup.string().oneOf(['food', 'drink', 'other'])
})