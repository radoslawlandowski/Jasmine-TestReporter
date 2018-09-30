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
        git(url: 'https://github.com/radoslawlandowski/TestReporter', branch: "${env.GIT_BRANCH}")
      }
    }
    stage('Git Checkout by tag') {
        when {
            expression {
               params.buildFromTag == true && env.GIT_BRANCH == 'master'
            }
        }
      steps {
        git(url: 'https://github.com/radoslawlandowski/TestReporter', branch: "${env.GIT_BRANCH}")
      }
    }
    stage('Build images') {
      failFast true
      parallel {
        stage('api') {
          steps {
            dir(path: './api') {
              ansiColor(colorMapName: 'xterm') {
                sh "docker build -t ${env.API_IMAGE_NAME} ."
              }
              
            }
            
          }
        }
        stage('db') {
          steps {
            dir(path: './db') {
              ansiColor(colorMapName: 'xterm') {
                sh "docker build -t ${env.DB_IMAGE_NAME} ."
              }
              
            }
            
          }
        }
        stage('front') {
          steps {
            dir(path: './frontend') {
              ansiColor(colorMapName: 'xterm') {
                sh "docker build -t ${env.FRONT_IMAGE_NAME} ."
              }
              
            }
            
          }
        }
      }
    }
    stage('New branch') {
      steps {
        echo 'asd'
      }
    }
  }
}