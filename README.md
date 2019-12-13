This is my starting point for a serverless CMS. It combines a React SPA with an AWS serverless backend.

If you have an AWS account, you can clone this repo into a Cloud99 environment and run it in dev mode by doing the following...
```
npm install
npm run start-front
npm run start-back
```

Then, you can navigate to the IP of your EC2 instance and port 8080 to view the hot reloading React frontend

The backend can be viewed or tested on port 8081.
However, when the Lambdas are made, you have to add "Access-Control-Allow-Origin": "*" to your response headers in each Lambda for them to work in dev mode.

There is also a file called url.js that handles what api endpoints axios uses to interact with the api.
To use this dynamic URL, you have to concatenate 'url.api' before your api paths. Below is an example...
```
const response = await axios({
        url: url.api + "/information",
        method: 'get'
    }
);
```

Asset URL's need to be handled in the same way, but they use 'url.assets' as below...
```
<img src={url.assets + "/images/0006.png"} className="App-logo" alt="logo" />
```

For assets in general, I have an S3 bucket set up that is served from the same cloudfront domain as the serverless app when it's deployed. 
In dev mode, the assets are still pulled from the same endpoint, but the image source URLs have to add the cloudfront domain which is the URL value in 'url.assets'

Enviroment variables can be accessed in the code using 'process.env' in the frontend and backend, but they contain different information. 
In url.js in the frontend, I use NODE_ENV to determine if I'm in development or production.
I can also add environment variables to use in the backend by adding them to the Lambdas in the SAM template like this...
```
Globals:
  Function:
    Environment:
      Variables:
        FILE_URL: "filesandstuff.com"
```

For deployment, we push to master and that git push will kick off the CodePipeline to deploy our CloudFormation stack.
Ultimately the React app, the api, and the assets are all bundled together by CloudFront and served from the same domain.

This project uses styled-components to manage CSS...
```
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid orange;
  color: orange;
  margin: 0 1em;
  padding: 0.25em 1em;
`

render() {
  return (
    <div>
      <Button> Normal Button </Button>
    </div>
  );
}
```

Posts are stored in DynamoDB as HTML strings, and then loaded into the post component dynamically using html-react-parser...
```
import parse from 'html-react-parser';

render() {
  return (
    <div>
      {parse(post01)}
    </div>
  );
}
```
