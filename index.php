<?php

// errors
require_once('includes/errors.php');
// utils
require_once('includes/utils.php');

// connection to database & query functions
require_once('data/database.php');
require_once('models/argo_queries.php');


// T*T -- form handling

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  echo "POST request / form submitted";

  debugPR($_POST);

  $memberData = [
    $_POST['f_name'],
    $_POST['f_sign'],
    $_POST['f_icon'],
    $_POST['f_navg'],
    $_POST['f_comb']
  ];

  $res = createMember($memberData);

  echo ('query has affected ' . $res . ' lines');

}










$memberList = getMemberList();

// debugPR($memberList);



require_once('views/index.phtml');


