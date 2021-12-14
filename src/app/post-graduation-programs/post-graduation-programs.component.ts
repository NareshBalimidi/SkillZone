import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostGraduationPrograms } from '../models/model';
import { PostGraduationService } from '../services/post-graduation/post-graduation.service';

@Component({
  selector: 'app-post-graduation-programs',
  templateUrl: './post-graduation-programs.component.html',
  styleUrls: ['./post-graduation-programs.component.css']
})
export class PostGraduationProgramsComponent implements OnInit {

  postGraduationPrograms!: PostGraduationPrograms[];
	
	responsiveOptions;

	constructor(private postGraduationService: PostGraduationService) { 
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
		this.postGraduationService.getPostGraduationPrograms().then(postGraduationPrograms => {
			this.postGraduationPrograms = postGraduationPrograms;
		});
    }

}
