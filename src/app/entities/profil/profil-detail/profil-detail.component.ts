import { Router } from '@angular/router';
import { SharedService } from './../../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-detail',
  templateUrl: './profil-detail.component.html',
  styleUrls: ['./profil-detail.component.scss']
})
export class ProfilDetailComponent implements OnInit {

  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
  }

}
