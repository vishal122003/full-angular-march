import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Project } from '../../model/project'; // Import the Project interface

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  projectStatuses: string[] = ['Not Started', 'In Progress', 'Completed', 'On Hold'];
  selectedStatus: string = '';
  minSize: number = 1;
  maxSize: number = 10;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProjects().subscribe((data: any[]) => {
      this.projects = data.map(project => ({
        ...project,
        teamSize: Number(project.teamSize), // Convert teamSize to number
        startDate: new Date(project.startDate), // Convert string to Date object
        endDate: new Date(project.endDate) // Convert string to Date object
      }));
    });
  }
}
