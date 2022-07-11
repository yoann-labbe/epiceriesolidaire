const db = require("../db");


//GET ONE
const findOne = async (id) => {
  return db.promise().query("SELECT * FROM user WHERE id =? ", [id]);
};

// Création d'un utilisateur (POST)
const create = async ({
  firstname,
  lastname,
  cp,
  country,
  phone,
  email,
  password,
 
}) => {
  return db
    .promise()
    .query(
      "INSERT INTO user (firstname, lastname, cp, country, email, password, phone) VALUES (?,?,?,?,?,?,?)",
      [
        firstname,
        lastname,
        cp,
        country,
        phone,
        email,
        password,
        false,
      ]
    );
};


module.exports = {
  findOne,
  create,
};
