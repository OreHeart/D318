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

var Confirm = function (_abstract) {
    _inherits(Confirm, _abstract);

    function Confirm(screenManager) {
        _classCallCheck(this, Confirm);

        return _possibleConstructorReturn(this, (Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call(this, screenManager));
    }

    _createClass(Confirm, [{
        key: "init",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
                var _this2 = this;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.setScreen("confirm");

                            case 2:
                                _context.next = 4;
                                return this.setText("t0", options.text);

                            case 4:

                                this.addListener("click_b1", function () {
                                    console.log("in requestDiskfree " + options.diskFree);
                                    if (options.diskFree < 500) {
                                        _ = _this2.changePage("rom", { "diskFree": options.diskFree });
                                    } else {
                                        _ = _this2.changePage(options.returnPage, {
                                            confirmType: options.confirmType,
                                            confirmResult: true,
                                            data0: options.data0,
                                            data1: options.data1,
                                            data2: options.data2,
                                            data3: options.data3
                                        });
                                    }
                                });

                                this.addListener("click_b2", function () {
                                    _ = _this2.changePage(options.returnPage, {
                                        confirmType: options.confirmType,
                                        confirmResult: false,
                                        data0: options.data0,
                                        data1: options.data1,
                                        data2: options.data2,
                                        data3: options.data3
                                    });
                                });

                            case 6:
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
    }]);

    return Confirm;
}(_abstract3.default);

exports.default = Confirm;
//# sourceMappingURL=confirm.js.map