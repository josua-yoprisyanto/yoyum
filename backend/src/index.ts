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

//I HAVE NO IDEA WHY IT WORKS I HAVE BEEN DOING THIS FOR THE PAST 10 HOURS AND IT JUST DECIDED TO FUCKING WORK AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

const app = express()
const PORT = process.env.PORT


app.use(express.json())
app.use('/api', router)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})
