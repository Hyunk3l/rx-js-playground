
export default class GitHubApiUserRepository {

    constructor() {
    }

    all() {
        let requestUrl = "https://api.github.com/users";
        return Rx.DOM.getJSON(requestUrl);
    }
}