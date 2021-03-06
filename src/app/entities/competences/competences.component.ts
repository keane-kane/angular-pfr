import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {
  competences = [];
  error: {'errorTitle', 'errorDesc'};
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
     this.sharedService.getAll()
      .subscribe(
        (data) => this.competences = data,
        error => this.error = error
      );
      }

}

