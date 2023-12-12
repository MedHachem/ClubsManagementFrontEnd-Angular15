import { ChangeDetectorRef, Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AnyObject } from 'chart.js/dist/types/basic';
import { EventService } from 'src/app/Services/event.service';



@Component({
  selector: 'app-eventslistfilter',
  templateUrl: './eventslistfilter.component.html',
  styleUrls: ['./eventslistfilter.component.css']
})
export class EventslistfilterComponent {
  
  events:any;

   displayedColumns: string[] = [ 'id','title','date','description','placeNumber','price','action'];
   dataSource: MatTableDataSource<any> = new MatTableDataSource<AnyObject>();

  
   constructor(private eventservice:EventService,private changeDetectorRef: ChangeDetectorRef,private router:Router){
 
   } 
   ngOnInit(): void {
     this.eventservice.getEvents().subscribe(data => {
       this.events = data;
       this.dataSource=new MatTableDataSource<Event>(this.events);
 
     }
     )
   
 }

 
    
 
 
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
 
     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
   }
   deleteUser(id: number) {
     this.eventservice.deleteEvent(id).subscribe(
       data => {
       
         this.eventservice.getEvents().subscribe((data: any) => {
           this.events = data;
           
         })
         
       }
       
 
     )
     window.location.reload();
   }
   
}

