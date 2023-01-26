DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  age int(11) NOT NULL,
  adress varchar(255) NOT NULL
);

INSERT INTO user (firstname, lastname, age, adress) VALUES ('John', 'Doe', 23, 'New York');
INSERT INTO user (firstname, lastname, age, adress) VALUES ('Jane', 'Doe', 26, 'New York');
INSERT INTO user (firstname, lastname, age, adress) VALUES ('Toto', 'Le Pro', 52, 'New York');
INSERT INTO user (firstname, lastname, age, adress) VALUES ('Titi', 'Le Petit', 12, 'New York');
INSERT INTO user (firstname, lastname, age, adress) VALUES ('Tata', 'La Sympa', 68, 'New York');

