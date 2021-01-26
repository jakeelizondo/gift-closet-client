import React from 'react';
import EditTagForm from '../../components/EditTagForm/EditTagForm';
import './EditTagPage.css';

export default class EditTagPage extends React.Component {
  state = { error: true };
  onTagEditSuccess = () => {
    this.props.history.push('/manage-tags');
  };

  render() {
    return (
      <React.Fragment>
        <div className="back-button-bar">
          <button onClick={this.props.history.goBack}>Back</button>
        </div>
        <section className="edit-tag-section">
          <EditTagForm
            {...this.props}
            onTagEditSuccess={this.onTagEditSuccess}
          />
        </section>
      </React.Fragment>
    );
  }
}
