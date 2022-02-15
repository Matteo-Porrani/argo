<?php

// errors
require_once('includes/errors.php');
// utils
require_once('includes/utils.php');

// connection to database & query functions
require_once('data/database.php');
require_once('models/argo_queries.php');


// display variables
$showCrewSection = 'd-block';
$showFormSection = 'd-none';


$res = 0;
$feedback = "";

// ##### form handling #####

// MK -- POST method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  if (isset($_POST['mod_form_delete'])) {

    // A*A -- c'est une SUPPRESSION
    $memberId = $_POST['mod_form_mem_id'];
    
    $res = deleteMember($memberId);
    $feedback = "L'élément a bien été supprimé.";

    // echo "résultat de suppression : {$res} lignes";

  } else {

    // A*A -- c'est un ajout / modification

    // MK -- vérification de formulaire

    $expected = ['f_id', 'f_icon', 'f_name', 'f_sign', 'f_navg', 'f_comb'];
    $required = ['f_name', 'f_sign'];

    $errors = false;
    $missing = [];


    foreach ($_POST as $key => $value) {

      if (!in_array($key, $expected)) {
        // ignore the value
        continue;
      }

      if (in_array($key, $required) && empty($value)) {
        // a required value is missing
        $missing[] = $key;
        $errors = true;
        continue;
      }

    }

    if ($errors) {
      // MK -- si ERREURS ...

      $incompleteMember['memName'] = $_POST['f_name'];
      $incompleteMember['memSign'] = $_POST['f_sign'];
      $incompleteMember['memIcon'] = "public/icons/ava_{$_POST['f_icon']}.png";
      $incompleteMember['memIconId'] = $_POST['f_icon'];
      $incompleteMember['memNavg'] = $_POST['f_navg'];
      $incompleteMember['memComb'] = $_POST['f_comb'];

      $showCrewSection = 'd-none';
      $showFormSection = 'd-block';

    } else {

      // MK -- si aucune erreur...

      // création de l'array pour écriture en bdd
      $memberData = [
        $_POST['f_name'],
        $_POST['f_sign'],
        "ava_{$_POST['f_icon']}.png",
        $_POST['f_navg'],
        $_POST['f_comb']
      ];

      // A*A -- si 'f_id' est présent il s'agit d'une modification
      if (!empty($_POST['f_id'])) {

        // on ajoute l'id en 'queue' de array pour modifier l'élément
        $memberData[] = $_POST['f_id'];

        $res = updateMember($memberData);
        $feedback = "L'élément {$_POST['f_name']} a bien été modifié.";

      } else {
        // il s'agit d'une création
        $res = createMember($memberData);
        $feedback = "L'élément {$_POST['f_name']} a bien été ajouté.";

      }
    }
  }
}



// MK -- si requête en GET avec paramètres 'action' & 'id'...
if (
  $_SERVER['REQUEST_METHOD'] === 'GET'
  && isset($_GET['action'])
) {
  // on récupère les données d'un membre pour remplir le formulaire
  $existingMember = getMemberById($_GET['id']);

  $showCrewSection = 'd-none';
  $showFormSection = 'd-block';
}


$memberList = getMemberList();

require_once('views/index.phtml');
