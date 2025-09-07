import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{

    isMobileMenuOpen = false;
  isFixed = false;
  activeSection = 'home';

navItems = [
  { id: 'home', label: 'Home', route: '/' },
  { id: 'about', label: 'About', route: '/about' },
  { id: 'service', label: 'Services', route: '/service' },
  { id: 'blog', label: 'Blog', route: '/blog' },
  { id: 'event', label: 'Events', route: '/event' },
  { id: 'product', label: 'Shop', route: '/product' },
  { id: 'ask-question', label: 'Ask Question', route: '/ask-question' },
  { id: 'contact', label: 'Contact', route: '/contact' } // ⚠️ no contact in routes yet
];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.activeSection = sectionId;
    this.isMobileMenuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isFixed = window.scrollY > 50;
    this.updateActiveSection();
  }

  updateActiveSection() {
    for (let item of this.navItems) {
      const section = document.getElementById(item.id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = item.id;
          break;
        }
      }
    }
  }
}