node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sh 'docker build -t react-app --no-cache .'
        sh 'docker tag react-app localhost:5000/app'
        sh 'cd'
        sh 'pwd'
        sh 'cd ..'
        sh 'pwd'
        sh 'cd reactDockerfiles'
        sh 'docker-compose -f docker-compose.yml up -d'
      }
    }
  }
  catch (err) {
    throw err
  }
}
