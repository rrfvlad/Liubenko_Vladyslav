const countCars = (cars) => {
    const carMap = new Map();
    
    cars.forEach(car => {
        carMap.set(car, (carMap.get(car) || 0) + 1);
    });
    
    return carMap;
};

const cars = ["BMW", "Opel", "Audi", "VW", "Toyota", "BMW", "VW", "Nissan", "BMW"];
console.log(countCars(cars));