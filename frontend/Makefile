all: run

node_modules:
	npm install

.PHONY: run
run:
	npm run dev

.PHONY: clean
clean:
	rm -rf node_modules package-lock.json

.PHONY: deploy
deploy: RUBLIC_GITHUB_REPOSITORY ?= /Users/ksafiullin/src/BondaiKa
deploy: COMMIT_MESSAGE ?= $(shell git rev-parse --abbrev-ref HEAD)
deploy: node_modules
	npm run build \
	&& rm -r $(RUBLIC_GITHUB_REPOSITORY)/* \
	&& cp -r dist/* $(RUBLIC_GITHUB_REPOSITORY)/ \
	&& ( \
      cd $(RUBLIC_GITHUB_REPOSITORY) && \
      git checkout -- README.md && \
      git checkout -- .gitignore && \
      git add . && \
      git commit -m "Fetch changes from: $(COMMIT_MESSAGE) branch"; \
      git push \
    )

