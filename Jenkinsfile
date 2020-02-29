pipeline {
  agent { dockerfile true }
  options {
      timeout(time: 20, unit: 'MINUTES')
  }
  stages {
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