import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from '../services/file.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currentFile: File;

  constructor(public http: HttpClient, public fService: FileService, public router: Router) { }

  ngOnInit(): void { }

  selectFile(event) {
    this.currentFile = event.target.files;
  }

  async upload() {
    if (this.currentFile) {
      (await this.fService.postFile(this.currentFile)).subscribe({
        next: (suc) => {
          this.fService.answer.next(suc[0]);
          this.fService.inValid.next(suc[1]);
          this.router.navigate(["answer"]);
        },
        error: (err) => { console.log(err); alert("error") }
      });
    }
    else alert("choose a file");
  }
}