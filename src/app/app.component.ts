import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toast';
  constructor(private notifyService: NotificationService) {
  }
  ngOnInit() { }


  Errortoastr() {
    
    this.notifyService.showRroor("Successfully Working for Error!", "Oops");
    return;

  }
  Successtoastr() {

    this.notifyService.showSuccess("Successfully Working for Success! ", " Success");
    return;
  }
}
