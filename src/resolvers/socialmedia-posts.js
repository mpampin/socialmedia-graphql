const config = require("../../config");
const request = require('request-promise');

const Service = async (data, { interest }) => {
    
    const uri = `${config.socialmediaWorker.url}${config.socialmediaWorker.endpoints.posts}`;
    
    const options = {
        method: 'GET',
        uri,
        qs: { 
            interest: interest
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