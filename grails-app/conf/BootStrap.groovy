import tieto.homework.Agreement
import tieto.homework.Funding

class BootStrap {

    def init = { servletContext ->
        populateInitialMockData()
    }

    def void populateInitialMockData() {

        new Agreement(
            agreementNumber: 123,
            customer: 'Tieto Lietuva',
            unallocatedAmount: 100,
            totalAmount: 300,
            totalAppliedFunds: 200,
            currency: 'LTL'
        ).save()

        new Agreement(
            agreementNumber: 456,
            customer: 'Tieto Lietuva',
            unallocatedAmount: 5000,
            totalAmount: 10000,
            totalAppliedFunds: 5000,
            currency: 'EUR'
        ).save()
		
		/* - Funding Grid should contain columns: purpose, amount, funding start date. All of these are set manually. */
		
		new Funding(
			fundingNumber: 1,
			purpose: 'Project 1',
			amount: 200,
			startDate: new Date()
		).save()		
		
    }
}