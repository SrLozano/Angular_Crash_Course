import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
/** 
function googleLogin(){
  var provider = new.Firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup()
}*/

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
