CREATE TABLE norms(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    question VARCHAR(50) NOT NULL,
    answer VARCHAR(30) NOT NULL,
    recall_percent INTEGER NOT NULL
);