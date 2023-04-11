function getdata(){
let country = document.getElementById('search')
country = country.value

let p = fetch(`https:goweather.herokuapp.com/weather/${country}`)
p.then((value1) => {
    let imagholder = document.getElementById('holder')
    let container = document.querySelector('.container')
    container.innerHTML = ''
    imagholder.innerHTML = ''
    console.log(value1.status)
    console.log(value1.ok)
    console.log(value1)
    return value1.json()
}).then((value2) => {
    console.log(value2)
    let desc = value2['description']
    let temp = value2['temperature']
    let forcast = value2["forecast"]
    console.log(forcast)
    let windspeed = value2['wind']
    desc = desc.toLowerCase()
    let imagholder = document.getElementById('holder')
    console.log(imagholder)
    imagholder.innerHTML = `<h3 id='headingtitle'> Todays weather in ${country} <h3> <img id='imageholder' src="${desc}.png" alt="picture"><h3>${desc}</h3> <h3>temprature: ${temp} </h3> <h3 id='ws' >wind speed: ${windspeed} </h3>`
    f = document.getElementById('forcast')
    f.innerHTML = `<h4 id='forcast'>Forecast for next 3 days </h4> <div class="line"></div>`
    for(i in forcast){
        console.log(i)
        let day = forcast[i]['day']
        let temp = forcast[i]['temperature']
        let windspeed = forcast[i]['wind']
        if(temp = ''){
            temp = 'NaN'
        }
    
        let align = ''
        if(i == 0){
            align = 'left'
        }
        else if(i == 1){
            align = 'center'
        }
        else if(i == 2){
            align = 'right'
        }
        console.log(align)
        container = document.querySelector('.container')
        container.innerHTML = container.innerHTML + `<div class="column ${align}"> <h3>Day: ${day}</h3> </br> <h3>temprature: ${temp} </h3> <h3>wind speed: ${windspeed} </h3></div> <div class="vertical-line"></div>`

    }
    container = document.querySelector('.container')
    container.innerHTML = container.innerHTML + `<div class="container2">
    <div class="horizontal-line"></div>
  </div>`
})}

