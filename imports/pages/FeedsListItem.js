import React, { Component } from 'react';
import { FeedData } from '../collections/data';
import { Tracker } from 'meteor/tracker';
import { Modal,Button } from 'react-materialize';

var dataSet=[{
    _id: '1',
    at:'hogwarts.com',
    title: 'Gryffindor stands for the bravest',
    src: 'https://www.hp-lexicon.org/wp-content/uploads/2015/08/shield_01-5B1-5D.jpg',
    description: 'You might belong in Gryffindor Where dwell the brave at heartTheir daring nerve, and chivalry Set Gryffindors apart'
},
{
    _id: '2',
    at:'hogwarts.com',
    title: 'Slytherin stands for the cunning',
    src: 'https://vignette.wikia.nocookie.net/harrypotter/images/d/d3/0.61_Slytherin_Crest_Transparent.png/revision/latest?cb=20161020182557',
    description: 'Or perhaps in Slytherin, You will make your real friends,Those cunning folk use any means,To achieve their ends'
},
{
    _id: '3',
    at:'hogwarts.com',
    title: 'Hufflepuff for everyone else',
    src: 'https://vignette.wikia.nocookie.net/harrypotter/images/5/50/0.51_Hufflepuff_Crest_Transparent.png/revision/latest?cb=20161020182518',
    description: 'You might belong in Gryffindor Where dwell the brave at heartTheir daring nerve, and chivalry Set Gryffindors apart'
},
{
    _id: '4',
    at:'hogwarts.com',
    title: 'Ravenclaw for the smartest',
    src: 'https://vignette.wikia.nocookie.net/harrypotter/images/2/29/0.41_Ravenclaw_Crest_Transparent.png/revision/latest?cb=20161020182442',
    description: 'You might belong in Gryffindor Where dwell the brave at heartTheir daring nerve, and chivalry Set Gryffindors apart'
}];
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