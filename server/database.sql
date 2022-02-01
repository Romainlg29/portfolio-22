CREATE TABLE unique_visits_logs (
    user VARCHAR(64) CHARACTER SET latin1 COLLATE latin1_general_CI NOT NULL,
    lang VARCHAR(5) NOT NULL,
    PRIMARY KEY (user)
);
CREATE TABLE visits_logs (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user VARCHAR(64) CHARACTER SET latin1 COLLATE latin1_general_ci REFERENCES unique_visits_logs(user),
    period DATETIME NOT NULL,
    mobile BOOLEAN DEFAULT 0,
    PRIMARY KEY (id)
);
CREATE TABLE posts (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(64) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE posts_logs (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user VARCHAR(64) CHARACTER SET latin1 COLLATE latin1_general_ci REFERENCES unique_visits_logs(user),
    post INT UNSIGNED REFERENCES posts(id),
    period DATETIME NOT NULL,
    PRIMARY KEY (id)
);