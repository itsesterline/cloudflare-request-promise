// this is using the request-promise library:
// https://github.com/request/request

const request = require('request-promise');
const options = {
    url: "https://api.cloudflare.com/client/v4/zones",
    method: "GET",
    headers: {
    'User-Agent': "Mozilla/5.0",
    'X-Auth-Email': "",
    'X-Auth-Key': "",
    'Accept': 'application/json'
    },
    json: true,
    resolveWithFullResponse: true,
};

async function run() {
    try {
      let resp = await request(options)
      console.log(resp.body)
      console.log(resp.headers)
    } catch (e) {
      console.log(e)
    }
}

run()

function promiseRun() {
    request(options)
    .then(resp => {
        console.log(resp)
    })
    .catch(err => {
      console.log(err)
    })
}
