# ACMS Switch

## Description

It's a component <acms-switch></acms-switch> that display a switch element in your view.
An event is sent when you switch on/off.

## Importation

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { AcmsSwitchModule } from 'acms-switch';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // here it is
    AcmsSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

and in your component:

```typescript
<acms-switch [id]="123" (switchEvent)="example($event)"></acms-switch>
```

## Input

id : You have an id (input property) which will be resent when an event is fired.

## Output

switchEvent: this event will sent an object with this format :

```javascript
{
    id: '123',
    state: true // or false if this element is switched off
}
```

## License

© [jerems02](mailto:jeremie.stezycki@sylpheo.com)
