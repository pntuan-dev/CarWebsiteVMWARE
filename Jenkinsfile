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

        stage('Prepare Environment') {
            steps {
                script {
                    echo "Chuan bi file cau hinh moi truong Production cho VPS..."
                    sh """
                        if [ -f env.production ]; then
                            cp env.production .env.local
                            echo "Da copy env.production -> .env.local thanh cong."
                        else
                            echo "CANH BAO: Khong tim thay file env.production!"
                            exit 1
                        fi
                    """
                }
            }
        }

        stage('Build & Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', "${REGISTRY_CREDS}") {
                        echo "Dang build Docker Image..."
                        def appImg = docker.build(
                            "${APP_IMAGE}:${IMAGE_TAG}",
                            "--build-arg API_BASE_URL=http://car-admin:4000 " +
                            "--build-arg NEXT_PUBLIC_API_URL=http://192.168.247.130:4000 " +
                            "-f Dockerfile ."
                        )
                        appImg.push("${IMAGE_TAG}")
                        appImg.push("latest")
                    }
                }
            }
            post {
                success {
                    echo "Build webcardFe thanh cong! Xoa sach Docker build cache de tiet kiem dung luong o cung..."
                    sh 'docker builder prune -a -f'
                }
                failure {
                    echo "Build webcardFe that bai! Giu nguyen Docker build cache de debug va tan dung lai layer."
                }
            }
        }

        stage('Deploy Zero-Downtime') {
            steps {
                script {
                    echo "Dang deploy len Docker Swarm..."
                    sh """
                        export APP_IMAGE=${APP_IMAGE}
                        export IMAGE_TAG=${IMAGE_TAG}
                        export NEXT_PUBLIC_API_URL=http://192.168.247.130:4000

                        echo "Kiem tra va tao mang overlay vinfast_net neu chua co..."
                        docker network inspect vinfast_net >/dev/null 2>&1 || docker network create --driver overlay --attachable vinfast_net

                        echo "Xoa service cu (app_stack_web) con chiem port 3000 neu ton tai..."
                        docker service rm app_stack_web 2>/dev/null || true

                        echo "Doi 8 giay de port 3000 duoc giai phong hoan toan..."
                        sleep 8

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
