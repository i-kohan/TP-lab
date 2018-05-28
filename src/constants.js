export const MAIN_INFO = {
    title: "Main information",
    fields: {
        name: {
            label: 'Name',
            type: 'text',
            placeholder: 'Enter name',
        },
        surname: {
            label: 'Surname',
            type: 'text',
            placeholder: 'Enter surname',
        },
        job: {
            label: 'Job',
            type: 'text',
            placeholder: 'Enter job',
        },
        creditAmount: {
            label: 'Credit amount',
            type: 'number',
            placeholder: 'Enter credit amount',
        },
        expiretionDate: {
            label: 'Expiretion date',
            type: 'date',
            placeholder: 'Enter date',
        },
        status: {
            label: 'Status',
            type: 'text',
        }
    },
}

export const PERSONAL_INFO = {
    title: "Personal info",
    fields: {
        age: {
            label: 'Age',
            type: 'number',
            placeholder: 'Age name',
        },
        salary: {
            label: 'Salary',
            type: 'number',
            placeholder: 'Salary surname',
        },
        job: {
            label: 'Job',
            type: 'text',
            placeholder: 'Enter job',
        },
    },
}

export const ALL_FORMS = {
    MAIN_INFO,
    PERSONAL_INFO,
}