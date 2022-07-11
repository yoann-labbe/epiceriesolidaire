const {

    findOne,
    create,
  } = require("../models/user");

  const {
    hashPassword,
    validatePassword,
  } = require("../services/password.services");
  const jwt = require("jsonwebtoken");
 
  const getUser = async (req, res) => {
    const [data] = await findOne();
    res.json(data[0]);
  };
  
  const createUser = async (req, res) => {
    try {
      await create({
        ...req.body,
        password: await hashPassword(req.body.password),
      });
      res.status(200).send("Création d'un nouvel utilisateur");
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  };

  const loginUser = async (req, res) => {
    const [user] = await findByEmail(req.body?.email);
    if (user.length == 0) {
      res.status(401).send("Unauthorized");
      return;
    }
  
    if (!validatePassword(req.body?.password, user[0].password)) {
      res.status(401).send("Unauthorized");
      return;
    }
    const payload = {
      createdAt: new Date().toISOString(),
      user: user[0],
    };
    
  
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: 3600,
    });
  
    res.cookie("userToken", accessToken).json(user[0]);
  };

  
  module.exports = {
    getUser,
    createUser,
  };