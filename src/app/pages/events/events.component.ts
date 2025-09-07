import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { EventItem } from '../../models/models';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-events',
  imports: [CommonModule,ModalComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit, AfterViewInit { // Implement AfterViewInit
    // Array to hold your event data
    events: EventItem[] = [
        // {
        //     id: './assets/img/bgimg.png',
        //     icon: '🌕',
        //     date: 'February 24, 2024 - 7:00 PM EST',
        //     title: 'Full Moon Manifestation Workshop',
        //     excerpt: 'Harness the powerful energy of the Full Moon to manifest your deepest desires...',
        //     fullContent: `
        //         <p><strong>Harness the Powerful Energy of the Full Moon</strong></p>

        //         <p>Join us for a transformative evening as we work with the potent energy of the Full Moon to manifest your deepest desires and release what no longer serves your highest good.</p>

        //         <p><strong>What You'll Experience:</strong></p>
        //         <p>🌕 <strong>Opening Meditation:</strong> Connect with lunar energy and set sacred space<br>
        //         🌕 <strong>Full Moon Astrology:</strong> Understanding this month's specific lunar influences<br>
        //         🌕 <strong>Manifestation Ritual:</strong> Powerful techniques for calling in your desires<br>
        //         🌕 <strong>Release Ceremony:</strong> Let go of blocks, fears, and old patterns<br>
        //         🌕 <strong>Crystal Charging:</strong> Energize your crystals under the Full Moon<br>
        //         🌕 <strong>Group Sharing:</strong> Connect with like-minded souls on the path</p>

        //         <p><strong>What to Bring:</strong><br>
        //         - Journal and pen<br>
        //         - Any crystals you'd like to charge<br>
        //         - A small item representing what you want to release<br>
        //         - Open heart and mind</p>

        //         <p><strong>Investment:</strong> $35 per person<br>
        //         <strong>Location:</strong> Online via Zoom (link provided upon registration)<br>
        //         <strong>Duration:</strong> 90 minutes</p>

        //         <p><strong>Special Bonus:</strong> All participants receive a personalized Full Moon affirmation based on their zodiac sign and a guided meditation recording to use for future Full Moons.</p>

        //         <p>This workshop is perfect for both beginners and experienced practitioners. No prior experience with astrology or manifestation required - just bring your intention to grow and transform.</p>

        //         <p><strong>Register Now:</strong> Email events@celestialinsights.com or call (555) 123-STAR</p>
        //     `
        // },
        // {
        //     id: 'event2',
        //     icon: '♈',
        //     date: 'March 20, 2024 - 6:30 PM EST',
        //     title: 'Spring Equinox Ceremony',
        //     excerpt: 'Welcome the astrological new year with a sacred ceremony celebrating balance...',
        //     fullContent: `
        //         <p><strong>Welcome the Astrological New Year</strong></p>

        //         <p>The Spring Equinox marks the beginning of the astrological year as the Sun enters Aries. This sacred time of balance between light and dark offers us a powerful opportunity to plant seeds for the year ahead and align with the fresh energy of spring.</p>

        //         <p><strong>Ceremony Highlights:</strong></p>
        //         <p>♈ <strong>Equinox Meditation:</strong> Balance your inner masculine and feminine energies<br>
        //         ♈ <strong>Aries New Moon Ritual:</strong> Set powerful intentions for new beginnings<br>
        //         ♈ <strong>Element Balancing:</strong> Work with earth, air, fire, and water energies<br>
        //         ♈ <strong>Seed Blessing:</strong> Literally and metaphorically plant seeds for growth<br>
        //         ♈ <strong>Chakra Alignment:</strong> Clear and balance your energy centers<br>
        //         ♈ <strong>Community Circle:</strong> Share intentions and receive group support</p>

        //         <p><strong>The Sacred Space:</strong><br>
        //         We'll create a beautiful altar honoring the four elements and the turning of the seasons. The ceremony blends ancient traditions with modern astrological wisdom, creating a meaningful experience for all participants.</p>

        //         <p><strong>What's Included:</strong><br>
        //         - Guided ceremony and rituals<br>
        //         - Blessed seeds to take home and plant<br>
        //         - Equinox blessing card<br>
        //         - Light refreshments<br>
        //         - Digital ceremony guide for future use</p>

        //         <p><strong>Perfect For:</strong><br>
        //         - Anyone seeking a fresh start<br>
        //         - Those wanting to connect with seasonal rhythms<br>
        //         - People interested in earth-based spirituality<br>
        //         - Astrology enthusiasts<br>
        //         - Anyone feeling called to ceremony and community</p>

        //         <p><strong>Investment:</strong> $45 per person<br>
        //         <strong>Location:</strong> Hybrid - In-person in Central Park, NYC + Online option<br>
        //         <strong>Duration:</strong> 2 hours<br>
        //         <strong>Weather Backup:</strong> Indoor location secured if needed</p>

        //         <p><strong>What to Wear:</strong> Comfortable clothing in earth tones or spring colors. Dress warmly as we'll be outdoors for part of the ceremony.</p>

        //         <p><strong>Limited Space Available:</strong> Only 20 in-person spots to maintain intimate group energy. Online participation unlimited.</p>

        //         <p><strong>Register:</strong> events@celestialinsights.com or (555) 123-STAR</p>
        //     `
        // },
        // {
        //     id: 'event3',
        //     icon: '📚',
        //     date: 'April 15, 2024 - 2:00 PM EST',
        //     title: 'Astrology 101: Beginner\'s Workshop',
        //     excerpt: 'Learn the fundamentals of astrology in this comprehensive beginner-friendly workshop...',
        //     fullContent: `
        //         <p><strong>Your Gateway to the Stars</strong></p>

        //         <p>Always been curious about astrology but don't know where to start? This comprehensive beginner's workshop will give you a solid foundation in astrological basics and help you begin reading your own birth chart.</p>

        //         <p><strong>Workshop Curriculum:</strong></p>

        //         <p><strong>Part 1: Foundations (45 minutes)</strong><br>
        //         📚 History and philosophy of astrology<br>
        //         📚 The difference between astronomy and astrology<br>
        //         📚 How astrology works as a symbolic language<br>
        //         📚 Debunking common myths and misconceptions</p>

        //         <p><strong>Part 2: The Building Blocks (60 minutes)</strong><br>
        //         ⭐ The 12 zodiac signs and their qualities<br>
        //         ⭐ The 10 planets and what they represent<br>
        //         ⭐ The 12 houses and life areas<br>
        //         ⭐ Elements (fire, earth, air, water) and modalities (cardinal, fixed, mutable)</p>

        //         <p><strong>Part 3: Your Birth Chart (45 minutes)</strong><br>
        //         🗺️ How to generate your birth chart<br>
        //         🗺️ Finding your Big Three (Sun, Moon, Rising)<br>
        //         🗺️ Basic chart interpretation techniques<br>
        //         🗺️ Hands-on practice with your own chart</p>

        //         <p><strong>Part 4: Next Steps (30 minutes)</strong><br>
        //         📖 Recommended resources for continued learning<br>
        //         📖 How to deepen your astrological practice<br>
        //         📖 Q&A session<br>
        //         📖 Community building and ongoing support</p>

        //         <p><strong>What You'll Receive:</strong><br>
        //         - Comprehensive beginner's workbook (40+ pages)<br>
        //         - Your personal birth chart printout<br>
        //         - Quick reference guides for signs, planets, and houses<br>
        //         - List of recommended books and apps<br>
        //         - Access to private Facebook group for ongoing learning<br>
        //         - 20% discount on your first personal reading</p>

        //         <p><strong>Who Should Attend:</strong><br>
        //         - Complete beginners to astrology<br>
        //         - Those who know their Sun sign but want to learn more<br>
        //         - People interested in personal development tools<br>
        //         - Anyone curious about cosmic influences<br>
        //         - Those wanting to understand astrology beyond horoscopes</p>

        //         <p><strong>Prerequisites:</strong> None! Just bring curiosity and openness to learn.</p>

        //         <p><strong>What You Need:</strong><br>
        //         - Birth date, time, and location (as accurate as possible)<br>
        //         - Notebook and pen<br>
        //         - Calculator or smartphone<br>
        //         - Open mind and willingness to participate</p>

        //         <p><strong>Investment:</strong> $75 per person (includes all materials)<br>
        //         <strong>Early Bird Special:</strong> $60 if registered by April 1st<br>
        //         <strong>Location:</strong> Online via Zoom with interactive features<br>
        //         <strong>Duration:</strong> 3.5 hours with breaks<br>
        //         <strong>Class Size:</strong> Limited to 25 participants for personalized attention</p>

        //         <p><strong>Instructor:</strong> Led by our founder with over 10 years of teaching experience and 1000+ chart readings completed.</p>

        //         <p><strong>Register Now:</strong> events@celestialinsights.com or call (555) 123-STAR</p>

        //         <p><em>"This workshop changed my life! I finally understand myself and my relationships so much better." - Sarah M., previous participant</em></p>
        //     `
        // }
    ];

    // Use ViewChildren to get references to all event cards after they are rendered
    @ViewChildren('eventCard') eventCards!: QueryList<ElementRef>;

    selectedEvent: EventItem | null = null;
    isModalOpen: boolean = false;

    constructor(private commonservice:CommonService) { }

    ngOnInit(): void {
        // Initialization logic if any
             this.commonservice.getAllEvents().subscribe((res:any)=>{
            this.events=res
            console.log(this.events)
             setTimeout(() => this.setupIntersectionObserver(this.eventCards));
        })
    }
isCardVisible(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight - 100;
}

@HostListener('window:scroll', [])
onScroll(): void {
  const cards = document.querySelectorAll('.event-card');
  cards.forEach(card => {
    if (this.isCardVisible(card as HTMLElement)) {
      card.classList.add('visible');
    }
  });
}
    // After the view is initialized and content projected, set up the observer
    ngAfterViewInit(): void {
        this.setupIntersectionObserver(this.eventCards);
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

        // Observe each event card
        elements.forEach(el => {
            observer.observe(el.nativeElement);
        });
    }

    openModal(eventId: string): void {
        this.selectedEvent = this.events.find(event => event.id === eventId) || null;
        this.isModalOpen = true;
    }

    closeModal(): void {
        this.isModalOpen = false;
        this.selectedEvent = null;
    }
}