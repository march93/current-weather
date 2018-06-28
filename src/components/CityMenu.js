import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import '../styles/CityMenu.css';

class CityMenu extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            activeKey: 1
        };
    }

    handleSelect(selectedKey) {
        this.setState( {
            activeKey: selectedKey
        });
    }

    render() {
        return (
        <div className="CityMenu">
            <Nav bsStyle="pills" className="navMenu" activeKey={this.state.activeKey} onSelect={key => this.handleSelect(key)}>
                <NavItem eventKey={1}>
                    Toronto
                </NavItem>
                <NavItem eventKey={2}>
                    Montreal
                </NavItem>
                <NavItem eventKey={3}>
                    Ottawa
                </NavItem>
            </Nav>
        </div>
        );
    }
}

export default CityMenu;