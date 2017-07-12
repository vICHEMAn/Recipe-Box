import React, { Component } from 'react';

import '../stylesheets/_AddItem.scss';

class EditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: '',
      ingredients: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({ [name]: event.target.value });
  }

  render() {
    return (
      <div
        className={`form-background ${this.props.toggleHideEdit()}`}
        onClick={() => this.props.toggleEditState(false)}
        role="presentation"
      >
        <div
          className="form-container"
          onClick={e => e.stopPropagation()}
          role="presentation"
        >
          <form>
            <div className="form-body">
              <p className="title2">Edit Recipe</p>
              <hr />
              <p className="title3">RECIPE</p>
              <input
                type="text"
                name="recipe"
                value={this.state.recipe}
                onChange={this.handleChange}
              />
              <p className="title3">INGREDIENTS</p>
              <input
                type="text"
                name="ingredients"
                value={this.state.ingredients}
                onChange={this.handleChange}
              />
            </div>
            <button
              type="button"
              className="close"
              onClick={() => this.props.toggleEditState(false)}
            >Close</button>
            <input
              type="button"
              value="Save Edit"
              className="add-recipe"
              onClick={() => this.handleSubmit()}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default EditItem;
