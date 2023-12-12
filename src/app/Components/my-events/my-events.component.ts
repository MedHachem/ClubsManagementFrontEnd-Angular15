import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AnyObject } from 'chart.js/dist/types/basic';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent {
  /*
  events:Array<any>=new Array();
  club_responsable!:String;
  displayedColumns: string[] = [ 'Id','titre', 'status','date','description','nbrplaces','localisation','prix','club_responsable'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<AnyObject>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

 
  constructor(private eventService:EventService,private changeDetectorRef: ChangeDetectorRef){
  
  } 

     ngOnInit()
     {
   
      /*this.eventService.getEvents(this.club_responsable).subscribe(data => {
        this.events = data;
      })
      this.dataSource=new MatTableDataSource<Event>(this.events);
     }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }*/
}
