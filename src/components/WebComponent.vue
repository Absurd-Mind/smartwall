<template>
	<webview :src="module.url" style="height: 100%" />
	<!-- <div style="height: 100%">{{ this.module.url }}</div> -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
	components: {},
	props: {
		module,
	},
})
export default class WebComponent extends Vue {}
</script>

<style scoped>
.wrapper {
	display: flex;
}
</style>
