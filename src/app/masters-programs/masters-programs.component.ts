import { Component, OnInit } from '@angular/core';
import { MastersPrograms } from '../models/model';
import { MastersProgramService } from '../services/masters-program/masters-program.service';

@Component({
  selector: 'app-masters-programs',
  templateUrl: './masters-programs.component.html',
  styleUrls: ['./masters-programs.component.css']
})
export class MastersProgramsComponent implements OnInit {
  mastersPrograms!: MastersPrograms[];
	
	responsiveOptions;

	constructor(private mastersProgramService: MastersProgramService) { 
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

	ngOnInit() {
		this.mastersProgramService.getMastersPrograms().then(mastersPrograms => {
			this.mastersPrograms = mastersPrograms;
		});
    }




}
