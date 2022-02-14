<?php

// errors
require_once('includes/errors.php');
// utils
require_once('includes/utils.php');

// connection to database & query functions
require_once('data/database.php');
require_once('models/argo_queries.php');


// T*T -- form handling


// A*A -- POST method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {


  if (isset($_POST['mod_form_delete'])) {
    // A*A -- c'est une SUPPRESSION
    $memberId = $_POST['mod_form_mem_id'];
    deleteMember($memberId);

  } else {

    // A*A -- c'est un ajout / modification
    // echo "POST request / form submitted";
    // debugPR($_POST);

    $memberData = [
      $_POST['f_name'],
      $_POST['f_sign'],
      "ava_{$_POST['f_icon']}.png",
      $_POST['f_navg'],
      $_POST['f_comb']
    ];

    // A*A -- on détermine si create/edit
    if (!empty($_POST['f_id'])) {

      // on ajoute l'id en 'queue' de array pour modifier l'élément
      $memberData[] = $_POST['f_id'];
      // echo 'content of $memberData';
      // debugPR($memberData);

      $res = updateMember($memberData);
    } else {
      // 
      $res = createMember($memberData);
    }

    // echo '<br>';
    // echo ('query has affected ' . $res . ' lines');

  }
}


// A*A -- GET METHOD + action & id
if (
  $_SERVER['REQUEST_METHOD'] === 'GET'
  && isset($_GET['action'])
) {

  // on récupère les données d'un membre pour remplir le formulaire
  $existingMember = getMemberById($_GET['id']);
  // debugPR($existingMember);

}










$memberList = getMemberList();

// debugPR($memberList);



require_once('views/index.phtml');
