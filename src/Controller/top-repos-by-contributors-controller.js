//This implementaiton of the get-top controllers has the down side of more duplicated code however I find it much
//easier to read, change and work with. That being said I am open to alternative, specifically more consolidated
//options if that is preferable.

const get = async req => {
    const ownerName = req.ownerName;
    const GITHUB_URL = `https://api.github.com/search/repositories?q=owner:${ownerName}&sort=contributors&order=desc`;
    let response;
    try {
        response = await fetch(GITHUB_URL);
        if (response) {
            const result = await response.json();
            return result;
        } else {
            return new HttpResponse(404, 'Org Not Found: ' + ownerName);
        }
    } catch (error) {
        logError(error);
        return new HttpResponse(500, errorMessage(error));
    }
};