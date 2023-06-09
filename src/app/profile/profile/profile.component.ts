import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit {


      ProfileList = [

        {
          Name: "Jose Luis",
          Credits: "25",
          Coaster: "Batman Gotham City Escape"
        },

      ]



  constructor() { }

  ngOnInit(): void {
  }

}
