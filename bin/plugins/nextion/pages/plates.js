"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromiseNative = require("request-promise-native");

var _requestPromiseNative2 = _interopRequireDefault(_requestPromiseNative);

var _abstract2 = require("./abstract.js");

var _abstract3 = _interopRequireDefault(_abstract2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require("babel-polyfill");

var _ = null;

var Plates = function (_abstract) {
    _inherits(Plates, _abstract);

    function Plates(screenManager) {
        _classCallCheck(this, Plates);

        return _possibleConstructorReturn(this, (Plates.__proto__ || Object.getPrototypeOf(Plates)).call(this, screenManager));
    }

    _createClass(Plates, [{
        key: "init",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
                var _this2 = this;

                var i;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.setScreen("plates");

                            case 2:
                                if (!(options && options.confirmResult)) {
                                    _context3.next = 6;
                                    break;
                                }

                                if (!(options.confirmType === "deleteplate" && options.data0)) {
                                    _context3.next = 6;
                                    break;
                                }

                                _context3.next = 6;
                                return this.nanoDLP.command("/plate/delete/" + options.data0);

                            case 6:

                                this.addListener("click_b2", function () {
                                    _ = _this2.changePage("home");
                                });
                                this.addListener("click_b9", function () {
                                    _ = _this2.changePage("addPlate");
                                });

                                //this.plates = await this.nanoDLP.getPlates();

                                _context3.next = 10;
                                return this.nanoDLP.getPlatesIndex();

                            case 10:
                                this.platesIndex = _context3.sent;

                                this.platesAll = this.platesIndex.Plates;
                                this.platesStl = [];
                                this.platesZip = [];
                                if (this.platesAll === undefined) {
                                    this.platesAll = [];
                                } else {
                                    for (i = 0; i < this.platesAll.length; i++) {
                                        if (this.platesAll[i].Type === "stl") {
                                            this.platesStl.push(this.platesAll[i]);
                                        } else {
                                            this.platesZip.push(this.platesAll[i]);
                                        }
                                    }
                                }
                                this.current_page_type = "zip";
                                this.current_page_stl = 1;
                                this.current_page_zip = 1;
                                this.page_count_stl = Math.ceil(this.platesStl.length / 5.0);
                                this.page_count_zip = Math.ceil(this.platesZip.length / 5.0);

                                if (this.plates === undefined) {
                                    this.plates = [];
                                    //_ = this.changePage("home");
                                }

                                //this.current_page = 1;
                                //this.page_count = Math.ceil(this.plates.length / 5.0);

                                this.addListener("click_b4", function () {
                                    //if (this.currentIndex < this.plates.length) _ = this.changePage("plate", this.plates[this.currentIndex]);

                                    if (_this2.current_page_type === "stl") {
                                        //console.log(this.platesStl[this.currentIndex],this.platesStl[this.currentIndex].PlateID);
                                        /*_ = this.requestTest("http://192.168.2.118/plate/regenerate",{"PlateID": this.platesStl[this.currentIndex].PlateID,"XRes": 20,"YRes": 20,"ZRes": 20});
                                        _ = this.changePage("slice");*/
                                        _ = _this2.changePage("setmodel", _this2.platesStl[_this2.currentIndex]);
                                        //if (this.currentIndex < this.platesStl.length) _ = this.changePage("plate", this.platesStl[this.currentIndex]);
                                    } else {
                                        if (_this2.currentIndex < _this2.platesZip.length) _ = _this2.changePage("plate", _this2.platesZip[_this2.currentIndex]);
                                    }
                                });
                                this.addListener("click_b5", function () {
                                    //if ((this.currentIndex + 1) < this.plates.length) _ = this.changePage("plate", this.plates[this.currentIndex + 1]);

                                    if (_this2.current_page_type === "stl") {
                                        _ = _this2.changePage("setmodel", _this2.platesStl[_this2.currentIndex + 1]);
                                        //if (this.currentIndex < this.platesStl.length) _ = this.changePage("plate", this.platesStl[this.currentIndex + 1]);
                                    } else {
                                        if (_this2.currentIndex < _this2.platesZip.length) _ = _this2.changePage("plate", _this2.platesZip[_this2.currentIndex + 1]);
                                    }
                                });
                                this.addListener("click_b6", function () {
                                    //if ((this.currentIndex + 2) < this.plates.length) _ = this.changePage("plate", this.plates[this.currentIndex + 2]);

                                    if (_this2.current_page_type === "stl") {
                                        _ = _this2.changePage("setmodel", _this2.platesStl[_this2.currentIndex + 2]);
                                        //if (this.currentIndex < this.platesStl.length) _ = this.changePage("plate", this.platesStl[this.currentIndex + 2]);
                                    } else {
                                        if (_this2.currentIndex < _this2.platesZip.length) _ = _this2.changePage("plate", _this2.platesZip[_this2.currentIndex + 2]);
                                    }
                                });
                                this.addListener("click_b7", function () {
                                    //if ((this.currentIndex + 3) < this.plates.length) _ = this.changePage("plate", this.plates[this.currentIndex + 3]);

                                    if (_this2.current_page_type === "stl") {
                                        _ = _this2.changePage("setmodel", _this2.platesStl[_this2.currentIndex + 3]);
                                        //if (this.currentIndex < this.platesStl.length) _ = this.changePage("plate", this.platesStl[this.currentIndex + 3]);
                                    } else {
                                        if (_this2.currentIndex < _this2.platesZip.length) _ = _this2.changePage("plate", _this2.platesZip[_this2.currentIndex + 3]);
                                    }
                                });
                                this.addListener("click_b8", function () {
                                    //if ((this.currentIndex + 4) < this.plates.length) _ = this.changePage("plate", this.plates[this.currentIndex + 4]);

                                    if (_this2.current_page_type === "stl") {
                                        _ = _this2.changePage("setmodel", _this2.platesStl[_this2.currentIndex + 4]);
                                        //if (this.currentIndex < this.platesStl.length) _ = this.changePage("plate", this.platesStl[this.currentIndex + 4]);
                                    } else {
                                        if (_this2.currentIndex < _this2.platesZip.length) _ = _this2.changePage("plate", _this2.platesZip[_this2.currentIndex + 4]);
                                    }
                                });

                                this.addListener("click_b10", function () {
                                    //this.current_page = ((this.current_page - 2 + this.page_count) % this.page_count) + 1;
                                    //_ = this.updateList((this.current_page - 1) * 5);
                                    //_ = this.setText("t13", this.current_page + '/' + this.page_count);

                                    if (_this2.current_page_type === "stl") {
                                        _this2.current_page_stl = (_this2.current_page_stl - 2 + _this2.page_count_stl) % _this2.page_count_stl + 1;
                                        _ = _this2.updateListAll((_this2.current_page_stl - 1) * 5, "stl");
                                        _ = _this2.setText("t13", _this2.current_page_stl + '/' + _this2.page_count_stl);
                                    } else {
                                        _this2.current_page_zip = (_this2.current_page_zip - 2 + _this2.page_count_zip) % _this2.page_count_zip + 1;
                                        _ = _this2.updateListAll((_this2.current_page_zip - 1) * 5, "zip");
                                        _ = _this2.setText("t13", _this2.current_page_zip + '/' + _this2.page_count_zip);
                                    }
                                });

                                this.addListener("click_b11", function () {
                                    //this.current_page = (this.current_page % this.page_count) + 1;
                                    //_ = this.updateList((this.current_page - 1) * 5);
                                    //_ = this.setText("t13", this.current_page + '/' + this.page_count);

                                    if (_this2.current_page_type === "stl") {
                                        _this2.current_page_stl = _this2.current_page_stl % _this2.page_count_stl + 1;
                                        _ = _this2.updateListAll((_this2.current_page_stl - 1) * 5, "stl");
                                        _ = _this2.setText("t13", _this2.current_page_stl + '/' + _this2.page_count_stl);
                                    } else {
                                        _this2.current_page_zip = _this2.current_page_zip % _this2.page_count_zip + 1;
                                        _ = _this2.updateListAll((_this2.current_page_zip - 1) * 5, "zip");
                                        _ = _this2.setText("t13", _this2.current_page_zip + '/' + _this2.page_count_zip);
                                    }
                                });

                                /*this.addListener("click_b12", async () => {
                                    this.plates = await this.nanoDLP.getPlates();
                                      if (this.plates === undefined) {
                                        _ = this.changePage("home");
                                    }
                                      this.current_page = 1;
                                    this.page_count = Math.ceil(this.plates.length / 5.0);
                                    _ = this.setText("t13", this.current_page + '/' + this.page_count);
                                    _ = this.updateList(0);
                                });*/

                                this.addListener("click_b14", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                    return regeneratorRuntime.wrap(function _callee$(_context) {
                                        while (1) {
                                            switch (_context.prev = _context.next) {
                                                case 0:
                                                    if (!(_this2.current_page_type === "zip")) {
                                                        _context.next = 2;
                                                        break;
                                                    }

                                                    return _context.abrupt("return");

                                                case 2:
                                                    _this2.current_page_type = "zip";
                                                    _ = _this2.setText("t13", _this2.current_page_zip + '/' + _this2.page_count_zip);
                                                    _ = _this2.updateListAll(0, "zip");

                                                case 5:
                                                case "end":
                                                    return _context.stop();
                                            }
                                        }
                                    }, _callee, _this2);
                                })));

                                this.addListener("click_b15", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                        while (1) {
                                            switch (_context2.prev = _context2.next) {
                                                case 0:
                                                    if (!(_this2.current_page_type === "stl")) {
                                                        _context2.next = 2;
                                                        break;
                                                    }

                                                    return _context2.abrupt("return");

                                                case 2:
                                                    _this2.current_page_type = "stl";
                                                    _ = _this2.setText("t13", _this2.current_page_stl + '/' + _this2.page_count_stl);
                                                    _ = _this2.updateListAll(0, "stl");

                                                case 5:
                                                case "end":
                                                    return _context2.stop();
                                            }
                                        }
                                    }, _callee2, _this2);
                                })));

                                //_ = this.setText("t13", this.current_page + '/' + this.page_count);
                                //_ = this.updateList(0);

                                _ = this.setText("t13", this.current_page_zip + '/' + this.page_count_zip);
                                _ = this.updateListAll(0, "zip");

                            case 32:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function init(_x) {
                return _ref.apply(this, arguments);
            }

            return init;
        }()
    }, {
        key: "updateList",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(pageFirstIdx) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                this.currentIndex = pageFirstIdx;
                                _ = this.setText("b4", this.plates.length > pageFirstIdx ? pageFirstIdx + 1 + ". " + this.plates[pageFirstIdx].Path : "");
                                _ = this.setText("b5", this.plates.length > pageFirstIdx + 1 ? pageFirstIdx + 2 + ". " + this.plates[pageFirstIdx + 1].Path : "");
                                _ = this.setText("b6", this.plates.length > pageFirstIdx + 2 ? pageFirstIdx + 3 + ". " + this.plates[pageFirstIdx + 2].Path : "");
                                _ = this.setText("b7", this.plates.length > pageFirstIdx + 3 ? pageFirstIdx + 4 + ". " + this.plates[pageFirstIdx + 3].Path : "");
                                _ = this.setText("b8", this.plates.length > pageFirstIdx + 4 ? pageFirstIdx + 5 + ". " + this.plates[pageFirstIdx + 4].Path : "");

                            case 6:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function updateList(_x2) {
                return _ref4.apply(this, arguments);
            }

            return updateList;
        }()
    }, {
        key: "updateListAll",
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(pageFirstIdx, type) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                this.currentIndex = pageFirstIdx;
                                if (type === "stl") {
                                    _ = this.setText("b4", this.platesStl.length > pageFirstIdx ? pageFirstIdx + 1 + ". " + this.platesStl[pageFirstIdx].Path : "");
                                    _ = this.setText("b5", this.platesStl.length > pageFirstIdx + 1 ? pageFirstIdx + 2 + ". " + this.platesStl[pageFirstIdx + 1].Path : "");
                                    _ = this.setText("b6", this.platesStl.length > pageFirstIdx + 2 ? pageFirstIdx + 3 + ". " + this.platesStl[pageFirstIdx + 2].Path : "");
                                    _ = this.setText("b7", this.platesStl.length > pageFirstIdx + 3 ? pageFirstIdx + 4 + ". " + this.platesStl[pageFirstIdx + 3].Path : "");
                                    _ = this.setText("b8", this.platesStl.length > pageFirstIdx + 4 ? pageFirstIdx + 5 + ". " + this.platesStl[pageFirstIdx + 4].Path : "");
                                } else {
                                    _ = this.setText("b4", this.platesZip.length > pageFirstIdx ? pageFirstIdx + 1 + ". " + this.platesZip[pageFirstIdx].Path : "");
                                    _ = this.setText("b5", this.platesZip.length > pageFirstIdx + 1 ? pageFirstIdx + 2 + ". " + this.platesZip[pageFirstIdx + 1].Path : "");
                                    _ = this.setText("b6", this.platesZip.length > pageFirstIdx + 2 ? pageFirstIdx + 3 + ". " + this.platesZip[pageFirstIdx + 2].Path : "");
                                    _ = this.setText("b7", this.platesZip.length > pageFirstIdx + 3 ? pageFirstIdx + 4 + ". " + this.platesZip[pageFirstIdx + 3].Path : "");
                                    _ = this.setText("b8", this.platesZip.length > pageFirstIdx + 4 ? pageFirstIdx + 5 + ". " + this.platesZip[pageFirstIdx + 4].Path : "");
                                }

                            case 2:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function updateListAll(_x3, _x4) {
                return _ref5.apply(this, arguments);
            }

            return updateListAll;
        }()
    }, {
        key: "requestTest",
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(url, data) {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                return _context6.abrupt("return", _requestPromiseNative2.default.post({
                                    uri: url,
                                    form: data,
                                    headers: { Cookie: "" + (this.auth ? this.session : "") },
                                    timeout: 3000,
                                    success: function success(response) {
                                        console.log(response);
                                    },
                                    error: function error(_error) {
                                        console.log(_error);
                                    }
                                }));

                            case 1:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function requestTest(_x5, _x6) {
                return _ref6.apply(this, arguments);
            }

            return requestTest;
        }()
    }]);

    return Plates;
}(_abstract3.default);

exports.default = Plates;
//# sourceMappingURL=plates.js.map