import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DvLink} from '../../../common/utils/models/DvLink.model';

@Component({
  selector: 'dv-links-edit-element',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './dv-links-edit-element.component.html',
  styleUrl: './dv-links-edit-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DvLinksEditElementComponent {
  @Input() link: DvLink;
  @Input() index: number;
  @Output() removeEvent = new EventEmitter<string>();

  onRemove(): void {
    this.removeEvent.emit(this.link.id);
  }
}
