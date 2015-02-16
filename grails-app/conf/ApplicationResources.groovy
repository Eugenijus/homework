modules = {
    extJs {
        resource url:'css/ext-all.css'
        resource url:'js/ext-3.4.0/adapter/ext/ext-base.js'
        resource url:'js/ext-3.4.0/ext-all-debug.js'
    }

    css {
        resource url:'css/homework.css'
    }

    utils {
        dependsOn 'extJs, css'
        resource url:'js/utils/Constants.js'
        resource url:'js/utils/Utilities.js'
    }

    plugins {
        dependsOn 'extJs, css, utils'
        resource url:'js/plugins/GridPlugin.js'
    }

    store {
        dependsOn 'extJs, css, utils, plugins'
        resource url:'js/store/AgreementStore.js'
		resource url:'js/store/FundingStore.js'
    }

    ui {
        dependsOn 'store'
        resource url:'js/ui/AppContainer.ui.js'
        resource url:'js/ui/AgreementGrid.ui.js'
		resource url:'js/ui/FundingGrid.ui.js'
    }

    js {
        dependsOn 'ui'
        resource url:'js/application.js'
        resource url:'js/AppContainer.js'
        resource url:'js/AgreementGrid.js'
		resource url:'js/FundingGrid.js'
        resource url:'js/main.js'
    }
}