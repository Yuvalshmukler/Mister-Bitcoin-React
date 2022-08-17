import { storageService } from "./storageService"
export const userService = {
    getUser,
    signup,
    model
}
const USER_KEY = "userDb"
function getUser() {
    return storageService.load(USER_KEY)

}
function signup(userName) {
    console.log('userName', userName);
    const user = {
        name: userName,
        coins: 100,
        moves: []
    }
    storageService.store(USER_KEY, user)
}
function model(contact, amount) {
    const updatedContact = {
        toId: contact._id,
        to: contact.name,
        at: new Date(Date.now()),
        amount,
    }
    if (amount === 0) return
    _updateUserCoins(amount,updatedContact)
}


function _updateUserCoins(amount,move) {
    const user = getUser()
    user.coins -= amount
    user.moves.push(move)
    storageService.store(USER_KEY, user)
    console.log(user);
}