import Scene from '../core/scene'
import Object3D from '../core/object3D'
import A from './a'

export default class B {
    name: string;
    item: Object3D;
    scene: Scene;
    a: any;
    constructor (scene: Scene, name: string) {
        this.name = name
        this.a = new A(scene, 'a')
        console.log(name + '12345')
        this.created(scene)
    }
    created (scene: Scene) {
        this.scene = scene
        this.item = new Object3D(this.name)
        this.scene.add(this.item)
    }
    destroyed () {
        this.a.destroyed()
        this.scene.remove(this.item)
    }
}