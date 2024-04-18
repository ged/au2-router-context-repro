import { inject, resolve, newInstanceOf, newInstanceForScope } from 'aurelia'
import { INavigationModel, IRouteContext } from '@aurelia/router-lite'


// @inject( IRouteContext )
export class NavBar {
  navModel = null

  // static inject = [ IRouteContext ]


  /* Using `@inject` or `static inject`; neither of them work */

  // constructor(routeCtx) {
  //   this.navModel = routeCtx.navigationModel
  // }


  /* Using `resolve`; none of these work either */

  // constructor() {
    // this.navModel = resolve(IRouteContext).navigationModel
    // this.navModel = resolve(newInstanceOf(IRouteContext)).navigationModel
    // this.navModel = resolve(newInstanceForScope(IRouteContext)).navigationModel
  // }


  async binding() {
    await this.navModel.resolve()
  }

}


