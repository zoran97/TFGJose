const db = require('C:\Users\Jose\Desktop\TFG\TFGJose\DB\Users_Db.sql');

module.exports = class User{
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static find(email){
    return db.execute(
      'SELECT * FROM users WHERE emaril = ?', [email]);
  }

  static save(user) {
    return db.execute(
      'INSERT INTO users (name, email, password) VALUES (?,?,?)', 
      [user.name,user.email, user.password]
    );
  }
};