import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return <li>...</li>;;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:

                return window.innerWidth > 600 ? [
                    <li key='1'><Payments /></li>,
                    <li key='2' style={{ margin: '0 0px 0px 12px' }}>Credits: {this.props.auth.credits}</li>,
                    <li key='3'><a href="/api/logout">Logout</a></li>
                ]
                    :
                    [
                        <li key='1'><Payments /></li>,
                        <li key='2' style={{ margin: '0 0px 0px 10px', fontSize: '13px' }}>Credits: {this.props.auth.credits}</li>,
                        <li key='3' style={{ fontSize: '13px' }}><a href="/api/logout">Logout</a></li>
                    ];
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo" style={window.innerWidth > 600 ? { fontSize: '35px', paddingLeft: '10px' } : { fontSize: '22px' }}>Emaily</Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);