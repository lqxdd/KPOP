"use strict";
//1.2
var Category;
(function (Category) {
    Category["BusinessAnalyst"] = "Business Analyst";
    Category["Developer"] = "Developer";
    Category["Designer"] = "Designer";
    Category["QA"] = "QA";
    Category["ScrumMaster"] = "Scrum master";
})(Category || (Category = {}));
//1.1
const getAllWorkers = () => {
    const workers = [
        { id: "1", Name: "Ivan", surname: "Ivanov", available: true, salary: 1000, category: Category.Developer, },
        { id: "2", Name: "Petro", surname: "Petrov", available: true, salary: 1500, category: Category.Developer, },
        { id: "3", Name: "Vasyl", surname: "Vasyliev", available: false, salary: 1600, category: Category.QA, },
        { id: "4", Name: "Evgen", surname: "Zhukov", available: true, salary: 1300, category: Category.Designer, },
    ];
    return workers;
};
const logFirstAvailable = (workers = getAllWorkers()) => {
    console.log(`a. кількість робітників в масиві = ${workers.length}`);
    for (let el of workers) {
        if (el.available === true) {
            console.log(`б. Ім’я та прізвище доступного робітника = ${el.Name} ${el.surname}`);
        }
    }
};
logFirstAvailable(getAllWorkers());
//1.2
const getWorkersNamesByCategory = (workers, category = Category.Designer) => {
    const output = [];
    workers.forEach((worker) => (worker === null || worker === void 0 ? void 0 : worker.category) === category && output.push(worker.surname));
    return output;
};
const logWorkersNames = (array) => {
    array.forEach((e) => console.log(e));
};
getAllWorkers().forEach((worker) => {
    (worker === null || worker === void 0 ? void 0 : worker.category) === Category.Developer &&
        console.log(`worker-developer:  ${worker === null || worker === void 0 ? void 0 : worker.Name} ${worker === null || worker === void 0 ? void 0 : worker.surname} ${worker.salary}`);
});
//1.3
const getWorkerByID = (workers, id) => {
    const result = workers.find((worker) => worker.id === id);
    return {
        Name: result.Name || "No data",
        surname: result.surname || "No data",
        salary: result.salary || "No data",
    };
};
console.log(getWorkerByID(getAllWorkers(), '1'));
//1.4
const createCustomerID = (name, id) => {
    return name.concat(id.toString());
};
console.log(createCustomerID("Ivan", 21));
const myId = createCustomerID("Ann", 10);
console.log(myId);
const IdGenerator = createCustomerID("New", 0);
console.log(IdGenerator);
//1.5
const createCustomer = (name, age, city) => {
    console.log(`name is ${name}`);
    age && console.log(`age is ${age}`);
    city && console.log(`city is ${city}`);
};
createCustomer("Alex");
createCustomer("Katya", "19");
createCustomer("Vova", 19, "Odesa");
const сheckoutWorkers = (customer, workerIDs, workers = getAllWorkers()) => {
    console.log("customer :", customer);
    const returnArray = [];
    const Ids = workerIDs.map((e) => {
        if (typeof e === "number") {
            return e.toString();
        }
        return e;
    });
    workers.forEach((e) => {
        if (Ids.includes(e.id) && e.available) {
            returnArray.push(getWorkerByID(workers, e.id));
        }
    });
    return returnArray;
};
console.log(сheckoutWorkers("Ann", [1, 2, 4]));
