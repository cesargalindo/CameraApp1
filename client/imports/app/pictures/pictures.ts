import { Meteor } from 'meteor/meteor';
import { Component, OnInit, NgZone } from '@angular/core';
import { MeteorObservable } from 'meteor-rxjs';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Random } from 'meteor/random';

import moment = require("moment/moment");

import template from "./pictures.html";
import style from './pictures.scss';

@Component({
    selector: "pictures",
    template,
    styles: [ style ],
})
export class PicturesComponent implements OnInit {
    picFileName: string;
    tookPicture: string;
    S3PicturePath: string;
    AndroidSaveLocally: boolean;
    
    constructor(
        private _ngZone: NgZone) { }
        

    ngOnInit() { 
        this.tookPicture = 'none';
        this.AndroidSaveLocally = false;
    }

    /**
     * Take picture using custom package meteor add cgmdg:camera
     */
    takeDaPicture() {

        if (Meteor.userId) {
            this.picFileName = Random.id(17) + '_upc.png';                             
            
            // Vary picture quality
            let options = {};
            let iqual = 50;
    
            
            options = {
                quality: iqual,
                AndroidSaveLocally: false
            }
    
            if (Meteor.isCordova) {
                CCMeteorCamera.getPicture(options, (error, res) => {
                    if (error) {
                        this._ngZone.run(() => { // run inside Angular2 world                                    
                            console.log('!!!!!!!!!!!!! Failed to fs log ${error}');
                            console.log(error);
                            this.tookPicture = error;
                        });                    
                    }
                    else {
                        console.log('==== GOT PHOTO ====');
                        let uploader = new Slingshot.Upload("myFileUploads");
        
                        // place global this into a local variable that is accessible within scope of this function
                        let captureThis1 = this;
        
                        console.log("======= DEVICE PLATFORM: " + device.platform);
                        
                        // if Android and AndroidSaveLocally = true, store images locally for file transfer later
                        if  ( (device.platform == "Android") && this.AndroidSaveLocally) {
                            // Generate decode pic filename for Android 
                            let arr = res.split('/');
                            let tmp = _.last(arr);
                            let ts = parseInt( tmp.replace(".png", ""));
                            
                            // Android file name: IMG_20171013_153542.png  
                            this.picFileName =  'IMG_' + moment(ts).format("YYYYMMDD") + '_' + moment(ts).format("HHmmss") + '.png';
        
                            console.log('SUCESS: PIC SAVED = ' +  this.picFileName);
                            this.tookPicture = 'Photo was saved locally: ' +  this.picFileName;  
                        }
                        // convert image to binary and transfer to AWS S3
                        else {
                            this.tookPicture = 'Photo was transferred to AWS S3: ' +  this.picFileName;  
                            var imageFile = CCMeteorCamera.dataURItoFile(res, this.picFileName);                
        
                            uploader.send(imageFile, Meteor.bindEnvironment(function(error, downloadUrl) {
    
                                if (error) {
                                    // Log service detailed response.
                                    captureThis1.tookPicture = error;
                                    console.error( JSON.stringify( error) );
                                    console.error('Error uploading', uploader.xhr.response);
                                }
                                else {
                                    console.log(" upload url == " + downloadUrl);
                                    captureThis1.showS3Picture();
                                }
                            }));
                        }
                    }
                });
            }
            else {
                alert('Run Cordova features on your phone.');
            }            
        }
        else {
            alert('You must log in.');
        }


    }

    /**
     * Image was sent to AWS S3 - check if there
     */
    showS3Picture() {
        this._ngZone.run(() => { // run inside Angular2 world                                    
            this.S3PicturePath = Meteor.settings.public.AWS_IMAGE_PATH + this.picFileName;
        });            
    }

}
