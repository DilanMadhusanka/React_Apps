import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderAction() {
        return (
            <React.Fragment>
                <button className="ui button negative">Delete</button>
                <button className="ui button">Cancel</button>
            </React.Fragment>
        );
    }

    renderContent() {
        if(!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }
        return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`
    }

    render() {
        return (
                <Modal 
                    title="Delete Stream"
                    content={this.renderContent()}
                    action={this.renderAction()}
                    onDismiss={() => history.push('/')}
                />
        );
    }
}

const mapsStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapsStateToProps, { fetchStream })(StreamDelete);