import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { HeroComponent } from "../../hero/hero.component";
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-numeralogy',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './numeralogy.component.html',
  styleUrl: './numeralogy.component.css'
})
export class NumeralogyComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle("Numerology | Vedic Insights");
    this.meta.updateTag({ name: 'description', content: 'Explore Vedic Numerology – Moolank, Bhagyank, Name Numbers, meanings of numbers 1–9, and how vibrations influence personality and destiny.' });
  }

  numbers = [
    { num: 1, planet: 'Surya (Sun)' },
    { num: 2, planet: 'Chandra (Moon)' },
    { num: 3, planet: 'Guru (Jupiter)' },
    { num: 4, planet: 'Rahu' },
    { num: 5, planet: 'Buddha (Mercury)' },
    { num: 6, planet: 'Shukra (Venus)' },
    { num: 7, planet: 'Ketu' },
    { num: 8, planet: 'Shani (Saturn)' },
    { num: 9, planet: 'Mangal (Mars)' },
  ];

  letterNumbers = [
    { letter: 'A', num: 1 }, { letter: 'B', num: 2 }, { letter: 'C', num: 3 }, { letter: 'D', num: 4 },
    { letter: 'E', num: 5 }, { letter: 'F', num: 8 }, { letter: 'G', num: 3 }, { letter: 'H', num: 5 },
    { letter: 'I', num: 1 }, { letter: 'J', num: 1 }, { letter: 'K', num: 2 }, { letter: 'L', num: 3 },
    { letter: 'M', num: 4 }, { letter: 'N', num: 5 }, { letter: 'O', num: 7 }, { letter: 'P', num: 8 },
    { letter: 'Q', num: 1 }, { letter: 'R', num: 2 }, { letter: 'S', num: 3 }, { letter: 'T', num: 4 },
    { letter: 'U', num: 6 }, { letter: 'V', num: 6 }, { letter: 'W', num: 6 }, { letter: 'X', num: 5 },
    { letter: 'Y', num: 1 }, { letter: 'Z', num: 7 },
  ];

}