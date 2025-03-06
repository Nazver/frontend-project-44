brain-progression:
    bin/brain-progression.js
    
brain-gcd:
    bin/brain-gcd.js

brain-calc:
    bin/brain-calc.js
    
install:
    npm ci

brain-games:
    bin/brain-games.js

publish:
    npm publish --dry-run

make lint:
    npx eslint .