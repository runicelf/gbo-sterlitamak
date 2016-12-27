'use strict'
window.onload = function() {
  let button = document.getElementById('calc-button');
  function calc(){
    let calcPrice = document.getElementsByName('price')[0].value === '' ? 30000 : document.getElementsByName('price')[0].value;
    let calcGazoline = document.getElementsByName('gazoline')[0].value === '' ? 40 : document.getElementsByName('gazoline')[0].value;
    let calcGas = document.getElementsByName('gas')[0].value === '' ? 20 : document.getElementsByName('gas')[0].value;
    let calcConsumtion = document.getElementsByName('consumtion')[0].value === '' ? 7.5 : document.getElementsByName('consumtion')[0].value ;
    let calcMileage = document.getElementsByName('mileage')[0].value === '' ? 10 : document.getElementsByName('mileage')[0].value;
    let gazolineOnYear = calcMileage * 365 / 100 * calcConsumtion;
    let result = ((gazolineOnYear * calcGazoline) - (gazolineOnYear * calcGas));
    let onDay = result / 365;
    let payback = calcPrice / onDay;
    document.getElementById('onDay').innerHTML = `${Math.round(onDay)}`;
    document.getElementById('onYear').innerHTML = `${Math.round(result)}`;
    document.getElementById('payback').innerHTML = `${Math.round(payback)}`;

  }
  button.onclick = calc;
};
