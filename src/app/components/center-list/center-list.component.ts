import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CentersService } from './../../services/centers.service';

@Component({
  selector: 'app-center-list',
  templateUrl: './center-list.component.html',
  styleUrls: ['./center-list.component.css']
})
export class CenterListComponent implements OnInit {

 centers: any;
 pageIndex:number = 0;
  pageSize:number = 10;
  lowValue:number = 0;
  highValue:number = 10;
 

  constructor( private centerService: CentersService ) { }

  ngOnInit() {
    this.getCentersList();
  }
 
  getCentersList() {
    this.centerService.getCentersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(centers => {
      this.centers = centers;
    });
  }

  getPaginatorData(event){
      console.log(event);
      if(event.pageIndex === this.pageIndex + 1){
        this.lowValue = this.lowValue + this.pageSize;
        this.highValue =  this.highValue + this.pageSize;
        }
    else if(event.pageIndex === this.pageIndex - 1){
        this.lowValue = this.lowValue - this.pageSize;
        this.highValue =  this.highValue - this.pageSize;
      }   
        this.pageIndex = event.pageIndex;
  }

}
