//https://data.destinysets.com/api/Destiny2.GetCharacter?characterId=2305843009301476854&destinyMembershipId=4611686018467358417&membershipType=3&components=309%2C205

xhr.open('GET', 'https://www.bungie.net/Platform/Destiny2/3/Profile/4611686018467358417/Character/2305843009301476854/?components=309,205', true);
xhr.setRequestHeader('x-api-key', '9666066defdd416c863780e47bc5ad5e');
//xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
   if (xhr.status === 200) {
    let response = xhr.response;
    let dataOne = JSON.parse(response);
    let felTracker = dataOne.Response.itemComponents.plugObjectives.data["6917529190261952418"].objectivesPerPlug["3244015567"]["0"].progress;
    let felKillCount = felTracker.toLocaleString("en-uk");
	console.log(felKillCount);
  }
};
