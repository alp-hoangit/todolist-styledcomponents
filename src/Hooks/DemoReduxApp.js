import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { AddCommentAction } from '../Redux/actions/FakebookActions';

export default function DemoReduxApp(props) {

    //useSelector thay thế cho mapStateToProps
    let comments = useSelector(state => state.FakebookReducer.comments);
    //lấy hàm dispatch từ use dispatch
    let dispatch = useDispatch();

    // lấy thông tin người dùng nhập vào
    let [userComment, setUserComment] = useState({
        name: '',
        content: '',
        avatar: ''
    });


    const handleChange = (e) => {
        let { value, name } = e.target;
        setUserComment({
            ...userComment, // clone object ra
            [name]: value,
        })
    }

    const handleComment = (e) => {
        e.preventDefault(); // chặn browser reload

        let usComment = { ...userComment, avatar: `https://i.pravatar.cc/150?u=${userComment.name}` };

        // let action = {
        //     type: 'add_comment',
        //     userComment: usComment
        // }

        dispatch(AddCommentAction(usComment));
    }

    return (
        <div className='container'>
            <h1 className='text-info font-weight-bolder'>Fakebook App</h1>
            <div className="card text-left">
                <div className="card-header">
                    {comments.map((comment, index) => {
                        return <div className="row" key={index}>
                            <div className="col-1">
                                <img src={comment.avatar} style={{ height: 50 }} alt="avatar" />
                            </div>
                            <div className="col-11">
                                <h6 className='text-danger'>{comment.name}</h6>
                                <p>{comment.content}</p>
                            </div>
                        </div>
                    })}
                </div>
                <form className="card-body" onSubmit={handleComment}>
                    <div className="form-group">
                        <h4 className="card-title">Title</h4>
                        <input className='form-control' name='name' type="text" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <h4 className="card-title">Content</h4>
                        <input className='form-control' name='content' type="text" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <button className='btn btn-success'>Send</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         comments: state.FakebookReducer.comments,
//     }
// }

// export default connect(mapStateToProps)(DemoReduxApp)