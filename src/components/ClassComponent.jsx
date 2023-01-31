import React, {Component, Fragment} from 'react';
import axios from 'axios';
import MyDynamicTable from "./CustomDynamicTable/MyDynamicTable";


class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments:[],
        };
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/comments`
        ).then((response => {
            this.setState({ comments: response.data });
        }))
    };

    render() {
       // console.log(this.state.comments);
        //here without optimized fetch
        return (
            <Fragment>
                <span>Class Component</span>
               <MyDynamicTable posts={this.state.comments}/>
            </Fragment>
        )
    }
}

export default ClassComponent;
