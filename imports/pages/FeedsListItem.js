import React, { Component } from 'react';
import { FeedData } from '../collections/data';
import { Tracker } from 'meteor/tracker';
import { Modal,Button } from 'react-materialize';

const FeedList = (dataSet) => { 
    let ans = dataSet.map((dataList)=>{
            return (<li key={dataList._id} className="feedListLi">
                    <div className="row">
                        <div className="col s12 l2"> 
                            <img className="feedImg" src={dataList.src}/> 
                            <span>Published at: <a href="http://www.lovishwadhera.com">{dataList.at}</a></span>
                        </div>
                        <div className="col s12 l10">
                            <h5>{dataList.title}</h5><br />
                            <h6 className="truncate">{dataList.description}</h6>
                            <Modal
                                trigger={<a>Read More...</a>}
                                header={dataList.title}
                            >
                                <p>{dataList.description}</p>
                            </Modal>
                            <h6>House ID:{dataList._id}</h6>
                        </div>
                    </div>
                   
                    </li>
                    )
        });
    return(ans);
    }
   
    
class FeedsListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
        }

    componentDidMount() {
        $('.modal').modal();
        Tracker.autorun(() => {
           const data = FeedData.find().fetch();
            this.setState({data});
        })
    }

    componentWillMount(){
        
    }
    
    render(){
        return( 
        <div>
            <ul>
                {FeedList(this.state.data)}
            </ul>
        </div>
        )
    }
}

export default FeedsListItem