import React from 'react';

const RepoItem =({repo})=>{
    return(
        <div className="container mb-2">
        <div className="card text-center">
                <a href={repo.html_url} className="text-danger">{repo.name}</a>
        </div>
        </div>
    )
};

export default RepoItem;