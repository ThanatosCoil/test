import { Octokit, App } from "octokit";

const octokit = new Octokit({
    auth: process.env.GH_TOKEN
  })
  
   octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'LoicoP',
    repo: 'test',
    ref: 'refs/heads/sdks',
    sha: '340aa5eb5d1694c125e435c1a5f6ffa6a81d5de4',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })