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
        sh 'npm run lint'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test:unit'
      }
    }
    stage('TestDeploy') {
      steps {
        sh 'npm run build'
        script {
          if (env.CHANGE_ID) {
            def comment = findComment()
            def tokens = env.WORKSPACE.tokenize('/')
            def folder = tokens.get(tokens.size()-1)
            pullRequest.editComment(comment.id, "[Jenkins]\n" + "https://test.dev-up.kr/ops/" + folder + "/dist/\n")
          }
        }
      }
    }
  }
}
