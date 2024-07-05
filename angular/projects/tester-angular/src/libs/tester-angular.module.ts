import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from 'tester/dist/loader';
import { DIRECTIVES } from './stencil-generated';
defineCustomElements(window);

@NgModule({
  imports: [],
  exports: [...DIRECTIVES],
  declarations: [...DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true,
    },
  ],
})
export class TesterModule {}
