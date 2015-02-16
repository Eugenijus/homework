package tieto.homework

import grails.converters.JSON
import org.codehaus.groovy.grails.web.json.JSONArray

class AgreementController {
    AgreementService agreementService

    def getAgreements = {
        def agreements = agreementService.getAllAgreements()

        render ([data: agreements.collect { it.toJsonMap() }] as JSON)
    }

    def createAgreements = { AgreementsCommand form ->
        agreementService.createAgreements(form.getSaveItemsList())

        render ([success : true] as JSON)
    }

    def updateAgreements = { AgreementsCommand form ->
        agreementService.updateAgreements(form.getSaveItemsList())

        render ([success : true] as JSON)
    }

    def deleteAgreements = { AgreementsCommand form ->
        agreementService.deleteAgreements(form.getDeleteItemsList())

        render ([success : true] as JSON)
    }
}

class AgreementsCommand {
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