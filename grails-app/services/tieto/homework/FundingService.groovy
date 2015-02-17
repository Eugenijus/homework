package tieto.homework

import java.util.List;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;

import grails.transaction.Transactional

@Transactional
class FundingService {
	def format = new SimpleDateFormat("yyyy-dd-MM")
	
	public List<Funding> getAllFundings(){
		return Funding.findAll()
	}
	
	public void createFundings(List data) {
		data.each {
			println ("createFundings: it " + it.toString())
			Funding f1 = new Funding(
				fundingNumber: it.fundingNumber,
				purpose: it.purpose,
				amount: it.amount,				
				startDate: it.startDate
			)
			def a1 = Agreement.findByAgreementNumber(it.agreementNumber)
			println ("createFundings: found " + a1.toString())
			
			f1.agreement = a1
			f1.save(failOnError: true)
						
			a1.addToFundings(f1)
			a1.save(failOnError: true)
			
		}
	}
	
	public void updateFundings(List data) {
		data.each {
			println ("updateFundings: it " + it.toString())
			def funding = Funding.get(it.id)
			funding.fundingNumber = it.fundingNumber ?: funding.fundingNumber
			funding.purpose = it.purpose ?: funding.purpose
			funding.amount = it.amount ?: funding.amount
			/* funding.startDate = format.parse(it.startDate) ?: funding.startDate */
			funding.startDate = it.startDate ?: funding.startDate
			//funding.agreement.agreementNumber = it.agreementNumber ?: funding.agreement.agreementNumber
			funding.save(failOnError: true)
			
			def a1 = Agreement.findByAgreementNumber(it.agreementNumber)
			println ("updateFundings: found " + a1.toString())
			a1.addToFundings(funding)
			a1.save(failOnError: true)
		}
	}
	
    public void deleteFundings(List data) {
        data.each {
            Funding.get(it).delete()
        }
    }
}
