const userRouter = require("./user");
//const annonceRouter = require("./annonce");




module.exports = (app) => {
  app.use("/user", userRouter);
  //app.use("/annonce", annonceRouter);

};

