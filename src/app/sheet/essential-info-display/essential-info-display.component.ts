import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
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
    CommonModule
  ],
  templateUrl: './essential-info-display.component.html',
  styleUrl: './essential-info-display.component.scss',
})
export class EssentialInfoDisplayComponent {
  @Input() character!: CharacterStats;
  @ViewChild('overlay') overlay!: OverlayPanel; 
  @Output() changeEmitter = new EventEmitter<any>();

  kinList: Kin[] = [];
  professionList: string[] = [];

  constructor(private kinService: KinService) {
  }

  ngOnInit() {
    this.initializeProfessionList();
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
      "Artisan",
      "Bard",
      "Fighter",
      "Hunter",
      "Knight",
      "Mage",
      "Mariner",
      "Merchant",
      "Scholar",
      "Thief"
    ];
  }
}
