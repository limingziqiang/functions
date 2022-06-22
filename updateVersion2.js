try {
  function AddZero(time){
    if(time<10){
      return "0"+time
    }else{
      return time
    }
  }

  let packageTxt=fs.readFileSync('./package.json','utf8');
  let versionData = packageTxt.split('\n');
  let packageJson = JSON.parse(packageTxt);
  let VersionArr = packageJson.version.split('.');
  let date = new Date();
  let today = date.getFullYear()+""+AddZero((date.getMonth()+1))+""+AddZero(date.getDate())
  if(today == VersionArr[1]){
    VersionArr[2] = parseInt(VersionArr[2])+1
  }else{
    VersionArr[1] = date.getFullYear()+""+AddZero((date.getMonth()+1))+""+AddZero(date.getDate())
    VersionArr[2] = 1;
  }
  let versionLine = VersionArr.join('.');
  for(let i= 0; i<versionData.length;i++){
    if(versionData[i].indexOf('"version":')!=-1){
      versionData.splice(i,1,'  "version": "'+versionLine+'",');
      break;
    }
  }
  fs.writeFileSync('./package.json',versionData.join('\n'),'utf8');
  console.log(chalk.green.bold('更新版本号成功！当前最新版本号为：'+versionLine));
} catch(e) {
  console.log(chalk.red.bold('读取文件修改版本号出错:',e.toString()));
}
