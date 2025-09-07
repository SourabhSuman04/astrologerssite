import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms-condition',
  imports: [CommonModule],
  templateUrl: './terms-condition.component.html',
  styleUrl: './terms-condition.component.css'
})
export class TermsConditionComponent implements OnInit {
  effectiveDate = '20 August 2025';

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Terms & Conditions – Devegya Jyotish (Devegya.com)');
    this.meta.updateTag({ name: 'description', content: 'Terms & Conditions for using Devegya.com services including astrology consultations, vastu advice, numerology reports, payments & refunds, privacy, intellectual property, limitation of liability, external links, governing law, and contact details.' });
    this.meta.updateTag({ property: 'og:title', content: 'Terms & Conditions – Devegya Jyotish' });
  }
}
