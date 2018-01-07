class Schema {

    constructor(rawData) {

        this.modality = rawData.modality;
        this.number = rawData.number;
        this.agency = rawData.agency;
        this.object_description = rawData.object_description;
        this.starts_in_raw = rawData.starts_in_raw;
        this.edital = rawData.edital;
    }
}

module.exports = Schema;