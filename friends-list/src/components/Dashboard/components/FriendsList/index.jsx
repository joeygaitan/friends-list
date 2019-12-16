import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import FunctionsContext from '../../../../context/functions';

class FriendsList extends Component {
    static contextType = FunctionsContext
    constructor(props) {
        super(props);
        this.state = {  }
    }

    postPage = () =>{
        this.props.history.push('/post')
    }

    render() { 
        return (
            <div className="col-4-md" style={{"paddingLeft": "20px"}}>
            <div>
                <h5>
                    friends Lists
                </h5>
            </div>
            <div className="card" style={{"backgroundColor": "b2dbbf"}}>
                <div className="card-body" style={{"backgroundColor": "b2dbbf"}}>
                    {
                        this.context.account.friends.map((item)=>{
                            return (
                                <>
                                    <h5 className="card-title" onClick={(id)=>this.postPage(id)}>{item.username}</h5>
                                </>
                            );
                        })
                    }
                    
                </div>
            </div>
            </div>
         );
    }
}
 
export default withRouter(FriendsList);