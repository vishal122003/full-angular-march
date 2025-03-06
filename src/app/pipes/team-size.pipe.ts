import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../model/project'; // Import the Project interface

@Pipe({
  name: 'teamSize'
})
export class TeamSizePipe implements PipeTransform {

  transform(projects: Project[], minSize: number, maxSize: number): Project[] {
    if (!projects || minSize === undefined || maxSize === undefined) {
      return projects;
    }
    return projects.filter(project => project.teamSize >= minSize && project.teamSize <= maxSize);
  }
}
