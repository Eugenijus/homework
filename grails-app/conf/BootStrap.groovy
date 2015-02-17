import tieto.homework.Agreement
import tieto.homework.Funding

class BootStrap {

    def init = { servletContext ->
        populateInitialMockData()
    }

    def void populateInitialMockData() {

		
		
		/* R3. Funding Grid should contain columns: purpose, amount, funding start date. All of these are set manually. */
		
		Funding f1 = new Funding(
			fundingNumber: 1,
			purpose: 'Project 1',
			amount: 200,
			startDate: new Date()
		)
		//f1.addToAgreement(a1)
		f1.save()
		
		Funding f2 = new Funding(
			fundingNumber: 2,
			purpose: 'Project 2',
			amount: 240,
			startDate: new Date()
		)
		//f2.addToAgreement(a2)
		f2.save()
		
		Agreement a1 = new Agreement(
			agreementNumber: 123,
			customer: 'Tieto Lietuva',
			unallocatedAmount: 100,
			totalAmount: 300,
			totalAppliedFunds: 200,
			currency: 'LTL'
		)
		a1.addToFundings(f1)
		a1.save()

		Agreement a2 = new Agreement(
			agreementNumber: 456,
			customer: 'Tieto Lietuva',
			unallocatedAmount: 5000,
			totalAmount: 10000,
			totalAppliedFunds: 5000,
			currency: 'EUR'
		)
		a2.addToFundings(f2)
		a2.save()
		
    }
}