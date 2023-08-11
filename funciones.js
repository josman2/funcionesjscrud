//variables globales
let campoTexto = document.querySelector(".campo-texto");
let botonCrear = document.querySelector(".btn-crear");
let tabla = document.querySelector(".table tbody");

//evento clicl al boton
botonCrear.addEventListener("click", function() {
    //alert("di click");
    console.log("El usuario escribio: "+campoTexto.value);
    crearTarea();
});

//funcion para crear una tabvla
let num = 0;
function crearTarea() {
    let fila = document.createElement("tr");
    //let col = document.createElement("td");
    let texto = campoTexto.value
    //let textonodo = document.createTextNode(texto);
    
    if ( texto === "" ){
        alert("debes escribir una tarea");

    }else{
        //col.appendChild(textonodo);
        fila.innerHTML = `
            <td> ${ num++ } </td>
            <td> ${ texto } </td>
            <td> <span class="editar"> ✏ </span> </td>
            <td> <span onclick="eliminarTarea();" class="eliminar"> ❌ </span> </td>
        `;
        
        tabla.appendChild(fila);
        //console.log(fila);
        campoTexto.value = "";
    }

}
//funcion para eliminar tareas
function eliminarTarea(){
    let botonEliminar = document.querySelector(".eliminar");
    let confirmar = confirm("¿Deseas eliminar la tarea?");
    console.log("confirmacion :"+confirmar);
    if( confirmar ){
        botonEliminar.parentElement.parentElement.remove()

    }
}
//agregar tarea por medio del boton Enter
campoTexto.addEventListener("keyup", function (tecla){
    console.log(tecla.key);
    if(tecla.key == "Enter"){
        crearTarea();
    }
})
