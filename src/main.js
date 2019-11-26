import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Buefy from 'buefy';
import BuefyStyleGuide from 'buefy-style-guide';
import './assets/scss/app.scss';

Vue.use(Buefy, {
	css                 : false,
	materialDesignIcons : false,
	defaultIconPack     : 'fa',
	defaultToastPosition: 'is-bottom-right',
});
Vue.use(BuefyStyleGuide);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
