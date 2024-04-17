
import { route } from '@aurelia/router-lite'

import { Home } from './home'
import { About } from './about'
import { NotFound } from './not-found'

@route({
  routes: [
    {
      path: ['', 'home'],
      component: Home,
      title: 'Home',
    },
    {
      path: 'about',
      component: About,
      title: 'About',
    },
    {
      path: 'notfound',
      component: NotFound,
      title: 'Not found',
      nav: false,
    },
  ],
  fallback: 'notfound',
})
export class MyApp {}

