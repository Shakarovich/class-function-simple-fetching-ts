import React, {Fragment, useState, useCallback} from "react";
import {postAPI} from "../services/PostServices";
import MyDynamicTable from "./CustomDynamicTable/MyDynamicTable";
import Pagination from "./CustomPagination/MyPagination";
//Here I used rtk-query request fetching as
// it doesn't send extra requests to the server,
// for example it doesn't send extra requests
// if the data has already been loaded into the page,
// on the callback you won't re-send the request to the
// server to get the data if the data has already been received.
//================================================================

 const FunctionComponent : React.FC = () => {

     const [limit, setLimit] = useState(40)
     const {data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit);



//I wrote this so that you can see the requests in devtools!
//      React.useEffect(() => {
//          setTimeout(() =>{
//              setLimit(20)
//          }, 2000);
//      }, []);
//=========================================================

    return (
        <Fragment>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{'Something went wrong'}</h1> }
               <div>
                   <MyDynamicTable  posts={posts!}/>
               </div>
        </Fragment>
    );
};

export default FunctionComponent;