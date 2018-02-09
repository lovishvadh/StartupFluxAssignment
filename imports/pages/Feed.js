import React,{ Component } from 'react';
import { SideNav, SideNavItem, Button } from './Home.style';
import Home from './Home';
import FeedsListItem from './FeedsListItem';



export default class Feed extends Component{
    componentDidMount() {
        $('.modal').modal();
      }
    render(){ 
        return(
            <div>
                <Home />
                <div className="searchBar">
                    <div className="row">
                        <div className="input-field col s4">
                            <input type="text" placeholder="Search Keywords, Domain, Entities" className="searchInput"/>
                        </div>
                        <div className="input-field col s8">
                            
                        </div>
                    </div>
                </div>
                <br />
                <div className = "dataArea">
                    <FeedsListItem />
                </div>
            </div>
    )}
}