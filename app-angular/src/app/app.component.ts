import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-angular';
  show: boolean;
  color: string[];

  ngOnInit(): void {
      this.show = true;
      this.color = ['red','green','blue','yellow'];
  }
}
