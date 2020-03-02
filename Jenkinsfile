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
  }
}