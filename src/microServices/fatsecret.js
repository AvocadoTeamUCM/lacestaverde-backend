const FatSecret = require('fatsecret-api');

const fatSecret = new FatSecret(API, KEY);

fatSecret.method('foods.search', {search_expression: 'banana'}, function (err, result) {
    if (err) {
      console.error(err);
    } else {
      console.log(result.foods.food);
    }
  });
  