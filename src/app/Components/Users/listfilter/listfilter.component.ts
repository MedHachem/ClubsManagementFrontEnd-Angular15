import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { AnyObject } from 'chart.js/dist/types/basic';
import { User, UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-listfilter',
  templateUrl: './listfilter.component.html',
  styleUrls: ['./listfilter.component.css']
})
export class ListfilterComponent {
  users:any;
 id!:number;
  displayedColumns: string[] = [ 'id','email','enabled','firstname','lastname','username','action'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<AnyObject>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userservice:UserService,private changeDetectorRef: ChangeDetectorRef,private router:Router){

  } 
  ngOnInit(): void {
    this.userservice.getUsers().subscribe(data => {
      this.users = data;
      this.dataSource=new MatTableDataSource<User>(this.users);

    }
    )
    
    
  
}
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  
}

   


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteUser(id: number) {
    this.userservice.deleteUser(id).subscribe(
      data => {
      
        this.userservice.getUsers().subscribe((data: any) => {
          this.users = data;
        })
      }
    

    )
    this.reloadPage();
  }

  reloadPage() {
    window.location.reload();
  }
}


