import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new BehaviorSubject<any[]>([]);
  data$ = this.dataSubject.asObservable();
  private selectedProjectSubject = new BehaviorSubject<string | null>(null);
  selectedProject$ = this.selectedProjectSubject.asObservable();

  projects: any[] = [
    { name: 'Business' },
    { name: 'Learning' },
    { name: 'Other' },
  ];

  updateData(newData: any[]) {
    this.dataSubject.next(newData);
  }

  addData(newData: any) {
    const currentData = this.dataSubject.getValue();
    currentData.push(newData);
    this.dataSubject.next(currentData);
  }

  setSelectedProject(projectName: string) {
    this.selectedProjectSubject.next(projectName);
  }

  
}
