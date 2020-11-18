var translate = document.querySelectorAll(".translate");
var bigTit = document.querySelector('.big_tit');
var header = document.querySelector('header');
var headerRight = document.querySelector('.header_right');

// nav 토글
var navToggle = {
  openNav : function(){
    headerRight.classList.add('on');
  },
  closeNav : function(){
    headerRight.classList.remove('on');
  }
}

// header 높이 글씨 이벤트
let headerHigh = header.offsetHeight;

window.addEventListener('scroll', function(){
  let scroll = window.pageYOffset

  translate.forEach(element => {
    var speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  })
  bigTit.style.opacity = - scroll / (headerHigh / 6) + 5
});
