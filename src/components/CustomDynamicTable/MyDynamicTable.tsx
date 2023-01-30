import React, {Fragment, useCallback, useState} from 'react';
import {IPost} from "../../models/IPost";
import  "./MyDynamicTable.module.css";
import Pagination from "../CustomPagination/MyPagination";

interface PostItemProps{
    posts: IPost[];
    update?: (post: IPost) => void;
};

const MyDynamicTable: React.FC<PostItemProps> = ({posts}) => {
    const [currentPage, setCurrentPage] = useState(1);
    let NUM_OF_RECORDS:any  = posts?.length;
    let LIMIT:number = 10;


    const onPageChanged = useCallback(
        (event: { preventDefault: () => void; }, page: any) => {
            event.preventDefault();
            setCurrentPage(page);
        },
        [setCurrentPage]
    );

    const currentComments = posts?.slice(
        (currentPage - 1) * LIMIT,
        (currentPage - 1) * LIMIT + LIMIT
    );
    return (
        <Fragment>
            <table >
                <tbody>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>
                    </tr>
                    {currentComments?.map((post) =>(
                        <tr key={post.id}>
                            <td>{post.name}</td>
                            <td>{post.email}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                totalRecords={NUM_OF_RECORDS}
                pageLimit={LIMIT}
                pageNeighbours={2}
                onPageChanged={onPageChanged}
                currentPage={currentPage}
            />
        </Fragment>
    );
};

export default MyDynamicTable;
