import { Component, OnInit } from '@angular/core';

export interface Posts {
  title: string;
  message: string;
  id?: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  postsItems: Posts[] = [
    {
      title: 'amet consectetur adipisicing elit',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, illo!',
      id: 1,
    },
    {
      title: ' sit amet consectetur adipisic',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, rerum!',
      id: 2,
    },
    {
      title: 'adipisicing elit. Facere quos ',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ab necessitatibus.',
      id: 3,
    },
    {
      title: 'necessitatibus',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quos adipisci illo!',
      id: 4,
    },
    {
      title: 'amet consectetur ',
      message:
        ' sit amet consectetur adipisicing elit. Nisi, ab necessitatibus',
      id: 5,
    },
  ];
  ngOnInit(): void {}
}
