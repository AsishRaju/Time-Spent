
const button=document.querySelector('.button')
const datePicker = document.getElementById("myDate")
const hide = document.querySelector('.toogleHide')
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
    const dob=new Date(datePicker.value)
    hide.classList.remove('toogleHide')
    setInterval(()=>{
        const now=new Date()
        getDiff(dob.getTime(),now.getTime())
    }, 1000);
})

function getDiff(dob,now){
    const diff=now-dob
    const sec=Math.round(diff/1000)
    const mins=Math.round(sec/60)
    const hours=Math.round(mins/60)
    const days=Math.round(hours/24)
    const weeks=Math.round(days/7)
    const months=Math.round(weeks/4.345)
    const year=Math.round(months/12)
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

