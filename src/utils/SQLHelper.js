import SQLite from 'react-native-sqlite-storage';

const database_name = "SessionDatabase.db";
const database_version = "1.0";
const database_displayname = "Session Data Database";
const database_size = 200000;

SQLite.DEBUG(true);
SQLite.enablePromise(true);

export const getDatabase = async () => {
  const db = await SQLite.openDatabase(
    database_name,
    database_version,
    database_displayname,
    database_size
  );
  return db;
};

export const createTable = async (db) => {
  await db.executeSql(
    `CREATE TABLE IF NOT EXISTS session_data (
      key TEXT PRIMARY KEY,
      value TEXT
    );`
  );
};

export const storeData = async (db, key, value) => {
  await db.executeSql(
    `INSERT OR REPLACE INTO session_data (key, value) VALUES (?, ?);`,
    [key, value]
  );
};

export const retrieveData = async (db, key) => {
  const [results] = await db.executeSql(
    `SELECT value FROM session_data WHERE key = ?;`,
    [key]
  );
  if (results.rows.length > 0) {
    return results.rows.item(0).value;
  }
  return null;
};

export const clearData = async (db) => {
  await db.executeSql(`DELETE FROM session_data;`);
};
