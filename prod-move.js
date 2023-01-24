var fs = require('fs-extra')
const path = require('path');

let baseDir = path.join(__dirname, '/./dist/DQ');
console.log(baseDir);
fs.readFile(`${baseDir}/index.html`,'utf8', (err, data) => {
    if (err) throw err;   
    data = data.replace('href="/"','href="/static/"').replaceAll('<script','<script type="text/javascript"');
    fs.writeFile(`${baseDir}/index.html`,data,(err)=>{
        if (err) throw err;
        console.log('HTML Updated');
    })
});

let distDir = path.join(__dirname , "../DQ-Golden/static");
fs.remove(distDir, (err)=>{
    if (err) throw err; 
    fs.copy(baseDir, distDir, function (err) {
        if (err) return console.error(err)
        console.log("Files successfully moved to"+ distDir);
    })
    
});


