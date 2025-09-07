import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';


@Component({
  selector: 'app-masterlayout',
  imports: [HeaderComponent, FooterComponent, RouterOutlet,],
  templateUrl: './masterlayout.component.html',
  styleUrl: './masterlayout.component.css'
})
export class MasterlayoutComponent {

}
