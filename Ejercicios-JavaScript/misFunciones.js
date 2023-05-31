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
    num1=document.getElementsByName("sum_num1")[0].value;
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value=Number(num1) + Number(num2);
}

/**
 * Restar dos valores ingresados por el usuario
 * @method calcularResta
 */
function calcularResta(){
    let num1, num2;
    num1=document.getElementsByName("res_num1")[0].value;
    num2=document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].value=Number(num1) - Number(num2);
}

/**
 * Multiplicar dos valores ingresados por el usuario
 * @method calcularMult
 */
function calcularMult(){
    let num1, num2;
    num1=document.getElementsByName("mul_num1")[0].value;
    num2=document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].value=Number(num1) * Number(num2);
}

/**
 * Dividir dos valores ingresados por el usuario
 * @method calcularDiv
 */
function calcularDiv(){
    let num1, num2;
    num1=document.getElementsByName("div_num1")[0].value;
    num2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].value=Number(num1) / Number(num2);
}

