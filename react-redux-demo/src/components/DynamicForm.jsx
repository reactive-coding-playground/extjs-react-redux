/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { FormGroup, FormControl, ControlLabel, HelpBlock, ButtonToolbar, Button } from 'react-bootstrap';

class DynamicForm extends Component {

    renderField = config => {
        const {
            fields: {
                [config.name]: field
            }
        } = this.props;

        const isInvalid = field.touched && !!field.error;

        return (
            <FormGroup key={config.name} validationState={isInvalid ? "error" : null}>
                <ControlLabel>{config.label}</ControlLabel>
                <FormControl type="text" placeholder={config.placeholder} {...field} />
                {isInvalid && <HelpBlock>{field.error}</HelpBlock>}
            </FormGroup>
        );
    }

    render() {
        const {
            handleSubmit,
            onFormSubmit,
            meta
        } = this.props;

        return (
            <form onSubmit={handleSubmit(onFormSubmit)}>
                {meta.map(config => this.renderField(config))}
                <ButtonToolbar>
                    <Button type="submit" bsStyle="primary">Update</Button>
                </ButtonToolbar>
            </form>
        );
    }
}

const validate = (values, props) => {
    const errors = {};

    props.meta.forEach(config => {
        const name = config.name;
        if (config.required && !values[name]) {
            errors[name] = 'This field is required';
        }
    });

    return errors;
}

const mapStateToProps = (state, ownProps) => ({
    initialValues: ownProps.data
});

export default reduxForm({
    form: 'dynamic',
    validate
}, mapStateToProps)(DynamicForm);