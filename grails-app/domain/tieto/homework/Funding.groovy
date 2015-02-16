package tieto.homework

import java.util.Map;

/** 
 * Funding Grid should contain columns: purpose, amount, funding start date. All of these are set manually. 
 */
class Funding {
	
	Integer fundingNumber
	String purpose
	BigDecimal amount
	String startDate
	//Date startDate
		
    static constraints = {
		fundingNumber unique: true
		purpose nullable: false, blank: false
		amount nullable: false
		startDate nullable: false
    }
	
	public Map toJsonMap() {
		[
			fundingNumber: this.fundingNumber,
			purpose: this.purpose,
			amount: this.amount,
			startDate: this.startDate
		]
	}
}
