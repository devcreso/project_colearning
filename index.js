import express from 'express'

const app = express();
const port = 3000;
app.use(express.json())

const usuarios = [{ nome: "creso" }]

app.get('/usuarios', (req, res) => {
    return res.json(usuarios)
})

app.post('/usuarios/:user', (req, res) => {
    const reqBody = req.body
    usuarios.push(reqBody)
    return res.send(usuarios)
})

// app.put('/usuarios/:id', (req, res) => {
//     req.params.id
//     res.send('oi')
// })

app.delete('/usuarios/:nome', (req, res) => {
    const userName = req.params
    usuarios.forEach(element => {
        console.log(userName)
        console.log(element.nome)
        if (element.nome == userName.nome) {
            res.send('tem')
        } else {
            res.send('nao tem')
        }
    });
    // res.send()
})

app.listen(port, (req, res) => {
    console.log("servidor online")
})