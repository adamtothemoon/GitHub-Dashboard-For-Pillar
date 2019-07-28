const get = async orgName => {
    const GITHUB_URL = "https://api.github.com/search/repositories?q=owner:facebook&sort=forks&order=desc"
    let response;
    try {
        response = await fetch(GITHUB_URL);
        if (response) {
            const result = await response.json()
            return result;
        } else {
            return new HttpResponse(404, 'Org Not Found: ' + orgName);
        }
    } catch (error) {
        logError(error);
        return new HttpResponse(500, errorMessage(error));
    }
};