const http = require('http');

// Definição de parametros do servidor
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    
    //Configuração do Server
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
    //Site
    res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre</title>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
        body{
            background-color: #15152b;
            margin: auto;
            font-family: Montserrat;
        }

        .coisa1{
            color: #fad000;
            font-weight: 700;
            font-size: 60px;
            border: solid 2px #9effff;
            align-self: center;
            margin: auto;
            margin-top: 50px;
            padding: 20px;
            border-radius: 20px;
            box-shadow:0px 0px 1000px  white;
            max-width: fit-content;
        }

        .coisa2{
            color: #1db400;
            font-weight: 700;
            font-size: 40px;
            margin-left: 20px;
            padding: 20px;
        }

        p{  
            color: #fff1c9;
            font-size: 30px;
            border-bottom: 2px yellow solid;
            border-left: 2px yellow solid;
            padding: 20px;
            border-bottom-left-radius: 20px;
            box-shadow: -10px 10px 10px grey;
            margin-left: 20px;
            margin-right: 20px;        
        }
    </style>
</head>
<body>
    <h1 class="coisa1">SOBRE</h1>
    <h1 class="coisa2">| | Mais informações</h1>

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorem voluptatum eaque. Sint sed fugiat voluptate! Nobis facilis eligendi asperiores, eius at, laudantium fuga pariatur maiores in, reprehenderit nemo. Laborum.</p>
    <p>Reprehenderit id corporis dolore quas rem maxime! Dolore error recusandae molestias, possimus consequuntur corrupti quis quia tempore blanditiis dicta reiciendis, repudiandae temporibus necessitatibus odio adipisci, impedit deserunt. Asperiores, reiciendis odit.</p>
    <p>Commodi similique et suscipit rerum magnam! Enim accusantium provident incidunt nihil corrupti dolor. Possimus non sed corrupti est laboriosam! Beatae corporis necessitatibus cumque? Praesentium error, corrupti laboriosam est eveniet ex.</p>
    <p>Corrupti voluptate eius perferendis tempore ducimus exercitationem temporibus modi, itaque, facere accusantium nam cum id sit nemo rem voluptas laborum commodi blanditiis! Possimus veniam, harum minima at maiores veritatis temporibus.</p>
</body>
</html>`);
    res.end();

});

// Executar o servidor
server.listen(
    port, // porta de acesso ao servidor
    hostname, // endereço IP do servidor
    console.log('O servidor está rodando...') // mensagem no terminal 
);


