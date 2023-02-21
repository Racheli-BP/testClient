import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { PersonModel } from '../models/person-model';
import { FileService } from '../services/file.service';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  dataSource1: Person[];
  dataSource2: PersonModel[];

  constructor(public fService: FileService) { }

  ngOnInit(): void {
    this.fService.answer.subscribe(suc => { this.dataSource1 = suc; })
    this.fService.inValid.subscribe(suc => { this.dataSource2 = suc; })
    }

  displayedColumns: string[] = ['full name', 'tz', 'yearOfBirth', 'id'];

  // את הקומפוננטה הזאת לא הספקתי לגמור
  // ..נגמר הזמן באמצע
}
