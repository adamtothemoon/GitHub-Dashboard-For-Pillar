//[For Review] There is a choice to be made here. We can refactor this code such that the front end hits one unified api
//and passes a paramiter with the request that tells us which metric to prioritize (starts, contrib etc..).
//This will made the code harder to read in my opinion but will allow for less duplicated code. Happy to do either. 

export const get = async req => {
    let response;
    try {
        response = await getTopReposByContributors(req);
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

export const getTopReposByContributors = (req) => {

}