import React from 'react';

const withAuthentication = LoggedOut => PostsPage => props => {
    if (localStorage.getItem('user')) {
        return <LoggedOut/>
    }
    return <PostsPage/>
}

export default withAuthentication;