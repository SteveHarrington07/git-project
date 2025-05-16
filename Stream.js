const fs = require("fs");

let readStream = fs.createReadStream("./Dummy/LargeData.txt", {encoding : "utf8"})
let writeStream = fs.createWriteStream("./streamData.txt");


readStream.on('data', (chunk) =>{
    console.log("----New chunk----");
    writeStream.write("\nNew Chunk\n")
    writeStream.write(chunk);
})

readStream.on("end", () =>{
    console.log("Reading the file has been finished");
})

// readStream.pipe(writeStream) //pipe is another simplified way of reading file content from one file and witing it on another file ;

//Direct Commit - differences