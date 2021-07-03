import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

}

interface IAjustes {
  temaUrl: string;
  tema: string;
}
