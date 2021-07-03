import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/request/ILogin';
import { SessionService } from 'src/app/services/service.index';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IRegister } from 'src/app/models/request/IRegister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../session.scss']
})
export class RegisterComponent implements OnInit {

  public loading: boolean = false;
  public validateForm!: FormGroup;

  constructor(
    public router: Router,
    private _session: SessionService,
    private notification: NzNotificationService,
    private fb: FormBuilder) {

    // Validate session active
    const userStorage = sessionStorage.getItem('s3s10n3mp4t1');
    if (userStorage) {
      _session.user = JSON.parse(userStorage);
      this.router.navigate([`/app/dashboard`]);
    }

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      fullName: [null, [Validators.required]],
      company: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.pattern('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,18})')]],
      repeatPassword: [null, [Validators.required, this.confirmationValidator]],
    });
  }

  public submitForm(): void {

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      const request: IRegister = {
        email: this.validateForm.get('email')?.value,
        userName: this.validateForm.get('email')?.value,
        nombreUsuario: this.validateForm.get('fullName')?.value,
        cliente: this.validateForm.get('company')?.value,
        password: this.validateForm.get('password')?.value,
        password_confirmation: this.validateForm.get('repeatPassword')?.value
      }

      this.loading = true;
      this._session.register(request).subscribe((response: any) => {

        console.log("response: ", response);
        
        
        switch (response.status.code) {
          case 400:
              this.createNotification('error', 'Usuario o contraseña incorrecta', '');
            break;
          case 200:
              this.createNotification('success', 'Hola! usuario', '');
            break;
        }
        
        this.loading = false;
      }, error => {
        this.createNotification('error', 'Oops! No se pudo realizar la solicitud', '');
        this.loading = false;        
      })
    }


  }

  private confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  private createNotification(type: string, title: string, desc: string): void {
    this.notification.create(
      type,
      title,
      desc
    );
  }

}
