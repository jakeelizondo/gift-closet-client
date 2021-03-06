import React from 'react';
import AddTagForm from '../../components/AddTagForm/AddTagForm';
import './AddTagPage.css';

export default class AddTagPage extends React.Component {
  onTagPostSuccess = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <React.Fragment>
        <div className="back-button-bar">
          <button onClick={this.props.history.goBack}>Back</button>
        </div>
        <section className="add-new-tag-section">
          <AddTagForm onTagPostSuccess={this.onTagPostSuccess} />
        </section>
      </React.Fragment>
    );
  }
}
