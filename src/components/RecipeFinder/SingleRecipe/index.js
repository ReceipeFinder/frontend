import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dialog} from "@blueprintjs/core";

class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let {recipe, isOpened, toggleRecipeModal} = this.props;
    return (
        <Dialog isOpen={isOpened}
                onClose={toggleRecipeModal}>
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
    )
  }
}

function mapStateToProps(state) {
  return {
    recipe: state.recipeFinder.workspace
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)