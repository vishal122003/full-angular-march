import { Component, Input } from '@angular/core';
import { Project } from '../../model/project'; // Import the Project interface

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project: Project = {
    id: 0,
    name: '',
    description: '',
    status: '',
    startDate: '',
    endDate: '',
    teamSize: 0,
    image: ''
  }; // Default value
}
