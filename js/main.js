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

var generateElement = function() {
  var generateAnnoncesData {
    let ANNONCES = ['annonce1', 'annonce2', 'annonce3', 'annonce4',
      'annonce5', 'annonce6', 'annonce7', 'annonce8'
    ];

    for (var i = 1; i < ANNONCES.length; i++) {
       ANNONCES.push('

      "author": {
        "avatar": "avatar": `img/avatars/user0${i + 1}.png`;
      },

      "offer": {
        "title": 'название объявления',
        "address": '600, 350',
        "price": '400',
        "type": 'TYPE',
        "rooms": '3',
        "guests": '4',
        "checkin": CHECKIN,
        "checkout": CHECKOUT,
        "features": FEATURES,
        "description": 'описание объявления';
        "photos": PHOTOS;
      },
      "location": LOCATION_X,
      LOCATION_Y;
      ');
    }
  }
};

let map = document.querySelector('.map');
map.classList.remove('map--faded');
