<template>
	<div class="clockstyle">{{ time }}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
	components: {},
	props: {
		module,
	},
})
export default class ClockComponent extends Vue {
	private time = '00:00';
	mounted() {
		this.updateTime();
	}
	updateTime() {
		var date = new Date();
		var h = date.getHours();
		var m = date.getMinutes();
		var s = date.getSeconds();

		this.time =
			String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0') + ' ';

		setTimeout(this.updateTime, 1000);
	}
}
</script>

<style scoped>
.clockstyle {
	height: 100%;
	background-color: darkslategray;
	color: whitesmoke;
	font-size: 4em;
	padding-top: auto;
}
</style>
