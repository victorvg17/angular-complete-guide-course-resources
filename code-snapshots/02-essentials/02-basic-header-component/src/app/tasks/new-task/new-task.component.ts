import {
  Component,
  Output,
  EventEmitter,
  signal,
  inject,
  Input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<NewTaskData>();
  @Input({ required: true }) userId!: string;
  enteredTitle = '';
  // enteredTitle = signal('');
  enteredSummary = '';
  // enteredSummary = signal('');
  enteredDate = '';
  // enteredDate = signal('');
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
