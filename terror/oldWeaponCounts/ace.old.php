<?php

//https://data.destinysets.com/api/Destiny2.GetCharacter?characterId=2305843009301476854&destinyMembershipId=4611686018467358417&membershipType=3&components=309%2C205

	$time = date('i');
	if ($time == 00 || $time == 15 || $time == 30 || $time == 45){

	$current_dateTime = date("Y-m-d H:i:s");	// For Logging	

    $url1 = 'https://www.bungie.net/Platform/Destiny2/3/Account/4611686018467358417/Character/2305843009301476854/Stats/UniqueWeapons/';
    $url2 = 'https://www.bungie.net/Platform/Destiny2/3/Profile/4611686018467358417/Character/2305843009301476854/?components=309,205';
    $api_key = '9666066defdd416c863780e47bc5ad5e';

    $ch1 = curl_init();
    $ch2 = curl_init();

    curl_setopt($ch1, CURLOPT_URL, $url1);
    curl_setopt($ch1, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch1, CURLOPT_HTTPHEADER, array(
        'x-api-key: ' . $api_key
    ));
    curl_setopt($ch2, CURLOPT_URL, $url2);
    curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch2, CURLOPT_HTTPHEADER, array(
        'x-api-key: ' . $api_key
    ));
	
	$mh = curl_multi_init();
	curl_multi_add_handle($mh,$ch1);
	curl_multi_add_handle($mh,$ch2);
	$running = null;
	do {
		curl_multi_exec($mh, $running);
	} while ($running);

	$result1 = curl_multi_getcontent($ch1);
	$result2 = curl_multi_getcontent($ch2);

	curl_multi_remove_handle($mh, $ch1);
	curl_multi_remove_handle($mh, $ch2);
	curl_multi_close($mh);

        $data1 = json_decode($result1, true);
        $weapons1 = $data1['Response']['weapons'];
        $ace1 = $weapons1[34];
        $allAceKills = $ace1['values']['uniqueWeaponKills']['basic']['value'];
        $allAceKillsComma = number_format($allAceKills);
	
        $data2 = json_decode($result2, true);
        $aceTracker = $data2["Response"]["itemComponents"]["plugObjectives"]["data"]["6917529207684081719"]["objectivesPerPlug"]["38912240"]["0"]["progress"];
        $singleAceKillsComma = number_format($aceTracker);

		
	//$terrorAce = "terror currently has " . $singleAceKillsComma . " kills on his ace and " . $allAceKillsComma . " kills in total with ace";
	$terrorAce = "terror currently has " . $singleAceKillsComma . " kills on his ace";	
        echo "terror currently has " . $singleAceKillsComma . " kills on his ace and " . $allAceKillsComma . " kills in total with ace.";
		
	$aceTxt = fopen("ace.txt", "w") or die("Unable to open file!");
	fwrite($aceTxt, $terrorAce);
	fclose($aceTxt);

		
		
		
	} else {
	echo file_get_contents("./ace.txt");
	}
?>