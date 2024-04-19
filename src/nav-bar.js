import { inject, resolve, newInstanceOf, newInstanceForScope } from 'aurelia'
import { INavigationModel, IRouteContext } from '@aurelia/router-lite'


@inject( IRouteContext )
export class NavBar {
  navModel = null

  // static inject = [ IRouteContext ]


  /* Attempt 1 & 2: Using `@inject` or `static inject`; neither of them work */

  constructor(routeCtx) {
    this.navModel = routeCtx.navigationModel
  }


  /* Attempt 3, 4, adn 5: Using `resolve` after commenting out the `@inject`
     above; none of these work either */

  // constructor() {
    // this.navModel = resolve(IRouteContext).navigationModel
    // this.navModel = resolve(newInstanceOf(IRouteContext)).navigationModel
    // this.navModel = resolve(newInstanceForScope(IRouteContext)).navigationModel
  // }


  async binding() {
    await this.navModel.resolve()
  }

}


