/**
 * Created by ollie on 2019/6/18.
 */
import React, {Component, Fragment} from 'react'
import { CSSTransition,TransitionGroup} from 'react-transition-group';
import './style.css'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <CSSTransition
                                    timeout={1000}
                                    classNames="fade"
                                    unmountOnExit
                                    onEntered={(el)=>{el.style.color='red'}}
                                    appear={true}
                                    key={index}
                                >
                                    <div>{item}</div>
                                </CSSTransition>
                            )
                        })

                    }
                </TransitionGroup>
                <button onClick={this.handleAddItem}>ADD</button>
            </Fragment>
        )
    }

    handleAddItem() {
        this.setState((prevState)=> {
            return {
                list:[...prevState.list,'item']
            }
        })
    }
}

export default App;