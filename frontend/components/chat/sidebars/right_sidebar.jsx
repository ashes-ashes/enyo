import React from 'react';
import MemberList from './member_list/member_list';

class RightSidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {

        return (
            <div className="right-sidebar">
                
                <MemberList />
            </div>
        )
    }
}

export default RightSidebar;

