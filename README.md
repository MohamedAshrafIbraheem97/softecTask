# SoftecTask

## About
you can look at this project from two point of views
1. admin view 

a. list products

b. edit products

c. list orders

d. create new orders

2. user view 

a. list products

c. list his own orders

d. create new orders

**so I followed the first approach as it was more realistic when compared to the recieved requirements**

## Architecturing steps

1. LIsting req. in a sheet
2. draw highlevel modules and components
3. Lo-Fi wireframes
4. started development and refining structure while developing

## problems I faced and how i solved them

1. Didn't know if i should use bootstrap or not for the UI as req. stated to use Scss for styling -> so i started with Scss then converted to bootstrap as i have 2 days only for the task
2. Architecturing problem as I'm not that perfect so i started with the basic and the more time passes the more i understand and refine
3. I recieved DB files on json format and req. said it will be bonus if I used interceptors -> 
a. I started with importing json files only and use them as observables
b. then converted calling the DB with Http requests
c. didn't know how to use interceptor as i only have getAll requests -> but I tried not to make a lot of call to the DB for performance.

4. after i finished I found out that i make a lot of file changes in the single pull request -> so i should take care of that.
5. I made an effort to add comments and adhere to clean code principles, however some situations were beyond my control.
6. I didn't have the time to draw wireframes on figma so i tried to do my best with pen and paper
7. I din't add any tests as it was my first time so i tried learning them first but didn't have the time to create them. 
8. I found out that i over engineer on some situations which lead to a time waste -> so i started to warn myself.


## follow the below steps to run the project


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

Run `npm install` to install the required dependencies

## Development server

Run `ng serve --o` for a dev server to start and the browser will be opened when the App finished loading. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
