pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('source') {
      steps {
        git(url: 'https://github.com/Connecting-Project/welcome-pages.git', branch: 'main', credentialsId: 'c15bdcb09f073fbab7c23bf5047bfee6c712484f')
      }
    }

    stage('build') {
      steps {
        sh 'ls -la'
      }
    }

  }
}