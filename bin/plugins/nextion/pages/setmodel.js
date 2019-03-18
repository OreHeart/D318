"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromiseNative = require("request-promise-native");

var _requestPromiseNative2 = _interopRequireDefault(_requestPromiseNative);

var _abstract2 = require("./abstract.js");

var _abstract3 = _interopRequireDefault(_abstract2);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require("babel-polyfill");


var _ = null;

var SetModel = function (_abstract) {
    _inherits(SetModel, _abstract);

    function SetModel(screenManager) {
        _classCallCheck(this, SetModel);

        return _possibleConstructorReturn(this, (SetModel.__proto__ || Object.getPrototypeOf(SetModel)).call(this, screenManager));
    }

    _createClass(SetModel, [{
        key: "init",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
                var _this3 = this;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.setScreen("setmodel");

                            case 2:
                                _context.next = 4;
                                return this.isExist(options, this);

                            case 4:
                                this.serverURL = global.SERVER_URL;
                                console.log(options.PlateID);
                                //await this.setText("t1", options.XRes);
                                //await this.setText("t2", options.YRes);
                                //await this.setText("t3", options.ZRes);

                                if (!options.Preview) {
                                    _context.next = 13;
                                    break;
                                }

                                console.log("preview is true");
                                _context.t0 = this.nextion;
                                _context.next = 11;
                                return (0, _requestPromiseNative2.default)({ url: this.serverURL + "/static/plates/" + options.PlateID + "/3d.png", encoding: null });

                            case 11:
                                _context.t1 = _context.sent;

                                _context.t0.displayImage.call(_context.t0, _context.t1);

                            case 13:
                                //console.log(options);

                                this.addListener("click_b1", function () {
                                    _this3.saveXYZ(options);
                                });
                                this.addListener("click_b2", function () {
                                    _ = _this3.requestTest(_this3.serverURL + "/plate/regenerate", { "PlateID": options.PlateID, "XRes": _this3.XRes, "YRes": _this3.YRes, "ZRes": _this3.ZRes });
                                    _ = _this3.changePage("slice");
                                });
                                this.addListener("click_b3", function () {
                                    _ = _this3.changePage("plates");
                                });

                            case 16:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function init(_x) {
                return _ref.apply(this, arguments);
            }

            return init;
        }()
    }, {
        key: "requestTest",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, data) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                return _context2.abrupt("return", _requestPromiseNative2.default.post({
                                    uri: url,
                                    form: data,
                                    headers: { Cookie: "" + (this.auth ? this.session : "") },
                                    timeout: 3000,
                                    success: function success(response) {
                                        console.log(response);
                                    },
                                    error: function (_error) {
                                        function error(_x4) {
                                            return _error.apply(this, arguments);
                                        }

                                        error.toString = function () {
                                            return _error.toString();
                                        };

                                        return error;
                                    }(function (error) {
                                        console.log(error);
                                    })
                                }));

                            case 1:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function requestTest(_x2, _x3) {
                return _ref2.apply(this, arguments);
            }

            return requestTest;
        }()
    }, {
        key: "saveXYZ",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
                var params;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.getValue("x");

                            case 2:
                                this.XRes = _context3.sent;
                                _context3.next = 5;
                                return this.getValue("y");

                            case 5:
                                this.YRes = _context3.sent;
                                _context3.next = 8;
                                return this.getValue("z");

                            case 8:
                                this.ZRes = _context3.sent;
                                params = {
                                    "PlateID": options.PlateID,
                                    "XRes": this.XRes,
                                    "YRes": this.YRes,
                                    "ZRes": this.ZRes
                                };

                                this.writeJson(params);

                            case 11:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function saveXYZ(_x5) {
                return _ref3.apply(this, arguments);
            }

            return saveXYZ;
        }()
    }, {
        key: "writeJson",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                //现将json文件读出来
                                _fs2.default.readFile("/home/pi/nextion/bin/plugins/nextion/pages/setmodel.json", function (err, data) {
                                    if (err) {
                                        return console.error(err);
                                    }
                                    var plate = data.toString();
                                    plate = JSON.parse(plate);
                                    for (var i = 0; i < plate.data.length; i++) {
                                        if (params.PlateID == plate.data[i].PlateID) {
                                            console.log('id一样的');
                                            for (var key in params) {
                                                if (plate.data[i][key]) {
                                                    plate.data[i][key] = params[key];
                                                }
                                            }
                                            var _str = JSON.stringify(plate);
                                            _fs2.default.writeFile("/home/pi/nextion/bin/plugins/nextion/pages/setmodel.json", _str, function (err) {
                                                if (err) {
                                                    console.error(err);
                                                }
                                                console.log('----------修改成功-------------');
                                            });
                                            return;
                                        }
                                    }
                                    plate.data.push(params);
                                    plate.total = plate.data.length;
                                    var str = JSON.stringify(plate);
                                    _fs2.default.writeFile("/home/pi/nextion/bin/plugins/nextion/pages/setmodel.json", str, function (err) {
                                        if (err) {
                                            console.error(err);
                                        }
                                        console.log('----------新增成功-------------');
                                    });
                                });

                            case 1:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function writeJson(_x6) {
                return _ref4.apply(this, arguments);
            }

            return writeJson;
        }()
    }, {
        key: "isExist",
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(options, _this) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _fs2.default.readFile("/home/pi/nextion/bin/plugins/nextion/pages/setmodel.json", function (err, data) {
                                    if (err) {
                                        console.error(err);
                                    }
                                    var plate = data.toString();
                                    plate = JSON.parse(plate);
                                    for (var i = 0; i < plate.data.length; i++) {
                                        if (options.PlateID == plate.data[i].PlateID) {
                                            console.log('isExist');
                                            _this.setText("t1", plate.data[i].XRes);
                                            _this.setText("t2", plate.data[i].YRes);
                                            _this.setText("t3", plate.data[i].ZRes);
                                            _this.XRes = plate.data[i].XRes;
                                            _this.YRes = plate.data[i].YRes;
                                            _this.ZRes = plate.data[i].ZRes;
                                            return;
                                        }
                                    }
                                    _this.setText("t1", options.XRes);
                                    _this.setText("t2", options.YRes);
                                    _this.setText("t3", options.ZRes);
                                    _this.XRes = options.XRes;
                                    _this.YRes = options.YRes;
                                    _this.ZRes = options.ZRes;
                                });

                            case 1:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function isExist(_x7, _x8) {
                return _ref5.apply(this, arguments);
            }

            return isExist;
        }()
    }, {
        key: "deleteJson",
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(plateID) {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _fs2.default.readFile("/home/pi/nextion/bin/plugins/nextion/page/setmodel.json", function (err, data) {
                                    if (err) {
                                        return console.error(error);
                                    }
                                    var plate = data.toString();
                                    plate = JSON.parse(plate);
                                    for (var i = 0; i < plate.data.length; i++) {
                                        if (plateID == plate.data[i].PlateID) {
                                            plate.data.splice(i, 1);
                                        }
                                    }
                                    plate.total = plate.data.length;
                                    var str = JSON.stringify(plate);
                                    _fs2.default.writeFile("/home/pi/nextion/bin/plugins/nextion/pages/setmodel.json", str, function (err) {
                                        if (err) {
                                            console.error(err);
                                        }
                                        console.log('----------删除成功-------------');
                                    });
                                });

                            case 1:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function deleteJson(_x9) {
                return _ref6.apply(this, arguments);
            }

            return deleteJson;
        }()
    }]);

    return SetModel;
}(_abstract3.default);

exports.default = SetModel;
//# sourceMappingURL=setmodel.js.map