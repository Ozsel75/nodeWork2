const posts = [
    {id: "post 1", from: "Homelander", date: "2022"},
    {id: "post 2", from: "Ashy-Slashy", date: "2020"},
    {id: "post 3", from: "t-800", date: "2005"},

]
console.log(posts)

const listPosts =() => {
    posts.map(post => {
        console.log(post.id, post.from, post.date)
    } )
}

const addPosts =() => {
    const promiseAddPost = new Promise((resolve, reject)=> {
        posts.push({id: "post 4", from: "Jason", date: "1980"})
        resolve("New post added");
        // reject("Error")
    })
    return promiseAddPost;    
}

async function addListsPosts() {
    try{
        let response = await addPosts();
        console.log(response);
        listPosts();
    }
    catch(error){
        console.log("error")
    }
}

addListsPosts();