import express from "express";

const usuarios = [
  {
    email: "ronier.lim@gmail.com",
    senha: "123",
  },
  {
    email: "teste@gmail.com",
    senha: "1",
  },
];

const server = express();

server.use(express.json());

server.post("/login", (req, res) => {
  const usuarioEncontrado = usuarios.find(
    (usuario) => usuario.email == req.body.email
  );

  if (usuarioEncontrado != null && req.body.senha == usuarioEncontrado.senha) {
    res.send("OK, login aprovado");
  } else {
    res.status(401).send("Não autorizado");
  }
});

server.listen(8080);
