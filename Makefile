TAG := $(shell git rev-parse --short HEAD)
AWS_ACCOUNT_ID ?= 339302979805
AWS_REGION ?= us-east-2
IMAGE_REGISTRY := $(AWS_ACCOUNT_ID).dkr.ecr.us-east-2.amazonaws.com
FRONTEND_REPO := $(IMAGE_REGISTRY)/kalamadoo-frontend
BACKEND_REPO := $(IMAGE_REGISTRY)/kalamadoo-backend

build-dev-frontend:
	docker-compose build frontend

build-dev-backend:
	docker-compose build backend

build-frontend:
	docker build -t $(FRONTEND_REPO):$(TAG) -f .docker/frontend.dockerfile frontend/

build-backend:
	docker build -t $(BACKEND_REPO):$(TAG) -f .docker/backend.dockerfile backend/

push-frontend:
	aws ecr get-login-password --region $(AWS_REGION) | docker login --username AWS --password-stdin $(IMAGE_REGISTRY) && \
	docker push $(FRONTEND_REPO):$(TAG)

push-backend:
	aws ecr get-login-password --region $(AWS_REGION) | docker login --username AWS --password-stdin $(IMAGE_REGISTRY) && \
	docker push $(BACKEND_REPO):$(TAG)

build-dev: build-dev-frontend
build-dev: build-dev-backend

build: build-frontend
build: build-backend

push: push-frontend
push: push-backend

deploy-frontend: build-frontend
deploy-frontend: push-frontend
deploy-frontend:
	./scripts/deploy frontend

deploy-backend: build-backend
deploy-backend: push-backend
deploy-backend:
	./scripts/deploy backend

deploy: build
deploy: push
deploy:
	./scripts/deploy frontend=$(TAG) backend=$(TAG)
