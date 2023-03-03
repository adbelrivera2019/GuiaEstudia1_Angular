import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segundapantalla',
  templateUrl: './segundapantalla.component.html',
  styleUrls: ['./segundapantalla.component.scss']
})
export class SegundapantallaComponent implements OnInit {
  titulo: string = ''
  constructor(
  private route: ActivatedRoute,
  ) { }
  
    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
      this.titulo = params['titulo'];
      });
      }
      }