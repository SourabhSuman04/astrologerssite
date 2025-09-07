import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
    starInterval: any;
    activeSection = 'home';

scrollToSection(sectionId: string) {
  this.activeSection = sectionId;
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
}


    constructor() { }

    ngOnInit(): void {
        this.starInterval = setInterval(() => this.createStar(), 3000);
    }

    ngOnDestroy(): void {
        if (this.starInterval) {
            clearInterval(this.starInterval);
        }
    }

    createStar() {
        if (typeof document !== 'undefined') {
            const star = document.createElement('div');
            star.classList.add('floating-star'); // Add a class for specific styling if needed

            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;

            star.style.left = x + 'px';
            star.style.top = y + 'px';

            document.body.appendChild(star); // Append to body to float over everything

            star.animate([
                { opacity: 0, transform: 'scale(0)' },
                { opacity: 1, transform: 'scale(1)' },
                { opacity: 0, transform: 'scale(0)' }
            ], {
                duration: 2000,
                easing: 'ease-in-out'
            }).onfinish = () => {
                star.remove();
            };
        }
    }

    // scrollToSection(sectionId: string) {
    //     const element = document.getElementById(sectionId);
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //     }
    // }
}
