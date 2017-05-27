# NodeExplorer
Backend file explore with node (useful when you can't manage files in your server directly) / Demo made with Angular 2

# Installing
npm install node-file-explorer

# Using on backend
``` javascript
let fileExplorer = require('node-file-explorer');
fileExplorer.set(app, {PREFIX}, {ROOT_PATH});
```
Where:
* PREFIX = use as a prefix to your url, e.g.: http://localhost:8080/{PREFIX}/file.js
* ROOT_PATH = use to set the root path, usually is set to './'

# Using the demo on frontend
If something as simple as this demo is enough for your needs:

On your app.module.ts:
``` typescript
import { NFEModule } from 'node-file-explorer/demo/src/app/app.module';

@NgModule({
  declarations: [
    ...
  ],
imports: [
    NFEModule.forRoot('{INSERT YOUR URL HERE WITH THE PREFIX}/'),
    ...
  ],
  providers: [
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

# Next steps:
* Provide a middleware method for all routes
* Fix images of demo
