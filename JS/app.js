const formulario = document.getElementById("formulario")
const inputs = document.querySelectorAll("#formulario input")
const textarea = document.querySelectorAll("#formulario textarea")

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    correo: /^[a-zA-ZÀ-ÿ0-9_.+-]+@[a-z-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    mensaje: /^[a-zA-ZÀ-ÿ\s]{1,300}$/
}

const campos = {
    nombre: false,
    email: false,
    asunto: false,
    mensaje: false,
}

const validarFormularioI = (e) => {
    switch (e.target.name){
        case "Nombre":
            validarCampo(expresiones.nombre,e.target,"nombre")
            
        break;
        case "email":
            validarCampo(expresiones.correo,e.target,"email")
            
        break;
        case "Tema":
            validarCampo(expresiones.asunto,e.target,"asunto")
            
        break;
        case "mensaje":
            if(expresiones.mensaje.test(e.target.value)){
                document.getElementById(`formulario-mensaje`).classList.remove("formulario-incorrecto")
                document.getElementById(`formulario-mensaje`).classList.add("formulario-correcto")
                document.querySelector(`#formulario-mensaje .formulario-input-error`).classList.remove("formulario-input-error-activo")
                campos.mensaje = true
            }
            else{
                document.getElementById(`formulario-mensaje`).classList.remove("formulario-correcto")
                document.getElementById(`formulario-mensaje`).classList.add("formulario-incorrecto")
                document.querySelector(`#formulario-mensaje .formulario-input-error`).classList.add("formulario-input-error-activo")
            }
            
        break;
    }
}

const validarCampo = (expresion,input,campo) => {
    if(expresion.test(input.value)){
                document.getElementById(`formulario-${campo}`).classList.remove("formulario-incorrecto")
                document.getElementById(`formulario-${campo}`).classList.add("formulario-correcto")
                document.querySelector(`#formulario-${campo} .formulario-input-error`).classList.remove("formulario-input-error-activo")
                campos[campo] = true
            }
            else{
                document.getElementById(`formulario-${campo}`).classList.remove("formulario-correcto")
                document.getElementById(`formulario-${campo}`).classList.add("formulario-incorrecto")
                document.querySelector(`#formulario-${campo} .formulario-input-error`).classList.add("formulario-input-error-activo")
            }
}

textarea.forEach((textarea) =>{
    textarea.addEventListener("keyup",validarFormularioI)
    textarea.addEventListener("blur",validarFormularioI)
})

inputs.forEach((input)=>{
    input.addEventListener("keyup", validarFormularioI)
    input.addEventListener("blur",validarFormularioI)
})



formulario.addEventListener('submit', (e) => {
	if(campos.nombre &&  campos.email && campos.asunto && campos.mensaje ){
		formulario.reset();
        e.preventDefault();
		document.getElementById('formulario-mensaje-enviado').classList.add('formulario-mensaje-enviado-activado');
		setTimeout(() => {
			document.getElementById('formulario-mensaje-enviado').classList.remove('formulario-mensaje-enviado-activado');
		}, 5000);

		document.querySelectorAll('.formulario-correcto').forEach((icono) => {
			icono.classList.remove('formulario-correcto');
		});
	} else {
		document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo');
	}
});