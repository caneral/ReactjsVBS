import React from 'react';
import Aux from "../../../../../../hoc/_Aux";
import NavCollapse from './../NavCollapse';
import NavItem from './../NavItem';
import AuthService from '../../../../../../Services/AuthService';
const navGroup = (props) => {
    const user = AuthService.getCurrentUser();
    
    let navItems = '';
    if(user){
        if(props.group.role == user.role){
            if (props.group.children) {
                const groups = props.group.children;
                navItems = Object.keys(groups).map(item => {
                    item = groups[item];
                    switch (item.type) {
                        case 'collapse':
                            return <NavCollapse key={item.id} collapse={item} type="main" />;
                        case 'item':
                            return <NavItem layout={props.layout} key={item.id} item={item} />;
                        default:
                            return false;
                    }
                });
            }
        
    }
    }
    

    return (
        <Aux>
            {
               user && props.group.role == user.role &&  <li key={props.group.id} className="nav-item pcoded-menu-caption"><label>{props.group.title}</label></li> 
            }
           
            {navItems}
        </Aux>
    );
};

export default navGroup;