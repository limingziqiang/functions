/*
比如 sleep(1000) 意味着等待1000毫秒，可从 Promise、Generator、Async/Await 等角度实现。
*/

//Promise
const sleep = time => {
  return new Promise(resolve => setTimeout(resolve, time))
}

sleep(1000).then(()=>{
  console.log(1)
})


//-----------------------------------------------------------------------------------------

//Generator
function* sleepGenerator(time) {
  yield new Promise(function(resolve, reject){
    setTimeout(resolve,time);
  })
}

sleepGenerator(1000).next().value.then(()=>{
  console.log(1)
})

//-----------------------------------------------------------------------------------------

//async
function sleep(time) {
  return new Promise(resolve=> setTimeout(resolve,time))
}

async function output() {
  let out = await sleep(1000);
  console.log(1);
  return out;
}

output();

//-----------------------------------------------------------------------------------------

function sleep(callback,time) {
  if(typeof callback === 'function'){
    setTimeout(callback,time);
  }
}

function output() {
  console.log(1)
}

sleep(output, 1000);






