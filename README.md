<p align="center">
  <b>Sls project template😈</b>
</p>

 <p align="center">
  <a href="https://serverless.com"><img src="https://user-images.githubusercontent.com/2752551/30405068-a7733b34-989e-11e7-8f66-7badaf1373ed.png" height="300" width="300"></a>
  <a href="https://serverless.com"><img src="https://media.giphy.com/media/Lny6Rw04nsOOc/giphy.gif" height="300" width="300"></a>
</p>

 ---
 [![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)

 `master - dev`[![CircleCI](https://circleci.com/gh/Fiiii/fii-sls/tree/master.svg?style=svg)](https://circleci.com/gh/Fiiii/fii-sls/tree/master)

`integration` [![CircleCI](https://circleci.com/gh/Fiiii/fii-sls/tree/integration.svg?style=svg)](https://circleci.com/gh/Fiiii/fii-sls/tree/integration)

`production` [![CircleCI](https://circleci.com/gh/Fiiii/fii-sls/tree/production.svg?style=svg)](https://circleci.com/gh/Fiiii/fii-sls/tree/production)


 ### Workflow 🙉

* AWS master account should create dedicated environment for each of developer
* On local machines `STAGE` equals developer github name it allows us to work on 'containerized' cloud environments

 ---

## Installation

### Clone
- Clone this repo to your local machine using `git clone https://github.com/Fiiii/fii-sls.git`
> or
- By using globally installed serverless:
```shell
$ yarn
$ yarn global add serverless
$ sls install https://github.com/Fiiii/fii-sls.git
```

### Setup

> create proper env file by using
```shell
$ cp ./config/.env.example ./config/.env
```
- Inside `.env` provide your private stage name that you will use for developing

> install dependencies and sls globally
```shell
$ yarn
$ yarn global add serverless
```

> now you can play with app by running
```shell
$ yarn offline
```

---

### Environments

## Add new env
```shell
$ yarn add:env
```

## Get env by key
```shell
$ yarn get:env
```

---

### Troubleshooting

> it means that probably ssm value doesnt exists in ssm service
```shell
  ##########################################################################################
  # 2505: 4 of 5 promises have settled
  # 2505: 1 unsettled promises:
  # 2505:   ssm:/project_name/dev-name/sample_key waited on by: ${ssm:/project_name/dev-name/sample_key}
  # This can result from latent connections but may represent a cyclic variable dependency
  ##########################################################################################
```
