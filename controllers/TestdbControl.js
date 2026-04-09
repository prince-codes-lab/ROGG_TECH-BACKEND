const mongoose = require('mongoose');
const fs = require('node:fs');
const path = require('node:path')

const testArray = []

const DbPath = path.join(`${process.cwd()}/db/`, 'testDb.json' );

const readDbPath = () => {

    const data = fs.readFileSync(DbPath, 'utf-8');
    return JSON.parse(data)

}

    //--------------------//
   //--------------------//
  //--------------------//


const createUser = (user) => {

    const data = readDbPath() // get db details
    data.people.push(user) // add user to the array before writing to the file.
    fs.writeFileSync(DbPath, JSON.stringify(data, null, 2), {
        // flag: 'a',
        encoding: 'utf-8'
    }) // write updated data back to file
}





module.exports = {
    createUser,
  
}

