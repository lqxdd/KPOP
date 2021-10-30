//1.2
enum Category {
    BusinessAnalyst = "Business Analyst",
    Developer = "Developer",
    Designer = "Designer",
    QA = "QA",
    ScrumMaster = "Scrum master",
}

//1.1
const getAllWorkers = (): worker[] => {
    const workers = [
        { id: "1", Name: "Ivan", surname: "Ivanov", available: true, salary: 1000, category: Category.Developer, },
        { id: "2", Name: "Petro", surname: "Petrov", available: true, salary: 1500, category: Category.Developer, },
        { id: "3", Name: "Vasyl", surname: "Vasyliev", available: false, salary: 1600, category: Category.QA, },
        { id: "4", Name: "Evgen", surname: "Zhukov", available: true, salary: 1300, category: Category.Designer, },
    ];
    return workers;
};

const logFirstAvailable = (workers: worker[] = getAllWorkers()): void => {
    console.log(`a. кількість робітників в масиві = ${workers.length}`);
    for (let el of workers) {
        if (el.available === true) {
            console.log(`б. Ім’я та прізвище доступного робітника = ${el.Name} ${el.surname}`)
        }
    }
}
logFirstAvailable(getAllWorkers());

type worker = {
    Name: string;
    id: string;
    surname: string;
    available: boolean;
    salary: number;
    category: Category;
};


//1.2
const getWorkersNamesByCategory = (
    workers: worker[],
    category: Category = Category.Designer
): string[] => {
    const output: string[] = [];
    workers.forEach(
        (worker) => worker?.category === category && output.push(worker.surname)
    );
    return output;
};

const logWorkersNames = (array: string[]): void => {
    array.forEach((e) => console.log(e));
};

getAllWorkers().forEach((worker) => {
    worker?.category === Category.Developer &&
        console.log(`worker-developer:  ${worker?.Name} ${worker?.surname} ${worker.salary}`);
});

//1.3
const getWorkerByID = (workers: worker[], id: string): {} => {
    const result = workers.find((worker) => worker.id === id);

    return {
        Name: result.Name || "No data",
        surname: result.surname || "No data",
        salary: result.salary || "No data",
    };
};

console.log(getWorkerByID(getAllWorkers(), '1'))

//1.4
const createCustomerID = (name: string, id: string | number): string => {
    return name.concat(id.toString());
}

console.log(createCustomerID("Ivan", 21))

const myId = createCustomerID("Ann", 10);
console.log(myId);


const IdGenerator = createCustomerID("New", 0);
console.log(IdGenerator)

//1.5
const createCustomer = (
    name: string,
    age?: number | string,
    city?: string
): void => {
    console.log(`name is ${name}`);
    age && console.log(`age is ${age}`);
    city && console.log(`city is ${city}`);
};
createCustomer("Alex");
createCustomer("Katya", "19")
createCustomer("Vova", 19, "Odesa")

const сheckoutWorkers = (
    customer: string,
    workerIDs: string[] | number[],
    workers: worker[] = getAllWorkers()
) => {
    console.log("customer :", customer);
    const returnArray: object[] = [];
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





