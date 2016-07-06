/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import DynamicForm from './DynamicForm';
import * as actions from '../actions';

class EntityForm extends Component {

    onFormSubmit(values) {
        this.props.update(values);
    }

    render() {
        const {
            meta,
            data
        } = this.props;

        return <DynamicForm onFormSubmit={this.onFormSubmit.bind(this)}
                            fields={meta.map(config => config.name)}
                            meta={meta}
                            data={data}/>
    }
    
}

const mapStateToProps = ({ entity }) => {
    return { ...entity };
};

export default connect(mapStateToProps, actions)(EntityForm);