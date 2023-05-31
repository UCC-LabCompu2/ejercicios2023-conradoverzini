/**
 * Conversion de Unidades, de metros, pulgadas, pies y yardas.
 * @method conversorUnidades
 * @param {string} id - El id de los inputs de metros, pulgadas, pies o yardas.
 * @param {number} valor - El valor de los inputs de metros, pulgadas, pies o yardas.
 * @return
 */
function conversorUnidades(id,valor){
    let metro, pulgada, pie, yarda;

    if(valor.includes(",")){
        valor=valor.replace(",",".");
    }

    if(isNaN(valor)){
        alert("Se ingreso un valor invalido "+id);
        metro= "";
        pulgada= "";
        pie= "";
        yarda= "";
    }else if(id=="metro"){
        metro=valor;
        pulgada= 39.3701*valor;
        pie= 3.28084*valor;
        yarda= 1.09361*valor;
    }else if(id=="pulgada"){
        pulgada=valor;
        metro= 0.0254*valor;
        pie= 0.0833333*valor;
        yarda= 0.0277778*valor;
    }else if(id=="pie"){
        pie=valor;
        metro= 0.3048*valor;
        pulgada= 12*valor;
        yarda= 0.333333*valor;
    }else if(id=="yarda"){
        yarda=valor;
        metro= 0.9144*valor;
        pulgada= 36*valor;
        pie= 3*valor;
    }
    document.lasUnidades.unid_metro.value= Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value= pulgada.toFixed(2);
    document.lasUnidades.unid_pie.value= pie.toFixed(2);
    document.lasUnidades.unid_yarda.value= Math.round(yarda*100)/100;
}


/**
 * Conversion de grados sexagesimales a radianes y viceversa.
 * @method conversorGR
 * @param {string} id - El id de los inputs de grados o radianes.
 */
function conversorGR(id){
    let grad, rad;
    if(id=="grados"){
        grad=document.getElementById("grados").value;
        rad=(grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad=document.getElementById("radianes").value;
        grad=(rad*180)/Math.PI;
    }
    document.getElementById("grados").value=grad;
    document.getElementById("radianes").value=rad;
}


/**
 * Mostrar u Ocultar Divs
 * @method mostrar_ocultar
 * @param {string} valorMO
 */
function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display='block';
    }else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display='none';
    }
}

/**
 * Sumar dos valores ingresados por el usuario
 * @method calcularSuma
 */
function calcularSuma(){
    let num1, num2;
    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML=num1 + num2;
}

/**
 * Restar dos valores ingresados por el usuario
 * @method calcularResta
 */
function calcularResta(){
    let num1, num2;
    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML=num1 - num2;
}

/**
 * Multiplicar dos valores ingresados por el usuario
 * @method calcularMult
 */
function calcularMult(){
    let num1, num2;
    num1=Number(document.getElementsByName("mul_num1")[0].value);
    num2=Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML=num1*num2;
}

/**
 * Dividir dos valores ingresados por el usuario
 * @method calcularDiv
 */
function calcularDiv(){
    let num1, num2;
    num1=Number(document.getElementsByName("div_num1")[0].value);
    num2=Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML=num1/num2;
}

/**
 * Generar URL para enviar datos de primeraWeb a segundaWeb
 * @method cargarWeb
 */
let cargarWeb = () => {

    const distancia = document.getElementById("distancia").value;
    const unidad = document.getElementsByName("unidades")[0].value;
    const urlComp = `segundaWeb.html#${distancia}#${unidad}`;
    window.open(urlComp);

}

/**
 * Recibir datos en segundaWeb que están en la URL generada por cargarWeb()
 * @method cargarResultado
 */
let cargarResultado = () => {
    let urlComp= window.location.href.split("/")[5];
    const distancia = urlComp.split("#")[1];
    const unidad = urlComp.split("#")[2];
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}


/**
 * Guardar datos en localStorage
 * @method guardarLocalStorage
 */
let guardarLocalStorage = () => {
    const distancia = document.getElementById("distancia").value;
    const unidad = document.getElementsByName("unidades")[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open("2_web.html");
}

/**
 * Cargar datos en localStorage
 * @method cargarLocalStorage
 */
let cargarLocalStorage = () => {
    const cant = localStorage.getItem("distanciaLS");
    const un = localStorage.getItem("unidadesLS");
    document.getElementById("dist").value = `${cant} ${un}`;
}


/**
 * Dibujar circulo y cuadrado
 * @method dibujarCirculoCuadrado
 */
let dibujarCirculoCuadrado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#2d2da8";
    const xMax = canvas.width;
    const yMax = canvas.height;
    const margen = 10;
    ctx.arc(xMax/2, yMax/2, 100, 0, 2*Math.PI);
    ctx.fillRect(0+margen, yMax-100-margen, 200, 100);
    ctx.fill();
    ctx.stroke();
}


var bandera;
function dibujar(event){
    const canvas = document.getElementById("canvasAdibujar");
    const ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;

    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){bandera=false};
    if(bandera){
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill();
    }
}

/**
 * Limpiar canvas
 * @method limpiarCanvas
 */
function limpiarCanvas(){
    const canvas = document.getElementById("canvasAdibujar");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}