import React from 'react'

function ProjectSummary({project}) {
    return (
        <div>
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted By Empire</p>
                    <p className="grey-text">30th Sep. ,  2019</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary