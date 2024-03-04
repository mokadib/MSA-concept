DROP TABLE IF EXISTS laws;

CREATE TABLE laws
(
    id        uuid PRIMARY KEY,
    title     VARCHAR(50) NOT NULL,
    published boolean     NOT NULL
);
INSERT INTO laws (id,title, published)
VALUES ('5d74cbe0-9b32-4375-98b7-dfe4a5cf7268','Law 1', true);
INSERT INTO laws (id,title, published)
VALUES ('4dc58728-5d5b-41ee-9c22-087d0f06e7d3','Law 2', false);
INSERT INTO laws (id,title, published)
VALUES ('4dc58728-5d5b-41ee-9c22-087d0f06e7d2','Law 3', true);
INSERT INTO laws (id,title, published)
VALUES ('9e5bbdbf-6861-4780-8225-4e91a0a95a13','Law 4', false);
INSERT INTO laws (id,title, published)
VALUES ('f69b9b51-3b46-4a13-b1e8-f74b19d08d4d','Law 5', true);
INSERT INTO laws (id,title, published)
VALUES ('0a18e87c-04ff-4b10-917c-c0c7e45968af','Law 6', false);


