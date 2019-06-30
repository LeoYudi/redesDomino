module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('../../public/login/Login.html');
    });
}