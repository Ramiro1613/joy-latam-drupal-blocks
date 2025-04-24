<?php

namespace Drupal\redeem_api\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use GuzzleHttp\Client;

/**
 * Provides an API endpoint to fetch data from Laravel.
 */
class RedeemApiController
{
    public function getData()
    {
        $client = new Client();
        $response = $client->get('https://pokeapi.co/api/v2/pokemon/');

        $data = json_decode($response->getBody(), true);
        return new JsonResponse($data);
    }
}
