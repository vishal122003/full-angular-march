import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {
  transform(projects: any[], status: string): any[] {
    if (!projects || projects.length === 0 || !status) {
      return projects;
    }
    return projects.filter(project => project.status === status);
  }
}
