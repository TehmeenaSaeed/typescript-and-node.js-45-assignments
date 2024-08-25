

function create_car(manufacturer: string, modelName: string, ...addionalInfo:[string, any][]): object {
    
    const car = {manufacturer, modelName, ...Object.fromEntries
        (addionalInfo)}
            
        return car;
};


let my_car = create_car("Toyota", "Carrolla", [`color`, `blue`],
[`year`, 2022]);

console.log(my_car);




