def findComment() {
  for (comment in pullRequest.comments) {
    if (comment.body.startsWith("[Jenkins]")) {
      return comment
    }
  }
  comment = pullRequest.comment("[Jenkins]")
  return comment
}
pipeline {
  agent {
    docker {
      image 'node:12.14'
    }
  }
  options {
    timeout(time: 20, unit: 'MINUTES')
  }
  environment {
    npm_config_cache = 'npm-cache'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Lint') {
      steps {
        sh 'npm run lint:jenkins'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test:unit'
      }
    }
    stage('TestDeploy') {
      steps {
        script {
          if (env.CHANGE_ID) {
            def comment = findComment()
            def tokens = env.WORKSPACE.tokenize('/')
            def folder = tokens.get(tokens.size()-1)
            def base_url = "/" + folder + "/"
            def json = '{"publicPath":"' + base_url + '"}'
            writeFile file: "${env.WORKSPACE}/_jenkins.json", text: json
            sh("npm run build")
            sh("rm ${env.WORKSPACE}/_jenkins.json")
            pullRequest.editComment(comment.id, "[Jenkins]\n" + "https://test.dev-up.kr" + base_url + "\n")
          }
        }
      }
    }
  }
}
