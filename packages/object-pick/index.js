module.exports = pick;

/*
  var obj = {a: 3, b: 5, c: 9};
  pick(obj, ['a', 'c']); // {a: 3, c: 9}

  var obj = {a: 3, b: 5, c: 9};
  pick(obj, a, c); // {a: 3, c: 9}

  var obj = {a: 3, b: 5, c: 9};
  pick(obj, ['a', 'b', 'd']); // {a: 3, b: 5, d: undefined}

  var obj = {a: 3, b: 5, c: 9};
  pick(obj, ['a', 'a']); // {a: 3}
*/

function pick(obj, select) {
  var result = {};
  if (typeof select === 'string') {
    select = [].slice.call(arguments, 1);
  }
  var len = select.length;
  for (var i = 0; i < len; i++) {
    var key = select[i];
    result[key] = obj[key];
  }
  return result;
}
