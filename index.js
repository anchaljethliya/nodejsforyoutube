//REPL
//1: js Expression
//2: use variable
//3: Multiline code / loops
//4: use(_) to get the last result
//5: we can use editor mode 

const fs = require("fs");
//creating new file
//fs.writeFileSync("read.txt", "welcome to my life");

//fs.writeFile("read.txt"," Anchal, welcome to my life")

//fs.appendFileSync("read.txt", "how r u? ")

  // const buf_data = fs.readFileSync("read.txt");

//node.js include an additional data type called buffer
// not available in browser's js
//buffer is mainly used to store binary data,
//while reading from a file or reciving packets over the network

 // org_data = buf_data.toString();
 // console.log(org_data);

 // to rename file
  fs.renameSync("read.txt" , "readwrite.txt");
