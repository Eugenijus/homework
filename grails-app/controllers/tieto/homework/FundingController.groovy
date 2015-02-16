package tieto.homework

import grails.converters.JSON

import org.codehaus.groovy.grails.web.json.JSONArray

class FundingController {
	FundingService fundingService
	
	def getFundings = {
		def fundings = fundingService.getAllFundings()

		render ([data: fundings.collect { it.toJsonMap() }] as JSON)
	}

	def createFundings = { FundingsCommand form ->
		fundingService.createFundings(form.getSaveItemsList())

		render ([success : true] as JSON)
	}

	def updateFundings = { FundingsCommand form ->
		fundingService.updateFundings(form.getSaveItemsList())

		render ([success : true] as JSON)
	}

	def deleteFundings = { FundingsCommand form ->
		fundingService.deleteFundings(form.getDeleteItemsList())

		render ([success : true] as JSON)
	}
}

class FundingsCommand {
	String data

	static constraints = {
		data nullable: false
	}

	public getSaveItemsList() {
		def objectsList
		def parsedData = JSON.parse(data)
		if(parsedData instanceof JSONArray) {
			objectsList = parsedData.toArray()
		} else {
			objectsList = [parsedData]
		}

		return objectsList
	}

	public getDeleteItemsList() {
		def objectsList
		def parsedData = JSON.parse(data)
		if(parsedData instanceof JSONArray) {
			objectsList = parsedData
		} else {
			objectsList = [data]
		}
		return objectsList
	}
}