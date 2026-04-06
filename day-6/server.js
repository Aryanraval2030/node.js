import express from "express";

const app = express();
app.use(express.json());

const userData = [];

// add data

app.post("/user", (req, res) => {
  const data = req.body;
  userData.push(data);
  res.send("user successful saved");
});

//update data

app.put("/user/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const newData = req.body;

  if (!userData[index]) {
    return res.json({ message: "user not found" });
  }

  userData[index] = newData;

  res.json({
    message: "user updated",
    updatedUser: userData[index],
  });
});

//dlt data
app.delete("/dlt/:index", (req, res) => {
  const index = parseInt(req.params.index);

  if (index < 0 || index >= userData.length) {
    return res.status(404).json({
      message: "user not found",
    });
  }
  const dltUser = userData.splice(index, 1);

  res.json({
    message: "user dlted",
    newData: userData,
  });
});

app.listen(6419, () => {
  console.log("server is runnig..");
});
