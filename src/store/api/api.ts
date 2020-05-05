import axios from 'axios'

export const apiCall = axios.create({
    baseURL: 'https://ops-test.com/'
});

//리스트 불러오기
export async function getMain(){
    const getMain = await apiCall.get('/posts/1')
    return getMain.data
}

//코멘트 등록
export async function addComment(){
    const addComment = await apiCall.post('/posts/comments')
    return addComment
}