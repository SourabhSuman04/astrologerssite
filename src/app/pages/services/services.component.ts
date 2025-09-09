import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AstrologicalService } from '../../models/models';
import { Router, RouterLink } from '@angular/router';


interface Service {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  websites?:string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit, AfterViewInit {
// encodeURIComponent(arg0: string) {
// throw new Error('Method not implemented.');
// }
     services: Service[] = [
      {
  id: 'Astrology',
  title: 'Astrology',
  icon: 'assets/img/7.png',
  shortDesc: 'Astrology provides insights into your life by studying the influence of planets and stars.',
  fullDesc: `Astrology is the study of celestial bodies and their influence on human life. 
  By analyzing your birth chart (Kundli), it reveals your personality, strengths, 
  challenges, career path, relationships, and future possibilities. 
  Astrology helps you make informed decisions and align your life with cosmic energies.`,
  features: [
    'Detailed Kundli (birth chart) analysis',
    'Planetary positions & their effects',
    'Life-path, career & relationship guidance',
    'Remedies for challenges & doshas'
  ],
     websites:'#/astrology'
},
    {
      id: 'vastu',
      title: 'Vastu Shastra',
      icon: 'assets/img/2.png',
      shortDesc: 'Ancient science of architecture to harmonize your home with nature.',
      fullDesc: `Vastu Shastra aligns your living and working spaces with universal energies. 
      It helps balance the five elements to bring health, prosperity, and positivity.`,
      features: [
        'Home & office Vastu consultation',
        'Correction of negative energy zones',
        'Placement guidance for harmony',
        'Remedies without demolition'
      ],
      websites:'#/vastu'
    },
{
  id: 'Numerology',
  title: 'Numerology',
  icon: 'assets/img/4.png',
  shortDesc: 'Numerology reveals life’s hidden patterns and guides you towards clarity and success.',
  fullDesc: `Numerology studies the mystical relationship between numbers and life events. 
  By analyzing your date of birth and name, it uncovers your personality traits, 
  strengths, challenges, and destiny. It helps in making better decisions for career, 
  relationships, and overall life direction.`,
  features: [
    'Life-path number analysis',
    'Personality & destiny insights',
    'Relationship compatibility',
    'Career & success guidance'
  ],
  websites:'#/numeralogy'
},
{
  id: 'PalmReading',
  title: 'Palm Reading',
  icon: 'assets/img/chiromancy.png',
  shortDesc: 'Palm Reading unveils your destiny through the secrets written in your hands.',
  fullDesc: `Palm Reading interprets the lines, shapes, and mounts of your hands to reveal 
  your personality, emotions, health, career, and future possibilities. 
  It offers guidance about life decisions and helps you understand your inner potential.`,
  features: [
    'Heart, head & life line analysis',
    'Personality & emotional traits',
    'Health & career indications',
    'Future predictions & remedies'
  ]
},
    // {
    //   id: 'matrimonial',
    //   title: 'Matrimonial',
    //   icon: 'assets/img/1.png',
    //   shortDesc: 'Matchmaking services guided by astrology for happy relationships.',
    //   fullDesc: `Our Matrimonial Astrology service helps you find the most compatible 
    //   life partner through horoscope matching and dosha analysis.`,
    //   features: [
    //     'Kundli matching (Guna Milan)',
    //     'Manglik Dosha remedies',
    //     'Compatibility analysis',
    //     'Guidance for marriage decisions',
    //     // '<a href="http://jeevanhumsafar.com/" alt=""></a>'
    //   ],
    //   websites:'#/crystal'
    // },
  {
  id: 'crystal',
  title: 'Crystal',
  icon: 'assets/img/1.png',
  shortDesc: 'Harness the healing power of crystals for balance, positivity, and energy.',
  fullDesc: `Our Crystal Healing service uses natural crystals and gemstones 
  to restore energy flow, promote emotional balance, and attract positivity 
  into your life.`,
  features: [
    'Personalized crystal recommendations',
    'Energy balancing and chakra alignment',
    'Gemstone remedies for prosperity and health',
    'Guidance for using crystals in daily life'
  ],
  websites: '#/crystal'
},
    {
  id: 'PreMarriageCounselling',
  title: 'Pre Marriage Counselling',
  icon: 'assets/img/6.png',
  shortDesc: 'Guidance for couples to build a strong, harmonious, and lasting relationship before marriage.',
  fullDesc: `Pre-Marriage Counselling helps couples prepare for a healthy married life. 
  It addresses emotional, psychological, and practical aspects of marriage, 
  including communication, expectations, family adjustments, and conflict resolution. 
  This counselling ensures couples start their journey with clarity and mutual understanding.`,
  features: [
    'Compatibility & relationship analysis',
    'Communication improvement techniques',
    'Guidance on expectations & responsibilities',
    'Conflict resolution & emotional support'
  ],
  websites:'#/pre-marriage-counselling'
  }
  ];

    // Use ViewChildren to get references to all service cards after they are rendered
    @ViewChildren('serviceCard') serviceCards!: QueryList<ElementRef>;

    selectedService: Service | null = null;

  openModal(service: Service) {
    this.selectedService = service;
  }

  closeModal() {
    this.selectedService = null;
  }
    constructor(private router:Router) { }

    ngOnInit(): void {
        // Initialization logic if any
    }

    // After the view is initialized and content projected, set up the observer
    ngAfterViewInit(): void {
        this.setupIntersectionObserver(this.serviceCards);
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

        // Observe each service card
        elements.forEach(el => {
            observer.observe(el.nativeElement);
        });
    }
}