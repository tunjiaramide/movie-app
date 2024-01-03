import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "movies",
});

app.use(express.json());
app.use(cors());

// if authentication problem, use
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'pass'

app.get("/", (req, res) => {
  res.json("Welcome to the home page");
});

app.get("/movies", (req, res) => {
  const query = "SELECT * FROM movie_table";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/movies", (req, res) => {
  const query = "INSERT INTO movie_table (`title`,`desc`) VALUES (?)";
  const values = [req.body.title, req.body.desc];
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Movie has been created");
  });
});

app.delete("/movie/:id", (req, res) => {
    const movieId = req.params.id;
    const query = "DELETE FROM movie_table WHERE id = ?";

    db.query(query, [movieId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Movie has been deleted");
    })
})

app.put("/movie/:id", (req, res) => {
    const movieId = req.params.id;
    const query = "UPDATE movie_table SET `title`= ?, `desc`= ? WHERE id = ?";
    const values = [req.body.title, req.body.desc];

    db.query(query, [...values, movieId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Movie has been updated");
    })
})

app.listen(5000, () => {
  console.log("connected to backend");
});
