const button = document.querySelector('.button')
const input = document.querySelector('.input')
const output = document.querySelector('.output')
input.addEventListener('keyup', function(event) {
		if (event.code === 'Enter' && input.value.trim()){
    output.textContent = input.value + ' '
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q='+input.value.trim()+'&appid=021d1fbef7403d32bf662f1881a44606')
    input.value = ''
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE &&
            xhr.status === 200) {
            const parsedObject = JSON.parse(xhr.responseText)
        console.log(parsedObject)
            output.textContent += +(parsedObject.main.temp - 273).toFixed(4)+'\u2103'
        }
    }
    xhr.send()
}})