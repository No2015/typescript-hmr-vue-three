import Object3D from './object3D'
export default class Scene {
    children: Array<Object3D>
    constructor () {
        this.children = new Array()
    }
    add (item: Object3D) {
        this.children.push(item)
    }
    remove (item: Object3D) {
        const index = this.children.findIndex(el => el === item)
        this.children.splice(index, 1)
    }
}