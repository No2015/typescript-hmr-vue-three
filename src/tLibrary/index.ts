import B from './modules/b'
import C from './modules/c'
import Scene from './core/scene'

class Work {
    modules: Array<any> = new Array();
    scene: Scene = new Scene();
    status: number = 0;
    canvas: HTMLCanvasElement;
    info: string = `status: 0 未实例化。1 正在实例化。2 实例化完成运行中。3 实例化完成暂停中`;
    constructor () {
        this.status = 0
    }
    initWork (config: Array<any>, canvas: HTMLCanvasElement) {
        console.log(config, canvas)
        this.canvas = canvas;
        this.status = 1
        this.init()
        this.testDraw()
    }
    testDraw () {
        const ctx = this.canvas.getContext('2d')
        let text = "Hello World" + Math.random() + ''
        ctx.font = "40px Arial";
        var gradient = ctx.createLinearGradient(0, 0, this.canvas.width, 0);
        gradient.addColorStop(0, "magenta");
        gradient.addColorStop(0.5, "blue");
        gradient.addColorStop(1.0, "#fff");
        // 用渐变填色
        ctx.strokeStyle = gradient;
        ctx.strokeText(text, 10, 50)
    }
    init () {
        this.initModule('b', B)
        this.initModule('c', C)
        this.status = 2
    }
    initModule (name: string, Module: any) {
        let module = new Module(this.scene, name)
        this.modules.push(module)
    }
    getModule (name: string) {
        return this.modules.find(el => el.name === name)
    }
    getModuleIndex (name: string) {
        return this.modules.findIndex(el => el.name === name)
    }
    delModule (name: string) {
        let index = this.getModuleIndex(name)
        let module = this.getModule(name)
        module.destroyed()
        this.modules.splice(index, 1)
    }
}

let work = new Work();

function log () {
    console.log(work)
}
log()

export default work

if (module.hot) {
    module.hot.accept('./modules/b', () => {
        work.delModule('b')
        let _B = require('./modules/b').default
        work.initModule('b', _B)
        log()
    })
    module.hot.accept('./modules/c', () => {
        work.delModule('c')
        let _B = require('./modules/c').default
        work.initModule('c', _B)
        log()
    })
}