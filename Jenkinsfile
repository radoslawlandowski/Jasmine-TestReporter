pipeline {
  agent any
  parameters {
    string(defaultValue: "", description: 'What tag?', name: 'tagName')
    booleanParam(defaultValue: false, description: '', name: 'buildFromTag')
  }
  
   environment {
      TAG_NAME = "${params.tagName}"
   }
   
  stages {
    stage('Prepare') {
      steps {
        ansiColor(colorMapName: 'xterm') {
          echo '====================================================='
          sh 'printenv'
          echo '====================================================='
        }
        
      }
    }
    stage('Validate input params') {
        when {
            expression {
               params.buildFromTag == true && env.GIT_BRANCH != 'master'
            }
        }
      steps {
        error("You can only build from tag when GIT_BRANCH is master!")
      }
    }
    stage('Git Checkout by branch') {
        when {
            expression {
               params.buildFromTag == false
            }
        }
      steps {
        git(url: 'https://github.com/radoslawlandowski/Jasmine-TestReporter', branch: "${env.GIT_BRANCH}")
      }
    }
    stage('Git Checkout by tag') {
        when {
            expression {
               params.buildFromTag == true && env.GIT_BRANCH == 'master'
            }
        }
      steps {
        git(url: 'https://github.com/radoslawlandowski/Jasmine-TestReporter', branch: "${env.GIT_BRANCH}")
      }
    }

    stage('Build code') {
        steps {
            sh 'npm install'
            sh 'npm test'
        }
    }

    stage('Run dummy project tests with testreporter') {
        steps {
            script {
              try {
                  sh 'npm run run-dummy-project-tests'
              } catch (Exception e) {
                  echo 'Dummy test executed and failed as expected!'
              }
            }
        }
    }
  }
}