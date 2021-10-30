"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  var workers = [{
    id: 1,
    Name: 'Ivan',
    surname: 'Ivanov',
    available: true,
    salary: 1000,
    category: Category.Analyst,
    markPrize: prizeReal
  }, {
    id: 2,
    Name: 'Petro',
    surname: 'Petrov',
    available: true,
    salary: 1500,
    category: Category.Analyst,
    markPrize: prizeReal
  }, {
    id: 3,
    Name: 'Vasyl',
    surname: 'Vasyliev',
    available: false,
    salary: 1600,
    category: Category.Scrum,
    markPrize: prizeReal
  }, {
    id: 4,
    Name: 'Evgen',
    surname: 'Zhukov',
    available: true,
    salary: 1300,
    category: Category.Developer,
    markPrize: prizeReal
  }];
  return workers;
}

function getWorkerByID(id) {
  return getAllworkers().find(function (el) {
    return el.id == id;
  });
}

function printWorker(worker) {
  console.log("".concat(worker.Name, " ").concat(worker.surname, ", ").concat(worker.salary));
}

var logPrize = prizeLogger;
console.log(logPrize("Prize Logger"));
var favoriteAuthor = {
  name: "Noname",
  email: "@gmail.com",
  numBooksPublished: 10
};

var UniversityLibrarian =
/*#__PURE__*/
function () {
  function UniversityLibrarian() {
    _classCallCheck(this, UniversityLibrarian);
  }

  _createClass(UniversityLibrarian, [{
    key: "assistCustomer",
    value: function assistCustomer(custName) {
      console.log("".concat(this.name, " is assisting ").concat(custName));
    }
  }]);

  return UniversityLibrarian;
}();

var favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = "Librarian";
favoriteLibrarian.assistCustomer("Noname");

var ReferenceItem =
/** @class */
function () {
  var ReferenceItem =
  /*#__PURE__*/
  function () {
    function ReferenceItem(title, year) {
      _classCallCheck(this, ReferenceItem);

      this.title = title;
      this.year = year;
    }

    _createClass(ReferenceItem, [{
      key: "publisherGetter",
      value: function publisherGetter() {
        return this.__publisher.toUpperCase();
      }
    }, {
      key: "publisherSetter",
      value: function publisherSetter(newPublisher) {
        this.__publisher = newPublisher;
      }
    }, {
      key: "printItem",
      value: function printItem() {
        console.log("".concat(this.title, " was published in ").concat(this.year, " by ").concat(ReferenceItem.department));
      }
    }]);

    return ReferenceItem;
  }();

  ReferenceItem.department = "default";
  return ReferenceItem;
}();

var Encyclopedia =
/*#__PURE__*/
function (_ReferenceItem) {
  _inherits(Encyclopedia, _ReferenceItem);

  function Encyclopedia(title, year, edition) {
    var _this;

    _classCallCheck(this, Encyclopedia);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Encyclopedia).call(this, title, year));
    _this.edition = edition;
    return _this;
  }

  _createClass(Encyclopedia, [{
    key: "printItem",
    value: function printItem() {
      console.log("".concat(this.title, " was published in ").concat(this.year, " by ").concat(ReferenceItem.department));
      console.log("Edition:".concat(this.edition));
    }
  }, {
    key: "printCitation",
    value: function printCitation() {
      console.log("title - year");
    }
  }]);

  return Encyclopedia;
}(ReferenceItem);
/*let ref = new ReferenceItem("1984", 1984);
ref.publisherSetter("solidjays");
ref.printItem();
console.log(ref.publisherGetter());*/


var refBook = new Encyclopedia("New Book", 2001, 1);
refBook.printItem();