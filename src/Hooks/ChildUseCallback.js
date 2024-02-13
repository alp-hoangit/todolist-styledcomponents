import React, { memo } from 'react';

function ChildUseCallback(props) {
    let title = 'cyberlearn';
    let object = { id: 1, name: 'Hoàng' };
    console.log(title);
    console.log(object);
    console.log('render');
    return (
        <div>
            <small>{props.renderNotify()}</small>
            <textarea></textarea>
            <br />
            <button className='btn btn-success'>Send</button>
        </div>
    )
}

export default memo(ChildUseCallback);

// shallow: so sánh các kiểu dữ liệu nguyên thuỷ thì memo sẽ biết được sự thay đổi
// Tuy nhiên những hàm thì memo cũng tính là thay đổi và render lại. Điều đó là không cần thiết
