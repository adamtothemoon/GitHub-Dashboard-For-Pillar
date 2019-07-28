export const get = async req => {
    let response;
    try {
        response = await getTopReposByForks(req);
        if (response) {
            return response;
        } else {
            return new HttpResponse(404, 'Org Not Found: ' + req);
        }
    } catch (error) {
        logError(error);
        return new HttpResponse(500, errorMessage(error));
    }
};

export const getTopReposByForks = (req) => {

}