// This section sets up some basic app metadata, the entire section is optional.
App.info({
    id: 'com.mutilo.socially.ng4',
    name: 'MutiloNG4',
    description: 'Get Socially NG4 Mutilo power in one button click',
    author: 'Mutilo Development Group',
    email: 'contact@mutilo.com',
    website: 'http://mutilo.com',
    version: "0.0.1"
});

// Set PhoneGap/Cordova preferences.
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');

//Starting with Meteor 1.0.4 access rule for all domains and protocols (<access origin="*"/>) is no longer set by default due to certain kind of possible attacks.
// App.accessRule("*");

App.accessRule("http://10.0.2.2");
App.accessRule("*://10.0.2.2/*");

// App.accessRule("*://localhost/*");
// App.accessRule("*://localhost:3000/*");

// Load balancer IP address
App.accessRule("*://45.55.111.37/*");

// XMLHttpRequest cannot load http:///sockjs/info?cb=ieu7ixlas4. Origin http://meteor.local is not allowed by Access-Control-Allow-Origin. myappname:1
App.accessRule("*://meteor.local/*");

App.accessRule('*://fonts.googleapis.com/*');
App.accessRule('*://fonts.gstatic.com/*');
App.accessRule('*://maps.googleapis.com/*');
App.accessRule('*://maps.gstatic.com/*');
App.accessRule('*://csi.gstatic.com/*');

// App.accessRule('http://fonts.googleapis.com');
// App.accessRule('https://fonts.googleapis.com');
// App.accessRule('http://fonts.gstatic.com');
// App.accessRule('https://fonts.gstatic.com');
// App.accessRule('https://maps.googleapis.com');
// App.accessRule('https://maps.gstatic.com');
// App.accessRule('https://csi.gstatic.com');
// App.accessRule('http://10.0.2.2');