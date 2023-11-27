import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { HallService } from '../../services/hall.service';
import { NotificationService } from 'src/app/core/models/NotificationService';
import { Hall } from '../../models/hall';

@Component({
  selector: 'app-hall-form',
  templateUrl: './hall-form.component.html',
  styleUrls: ['./hall-form.component.scss']
})
export class HallFormComponent {
  f!:FormGroup;
  @Output() emitHall = new EventEmitter<Hall>;

  constructor(private hallService:HallService, protected authService:AuthService, private messageService:NotificationService){
    this.f=new FormGroup({
      rows: new FormControl(null, Validators.required),
      seats: new FormControl(null, Validators.required)
    });
  }

  submit(){
    this.hallService.create(this.f.value.rows, this.f.value.seats).subscribe(res=>{
      this.emitHall.emit(res);
      this.f.reset();
      this.messageService.successMsg('Hall added successfully.');
    });
  }
}
