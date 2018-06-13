let config = {
    socialmediaWorker: {
        url: process.env.SOCIALMEDIA_WORKER_URL || "http://localhost:8080/",
        endpoints: {
            posts: "posts/"
        }
    }
}

module.exports = config;