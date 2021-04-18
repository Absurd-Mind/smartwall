import Vue from 'vue';
import { createApp } from 'vue';
import App from './App.vue';
import ModuleResolver from './components/ModuleResolver.vue';
import ClockComponent from './components/ClockComponent.vue';
import WebComponent from './components/WebComponent.vue';
import ListComponent from './components/ListComponent.vue';

const app = createApp(App);
app.component('clockcomponent', ClockComponent);
app.component('webcomponent', WebComponent);
app.component('listcomponent', ListComponent);
app.component('module-resolver', ModuleResolver);
app.mount('#app');
