const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  res.redirect("home");
});

router.get("/home", (req, res) => {
  res.render("home");
});

router.get("/gear", (req, res) => {
  res.render("gear");
});

router.post("/gear", (req, res) => {
  fs.readFile("./data.json", "utf-8", (err, data) => {
    data = JSON.parse(data);

    data = {
      bike: req.body.bike,
      clothes: req.body.clothes,
    };
    console.log(data);
    fs.writeFile("./data.json", JSON.stringify(data), (err) => {
      res.redirect("home");
    });
  });
});

// router.post("/gear", (req, res) => {
//   fs.writeFile("./data.json", JSON.stringify(data, null, 2), () => {
//     res.redirect("/");
//   });
// });

// router.post('/gear', (req, res) => {
//     fs.readFile('./data.json', 'utf-8', (err, data) => {
//         console.log(data)
//     })
// })

module.exports = router;
