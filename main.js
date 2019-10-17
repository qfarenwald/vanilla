var doughnutsArray = [];

var typeInput = document.querySelector('.input-type');
var fillingInput = document.querySelector('.input-filling');
var toppingInput = document.querySelector('.input-topping');
var grabBtn = document.querySelector('.btn-grab')
var doughnutSection = document.querySelector('.section-doughnuts');

grabBtn.addEventListener('click', makeNewDoughnut)

getDoughnutsFromStorage()
displayDoughnuts()

function makeNewDoughnut(e) {
  e.preventDefault();
  var doughnut = new Doughnut(Date.now(), typeInput.value, fillingInput.value, toppingInput.value, false, 0);
  doughnutsArray.push(doughnut);
  doughnut.saveToStorage(doughnutsArray);
  generateDoughnut(doughnut)
  clearFormInputs()
}

function clearFormInputs() {
  typeInput.value = "";
  fillingInput.value = "";
  toppingInput.value = "";
}

function getDoughnutsFromStorage() {
  if (JSON.parse(localStorage.getItem('storedDoughnuts')) === null) {
  } else {
    doughnutsArray = JSON.parse(localStorage.getItem('storedDoughnuts')).map(function({id, type, filling, topping, star, quality}) {
      return new Doughnut(id, type, filling, topping, star, quality);
      });
  }
}

function displayDoughnuts() {
  for (var i = 0; i < doughnutsArray.length; i++) {
    generateDoughnut(doughnutsArray[i]);
  }
}

function generateDoughnut({id, type, filling, topping, star, quality}) {
  doughnutSection.insertAdjacentHTML ('afterbegin',
 `<article class="card-doughnut" data-id=${id}>
    <h1>${type}</h1>
    <h1>${filling}</h1>
    <h1>${topping}</h1>
    <button>REMOVE</button>
  </article>`)
};
