# AutoreApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

It uses bootstrap installed by the following:
```
npm install bootstrap jquery popper
```
and then set up angular.json like this (order matters!!!!):
```
 			"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "./node_modules/jquery/dist/jquery.js",
              "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
            ]
```

It also uses `ngx-pagination` for paginating results, installed by executing the following command:
```
npm install ngx-pagination --save
```

Unfortunatelly, there is no sorting/ordering functionality in tables because it's not included in ngx-pagination.
The autore-search-list component is the one used for paginating results. autore-list component is left there just as a list component template with no pagination.

The project uses a real backend API made in Grails 4. You can find it at https://github.com/amultari/helloworld_grails4
Once you run up it listens on (unless you change ip address and port): localhost:8080/gestioneautore/api/autore 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Author

* **Alberto Multari** - *Software Engineer and coding lover* 
