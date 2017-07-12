import React, { Component } from 'react';
import RecipeListItem from './RecipeList_Item';
import AddItem from './AddItem';
import EditItem from './EditItem';

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
      toggleAdd: false,
      toggleEdit: false,
    };
    this.toggleAddState = this.toggleAddState.bind(this);
    this.toggleHideAdd = this.toggleHideAdd.bind(this);
    this.submitRecipe = this.submitRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  toggleHideAdd() {
    return (this.state.toggleAdd) ? '' : 'hidden';
  }

  toggleAddState(bool) {
    this.setState({ toggleAdd: bool });
  }

  toggleHideEdit() {
    return (this.state.toggleEdit) ? '' : 'hidden';
  }

  toggleEditState(bool) {
    this.setState({ toggleEdit: bool });
  }

  // Edit state: behöver list_item state,
  // Ladda in Recipe Name och Ingredients i form field.
  // När man klickar save så updateras det List_Item utan
  // att ändra ordningen via index.

  submitRecipe(name, ingredients) {
    if (name !== '' && ingredients !== '') {
      const ingredientsArray = ingredients.split(' ');
      const stateCopy = this.state.list.slice();
      stateCopy.push(
        {
          name,
          ingredients: ingredientsArray,
        },
    );
      this.setState({ list: stateCopy });
    }
    this.toggleAddState(false);
  }

  deleteRecipe(index) {
    const stateCopy = this.state.list.slice();
    stateCopy.splice(index, 1);
    this.setState({ list: stateCopy });
  }

  listItems() {
    return this.state.list.map((recipe, index) => (
      <RecipeListItem
        key={index}
        recipe={recipe}
        delete={this.deleteRecipe}
        index={index}
      />
    ));
  }

  render() {
    return (
      <div className="app">
        <AddItem
          toggleHideAdd={this.toggleHideAdd}
          toggleAddState={this.toggleAddState}
          submitRecipe={this.submitRecipe}
        />
        {/* <EditItem
          toggleHideEdit={this.toggleHideEdit}
          toggleEditState={this.toggleEditState}
        /> */}
        <div className="container">
          <div className="app-body">
            <div className="top">
              <p className="title">Recipe Box</p>
              <button
                className="add"
                onClick={() => this.toggleAddState(true, event)}
              ><p>+</p></button>
            </div>
            <div>
              <ul>
                {this.listItems()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeList;
