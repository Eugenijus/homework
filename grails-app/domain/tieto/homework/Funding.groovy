package tieto.homework

import java.util.Map;

import groovy.transform.ToString

/**
 * R3.: Funding Grid should contain columns: purpose, amount, funding start date. All of these are set manually.
 */
@ToString
class Funding {
	
	Integer fundingNumber
	String purpose
	BigDecimal amount
	String startDate
	//Date startDate
	
	static belongsTo = [agreement:Agreement]
	
    static constraints = {
		fundingNumber unique: true
		purpose nullable: false, blank: false
		amount nullable: false
		startDate nullable: false
    }
	
	public Map toJsonMap() {
		[
			id: this.id,
			fundingNumber: this.fundingNumber,
			purpose: this.purpose,
			amount: this.amount,
			startDate: this.startDate,
			agreementNumber: this.agreement.agreementNumber
		]
	}
}
