import axios from 'axios';


export const getUser = (userName) => {
    const GITHUB_USER_SEARCH_API = `https://api.github.com/search/users?q=${userName}`;    
    return axios.get(GITHUB_USER_SEARCH_API);
}

export const getRepo = (userName) => {
    const GITHUB_REPO_SEARCH_API = `https://api.github.com/users/${userName}/repos`;
    return axios.get(GITHUB_REPO_SEARCH_API);
}

export const getReadme = (userName, repoName) => {
    const GITHUB_README_API = `https://api.github.com/repos/${userName}/${repoName}/readme`;
    return axios.get(GITHUB_README_API);
}