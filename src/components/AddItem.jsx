import React, { Component } from 'react';

import '../stylesheets/_AddItem.scss';

class AddItem extends Component {
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

  handleSubmit() {
    this.props.submitRecipe(this.state.recipe, this.state.ingredients);
    this.setState({
      recipe: '',
      ingredients: '',
    });
  }

  render() {
    return (
      <div
        className={`form-background ${this.props.toggleHideAdd()}`}
        onClick={() => this.props.toggleAddState(false)}
        role="presentation"
      >
        <div
          className="form-container"
          onClick={e => e.stopPropagation()}
          role="presentation"
        >
          <form>
            <div className="form-body">
              <p className="title2">Add Recipe</p>
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
              onClick={() => this.props.toggleAddState(false)}
            >Close</button>
            <input
              type="button"
              value="Add"
              className="add-recipe"
              onClick={
                () => this.handleSubmit()}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddItem;
