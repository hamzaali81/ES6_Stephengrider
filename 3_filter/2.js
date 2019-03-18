let post ={id:4,title:'New Post'};

let comments =[{postId:4,content:'Awesome work'},
{postId:4,content:' work'},
{postId:3,content:'neat'}]

function commentForPost(comments,post){
    return comments.filter(comment =>{
        return comment.postId == post.id
    })
}
console.log(commentForPost(comments,post))