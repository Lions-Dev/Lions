
document.querySelector('#formCorreo').addEventListener("submit", function(e){
    e.preventDefault()
    let nombre = document.querySelector("#nombre").value
    let email = document.querySelector("#email").value
    let texto = document.querySelector("#mensaje").value
    
    fetch('https://porfolio-lion.herokuapp.com/email',{
        method: 'POST',
        mode: 'cors', 
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify({
            'nombre': nombre,
            'email': email,
            'texto': texto
        })
    })
    .then(response => response.text())
    .then((data) => {
        if(data == 'Email sent'){
            let respuestaAbajo = document.querySelector("#respuesta")
            respuestaAbajo.innerHTML = "Mensaje Enviado"
            setTimeout(function()
            { respuestaAbajo.innerHTML = "" }, 7000);
        } else {
            let respuesta = document.querySelector("#respuesta")
            respuesta.innerHTML = "No se ha podido enviar el mensaje"
            setTimeout(function()
            { respuestaAbajo.innerHTML = "" }, 7000);
        }
    })    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
    
})


    
    
