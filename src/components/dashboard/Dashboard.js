import React, { Component } from 'react'
import ProjectLists from '../projects/ProjectList'
import { connect } from 'react-redux' 

class Dashboard extends Component {
    render() {
        // console.log(this.props);
        const {projects}=this.props
        return (
            <div className='dashboard container'>
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectLists projects={projects} />
                     </div>
                    <div className="col s12 m5 offset-m1">
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
         projects:state.project.projects
        // projects:state.firestore.ordered.projects
     }
}

export default connect(mapStateToProps)(Dashboard)
// export default compose(
//     connect(mapStateToProps),
//     firestoreConnect([
//         { coolection: 'projects' }
//     ])
// )(Dashboard)
