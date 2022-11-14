(function () {
    const items = [
      '🔴', // 0
      '🟥', // 1
      '🛑', // 2
      '🔻', // 3
      '🔺', // 4
      '⭕', // 5
      '📕', // 6
      '🩸', // 7
      '💢', // 8
      '♨️', // 9
    ];
    const doors = document.querySelectorAll('.door');
    const answer = document.querySelector('#answer');
    const answerButtons = document.querySelector('.buttons2');

    document.querySelector('#submit-button').addEventListener('click', submit);
    document.querySelector('#spinner').addEventListener('click', spin);
    document.querySelector('#reseter').addEventListener('click', init);

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    
    let phoneNumber = "";

    function init(firstInit = true, groups = 1, duration = 1) {

        phoneNumber = "";
        answer.style.display = 'none';
        answerButtons.style.display = 'none';

      for (const door of doors) {
        if (firstInit) {
          door.dataset.spinned = '0';
        } else if (door.dataset.spinned === '1') {
          return;
        }
  
        const boxes = door.querySelector('.boxes');
        const boxesClone = boxes.cloneNode(false);
        const pool = ['🔴'];
  
        if (!firstInit) {
          const arr = [];
          for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
            arr.push(...items);
          }
          pool.push(...shuffle(arr));

  
          boxesClone.addEventListener(
            'transitionstart',
            function () {
              door.dataset.spinned = '1';
              this.querySelectorAll('.box').forEach((box) => {
                box.style.filter = 'blur(1px)';
              });
            },
            { once: true }
          );
  
          boxesClone.addEventListener(
            'transitionend',
            function () {
              this.querySelectorAll('.box').forEach((box, index) => {
                box.style.filter = 'blur(0)';
                if (index > 0) this.removeChild(box);
              });
            },
            { once: true }
          );
        }
  
        for (let i = pool.length - 1; i >= 0; i--) {
          const box = document.createElement('div');
          box.classList.add('box');
          box.style.width = door.clientWidth + 'px';
          box.style.height = door.clientHeight + 'px';
          box.textContent = pool[i];
          let index = 0;
          if (i === 10){
            switch(box.textContent) {
              case '🟥':
                index = 1;
                break;
              case '🛑':
                index = 2;
                break;
              case '🔻':
                index = 3;
                break;
              case '🔺':
                index = 4;
                break;
              case '⭕':
                index = 5;
                break;
              case '📕':
                index = 6;
                break;
              case '🩸':
                index = 7;
                break;
              case '💢':
                index = 8;
                break;
              case '♨️':
                index = 9;
                break;
              default:
                index = 0;
            } 
            phoneNumber += index;
          }
          boxesClone.appendChild(box);
        }
        boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
        boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;
        door.replaceChild(boxesClone, boxes);
      }
    }
  
    async function spin() {
        init(false, 1, 2);
        
        for (const door of doors) {
          const boxes = door.querySelector('.boxes');
          const duration = parseInt(boxes.style.transitionDuration);
          boxes.style.transform = 'translateY(0)';
          await new Promise((resolve) => setTimeout(resolve, duration * 100));
        }
        delay(2500).then(() => answer.style.display = 'flex');
        delay(2500).then(() => answerButtons.style.display = 'flex');
    }
  
    function shuffle([...arr]) {
      let m = arr.length;
      while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
      }
      return arr;
    }

    function submit() {
      alert("Your phone number is: (" + phoneNumber.substring(0, 3) + ")-" + phoneNumber.substring(3, 6) + "-" + phoneNumber.substring(6, 10));
  } 
  
    init();
  })();