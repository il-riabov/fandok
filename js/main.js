$('.burger-open').click(function() {
    $('.burger-open').toggleClass('open')
    $('.burger-close').toggleClass('open');
    $('.nav-item').toggleClass('open');
})

$('.burger-close').click(function() {
    $('.burger-open').toggleClass('open')
    $('.burger-close').toggleClass('open');
    $('.nav-item').toggleClass('open');
});

var slideIndex_one = 1;
showDivs_one(slideIndex_one);
function one(n_one) { showDivs_one(slideIndex_one += n_one); }
function currentDiv_one(n_one) { showDivs_one(slideIndex_one = n_one); }

function showDivs_one(n_one) {
  var i_one;
  var x_one = document.getElementsByClassName("one");
  if (n_one > x_one.length) {slideIndex_one = 1}    
  if (n_one < 1) {slideIndex_one = x_one.length} ;
  for (i_one = 0; i_one < x_one.length; i_one++) {
     x_one[i_one].style.display = "none";  
  }
  x_one[slideIndex_one-1].style.display = "flex";  
}

var slideIndex_two = 1;
showDivs_two(slideIndex_two);
function two(n_two) { showDivs_two(slideIndex_two += n_two); }
function currentDiv_two(n_two) { showDivs_two(slideIndex_two = n_two); }

function showDivs_two(n_two) {
  var i_two;
  var x_two = document.getElementsByClassName("two");
  if (n_two > x_two.length) {slideIndex_two = 1}    
  if (n_two < 1) {slideIndex_two = x_two.length} ;
  for (i_two = 0; i_two < x_two.length; i_two++) {
     x_two[i_two].style.display = "none";  
  }
  x_two[slideIndex_two-1].style.display = "flex";  
}

var slideIndex_three = 1;
showDivs_three(slideIndex_three);
function three(n_three) { showDivs_three(slideIndex_three += n_three); }
function currentDiv_three(n_three) { showDivs_three(slideIndex_three = n_three); }

function showDivs_three(n_three) {
  var i_three;
  var x_three = document.getElementsByClassName("three");
  if (n_three > x_three.length) {slideIndex_three = 1}    
  if (n_three < 1) {slideIndex_three = x_three.length} ;
  for (i_three = 0; i_three < x_three.length; i_three++) {
     x_three[i_three].style.display = "none";  
  }
  x_three[slideIndex_three-1].style.display = "flex";  
}

var slideIndex_four = 1;
showDivs_four(slideIndex_four);
function four(n_four) { showDivs_four(slideIndex_four += n_four); }
function currentDiv_four(n_four) { showDivs_four(slideIndex_four = n_four); }

function showDivs_four(n_four) {
  var i_four;
  var x_four = document.getElementsByClassName("four");
  if (n_four > x_four.length) {slideIndex_four = 1}    
  if (n_four < 1) {slideIndex_four = x_four.length} ;
  for (i_four = 0; i_four < x_four.length; i_four++) {
     x_four[i_four].style.display = "none";  
  }
  x_four[slideIndex_four-1].style.display = "flex";  
}

var slideIndex_five = 1;
showDivs_five(slideIndex_five);
function five(n_five) { showDivs_five(slideIndex_five += n_five); }
function currentDiv_five(n_five) { showDivs_five(slideIndex_five = n_five); }

function showDivs_five(n_five) {
  var i_five;
  var x_five = document.getElementsByClassName("five");
  if (n_five > x_five.length) {slideIndex_five = 1}    
  if (n_five < 1) {slideIndex_five = x_five.length} ;
  for (i_five = 0; i_five < x_five.length; i_five++) {
     x_five[i_five].style.display = "none";  
  }
  x_five[slideIndex_five-1].style.display = "flex";  
}

var card = document.getElementsByClassName("mySlides");
for (i=0; i<card.length; i++) {
    card[i].addEventListener("click", function() {
        titles = this.children;
        for (let title of titles) {
            txt_title = title.innerHTML;
            title_form = document.querySelector('.title_form')
            title_form.textContent = txt_title;
            $('body').css('overflow', 'hidden');
            $('.background_form').css('display', 'block');
            $('.forms-blocks').css('display', 'flex');
            $('.block_form').css('display', 'block');
        }

    })
}

$(".btn-close").click(function() {
    $('body').css('overflow', 'visible');
    $('.background_form').css('display', 'none');
    $('.forms-blocks').css('display', 'none');
    $('.block_form').css('display', 'none');

    title_form.textContent = "";  
})

const TOKEN = "6016748043:AAHpH8Nots41ZoNJmRjsBDrHf207_VhwpBw";
const CHAT_ID = "-1001933628180";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;


document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();          
    message = `Заявка с сайта\n\n`;
    message += `Карточка: ${txt_title}\n`;
    message += `Клиент:  ${ this.name.value }\n`;
    message += `Email:  ${ this.email.value }\n`;
    message += `Телефон:  ${ this.telephone.value }\n`;
    message += `Сообщение:  ${ this.question.value }\n`;
    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mod: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = "";
        this.email.value = "";
        this.telephone.value = "";
        this.question.value = "";
        $('.block_form').css('display', 'none')
        $('.block_submitted-form').css('display', 'block')
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() =>{
        console.log('Конец')
    })
  })
  
  $('.btn_form_ok').click(function() { 
      $('.background_form').css('display', 'none');
      $('.forms-blocks').css('display', 'none');
      $('.block_submitted-form').css('display', 'none');
      $('body').css('overflow', 'visible');
  })