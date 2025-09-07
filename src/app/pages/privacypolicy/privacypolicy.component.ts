import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacypolicy',
  imports: [CommonModule],
  templateUrl: './privacypolicy.component.html',
  styleUrl: './privacypolicy.component.css'
})
export class PrivacypolicyComponent implements OnInit {
  effectiveDate = '21 August 2024';
  lastUpdated = '20 August 2025';

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Privacy Policy – Devegya Jyotish (Devegya.com)');
    this.meta.updateTag({ name: 'description', content: 'Privacy Policy for Devegya Jyotish (Devegya.com) explaining how we collect, use, safeguard, and share your data in compliance with DPDP Act 2023 and GDPR.' });
    this.meta.updateTag({ property: 'og:title', content: 'Privacy Policy – Devegya Jyotish' });
  }
}