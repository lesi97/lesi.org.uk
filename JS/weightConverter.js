function weightConverter(source,valNum) {
  valNum = parseFloat(valNum);
  var inputPounds = document.getElementById("inputPounds");
  var inputKilograms = document.getElementById("inputKilograms");
  var inputOunces = document.getElementById("inputOunces");
  var inputGrams = document.getElementById("inputGrams");
  var inputStones = document.getElementById("inputStones");
  if (source=="inputPounds") {
    inputKilograms.value=(valNum/2.2046).toFixed(4);
    inputOunces.value=(valNum*16).toFixed(0);
    inputGrams.value=(valNum/0.0022046).toFixed(4);
    inputStones.value=(valNum*0.071429).toFixed(4);
  }
  if (source=="inputKilograms") {
    inputPounds.value=(valNum*2.2046).toFixed(4);
    inputOunces.value=(valNum*35.274).toFixed(4);
    inputGrams.value=(valNum*1000).toFixed(0);
    inputStones.value=(valNum*0.1574).toFixed(4);
  }
  if (source=="inputOunces") {
    inputPounds.value=(valNum*0.062500).toFixed(4);
    inputKilograms.value=(valNum/35.274).toFixed(4);
    inputGrams.value=(valNum/0.035274).toFixed(4);
    inputStones.value=(valNum*0.0044643).toFixed(4);
  }
  if (source=="inputGrams") {
    inputPounds.value=(valNum*0.0022046).toFixed(4);
    inputKilograms.value=(valNum/1000).toFixed(2);
    inputOunces.value=(valNum*0.035274).toFixed(4);
    inputStones.value=(valNum*0.00015747).toFixed(4);
  }
  if (source=="inputStones") {
    inputPounds.value=(valNum*14).toFixed(0);
    inputKilograms.value=(valNum/0.15747).toFixed(4);
    inputOunces.value=(valNum*224).toFixed(0);
    inputGrams.value=(valNum/0.00015747).toFixed(4);
  }

}