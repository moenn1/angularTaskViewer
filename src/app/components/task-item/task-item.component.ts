import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit{
@Input() task: Task;
@Output() onDeleteTask: EventEmitter<Task>= new EventEmitter();
@Output() onToggleTask: EventEmitter<Task>= new EventEmitter();
faTimes = faTimes;


ngOnInit(): void {
    
}

onDelete(task: Task){
  this.onDeleteTask.emit(task);
}

toggleReminder(task: Task){
  this.onToggleTask.emit(task);
}

}
