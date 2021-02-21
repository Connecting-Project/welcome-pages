pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('source') {
      steps {
        git(url: 'https://github.com/Connecting-Project/welcome-pages.git', branch: 'main', credentialsId: '1a62eb8df098772a9ee584da905687e4019f12f3')
      }
    }

  }
}