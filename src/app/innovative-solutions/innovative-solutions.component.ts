import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-innovative-solutions',
  imports: [CommonModule,TranslateModule],
  templateUrl: './innovative-solutions.component.html',
  styleUrl: './innovative-solutions.component.scss'
})
export class InnovativeSolutionsComponent {
  get icons( ){
    return './icons/ph_arrow-up-thin.png';
  }

  // ---
  activeIndex: number | null = null; 
  hoveredIndex: number | null = null; 
  onMouseOver(index: number) {
    this.hoveredIndex = index; 
  }

  onMouseOut() {
    this.hoveredIndex = null; 
  }

  onSelect(index: number) {
    this.activeIndex = index; 
  }

  isDimmed(index: number): boolean {
   
    return (
      (this.hoveredIndex !== null && this.hoveredIndex !== index) ||
      (this.activeIndex !== null && this.activeIndex !== index)
    );
  }

  solutions = [
    {
      icon: 'public/icons/teenyicons_tick-circle-outline.png',
      title: 'Holistic Solutions',
      description:
        'UFeed is powering the HC industry with limitless solutions through access to knowledge of well-structured methodologies and tools as well as data analytics utilization.',
    },
    {
      icon: 'public/icons/ph_user-focus-thin.png',
      title: 'User Friendly Focus',
      description:
        'Solutions are built to be easily accessible and user-friendly, so users can access UFeed solutions with ease.',
    },
    {
      icon: 'public/icons/hugeicons_customize.png',
      title: 'Custom Access Management',
      description:
        'Empowers customizing interface for each client based on their needs to validate who has which access level to do what!',
    },
    {
      icon: 'public/icons/iconamoon_shield-thin.png',
      title: 'Self Service Guided with Expertise',
      description:
        'Leveraging over 25 years of expertise, we empower organizations by equipping them with the skills to independently implement and maximize the benefits of our solutions.',
    },
    {
      icon: 'public/icons/hugeicons_stars.png',
      title: 'AI-Enabled with \n Power of Data',
      description:
        'By harnessing the power of vast datasets and advanced AI algorithms, organizations can gain unprecedented insights, optimize processes, and make informed decisions with remarkable precision',
    },
    {
      icon: 'public/icons/circum_dollar.png',
      title: 'UFeed Cost Affordability',
      description:
        'Compared to other competitors in the HC domain, UFeed represents a very affordable cost vs Value.',
    },
  ];
  
}
