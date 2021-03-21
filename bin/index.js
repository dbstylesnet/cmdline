#!/usr/bin/env node
  var fs = require('fs')
  , filename = process.argv[2];
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);
    console.log(data)
  });

  // Read the file and print its contents.
  filename2 = process.argv[3];
  fs.readFile(filename2, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + filename2);
    console.log(data)
    console.log(typeof(data))
  });

