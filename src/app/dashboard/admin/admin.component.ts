import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild('navbar') elRefs: ElementRef;
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }


  jquery(event): void{


    const el = this.elRef.nativeElement.querySelector('#sidebar');

    this.renderer.addClass(el, 'active');

    $('#sidebarCollapse').on('click', () => {
        $('#sidebar').toggleClass('active');
    });

  }

}
