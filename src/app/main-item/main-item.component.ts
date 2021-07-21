// import { Posts } from './../main/main.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-item',
  templateUrl: './main-item.component.html',
  styleUrls: ['./main-item.component.scss'],
})
export class MainItemComponent implements OnInit {
  @Input() post: any;

  constructor() {}

  ngOnInit(): void {}
}
