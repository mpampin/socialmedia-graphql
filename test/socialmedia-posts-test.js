const { graphql } = require('graphql');
const nock = require('nock');
const { expect } = require('chai');
const { config, schema } = require("./common");

const socialmediaPostsMock = require('./mocks/socialmedia-posts-response.js');

describe('Socialmedia Posts', () => {

    describe('Response', () => {
        it('Sould be able to query Socialmedia Worker Posts using an interest', (done) => {
            
            const interestQuery = '#StarWars';
            nock(config.socialmediaWorker.url)
                .get("/"+config.socialmediaWorker.endpoints.posts)
                .query({
                    interest: interestQuery
                })
                .reply(200, socialmediaPostsMock);

            (async () => {
                try {
                    const query = `{
                        socialmediaPosts(interest: "${interestQuery}") {
                            user,
                            message,
                            hashtags
                        }
                    }`;

                    let response = (await graphql(schema, query));
                    
                    expect(response).not.to.have.property('error');
                    expect(response).to.have.nested.property('data.socialmediaPosts');
                    const socialmedia = response.data.socialmediaPosts;

                    expect(socialmedia).to.be.an('array').that.is.not.empty;
                    expect(socialmedia.length).to.be.equal(15);

                    done();
                } catch (err) {
                    console.error(err);
                    done(err);
                }
            })();
        });

        it('Sould return error when socialmedia worker fails', (done) => {
            
            const interestQuery = '#StarWars';
            nock(config.socialmediaWorker.url)
                .get("/"+config.socialmediaWorker.endpoints.posts)
                .query({
                    interest: interestQuery
                })
                .reply(500);

            (async () => {
                try {
                    const query = `{
                        socialmediaPosts(interest: "${interestQuery}") {
                            user,
                            message,
                            hashtags
                        }
                    }`;

                    let response = (await graphql(schema, query));
                    
                    expect(response).to.have.property('errors');

                    done();
                } catch (err) {
                    console.error(err);
                    done(err);
                }
            })();
        });

    });
});