<template>
	<div style="height: 100%">
		<module-resolver :module="mainModule" />
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ModuleResolver from './components/ModuleResolver.vue';
import { Module } from '@/modules/module';
import { ClockModule } from './modules/clockModule';

@Options({
	components: {
		ModuleResolver,
	},
})
export default class App extends Vue {
	private mainModule: Module = new ClockModule();
}
</script>

<style scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	padding: 0px;
	margin: 0px;
}
</style>
