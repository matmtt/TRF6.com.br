//A simple Node.js application that serves as a redirect page for the TRF6 tribunal
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html lang="pt-BR">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Redirecionador TRF6 - Página de Redirecionamento</title>
          <meta name="description" content="Você será redirecionado automaticamente para o site oficial do TRF6 em 15 segundos.">
          <link rel="canonical" href="https://portal.trf6.jus.br/">
          <meta property="og:title" content="Redirecionador TRF6">
          <meta property="og:description" content="Você será redirecionado automaticamente para o site oficial do TRF6 em 15 segundos.">
          <meta property="og:url" content="https://portal.trf6.jus.br/">
          <meta property="og:type" content="website">
          <!-- Redirect after 15 seconds -->
          <meta http-equiv="refresh" content="15;url=https://portal.trf6.jus.br/">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
            body {
              font-family: 'Roboto', Arial, sans-serif;
              line-height: 1.6;
              margin: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              background-color: #f4f4f9;
              color: #333;
            }

            .box {
              background-color: #fff;
              padding: 20px 40px;
              border-radius: 15px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              text-align: center;
              max-width: 800px;
              width: 90%;
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            h1 {
              font-size: 2em;
              font-weight: 700;
              color: #207563; /* Custom color */
              margin-bottom: 20px; /* Add spacing below the header */
            }

            a {
              color: #007bff;
              text-decoration: none;
            }

            a:hover {
              text-decoration: underline;
            }

            #counter {
              font-weight: bold;
              color: #1ca65a;
            }
          </style>
          <script>
            let seconds = 15;
            const countdown = () => {
              const counterElement = document.getElementById('counter');
              counterElement.textContent = seconds;
              seconds--;
            };
            setInterval(countdown, 1000);
          </script>
        </head>
        <body>
          <div class="box">
            <h1>Redirecionador TRF6</h1>
            <p>Se você chegou nesse site, possivelmente estava procurando o website oficial do TRF6:</p>
            <p><a href="https://portal.trf6.jus.br/" target="_blank">https://portal.trf6.jus.br/</a></p>
            <p>Você será redirecionado automaticamente em <span id="counter">15</span> segundos.</p>
          </div>
        </body>
      </html>
    `);
  } else if (req.url === '/robots.txt') {
    const filePath = path.join(__dirname, 'robots.txt');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    });
    } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Página Não Encontrada</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
          body {
            font-family: 'Roboto', Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f9;
            color: #333;
          }
  
          .box {
            background-color: #fff;
            padding: 20px 40px;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 800px;
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
  
          h1 {
            font-size: 2em;
            font-weight: 700;
            color: #207563;
            margin-bottom: 20px;
          }
  
          p {
            margin: 10px 0;
          }
  
          a {
            color: #007bff;
            text-decoration: none;
          }
  
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>404 - Página Não Encontrada</h1>
          <p>Desculpe, a página que você está procurando não existe.</p>
          <p><a href="/">Voltar para a Página Inicial</a></p>
        </div>
      </body>
      </html>
    `);
    }  
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
