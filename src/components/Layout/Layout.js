import React, {Component} from 'react';
import Aux from "../../hoc/Auxilary";
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


//class based components, access by this props bc you aren't passing a props through a function
class Layout extends Component {
    state = {
        showSideDrawer: false
    };


    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };
//don't want to access state directly but i thought you just made a variable to put that state in and then change that variable
    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return(
            <Aux>
                <Toolbar drawerToggleClicked = {this.sideDrawerToggleHandler} />
                <SideDrawer open = {this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler}/>
                <main className = {classes.Content} >
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;