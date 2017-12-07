import { Component } from '@angular/core';
import {FacebookService,InitParams} from 'ngx-facebook';
import { LoginOptions } from 'ngx-facebook/dist/esm/models/login-options';
import { UIParams } from 'ngx-facebook/dist/esm/models/ui-params';
import { LoginResponse } from 'ngx-facebook/dist/esm/models/login-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  title = 'app works!';

  constructor(Fb: FacebookService) {

    const params : InitParams = { 
      appId : '1631035563649155',
      cookie:true,
      xfbml:true,
      version:'v2.5'
    }
    Fb.init(params);

   //Fb.login().then(response:LoginResponse{}).

    // var loginOptions:LoginOptions={
    //   auth_type:
    // }

   Fb.login().then((response:LoginResponse) => console.log(response)).catch(e=> console.log(e))
   
  }
}
