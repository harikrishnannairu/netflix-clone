import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProfileData } from 'src/app/shared/classes/profile-data';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  @Input() profileCardData: ProfileData;
  @Output() signOutEvent:EventEmitter<null>=new EventEmitter();

 constructor(){}

 signOut(){
  this.signOutEvent.emit();
 }
  

}
