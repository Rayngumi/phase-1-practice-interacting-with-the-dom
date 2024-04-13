document.addEventListener("DOMContentLoaded", function() {
    let counterValue = 0;
    let timerInterval;
    const counter = document.getElementById('counter');
    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    const heartBtn = document.getElementById('heart');
    const pauseBtn = document.getElementById('pause');
    const submitBtn = document.getElementById('submit');
    const likesList = document.querySelector('.likes');
    const commentList = document.getElementById('list');
    const commentInput = document.getElementById('comment-input');
  
    function startTimer() {
      timerInterval = setInterval(() => {
        counterValue++;
        counter.innerText = counterValue;
      }, 1000);
    }
  
    function pauseTimer() {
      clearInterval(timerInterval);
      plusBtn.disabled = true;
      minusBtn.disabled = true;
      heartBtn.disabled = true;
      submitBtn.disabled = true;
      pauseBtn.innerText = "resume";
    }
  
    function resumeTimer() {
      startTimer();
      plusBtn.disabled = false;
      minusBtn.disabled = false;
      heartBtn.disabled = false;
      submitBtn.disabled = false;
      pauseBtn.innerText = "pause";
    }
  
    plusBtn.addEventListener('click', () => {
      counterValue++;
      counter.innerText = counterValue;
    });
  
    minusBtn.addEventListener('click', () => {
      counterValue--;
      counter.innerText = counterValue;
    });
  
    heartBtn.addEventListener('click', () => {
      const like = document.createElement('li');
      like.innerText = `Number ${counterValue} has been liked.`;
      likesList.appendChild(like);
    });
  
    pauseBtn.addEventListener('click', () => {
      if (pauseBtn.innerText === "pause") {
        pauseTimer();
      } else {
        resumeTimer();
      }
    });
  
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const comment = document.createElement('div');
      comment.innerText = commentInput.value;
      commentList.appendChild(comment);
      commentInput.value = '';
    });
  
    // Start the timer
    startTimer();
  });
  