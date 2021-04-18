<template>
	<div :class="'wrapper ' + this.typeClass">
		<div
			v-for="(element, index) in this.module.elements"
			:key="element.name"
			:style="'position: relative; flex: ' + this.module.flex[index] + ' 1'"
		>
			<module-resolver :module="element.module" />
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ModuleResolver from './ModuleResolver.vue';
import WebComponent from './WebComponent.vue';
import ClockComponent from './ClockComponent.vue';
import { ListModule } from '@/modules/listModule';
import { ListType } from '@/modules/listType';

@Options({
	components: {
		ModuleResolver,
		WebComponent,
		ClockComponent,
	},
	props: {
		module,
	},
	computed: {
		typeClass(): string {
			if ((this.module as ListModule).listType === ListType.ROW) {
				return 'type-row';
			}

			return 'type-column';
		},
	},
})
export default class ListComponent extends Vue {}
</script>

<style>
.wrapper {
	display: flex;
	height: 100%;
}

.type-row {
	flex-direction: row;
}

.type-column {
	flex-direction: column;
}
</style>
