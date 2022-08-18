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
    if (amount == 0 || amount < 0 || amount === "") return alert('Please try again')
    const updatedContact = {
        toId: contact._id,
        to: contact.name,
        at: new Date().toLocaleString(),
        amount,
    }
    _updateUserCoins(amount,updatedContact)
}


function _updateUserCoins(amount,move) {
    const user = getUser()
    if((user.coins - amount) <= 0) return alert('Cannot transfer money,please cheack your balance')
    user.coins -= amount
    user.moves.push(move)
    storageService.store(USER_KEY, user)
}
