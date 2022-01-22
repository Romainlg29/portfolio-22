from asyncio.windows_events import NULL


def connectToDatabase(mariadb, env):
    try:
        db  = mariadb.connect(user=env['MARIADB_USER'], password=env['MARIADB_PASSWORD'], host=env['MARIADB_HOST'], port=3306, database=env['MARIADB_DATABASE'])
        return db, db.cursor()
    except mariadb.Error as e:
        print(f'Cannot connect to MariaDB with : {e}')
        return None