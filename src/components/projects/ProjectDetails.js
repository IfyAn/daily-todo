import React from 'react'

function ProjectDetails(props) {
    var id=props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Title Project - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, magnam repudiandae harum quae vel ducimus suscipit dolor eveniet possimus iste quidem cupi</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Post by IfyAn</div>
                    <div>By 30th, 4pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
