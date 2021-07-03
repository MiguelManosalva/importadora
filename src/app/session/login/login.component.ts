import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/request/ILogin';
import { SessionService } from 'src/app/services/service.index';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../session.scss']
})
export class LoginComponent implements OnInit {

  public loading: boolean = false;
  public validateForm!: FormGroup;

  constructor(
    public router: Router,
    private _session: SessionService,
    private notification: NzNotificationService,
    private fb: FormBuilder) {

    // Validate session active
    // const userStorage = sessionStorage.getItem('s3s10n3mp4t1');
    // if (userStorage) {
    //   _session.user = JSON.parse(userStorage);
    //   this.router.navigate([`/app/dashboard`]);
    // }

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  public submitForm(): void {

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      const request: ILogin = {
        email: this.validateForm.get('userName')?.value,
        password: this.validateForm.get('password')?.value
      }

      this.loading = true;
      this._session.logIn(request).subscribe((response: any) => {
        
        switch (response.status.code) {
          case 400:
              this.createNotification('error', 'Usuario o contraseña incorrecta', '');
            break;
          case 200:
              this.createNotification('success', 'Hola! usuario', '');
            break;
        }
        
        this.loading = false;
        this.router.navigate([`/app/dashboard`]);
      }, error => {
        this.createNotification('error', 'Oops! No se pudo realizar la solicitud', 'Favor intentalo más tarde');
        this.loading = false;
        this.router.navigate([`/app/dashboard`]);
      })
    }


  }

  private createNotification(type: string, title: string, desc: string): void {
    this.notification.create(
      type,
      title,
      desc
    );
  }

}
