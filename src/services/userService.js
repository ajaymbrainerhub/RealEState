import users from '../assets/data/users.json'

export const userService = {
    getUsers,
    getById
}


function getUsers() {
    return users
}

function getById(id) {
    return users.find(u => u.id === +id)
}