"use strict"; //1.2

var Category;

(function (Category) {
  Category["BusinessAnalyst"] = "Business Analyst";
  Category["Developer"] = "Developer";
  Category["Designer"] = "Designer";
  Category["QA"] = "QA";
  Category["ScrumMaster"] = "Scrum master";
})(Category || (Category = {})); //1.1


var getAllWorkers = function getAllWorkers() {
  var workers = [{
    id: "1",
    Name: "Ivan",
    surname: "Ivanov",
    available: true,
    salary: 1000,
    category: Category.Developer
  }, {
    id: "2",
    Name: "Petro",
    surname: "Petrov",
    available: true,
    salary: 1500,
    category: Category.Developer
  }, {
    id: "3",
    Name: "Vasyl",
    surname: "Vasyliev",
    available: false,
    salary: 1600,
    category: Category.QA
  }, {
    id: "4",
    Name: "Evgen",
    surname: "Zhukov",
    available: true,
    salary: 1300,
    category: Category.Designer
  }];
  return workers;
};

var logFirstAvailable = function logFirstAvailable() {
  var workers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getAllWorkers();
  console.log("a. \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A\u0456\u0432 \u0432 \u043C\u0430\u0441\u0438\u0432\u0456 = ".concat(workers.length));
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = workers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var el = _step.value;

      if (el.available === true) {
        console.log("\u0431. \u0406\u043C\u2019\u044F \u0442\u0430 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A\u0430 = ".concat(el.Name, " ").concat(el.surname));
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

logFirstAvailable(getAllWorkers()); //1.2

var getWorkersNamesByCategory = function getWorkersNamesByCategory(workers) {
  var category = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Category.Designer;
  var output = [];
  workers.forEach(function (worker) {
    return (worker === null || worker === void 0 ? void 0 : worker.category) === category && output.push(worker.surname);
  });
  return output;
};

var logWorkersNames = function logWorkersNames(array) {
  array.forEach(function (e) {
    return console.log(e);
  });
};

getAllWorkers().forEach(function (worker) {
  (worker === null || worker === void 0 ? void 0 : worker.category) === Category.Developer && console.log("worker-developer:  ".concat(worker === null || worker === void 0 ? void 0 : worker.Name, " ").concat(worker === null || worker === void 0 ? void 0 : worker.surname, " ").concat(worker.salary));
}); //1.3

var getWorkerByID = function getWorkerByID(workers, id) {
  var result = workers.find(function (worker) {
    return worker.id === id;
  });
  return {
    Name: result.Name || "No data",
    surname: result.surname || "No data",
    salary: result.salary || "No data"
  };
};

console.log(getWorkerByID(getAllWorkers(), '1')); //1.4

var createCustomerID = function createCustomerID(name, id) {
  return name.concat(id.toString());
};

console.log(createCustomerID("Ivan", 21));
var myId = createCustomerID("Ann", 10);
console.log(myId);
var IdGenerator = createCustomerID("New", 0);
console.log(IdGenerator); //1.5

var createCustomer = function createCustomer(name, age, city) {
  console.log("name is ".concat(name));
  age && console.log("age is ".concat(age));
  city && console.log("city is ".concat(city));
};

createCustomer("Alex");
createCustomer("Katya", "19");
createCustomer("Vova", 19, "Odesa");

var сheckoutWorkers = function сheckoutWorkers(customer, workerIDs) {
  var workers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getAllWorkers();
  console.log("customer :", customer);
  var returnArray = [];
  var Ids = workerIDs.map(function (e) {
    if (typeof e === "number") {
      return e.toString();
    }

    return e;
  });
  workers.forEach(function (e) {
    if (Ids.includes(e.id) && e.available) {
      returnArray.push(getWorkerByID(workers, e.id));
    }
  });
  return returnArray;
};

console.log(сheckoutWorkers("Ann", [1, 2, 4]));