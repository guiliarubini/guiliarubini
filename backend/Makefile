.DEFAULT_GOAL: help
help:
	@echo "I don't know... Don't call me pls =D"

dev: .dev
.dev:
	python3 -m venv ".dev" --without-pip  
	. .dev/bin/activate && poetry install && deactivate

.PHONY: clean
clean:
	rm -rf .dev