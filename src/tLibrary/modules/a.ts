import Scene from '../core/scene'
import Object3D from '../core/object3D'

export default class A {
    name: string;
    item: Object3D;
    scene: Scene;
    constructor (scene: Scene, name: string) {
        this.name = name
        console.log(name + '-aaa')
        this.created(scene)
    }
    created (scene: Scene) {
        this.scene = scene
        this.item = new Object3D(this.name)
        this.scene.add(this.item)
    }
    destroyed () {
        this.scene.remove(this.item)
    }
}