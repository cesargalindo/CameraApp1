import { Meteor } from "meteor/meteor";

// import { BrowserPolicy } from 'meteor/browser-policy-common';

// // Listen to incoming HTTP requests, can only be used on the server
// WebApp.connectHandlers.use(function(req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     return next();
// });

// BrowserPolicy.content.allowOriginForAll("http://meteor.local");


Meteor.startup(function() {


    // if (Meteor.isServer) {
    //
    //     Meteor.onConnection(function(result){
    //         var hostname = result.httpHeaders.referer; //This returns http://foo.example.com
    //
    //         var serverDomain =  Meteor.absoluteUrl();
    //         console.error(hostname);
    //         console.error('absolute = ' + Meteor.absoluteUrl() );
    //
    //
    //         // If the remote server domain is known, allow access to it for xhr and DDP
    //         // connections.
    //         // if (serverDomain) {
    //             // Android talks to localhost over 10.0.2.2. This config file is used for
    //             // multiple platforms, so any time that we say the server is on localhost we
    //             // should also say it is on 10.0.2.2.
    //             if (serverDomain === 'http://localhost:3000/') {
    //                 accessRules['*://10.0.2.2/*'] = true;
    //             }
    //             else {
    //                 accessRules['*://' + serverDomain + '/*'] = true;
    //
    //             }
    //         // }
    //
    //
    //     });
    // }


    console.log('Configuring content-security-policy:');
    // BrowserPolicy.content.allowSameOriginForAll();
    // BrowserPolicy.content.allowOriginForAll('http://meteor.local');
    // BrowserPolicy.content.allowOriginForAll('https://localhost:3000');
    // BrowserPolicy.content.allowOriginForAll('https://*.localhost:3000');
    // // BrowserPolicy.content.allowOriginForAll('https://*.stripe.com');
    //
    // BrowserPolicy.content.allowOriginForAll('https://fonts.googleapis.com');
    // BrowserPolicy.content.allowOriginForAll('http://fonts.googleapis.com');
    // BrowserPolicy.content.allowOriginForAll('https://maps.googleapis.com');
    // BrowserPolicy.content.allowOriginForAll('http://maps.googleapis.com');
    // BrowserPolicy.content.allowOriginForAll('https://fonts.gstatic.com');
    // BrowserPolicy.content.allowOriginForAll('http://fonts.gstatic.com');
    //
    // BrowserPolicy.content.allowOriginForAll('https://maps.gstatic.com');
    // BrowserPolicy.content.allowOriginForAll('https://csi.gstatic.com');
    //
    // BrowserPolicy.content.allowEval();
    // BrowserPolicy.framing.disallow();

});