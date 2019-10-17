class Doughnut {
	constructor(id, type, filling, topping, star, quality) {
		this.id = id;
		this.type = type;
    this.filling = filling;
		this.topping = topping;
		this.star = star || false;
		this.quality = quality || 0;
	}

	saveToStorage(doughnutsArray) {
	  localStorage.setItem('storedDoughnuts', JSON.stringify(doughnutsArray));
	}

	deleteFromStorage(index) {
    doughnutsArray.splice(index, 1);
	  this.saveToStorage(doughnutsArray)
	}

}
