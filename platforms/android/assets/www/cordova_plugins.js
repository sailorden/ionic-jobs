cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/com.onesignal.plugins.OneSignal/www/OneSignal.js",
        "id": "com.onesignal.plugins.OneSignal.OneSignal",
        "clobbers": [
            "OneSignal"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.socialsharing/www/SocialSharing.js",
        "id": "nl.x-services.plugins.socialsharing.SocialSharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ionic.keyboard": "1.0.4",
    "org.apache.cordova.device": "0.3.0",
    "org.apache.cordova.inappbrowser": "0.6.0",
    "com.onesignal.plugins.OneSignal": "1.6.2",
    "nl.x-services.plugins.socialsharing": "4.3.19",
    "android.support.v4": "21.0.1",
    "com.google.playservices": "21.0.0"
}
// BOTTOM OF METADATA
});