const fs = require("fs");

//This is to Write the file
// fs.writeFile("Message.txt","Hello from Node JS",(err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// }); 


//This is to Read the file
fs.readFile('./Message.txt', "utf8" , (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 