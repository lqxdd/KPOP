"use strict";
var Category;
(function (Category) {
    Category["Analyst"] = "Business analyst";
    Category["Developer"] = "Developer";
    Category["Designer"] = "Designer";
    Category["QA"] = "QA";
    Category["Scrum"] = "Scrum master";
})(Category || (Category = {}));
function prizeLogger(str) {
    console.log(str);
}
function getAllworkers() {
    let workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Analyst, markPrize: prizeReal },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Analyst, markPrize: prizeReal },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Scrum, markPrize: prizeReal },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer, markPrize: prizeReal }
    ];
    return workers;
}
function getWorkerByID(id) {
    return getAllworkers().find(el => el.id == id);
}
function printWorker(worker) {
    console.log(`${worker.Name} ${worker.surname}, ${worker.salary}`);
}
let logPrize = prizeLogger;
console.log(logPrize("Prize Logger"));
let favoriteAuthor = { name: "Customer", email: "@gmail.com", numBooksPublished: 10 };
/*let favoriteLibrarian:Librarian = {name:"Zxc", email:"@mail", department:"-", assistCustomer:function tmp(name:string) {
    console.log("Test "+name);
}}*/
class UniversityLibrarian {
    assistCustomer(custName) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}
let favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = "Librarian";
favoriteLibrarian.assistCustomer("Noname");
let ReferenceItem = /** @class */ (() => {
    class ReferenceItem {
        constructor(title, year) {
            this.title = title;
            this.year = year;
        }
        publisherGetter() {
            return this.__publisher.toUpperCase();
        }
        publisherSetter(newPublisher) {
            this.__publisher = newPublisher;
        }
        printItem() {
            console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
        }
    }
    ReferenceItem.department = "Publisher";
    return ReferenceItem;
})();
class Encyclopedia extends ReferenceItem {
    constructor(title, year, edition) {
        super(title, year);
        this.edition = edition;
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
        console.log(`Edition:${this.edition}`);
    }
    printCitation() {
        console.log("title - year");
    }
}
/*let ref = new ReferenceItem("1", 1);
ref.publisherSetter("New Publisher");
ref.printItem();
console.log(ref.publisherGetter());*/
let refBook = new Encyclopedia("New Book", 2001, 9);
refBook.printItem();
