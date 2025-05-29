all: run-front

.PHONY: run-front
run-front:
	cd frontend \
	&& make run

.PHONY: deploy-front
deploy-front:
	cd frontend \
	&& make deploy