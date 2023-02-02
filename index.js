// Basic Routing


// Metode get - Untuk meminta atau merequest data ke sebuah server

// metode post - untuk create melakukan push atau mengirimkan data dan di simpan ke database

// metode put - memberikan data ke server dengan membawa id yang spesifik - untuk meng update

// metode delete - untuk menghapus

const express = require('express')
const {
    index
} = require('./controllers/user')
const userRouter = require('./router/users')
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({
    extended: true
})) // for parsing application/x-www-form-urlencoded

var myLogger = function (request, response, next) {
    request.time = new Date()
    next()
}

app.use(myLogger)

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function (request, response) {
    const kelas = {
        id: '1',
        nama: 'Website Kami',
        date: request.time.toString()
    }
    // console.log('Hello World')
    response.render('pages/index', {
        kelas: kelas
    })
})

app.get('/about', function (request, response) {
    response.render('pages/about')
})

app.get('/portofolio', function (request, response) {
    response.render('pages/portofolio')
})

app.get('/Syntax_Media', function (request, response) {
    response.render('pages/Syntax_Media')
})

app.get('/cv', function (request, response) {
    response.render('pages/cv')
})

// Background defauld

// Portofolio

app.get("/views/pages/profile.jpg", function (req, res) {
    res.sendFile(path.resolve('views/pages/profile.jpg'))
})

app.get("/Asset/313.jpeg", function (req, res) {
    res.sendFile(path.resolve('Asset/313.jpeg'))
})

// Akhir Portofolio

// Portofolio 2
app.get("/views/pages/profile2.jpg", function (req, res) {
    res.sendFile(path.resolve('views/pages/profile2.jpg'))
})

// Unsplass

app.get("/views/pages/anete-lusina-zwsHjakE_iI-unsplash.jpg", function (req, res) {
    res.sendFile(path.resolve('views/pages/anete-lusina-zwsHjakE_iI-unsplash.jpg'))
})

app.get("/views/pages/dell-SGY0LIfTKZ4-unsplash.jpg", function (req, res) {
    res.sendFile(path.resolve('views/pages/dell-SGY0LIfTKZ4-unsplash.jpg'))
})

app.get("/views/pages/goran-ivos-wJpl8D38Tq8-unsplash.jpg", function (req, res) {
    res.sendFile(path.resolve('views/pages/goran-ivos-wJpl8D38Tq8-unsplash.jpg'))
})

app.get("/views/pages/justin-kauffman-fpoHihXiMhg-unsplash.jpg", function (req, res) {
    res.sendFile(path.resolve('views/pages/justin-kauffman-fpoHihXiMhg-unsplash.jpg'))
})

app.get("/views/pages/pexels-photo-450035.jpeg", function (req, res) {
    res.sendFile(path.resolve('views/pages/pexels-photo-450035.jpeg'))
})

app.get("/views/pages/unsplash-NuFUbftUu_s-unsplash.jpg", function (req, res) {
    res.sendFile(path.resolve('views/pages/unsplash-NuFUbftUu_s-unsplash.jpg'))
})

// Akhir Portofolio 2

// CV

app.get("/views/pages/Untitled-5.png", function (req, res) {
    res.sendFile(path.resolve('views/pages/Untitled-5.png'))
})

app.get("/views/pages/background.png", function (req, res) {
    res.sendFile(path.resolve('views/pages/background.png'))
})

app.get("/Asset/laptop.webp", function (req, res) {
    res.sendFile(path.resolve('Asset/laptop.webp'))
})

// Akhir CV

app.get("/views/pages/diego-ph-5LOhydOtTKU-unsplash.jpg", function (req, res) {
    res.sendFile(path.resolve('views/pages/diego-ph-5LOhydOtTKU-unsplash.jpg'))
})

const path = require('path')

app.use(userRouter)

app.listen(3000, function () {
    console.log('server is okay')
})