import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router, RouterEvent, RouterModule } from '@angular/router';

@Component({
  selector: 'app-vastu',
  imports: [CommonModule,RouterModule],
  templateUrl: './vastu.component.html',
  styleUrl: './vastu.component.css'
})
export class VastuComponent {
  constructor(private router:Router)
  {}
  elements = [
    { tatva: 'पृथ्वी', disha: 'दक्षिण-पश्चिम', gun: 'स्थिरता, भार', sanket: 'मास्टर बेडरूम / स्टोर' },
    { tatva: 'जल', disha: 'उत्तर-पूर्व', gun: 'शुद्धता, प्रवाह', sanket: 'पूजा / जल स्रोत' },
    { tatva: 'अग्नि', disha: 'दक्षिण-पूर्व', gun: 'ऊर्जा, परिवर्तन', sanket: 'किचन' },
    { tatva: 'वायु', disha: 'उत्तर-पश्चिम', gun: 'गतिशीलता, संचार', sanket: 'गेस्ट रूम / वेंटिलेशन' },
    { tatva: 'आकाश', disha: 'केंद्र / ऊर्ध्व', gun: 'विस्तार, शून्य', sanket: 'ओपन स्पेस / आँगन' }
  ];
}