import React from 'react';

const ApprovalCard = (props) =>{
    // console.log(props.children);
    return(
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );

};

//we have written this so that we can make use of this component in other locations inside our project
export default ApprovalCard;