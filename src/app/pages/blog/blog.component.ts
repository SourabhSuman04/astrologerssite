import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BlogPost } from '../../models/models';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [CommonModule,ModalComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit, AfterViewInit { // Implement AfterViewInit
    // Array to hold your blog post data
    blogPosts:BlogPost [] = [];
showAll:boolean=false
    // Use ViewChildren to get references to all blog cards after they are rendered
    @ViewChildren('blogCard') blogCards!: QueryList<ElementRef>;

    selectedBlogPost: BlogPost | null = null;
    isModalOpen: boolean = false;

    constructor(private commonservice:CommonService,private router:Router) { }

    ngOnInit(): void {
        // Initialization logic if any
        this.commonservice.getAll().subscribe((res:any)=>{
            this.blogPosts=res
            console.log(this.blogPosts)
             setTimeout(() => this.setupIntersectionObserver(this.blogCards));
        })
    }

    isCardVisible(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight - 100;
}

@HostListener('window:scroll', [])
onScroll(): void {
  const cards = document.querySelectorAll('.blog-card');
  cards.forEach(card => {
    if (this.isCardVisible(card as HTMLElement)) {
      card.classList.add('visible');
    }
  });
}
    // After the view is initialized and content projected, set up the observer
    ngAfterViewInit(): void {
        this.setupIntersectionObserver(this.blogCards);
    }

    // Common function to set up IntersectionObserver for a list of elements
    private setupIntersectionObserver(elements: QueryList<ElementRef>): void {
        const observerOptions = {
            threshold: 0.1, // Trigger when 10% of the element is visible
            rootMargin: '0px 0px -50px 0px' // Start observing 50px before the bottom of the viewport
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Apply styles to trigger the animation
                    (entry.target as HTMLElement).style.opacity = '1';
                    (entry.target as HTMLElement).style.transform = 'translateY(0)';
                    // Stop observing this element once it's animated
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe each blog card
        elements.forEach(el => {
            observer.observe(el.nativeElement);
        });
    }

    openModal(postId: string): void {
        this.selectedBlogPost = this.blogPosts.find(post => post.id === postId) || null;
        this.isModalOpen = true;
    }

    closeModal(): void {
        this.isModalOpen = false;
        this.selectedBlogPost = null;
    }
    show()
    {
        this.showAll=true
    }
    deatils(item:any) {
    // Navigate to checkout page and pass product data
    this.router.navigate(['/details-page'], { state: { product: item } });
  }
}