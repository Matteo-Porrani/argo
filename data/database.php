<?php

// A*A -- local

function connectToDatabase()
{
  $dsn = 'mysql:dbname=argonts;host=localhost;charset=UTF8';
  $user = 'root';
  $password = 'root';
  $options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING,
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES UTF8"
  ];
  $pdo = new PDO($dsn, $user, $password, $options);
  return $pdo;
}


/*
// A*A -- alwaysdata
function connectToDatabase()
{
  $dsn = 'mysql:dbname=ad1webbits_argonts;host=mysql-ad1webbits.alwaysdata.net;charset=UTF8';
  $user = '234683';
  $password = 'fullBeta%21';
  $options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING,
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES UTF8"
  ];
  $pdo = new PDO($dsn, $user, $password, $options);
  return $pdo;
}
*/