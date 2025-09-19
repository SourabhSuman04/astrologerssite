import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  post: any;

  // Mock posts (replace later with API call)
  blogPosts = [
    {
      id: 1,
      postTitle: 'Journey Through the Stars',
      publishDate: new Date(),
      imagePath: 'assets/img/1.png',
      content: `
        <p>The universe has always been a source of wonder...</p>
        <p>In ancient times, astronomers mapped the night skies with fascination.</p>
        <p>Today, science and spirituality merge to uncover new cosmic truths.</p>
      `
    },
    {
      id: 2,
      postTitle: 'The Secrets of Astrology',
      publishDate: new Date(),
      imagePath: 'assets/images/blog2.jpg',
      content: `
        <p>Astrology is more than zodiac signs...</p>
        <p>It represents the alignment of celestial bodies and their influence.</p>
      `
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.blogPosts.find(p => p.id === id);
  }

  goBack() {
    this.router.navigate(['/blog']);
  }
}