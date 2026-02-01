all: node_modules run

node_modules:
	npm install

.PHONY: run
run:
	npm run dev

.PHONY: build
build:
	npm run build

.PHONY: deploy
deploy:
	npm run deploy

.PHONY: clean
clean:
	rm -rf node_modules package-lock.json
