import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { NavController, AlertController } from '@ionic/angular';

import { getLocaleDateFormat, getLocaleTimeFormat } from '@angular/common';
import { map } from 'rxjs/operators';

import * as $ from 'jquery';
import{ init } from 'emailjs-com';
init("user_AYa0wtROHDJ7MvQKlF21R");
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
// import { timeLog } from 'node:console';
var now = new Date;

@Component({
  selector: 'app-findtrip',
  templateUrl: './findtrip.page.html',
  styleUrls: ['./findtrip.page.scss', './theme.css','./bootstrap.min.css','./js_composer.css'],

})

export class FindtripPage implements OnInit {
  ngOnInit() {
  }
  
   
   sendEmail(e: Event) {
    var tempParams = {
     
      name: $("#nome").val(),
      email: $("#Email").val(),
      tel: $("#tell").val().toString(),
      subject: "reserva 1",
      message: $("#mess").val(),
      num: $("#num").val(),
      type:"Surf Lessons",
      time: new Date(Date.UTC(now.getUTCFullYear(),now.getUTCMonth()))
    };
    // $("#send-message").css('display','block');
    emailjs.send('service_u8xvb3n', 'template_tsgrpec', tempParams)
    alert("Email enviado com sucesso!");
     window.location.reload()
  }
  }
 
  
  // async  sendmail(){
   
  //   const client = new SMTPClient({
  //     user: 'user',
  //     password: 'password',
  //     host: 'smtp.your-email.com',
  //     ssl: true,
  //   });
    
  //   // send the message and get a callback with an error or details of the message that was sent
  //   client.send(
  //     {
  //       text: 'i hope this works',
  //       from: 'you <username@your-email.com>',
  //       to: 'someone <someone@your-email.com>, another <another@your-email.com>',
  //       cc: 'else <else@your-email.com>',
  //       subject: 'testing emailjs',
  //     },
  //     (err, message) => {
  //       console.log(err || message);
  //     }
  //   );
  // }

