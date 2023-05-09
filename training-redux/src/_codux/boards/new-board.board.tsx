import React from 'react'
import { createBoard } from '@wixc3/react-board';
import AddPost from '../../features/Posts/AddPost';

export default createBoard({
    name: 'New Board',
    Board: () => <div>
        <AddPost />
    </div>
});
