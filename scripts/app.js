// Cartel de enviado en contacto
// let boton = document.getElementById("boton");
// boton.addEventListener("click", functionBoton);

// function functionBoton() {
//     alert("Gracias, su mensaje fué enviado")
// };


function capturar(){
    const id1 = document.getElementById("c").value; /*capturar datos*/

    const barritasAlmJson = JSON.stringify(id1); /*convierto en Json*/
    localStorage.setItem("stockAlm", barritasAlmJson);/*guardo en LS*/
    const stockAlmJs = JSON.parse(localStorage.getItem("stockAlm"));/*convierto en Js y los capturo de LS*/

    const h5 = document.createElement("h5"); 

    h5.textContent = `Hay ${stockAlmJs} barritas de Almendra en Stock`;/*Creo un H5*/

    const div= document.querySelector("div.cont1__div");

    div.appendChild(h5); /*Inserto el H5 */
}

function capturar2(){
    const id1 = document.getElementById("d").value;/*capturar datos*/
    
    const barritasAlmJson = JSON.stringify(id1);/*convierto en Json*/
    localStorage.setItem("stockCr", barritasAlmJson);/*guardo en LS*/
    const stockAlmJs = JSON.parse(localStorage.getItem("stockAlm"));/*convierto en Js y los capturo de LS*/

    const h5 = document.createElement("h5");

    h5.textContent = `Hay ${stockAlmJs} barritas de Almendra en Stock`;/*Creo un H5*/

    const div= document.querySelector("div.div2");

    div.appendChild(h5);/*Inserto el H5 */
}

function capturar3(){
    const id1 = document.getElementById("e").value;/*capturar datos*/
    
    const barritasAlmJson = JSON.stringify(id1);/*convierto en Json*/
    localStorage.setItem("stockNu", barritasAlmJson);/*guardo en LS*/
    const stockAlmJs = JSON.parse(localStorage.getItem("stockAlm"));/*convierto en Js y los capturo de LS*/

    const h5 = document.createElement("h5");

    h5.textContent = `Hay ${stockAlmJs} barritas de Almendra en Stock`;/*Creo un H5*/


    const div= document.querySelector("div.div3");

    div.appendChild(h5);/*Inserto el H5 */
}


// const h1 = document.createElement("h1");

// h1.textContent = "Soy un nuevo h1 ";

// const div= document.querySelector("div.container");

// div.appendChild(h1);