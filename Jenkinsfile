pipeline {
    agent any

    environment {
        DOCKER_USER     = 'tuanphan6511'
        APP_IMAGE       = "${DOCKER_USER}/car-website"
        IMAGE_TAG       = "${BUILD_NUMBER}"
        REGISTRY_CREDS  = 'dockerhub-credentials'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build & Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', "${REGISTRY_CREDS}") {
                        echo "Dang build Docker Image..."
                        def appImg = docker.build("${APP_IMAGE}:${IMAGE_TAG}", "-f Dockerfile .")
                        appImg.push("${IMAGE_TAG}")
                        appImg.push("latest")
                    }
                }
            }
        }

        stage('Deploy Zero-Downtime') {
            steps {
                script {
                    echo "Dang deploy len Docker Swarm..."
                    sh """
                        export DOCKER_USER=${DOCKER_USER}
                        export IMAGE_TAG=${IMAGE_TAG}
                        docker stack deploy -c docker-compose.prod.yml app_stack --with-registry-auth
                    """
                }
            }
        }

        stage('Clean Old Images') {
            steps {
                sh 'docker image prune -f'
            }
        }
    }

    post {
        success {
            echo "Deploy thanh cong!"
        }
        failure {
            echo "Deploy that bai! Kiem tra lai log."
        }
    }
}
