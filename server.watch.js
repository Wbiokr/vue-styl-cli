const fs = require('fs')
const path = require('path')
const chokidar = require('chokidar')
const shelljs = require('shelljs')
// fs.watch(path.resolve(__dirname,'src'),(e,file)=>{
//   console.log(e)
// })
// console.log(1212)

// process.env.isBuilding = false;

chokidar.watch(path.resolve(__dirname,'src')).on('change',()=>{
  // if(process.env.isBuilding) return ;

  // process.env.isBuilding = true;
  console.log('start...')
  shelljs.exec('npm run build');
  console.log('完成了...');
  // process.env.isBuilding = false;
  throw new Error('重新开始');

  // return ;

})

// chokidar.watch(path.resolve(__dirname,'index.html')).on('change',()=>{
//   process.env.isBuilding = false;
// })