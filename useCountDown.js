 function useCountDown({ endTime, stepTime, onEnd }) {

   const beginTime = performance.now();
   const endTimeComputed = endTime + beginTime

   let timer = null
   let nextTime = stepTime;

   const fnRun = () => {
     let runTime =  performance.now()
     timer = setTimeout(()=>{
       const iUseTime = performance.now() - runTime

       if(iUseTime > nextTime) {
         nextTime =  nextTime - (iUseTime - nextTime)
       } else {
         nextTime = stepTime;
       }

       console.log(iUseTime, nextTime)
       if (endTimeComputed <= beginTime + performance.now()) {
         onEnd();
         clearTimeout(timer);
         timer = null;
       } else {
         fnRun();
       }

     }, nextTime)
   }

   fnRun();
}

 const countdownOptions = {
   endTime: 10 * 1000, // 60 seconds
   stepTime: 1000, // 1 second
   onEnd: () => {
     console.log('Countdown finished!');
   },
 };

useCountDown(countdownOptions);
