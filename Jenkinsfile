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
        sh 'docker build -t react-app .'
        sh 'docker tag react-app localhost:5000/app'
        sh 'docker run -d -p 3000:3000 localhost:5000/app'
      }
    }
  }
  catch (err) {
    throw err
  }
}