import { suspendors } from "suspendors"

class Modals {
    setup() {
        suspendors.log('Modals Online')
        const screen = suspendors.returnScreen()
        console.log(`${screen}`)
    }
    createNewModalInstance(){
        suspendors.log('creating new modal')
    }
}

export const modals = new Modals()

window.addEventListener('tie_modules', (e) => {modals.setup()}, false)