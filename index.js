const { spawn, exec } = require("child_process");
const path = require("path");
const fs = require('fs').promises;

const childProcess = [];
async function init() {
  for (let i = 0; i < 100; i++) {
    const fileName = `script_${i}.js`;
    const _path = path.resolve(__dirname, fileName);
    let command = (
      await fs.readFile(path.resolve(__dirname, "script.js"))
    ).toString();
    await fs.writeFile(_path, command);
    command = `node ${_path}`;
      console.log(command);
      childProcess.push(
      exec(command, (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error !== null) {
          console.log(`exec error: ${error}`);
        }
      })
    ); //sinse its temposrary better to run as child process
    await sleep(3000)
  }
  const maxTime = Date.now()+30 * 1000 * 60;
  while(Date.now()<maxTime){
      console.log('sleep');
      await sleep()
  }
  throw 'error'
}



function sleep(t = 5 * 1000 * 60) {
    return new Promise((resolve) => setTimeout(resolve, t));
}
process.on("exit", function () {
  while (childProcess.length) childProcess.shift().kill();
});
init();
