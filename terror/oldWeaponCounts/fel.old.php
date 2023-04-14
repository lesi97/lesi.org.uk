<?php

//https://data.destinysets.com/api/Destiny2.GetCharacter?characterId=2305843009301476854&destinyMembershipId=4611686018467358417&membershipType=3&components=309%2C205

	$time = date('i');
	if ($time == 00 || $time == 15 || $time == 30 || $time == 45){
	
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
		
        //$log_message = "Curl request executed successfully at " . $current_dateTime . " ";
        //echo  "\n" . $log_message . "\n";

		$felTxt = fopen("fel.txt", "w") or die("Unable to open file!");
		fwrite($felTxt, $terrorFel);
		fclose($felTxt);

    } else {
        echo "An error occurred while trying to retrieve the data.";

        //$log_message = "Curl request failed at " . $current_dateTime . ".";
        //echo $log_message . "\n";   
	}
	} else {
	echo file_get_contents("./fel.txt");
	}


?>