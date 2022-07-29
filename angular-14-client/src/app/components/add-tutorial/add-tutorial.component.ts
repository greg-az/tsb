import { Component, OnInit } from '@angular/core';
import { Tutorial, Pizza } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

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

  constructor(private tutorialService: TutorialService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if( this.route.snapshot.params["id"] ) {
      var menuItem : string = this.route.snapshot.params["id"];

      //move menu item resolution factor to another function
      // clean it up with switch or something better
      if(menuItem=='16TTMeatballs'){
        var newPizza : Pizza = {
          psize: '16',
          ptopping: 'Meatballs',
          pbase: 'ThickCrust'
        }
        this.tutorial.pizzas?.push(newPizza);
      }
      if(menuItem=='16TTMustard'){
        var newPizza : Pizza = {
          psize: '16',
          ptopping: 'Mustard',
          pbase: 'ThickCrust'
        }
        this.tutorial.pizzas?.push(newPizza);
      }
      if(menuItem=='12TVeg'){
        var newPizza : Pizza = {
          psize: '12',
          ptopping: 'Veg',
          pbase: 'ThinCrust'
        }
        this.tutorial.pizzas?.push(newPizza);
      }

    }
    
  }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      pizzas: JSON.stringify(this.tutorial.pizzas)
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

  removePizza(p: Pizza): void {
    this.submitted = false;
    var t: Array<Pizza> = [];
    if (this.tutorial.pizzas) {
      t = this.tutorial.pizzas;
    }

    var index: number = t.indexOf(p, 0);
    if (index > -1) {
      t.splice(index, 1);
    }
    
    this.tutorial = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      pizzas: t,
      published: false
    };
    this.pizza = {
      psize: '',
      ptopping: '',
      pbase: ''
    };
  }
  
}