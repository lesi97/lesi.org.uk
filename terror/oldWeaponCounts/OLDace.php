<?php


	$time = date('i');
	if ($time == 00 || $time == 15 || $time == 30 || $time == 45){
	
    $url = 'https://www.bungie.net/Platform/Destiny2/3/Account/4611686018467358417/Character/2305843009301476854/Stats/UniqueWeapons/';
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
        $weapons = $data['Response']['weapons'];
        $ace = $weapons[34];
        $aceKills = $ace['values']['uniqueWeaponKills']['basic']['value'];
        $aceKillsComma = number_format($aceKills);
		$terror = "terror currently has " . $aceKillsComma . " kills across all Ace of Spades he's used";	
        echo "terror currently has " . $aceKillsComma . " kills across all Ace of Spades he's used.";
		
        //$log_message = "Curl request executed successfully at " . $current_dateTime . " ";
        //echo  "\n" . $log_message . "\n";

		$aceTxt = fopen("ace.txt", "w") or die("Unable to open file!");
		fwrite($aceTxt, $terror);
		fclose($aceTxt);

    } else {
        echo "An error occurred while trying to retrieve the data.";

        //$log_message = "Curl request failed at " . $current_dateTime . ".";
        //echo $log_message . "\n";   
	}
	} else {
	echo file_get_contents("./ace.txt");
	}


?>