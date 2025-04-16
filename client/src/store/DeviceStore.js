import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Смартфон'}
        ]
        this._brands = [
            {id: 1, name: ["Samsung"]},
            {id: 2, name: ["Apple"]},
        ]
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 2, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 3, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 4, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
        ]
        makeAutoObservable(this)
    }

    setTypes(bool) {
        this._isAuth = bool
    }
    setDevices(user) {
        this._user = user
    }

    sebrands(brands) {
        this._brands = brands
    }

    get types() {
        return this._types    }

    get brands() {
        return this._brands
    }

    get devices(){
        return this._devices
    }
}