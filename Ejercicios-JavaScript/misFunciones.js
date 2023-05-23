/**
 * Conversion de Unidades, de metros, pulgadas, pies y yardas.
 * @method conversorUnidades
 * @param {string} id - El id de los inputs de metros, pulgadas, pies o yardas.
 * @param {number} valor - El valor de los inputs de metros, pulgadas, pies o yardas.
 * @return
 */
function conversorUnidades(id,valor){
    let metro, pulgada, pie, yarda;

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
    document.lasUnidades.unid_metro.value= metro;
    document.lasUnidades.unid_pulgada.value= pulgada;
    document.lasUnidades.unid_pie.value= pie;
    document.lasUnidades.unid_yarda.value= yarda;
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
