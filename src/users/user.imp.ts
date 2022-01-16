import { UserInf } from "./user.interface";

export class clear implements UserInf{
    run() {
        console.log('12km')
    }
    speck() {
        throw new Error("Method not implemented.");
    }
    

}