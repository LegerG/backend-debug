const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (name, mail, age, adress) values (?, ?, ?, ?)`,
      [user.name, user.mail, user.age, user.adress]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set name = ?,  mail = ?, age = ?, adress = ? where id = ?`,
      [user.name, user.mail, user.age, user.adress, user.id]
    );
  }
}

module.exports = UserManager;
