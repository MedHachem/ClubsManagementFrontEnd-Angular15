import { ChangeDetectorRef, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AnyObject } from 'chart.js/dist/types/basic';
import { Club, ClubService } from 'src/app/Services/club.service';

@Component({
  selector: 'app-clublistfilter',
  templateUrl: './clublistfilter.component.html',
  styleUrls: ['./clublistfilter.component.css']
})
export class ClublistfilterComponent {
  clubs:any;

   displayedColumns: string[] = [ 'id','name','description','action'];
   dataSource: MatTableDataSource<any> = new MatTableDataSource<AnyObject>();

  
   constructor(private clubservice:ClubService,private changeDetectorRef: ChangeDetectorRef,private router:Router){
 
   } 
   ngOnInit(): void {
     this.clubservice.getClubs().subscribe(data => {
       this.clubs = data;
       this.dataSource=new MatTableDataSource<Club>(this.clubs);
 
     }
     )
   
 }
 reloadPage() {
  window.location.reload();
}
 
    
 
 
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
 
     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
   }
   deleteClub(id: number) {
     this.clubservice.deleteClub(id).subscribe(
       data => {
       
         this.clubservice.getClubs().subscribe((data: any) => {
           this.clubs = data;
         })
      
       }
       
 
     )
this.reloadPage();
   }
}
