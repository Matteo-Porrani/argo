<?php

function getMemberList() {
  $pdo = connectToDatabase();
  $query = "
    SELECT *
    FROM member
  ";

  $stmt = $pdo->prepare($query);
  $stmt->execute();

  return $stmt->fetchAll(PDO::FETCH_ASSOC);
}


function createMember($memberData) {

  $pdo = connectToDatabase();
  $query = "
    INSERT
    INTO member
    VALUES (
      NULL,
      ?, ?, ?, ?, ?
    )
  ";

  $stmt = $pdo->prepare($query);
  $stmt->execute($memberData);

  return $stmt->rowCount();
}