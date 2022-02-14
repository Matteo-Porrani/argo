

CREATE TABLE member (
  memId INT(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  memName VARCHAR(50) NOT NULL,
  memSign VARCHAR(100) NULL DEFAULT "aucun signe particulier",
  memIcon VARCHAR(100) NULL DEFAULT "ava_1.png",
  memNavg INT(1) NOT NULL DEFAULT 3,
  memComb INT(1) NOT NULL DEFAULT 3
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO member
VALUES (
  NULL,
  "Héraclès",
  "sa force est incroyable",
  NULL,
  3,
  6
),
(
  NULL,
  "Nestor",
  "encore vigoureux malgré son âge",
  "ava_15.png",
  6,
  4
)
