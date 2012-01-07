TESTS = $(shell find test/ -iname \*.test.js)

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
	--require should \
	--timeout 5000 \
	--slow 4000 \
	--reporter spec \
	$(TESTS)

.PHONY: test