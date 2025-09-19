import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { AboutComponent } from "../about/about.component";
import { ServicesComponent } from "../services/services.component";
import { ModalComponent } from "../modal/modal.component";
import { BlogComponent } from "../blog/blog.component";
import { EventsComponent } from "../events/events.component";
import { AskquestionComponent } from "../askquestion/askquestion.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";
import { ProductsComponent } from "../products/products.component";
import { RouterOutlet } from "../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-layout',
  imports: [HeroComponent, AboutComponent, ServicesComponent, BlogComponent, EventsComponent, ProductsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit, OnDestroy {
    title = 'celestial-insights';

    // To handle global Escape key for modals (can be refined to be in modal service)
    @HostListener('document:keydown.escape', ['$event'])
    onEscapeKey(event: KeyboardEvent) {
        // This is a broad listener. In a real app, you'd likely use a modal service
        // to manage which modal is currently open and close it specifically.
        // For this conversion, we assume only one modal might be open at a time.
        const openModalElement = document.querySelector('.modal[style*="block"]');
        if (openModalElement) {
            // Find the close button of the active modal and simulate a click
            const closeButton = openModalElement.querySelector('.close') as HTMLElement;
            if (closeButton) {
                closeButton.click();
            }
        }
    }

    constructor() { }

    ngOnInit(): void {
        // You can add global initializations here if needed
        // The Intersection Observer for elements is now handled within individual components
    }

    ngOnDestroy(): void {
        // Cleanup if any global listeners were added that Angular doesn't manage
    }
}