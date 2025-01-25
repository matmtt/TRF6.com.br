//A simple Node.js application that serves as a redirect page for the TRF6 tribunal
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redirecionador TRF6</title>
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
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
