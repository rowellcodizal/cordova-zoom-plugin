var exec = require('cordova/exec');
var PLUGIN_NAME = "Zoom";

var ConfigParser, XmlHelpers;
try {
	// cordova-lib >= 5.3.4 doesn't contain ConfigParser and xml-helpers anymore
	ConfigParser = context.requireCordovaModule("cordova-common").ConfigParser;
	XmlHelpers = context.requireCordovaModule("cordova-common").xmlHelpers;
} catch (e) {
	ConfigParser = context.requireCordovaModule("cordova-lib/src/configparser/ConfigParser");
	XmlHelpers = context.requireCordovaModule("cordova-lib/src/util/xml-helpers");
}

/** @external */
var fs = require('fs'),
	path = require('path'),
	et = require('elementtree');

function callNativeFunction(name, args, success, error) {
    args = args || [];
    success = success || function(){};
    error = error || function(){};
    exec(success, error, PLUGIN_NAME, name, args);

}

var zoom = {
	
    initialize: function(appKey, appSecret,apiKey,apiSecret, success, error) {
        callNativeFunction('initialize', [appKey, appSecret,apiKey,apiSecret], success, error);
    },
    
    login: function(username, password, success, error) {
        callNativeFunction('login', [username, password], success, error);
    },

    logout: function(success, error) {
        callNativeFunction('logout', [], success, error);
    },

    isLoggedIn: function(success, error) {
        callNativeFunction('isLoggedIn', [], success, error);
    },

    joinMeeting: function(meetingNo, meetingPassword, displayName, options, success, error) {
         callNativeFunction('joinMeeting', [meetingNo, meetingPassword, displayName, options], success, error);
    },

    startMeetingWithZAK: function(meetingNo, displayName, userId, options, success, error) {
        callNativeFunction('startMeeting', [meetingNo, displayName, userId, options], success, error);
    },

    startMeeting: function(meetingNo, options, success, error) {
        callNativeFunction('startMeeting', [meetingNo, "", "", options], success, error);
    },

    startInstantMeeting: function(options, success, error) {
        callNativeFunction('startInstantMeeting', [options], success, error);
    },

    setLocale: function(languageTag, success, error) {
        callNativeFunction('setLocale', [languageTag], success, error);
    },

    getUsersId:function(success,error){
        callNativeFunction('getUsersId',[],success,error);
    }

};

module.exports = zoom;
