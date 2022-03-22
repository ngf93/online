/* password button state change */
function changeState(btn) {
    if(btn.dataset.state == 'invisible'){
      btn.previousElementSibling.setAttribute('type', 'text');
      btn.dataset.state = 'visible';
    } else {
      btn.previousElementSibling.setAttribute('type', 'password');
      btn.dataset.state = 'invisible';
    }
}

/*************** 
CUSTOM SELECT
****************/
window.onload = function() {
  let selectElement = document.querySelectorAll('.custom-select');
  let arrSelects = Array.from(selectElement);
  arrSelects.forEach(function(item, i, arr) {
      const btn = item.querySelector('button');
      const options = item.querySelector('.cs-options');
      let inputs = item.querySelectorAll('input');
      // let name = inputs[0].name;

      // let cur_inp; //выбранный input radio
      // for(let i = 0; i < inputs.length; i++){
      //   if(inputs[i].checked){
      //     cur_inp = inputs[i];
      //   }
      // }

      // if(cur_inp) {
      //   let label_content = cur_inp.nextElementSibling.innerHTML; //содержимое label следующего после выбранного input
      //   btn.innerHTML = label_content;
      // } else {
      //   btn.innerHTML = "Не выбрано";
      // }

      // открываем/закрываем окно навигации, добаляя/удаляя активный класс
      const toggleMenu = function() {
        options.classList.toggle('opened');
      }

      btn.addEventListener('click', () => { // при клике на кнопку
        toggleMenu();
      });
      
      //скрываем опции при клике вне селекта
      document.addEventListener('click', function(e) {
        const target = e.target;
        const current_sel = target == item || item.contains(target);
        const sel_is_opened = options.classList.contains('opened');
        if (!current_sel && sel_is_opened) {
          toggleMenu();
        }
      });

      let arrRadio = Array.from(inputs);
      arrRadio.forEach(function(item, i, arr) {
        item.addEventListener('change', (event) => {
          changeValue(item);
        });
      });
  
      function changeValue(el){
        btn.innerHTML = el.value;
        toggleMenu();
      }
  });
}


const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const swiper = new Swiper('.swiper', {
  
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 30,
    },
    992: {
      direction: 'vertical',
      pagination: false
    }
  }
});