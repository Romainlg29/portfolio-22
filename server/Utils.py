import os


def connectToDatabase(mariadb):
    try:
        db  = mariadb.connect(user=os.getenv('MARIADB_USER'), password=os.getenv('MARIADB_PASSWORD'), host=os.getenv('MARIADB_HOST'), port=3306, database=os.getenv('MARIADB_DATABASE'))
        print('Connection to MariaDB established!')
        return db, db.cursor(buffered=True)
    except mariadb.Error as e:
        print(f'Cannot connect to MariaDB with : {e}')
        return None