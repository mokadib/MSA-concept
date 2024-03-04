CREATE TABLE articles
(
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title      VARCHAR(255),
    body       TEXT,
    law_id     UUID,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO articles (title, body, law_id) VALUES ('Article 1', 'Article 1 body', 'd3b3e3e3-3e3e-3e3e-3e3e-3e3e3e3e3e3e');
INSERT INTO articles (title, body, law_id) VALUES ('Article 2', 'Article 2 body', 'd3b3e3e3-3e3e-3e3e-3e3e-3e3e3e3e3e3e');
INSERT INTO articles (title, body, law_id) VALUES ('Article 3', 'Article 3 body', 'd3b3e3e3-3e3e-3e3e-3e3e-3e3e3e3e3e3e');
INSERT INTO articles (title, body, law_id) VALUES ('Article 4', 'Article 4 body', 'd3b3e3e3-3e3e-3e3e-3e3e-3e3e3e3e3e3e');
INSERT INTO articles (title, body, law_id) VALUES ('Article 5', 'Article 5 body', 'd3b3e3e3-3e3e-3e3e-3e3e-3e3e3e3e3e3e');
INSERT INTO articles (title, body, law_id) VALUES ('Article 6', 'Article 6 body', 'd3b3e3e3-3e3e-3e3e-3e3e-3e3e3e3e3e3e');


