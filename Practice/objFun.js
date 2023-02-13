let car = {
    name:"BMW",
    model:2023,
    printCarDetail: function(){
     console.log(this.name + " " + this.model)
    }
}

car.printCarDetail();
