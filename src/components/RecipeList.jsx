import React, { Component } from 'react';
import RecipeListItem from './RecipeList_Item';

import '../stylesheets/_RecipeList.scss';

class RecipeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          name: 'Baked Oysters',
          ingredients: ['Oysters', 'Hot Sauce', 'Lettuce', 'Moar Oysters'],
        },
        {
          name: 'Spag Bollo',
          ingredients: ['Spaghetti', 'Tomato Sauce', 'Minced Beef'],
        },
        {
          name: 'Roasted Piglet',
          ingredients: ['Piglet', 'Glaze', 'Potatoes'],
        },
      ],
    };
  }

  listItems() {
    return this.state.list.map(recipe => (
      <RecipeListItem
        key={recipe.name}
        recipe={recipe}
      />
    ));
  }

  render() {
    return (
      <div className="app-body">
        <div className="top">
          <p className="title">Recipe Box</p>
          <button className="add"><p>+</p></button>
        </div>
        <div>
          <ul>
            {this.listItems()}
          </ul>
        </div>
      </div>
    );
  }
}

export default RecipeList;
