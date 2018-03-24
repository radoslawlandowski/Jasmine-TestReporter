pipeline {
  agent any
  environment {
      API_IMAGE_NAME = "tr-api:${env.BUILD_TAG}"
      DB_IMAGE_NAME = "tr-db:${env.BUILD_TAG}"
      FRONT_IMAGE_NAME = "tr-fr:${env.BUILD_TAG}"
  }               
  stages {
    stage('Prepare') {
      steps {
       ansiColor('xterm') {
            echo '====================================================='
            sh 'printenv'
            echo '====================================================='
        }
      }
    }
    stage('Git Checkout') {
      steps {
        git(url: 'https://github.com/radoslawlandowski/Jasmine-TestReporter', branch: "${env.GIT_BRANCH}")
      }
    }
    stage('Install') {
      steps {
          sh "npm install"
      }
    }
    stage('Tests') {
      steps {
          sh "npm test"
      }
    }
  }
}