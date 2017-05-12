(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _partsCustomVue = require('./parts/custom-vue');

var _partsCustomVue2 = _interopRequireDefault(_partsCustomVue);

var _partsScrollableTales = require('./parts/scrollable-tales');

var _partsScrollableTales2 = _interopRequireDefault(_partsScrollableTales);

$(document).ready(function () {

    if ($(window).width() > 768) {
        (0, _partsScrollableTales2['default'])();
    } else {}
    // No scrollable Tales

    // $( window ).resize(function() {
    //     if ($(window).width() > 768) {
    //         scrollableTales();
    //     }
    //     else {
    //         // No scrollable Tales
    //     }
    // });
});

},{"./parts/custom-vue":4,"./parts/scrollable-tales":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Tale = (function () {
    function Tale() {
        _classCallCheck(this, Tale);
    }

    _createClass(Tale, null, [{
        key: 'find',
        value: function find(taleID, then) {
            return axios.post('pagefunction/TaleByID', {
                taleID: taleID
            }).then(function (_ref) {
                var data = _ref.data;
                return then(data);
            });
        }
    }, {
        key: 'all',
        value: function all(then) {
            return axios.get('pagefunction/allTales').then(function (_ref2) {
                var data = _ref2.data;
                return then(data);
            });
        }
    }]);

    return Tale;
})();

exports['default'] = Tale;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TaleForm = (function () {

    // constructor(Title, Content)
    // {
    //     this.Title = Title;
    //     this.Content = Content;
    // }

    function TaleForm(form) {
        _classCallCheck(this, TaleForm);

        this.ID = form.ID;
        this.Title = form.Title;
        this.Content = form.Content;
    }

    _createClass(TaleForm, [{
        key: 'getFormData',
        value: function getFormData() {
            console.log(this.Title);
            console.log(this.Content);
        }
    }, {
        key: 'fillForm',
        value: function fillForm() {
            this.tnyMCEInit();
            var FormTitle = $('#Form_TaleForm_Title');

            FormTitle.val(this.Title);
            tinymce.get("Form_TaleForm_Content").execCommand('mceInsertContent', false, this.Content);
        }
    }, {
        key: 'updateTale',
        value: function updateTale(taleForm, then) {
            axios.post('pagefunction/processTaleForm', {
                tale: taleForm
            }).then(function (_ref) {
                var data = _ref.data;
                return then(data);
            });
        }
    }, {
        key: 'UpdateValues',
        value: function UpdateValues() {
            this.Title = $('#Form_TaleForm_Title').val();
            this.Content = $('#Form_TaleForm_Content_ifr')[0].contentDocument.body.innerHTML;

            console.log(this.Content);
        }
    }, {
        key: 'tnyMCEInit',
        value: function tnyMCEInit() {
            tinymce.init({
                selector: 'textarea#Form_TaleForm_Content',
                plugins: "codesample",
                codesample_languages: [{ text: 'HTML/XML', value: 'markup' }, { text: 'JavaScript', value: 'javascript' }, { text: 'CSS', value: 'css' }, { text: 'PHP', value: 'php' }, { text: 'Ruby', value: 'ruby' }, { text: 'Python', value: 'python' }, { text: 'Java', value: 'java' }, { text: 'C', value: 'c' }, { text: 'C#', value: 'csharp' }, { text: 'C++', value: 'cpp' }],
                toolbar: "codesample"
            });
        }
    }]);

    return TaleForm;
})();

exports['default'] = TaleForm;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Tale = require('./Tale');

var _Tale2 = _interopRequireDefault(_Tale);

var _TaleForm = require('./TaleForm');

var _TaleForm2 = _interopRequireDefault(_TaleForm);

exports['default'] = new Vue({
    el: '#TimmyTalesApp',

    data: function data() {
        return {
            tales: [],
            CurrentTale: [],
            TaleForm: []
        };
    },

    created: function created() {
        var _this = this;

        _Tale2['default'].all(function (tales) {
            return _this.tales = tales;
        });
    },

    methods: {

        onTaleClick: function onTaleClick(id) {
            var _this2 = this;

            _Tale2['default'].find(id, function (TaleData) {
                return _this2.CurrentTale = TaleData;
            });
            _Tale2['default'].find(id, function (TaleData) {
                return console.log(TaleData);
            });
        },
        clearTale: function clearTale() {
            this.CurrentTale = ''; // clear CurrentTale data
        },
        fillTaleForm: function fillTaleForm() {
            //let form = new TaleForm(this.CurrentTale.Title, this.CurrentTale.Content);
            var form = new _TaleForm2['default'](this.CurrentTale); // Pass Current Tale Object to Form
            form.fillForm();
            this.TaleForm = form;
        },
        onTaleFormSubmit: function onTaleFormSubmit() {
            var _this3 = this;

            var form = new _TaleForm2['default'](this.TaleForm);
            form.UpdateValues();
            form.updateTale(this.TaleForm, function (Data) {
                return _this3.CurrentTale.Title = _this3.TaleForm.Title;
            }, function (Data) {
                return _this3.CurrentTale.Content = _this3.TaleForm.Content;
            });
        }

    },
    watch: {
        'CurrentTale': function CurrentTale(val, oldVal) {
            // console.log('Val' + val.Title);
            // console.log('oldVal' + oldVal);
            // console.log(this.CurrentTale.Title);
        }
    }

});
module.exports = exports['default'];

},{"./Tale":2,"./TaleForm":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = scrollableTales;

function scrollableTales() {
    var talesContainer = $('.tales-container');
    var Tales = $('.tale-panel');
    var TaleWidth = Tales.outerWidth();

    var rightArrow = $('.scroll-right');
    var leftArrow = $('.scroll-left');

    var TalesNumber = $(Tales).length / 2;
    var RoundTaleNumber = Math.ceil(TalesNumber) - 2;

    var RightArrowMax = RoundTaleNumber * TaleWidth - 40;

    $(talesContainer).scroll(function () {

        var currX = $(this).scrollLeft();

        if (currX >= 80) {
            setVisible(leftArrow);
        } else {
            setInvisible(leftArrow);
        }
        // right arrow
        if (currX >= RightArrowMax) {
            setInvisible(rightArrow);
        } else {
            setVisible(rightArrow);
        }
    });

    function setVisible(element) {
        $(element).removeClass('not-visible');
        $(element).addClass('is-visible');
    }

    function setInvisible(element) {
        $(element).removeClass('is-visible');
        $(element).addClass('not-visible');
    }

    $(rightArrow).on('click', function () {
        ScrollRight();
    });

    $(leftArrow).on('click', function () {
        ScrollLeft();
    });

    function ScrollRight() {
        var leftPos = $(talesContainer).scrollLeft();
        $(talesContainer).animate({
            scrollLeft: leftPos + TaleWidth
        }, 800);
    }

    function ScrollLeft() {
        var leftPos = $(talesContainer).scrollLeft();
        $(talesContainer).animate({
            scrollLeft: leftPos - TaleWidth
        }, 800);
    }
}

module.exports = exports['default'];

},{}]},{},[1]);
