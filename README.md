# DOOL notes:

### To get started with angular cli:
- install angular cli using: npm install -g angular-cli
- create new app using: ng new todo-app
- create blank git repo on github
- push your local todo-app to github following steps in this link: http://stackoverflow.com/questions/3311774/how-to-convert-existing-non-empty-directory-into-a-git-working-directory-and-pus


### ERROR resolutions:

#### Cannot set property 'stack' of undefined
Run command: npm install --save zone.js@0.7.4
Checkout: https://github.com/angular/angular-cli/issues/3975


### Add LESS to your project
Checkout here https://github.com/angular/angular-cli

Run command: ng set defaults.styleExt less

For global LESS look at this
http://stackoverflow.com/a/41839423/1902831



# TodoAngular2

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.25.5.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
