import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent  {
    @ViewChildren('statNumber') statNumbers!: QueryList<ElementRef>;
activeSection = 'about'; // default section

scrollToSection(sectionId: string) {
  this.activeSection = sectionId;
}

    constructor() { }

    // ngOnInit(): void {
    // }

    // ngAfterViewInit(): void {
    //     const statObserver = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 const numberElement = entry.target as HTMLElement;
    //                 const target = parseInt(numberElement.textContent || '0'); // Get target from textContent
    //                 this.animateCounter(numberElement, target);
    //                 statObserver.unobserve(numberElement); // Unobserve once animated
    //             }
    //         });
    //     }, { threshold: 0.5 }); // Adjust threshold as needed

    //     this.statNumbers.forEach(stat => {
    //         statObserver.observe(stat.nativeElement);
    //     });
    // }

    animateCounter(element: HTMLElement, target: number) {
        let current = 0;
        // Determine the actual target for animation based on text content
        const textContent = element.textContent;
        let finalDisplayTarget = target;
        let suffix = '';

        if (textContent?.includes('+')) {
            suffix = '+';
        } else if (textContent?.includes('/7')) {
            suffix = '/7';
        }

        const increment = target / 100; // Divide by 100 steps for smooth animation
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 20); // 20ms interval
    }
}