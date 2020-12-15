import { App } from 'vue'
import ErButton from '@erui/button/index'
import ErInput from '@erui/input/index'
import { version } from './package.json'

// TODO 自动收集依赖包 + package.json声明依赖组件包
const components = [ErButton, ErInput]

const install = (app: App): void => {
	components.forEach(comp => {
		app.component(comp.name, comp)
	})
}

export { ErButton, ErInput }

export default {
	version,
	install,
}
