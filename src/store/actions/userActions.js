import { userService } from "../../services/userService";


export const loadUsers = () => dispatch => {
    try {
        const users = userService.getUsers()
        dispatch({ type: 'LOAD_USERS', users })
    } catch (err) {
        console.log(err);
    }
}

export const loadUser = (id) => dispatch => {
    try {
        const user = userService.getById(id)
        dispatch({ type: 'LOAD_USER', user })
    } catch (err) {
        console.log(err);
    }
}








