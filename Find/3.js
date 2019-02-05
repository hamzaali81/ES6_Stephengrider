let posts = [{
        id: 1,
        title: 'New Post'
    },
    {
        id: 2,
        title: 'Old Post'
    }
]
let comment = {
    postId: 1,
    content: 'Great Post'
}

function postFotComment(posts, comment) {
    return posts.find((post) => {
        return post.id === comment.postId
    })
}
let x = postFotComment(posts, comment)
console.log(x)