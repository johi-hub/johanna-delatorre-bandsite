let form = document.querySelector(".comment-box__form");

let commentArray= [
    {username: "johanna", comment: "this band is awesome", timestamp: "12/18/2018"},{username: "bob", comment: "nice", timestamp:"12/18/2018"},
    {username: "steve", comment:"cool", timestamp:"12/18/2018"}
];


let commentBox= document.querySelector(".comment-box__comments");

let newComment = (arr) => {
for(let i =0; i < arr.length; i++)  {
        displayComment(arr[i])

}
}

let displayComment = (comment)=> {
let newDiv = document.createElement('div');
let comments = `<p>name: ${comment.username} </p> <p>date: ${comment.timestamp} </p><p>comment: ${comment.comment} </p>`;
newDiv.innerHTML = comments;
commentBox.appendChild(newDiv);
    
}



let handleSubmit = (e) => {
    e.preventDefault();
    commentArray.unshift({username: e.target.username.value, comment: e.target.comment.value, timestamp: "3/8/2021"});
    form.reset();
    commentBox.innerText = "";
    newComment(commentArray);
}

form.addEventListener("submit", handleSubmit);

newComment(commentArray)


//
