var doughnutsArray = [];

var typeInput = document.querySelector('.input-type');
var fillingInput = document.querySelector('.input-filling');
var toppingInput = document.querySelector('.input-topping');
var grabBtn = document.querySelector('.btn-grab');
var doughnutSection = document.querySelector('.section-doughnuts');

grabBtn.addEventListener('click', makeNewDoughnut)
doughnutSection.addEventListener('click', deleteDoughnut)

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
    <img src="./images/donut1.png" alt="Doughnut">
    <p>${type}</p>
    <p>${filling}</p>
    <p>${topping}</p>
    <button class="btn-remove">REMOVE</button>
  </article>`)
};

function deleteDoughnut(e) {
  var index = getIndex(e)
  e.target.closest('article').remove();
  doughnutsArray[index].deleteFromStorage(index);
}

function getIndex(e) {
  var findId = e.target.closest('article').getAttribute('data-id');
  var index = doughnutsArray.findIndex(function(idea) {
    return idea.id == findId;
  })
  return index;
}
