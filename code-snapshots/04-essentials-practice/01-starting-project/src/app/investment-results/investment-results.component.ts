import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  results = this.investmentService.resultsData.asReadonly();
}

// standalone: true,
// imports: [CurrencyPipe],

// results = input()
// @Input() results?: {
//   year: number;
//   interest: number;
//   valueEndOfYear: number;
//   annualInvestment: number;
//   totalInterest: number;
//   totalAmountInvested: number;
// }[];

// results = input<
//   {
//     year: number;
//     interest: number;
//     valueEndOfYear: number;
//     annualInvestment: number;
//     totalInterest: number;
//     totalAmountInvested: number;
//   }[]
// >();
