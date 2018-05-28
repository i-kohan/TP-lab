import React from 'react'
import {
    Form,
    Input,
    Button,
    Table,
    InlineMessage,
} from './../../components/components'
import { MoonLoader } from 'react-spinners'
import {
    ALL_FORMS
} from './../../constants'
import { sendRequest, getRequests } from '../../services/requestsService'

class UserHome extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            MAIN_INFO: {},
            PERSONAL_INFO: {},
            isLoading: false,
            errors: []
        }

        this.onChange = this.onChange.bind(this)
        this.handleCreditRequest = this.handleCreditRequest.bind(this)
    }

    onChange(fieldName, formName) {
        return (e) => {
            const value = e.target.value
            let form = { ...this.state[formName] }
            form[fieldName] = value
            this.setState({ [formName]: form })
        } 
    }

    validate(ALL_FORMS, forms) {
        return Object.entries(ALL_FORMS)
            .every(([key, value]) => {
                return Object.entries(value.fields)
                    .every(([value]) => {
                        if (value === 'status') return true
                        return !!forms[key][value]
                    })
            })
    }

    async handleCreditRequest() {
        const user = this.props.user
        const { MAIN_INFO, PERSONAL_INFO } = this.state
        const isValid = this.validate(ALL_FORMS, { MAIN_INFO, PERSONAL_INFO } )
        if (!isValid) {
            this.setState({ errors: ['Please, full fill all the fields!'] })
            return
        }
        this.setState({ isLoading: true, errors: [] })
        await sendRequest({
            username: user.username,
            ...this.state,
        })
        this.setState({ isLoading: false, MAIN_INFO: {}, PERSONAL_INFO: {} })

    }

    buildFields(fields, formName) {
        return Object.entries(fields)
            .map(([fieldName, value]) => {
                if (fieldName === 'status') {
                    return
                }
                return (
                    <Input 
                        onChange={this.onChange(fieldName, formName)}
                        placeholder={value.placeholder}
                        required={true}
                        label={value.label}
                        className="form__input"
                        type={value.type} />
                )
            })
    }

    buildForms(forms) {
        return Object.entries(forms)
            .map(([formName, value]) => {
                const fields = this.buildFields(value.fields, formName)
                return (
                    <Form
                        key={value.title}
                        title={value.title}
                        className="user-form">
                        {fields}
                    </Form>
                    )
                }
            )
    }

    renderErrors(errors) {
        return errors.map(error => (
            <InlineMessage>
                {error}
            </InlineMessage>
        ))
    }

    render() {
        const { isLoading, errors } = this.state  

        if (isLoading) {
            return (
                <div className="center">
                    <div className="spinner">
                        <MoonLoader size={70} />
                    </div>
                </div>
            )
        }

        const forms = this.buildForms(ALL_FORMS)
        return (
            <React.Fragment>
                {errors && this.renderErrors(errors)}
                {forms}
                <Button
                    onClick={this.handleCreditRequest}
                    label="Request for credit"
                    className="requestCredit"
                    disabled={false} />
            </React.Fragment>
        )
    }
}

export default UserHome
