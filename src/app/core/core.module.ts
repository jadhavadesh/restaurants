import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers:[AuthService]
})
export class CoreModule { }
