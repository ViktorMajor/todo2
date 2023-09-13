import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-selected-topics',
  templateUrl: './selected-topics.component.html',
  styleUrls: ['./selected-topics.component.css']
})
export class SelectedTopicsComponent {
  selectedProjectData: any[] = [];
  selectedProject: string | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Feliratkozás a kiválasztott projekt változásaira
    this.dataService.selectedProject$.subscribe((project) => {
      // Ellenőrzés, hogy van-e kiválasztott projekt
      if (project) {
        this.selectedProject = project;

        this.dataService.data$.subscribe((data) => {
          this.selectedProjectData = data.filter(
            (item) => item.project === this.selectedProject
          );
        });
      }
    });
  }
}
