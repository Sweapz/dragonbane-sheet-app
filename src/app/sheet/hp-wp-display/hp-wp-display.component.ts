import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { OverlayPanelModule, OverlayPanel } from 'primeng/overlaypanel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';
import { MeterGroupModule } from 'primeng/metergroup';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CharacterStats } from '../../../models/character/character-stats';
import { PowerAdjustment } from '../../../models/enums/power-adjustment';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-hp-wp-display',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    OverlayPanelModule,
    CommonModule,
    FormsModule,
    InputNumberModule,
    MeterGroupModule,
    CheckboxModule,
    ReactiveFormsModule,
  ],
  templateUrl: './hp-wp-display.component.html',
  styleUrl: './hp-wp-display.component.scss',
})
export class HpWpDisplayComponent {
  @Input() character!: CharacterStats;
  @ViewChild('hpOverlay') hpOverlay!: OverlayPanel;
  @ViewChild('wpOverlay') wpOverlay!: OverlayPanel;
  @ViewChild('deathSavesOverlay') deathSavesOverlay!: OverlayPanel;
  @Output() changeEmitter = new EventEmitter<any>();

  hpDisplay: any[] = [{ label: 'Hp', color: '#a30202', value: 0 }];
  wpDisplay: any[] = [{ label: 'Willpower', color: '#0202a3', value: 0 }];

  hpChangeValue: number = 0;
  wpChangeValue: number = 0;

  hpBarSize!: string;
  wpBarSize!: string;

  constructor() {}

  ngOnInit() {
    this.updateHpDisplay();
    this.updateWpDisplay();
  }

  public hpAdjustment(adjustment: PowerAdjustment) {
    if (adjustment === PowerAdjustment.Increment) {
      this.character.currentHp + this.hpChangeValue <
      this.character.constitution.score
        ? (this.character.currentHp += this.hpChangeValue)
        : (this.character.currentHp = this.character.constitution.score);
    } else {
      this.character.currentHp - this.hpChangeValue > 0
        ? (this.character.currentHp -= this.hpChangeValue)
        : (this.character.currentHp = 0);
    }

    this.updateHpDisplay();
    this.changeEmitter.emit();
  }

  public wpAdjustment(adjustment: PowerAdjustment) {
    if (adjustment === PowerAdjustment.Increment) {
      this.character.currentWp + this.wpChangeValue <
      this.character.willpower.score
        ? (this.character.currentWp += this.wpChangeValue)
        : (this.character.currentWp = this.character.willpower.score);
    } else {
      this.character.currentWp - this.wpChangeValue > 0
        ? (this.character.currentWp -= this.wpChangeValue)
        : (this.character.currentWp = 0);
    }

    this.updateWpDisplay();
    this.changeEmitter.emit();
  }

  public deathSaveRolled() {
    this.changeEmitter.emit();
  }

  private updateHpDisplay() {
    this.hpDisplay[0].value = this.character.currentHp;
    const percentage =
      (this.character.currentHp / this.character.constitution.score) * 100;

    this.hpBarSize = percentage + '%';
  }

  private updateWpDisplay() {
    this.wpDisplay[0].value = this.character.currentWp;
    const percentage =
      (this.character.currentWp / this.character.willpower.score) * 100;

    this.wpBarSize = percentage + '%';
  }
}
