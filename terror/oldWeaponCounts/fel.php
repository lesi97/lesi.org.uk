<?php


// https://data.destinysets.com/api/Destiny2.GetCharacter?characterId=2305843009301476854&destinyMembershipId=4611686018467358417&membershipType=3&components=309%2C205

$time = date('i');

if ($time == 00 || $time == 15 || $time == 30 || $time == 45) {

    $url = 'https://www.bungie.net/Platform/Destiny2/3/Profile/4611686018467358417/Character/2305843009301476854/?components=309,205';
    $api_key = '9666066defdd416c863780e47bc5ad5e';

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'x-api-key: ' . $api_key
    ));


    $response = curl_exec($ch);
    curl_close($ch);

    $current_dateTime = date("Y-m-d H:i:s");

    if ($response !== false) {
        $data = json_decode($response, true);
        $felTracker = $data["Response"]["itemComponents"]["plugObjectives"]["data"]["6917529190261952418"]["objectivesPerPlug"]["3244015567"]["0"]["progress"];
        $felKillsComma = number_format($felTracker);
        $terrorFel = "terror currently has " . $felKillsComma . " kills on his felwinter";
        echo "terror currently has " . $felKillsComma . " kills on his felwinter.";

        $felData = array("felwinter_kills" => $felKillsComma);
        $felJson = json_encode($felData);

        if ($felTracker !== 0) {
            file_put_contents("fel.json", $felJson);
        }

    } else {
        echo "An error occurred while trying to retrieve the data.";
    }
} else {
    $felJson = file_get_contents("./fel.json");
    $felData = json_decode($felJson, true);
    $felKillsComma = $felData["felwinter_kills"];
    $terrorFel = "terror currently has " . $felKillsComma . " kills on his felwinter";
    echo $terrorFel;
}
?>