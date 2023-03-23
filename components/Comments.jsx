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
    <div>
      <h1>CommentsForm</h1>
    </div>
  )
}

export default Comments;
