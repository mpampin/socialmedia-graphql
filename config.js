let config = {
    port: process.env.PORT || 4000,
    socialmediaWorker: {
        url: process.env.SOCIALMEDIA_WORKER_URL || "http://localhost:8080/",
        endpoints: {
            posts: "posts/"
        }
    }
}

module.exports = config;