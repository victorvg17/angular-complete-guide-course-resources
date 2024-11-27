import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}

// standalone: true,
// imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],

// import { HeaderComponent } from './header/header.component';
// import { UserInputComponent } from './user-input/user-input.component';
// import { InvestmentResultsComponent } from './investment-results/investment-results.component';

// resultsData?: {
//   year: number;
//   interest: number;
//   valueEndOfYear: number;
//   annualInvestment: number;
//   totalInterest: number;
//   totalAmountInvested: number;
// }[];
// resultsData = signal<
//   | {
//       year: number;
//       interest: number;
//       valueEndOfYear: number;
//       annualInvestment: number;
//       totalInterest: number;
//       totalAmountInvested: number;
//     }[]
//   | undefined
// >(undefined);
