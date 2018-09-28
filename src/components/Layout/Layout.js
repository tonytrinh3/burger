import React, {Component} from 'react';
import Aux from "../../hoc/Auxilary";
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


//class based components, access by this props bc you aren't passing a props through a function
class Layout extends Component {
    state = {
        showSideDrawer: true
    };


    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    render() {
        return(
            <Aux>
                <Toolbar />
                <SideDrawer open = {this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler}/>
                <main className = {classes.Content} >
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;