import React from "react";
import PropTypes from 'prop-types'
import TrelloButton from "./TrelloButton";
import { connect } from "react-redux";
import { addList, addCard } from "../action";
import TrelloForm from "./TrelloForm";
import TrelloOpenForm from "./TrelloOpenForm";

class TrelloCreate extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      formOpen: false,
      text: ""
    }
  }

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = e => {
    this.setState({
      formOpen: false
    });
  };

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      });
      dispatch(addList(text));
    }

    return;
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;
    if (text) {
      this.setState({
        text: ""
      });
      dispatch(addCard(listID, text));
    }
  };
  render() {
    const { text } = this.state;
    const { list } = this.props;
    return this.state.formOpen ? (
      <TrelloForm
        text={text}
        onChange={this.handleInputChange}
        closeForm={this.closeForm}
      >
        <TrelloButton onClick={list ? this.handleAddList : this.handleAddCard}>
          {list ? "Добавить список" : "Добавить задачу"}
        </TrelloButton>
      </TrelloForm>
    ) : (
      <TrelloOpenForm list={list} onClick={this.openForm}>
        {list ? "Добавить еще один список" : "Добавить еще одину задачу"}
      </TrelloOpenForm>
    );
  }
}
TrelloCreate.propTypes={
  dispatch:PropTypes.func,
  listID:PropTypes.string,
  list:PropTypes.bool
}
export default connect()(TrelloCreate);
