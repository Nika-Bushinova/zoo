
let summ=document.querySelectorAll('.summ')
let summAmount=document.querySelectorAll('.summAmount')
summ.forEach((el,i)=>{
   el.addEventListener('click', function m(eo){
let donateSum=document.getElementById('pick_and_feed__input')
donateSum.setAttribute('placeholder',summAmount[i].innerHTML)
donateSum.value=donateSum.setAttribute('value',summAmount[i].innerHTML)
console.log(el.checked)
   }   )
})
summAmount.forEach((el,i)=>{
   el.addEventListener('click', function m(eo){
let donateSum=document.getElementById('pick_and_feed__input')
donateSum.setAttribute('placeholder',summAmount[i].innerHTML)
donateSum.value=donateSum.setAttribute('value',summAmount[i].innerHTML)
summ[i].checked=true
console.log(summ[i].checked)
   }   )
})