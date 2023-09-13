import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  selectedProjectData: any[] = [];
  selectedProject: string | null = null;
  newTaskInput: string = '';
  topicInputValues: { [key: string]: boolean } = {};
  deleteTaskConfirmation: boolean = false;
  deleteTopicConfirmation: boolean = false;

  constructor(public dataService: DataService) {}

  ngOnInit() {

    this.dataService.selectedProject$.subscribe((project) => {
      if (project) {
        this.selectedProject = project;

        this.dataService.data$.subscribe((data) => {
          this.selectedProjectData = data.filter(
            (item) => item.project === this.selectedProject
          );
              console.log(this.selectedProjectData.length)

        });
      }
    });
  }

  deleteTask(topic: any, taskIndex: number) {
    topic.tasks.splice(taskIndex, 1);
  }

  deleteDoneTask(topic: any, taskIndex: number) {
    topic.doneTasks.splice(taskIndex, 1);
  }

  doneTask(topic: any, taskIndex: number) {
    const doneTask = topic.tasks.splice(taskIndex, 1)[0];
    topic.doneTasks = topic.doneTasks || [];
    topic.doneTasks.push(doneTask);
  }

  undoTask(topic: any, doneTaskIndex: number) {
    const undoneTask = topic.doneTasks.splice(doneTaskIndex, 1)[0];
    topic.tasks = topic.tasks || [];
    topic.tasks.push(undoneTask);
  }

  addNewTask(topic: any) {
    if (this.newTaskInput.trim() !== '') {
      topic.tasks = topic.tasks || [];
      topic.tasks.push(this.newTaskInput);
      this.newTaskInput = '';
      this.topicInputValues[topic.name] = !this.topicInputValues[topic.name];
    }
  }

  deleteTopic(topic: any) {
    this.dataService.data$.subscribe((data) => {
      const index = data.indexOf(topic);
      if (index !== -1) {
        data.splice(index, 1);
      }
    });
  }

  plusInput(topic: any) {
    if (!this.topicInputValues[topic.name]) {
      this.topicInputValues[topic.name] = false;
    }
    this.topicInputValues[topic.name] = !this.topicInputValues[topic.name];
  }
}
