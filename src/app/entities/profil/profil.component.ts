import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  profils: [] = [];
  error = '';
  profilForm: FormGroup;
  edit = 'form-control disabled';
  @ViewChild('td') elRefs: ElementRef;
  uploadError: any;
  constructor(
    private sharedService: SharedService,
    private elRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.sharedService.url = '/api/admin/profils';
  }

  ngOnInit(): void {
    this.sharedService.getAll().subscribe((profils) => {
      this.profils = profils;
      console.log(this.profils);
    });

  }

  onDelete(id: number): void {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.sharedService.delete(+id).subscribe(
        (res) => {
          console.log(res);
          this.ngOnInit();
        },
        (error) => (this.error = error)
      );
    }
  }
  onChange(id: number, input: FormControl): void {
    this.sharedService.getById(+id).subscribe((res) => {
      this.profilForm.setValue({
        id: res.id,
        libelle: res.libelle,
        archive: res.archive,
        users: res.users,
      });
    });

    console.log(this.profilForm);

    if (id) {
      this.sharedService.update(this.profilForm, +id).subscribe(
        (res) => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/admin/profil']);
          }
        },
        (error) => (this.error = error)
      );
    }
  }


  onEdit(id: number, td): any {
    console.log(td);

    const el = td.textContent = 'rrrrrrrr';

    console.log(el);

    // const el = this.elRef.nativeElement.querySelectorAll('.form-control')[
    //   id - 1
    // ];
    // el.focus();
    // this.renderer.removeClass(el, 'disabled');
    // if (!el.target) {
    //   this.renderer.addClass(el, 'disabled');
    //   console.log(el);
    // }
  }


}



