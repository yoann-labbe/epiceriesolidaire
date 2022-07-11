const userRouter = require("express").Router();

const {
  //getUsers,
  //getUser,
  createUser,
  //loginUser,
  //getProfile,
 //delete_,
  //updateUser,
  //logout,
} = require("../controllers/user");

const { verifyToken } = require("../middleware/auth");

//userRouter.get("/", verifyToken, getUsers);
//userRouter.get("/me", verifyToken, getProfile);
//userRouter.get("/:id", verifyToken, getUser);
userRouter.post("/", createUser);
//userRouter.post("/login", loginUser);
//userRouter.delete("/:id", verifyToken, delete_);
//userRouter.patch("/:id", verifyToken, updateUser);
//userRouter.post("/logout", verifyToken, logout);

module.exports = userRouter;
