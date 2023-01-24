import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private router:Router) { }
  user:User | null = null;

  ngOnInit(){
    this.authService.myProfile$
    .subscribe((usr) => {
      this.user = usr;
    })
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
