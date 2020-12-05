
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

-- If using Jaws DB do not use the above
CREATE TABLE burgers
(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);