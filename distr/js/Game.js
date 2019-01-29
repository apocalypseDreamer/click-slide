(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _GenerateHTML = _interopRequireDefault(require("./modules/GenerateHTML"));

var _Bests = _interopRequireDefault(require("./modules/Bests"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ukladanka =
function () {
  function Ukladanka() {
    _classCallCheck(this, Ukladanka);

    this.imageList = ["url('pics/currents.jpg')", "url('pics/mgmt.jpg')", "url('pics/joywave.jpg')", "url('pics/lowhum.jpg')"];
    this.generator = new _GenerateHTML.default(this.imageList);
    this.recordObject = _objectSpread({}, _Bests.default);
  }

  _createClass(Ukladanka, [{
    key: "initialize",
    value: function initialize() {
      this.generator.cyk();
    }
  }]);

  return Ukladanka;
}();

var game = new Ukladanka();
game.initialize();

},{"./modules/Bests":2,"./modules/GenerateHTML":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var records = {
  3: [{
    position: 1,
    name: 'Nick7',
    time: 6049,
    timeFormatted: '00:00:06.049'
  }, {
    position: 2,
    name: 'Nick2',
    time: 10120,
    timeFormatted: '00:00:10.120'
  }, {
    position: 3,
    name: 'Nick7',
    time: 12477,
    timeFormatted: '00:00:12.477'
  }, {
    position: 4,
    name: 'Nick9',
    time: 14731,
    timeFormatted: '00:00:14.731'
  }, {
    position: 5,
    name: 'Nick2',
    time: 20492,
    timeFormatted: '00:00:20.492'
  }, {
    position: 6,
    name: 'Nick7',
    time: 21054,
    timeFormatted: '00:00:21.054'
  }, {
    position: 7,
    name: 'Nick6',
    time: 22429,
    timeFormatted: '00:00:22.429'
  }, {
    position: 8,
    name: 'Nick1',
    time: 23224,
    timeFormatted: '00:00:23.224'
  }, {
    position: 9,
    name: 'Nick9',
    time: 23368,
    timeFormatted: '00:00:23.368'
  }, {
    position: 10,
    name: 'Nick9',
    time: 24795,
    timeFormatted: '00:00:24.795'
  }],
  4: [{
    position: 1,
    name: 'Nick8',
    time: 9403,
    timeFormatted: '00:00:09.403'
  }, {
    position: 2,
    name: 'Nick9',
    time: 9777,
    timeFormatted: '00:00:09.777'
  }, {
    position: 3,
    name: 'Nick4',
    time: 11887,
    timeFormatted: '00:00:11.887'
  }, {
    position: 4,
    name: 'Nick8',
    time: 12814,
    timeFormatted: '00:00:12.814'
  }, {
    position: 5,
    name: 'Nick8',
    time: 12943,
    timeFormatted: '00:00:12.943'
  }, {
    position: 6,
    name: 'Nick0',
    time: 14437,
    timeFormatted: '00:00:14.437'
  }, {
    position: 7,
    name: 'Nick4',
    time: 16317,
    timeFormatted: '00:00:16.317'
  }, {
    position: 8,
    name: 'Nick0',
    time: 18292,
    timeFormatted: '00:00:18.292'
  }, {
    position: 9,
    name: 'Nick7',
    time: 19853,
    timeFormatted: '00:00:19.853'
  }, {
    position: 10,
    name: 'Nick6',
    time: 20757,
    timeFormatted: '00:00:20.757'
  }],
  5: [{
    position: 1,
    name: 'Nick7',
    time: 5247,
    timeFormatted: '00:00:05.247'
  }, {
    position: 2,
    name: 'Nick1',
    time: 8484,
    timeFormatted: '00:00:08.484'
  }, {
    position: 3,
    name: 'Nick4',
    time: 8815,
    timeFormatted: '00:00:08.815'
  }, {
    position: 4,
    name: 'Nick2',
    time: 10524,
    timeFormatted: '00:00:10.524'
  }, {
    position: 5,
    name: 'Nick7',
    time: 10954,
    timeFormatted: '00:00:10.954'
  }, {
    position: 6,
    name: 'Nick3',
    time: 12424,
    timeFormatted: '00:00:12.424'
  }, {
    position: 7,
    name: 'Nick2',
    time: 13853,
    timeFormatted: '00:00:13.853'
  }, {
    position: 8,
    name: 'Nick4',
    time: 14705,
    timeFormatted: '00:00:14.705'
  }, {
    position: 9,
    name: 'Nick3',
    time: 18460,
    timeFormatted: '00:00:18.460'
  }, {
    position: 10,
    name: 'Nick7',
    time: 24310,
    timeFormatted: '00:00:24.310'
  }],
  6: [{
    position: 1,
    name: 'Nick5',
    time: 6041,
    timeFormatted: '00:00:06.041'
  }, {
    position: 2,
    name: 'Nick3',
    time: 10291,
    timeFormatted: '00:00:10.291'
  }, {
    position: 3,
    name: 'Nick0',
    time: 10954,
    timeFormatted: '00:00:10.954'
  }, {
    position: 4,
    name: 'Nick4',
    time: 13440,
    timeFormatted: '00:00:13.440'
  }, {
    position: 5,
    name: 'Nick8',
    time: 14675,
    timeFormatted: '00:00:14.675'
  }, {
    position: 6,
    name: 'Nick4',
    time: 15199,
    timeFormatted: '00:00:15.199'
  }, {
    position: 7,
    name: 'Nick5',
    time: 15828,
    timeFormatted: '00:00:15.828'
  }, {
    position: 8,
    name: 'Nick0',
    time: 18070,
    timeFormatted: '00:00:18.070'
  }, {
    position: 9,
    name: 'Nick4',
    time: 20681,
    timeFormatted: '00:00:20.681'
  }, {
    position: 10,
    name: 'Nick5',
    time: 21163,
    timeFormatted: '00:00:21.163'
  }]
};
var _default = records; 

exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Image = _interopRequireDefault(require("./Image"));

var _Time = _interopRequireDefault(require("./Time"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GenerateHTML =
function () {
  function GenerateHTML(imageList) {
    _classCallCheck(this, GenerateHTML);

    this.imageList = imageList;
    this.timeClass = new _Time.default();
    this.imageClass = new _Image.default(imageList);
  }

  _createClass(GenerateHTML, [{
    key: "cyk",
    value: function cyk() {
      var _this = this;

      var create = function create(element) {
        return document.createElement(element);
      };

      var mainDiv = create('div');
      mainDiv.id = 'main';
      var selectDiv = create('div');
      selectDiv.id = 'imageSelect';
      var thumbContainer = create('div');
      thumbContainer.classList.add('thumb-container');

      for (var i = 0; i < this.imageList.length; i++) {
        var imageThumbnail = create('div');
        imageThumbnail.style.backgroundImage = this.imageList[i];
        imageThumbnail.classList.add('thumbnail');
        i === 0 ? imageThumbnail.classList.add('active') : null;
        thumbContainer.appendChild(imageThumbnail);
      }

      var arrowLeft = create('i');
      arrowLeft.classList.add('selectArrow', 'fas', 'fa-arrow-left');
      arrowLeft.addEventListener('click', function () {
        _this.imageClass.changeImage('left');
      });
      var arrowRight = create('i');
      arrowRight.classList.add('selectArrow', 'fas', 'fa-arrow-right');
      arrowRight.addEventListener('click', function () {
        _this.imageClass.changeImage('right');
      });
      selectDiv.appendChild(arrowLeft);
      selectDiv.appendChild(thumbContainer);
      selectDiv.appendChild(arrowRight);
      mainDiv.appendChild(selectDiv);
      var sizeSelect = create('div');
      sizeSelect.id = 'sizeSelect';

      var _loop = function _loop(_i) {
        var btn = create('button');
        btn.innerText = "".concat(_i, "x").concat(_i);
        btn.value = _i;
        btn.addEventListener('click', function () {
          _this.imageClass.splitImage(_i);

          _this.imageClass.shiftBoard();
        });
        sizeSelect.appendChild(btn);
      };

      for (var _i = 3; _i < 7; _i++) {
        _loop(_i);
      }

      mainDiv.appendChild(sizeSelect);
      var timerDiv = create('div');
      timerDiv.id = 'timer';
      mainDiv.appendChild(timerDiv);
      var gameBoard = create('div');
      gameBoard.id = 'gameBoard';
      gameBoard.style.display = 'flex';
      gameBoard.style.flexFlow = 'row wrap';
      mainDiv.appendChild(gameBoard);
      document.body.appendChild(mainDiv);
    }
  }]);

  return GenerateHTML;
}();

exports.default = GenerateHTML;

},{"./Image":4,"./Time":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Time = _interopRequireDefault(require("./Time"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Image =
function () {
  function Image(imageList) {
    _classCallCheck(this, Image);

    this.imageList = imageList; 

    this.index = 0;
    this.splitSize = null;
    this.oldTime = new _Time.default(); 

    this.swapHandlerBound = this.swapHandler.bind(this);
  } 


  _createClass(Image, [{
    key: "changeImage",
    value: function changeImage(direction) {
      var thumbContainer = document.querySelector('.thumb-container'); 

      var thumbnailDivs = Object.values(document.querySelectorAll('.thumbnail'));
      var thumbLen = thumbnailDivs.length; 

      var activeDiv = document.querySelector('.thumbnail.active'); 

      var activeIndex = thumbnailDivs.findIndex(function (child) {
        return child == activeDiv;
      }); 

      var animation = function animation(direction) {
        for (var i = 1; i <= 120; i++) {
          setTimeout(function () {
            direction ? thumbContainer.scrollLeft-- : thumbContainer.scrollLeft++;
          }, i * 3);
        }
      }; 


      activeDiv.classList.remove('active');

      if (direction === 'left') {
        if (activeIndex === 0) {
          activeDiv.before(thumbnailDivs[thumbLen - 1]);
          thumbContainer.scrollLeft += 120;
        } 


        activeDiv.previousSibling.classList.add('active');
        animation(true);
      } else if (direction === 'right') {
        if (activeIndex === thumbLen - 1) {
          activeDiv.after(thumbnailDivs[0]);
          thumbContainer.scrollLeft -= 120;
        }

        activeDiv.nextSibling.classList.add('active');
        animation(false);
      } else {
        console.warn('źle podany kierunek');
      }
    }
  }, {
    key: "checkIfWon",
    value: function checkIfWon() {
      var _this = this;

      var arrayOfSquares = Object.values(document.querySelectorAll('.square')); 

      var won = true;
      arrayOfSquares.forEach(function (square, index) {
        var order = square.attributes['data-order'].value; 

        if (order != index) {
          won = false;
        }
      });

      if (won) {
        var winningTime = this.oldTime.returnTime();
        console.log(winningTime); 

        this.oldTime.stopTimer(); 

        var finishPopUp = document.createElement('div');
        finishPopUp.id = 'finishPopup';
        var finishInfo = document.createElement('div');
        finishInfo.id = 'finishInfo';
        var text1 = document.createElement('p');
        text1.textContent = 'Wygrałeś!';
        var text2 = document.createElement('p');
        text2.textContent = 'Twój czas to ' + winningTime;
        var button = document.createElement('a');
        button.classList.add('restart-btn');
        button.textContent = 'Spróbuj jeszcze raz!';
        button.addEventListener('click', function () {
          document.getElementById('gameBoard').innerHTML = null;
          document.getElementById('timer').innerHTML = null;
          document.getElementById('finishPopup').remove(); 

          document.getElementById('gameBoard').removeEventListener('click', _this.swapHandlerBound, true);
        });
        finishInfo.appendChild(text1);
        finishInfo.appendChild(text2);
        finishInfo.appendChild(button);
        finishPopUp.appendChild(finishInfo);
        document.body.appendChild(finishPopUp);
      }
    }
  }, {
    key: "swapHandler",
    value: function swapHandler(e) {
      var partsArray = Object.values(document.getElementsByClassName('square'));
      console.log(partsArray.length);
      var index = partsArray.findIndex(function (obj) {
        return obj == e.target;
      });

      for (var i = 0; i < partsArray.length; i++) {
        partsArray[i].classList.remove('new-line', 'end-line');

        if (i % this.splitSize == 0) {
          partsArray[i].classList.add('new-line');
        } else if (i % this.splitSize == this.splitSize - 1) {
          partsArray[i].classList.add('end-line');
        }
      }

      var emptyElement;

      if (partsArray[index - 1] != undefined && partsArray[index - 1].classList.contains('empty-space') && !e.target.classList.contains('new-line')) {
        emptyElement = partsArray[index - 1];
      }

      if (partsArray[index + 1] != undefined && partsArray[index + 1].classList.contains('empty-space') && !e.target.classList.contains('end-line')) {
        emptyElement = partsArray[index + 1];
      }

      if (partsArray[index - this.splitSize] != undefined && partsArray[index - this.splitSize].classList.contains('empty-space')) {
        emptyElement = partsArray[index - this.splitSize];
      }

      if (partsArray[index + this.splitSize] != undefined && partsArray[index + this.splitSize].classList.contains('empty-space')) {
        emptyElement = partsArray[index + this.splitSize];
      }

      if (emptyElement != undefined) {
        console.log(index);
        var parent = e.currentTarget;
        var clonedImage = e.target.cloneNode();
        var clonedEmpty = emptyElement.cloneNode();
        parent.replaceChild(clonedEmpty, e.target);
        parent.replaceChild(clonedImage, emptyElement);
      }

      this.checkIfWon();
    } 

  }, {
    key: "splitImage",
    value: function splitImage(number) {
      this.splitSize = number; 

      var gameBoard = document.getElementById('gameBoard');

      while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild);
      } 


      var originalWidth = gameBoard.clientWidth; 

      var width = originalWidth / number; 

      var image = document.querySelector('.thumbnail.active').style.backgroundImage; 

      for (var i = 0; i < number; i++) {
        for (var j = 0; j < number; j++) {
          var square = document.createElement('div'); 

          square.style.width = "".concat(width, "px");
          square.style.height = "".concat(width, "px"); 

          square.classList.add('square');
          square.setAttribute('data-order', j + i * number);

          if (i == number - 1 && j == number - 1) {
            square.classList.add('empty-space');
            square.style.background = '#000';
          } else {
            square.classList.add('split-image');
            square.style.backgroundImage = image; 

            square.style.backgroundPosition = "".concat(-1 * j * width, "px ").concat(-1 * i * width, "px");
            square.style.cursor = 'pointer';
          }

          gameBoard.appendChild(square);
        }
      }

      gameBoard.addEventListener('click', this.swapHandlerBound, true);
    }
  }, {
    key: "shiftBoard",
    value: function shiftBoard() {
      var _this2 = this;

      var parentNode = document.getElementById('gameBoard'); 

      var findArea = function findArea(shutteredArray, indexOfEmpty) {
        var possibleSwaps = []; 

        if (shutteredArray[indexOfEmpty - 1] != undefined && !shutteredArray[indexOfEmpty - 1].classList.contains('end-line')) {
          possibleSwaps.push(shutteredArray[indexOfEmpty - 1]);
        } 


        if (shutteredArray[indexOfEmpty + 1] != undefined && !shutteredArray[indexOfEmpty + 1].classList.contains('new-line')) {
          possibleSwaps.push(shutteredArray[indexOfEmpty + 1]);
        } 


        if (shutteredArray[indexOfEmpty - _this2.splitSize] != undefined) {
          possibleSwaps.push(shutteredArray[indexOfEmpty - _this2.splitSize]);
        } 


        if (shutteredArray[indexOfEmpty + _this2.splitSize] != undefined) {
          possibleSwaps.push(shutteredArray[indexOfEmpty + _this2.splitSize]);
        } 


        return possibleSwaps;
      }; 


      var replacer = function replacer() {
        var shutteredImage = document.getElementsByClassName('square'); 

        var shutteredArray = Object.values(shutteredImage); 

        for (var i = 0; i < shutteredArray.length; i++) {
          shutteredArray[i].classList.remove('new-line', 'end-line');

          if (i % _this2.splitSize == 0) {
            shutteredArray[i].classList.add('new-line');
          } else if (i % _this2.splitSize == _this2.splitSize - 1) {
            shutteredArray[i].classList.add('end-line');
          }
        } 


        var indexOfEmpty = shutteredArray.findIndex(function (image) {
          return image.classList.contains('empty-space');
        }); 

        var swapableSquares = findArea(shutteredArray, indexOfEmpty); 

        var randomizedIndex = Math.floor(Math.random() * swapableSquares.length); 

        var cloned1 = shutteredArray[indexOfEmpty].cloneNode();
        var cloned2 = swapableSquares[randomizedIndex].cloneNode(); 

        parentNode.replaceChild(cloned1, swapableSquares[randomizedIndex]);
        parentNode.replaceChild(cloned2, shutteredArray[indexOfEmpty]);
      };

      for (var i = 1; i <= 3; i++) {
        setTimeout(function () {
          replacer();
        }, 10 * i);

        if (i === 3) {
          (function () {
            _this2.oldTime.stopTimer(); 


            var time = new _Time.default();
            setTimeout(function () {
              time.startTimer(); 

              _this2.oldTime = time;
            }, 10 * i + 1);
          })();
        }
      }
    }
  }]);

  return Image;
}();

exports.default = Image;

},{"./Time":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Time =
function () {
  function Time() {
    _classCallCheck(this, Time);
  }

  _createClass(Time, [{
    key: "returnTime",
    value: function returnTime() {
      return this.currentTime;
    }
  }, {
    key: "startTimer",
    value: function startTimer() {
      var _this = this;

      this.timerDiv = document.getElementById('timer');
      var initialTime = new Date().getTime();
      this.interval = setInterval(function () {
        var newTime = new Date().getTime();
        var difference = newTime - initialTime;
        var time = new Date(0).toLocaleTimeString();

        var parseString = function parseString(number) {
          if (number.toString().length != 2) {
            number = '0' + number;
          }

          return number;
        };

        var hour = Math.floor(difference % (60 * 60 * 1000 * 24) / (60 * 60 * 1000));
        var min = Math.floor(difference % (60 * 60 * 1000 * 24) % (60 * 60 * 1000) / (60 * 1000));
        var sec = Math.floor(difference % (60 * 60 * 1000 * 24) % (60 * 60 * 1000) % (60 * 1000) / 1000);
        var ms = (newTime - initialTime) % 1000;

        while (ms.toString().length != 3) {
          ms = '0' + ms;
        }

        time = parseString(hour) + ':' + parseString(min) + ':' + parseString(sec) + '.' + ms;
        _this.currentTime = time;

        var htmlContent = _this.numbersToImages(time);

        _this.timerDiv.innerHTML = htmlContent;
      }, 1);
    }
  }, {
    key: "numbersToImages",
    value: function numbersToImages(timeString) {
      var charsArray = timeString.split('');
      var mappedToImages = charsArray.map(function (char) {
        var numberCheck = parseInt(char);
        var formatedName = char.toString();

        if (isNaN(numberCheck) == true) {
          if (char == ':') {
            formatedName = 'colon';
          } else if (char == '.') {
            formatedName = 'dot';
          } else {
            return;
          }
        } else {
          formatedName = 'c' + char;
        }

        return "<img src=\"pics/cyferki/".concat(formatedName, ".gif\" alt=\"time\"/>");
      });
      mappedToImages = mappedToImages.join('');
      return mappedToImages;
    }
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      clearInterval(this.interval);
    }
  }], [{
    key: "returnMs",
    value: function returnMs(time) {
      return 0;
    }
  }]);

  return Time;
}();

exports.default = Time;

},{}]},{},[1]);
