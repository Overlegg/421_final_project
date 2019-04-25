<?php

require 'vendor/autoload.php';

$configuration = [
    'settings' => [
        'displayErrorDetails' => false
    ]
];


$c = new \Slim\Container($configuration);
$app = new \Slim\App($c);

$container = $app->getContainer();
$container['pdo'] = function ($c) {
    $dsn = 'mysql:host=mati.engr.utk.edu;dbname=clegg1; port=33060;charset=utf8'; // replace Localhost with your mysql host ip and replace dbName with your database name
    $usr = 'clegg1'; //replace dbUSERNAME with your database username
    $pwd = 'clegg1@421'; //replace dbUSERNAME with your database password
    $pdo = new \Slim\PDO\Database($dsn, $usr, $pwd);
    return $pdo;
};

//$app = new Slim\App();

$routeFiles = (array) glob('routes/*.php');
foreach($routeFiles as $routeFile) {
    require_once $routeFile;
}

$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

// CORS
$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
        ->withHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

$app->run();

?>
