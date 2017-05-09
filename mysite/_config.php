<?php

global $project;
$project = 'mysite';

global $database;
$database = '';

// Define DB Name
if(defined('SS_DATABASE_NAME') && SS_DATABASE_NAME) {
    $database = SS_DATABASE_NAME;
}
else {
    $database = 'timmy_tales_local_db';
}
// Define DB UserName
if(defined('SS_DATABASE_USERNAME') && SS_DATABASE_USERNAME) {
    $DBUserName = SS_DATABASE_USERNAME;
}
else {
    $DBUserName = 'admin';
}
// Define DB UserName
if(defined('SS_DATABASE_PASSWORD') && SS_DATABASE_PASSWORD) {
    $DBPassword = SS_DATABASE_PASSWORD;
}
else {
    $DBPassword = 'admin';
}
// Define DB Port
if(defined('SS_DATABASE_PORT') && SS_DATABASE_PORT) {
    $DBPort = SS_DATABASE_PORT;
}
else {
    $DBPort = '8889';
}

// Set Database credentials
global $databaseConfig;
$databaseConfig = array(
    'type' => 'MySQLDatabase',
    'server' => '127.0.0.1',
    'username' => $DBUserName,
    'password' => $DBPassword,
    'database' => $database,
    'port' => $DBPort,
    'path' => ''
);

require_once('conf/ConfigureFromEnv.php');

// Set the site locale
i18n::set_locale('en_US');