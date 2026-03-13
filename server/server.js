const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// 连接数据库
mongoose.connect("mongodb://localhost:27017/yuki", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 用户模型
const User = mongoose.model("User", {
  username: String,
  password: String
});

// 倾诉模型
const Vent = mongoose.model("Vent", {
  userId: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

// 注册接口
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.json({ success: true });
});

// 发布倾诉
app.post("/api/vent", async (req, res) => {
  const { userId, content } = req.body;
  const vent = new Vent({ userId, content });
  await vent.save();
  res.json({ success: true });
});

// 获取所有倾诉
app.get("/api/vents", async (req, res) => {
  const vents = await Vent.find().sort({ createdAt: -1 });
  res.json(vents);
});

// 启动服务
app.listen(3000, () => {
  console.log("Yuki server running on port 3000");
});