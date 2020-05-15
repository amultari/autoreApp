export class Autore {
    constructor(
        public id?: number,
        public nome?: string,
        public cognome?: string,
        public dataNascita?: Date,
        public nazionalita?: string,
        public inAttivita: boolean = false
    ) { }
}
