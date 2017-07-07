import React, { Component } from 'react';

import '../stylesheets/_RecipeList.scss';

class RecipeListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
    };
  }

  toggleHide() {
    return (this.state.toggle) ? '' : 'hidden';
  }

  toggleState() {
    return (this.state.toggle) ?
      this.setState({ toggle: false }) :
      this.setState({ toggle: true });
  }

  render() {
    return (
      <li>
        <div className="recipe">
          <div
            className="title2"
            tabIndex={0}
            role="button"
            onClick={() => { this.toggleState(); }}
          >
            <p>{this.props.recipe.name}</p>
          </div>
          <div className={`ingredients ${this.toggleHide()}`}>
            <hr />
            <p className="title3">INGREDIENTS</p>
            <ul>
              {this.props.recipe.ingredients.map(ingredient => (
                <li
                  className="text-content"
                  key={ingredient}
                >{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <button
          className={`delete ${this.toggleHide()}`}
          onClick={() => { this.props.delete(this.props.index); }}
        >Delete</button>
        <button className={`edit ${this.toggleHide()}`}>Edit</button>
      </li>
    );
  }
}

export default RecipeListItem;
