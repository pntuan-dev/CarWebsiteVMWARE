pipeline {
    agent any

    environment {
        DOCKER_USER     = 'tuanphan6511'
        FRONTEND_IMAGE  = "${DOCKER_USER}/my-frontend"
        BACKEND_IMAGE   = "${DOCKER_USER}/my-backend"
        IMAGE_TAG       = "${BUILD_NUMBER}"
        REGISTRY_CREDS  = 'dockerhub-credentials'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build & Push Docker Images') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', "${REGISTRY_CREDS}") {
                        // 1. Build & Push Frontend (Next.js)
                        echo "Dang build Frontend Image..."
                        def frontendImg = docker.build("${FRONTEND_IMAGE}:${IMAGE_TAG}", "-f frontend/Dockerfile ./frontend")
                        frontendImg.push("${IMAGE_TAG}")
                        frontendImg.push("latest")

                        // 2. Build & Push Backend (Node.js)
                        echo "Dang build Backend Image..."
                        def backendImg = docker.build("${BACKEND_IMAGE}:${IMAGE_TAG}", "-f backend/Dockerfile ./backend")
                        backendImg.push("${IMAGE_TAG}")
                        backendImg.push("latest")
                    }
                }
            }
        }

        stage('Deploy Zero-Downtime') {
            steps {
                script {
                    echo "Dang deploy len server khong downtime..."
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
            echo "Chuc mung! Web da duoc cap nhat moi nhat khong bi gian doan giay nao."
        }
        failure {
            echo "Build that bai! Hay kiem tra lai log."
        }
    }
}
