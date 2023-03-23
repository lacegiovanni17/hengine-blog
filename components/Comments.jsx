import React, { useState, useEffect } from 'react';
import moment from 'moment'
import parse from 'html-react-parser';

import { getComments } from '../services';
import { comment } from 'postcss'

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result)
    })
  }, []);

  return (
    <>
      {comment.length > 0 && (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            {comments.length}
            {' '}
            Comments
          </h3>
        </div>
      )}
    </>
  )
}

export default Comments;
