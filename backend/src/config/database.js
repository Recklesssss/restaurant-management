const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();

if (!process.env.POSTGRES) {
  console.error('POSTGRES environment variable is not defined');
  throw new Error('Environment variable POSTGRES is not defined');
}

const pool = new Pool({
  connectionString: 'postgres://postgres:biruk4you@localhost:6543/restaurants',
});

const query = (text, params) => pool.query(text, params);

module.exports = {
  query,
};