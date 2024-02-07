let fs = require('fs')
let path = require('path');
const Exercise = path.join(__dirname,'./data/zubi.txt')

function writeToAFIle(content) {
    try{
     fs.writeFile(Exercise, content, err=>{
        if(!err) console.log('Saved!')
     })
    }catch(e) {
        console.log('Issue when writing to a file');
    }
};

module.exports = {
    writeToAFIle
}