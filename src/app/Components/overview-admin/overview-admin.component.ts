import { Component, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ClubService } from 'src/app/Services/club.service';
import { EventService } from 'src/app/Services/event.service';
import { StatisticsService } from 'src/app/Services/statistics.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-overview-admin',
  templateUrl: './overview-admin.component.html',
  styleUrls: ['./overview-admin.component.css']
})
export class OverviewAdminComponent {
  nbrusers!:any;
  nbrevents!:number;
  nbrclubs!:number;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @ViewChild(BaseChartDirective) chart1: BaseChartDirective | undefined;
  constructor(private userservice: UserService,private eventservice:EventService,private clubservice:ClubService,private Statservice:StatisticsService) { 
 
  }



array:any;




  ngOnInit(): void {
    this.Statservice.getfirstdata().subscribe
    (
      (t:any)=>{
            this.array=t;
      }
    );
   
    this.userservice.countUsers().subscribe
    (
      (      data: number) => {
        this.nbrusers = data;
      });
      this.eventservice.countEvents().subscribe
      (
        (      data: number) => {
          this.nbrevents = data;
        });
        this.clubservice.countClubs().subscribe
        (
          (      data: number) => {
            this.nbrclubs = data;

          });
      this.array.p
  }

 
  

   pieChartData: ChartData<'pie', number[], string | string[]> = {
    
    labels: [ 'Users', 'Clubs', 'Membres' ],
    datasets: [ {
      
      data: [ 15,20, 55 ]
    } ]
  };
  public pieChartType: ChartType = 'pie';





 
  public barChartType: ChartType = 'bar';
  

  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };


}
