## Socially Camera App
Meteor 1.6                          - 
Angular 4.4.6                       - 
Angular Material 2.0.0-beta.12      - 

Cordova:
    cordova-plugin-camera@2.4.1         - 
    cordova-plugin-device@1.1.6         - 
    cordova-plugin-inappbrowser@1.7.1   - 
    cordova-plugin-splashscreen@4.0.3   - 
    cordova-plugin-statusbar@2.2.3      - 

App was derived from https://angular-meteor.com/tutorials/socially/angular2/3rd-party-libraries

To execute on Mac OS:

1) Unzip node_modules.zip   (avoids npm dependencies just in case?)

2) Execute command:
 > meteor reset

3a) To execute from browser, execute:
 >  meteor --settings custom-settings.json  

3b) Launch app from: http://localhost:3000/

4) To execute on your Android phone:
   a) connect your phone with USB cable to laptop
   b) make sure you're phone is connected to the same wifi nextwork as your laptop
   c) make sure your phone is in developer mode

   d) meteor --settings custom-settings.json run android-device 


5) To execute on your iPhone phone:
   a) connect your phone with USB cable to laptop
   b) make sure you're phone is connected to the same wifi nextwork as your laptop

   c)  meteor --settings custom-settings.json run ios-device 


Check here for more info:   https://guide.meteor.com/mobile.html
 
For information about AWS transfer:  https://atmospherejs.com/edgee/slingshot
    Server config file resides in: /server/imports/slingshot/slingshot.init.ts

Cordova Camera plugin is added using a custom Meteor package ccmdg-camera.
Core code resides here: /packages/ccmdg-camera/photo-cordova.js



   