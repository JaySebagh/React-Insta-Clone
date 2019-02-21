import React from 'react';

const withAuthentication = PostsPage => LoggedOut => props => {
    if (props.showFirst) {
        return <PostsPage/>
    }
    return <LoggedOut/>
}

export default withAuthentication;