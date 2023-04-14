//let xhr = new XMLHttpRequest();
//xhr.open('GET', 'https://www.bungie.net/Platform/Destiny2/3/Account/4611686018467358417/Character/2305843009301476854/Stats/UniqueWeapons/', true);
//xhr.setRequestHeader('x-api-key', '9666066defdd416c863780e47bc5ad5e');
////xhr.responseType = 'json';
//xhr.send();

//xhr.onload = function() {
//   if (xhr.status === 200) {
//    let response = xhr.response;
//    let data = JSON.parse(response);
//    //console.log(data);
//    var weapons = JSON.parse(this.responseText).Response.weapons;
//    var ace = weapons[34];
//    var aceKills = ace.values.uniqueWeaponKills.basic.value;
//    var aceKillsComma = aceKills.toLocaleString();
//    console.log("Terror currently has " + aceKillsComma + " kills across all Ace of Spades he has used.");
//
//   
//  }
//};
