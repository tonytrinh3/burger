import React, {Component} from 'react';

import classes from "./Modal.css"
import Aux from '../../../hoc/Auxilary';
import Backdrop from '../Backdrop/Backdrop';

//we can pass anything in the children - wrapping div
//this is for the backdrop
class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show;
    }
    //to keep update summary from updating unnecessary
    componentWillUpdate () {
        console.log('[Modal] WillUpdate');
    }


    render(){
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked = {this.props.modalClosed}/>
                <div 
                    className = {classes.Modal}
                    style ={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }

}




export default Modal;