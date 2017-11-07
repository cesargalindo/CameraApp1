# Meteor Camera Package - hacked for ZoJab

Add it to your [Meteor](http://meteor.com) app with `meteor add ccmdg:camera`. The api is super simple - there is only one function to call.

### MeteorCamera.getPicture([options], callback)

Prompt the user to take a photo with their device and get the picture as a Data URI in JPEG format.

#### options

`options` is an optional argument that is an Object with the following possible keys:

- `width` An integer that specifies the minimum width of the returned photo.
- `height` An integer that specifies the minimum height of the returned photo.
- `quality` A number from 0 to 100 specifying the desired quality of JPEG encoding.

#### callback(error, data)

`callback` is a required argument that is a function that takes two arguments:

- `error` A [Meteor.Error](http://docs.meteor.com/#meteor_error) with a platform-specific error message.
- `data` A base64-encoded data URI for the image taken by the camera. This parameter can be used directly in the 'src' attribute of an image tag.


> Warning: In the iOS simulator, the device camera is not accessible so you will get an error that says "source type 1 not available."
> I'm working on a fallback for iOS that will use the photo library when the camera is not available, but for now just test in your web browser, a physical device, or the Android simulator.

# Manually install these Cordova plugins
> meteor add cordova:cordova-plugin-camera@2.4.1
> meteor add cordova:cordova-plugin-device@1.1.6
> meteor add cordova:cordova-plugin-inappbrowser@1.7.1
> meteor add cordova:cordova-plugin-statusbar@2.2.3
> meteor add cordova:cordova-plugin-splashscreen@4.0.3
