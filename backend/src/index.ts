require('dotenv').config()
import express from 'express'
import db from './models/index'
import router from './routes'
import { admins } from './seeders/admins'

// try{
//     const createAdmins = () => {
//         admins.map(admin => {
//             db.Admin.create(admin).then(() => {console.log("It works")}).catch((e:any) => {console.error(e)})
//         })
//     }
//     createAdmins()
// }catch(e){
//     console.log("it broke")
// }



const app = express()
const PORT = process.env.PORT


app.use(express.json())
app.use('/api', router)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})
