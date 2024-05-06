 function useCountDown({ leftTime, ms = 1000, onEnd }) {
  let countdownTimer;
  let startTimer;
  let startTime = performance.now();
  let nextTime = leftTime % ms;

  let count = leftTime;

  const clearTimer = () => {
    if (countdownTimer) {
      clearTimeout(countdownTimer);
    }
    if (startTimer) {
      clearTimeout(startTimer);
    }
  };

  const startCountDown = () => {
    clearTimer();
    const currentTime = performance.now();
    const executionTime = currentTime - startTime;

    const diffTime =
      executionTime > nextTime
        ? executionTime - nextTime
        : nextTime - executionTime;

    count = count - (Math.floor(executionTime / ms) || 1) * ms - diffTime;
    if (count <= 0) {
      count = 0;
      clearTimer();
      if (onEnd) {
        onEnd();
      }
      return;
    }

    nextTime =
      executionTime > nextTime ? ms - diffTime : ms + diffTime;

    startTime = performance.now();

    countdownTimer = setTimeout(() => {
      startCountDown();
      console.log(count)
    }, nextTime);
  };

  startTimer = setTimeout(startCountDown, nextTime);

  return {
    count,
    clearTimer,
  };
}

 const countdownOptions = {
   leftTime: 60 * 1000, // 60 seconds
   ms: 1000, // 1 second
   onEnd: () => {
     console.log('Countdown finished!');
   },
 };

const { clearTimer } = useCountDown(countdownOptions);
