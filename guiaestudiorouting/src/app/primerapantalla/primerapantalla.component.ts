import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
selector: 'app-primerapantalla',
templateUrl: './primerapantalla.component.html',
styleUrls: ['./primerapantalla.component.scss']
})
export class PrimerapantallaComponent implements OnInit {
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