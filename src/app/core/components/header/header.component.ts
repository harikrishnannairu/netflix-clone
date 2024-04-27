import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ProfileData } from 'src/app/shared/classes/profile-data';
// import { faSolid } from '@fortawesome/';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges{
  @Input({required:true}) userImg:string='';
  @Input() profileCardData:ProfileData;
  @Output() profileClicked:EventEmitter<null>=new EventEmitter();
 navList:string[]=["Home","TV show","News&Popular","My list","Browse My language"];
 isMenuDisplay:boolean=false;

 ngOnChanges(changes: SimpleChanges): void {
  if(changes && changes['profileCardData']){
    this.profileCardData=changes['profileCardData'].currentValue;
    this.profileCardData.name=this.profileCardData.name.split(' ')[0];
  }
}

 toggleMenu() {
  // var x = document.getElementById("myLinks");
  // if (x.style.display === "block") {
  //   x.style.display = "none";
  // } else {
  //   x.style.display = "block";
  // }
  this.isMenuDisplay=!this.isMenuDisplay;
}
OnProfileClick(){
this.profileClicked.emit();
}

}
