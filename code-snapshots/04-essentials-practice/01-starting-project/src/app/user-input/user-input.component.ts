import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvestment = signal('1000');
  enteredAnnualInvestment = signal('100');
  enteredExpecteReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpecteReturn(),
      duration: +this.enteredDuration(),
    });

    // reset values on submission
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpecteReturn.set('5');
    this.enteredDuration.set('10');
  }
}

// @Output() calculate = new EventEmitter<InvestmentInput>();
// calculate = output<InvestmentInput>();

// this.calculate.emit({
//   initialInvestment: +this.enteredInitialInvestment(),
//   annualInvestment: +this.enteredAnnualInvestment(),
//   expectedReturn: +this.enteredExpecteReturn(),
//   duration: +this.enteredDuration(),
// });
