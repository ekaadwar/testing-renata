const { v4: uuidv4 } = require('uuid')

let users = [
    {id: 1, name: 'abc', email: 'abc@yahoo.com'},
    {id: 2, name: 'Doremi', email: 'doremi@test.com'}
]

module.exports = {
    index: function(request, response) {
        response.render ('pages/user/index', {users: users})
    },

    show: function(request, response) {
        const id = request.params.id
        const data = users.filter(user => {
            return user.id == id
        })

        response.render('pages/user/show', {user: data})
    },

    create: function(request, response) {
        response.render('pages/user/create')
    },

    store: function(request, response) {
       users.push({
        id: uuidv4,
        name: request.body.name,
        email: request.body.email
       })
       
       response.redirect('/users')
    },
    
    update: function(request, response) {
        const id = request.params.id
        users.filter(user => {
            if(user.id == id) {
                user.id = id
                user.name = request.body.name
                user.email = request.body.email
    
                return user
            }
        })
        response.json({
            status: true,
            data: users,
            message: 'Data user berhasil di edit',
            method: request.method,
            url: request.url
        })
    },

    delete: function(request, response) {
        let id = request.params.userId
        users = users.filter(user => user.id != id)
        response.send({
            status: true,
            data: users,
            message: 'Data user berhasil di hapus',
            method: request.method,
            url: request.url
        })
    }
}