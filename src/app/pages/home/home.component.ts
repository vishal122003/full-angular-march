import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  serviceslist: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getServices().subscribe({
      next: (data) => {
        this.serviceslist = data;
      },
      error: (error: any) => console.log(error)
    });
  }
}
