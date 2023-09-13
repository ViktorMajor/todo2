import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements AfterViewInit {

  constructor(public dataService: DataService) {}

  isOpen = false;
  backgroundColor: string = '#333';
  topicName: string = '';
  id: number = 0;
  taskAmount: any[] = []; 
  currentProject: string = '';
  
  
  @ViewChildren('taskInput') taskInputs!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.taskInputs.toArray();
  }


  window() {
    this.isOpen = !this.isOpen;
  }

 

  setSelectedProject(projectName: string) {
    this.currentProject = projectName;
    
  }
  

  setBackgroundColor(color: string) {
    this.backgroundColor = color;
  }

  newTask() {
    this.taskAmount.push(''); 
  }

  addTopic(topicName: string) {
    const task: string[] = this.taskInputs.map(input => input.nativeElement.value);
    const newTopic = {
      project : this.currentProject,
      name: topicName,
      tasks: task,
      id: this.id,
      topicBackgroundColor: this.backgroundColor,
    };

    this.dataService.addData(newTopic);
    this.window();
    this.id++;
    this.backgroundColor = '#333';
    this.topicName = '';
    this.taskInputs.forEach((input, index) => {
      input.nativeElement.value = ''; 
      this.taskAmount[index] = ''; 
    });
    this.taskAmount= []; 
  }
}
