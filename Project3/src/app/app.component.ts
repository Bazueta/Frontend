import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project3';

  get loggedIn():boolean{
    return this.authSvc.loggedIn;
  }
  
  constructor(private authSvc:AuthService) {
    authSvc.authorize();
  }

  signout(){
    this.authSvc.logout();
    return false;
  }
}
