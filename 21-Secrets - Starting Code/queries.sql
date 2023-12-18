DROP TABLE IF EXISTS secrets, users;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
name VARCHAR(15) UNIQUE NOT NULL,
color VARCHAR(15)
);

CREATE TABLE secrets(
id SERIAL PRIMARY KEY,
secret TEXT NOT NULL,
user_id INTEGER REFERENCES users(id)
);

INSERT INTO users (name, color)
VALUES ('Angela', 'teal'), ('Jack', 'powderblue');

INSERT INTO secrets (secret, user_id)
VALUES ('secret, covert, stealthy, furtive, clandestine, surreptitious, underhanded mean done without attracting observation. secret implies concealment on any grounds ...', 1), ('All Secret Antiperspirants and Deodorants are proud to be Cruelty-Free. From our Clinical Strength to Aluminum Free, you get trusted protection, with no animal ...', 1), ('(obsolete) Faithful to a secret; not inclined to divulge or betray confidence; secretive. (obsolete) Separate; distinct. Verbit.', 2), ('The Secrets principles for manifestation visualization, gratitude, intention, and mastering your thoughts and feelings allow you to easily use the law of ...', 2 );

SELECT *
FROM secrets
JOIN users
ON users.id = user_id;