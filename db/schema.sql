DROP DATABASE IF EXISTS tech_topics_db;

CREATE DATABASE tech_topics_db;

SET GLOBAL FOREIGN_KEY_CHECKS=0;


-- CREATE TABLE post (
--     id INT NOT NULL AUTO_ICREMENT PRIMARY KEY
--     title STRING NOT NULL
--     post_content TEXT NOT NULL
--     user_id INT NOT NULL
--     FOREIGN KEY (user_id) REFERENCES (user.id)
-- )

-- CREATE TABLE user (
--     id INT NOT NULL AUTO_ICREMENT PRIMARY KEY
--     username STRING NOT NULL
--     email STRING NOT NULL
--     password STRING NOT NULL
-- )

-- CREATE TABLE comment (
--     id INT NOT NULL AUTO_ICREMENT PRIMARY KEY
--     comment STRING NOT NULL
--     post_content TEXT NOT NULL
--     user_id INT NOT NULL
--     FOREIGN KEY (user_id) REFERENCES (user.id)
-- )

