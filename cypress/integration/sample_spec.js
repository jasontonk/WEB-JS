describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})

describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('http://localhost:63342/WEB-JS/index.html?_ijt=tvc6kspcugmqu5f9qudnr6cjm6')
    })
})

describe('My First Test', () => {
    it('clicks the link "type"', () => {
        cy.visit('http://localhost:63342/WEB-JS/index.html?_ijt=tvc6kspcugmqu5f9qudnr6cjm6')

        cy.contains('Volgende').click()
    })
})

describe('My First Test', () => {
    it('clicks the link "type"', () => {
        cy.visit('http://localhost:63342/WEB-JS/index.html?_ijt=tvc6kspcugmqu5f9qudnr6cjm6')

        cy.contains('Simulation').click()
        cy.contains('Start Simulation')
    })
})

describe('My First Test', () => {
    it('clicks the link "type"', () => {
        cy.visit('http://localhost:63342/WEB-JS/index.html?_ijt=tvc6kspcugmqu5f9qudnr6cjm6')

        cy.get('.input').type('1')
        cy.get('.extraInputField1').type('')
        cy.contains('Start Simulation')
    })
})

