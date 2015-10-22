const testsContext = require.context('.', true, /.scss$/);
testsContext.keys().forEach(testsContext);
