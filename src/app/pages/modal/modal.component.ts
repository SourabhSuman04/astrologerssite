import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnChanges {
    @Input() modalId: string = '';
    @Input() title: string = '';
    @Input() date: string = '';
    @Input() content: string = '';
    @Input() isOpen: boolean = false;
    @Output() closeModalEvent = new EventEmitter<void>();

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && changes['isOpen'].currentValue) {
            document.body.style.overflow = 'hidden';
        } else if (changes['isOpen'] && !changes['isOpen'].currentValue) {
            document.body.style.overflow = 'auto';
        }
    }

    close() {
        this.closeModalEvent.emit();
    }

    // Close modal when clicking outside of it
    onOverlayClick(event: MouseEvent) {
        if ((event.target as HTMLElement).classList.contains('modal')) {
            this.close();
        }
    }
}