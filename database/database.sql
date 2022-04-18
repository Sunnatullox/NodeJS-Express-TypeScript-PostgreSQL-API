CREATE DATABASE typescriptdatabase;

CREATE TABLE users(
    id BIGSERIAL PRIMARy KEY NOT NULL,
    name VARCHAR(60),
    email TEXT
);

INSERT INTO users (name, email)
VALUES ('Sunnatullox', 'sunnatullox@gmail.com'),
        ('Adbullox', 'Abdullox@gmail.com');