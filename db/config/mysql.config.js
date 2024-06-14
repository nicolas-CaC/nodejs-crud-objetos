// const config = {
//     host: 'sql3.freesqldatabase.com',
//     user: 'sql3713892',
//     password: 'fza6WJ5ckp',
//     database: 'sql3713892'
// }
const config = {
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DB
}

export default config