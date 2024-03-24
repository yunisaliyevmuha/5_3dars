
setInterval(() => {
    document.querySelector('h1').textContent = new Date().toLocaleTimeString();
},1000) 
const date = document.getElementById('date')
setInterval(() => {
    document.querySelector('h2').textContent = new Date().toLocaleDateString();
},1000) 