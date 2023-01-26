import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themepark',
  templateUrl: './themepark.component.html',
  styleUrls: ['./themepark.component.scss']
})
export class ThemeparkComponent implements OnInit {

  themeparklist = [
    {
    title: "Warner",
  },
  {
    title: "Portaventura",
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
