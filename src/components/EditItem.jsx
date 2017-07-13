import React, { Component } from 'react';

import '../stylesheets/_AddItem.scss';

class EditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      ingredients: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      name: this.props.recipe.name,
      ingredients: this.props.recipe.ingredients.join(', '),
    });
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({ [name]: event.target.value });
  }

  sendEdit() {
    if (this.state.recipe !== '' && this.state.ingredients !== '') {
      const ingredientsArray = this.state.ingredients.split(', ');
      return {
        name: this.state.name,
        ingredients: ingredientsArray,
      };
    }
  }

  render() {
    return (
      <div
        className={`form-background ${this.props.toggleHideEdit()}`}
        onClick={() => this.props.toggleEditState(false, '')}
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
                name="name"
                value={this.state.name}
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
              onClick={() => this.props.toggleEditState(false, '')}
            >Close</button>
            <input
              type="button"
              value="Save Edit"
              className="add-recipe"
              onClick={() => this.props.editRecipe(
                this.props.index,
                this.sendEdit(),
              )}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default EditItem;
