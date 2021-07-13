import { Container, ListGroup, ListGroupItem, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { v1 as uuidv1 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux'
import { getItems, deleteItem, addItem } from "../actions/itemActions";
import { useState, useEffect } from "react";



function ShoppingList() {

    const [name, setName] = useState({})

    const dispatch = useDispatch()



    const item = useSelector(state => state.item)

    useEffect(() => {
        dispatch(getItems())
    }, [])

    function handleOnSubmit(e) {
        e.preventDefault()
        dispatch(addItem(name))


    }

    function handleOnChange(e) {
        setName({ name: e.target.value })
    }


    return (
        <div>
            <Container>
                <form onSubmit={handleOnSubmit}>
                    <input type="text" value={name.name} onChange={handleOnChange} ></input>
                    <Button type="submit">Add Item</Button>
                </form>




                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {item.map(minilist => {
                            return (
                                <CSSTransition key={minilist._id} timeout={500}>
                                    <ListGroupItem>
                                        <Button
                                            onClick={
                                                () => {
                                                    dispatch(deleteItem(minilist._id))
                                                    console.log(minilist._id)

                                                }
                                            }
                                        >
                                            X
                                        </Button>
                                        {minilist.name}
                                    </ListGroupItem>
                                </CSSTransition>
                            )

                        })}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        </div >
    )

}

// ShoppingList.propTypes = {
//     getItems: PropTypes.func.isRequired,

// }


// const mapStateToProps = (state) => ({
//     item: state.item
// })


export default ShoppingList