let block1=document.querySelectorAll('.block__one')//item
let block2=document.querySelectorAll('.block__two')//item
let act=document.querySelectorAll('.active')
let currentItem=act.length-1;
let isEnabled=true;

let blockImg=document.querySelectorAll('.council__img')
let blockText=document.querySelectorAll('.council__text')
let blockWorks=document.querySelectorAll('.works__block_img')
let sliderText=document.querySelectorAll('.slider__text')
let footerItem=document.querySelectorAll('.footer__item')
let sliderItem=document.querySelectorAll('slider__item')
let count=0;
let slickList=document.querySelector('.slick-list')
let slickTrack=document.querySelector('.slick-track')
let footB=document.getElementById('footB')
let footInput=document.getElementById('footIn')
let div=document.createElement('div')
let wrapper=document.querySelector('.wrapper')
blockText.forEach((el,i)=>{
   if (window.matchMedia("(max-width: 999px)").matches) {
      if(el===blockText[0]||el===blockText[1]||el===blockText[4]||el===blockText[8]||el===blockText[9]||el===blockText[12]||el===blockText[14]||el===blockText[15]||el===blockText[20]||el===blockText[21]){
         el.style.background='url(../../assets/icons/banana-bamboo_icon.svg)220px/10% no-repeat'
      }
      if(el===blockText[2]||el===blockText[3]||el===blockText[5]||el===blockText[6]||el===blockText[7]||el===blockText[10]||el===blockText[11]||el===blockText[13]||el===blockText[16]||el===blockText[17]||el===blockText[18]||el===blockText[19]||el===blockText[22]||el===blockText[23]){
         el.style.background='url(../../assets/icons/meet-fish_icon.svg)230px/15% no-repeat'
      }
   }else{
   if(el===blockText[0]||el===blockText[1]||el===blockText[4]||el===blockText[8]||el===blockText[9]||el===blockText[12]||el===blockText[14]||el===blockText[15]||el===blockText[20]||el===blockText[21]){
      el.style.background='url(../../assets/icons/banana-bamboo_icon.svg)321px no-repeat'
   }
   if(el===blockText[2]||el===blockText[3]||el===blockText[5]||el===blockText[6]||el===blockText[7]||el===blockText[10]||el===blockText[11]||el===blockText[13]||el===blockText[16]||el===blockText[17]||el===blockText[18]||el===blockText[19]||el===blockText[22]||el===blockText[23]){
      el.style.background='url(../../assets/icons/meet-fish_icon.svg)310px no-repeat'
   }
}
})

block1.forEach((el,i)=>{
  el.addEventListener('mouseover',()=>{
   el.style.background='rgb(0,0,0,0)'
   el.style.border='0px'
blockText[i*2].style.transform= 'translateY(-80%) scale(1.1)';
blockText[i*2].style.backgroundColor='black'
blockText[i*2].style.paddingBottom='10px'
blockText[i*2].style.paddingLeft='10px'
blockText[i*2].style.color='white'
blockImg[i*2].style.transform='scale(1.1)'
  })
  el.addEventListener('mouseleave',()=>{
   el.style.border='1px solid #FA6F32'
   blockText[i*2].style.transform= 'translateY(0%)';
   blockText[i*2].style.backgroundColor='rgb(0,0,0,0)'
   blockText[i*2].style.color='black'
   blockText[i*2].style.paddingBottom='0px'
   blockImg[i*2].style.transform='scale(1)'
   blockText[i*2].style.paddingLeft='0px'
  })
})
block2.forEach((el,i)=>{
   el.addEventListener('mouseover',()=>{
    el.style.background='rgb(0,0,0,0)'
    el.style.border='0px'
 blockText[i*2+1].style.transform= 'translateY(-80%) scale(1.1)';
 blockText[i*2+1].style.backgroundColor='black'
 blockText[i*2+1].style.paddingBottom='10px'
 blockText[i*2+1].style.paddingLeft='10px'
 blockText[i*2+1].style.color='white'
 blockImg[i*2+1].style.transform='scale(1.1)'
   })
   el.addEventListener('mouseleave',()=>{
    el.style.border='1px solid #FA6F32'
    blockText[i*2+1].style.transform= 'translateY(0%)';
    blockText[i*2+1].style.backgroundColor='rgb(0,0,0,0)'
    blockText[i*2+1].style.color='black'
    blockText[i*2+1].style.paddingBottom='0px'
    blockImg[i*2+1].style.transform='scale(1)'
    blockText[i*2+1].style.paddingLeft='0px'
   })
 })

blockWorks.forEach((el,i)=>{
   blockWorks[0].style.background='url(../../assets/icons/pay.svg)center center  no-repeat #FFFFFF'
   blockWorks[1].style.background='url(../../assets/icons/zoo.svg)center center no-repeat #FFFFFF'
   blockWorks[2].style.background='url(../../assets/icons/monkey.svg)center center no-repeat #FFFFFF'
})

sliderText.forEach((el,i)=>{
   sliderText[3].style.background='url(../../assets/icons/Vector3.svg) 10px 11px no-repeat, #F1F3F2'
   sliderText[2].style.background='url(../../assets/icons/Vector3.svg) 10px 11px no-repeat,#F1F3F2'
   sliderText[4].style.background='url(../../assets/icons/first.svg)10px 11px no-repeat,#F1F3F2'
   sliderText[0].style.background='url(../../assets/icons/second.svg)10px 11px no-repeat,#F1F3F2'
   sliderText[1].style.background='url(../../assets/icons/third.svg)10px 11px no-repeat,#F1F3F2'
})
footerItem.forEach((el,i)=>{
   footerItem[0].style
})


//slider
$('.slider').on('init reInit',function(event,slick){
   var amount = slick.slideCount;
   $('#range').attr('max',amount);
 })
 
 $('.slider').on('afterChange',function(e,slick,currentSlide){
   $('#range').val(currentSlide+1);
 })
 
 $('#range').on('input change',function(){
   $('.slider').slick('slickGoTo',this.value-1);
 });
 $(function (){

   var r = $('input');
   r.on('mouseenter',function(){
     var p = r.val();
     r.on('click',function(){
       p = r.val();

     });
     r.on('mousemove',function(){
       p = r.val();
   
     });
   });
 });
 $(document).ready(function(){
   $('.slick1').slick({
      arrows:true,
      dots:false,
      adaptiveHeight:false,
      slidesToShow:1,
      slidesToScroll:1,

      initialSlide:0,
      autoplay:false,
      autoplaySpeed:500,
      infinite:true,
      pauseOnDotsHover:true,
      pauseOnFocus:true,
      waitForAnimate:false,
      centerMode:false,
      variableWidth:true,
      responsive: [
         {
         breakpoint: 650,
         settings: {
  slidesToShow:2,
  slidesToScroll: 2,
  initialSlide:1,
speed:500,
  
         }
       }],
       responsive: [{
         breakpoint: 330,
         settings: {
  slidesToShow:1,
  slidesToScroll: 1,
  initialSlide:1,
  speed:500,
  
         }
       }]
   })
});
$(document).ready(function(){
   $('.slick2').slick({
      arrows:true,
      dots:false,
      adaptiveHeight:false,
      slidesToShow:3,
      slidesToScroll:1,
      speed:2000,
      initialSlide:0,
      autoplay:false,
      autoplaySpeed:2000,
      infinite:true,
      pauseOnDotsHover:true,
      pauseOnFocus:true,
      waitForAnimate:false,
      centerMode:true,
      variableWidth:true,
      responsive: [
         {
         breakpoint: 899,
         settings: {
           vertical: true,
  verticalSwiping: true,
  slidesToShow:3,
  slidesToScroll: 1,
  initialSlide:1,
  variableWidth: false,
         }
       }]
   })

});


//burger
$(document).ready(function() {
   $('.header__burger').click(function(event){
      $('.header__burger,.header__menu').toggleClass('_active');
    
     div.style.position='absolute';
     div.style.background='rgba(0,0,0,0.7)';
     div.style.top='0';
     div.style.left='0';
     div.style.width='100%';
     div.style.height=document.documentElement.scrollHeight + 'px';
     div.classList.add('black');
     div.style.display='block'
     wrapper.appendChild(div);
   })
})

$(document).ready(function() {
   $('.black,.header__close').click(function(event){
      $('.header__burger,.header__menu').removeClass('_active');
      div.style.display='none'
   })
})

$(document).ready(function() {
   $('.first-button, ._account').click(function(event){
      $('.pop-up').toggleClass('_active-pop');
      let signBlock=document.querySelector('._active-pop')
      signBlock.style.height="660px"
   })
})

$(document).ready(function() {
   $('.preview,.steps,.destinations,.stories').click(function(event){
      $('.pop-up').removeClass('_active-pop');
   })
})

if (window.matchMedia("(max-width: 650px)").matches)  {

   sliderText.forEach((el,i)=>{
      let el2=el.cloneNode('true')

      el.addEventListener('click',()=>{
         count++
        el2.style.overflow='visible';
        el2.style.height='350px'
        //el.style.marginTop='100px';
        el2.style.marginTop=document.documentElement.scrollHeight/1.3+'px';
        el2.style.position='absolute';
        el2.style.width='100%';
        el2.style.zIndex='25';
        el2.style.paddingTop='20px';
        el2.style.background="url('../../assets/icons/x_icon.svg') 94% 20px  no-repeat, rgb(241, 243, 242)"
        div.style.position='absolute';
        div.style.background='rgba(0,0,0,0.7)';
        div.style.top='0';
        div.style.left='0';
        div.style.width='100%';
        div.style.height=document.documentElement.scrollHeight+'px';
        div.classList.add('black');
        div.style.display='block';
        div.style.zIndex='10';
    
       
        wrapper.appendChild(div);
        wrapper.appendChild(el2)
      })

      el2.addEventListener('click',()=>{
         count--
            wrapper.removeChild(el2)
div.style.display='none'
      })
            
         })
   }
