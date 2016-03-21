import '../node_modules/rx/index.js';
import '../node_modules/rx-dom/index.js';
import '../node_modules/jquery/dist/jquery.min';
import GetGitHubUsersUseCase from "./javascript/get_github_users_use_case";

export default class Domain {
    constructor() {
        this._usesCases = {};
        this._usesCases['get_github_users_use_case'] = new GetGitHubUsersUseCase();
    }

    get(key) {
        return this._usesCases[key];
    }
}

document.getElementById('getUsers').addEventListener('click', () => {
    let domain = new Domain();
    let usersList = domain.get('get_github_users_use_case').execute();

    usersList.subscribe(data => {
        let usersListHtml = "";
        data.forEach( user => {
            console.log(user);
            usersListHtml += `
                <tr>
                  <td>${user.id}</td>
                  <td>${user.login}</td>
                </tr>
                `
            }
        );
        document.getElementById("userListRows").innerHTML = usersListHtml;
    });
});