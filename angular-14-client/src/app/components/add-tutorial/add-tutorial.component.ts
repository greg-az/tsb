import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {

  tutorial: Tutorial = {
    title: '',
    description: '',
    psize: '',
    psizeS: '',
    ptopping: '',
    ptoppingS: '',
    pbase: '',
    pbaseS: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      psize: this.tutorial.psize,
      pbase: this.tutorial.pbase,
      ptopping: this.tutorial.ptopping,
      psizeS: this.tutorial.psizeS,
      pbaseS: this.tutorial.pbaseS,
      ptoppingS: this.tutorial.ptoppingS
    };

    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      psize: '',
      ptopping: '',
      pbase: '',
      psizeS: '',
      ptoppingS: '',
      pbaseS: '',
      published: false
    };
  }

}