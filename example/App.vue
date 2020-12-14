<template>
	<div>
		<p class="p">
			{{ msg }}
		</p>
		<ErInput type="text" placeholder="请输入22" />
		<ErButton>测试11234</ErButton>
		<er-button>测试11234111</er-button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import ErInput from '../packages/input/index'
// import ErButton from '../packages/button/index'
import '../lib/theme-chalk/base.css'
import '../lib/theme-chalk/er-input.css'
import ErInput from '../lib/er-input/index'
import ErButton from '../lib/er-button/index'

export default defineComponent({
	name: 'App',
	components: {
		ErInput,
		ErButton,
	},
	data() {
		return {
			msg: 'hello vue3',
		}
	},
})
</script>

<style scoped lang="stylus">
.p
	color red
</style>
