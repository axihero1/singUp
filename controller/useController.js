const User = require("../models/user");
const ActiveUser = require("../models/activeUsers");
const signUp = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const isUser = await User.find({ userName });
    if (isUser.length) {
      res.json({
        success: false,
        message: "bu username band boshqasidan foydalaning",
      });
    } else {
      const newUser = new User({ userName, email, password });
      newUser.save();
      res.json({ success: true, message: "siz ruyxatdan utdingiz" });
    }
  } catch (error) {
    console.log("Error", error);
  }
};
const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const findUser = await User.findOne({ userName }).select(["+password"]);
    console.log(findUser);
    const isMatch = await findUser.matchPassword(password);
    if (findUser.userName && isMatch) {
      const newUserActive = new ActiveUser({
        id: findUser._id,
      });
      await newUserActive.save();
      res.json({
        success: true,
        message: "user ruyxatdan utgan",
        data: findUser,
      });
    } else {
      res.json({
        success: false,
        message: "user ruyxatdan utmagan sign Up qiliang",
        data: findUser,
      });
    }
  } catch (error) {
    console.log("error login", error);
  }
};
module.exports = { signUp, login };