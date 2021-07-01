const Database = require("./config")

const initDb = {
    async init(){
        //await espera o banco de dados dar o retorno para daí sim ir para a próxima linha
        const db = await Database()

        await db.exec(`CREATE TABLE rooms(
            id INTEGER PRIMARY KEY, 
            pass TEXT
        )`)

        await db.exec(`CREATE TABLE questions(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`)

        await db.close()
    }
}


initDb.init();