import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  private authService = inject(MsalService);
  private router = inject(Router);

  ngOnInit(): void {
    if (this.authService.instance.getAllAccounts().length > 0) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  loginConMicrosoft(): void {
    this.authService.loginRedirect();
  }
}
