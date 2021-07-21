import { Component } from '@angular/core';

export interface Names {
  title: string;
  message: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  initialTitles: Names = {
    title: 'Scene',
    message: 'always together',
  };
}
