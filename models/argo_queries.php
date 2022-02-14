<?php

// liste de tous les membres
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


// donnés d'un membre
function getMemberById($id) {
  $pdo = connectToDatabase();
  $query = "
    SELECT *
    FROM member
    WHERE memId = ?
  ";

  $stmt = $pdo->prepare($query);
  $stmt->execute([$id]);
  return $stmt->fetch(PDO::FETCH_ASSOC);
}


// création d'un nouveau membre
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


// modification d'un membre existant
function updateMember($memberData) {
  $pdo = connectToDatabase();
  $query = "
    UPDATE member
    SET memName = ?,
    memSign = ?,
    memIcon = ?,
    memNavg = ?,
    memComb = ?
    WHERE memId = ?
  ";

  $stmt = $pdo->prepare($query);
  $stmt->execute($memberData);
  return $stmt->rowCount();
}



// suppression d'un membre existant
function deleteMember($memberId) {
  $pdo = connectToDatabase();
  $query = "
    DELETE FROM member
    WHERE memId = ?
  ";

  $stmt = $pdo->prepare($query);
  $stmt->execute([$memberId]);
  return $stmt->rowCount();
}



