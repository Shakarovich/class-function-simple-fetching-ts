import React, {Component, Fragment} from 'react';
import axios from 'axios';
import MyDynamicTable from "./CustomDynamicTable/MyDynamicTable";
import {IPost} from "../models/IPost";

class ClassComponent extends Component {
    constructor(props: {} | Readonly<{}>) {
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

        return (
            <Fragment>
                {/*{this.state.comments.map((comment: { userId: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; body: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {*/}
                {/*    console.log(comment);*/}
                {/*    return (*/}
                {/*        <div style={{ marginTop: "20px" }}>*/}
                {/*            <div>UserId : {comment.userId}</div>*/}
                {/*            <div>ID: {comment.body}</div>*/}
                {/*            <div>Title: {comment.email}</div>*/}
                {/*        </div>*/}
                {/*    );*/}
                {/*})}*/}
            </Fragment>
        )
    }
}

export default ClassComponent;
