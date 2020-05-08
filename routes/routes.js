import Errors from '../src/global/Errors/Errors.vue'
import Home from '../src/containers/Home/Home.vue'
import errorcodes from '../config/errorcode.js';

const routes = [
	{path:'/',component:Home},
  	{path:'/home',component:Home},
  	{path:'*',component:Errors, props:{ error: errorcodes[404]} },
];

export default routes;