const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

async function openDb() {
  return open({
    filename: './database.sqlite',
    driver: sqlite3.Database
  });
}

async function initDb() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS articles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      author TEXT NOT NULL,
      date TEXT NOT NULL,
      category TEXT NOT NULL,
      tags TEXT
    )
  `);
  return db;
}

module.exports = { openDb, initDb };
