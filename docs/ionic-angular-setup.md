# Ionic-Angular setup

Return to [Setup](./setup.md)

This is a two-step process. First we tell the Angular side of things how to use the component. Then we tell the Ionic side of things to include the component when it builds the bundle.

## Step 1: Import into app.module.ts

Add the following to ```app.module.ts```.

### Step 1a: Tell Angular to expect a custom HTML element
```
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // add this import

@NgModule({
  declarations: [],
  imports: [],
  bootstrap: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]                     // add this line
})
export class AppModule {}
```

### Step 1b: Import the custom component
```
import 'time-ago-web-component';                        // add this import
```

### Steps 1a and 1b together

When you've performed both steps, your ```app.module.ts``` should look like this.
```
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // add this import
import 'time-ago-web-component';                        // add this import

@NgModule({
  declarations: [],
  imports: [],
  bootstrap: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]                     // add this line
})
export class AppModule {}
```

**Note:** If you are lazy-loading pages, put these imports into the module of each page where you want to use the Star Rating component, instead of putting them in ```app.module.ts```.

## Step 2: Tell ionic-app-scripts to include the component in the build

Modify your ```copy.config.js``` so it contains an additional build instruction. The path to this file will look something like:

```{{ROOT}}\node_modules\@ionic\app-scripts\config\copy.config.js```

Add the instruction shown below.
```
module.exports = {
  copyAssets: {},
  copyIndexContent: {},
  copyFonts: {},
  copyPolyfills: {},
  copySwToolbox: {},
  
  // add this next build instruction
  
  copyTimeAgoWebComponent: {
    src: ['{{ROOT}}/node_modules/time-ago-web-component/dist/time-ago**/*'],
    dest: '{{BUILD}}'
  }
}
```

Return to [Setup](./setup.md)
