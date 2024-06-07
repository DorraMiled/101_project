import { Component, Input, SimpleChanges } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {

  @Input() message!: string;
  @Input() iconName: string = 'check';
  isVisible: boolean = false;

  constructor(private toastService: ToastService) { }


  ngOnInit() {
    this.toastService.toastMessage$
      .subscribe({
        next: (toast => {
          this.message = toast.message;
          this.iconName = toast.iconName;
          this.isVisible = toast.isVisible;
        })
      })
  }




}
