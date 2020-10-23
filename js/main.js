'use strict';

const TYPE = ['palace', 'flat', 'house', 'bungalow'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];


const LOCATION_X = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (min, max + 1)) + min;
}

const LOCATION_Y = getRandomInt(130, 630);



//функция генерации случайных данных

var generateElement = function() {

    // 1) как правильно включать эти константы (ниже) в функцию?
    //ещё одну функцию написать, которая включает в себя цикл?
    //или мы константы назначаем над функцией, которая перебирает данные массива?

    //2 / вот это задание в тренажёрах, где назначаются свойства
    //и затем используются для создания данных новой карточки,
    //можно по тому же принципу делать это задание? или скорее запутает?
    //https://up.htmlacademy.ru/javascript/21/courses/219/run/23


    var generateAnnoncesData {
      let ANNONCES = ['annonce1', 'annonce2', 'annonce3', 'annonce4',
        'annonce5', 'annonce6', 'annonce7', 'annonce8'
      ];

      for (var i = 1; i < ANNONCES.length; i++) {

        "author": {
          "avatar": 'img/avatars/user{{xx}}.png'
          //4 как лучше всего задавать выбор числа от 1 до 8? где {{xx}} это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются
        },
        "offer": {
          "title": 'h1',
          "address": '600, 350',
          "price": 'number',
          "type": 'TYPE',
          "rooms": 'number', // 5: что сюда пишем?
          "guests": 'number', // 6: аналогично 5
          "checkin": CHECKIN,
          "checkout": CHECKOUT,
          "features": FEATURES,
          "description": 'p';
          "photos": PHOTOS;
        },
        "location": LOCATION_X, LOCATION_Y;/
        }
      }
    };
