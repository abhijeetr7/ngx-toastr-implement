# ngx-toastr-implement
Created a template repository to use a ngx-toastr wisely with following correct steps.


Steps for ngx toaster...

Install ngx-toastr plugin First, open the terminal and run the following command inside your project to install the ngx-toastr plugin

npm install ngx-toastr --save --force

Next, you need to install animation package which is required to toastr plugin.

npm install @angular/animations --save --force

Applying toastr styling

Next open angular.json and add the following style which is required for toastr.

"styles": [
  "src/styles.scss",
  "node_modules/ngx-toastr/toastr.css"
],

Import toasrt module
Next open app.module.js file and import BrowserAnimationsModule and ToastrModule.

  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})


How to show toastr
First, you should apply ToastrService to the component where you want to show the toastr. Also need to initiate through the constructer method. Then you can use different methods like success, warning, error based on your requirement.

  import { ToastrService } from 'ngx-toastr';

export class LandingComponent implements OnInit {

 
  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  showToastr(){
    this.toastr.success('This is the success toastr')
  }

}


Add a title to toastr
The first parameter of the method success accept the message and you can pass the title for the second parameter.

  showToastr(){
    this.toastr.success('This is the success toastr',"Success")
  }


Toastr Modifications
By default, toastr will appear in the right top corner. This can be changed by setting positionClass when importing the module.

  ToastrModule.forRoot({
    positionClass: 'toast-top-center',
    <!-- (By default, toastr will appear in the right top corner.
    This can be changed by setting positionClass when importing the module.) -->
    preventDuplicates: true,
    <!-- (Disable multiple/ duplicate toastr
    If you click the button multiple times you can see a lot of toastrs appear on the screen.
    To prevent that you can disable the duplicates.) -->
    closeButton:true, <!-- (Show close button in the toastr) -->
    
    timeOut:2000,    <!-- (Change the toastr dismiss time out
      Default toastr will disappear after 5 seconds. This can be changed by setting timeOut property. This accepts a value as milliseconds and makes sure to convert seconds to milliseconds before adding.) -->

    maxOpened:2     <!-- (Restrict no of toastrs that can be appeared at a time
      If you want to show multiple toastrs and need to control the maximum numbers, maxOpened property will allow to do that.) -->
})


Setting up toastr level configurations
Previously we show the way of adding different config root levels which will affect all toastrs. But you can add those in toastr level if you required different configs for different places in the app.

  showToastr(){
    this.toastr.success('This is the success toastr',"Success")
    this.toastr.error('This is the error toastr',"Error",{
      timeOut:10000,
      closeButton:true
    })
  }


# Toast

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

