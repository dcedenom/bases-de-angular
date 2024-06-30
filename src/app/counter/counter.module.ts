import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


@NgModule({ //este modulo tecniacmente pretende agrupar toda la funcionalidad del component por lo que debemos declararlo
  declarations: [
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule {}
