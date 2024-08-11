import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CharacterStats } from '../../../models/character/character-stats';
import { KinService } from '../../services/kin.service';
import { Kin } from '../../../models/character/kin';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule, OverlayPanel } from 'primeng/overlaypanel';
import { CommonModule } from '@angular/common';
import { Weakness } from '../../../models/character/weakness';

@Component({
  selector: 'app-essential-info-display',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    DropdownModule,
    OverlayPanelModule,
    CommonModule,
  ],
  templateUrl: './essential-info-display.component.html',
  styleUrl: './essential-info-display.component.scss',
})
export class EssentialInfoDisplayComponent {
  @Input() character!: CharacterStats;
  @ViewChild('kinOverlay') kinOverlay!: OverlayPanel;
  @ViewChild('weaknessOverlay') weaknessOverlay!: OverlayPanel;
  @Output() changeEmitter = new EventEmitter<any>();

  kinList: Kin[] = [];
  professionList: string[] = [];
  weaknessList: Weakness[] = [];

  constructor(private kinService: KinService) {}

  ngOnInit() {
    this.initializeProfessionList();
    this.initializeWeaknessList();
    this.kinService.getAllKin().subscribe((res) => {
      res.kin.forEach((element: Kin) => {
        this.kinList.push(element);
      });
    });
  }

  changes(event: any) {
    this.changeEmitter.emit();
  }

  private initializeProfessionList() {
    this.professionList = [
      'Artisan',
      'Bard',
      'Fighter',
      'Hunter',
      'Knight',
      'Mage',
      'Mariner',
      'Merchant',
      'Scholar',
      'Thief',
    ];
  }

  private initializeWeaknessList() {
    this.weaknessList = [
      {
        name: 'Gullible',
        description: 'I believe everything that others tell me.',
      },
      { name: 'Greedy', description: 'I want a bigger share of all treasure.' },
      { name: 'Thin-skinned', description: 'I never tolerate a provocation.' },
      { name: 'Foolhardy', description: 'I always go first into danger.' },
      {
        name: 'Fainthearted',
        description: 'I always stay at the back of the group.',
      },
      {
        name: 'Monster Slayer',
        description: 'All monsters are evil and must be slain.',
      },
      {
        name: 'Intolerant',
        description:
          'Nightkin such as orcs and goblins are evil and need to be fought.',
      },
      { name: 'Slothful', description: 'I take every chance to rest.' },
      {
        name: 'Gluttonous',
        description: 'I take every chance I get to eat something tasty.',
      },
      {
        name: 'Kleptomaniac',
        description: 'I can’t stop myself from stealing valuables.',
      },
      {
        name: 'Vain',
        description: 'I’ll help anyone who gives me praise or compliments.',
      },
      {
        name: 'Reckless',
        description:
          'I always take big risks without thought of the consequences.',
      },
      {
        name: 'Fearful of Magic',
        description: 'Magic is an evil force and mages cannot be trusted.',
      },
      {
        name: 'Craving Knowledge',
        description:
          'The hunt for knowledge is more important than my friends.',
      },
      { name: 'Child of the Wild', description: 'I never sleep indoors.' },
      {
        name: 'Boastful',
        description: 'I always exaggerate my accomplishments.',
      },
      {
        name: 'Violent',
        description: 'I resort to violence to overcome every obstacle.',
      },
      { name: 'Overbearing', description: 'I always tell others what to do.' },
      {
        name: 'Pessimist',
        description: 'I always think things will turn out for the worst.',
      },
      { name: 'Haughty', description: 'I look down on everyone I meet.' },
    ];
  }
}
