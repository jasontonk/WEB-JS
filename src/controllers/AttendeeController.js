export default class AttendeeController{
    constructor() {
        this.amount = Math.floor(Math.random() * (0 - 4 + 1)) + 4;
    }

    async getAttendees() {


        let persons = [
            {
                name: {
                    first: 'Vincent',
                    last: 'Jamont'
                }
            },
            {
                name: {
                    first: 'Jason',
                    last: 'Tonk'
                }
            }
        ];

            try {
                const response = await fetch(`https://randomuser.me/api?results=${this.amount}&nat=nl`)
                persons = (await response.json()).results;
            } catch (e) {
            }


        return {
            persons: persons.map(person => {
                return {
                    name: `${person.name.first} ${person.name.last}`
                }
            })
        }

    }
}