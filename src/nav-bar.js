import { resolve } from 'aurelia'
import { INavigationModel, IRouteContext } from '@aurelia/router-lite'


export class NavBar {
  navModel = null

  // Uncomment these two methods to show the problem:

  // constructor() {
  //   let routeCtx = resolve(IRouteContext)
  //   this.navModel = routeCtx.navigationModel
  // }
  //
  // async binding() {
  //   await this.navModel.resolve()
  // }

}


