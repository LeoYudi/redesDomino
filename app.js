const app = require('./config/server');

app.listen('3000', () => {
    console.log('Entrou');
});

const rotaLogin = require('./routes/login');
rotaLogin(app);

