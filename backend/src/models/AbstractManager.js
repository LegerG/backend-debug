class AbstractManager {
  constructor({ table }) {
    this.table = table;
  }

  async find(id) {
    const [rows] = await this.connection.query(
      `select * from  ${this.table} where id = ?`,
      [id]
    );

    if (rows.length === 0) {
      return null;
    }

    return rows[0];
  }

  async findAll() {
    const [rows] = await this.connection.query(`select * from  ${this.table}`);
    return rows;
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

  setConnection(connection) {
    this.connection = connection;
  }
}

module.exports = AbstractManager;
