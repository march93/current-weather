import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import '../styles/CityMenu.css';
import { connect } from 'react-redux';
import { changeCity } from '../actions/Action';
import { TORONTO, MONTREAL, OTTAWA } from '../constants/Constants';

// dispatch change city action to redux store
const mapDispatchToProps = dispatch => {
    return {
        changeCity: city => dispatch(changeCity(city))
    };
};

class CityMenu extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            activeKey: TORONTO
        };
    }

    handleSelect(selectedKey) {
        // handle UI change of city menu
        this.setState( {
            activeKey: selectedKey
        });

        // store selected city in redux store
        this.props.changeCity(selectedKey);
    }

    render() {
        return (
        <div className="CityMenu">
            <Nav bsStyle="pills" className="navMenu" activeKey={this.state.activeKey} onSelect={key => this.handleSelect(key)}>
                <NavItem eventKey={TORONTO}>
                    Toronto
                </NavItem>
                <NavItem eventKey={MONTREAL}>
                    Montreal
                </NavItem>
                <NavItem eventKey={OTTAWA}>
                    Ottawa
                </NavItem>
            </Nav>
        </div>
        );
    }
}

const Menu = connect(null, mapDispatchToProps)(CityMenu);

export default Menu;