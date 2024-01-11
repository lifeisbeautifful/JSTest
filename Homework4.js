class car{
    constructor(fuel, size){
        this.fuel = fuel;
        this.size = size;
    }
};

function refueling(fuel, size){
    fuel === "gas" || fuel === "disel" ? refuel(size) : console.log(`Lack of ${fuel}!`);

    function refuel(size){
    switch(size.toUpperCase()){
        case "S":
            console.log(`Refuel using ${fuel} for car "S" size`);
            break;
        case "M":
            console.log(`Refuel using ${fuel} for car "M" size`);
            break;
        case "L":
            console.log(`Refuel using ${fuel} for car "L" size`);
            break;
        case "XL":
            console.log(`Refuel using ${fuel} for car "XL" size`);
            break;
        default:
            console.log("Car size is underfined!");
    }
}
};

const carsQueue = [{"fuel":"gas", "size":"s"}, {"fuel":"disel", "size":"m"}, {"fuel":"oil", "size":"L"}, {"fuel":"gas","size":"xl"},
                   {"fuel":"gas", "size":"xs"}];
carsQueue.forEach(c =>{
    refueling(c.fuel, c.size);
});

//Create counter task
var createCounter = function(init) {
    increment(init);
    decrement(init);
    reset(init);
};

function increment(number){
    ++number;
    console.log(number);
};

function decrement(number){
    --number;
    console.log(number);
}

function reset(number){
    console.log(number);
}





