CREATE TABLE visits_logs (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user VARCHAR(64) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
    period DATETIME NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE unique_visits_logs (
    user VARCHAR(64) CHARACTER SET latin1 COLLATE latin1_general_CI NOT NULL,
    country VARCHAR(56) NOT NULL,
    count INT UNSIGNED DEFAULT 0,
    PRIMARY KEY (user)
);