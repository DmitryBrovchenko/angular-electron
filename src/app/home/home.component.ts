import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ElectronService } from '../core/services/electron/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form = new FormGroup({});

  constructor(private router: Router, private electronService: ElectronService) { }

  ngOnInit(): void { }

  save() {
    console.log(this.electronService.isElectron, this.electronService.ipcRenderer);
    this.electronService.ipcRenderer.send( 'runScript', 'powershell "notepad"');
  }

}
