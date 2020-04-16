var differenceInYears = require('date-fns/differenceInYears')
var differenceInMonths = require('date-fns/differenceInMonths')
var differenceInWeeks = require('date-fns/differenceInWeeks')
var differenceInDays = require('date-fns/differenceInDays')
var differenceInHours = require('date-fns/differenceInHours')
var differenceInMinutes = require('date-fns/differenceInMinutes')
var differenceInSeconds = require('date-fns/differenceInSeconds')
const button=document.querySelector('.button')
const datePicker = document.getElementById("myDate")
const hide = document.querySelector('.toogleHide')
var timer
var firstClick=true
var secTemplate=document.getElementById('secs')
var minTemplate=document.getElementById('mins')
var hrsTemplate=document.getElementById('hrs')
var daysTemplate=document.getElementById('days')
var weeksTemplate=document.getElementById('weeks')
var monsTemplate=document.getElementById('mons')
var yrsTemplate=document.getElementById('yrs')


setInterval(()=>{
    if(datePicker.value==='')
    {
        button.disabled=true
    }
    else{
        button.disabled=false
    }
},1000)

button.addEventListener('click',()=>{
    if(firstClick)
    {
        firstClick=false
        getData()
        
    }
    else{

        clearInterval(timer)
        getData()
    }
})

function getData(){
    hide.classList.remove('toogleHide')
    timer=setInterval(()=>{
    const now=new Date()
    getDiff()
    }, 1000);
}

function getDiff(){
    var year = differenceInYears(
        new Date(),
        new Date(datePicker.value)
      )
    
    var months = differenceInMonths(
        new Date(),
        new Date(datePicker.value)
      )
    
      var weeks = differenceInWeeks(
        new Date(),
        new Date(datePicker.value)
      )
      
      var days = differenceInDays(
        new Date(),
        new Date(datePicker.value)
      )
    
      var hours = differenceInHours(
        new Date(),
        new Date(datePicker.value)
      )
    
      var mins = differenceInMinutes(
        new Date(),
        new Date(datePicker.value)
      )
    
      var sec = differenceInSeconds(
        new Date(),
        new Date(datePicker.value)
      )
   
    genTemplate(sec,mins,hours,days,weeks,months,year)
}

function genTemplate(sec,mins,hours,days,weeks,months,year){
    
    secTemplate.textContent=sec.toLocaleString('en-IN')
    minTemplate.textContent=mins.toLocaleString('en-IN')
    hrsTemplate.textContent=hours.toLocaleString('en-IN')
    daysTemplate.textContent=days.toLocaleString('en-IN')
    weeksTemplate.textContent=weeks.toLocaleString('en-IN')
    monsTemplate.textContent=months.toLocaleString('en-IN')
    yrsTemplate.textContent=year.toLocaleString('en-IN')
    
}

