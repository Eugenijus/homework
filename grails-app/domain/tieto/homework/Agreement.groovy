package tieto.homework

import groovy.transform.ToString

@ToString
class Agreement {

    BigDecimal agreementNumber
    String customer
    BigDecimal unallocatedAmount
    BigDecimal totalAmount
    BigDecimal totalAppliedFunds
    String currency
	
	static hasMany = [fundings:Funding]

    static constraints = {
        agreementNumber unique: true
        customer nullable: false, blank: false
        unallocatedAmount nullable: false
        totalAmount nullable: false
        totalAppliedFunds nullable: false
        currency nullable: false, blank: false
    }

    public Map toJsonMap() {
        [
            id: this.id,
            agreementNumber: this.agreementNumber,
            customer: this.customer,
            unallocatedAmount: this.unallocatedAmount,
            totalAmount: this.totalAmount,
            totalAppliedFunds: this.totalAppliedFunds,
            currency: this.currency
        ]
    }
	
}
