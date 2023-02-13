let car = {
    name:"BMW",
    model:2023,
   
}

 let printCarDetail = function(){
     console.log(this.name + " " + this.model)
    }

printCarDetail.call(car);
