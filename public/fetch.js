if(document.querySelector("#formCorreo")){
    document.querySelector("#formCorreo").addEventListener("submit", function (e){
        e.preventDefault()
        let nombre = document.querySelector("#nombre").value
        let email = document.querySelector("#email").value
        let texto = document.querySelector("#mensaje").value
        fetch("https://lion-app.up.railway.app/email", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({'nombre': nombre,
                'email': email, 'texto': texto})
        }).then(res => res.ok)
        .then(res => {
            if(res){
                let respuestaAbajo = document.querySelector("#respuesta")
                respuestaAbajo.innerHTML = "Mensaje Enviado"
                    setTimeout(function() {
                        respuestaAbajo.innerHTML = ""
                    }, 5000)
                }
        })
        .catch(error => {
            let respuesta = document.querySelector("#respuesta")
                    respuesta.innerHTML = "No se ha podido enviar el mensaje"
                    setTimeout(function()
                    { respuestaAbajo.innerHTML = "" }, 5000);
        })
    })
}