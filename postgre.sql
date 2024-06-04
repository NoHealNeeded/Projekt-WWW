CREATE TABLE images (
    id INTEGER PRIMARY KEY,
    url TEXT
);

CREATE TABLE imageInfos (
    cId TEXT PRIMARY KEY,
    id INTEGER,
    r INTEGER,
    cx INTEGER,
    cy INTEGER,
    FOREIGN KEY (id) REFERENCES images (id)
);

INSERT INTO images VALUES (1, './docker/images/pic1.jpg');
INSERT INTO imageInfos VALUES ('c1', 1, 8, 228, 158);
INSERT INTO imageInfos VALUES 
    ('c2', 1, 6, 224, 122);
INSERT INTO imageInfos VALUES
    ('c3', 1, 5, 167, 178),
    ('c4', 1, 7, 298, 124),
    ('c5', 1, 6, 163, 122),
    ('c6', 1, 7, 163, 203),
    ('c7', 1, 7, 255, 199),
    ('c8', 1, 7, 204, 140),
    ('c9', 1, 7, 280, 186),
    ('c10', 1, 5, 242, 197),
    ('c11', 1, 5, 267, 197),
    ('c12', 1, 5, 192, 161);
