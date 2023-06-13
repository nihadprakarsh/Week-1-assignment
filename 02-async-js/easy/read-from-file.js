const fs = require('fs');

const filePath = 'input.txt';
// const content = 'This is the content to be written to the file.';

// fs.writeFile(filePath, content, 'utf8', (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//     return;
//   }

//   console.log('Written');
// });

function printFile(){
    let filepath = 'input.txt';
    fs.readFile(filepath,'utf8',(err,data)=>{
        if(err){
            console.log('Error');
        }
        else{
            console.log(data);
        }
    })
}


printFile();