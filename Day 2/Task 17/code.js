const comments = [
    {
      id: 1,
      text: "Это первый комментарий",
      parentId: null,
      replies: [
        {
          id: 2,
          text: "Это ответ на первый комментарий",
          parentId: 1,
          replies: [
            {
              id: 3,
              text: "Это вложенный ответ",
              parentId: 2,
              replies: [] 
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "Это независимый комментарий",
      parentId: null,
      replies: []
    },

  ];
  
  function generateCommentHTML(comment, nestingLevel) {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.style.marginLeft = nestingLevel * 20 + 'px';
  
    const textNode = document.createTextNode(comment.text);
    commentDiv.appendChild(textNode);
  
    if (comment.replies.length > 0) {
      comment.replies.forEach(reply => {
        const replyDiv = generateCommentHTML(reply, nestingLevel + 1);
        commentDiv.appendChild(replyDiv);
      });
    }
  
    return commentDiv;
  }
  
  function displayComments(commentsArray, container, nestingLevel) {
    commentsArray.forEach(comment => {
      if (comment.parentId === null) {
        const commentDiv = generateCommentHTML(comment, nestingLevel);
        container.appendChild(commentDiv);
  
        if (comment.replies.length > 0) {
          displayComments(comment.replies, commentDiv, nestingLevel + 1);
        }
      }
    });
  }displayComments
  
  const commentsContainer = document.getElementById('comments-container');
  displayComments(comments, commentsContainer, 0);