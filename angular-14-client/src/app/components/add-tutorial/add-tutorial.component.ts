import { Component } from '@angular/core';
import { Tutorial, Pizza } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {

  pizza: Pizza = {
    psize: '',
    ptopping: '',
    pbase: ''
  }

  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false,
    pizzas: []
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      orders: JSON.stringify(this.tutorial.pizzas)
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
      pizzas: [],
      published: false
    };
  }

  newPizza(): void {
    this.submitted = false;
    this.tutorial.pizzas?.push(this.pizza);
    
    this.tutorial = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      pizzas: this.tutorial.pizzas,
      published: false
    };
    this.pizza = {
      psize: '',
      ptopping: '',
      pbase: ''
    };
  }
  
}