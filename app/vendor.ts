// Angular 2
import '@angular/platform-browser';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

if (!AOT) {
// Dep is only required when not using aot
  require('@angular/platform-browser-dynamic');
}

// RxJS stuff
// import 'rxjs';
import 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'ng-vcl';

// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...
import './app.css';
