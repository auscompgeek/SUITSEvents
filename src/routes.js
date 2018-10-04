import VueRouter from 'vue-router';
import state from './state';

let view = function (name) {
	return function(resolve) {
		require(['./views/' + name + '.vue'], resolve);
	};
};

const routes = [
	{ path: '/login', component: view('LoginView') },
	{ 
		path: '/', component: view('Base'),
		children: [
			{
				path: '',
				component: view('EventMenu')
			},
			{
				name: 'event',
				path: '/event/:id',
				component: view('EventView')
			}
		]
	}
];

const router = new VueRouter({routes});

router.beforeEach((to, from, next) => {
	let token = state.token;
	if (to.path == '/login') {
		next();
	}
	else {
		if (token)
			next();
		else
			next('/login'); // If you're not logged in, go log in
	}
});

export default router
