import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
title$ = this.navBarService.title;

  constructor(private navBarService: NavbarService, public router: Router) { }

  ngOnInit(): void {
  }

}
