const BASE = 'https://hacker-news.firebaseio.com/v0/';

const query = async (url) => {
    const res = await fetch(url);
    const json =  res.json();
    return json;
}

export const getItem = (id) => 
    query(BASE+'item/'+id+'.json');

export const getTopStories = () =>
    query(BASE+'topstores.json');

export const getNewStories = () => 
    query(BASE+'newstories.json');

export const getBestStories = () => 
    query(BASE+'beststories.json');