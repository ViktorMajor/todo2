import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public dataService: DataService) {}

  addProjectOpen = false;
  topicNameInput: string = '';

  open() {
    this.addProjectOpen = !this.addProjectOpen;
  }

  addProject(projectNameInput: string) {
    if (projectNameInput.trim() === '') {
      return;
    }
    const newProject = { name: projectNameInput, selected: false }; // Hozzáadunk egy 'selected' tulajdonságot
    this.dataService.projects.push(newProject);
    projectNameInput = '';
    this.addProjectOpen = false;
  }

  selectProject(projectName: string) {
    this.dataService.setSelectedProject(projectName);
  }


  selectAllProjects() {
    const areAllSelected = this.dataService.projects.every((project) => project.selected);
  
    for (const project of this.dataService.projects) {
      project.selected = !areAllSelected;
    }
  }
  
}
