import Vue from 'vue';
import VueRouter from 'vue-router';
import StyleGuide from '../views/StyleGuide.vue';

Vue.use(VueRouter);

const routes = [
	{
		path     : '/',
		name     : 'style-guide',
		component: StyleGuide,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
