package tieto.homework

import grails.transaction.Transactional

@Transactional
class AgreementService {
    public List<Agreement> getAllAgreements() {
        return Agreement.findAll()
    }

    public void createAgreements(List data) {
        data.each {
            new Agreement(
                agreementNumber: it.agreementNumber,
                customer: it.customer,
                unallocatedAmount: it.unallocatedAmount,
                totalAmount: it.totalAmount,
                totalAppliedFunds: it.totalAppliedFunds,
                currency: it.currency
            ).save(failOnError: true)
        }
    }

    public void updateAgreements(List data) {
        data.each {
            def agreement = Agreement.get(it.id)
            agreement.agreementNumber = it.agreementNumber ?: agreement.agreementNumber
            agreement.customer = it.customer ?: agreement.customer
            agreement.unallocatedAmount = it.unallocatedAmount ?: agreement.unallocatedAmount
            agreement.totalAmount = it.totalAmount ?: agreement.totalAmount
            agreement.totalAppliedFunds = it.totalAppliedFunds ?: agreement.totalAppliedFunds
            agreement.currency = it.currency ?: agreement.currency
            agreement.save(failOnError: true)
        }
    }

    public void deleteAgreements(List data) {
        data.each {
            Agreement.get(it).delete()
        }
    }
}