const initState={
    projects:[
        {id:'1', title:'Started job at Rizen', content: 'Work as a Programmer'},
        {id:'2', title:'Loving it', content: 'Free wifi'},
        {id:'3', title:'Saturday is a day or rest', content: 'Work free day'}
    ]
}

const projectReducer=(state=initState, action) =>{
    // switch (action.type) {
    //     case 'CREATE_PROJECT':
    //         console.log('created project', action.project);
    //         return state;
    //     case 'CREATE_PROJECT_ERROR':
    //         console.log('created project', action.err);
    //         return state;
    //     default:
    //         return state;
    // }
    return state
}

export default projectReducer