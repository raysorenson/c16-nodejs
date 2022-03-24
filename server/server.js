const path = require('path')
const fs = require('fs')

const chirpsPath = path.join(__dirname, '../chirps.json')



fs.readFile(chirpsPath,{
    encoding: "UTF-8"
}, (err, chirps) => {
    console.log(chirps);
    var chirp = JSON.parse(chirps)
    console.log(chirp);
    console.log(chirp.id);//returns undefined
    console.log(chirp.username);//returns undefined
    console.log(chirp.message);//returns undefined
})

