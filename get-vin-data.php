<?php
// Test vin number ZPBUA1ZL9KLA00848
$authorization = 'Authorization: Bearer ZrQEPSkKaWhhcjk3NTZAZ21haWwuY29t';
$url = '';
if (isset($_POST)) {
    $postdata = file_get_contents('php://input');
    $vinNumberData = json_decode($postdata, true);
    $vinNumber = isset($vinNumberData['vin_number'])?$vinNumberData['vin_number']:'';
    $url = "https://auto.dev/api/vin/$vinNumber";
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json', $authorization]);
    $result = curl_exec($curl);
    return $result;
}
