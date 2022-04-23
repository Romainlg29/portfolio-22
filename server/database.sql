CREATE TABLE unique_visits_logs (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user VARCHAR(64) CHARACTER SET latin1 COLLATE latin1_general_CI NOT NULL,
    period DATETIME NOT NULL,
    lang VARCHAR(2) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE visits_logs (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user INT UNSIGNED NOT NULL REFERENCES unique_visits_logs(id),
    period DATETIME NOT NULL,
    mobile BOOLEAN DEFAULT 0,
    referrer VARCHAR(255),
    PRIMARY KEY (id)
);
CREATE TABLE posts (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(64) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE posts_logs (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user INT UNSIGNED REFERENCES unique_visits_logs(id),
    post INT UNSIGNED REFERENCES posts(id),
    period DATETIME NOT NULL,
    referrer VARCHAR(255),
    PRIMARY KEY (id)
);
CREATE TABLE posts_comments (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    post INT UNSIGNED REFERENCES posts(id),
    comment TEXT,
    period DATETIME NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE posts_comments_responses (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    comment INT UNSIGNED REFERENCES posts_comments(id),
    response TEXT,
    period DATETIME NOT NULL,
    PRIMARY KEY (id)
);