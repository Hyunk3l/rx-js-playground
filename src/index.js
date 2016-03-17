import '../node_modules/rx/index.js';
import '../node_modules/jquery/dist/jquery.min';
import GetGithubUsersUseCase from './javascript/get_github_users_use_case';

class App {
    constructor() {
        this._usesCases = {};
        this._usesCases['get_github_users_use_case'] = new GetGithubUsersUseCase();
    }

    get(key) {
        return this._usesCases[key];
    }
}

export default new App();