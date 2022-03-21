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