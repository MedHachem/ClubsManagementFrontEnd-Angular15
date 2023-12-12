import { ChangeDetectorRef, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AnyObject } from 'chart.js/dist/types/basic';
import { Membre, MembreService } from 'src/app/Services/membre.service';

@Component({
  selector: 'app-list-membres',
  templateUrl: './list-membres.component.html',
  styleUrls: ['./list-membres.component.css']
})
export class ListMembresComponent {
  events:any;

  displayedColumns: string[] = [ 'id','name','Clubs','tel','level','action'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<AnyObject>();

 
  constructor(private eventservice:MembreService,private changeDetectorRef: ChangeDetectorRef,private router:Router){

  } 
  ngOnInit(): void {
    this.eventservice.getUsers().subscribe(data => {
      this.events = data;
      this.dataSource=new MatTableDataSource<Membre>(this.events);

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
    this.eventservice.deleteUser(id).subscribe(
      data => {
      
        this.eventservice.getUsers().subscribe((data: any) => {
          this.events = data;
          
        })
        this.router.navigateByUrl("/events/list");
      }
      

    )
    
  }
}
