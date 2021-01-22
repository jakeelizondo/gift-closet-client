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
      <section className="edit-tag-section">
        <div className="back-button-bar">
          <button onClick={this.props.history.goBack}>Back</button>
        </div>
        <EditTagForm {...this.props} onTagEditSuccess={this.onTagEditSuccess} />
      </section>
    );
  }
}
