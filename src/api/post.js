// eslint-disable-next-line no-unused-vars
import { client,getClientAccessToken } from "./client";
import router from '@/router';

export const getPost = () => {
    console.log();
    return getClientAccessToken.get(`/post?sort-type=recency`,)
};
export const patchHeart = () =>{
    return getClientAccessToken.patch('/post/heart',{postId:localStorage.getItem('postId')}).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}
export const getPostDetail =()=>{
    const postId = localStorage.getItem('postId');
    console.log(`postId : ${postId}`);
    return getClientAccessToken.get(`/post/detail?post-id=${postId}`);
}

export const postComment =(comment)=>{
    return getClientAccessToken.post('/post/comment',{
            comment:comment,
            postId: localStorage.getItem('postId')  
    }).then(()=>{
            alert("회원가입 완료");
            window.location.reload();
    })
}

export const postCraetePost =(contentType,accessType,content)=>{
    return getClientAccessToken.post('/post',{
        accessType:accessType,
        contentType:contentType,
        content:content
    }).then(()=>{
        alert("글 작성 완료!");
        router.push("/");
    })
}
export const getNotcie = ()=>{
    return getClientAccessToken.get('/notice').then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err);
    })
}

export const getSearchPost =(q)=>{
    return getClientAccessToken.get(`/post/search?q=${q}`)
}

export const postReport = (content)=>{
    return getClientAccessToken.post('/report',{
        content,
        postId:localStorage.getItem('postId')
    })
}