var doughnutsArray = [];

var typeInput = document.querySelector('.input-type');
var fillingInput = document.querySelector('.input-filling');
var toppingInput = document.querySelector('.input-topping');
var grabBtn = document.querySelector('.btn-grab')
var doughnutSection = document.querySelector('.section-doughnuts');

grabBtn.addEventListener('click', makeNewDoughnut)

getDoughnuts();

function makeNewDoughnut(e) {
  e.preventDefault();
  var doughnut = new Doughnut(Date.now(), typeInput.value, fillingInput.value, toppingInput.value, false, 0);
  doughnutsArray.push(doughnut);
  console.log('array', doughnutsArray)
  doughnut.saveToStorage(doughnutsArray);
}
