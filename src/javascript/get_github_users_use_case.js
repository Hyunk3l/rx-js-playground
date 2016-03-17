import GithubApiUserRepository from './github_api_user_repository';

export default class GetGitHubUsersUseCase {

    constructor({repository = new GithubApiUserRepository()}) {
        this._repository = repository;
    }

    execute() {
        return this._repository.all();
    }
}