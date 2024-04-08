import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  familyId!: number;
  familyInformation!: any;
  showfamilyData:boolean=false;
  familyInformationById:any;
  message!:String;
  found:boolean | undefined;
  

  constructor(public dataService: DataService,public dialog: MatDialog) { }

  ngOnInit(): void {
      this.showfamilyData=false;
      this.getData();
  }
  getData(): void {
    this.dataService.getData().subscribe(data => {
      this.familyInformation = data;
    });
  }


  familyIdSearch(): void {
    this.showfamilyData = true;
    this.handleFamilyInformation();
  }

  handleFamilyInformation(): void {
    for (let i = 0; i < this.familyInformation.length; i++) {
        for (let j = 0; j < this.familyInformation[i].length; j++) {
            if (this.familyId == this.familyInformation[i][j].familyId) {
              this.familyInformationById=this.familyInformation[i];
              this.message="valid";
              this.found=true;
              break;
            }
           if(!this.found){
            this.message="invalid";
           }
          
        }      
    }
 console.log(" family     ",  this.familyInformationById);
 console.log(this.message);  

}

openDialog(familyName:String):void{
  const dialogRef = this.dialog.open(PopupComponent, {
    data: { name: familyName } 
  });
}


}
