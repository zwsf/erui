<template>
	<input class="er-input" :type="type" :placeholder="placeholder" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'ErInput',
	props: {
		type: {
			type: String,
			default: 'text',
		},
		placeholder: {
			type: String,
			default: '请输入',
		},
	},
	setup() {
		// 初始化
	},
})
</script>
