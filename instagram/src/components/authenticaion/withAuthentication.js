import React from 'react';

const withAuthentication = LoggedOut => PostsPage => props => {
    if (props.showFirst) {
        return <LoggedOut/>
    }
    return <PostsPage/>
}

export default withAuthentication;