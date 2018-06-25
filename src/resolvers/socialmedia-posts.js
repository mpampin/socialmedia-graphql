const config = require("../../config");
const request = require('request-promise');

const Service = async (data, {interestQuery}) => {
    
    const uri = `${config.socialmediaWorker.url}${config.socialmediaWorker.endpoints.posts}`;
    
    const options = {
        method: 'GET',
        uri,
        qs: { 
            interest: interestQuery
        },
        json: true,
        timeout: 60000
    }

    try {
        const service = await request(options);
        return service;
    } catch (err) {
        return err;
    }

}

module.exports = Service;