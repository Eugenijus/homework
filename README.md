Background
==============
As a service provider, the company uses agreements to handle order related data. Project managers handle agreements and their funding. Firstly, he applies the value of a total amount of an agreement and then a funding is deducted from it for different jobs done. Till now, project managers could modify values of total amount (value of an agreement) and total applied funds (funding applied on that agreement) manually, but the clients wanted to also see where the money was spent for concrete services, so, it was decided to implement additional functionality that would reflect changes in the funding that was applied for smaller tasks that make up the agreement.

The idea is to have the same agreement functionality but have funding handling done by the newly developed module. Each agreement would have its own funding, and each funding item would have information concerning a concrete task being done.

Provided base implementation
==============
The provided implementation is a functional prototype which imitates a business tool whose purpose is to show order management data in the main page of the website. Mock sales data is injected via BootStrap.groovy according to domain models and then represented in the client-side grid, defined in AgreementGrid.js and AgreementGrid.ui.js files.

Requirements for implementation
==============
- R1. ~~Create Funding Grid below the Agreements Grid, so that each grid would take half of the browser's window.~~
- R2. Funding Grid should load data when agreement line is selected
- R3. ~~Funding Grid should contain columns: purpose, amount, funding start date. All of these are set manually.~~
- R4. ~~It should be possible to do CRUD operations on Funding Grid~~
- R5. Total applied funds (Agreement.totalAppliedFunds) column in agreements grid should no longer be editable
- R6. The sum of Funding Grid amount lines should be show in total applied funds column in Agreements Grid (Agreement.totalAppliedFunds).
- R7. If user tries to save total applied funds which exceed total amount, show a message box informing the user that such action is not allowed, and prohibit him from saving any data.

Optional tasks
==============
- O1. When Agreement Grid loads, select first row in this grid, and load fundings for it.
- O2. Add ExtJs Load Mask functionality on Load and Save events for both grids.
- O3. Add filtering to the columns of the Agreements grid.

References
==============
- It is recommended to use 'Groovy/Grails Tool Suite' (http://spring.io/tools/ggts) as your IDE. I used ggts-351: http://download.springsource.com/release/STS/3.5.1/dist/e4.4/groovy-grails-tool-suite-3.5.1.RELEASE-e4.4-win32.zip
- The client-side framework is ExtJS 3.4. The documentation can be found at http://docs.sencha.com/extjs/3.4.0/
- The server-side is coded using Grails 2.3.8. The documentation can be found at http://grails.org/doc/2.3.x/


Deliverables
==============
Packaged git repo with implementation and any additional resources you see fit.


Other considerations
==============
The implementation you create should **not be made publicly available** or otherwise shared/distributed to any outside parties.
