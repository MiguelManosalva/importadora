
import { NgModule } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  exports: [
    NzGridModule,
    NzInputModule,
    NzSwitchModule,
    NzIconModule,
    NzFormModule,
    NzNotificationModule,
    NzProgressModule,
    NzMenuModule,
    NzResultModule,
    NzButtonModule
  ]
})
export class NgZorroAntdModule {

}