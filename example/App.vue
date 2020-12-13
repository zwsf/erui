<template>
  <div>
    <p class="p">
      {{ msg }}
    </p>
    <ElInput
      type="text"
      placeholder="请输入22"
    />
    <ElButton>测试11234</ElButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import ElInput from '../packages/input/index'
// import ElButton from '../packages/button/index'

export default defineComponent({
	name: 'App',
	components: {
		// ElInput,
		// ElButton,
	},
	data() {
		return {
			msg: 'hello world',
		}
	},
})
</script>

<style scoped lang="stylus">
.p
	color red
</style>
