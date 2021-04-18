<template>
	<component :is="this.component" :module="this.module" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ListComponent from './ListComponent.vue';
import WebComponent from './WebComponent.vue';
import ClockComponent from './ClockComponent.vue';
import { ListModule } from '@/modules/listModule';
import { WebModule } from '@/modules/webModule';
import { ClockModule } from '@/modules/clockModule';

@Options({
	components: {
		ListComponent,
		WebComponent,
		ClockComponent,
	},
	computed: {
		component(): string {
			if ((this.module as WebModule).type === 'WebModule') {
				return 'WebComponent';
			} else if ((this.module as ListModule).type === 'ListModule') {
				return 'ListComponent';
			} else if ((this.module as ClockModule).type === 'ClockModule') {
				return 'ClockComponent';
			}
			return 'none';
		},
	},
	props: {
		module,
	},
})
export default class ModuleResolver extends Vue {}
</script>

<style scoped></style>
