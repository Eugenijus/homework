package tieto.homework

import java.util.List;
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
			new Funding(
				fundingNumber: it.fundingNumber,
				purpose: it.purpose,
				amount: it.amount,				
				startDate: it.startDate
			).save(failOnError: true)
		}
	}
	
	public void updateFundings(List data) {
		data.each {
			def funding = Funding.get(it.id)
			funding.fundingNumber = it.fundingNumber ?: funding.fundingNumber
			funding.purpose = it.purpose ?: funding.purpose
			funding.amount = it.amount ?: funding.amount
			/* funding.startDate = format.parse(it.startDate) ?: funding.startDate */
			funding.startDate = it.startDate ?: funding.startDate
			funding.save(failOnError: true)
		}
	}
	
    public void deleteFundings(List data) {
        data.each {
            Funding.get(it).delete()
        }
    }
}
