const controller = (app, bancoDados) => {
    app.get('/tips', (req, res) => {
        res.json({
            "tip": bancoDados.tips[Math.floor(Math.random() * bancoDados.tips.length)]
        })
    })

    app.post('/create', (req, res) => {
        const body = req.body
        bancoDados.tips.push(body.tip)
        res.json(body)
    })
}
export default controller