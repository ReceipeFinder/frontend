import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ContextMenu, MenuFactory, MenuItemFactory, Dialog, Button} from "@blueprintjs/core";
import API from '../../../utils/APIHelper'
import './styles.less'

class ListItem extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      recipeModalOpened: false
    }
    
    this.toggleRecipeModal = this.toggleRecipeModal.bind(this);
    this.addToDoneList = this.addToDoneList.bind(this);
    this.addToFavourites = this.addToFavourites.bind(this);
    this.addToTodoList = this.addToTodoList.bind(this);
  }
  
  toggleRecipeModal() {
    this.setState({recipeModalOpened: !this.state.recipeModalOpened})
  }
  
  addToFavourites() {
    API.post(`/recipes/favourites/${this.props.recipe.id}`)
  }
  
  addToTodoList() {
    API.post(`/recipes/todo/${this.props.recipe.id}`)
  }
  
  addToDoneList() {
    API.post(`/recipes/done/${this.props.recipe.id}`)
  }
  
  removeFromFavourites() {
    API.remove(`/recipes/favourites/${this.props.recipe.id}`)
  }
  
  removeFromDone() {
    API.remove(`/recipes/done/${this.props.recipe.id}`)
  }
  
  removeFromTodo() {
    API.remove(`/recipes/todo/${this.props.recipe.id}`)
  }
  
  render() {
    let {recipe} = this.props;
    return (
      <div className="rf__list-item__wrapper clickable">
        <div className="block"
             onClick={this.toggleRecipeModal}
             onContextMenu={(e) => {
               e.preventDefault();
               let children = [
                 MenuItemFactory({
                   key: 1,
                   onClick: () => {
                     recipe.user_recipe.favourite ? this.removeFromFavourites() : this.addToFavourites()
                   },
                   text: recipe.user_recipe.favourite ? "Remove from list: favourites" : "Add to list: favourites"
                 }),
                 MenuItemFactory({
                   key: 2,
                   onClick: () => {
                     recipe.user_recipe.done ? this.removeFromDone() :this.addToDoneList()
                   },
                   text: recipe.user_recipe.done ? "Remove from list: done": "Add to list: done"
                 }),
                 MenuItemFactory({
                   key: 3,
                   onClick: () => {
                     recipe.user_recipe.todo ? this.removeFromTodo() : this.addToTodoList()
                   },
                   text: recipe.user_recipe.todo ? "Remove from list: todo" : "Add to list: to do"
                 })
               ]
          
               const menu = MenuFactory({
                 children: children
               });
               ContextMenu.show(menu, {left: e.clientX, top: e.clientY});
             }}>
          
          <div className="rf__list-item">
            <div className="rf__list-item__img__wrapper">
              {recipe.image_url ? <img src={recipe.image_url}/> : null}
            </div>
            
            <p>{recipe.title}</p>
          </div>
        </div>
        <Dialog isOpen={this.state.recipeModalOpened}
                onClose={this.toggleRecipeModal}>
          <div className="pt-dialog-body">
            <div className="recipe__image__wrapper">
              <img src={recipe.image_url} alt={recipe.image_url}/>
            </div>
            <div>
              <h3>{recipe.title}</h3>
            </div>
            <div><a href={recipe.source_url}>Source: {recipe.source_url}</a></div>
          </div>
          <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
              <div className="recipe__icons__wrapper">
                <div className="recipe__icon clickable">
                  <i className="fa fa-check fa-2x" aria-hidden="true"/>
                </div>
                <div className="recipe__icon clickable">
                  <i className="fa fa-heart-o fa-2x" aria-hidden="true"/>
                </div>
                <div className="recipe__icon clickable">
                  <i className="fa fa-bookmark-o fa-2x" aria-hidden="true"/>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)