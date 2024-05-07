 function useCountDown({ endTime, stepTime, onEnd }) {

  const fnGetTime = () => performance.now()

   const beginTime = fnGetTime();
   const endTimeComputed = endTime + beginTime

   let timer = null
   let nextTime = stepTime;

   const fnRun = () => {
     let runTime =  fnGetTime()
     timer = setTimeout(()=>{
       const iUseTime = fnGetTime() - runTime

       if(iUseTime > nextTime) {
         nextTime -=  iUseTime - nextTime
       } else {
         nextTime = stepTime;
       }

       console.log(iUseTime, nextTime)
       if (endTimeComputed <= beginTime + fnGetTime()) {
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
