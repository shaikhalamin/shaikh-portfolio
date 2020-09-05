import React from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import PersonModal from "./PersonModal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPersons, deletePerson } from "../store/actions/personAction";

class ShoppingList extends React.Component {
  componentDidMount() {
    this.props.getPersons();
  }

  handleClick = id => {
    //alert("id number is : " + id);
    this.props.deletePerson(id);
  };
  render() {
    const { persons } = this.props.persons;
    return (
      <div>
        <Container>
          <PersonModal />
          <ListGroup>
            {persons.map((item, i) => {
              return (
                <ListGroupItem key={i}>
                  <p>
                    {item.name} -- {item.category}{" "}
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={this.handleClick.bind(this, item.id)}
                    >
                      X
                    </button>
                  </p>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Container>
        <h6>Shopping List item</h6>
      </div>
    );
  }
}

ShoppingList.propTypes = {
  getPersons: PropTypes.func.isRequired,
  persons: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  persons: state.persons
});

export default connect(
  mapStateToProps,
  { getPersons, deletePerson }
)(ShoppingList);
