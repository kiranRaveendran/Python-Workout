/* ─────────────────────────────────────────────
   PYTHON CODE HIGHLIGHT HELPERS
───────────────────────────────────────────── */
var sk = function (t) { return '<span class="kw">' + t + '</span>'; };
var sf = function (t) { return '<span class="fn">' + t + '</span>'; };
var ss = function (t) { return '<span class="str">' + t + '</span>'; };
var sn = function (t) { return '<span class="num">' + t + '</span>'; };
var sc = function (t) { return '<span class="cmt">' + t + '</span>'; };
var sb = function () { return '<span class="blank">___</span>'; };

/* ─────────────────────────────────────────────
   CHAPTER 1 — Python Fundamentals
   variables: 4 | operators: 15 | types: 15 | builtins: 18
───────────────────────────────────────────── */
var ch1 = [
  { id: 1, title: "Name & Greet", topic: "variables", difficulty: "easy",
    desc: "Create a variable to store your name, then use it to build a greeting with print().",
    code: 'name = ' + sb() + '\n' + sc('# then print a greeting') + '\n' + sf('print') + '(' + ss('"Hello, "') + ' + ' + sb() + ' + ' + ss('"!"') + ')',
    guidance: ["Assign your <strong>name</strong> as a string: <code>name = \"Your Name\"</code>", "Use <strong>+</strong> to join strings (concatenation).", "Call <code>print(...)</code> with the greeting string.", "Expected output: <code>Hello, Alex!</code>"] },
  { id: 2, title: "Variables and Types", topic: "variables", difficulty: "easy",
    desc: "Assign an integer and a float to variables, then print their types using type().",
    code: 'x = ' + sb() + '  ' + sc('# int') + '\ny = ' + sb() + '  ' + sc('# float') + '\n' + sf('print') + '(' + sf('type') + '(x), ' + sf('type') + '(y))',
    guidance: ["Use <code>x = 42</code> for an integer.", "Use <code>y = 3.14</code> for a float.", "<code>type(value)</code> returns the type of a value.", "Output: <code>&lt;class 'int'&gt; &lt;class 'float'&gt;</code>"] },
  { id: 3, title: "Multiple Assignment", topic: "variables", difficulty: "easy",
    desc: "Assign the same value to two variables in one line. Then assign two variables from a tuple (unpacking).",
    code: 'a = b = ' + sb() + '\n' + sf('print') + '(a, b)\nx, y = ' + sb() + '  ' + sc('# tuple unpacking') + '\n' + sf('print') + '(x, y)',
    guidance: ["<code>a = b = 10</code> gives both a and b the value 10.", "<code>x, y = (1, 2)</code> or <code>x, y = 1, 2</code> unpacks the tuple.", "Fill: e.g. <code>10</code> and <code>(1, 2)</code>."] },
  { id: 4, title: "Swap Two Variables", topic: "variables", difficulty: "easy",
    desc: "Swap the values of two variables a and b using a single line (tuple unpacking).",
    code: 'a, b = ' + ss('"first"') + ', ' + ss('"second"') + '\n' + sc('# swap in one line') + '\na, b = ' + sb() + '\n' + sf('print') + '(a, b)  ' + sc('# second first'),
    guidance: ["Use <code>a, b = b, a</code> to swap without a temp variable.", "Right side is evaluated first, then assigned to the left."] },
  { id: 5, title: "Arithmetic +, -, *, /, //", topic: "operators", difficulty: "easy",
    desc: "Use +, -, *, / and // to compute: 10+5, 10-3, 4*7, 15/4 (float), 15//4 (integer division).",
    code: sf('print') + '(10 + 5, 10 - 3, 4 * 7)\n' + sf('print') + '(15 / 4, ' + sb() + ')  ' + sc('# 3.75 and 3'),
    guidance: ["<code>/</code> is float division; <code>//</code> is floor (integer) division.", "Fill: <code>15 // 4</code> to get 3."] },
  { id: 6, title: "Modulo Operator %", topic: "operators", difficulty: "easy",
    desc: "Use % to get the remainder. Print 17 % 5 and use it to check if a number is even (n % 2 == 0).",
    code: sf('print') + '(17 % 5)   ' + sc('# 2') + '\nn = ' + sn('8') + '\n' + sf('print') + '(n % 2 == ' + sb() + ')   ' + sc('# True if even'),
    guidance: ["<code>17 % 5</code> is the remainder of 17 divided by 5, i.e. 2.", "Even numbers have <code>n % 2 == 0</code>. Fill: <code>0</code>."] },
  { id: 7, title: "Exponent **", topic: "operators", difficulty: "easy",
    desc: "Use ** for exponentiation. Compute 2**10 and 3**2.",
    code: sf('print') + '(2 ** 10)   ' + sc('# 1024') + '\n' + sf('print') + '(' + sb() + ')   ' + sc('# 9'),
    guidance: ["<code>2 ** 10</code> is 2 to the power 10.", "Fill: <code>3 ** 2</code> for 9."] },
  { id: 8, title: "Comparison Operators", topic: "operators", difficulty: "easy",
    desc: "Use ==, !=, <, >, <=, >= to compare numbers. Print the results of 5 == 5 and 3 != 4.",
    code: sf('print') + '(5 == 5, 3 != 4)\n' + sf('print') + '(10 ' + sb() + ' 20, 7 ' + sb() + ' 7)  ' + sc('# < and >='),
    guidance: ["<code>==</code> equality, <code>!=</code> not equal.", "Fill: <code>&lt;</code> and <code>&gt;=</code> (or use &lt; and &gt;= in code)."] },
  { id: 9, title: "Logical and, or, not", topic: "operators", difficulty: "easy",
    desc: "Use and, or, not to combine booleans. Print (True and False), (True or False), (not False).",
    code: sf('print') + '(True ' + sk('and') + ' False)   ' + sc('# False') + '\n' + sf('print') + '(True ' + sk('or') + ' False, ' + sk('not') + ' False)',
    guidance: ["<code>and</code> is True only if both are True.", "<code>or</code> is True if at least one is True.", "<code>not</code> flips the boolean."] },
  { id: 10, title: "in Operator (membership)", topic: "operators", difficulty: "easy",
    desc: "Use 'in' to check if a value is in a list or a substring is in a string.",
    code: sf('print') + '(3 ' + sk('in') + ' [1, 2, 3])\n' + sf('print') + '(' + ss('"ab"') + ' ' + sk('in') + ' ' + ss('"abc"') + ')',
    guidance: ["<code>3 in [1,2,3]</code> is True.", "<code>\"ab\" in \"abc\"</code> is True (substring)."] },
  { id: 11, title: "is vs ==", topic: "operators", difficulty: "medium",
    desc: "Compare is and ==. For small integers, a is b may be True; for different objects with same value, is is False.",
    code: 'a = 256\nb = 256\n' + sf('print') + '(a == b, a ' + sk('is') + ' b)\nx = ' + ss('"hi"') + '\ny = ' + ss('"hi"') + '\n' + sf('print') + '(x == y, x is y)',
    guidance: ["<code>==</code> compares values; <code>is</code> compares identity (same object).", "Use <code>==</code> for values; use <code>is</code> for None: <code>x is None</code>."] },
  { id: 12, title: "+= and -=", topic: "operators", difficulty: "easy",
    desc: "Use += and -= to update a variable. Start with n=10, then n += 5 and n -= 3.",
    code: 'n = 10\nn ' + sb() + ' 5\nn ' + sb() + ' 3\n' + sf('print') + '(n)   ' + sc('# 12'),
    guidance: ["<code>n += 5</code> is the same as <code>n = n + 5</code>.", "Fill: <code>+=</code> and <code>-=</code>."] },
  { id: 13, title: "Chained Comparison", topic: "operators", difficulty: "easy",
    desc: "Python allows 1 < x < 5. Write a condition that checks if n is between 10 and 20 inclusive.",
    code: 'n = ' + sn('15') + '\n' + sf('print') + '(' + sb() + ')   ' + sc('# True'),
    guidance: ["Chained: <code>10 <= n <= 20</code> is equivalent to <code>10 <= n and n <= 20</code>.", "Fill: <code>10 <= n <= 20</code>."] },
  { id: 14, title: "String Repeat with *", topic: "operators", difficulty: "easy",
    desc: "Use * to repeat a string. Print 'ab' * 3 to get 'ababab'.",
    code: sf('print') + '(' + ss('"ab"') + ' * ' + sb() + ')   ' + sc('# ababab'),
    guidance: ["<code>\"ab\" * 3</code> repeats the string 3 times.", "Fill: <code>3</code>."] },
  { id: 15, title: "Boolean from Comparison", topic: "operators", difficulty: "easy",
    desc: "Comparisons return bool. Assign result of (age >= 18) to is_adult and print it.",
    code: 'age = ' + sn('20') + '\nis_adult = age ' + sb() + ' 18\n' + sf('print') + '(is_adult)',
    guidance: ["<code>age >= 18</code> returns True or False.", "Fill: <code>&gt;=</code>."] },
  { id: 16, title: "Conditional Expression", topic: "operators", difficulty: "easy",
    desc: "Use the ternary form: x if condition else y. Set label = 'even' if n%2==0 else 'odd'.",
    code: 'n = 4\nlabel = ' + ss('"even"') + ' ' + sk('if') + ' n % 2 == 0 ' + sk('else') + ' ' + ss('"odd"') + '\n' + sf('print') + '(label)',
    guidance: ["<code>a if cond else b</code> evaluates to a when cond is True, else b.", "Result here: <code>\"even\"</code>."] },
  { id: 17, title: "Operator Precedence", topic: "operators", difficulty: "medium",
    desc: "Understand precedence: * before +. Compute 2 + 3 * 4 and use parentheses to get (2+3)*4.",
    code: sf('print') + '(2 + 3 * 4)   ' + sc('# 14') + '\n' + sf('print') + '(' + sb() + ')   ' + sc('# 20'),
    guidance: ["<code>3 * 4</code> is done first, so 2+12=14.", "Fill: <code>(2 + 3) * 4</code> to get 20."] },
  { id: 18, title: "Membership: in with List", topic: "operators", difficulty: "easy",
    desc: "Use 'in' to check if 3 is in [1,2,3] and if 'x' is not in 'abc'. Print both results.",
    code: sf('print') + '(3 ' + sk('in') + ' [1, 2, 3], ' + ss('"x"') + ' ' + sk('not') + ' ' + sk('in') + ' ' + ss('"abc"') + ')',
    guidance: ["<code>in</code> for membership; <code>not in</code> for absence.", "Result: True, True."] },
  { id: 19, title: "String Concatenation +", topic: "operators", difficulty: "easy",
    desc: "Use + to join two strings. Then use * to repeat a string. Print 'Hi' + '!' and 'Ha' * 2.",
    code: sf('print') + '(' + ss('"Hi"') + ' + ' + ss('"!"') + ', ' + ss('"Ha"') + ' * 2)',
    guidance: ["<code>+</code> concatenates strings.", "<code>*</code> with int repeats the string. Result: Hi!, HaHa."] },
  { id: 20, title: "Lists: Append and Index", topic: "types", difficulty: "easy",
    desc: "Create a list, append two items, then print the first and last elements using indices.",
    code: 'items = [' + ss('"a"') + ', ' + ss('"b"') + ']\nitems.' + sf('append') + '(' + sb() + ')\nitems.' + sf('append') + '(' + sb() + ')\n' + sf('print') + '(items[0], items[-1])',
    guidance: ["<code>list.append(x)</code> adds to the end.", "Index <code>-1</code> is the last element."] },
  { id: 19, title: "Dict: Keys and Values", topic: "types", difficulty: "easy",
    desc: "Create a dict with name and age. Print the value for 'name' and get all keys using .keys().",
    code: 'person = {' + ss('"name"') + ': ' + ss('"Sam"') + ', ' + ss('"age"') + ': ' + sn('25') + '}\n' + sf('print') + '(person[' + ss('"name"') + '], list(person.keys()))',
    guidance: ["Access by key: <code>person[\"name\"]</code>.", "<code>.keys()</code> returns a view; wrap in <code>list()</code> to print."] },
  { id: 21, title: "Tuple Creation and Unpacking", topic: "types", difficulty: "easy",
    desc: "Create a tuple (1, 2, 3). Unpack it into a, b, c and print a + b + c.",
    code: 't = (' + sn('1') + ', ' + sn('2') + ', ' + sn('3') + ')\na, b, c = ' + sb() + '\n' + sf('print') + '(a + b + c)',
    guidance: ["Tuples use parentheses. Unpack: <code>a, b, c = t</code>.", "Fill: <code>t</code>. Result: 6."] },
  { id: 22, title: "Set: Create and add", topic: "types", difficulty: "easy",
    desc: "Create an empty set with set(), add elements 1, 2, 2, 3 (sets have no duplicates). Print the set.",
    code: 's = ' + sf('set') + '()\ns.' + sf('add') + '(1)\ns.add(2)\ns.add(2)\ns.add(3)\n' + sf('print') + '(' + sb() + ')',
    guidance: ["<code>set()</code> creates an empty set (not {} which is dict).", "<code>.add(2)</code> twice still leaves one 2. Fill: <code>s</code>. Result: {1, 2, 3}."] },
  { id: 23, title: "List Indexing and Slicing", topic: "types", difficulty: "easy",
    desc: "Given a list [10, 20, 30, 40], print the first element and the slice from index 1 to 3 (exclusive).",
    code: 'L = [10, 20, 30, 40]\n' + sf('print') + '(L[0], L[' + sb() + ':' + sb() + '])  ' + sc('# 10 and [20, 30]'),
    guidance: ["<code>L[0]</code> is first. Slice <code>L[1:3]</code> is elements at index 1 and 2.", "Fill: <code>1</code> and <code>3</code>."] },
  { id: 24, title: "Nested List (list of lists)", topic: "types", difficulty: "easy",
    desc: "Create a 2x2 grid as a list of lists. Access the element in row 1, column 0.",
    code: 'grid = [[1, 2], [3, 4]]\n' + sf('print') + '(grid[' + sb() + '][' + sb() + '])   ' + sc('# 3'),
    guidance: ["<code>grid[1]</code> is [3, 4]; <code>grid[1][0]</code> is 3.", "Row index 1, column index 0."] },
  { id: 25, title: "Dict with Nested Dict", topic: "types", difficulty: "medium",
    desc: "Create a dict 'user' with key 'profile' whose value is another dict with 'name' and 'age'. Access user['profile']['name'].",
    code: 'user = {' + ss('"profile"') + ': {' + ss('"name"') + ': ' + ss('"Alex"') + ', ' + ss('"age"') + ': 22}}\n' + sf('print') + '(user[' + ss('"profile"') + '][' + ss('"name"') + '])',
    guidance: ["Chain keys: <code>user[\"profile\"][\"name\"]</code>.", "Nested structures are common in JSON-like data."] },
  { id: 26, title: "Tuple in List", topic: "types", difficulty: "easy",
    desc: "Create a list of tuples: [(1,'a'), (2,'b')]. Access the second tuple and then its first element.",
    code: 'pairs = [(1, ' + ss('"a"') + '), (2, ' + ss('"b"') + ')]\n' + sf('print') + '(pairs[1][' + sb() + '])   ' + sc('# 2'),
    guidance: ["<code>pairs[1]</code> is (2, 'b'). <code>pairs[1][0]</code> is 2.", "Fill: <code>0</code>."] },
  { id: 27, title: "Set from List (remove duplicates)", topic: "types", difficulty: "easy",
    desc: "Convert a list [1, 2, 2, 3, 3, 3] to a set to remove duplicates, then back to a sorted list.",
    code: 'L = [1, 2, 2, 3, 3, 3]\nunique = ' + sf('list') + '(' + sf('set') + '(' + sb() + '))\nunique.' + sf('sort') + '()\n' + sf('print') + '(unique)',
    guidance: ["<code>set(L)</code> removes duplicates. <code>list(set(L))</code> gives a list (order may vary).", "Then <code>.sort()</code>. Fill: <code>L</code>."] },
  { id: 28, title: "Dict .get() with Default", topic: "types", difficulty: "easy",
    desc: "Use .get(key, default) to safely get a value. If key is missing, return 0.",
    code: 'd = {' + ss('"a"') + ': 1, ' + ss('"b"') + ': 2}\n' + sf('print') + '(d.' + sf('get') + '(' + ss('"a"') + ', 0), d.get(' + ss('"c"') + ', ' + sb() + '))',
    guidance: ["<code>d.get(\"c\", 0)</code> returns 0 when \"c\" is not in d.", "Fill: <code>0</code>."] },
  { id: 29, title: "List Slice [start:end:step]", topic: "types", difficulty: "medium",
    desc: "Given [0,1,2,3,4,5], use slicing to get [2,3,4] and then every second element [0,2,4].",
    code: 'L = [0, 1, 2, 3, 4, 5]\n' + sf('print') + '(L[2:5], L[' + sb() + ':' + sb() + ':' + sb() + '])',
    guidance: ["<code>L[2:5]</code> is [2,3,4]. <code>L[0:6:2]</code> or <code>L[::2]</code> is [0,2,4].", "Fill: <code>0</code>, <code>6</code> (or leave blank), <code>2</code>."] },
  { id: 30, title: "Empty list, dict, tuple, set", topic: "types", difficulty: "easy",
    desc: "Create empty list [], empty dict {}, empty tuple (), and empty set set(). Print their types.",
    code: sf('print') + '(' + sf('type') + '([]), type({}), type(()))\n' + sf('print') + '(' + sf('type') + '(' + sf('set') + '()))',
    guidance: ["<code>{}</code> is an empty dict; empty set must be <code>set()</code>.", "<code>()</code> is the empty tuple."] },
  { id: 31, title: "List of Tuples to Dict", topic: "types", difficulty: "medium",
    desc: "Convert a list of pairs [(1,'a'), (2,'b')] into a dict {1:'a', 2:'b'} using dict().",
    code: 'pairs = [(1, ' + ss('"a"') + '), (2, ' + ss('"b"') + ')]\nd = ' + sf('dict') + '(' + sb() + ')\n' + sf('print') + '(d)',
    guidance: ["<code>dict(pairs)</code> builds a dict from key-value pairs.", "Fill: <code>pairs</code>."] },
  { id: 32, title: "Mutable vs Immutable (tuple)", topic: "types", difficulty: "medium",
    desc: "Tuples are immutable. Lists are mutable. Change L[0] in a list; tuples cannot be changed.",
    code: 't = (1, 2)\nL = [1, 2]\nL[0] = 9\n' + sf('print') + '(t[0], L[0])',
    guidance: ["Tuple elements cannot be reassigned; list elements can.", "Result: 1, 9."] },
  { id: 33, title: "Inner List and Tuple Access", topic: "types", difficulty: "easy",
    desc: "Given data = ([1, 2], (3, 4)), change the list's first element and print the tuple's second element.",
    code: 'data = ([1, 2], (3, 4))\ndata[0][0] = 99\n' + sf('print') + '(data[0], data[1][1])',
    guidance: ["<code>data[0]</code> is the list (mutable). <code>data[1][1]</code> is 4."] },
  { id: 34, title: "Set from String", topic: "types", difficulty: "easy",
    desc: "Use set('hello') to get unique characters. Print the set and its length.",
    code: 'chars = ' + sf('set') + '(' + ss('"hello"') + ')\n' + sf('print') + '(chars, len(chars))',
    guidance: ["<code>set(\"hello\")</code> gives unique letters. len is 4."] },
  { id: 60, title: "range() Basics", topic: "types", difficulty: "easy",
    desc: "Use range(5) to get numbers 0 through 4. Convert to list and print it.",
    code: 'r = ' + sf('range') + '(5)\n' + sf('print') + '(' + sf('list') + '(r))   ' + sc('# [0, 1, 2, 3, 4]'),
    guidance: ["<code>range(5)</code> produces 0, 1, 2, 3, 4 (stop is exclusive).", "Wrap in <code>list()</code> to see the values."] },
  { id: 61, title: "range() with start and stop", topic: "types", difficulty: "easy",
    desc: "Use range(2, 7) to get numbers from 2 up to (but not including) 7. Convert to list and print.",
    code: 'r = ' + sf('range') + '(2, 7)\n' + sf('print') + '(' + sf('list') + '(r))   ' + sc('# [2, 3, 4, 5, 6]'),
    guidance: ["<code>range(start, stop)</code>: start is inclusive, stop is exclusive.", "range(2, 7) gives 2, 3, 4, 5, 6."] },
  { id: 62, title: "range() with start, end, step", topic: "types", difficulty: "easy",
    desc: "Use range(0, 10, 2) to get even numbers 0, 2, 4, 6, 8. The third argument is the step. Convert to list and print.",
    code: 'r = ' + sf('range') + '(0, 10, 2)\n' + sf('print') + '(' + sf('list') + '(r))   ' + sc('# [0, 2, 4, 6, 8]'),
    guidance: ["<code>range(start, end, step)</code>: step is the increment (default 1).", "range(0, 10, 2) gives 0, 2, 4, 6, 8."] },
  { id: 35, title: "len() and str()", topic: "builtins", difficulty: "easy",
    desc: "Use len() to get the length of a string and a list. Use str() to convert a number to a string.",
    code: 'word = ' + ss('"hello"') + '\n' + sf('print') + '(' + sf('len') + '(word), ' + sf('len') + '([1,2,3]))\n' + sf('print') + '(' + sf('str') + '(42) + ' + ss('" eggs"') + ')',
    guidance: ["<code>len(sequence)</code> returns the number of elements.", "<code>str(42)</code> converts to <code>\"42\"</code>."] },
  { id: 36, title: "int() and float()", topic: "builtins", difficulty: "easy",
    desc: "Convert the string '42' to int and '3.14' to float. Print their sum.",
    code: sf('print') + '(' + sf('int') + '(' + ss('"42"') + ') + ' + sf('float') + '(' + ss('"3.14"') + '))',
    guidance: ["<code>int(\"42\")</code> is 42; <code>float(\"3.14\")</code> is 3.14.", "Sum: 45.14."] },
  { id: 37, title: "bool()", topic: "builtins", difficulty: "easy",
    desc: "Use bool() to convert values to True/False. Which of 0, 1, '', 'hi', [], [1] are truthy?",
    code: sf('print') + '(' + sf('bool') + '(0), bool(1), bool(' + ss('""') + '), bool(' + ss('"hi"') + '))\n' + sf('print') + '(bool([]), bool([1]))',
    guidance: ["Falsy: 0, \"\", [], None, False. Everything else is truthy.", "bool([1]) is True (non-empty list)."] },
  { id: 38, title: "list() from range", topic: "builtins", difficulty: "easy",
    desc: "Use list(range(5)) to create [0,1,2,3,4]. Then list(range(2, 6)) for [2,3,4,5].",
    code: sf('print') + '(' + sf('list') + '(' + sf('range') + '(5)))\n' + sf('print') + '(' + sf('list') + '(range(2, ' + sb() + ')))',
    guidance: ["<code>range(5)</code> is 0..4; <code>range(2, 6)</code> is 2,3,4,5.", "Fill: <code>6</code>."] },
  { id: 39, title: "tuple() and set()", topic: "builtins", difficulty: "easy",
    desc: "Convert [1, 2, 3] to a tuple using tuple() and to a set using set().",
    code: 'L = [1, 2, 3]\n' + sf('print') + '(' + sf('tuple') + '(L), ' + sf('set') + '(L))',
    guidance: ["<code>tuple(L)</code> returns (1, 2, 3).", "<code>set(L)</code> returns {1, 2, 3}."] },
  { id: 40, title: "str.join()", topic: "builtins", difficulty: "easy",
    desc: "Use ','.join(['a','b','c']) to get 'a,b,c'. Use ' '.join for space-separated words.",
    code: 'words = [' + ss('"Hello"') + ', ' + ss('"world"') + ']\n' + sf('print') + '(' + ss('" "') + '.' + sf('join') + '(' + sb() + '))',
    guidance: ["<code>separator.join(iterable)</code> joins strings.", "Fill: <code>words</code>. Result: \"Hello world\"."] },
  { id: 41, title: "sorted()", topic: "builtins", difficulty: "easy",
    desc: "Use sorted() on a list of numbers and on a list of strings. sorted() returns a new list.",
    code: sf('print') + '(' + sf('sorted') + '([3, 1, 2]))\n' + sf('print') + '(' + sf('sorted') + '([' + ss('"banana"') + ', ' + ss('"apple"') + ']))',
    guidance: ["<code>sorted([3,1,2])</code> returns [1, 2, 3].", "Strings are sorted lexicographically."] },
  { id: 42, title: "min(), max(), sum()", topic: "builtins", difficulty: "easy",
    desc: "Use min, max, and sum on a list of numbers [10, 20, 30].",
    code: 'nums = [10, 20, 30]\n' + sf('print') + '(' + sf('min') + '(nums), ' + sf('max') + '(nums), ' + sf('sum') + '(nums))',
    guidance: ["<code>min</code> and <code>max</code> work on any comparable iterable.", "<code>sum</code> adds numbers. Result: 10, 30, 60."] },
  { id: 43, title: "abs() and round()", topic: "builtins", difficulty: "easy",
    desc: "Use abs(-5) and round(3.7). Try round(3.14159, 2) for two decimal places.",
    code: sf('print') + '(' + sf('abs') + '(-5), ' + sf('round') + '(3.7))\n' + sf('print') + '(' + sf('round') + '(3.14159, ' + sb() + '))',
    guidance: ["<code>abs(-5)</code> is 5.", "<code>round(3.14159, 2)</code> is 3.14. Fill: <code>2</code>."] },
  { id: 44, title: "input() and int()", topic: "builtins", difficulty: "easy",
    desc: "Use input() to read a string (e.g. user's name). Use input() and int() to read a number.",
    code: 'name = ' + sf('input') + '(' + ss('"Name? "') + ')\n' + sc('# num = int(input("Number? "))') + '\n' + sf('print') + '(name)',
    guidance: ["<code>input(prompt)</code> returns a string. Use <code>int(input(...))</code> for integers.", "In real code: <code>num = int(input(\"Number? \"))</code>."] },
  { id: 45, title: "type()", topic: "builtins", difficulty: "easy",
    desc: "Use type(x) to get the type of a value. Print type(5), type('hi'), type([1,2]).",
    code: sf('print') + '(' + sf('type') + '(5), type(' + ss('"hi"') + '), type([1, 2]))',
    guidance: ["<code>type(5)</code> is <code>&lt;class 'int'&gt;</code>.", "Use <code>isinstance(x, int)</code> to check type."] },
  { id: 46, title: "range() and for", topic: "builtins", difficulty: "easy",
    desc: "Use range(5) in a for loop to print numbers 0 through 4.",
    code: sk('for') + ' i ' + sk('in') + ' ' + sf('range') + '(5):\n  ' + sf('print') + '(' + sb() + ')',
    guidance: ["<code>range(5)</code> produces 0, 1, 2, 3, 4.", "Fill: <code>i</code>."] },
  { id: 47, title: "enumerate()", topic: "builtins", difficulty: "medium",
    desc: "Use enumerate(['a','b','c']) to get (index, item) pairs. Print index and item in a loop.",
    code: sk('for') + ' i, x ' + sk('in') + ' ' + sf('enumerate') + '([' + ss('"a"') + ', ' + ss('"b"') + ', ' + ss('"c"') + ']):\n  ' + sf('print') + '(i, x)',
    guidance: ["<code>enumerate(seq)</code> yields (0, a), (1, b), (2, c).", "Use when you need both index and value."] },
  { id: 48, title: "zip()", topic: "builtins", difficulty: "medium",
    desc: "Use zip([1,2], ['a','b']) to pair elements. Loop and print each pair.",
    code: sk('for') + ' n, c ' + sk('in') + ' ' + sf('zip') + '([1, 2], [' + ss('"a"') + ', ' + ss('"b"') + ']):\n  ' + sf('print') + '(n, c)',
    guidance: ["<code>zip(a, b)</code> yields (a[0], b[0]), (a[1], b[1]), ...", "Stops at the shortest sequence."] },
  { id: 49, title: "dict() from keys", topic: "builtins", difficulty: "easy",
    desc: "Use dict.fromkeys(['a','b'], 0) to create {'a':0, 'b':0}.",
    code: 'd = ' + sf('dict') + '.' + sf('fromkeys') + '([' + ss('"a"') + ', ' + ss('"b"') + '], ' + sb() + ')\n' + sf('print') + '(d)',
    guidance: ["<code>dict.fromkeys(keys, value)</code> gives each key the same value.", "Fill: <code>0</code>."] },
  { id: 50, title: "reversed() and list()", topic: "builtins", difficulty: "easy",
    desc: "Use list(reversed([1,2,3])) to get [3, 2, 1].",
    code: sf('print') + '(' + sf('list') + '(' + sf('reversed') + '([1, 2, 3])))',
    guidance: ["<code>reversed(seq)</code> returns a reverse iterator.", "Wrap in <code>list()</code> to see the result."] },
  { id: 51, title: "divmod()", topic: "builtins", difficulty: "medium",
    desc: "Use divmod(17, 5) to get both quotient and remainder in one call. It returns (3, 2).",
    code: 'q, r = ' + sf('divmod') + '(17, 5)\n' + sf('print') + '(q, r)   ' + sc('# 3 2'),
    guidance: ["<code>divmod(17, 5)</code> is (17//5, 17%5) i.e. (3, 2).", "Useful for splitting into quotient and remainder."] },
  { id: 52, title: "pow() or **", topic: "builtins", difficulty: "easy",
    desc: "Use pow(2, 10) for 2**10. Optionally pow(2, 10, 1000) for (2**10) % 1000.",
    code: sf('print') + '(' + sf('pow') + '(2, 10))\n' + sf('print') + '(pow(2, 10, ' + sb() + '))   ' + sc('# 24'),
    guidance: ["<code>pow(2, 10)</code> is 1024.", "<code>pow(2, 10, 1000)</code> is 1024 % 1000 = 24. Fill: <code>1000</code>."] },

  /* ─── Datatype advance (7): range, tuple, list, bool, string, dictionary ─── */
  { id: 53, title: "range: start, stop, step", topic: "datatype_advance", difficulty: "medium",
    desc: "Use range(2, 11, 2) to get even numbers 2 to 10. Convert to list and print. Then use negative step: range(5, 0, -1).",
    code: sf('print') + '(' + sf('list') + '(' + sf('range') + '(2, 11, 2)))   ' + sc('# [2,4,6,8,10]') + '\n' + sf('print') + '(list(range(5, 0, ' + sb() + ')))   ' + sc('# [5,4,3,2,1]'),
    guidance: ["<code>range(start, stop, step)</code>: stop is exclusive.", "Negative step counts down. Fill: <code>-1</code>."] },
  { id: 54, title: "Tuple: immutability and indexing", topic: "datatype_advance", difficulty: "medium",
    desc: "Create t = (10, 20, 30). Print t[1] and t[-1]. Try t[1] = 99 (will raise TypeError — tuples are immutable).",
    code: 't = (10, 20, 30)\n' + sf('print') + '(t[1], t[-1])   ' + sc('# 20 30') + '\n' + sc('# t[1] = 99  TypeError'),
    guidance: ["Tuples are <strong>immutable</strong>: you cannot assign to t[i].", "Indexing and slicing work; t[1] is 20, t[-1] is 30."] },
  { id: 55, title: "List: mutability and in-place methods", topic: "datatype_advance", difficulty: "medium",
    desc: "Create L = [1, 2, 3]. Use L.append(4), L.insert(0, 0), then L.pop(). Print L.",
    code: 'L = [1, 2, 3]\nL.' + sf('append') + '(4)\nL.' + sf('insert') + '(0, 0)\nL.' + sf('pop') + '()\n' + sf('print') + '(L)   ' + sc('# [0, 1, 2, 3]'),
    guidance: ["Lists are <strong>mutable</strong>. append(4) adds at end; insert(0, 0) at start; pop() removes and returns last.", "Result: [0, 1, 2, 3]."] },
  { id: 56, title: "bool: truthiness and bool()", topic: "datatype_advance", difficulty: "medium",
    desc: "Use bool() on 0, 1, '', 'hi', [], [1]. Print bool(0), bool(''), bool([1]). Know: empty sequences are False.",
    code: sf('print') + '(' + sf('bool') + '(0), ' + sf('bool') + '(' + ss('""') + '), ' + sf('bool') + '([1]))   ' + sc('# False False True'),
    guidance: ["<code>bool(0)</code> and <code>bool('')</code> are False; <code>bool([1])</code> is True.", "Empty list [], empty string '', 0, None are falsy."] },
  { id: 57, title: "String: immutability and slicing", topic: "datatype_advance", difficulty: "medium",
    desc: "s = 'python'. Print s[0], s[-1], s[1:4]. Strings are immutable — s[0] = 'P' would raise TypeError.",
    code: 's = ' + ss('"python"') + '\n' + sf('print') + '(s[0], s[-1], s[1:4])   ' + sc('# p n yth') + '\n' + sc('# s[0] = "P"  TypeError'),
    guidance: ["Strings are <strong>immutable</strong>. Read with s[i] or s[a:b]; to change, build a new string.", "s[1:4] is 'yth' (indices 1,2,3)."] },
  { id: 58, title: "Dictionary: keys, values, items", topic: "datatype_advance", difficulty: "medium",
    desc: "d = {'a': 1, 'b': 2}. Print list(d.keys()), list(d.values()), list(d.items()). Add d['c'] = 3 and get d.get('c', 0).",
    code: 'd = {' + ss('"a"') + ': 1, ' + ss('"b"') + ': 2}\n' + sf('print') + '(list(d.keys()), list(d.values()))\nd[' + ss('"c"') + '] = 3\n' + sf('print') + '(d.' + sf('get') + '(' + ss('"c"') + ', 0))   ' + sc('# 3'),
    guidance: [".keys(), .values(), .items() return views; wrap in list() to print.", "d.get('c', 0) returns value or default; d['c']=3 then get gives 3."] },
  { id: 59, title: "Dictionary: update and copy", topic: "datatype_advance", difficulty: "medium",
    desc: "d = {1: 'a'}. Use d.update({2: 'b', 3: 'c'}). Create a shallow copy with d2 = d.copy() or dict(d). Print d, d2.",
    code: 'd = {1: ' + ss('"a"') + '}\nd.' + sf('update') + '({2: ' + ss('"b"') + ', 3: ' + ss('"c"') + '})\nd2 = d.' + sf('copy') + '()\n' + sf('print') + '(d, d2)   ' + sc('# {1:a, 2:b, 3:c}'),
    guidance: ["<code>d.update(other)</code> merges key-value pairs into d.", "<code>d.copy()</code> or <code>dict(d)</code> makes a shallow copy."] }
];

/* ─────────────────────────────────────────────
   CHAPTER 2 — Control Flow
   if/else: 8 | for: 15 | while: 5 | break/continue: 5 | numbers: 10 | strings: 23 | pattern: 15
───────────────────────────────────────────── */
var ch2 = [
  /* ─── if/else (8) ─── */
  { id: 1, title: "if / else", topic: "if", difficulty: "easy",
    desc: "Write an if/else that prints 'Adult' if age >= 18, else 'Minor'.",
    code: 'age = ' + sb() + '\n' + sk('if') + ' age >= 18:\n  ' + sf('print') + '(' + ss('"Adult"') + ')\n' + sk('else') + ':\n  ' + sf('print') + '(' + ss('"Minor"') + ')',
    guidance: ["Use <code>if condition:</code> and <code>else:</code> with a colon.", "Indent the body (4 spaces).", "Set <code>age = 20</code> or <code>age = 10</code> to test both branches."] },
  { id: 2, title: "elif Chain", topic: "if", difficulty: "easy",
    desc: "Use if / elif / else to print 'small', 'medium', or 'large' based on a number n.",
    code: 'n = ' + sb() + '\n' + sk('if') + ' n < 10:\n  ' + sf('print') + '(' + ss('"small"') + ')\n' + sk('elif') + ' n < 100:\n  ' + sf('print') + '(' + ss('"medium"') + ')\n' + sk('else') + ':\n  ' + sf('print') + '(' + ss('"large"') + ')',
    guidance: ["<code>elif</code> is short for else-if; only one branch runs.", "Test with n=5 (small), n=50 (medium), n=200 (large)."] },
  { id: 3, title: "Nested if", topic: "if", difficulty: "easy",
    desc: "Use a nested if: if x > 0, then check if x is even; print 'positive even' or 'positive odd'. Else print 'non-positive'.",
    code: 'x = ' + sb() + '\n' + sk('if') + ' x > 0:\n  ' + sk('if') + ' x % 2 == 0:\n    ' + sf('print') + '(' + ss('"positive even"') + ')\n  ' + sk('else') + ':\n    ' + sf('print') + '(' + ss('"positive odd"') + ')\n' + sk('else') + ':\n  ' + sf('print') + '(' + ss('"non-positive"') + ')',
    guidance: ["Put an <code>if</code> inside another <code>if</code> block (nested).", "Test with x=4 (positive even), x=3 (positive odd), x=-1 (non-positive)."] },
  { id: 4, title: "Multiple Conditions with and", topic: "if", difficulty: "easy",
    desc: "Print 'in range' if n is between 1 and 10 (inclusive), else 'out of range'.",
    code: 'n = ' + sb() + '\n' + sk('if') + ' n >= 1 ' + sk('and') + ' n <= 10:\n  ' + sf('print') + '(' + ss('"in range"') + ')\n' + sk('else') + ':\n  ' + sf('print') + '(' + ss('"out of range"') + ')',
    guidance: ["Combine conditions with <code>and</code>.", "Alternatively use <code>1 <= n <= 10</code> (chained comparison)."] },
  { id: 5, title: "Multiple Conditions with or", topic: "if", difficulty: "easy",
    desc: "Print 'weekend' if day is 'Saturday' or 'Sunday', else 'weekday'.",
    code: 'day = ' + sb() + '\n' + sk('if') + ' day == ' + ss('"Saturday"') + ' ' + sk('or') + ' day == ' + ss('"Sunday"') + ':\n  ' + sf('print') + '(' + ss('"weekend"') + ')\n' + sk('else') + ':\n  ' + sf('print') + '(' + ss('"weekday"') + ')',
    guidance: ["<code>or</code> is True if at least one condition is True.", "Test with day=\"Saturday\" or \"Monday\"."] },
  { id: 6, title: "Ternary (if-else expression)", topic: "if", difficulty: "easy",
    desc: "Use a one-line conditional: assign status = 'pass' if score >= 60 else 'fail'. Print status.",
    code: 'score = ' + sb() + '\nstatus = ' + ss('"pass"') + ' ' + sk('if') + ' score >= 60 ' + sk('else') + ' ' + ss('"fail"') + '\n' + sf('print') + '(status)',
    guidance: ["<code>a if cond else b</code> is the ternary form.", "Test with score=70 (pass) and score=50 (fail)."] },
  { id: 7, title: "Empty vs Non-empty", topic: "if", difficulty: "easy",
    desc: "If a list L is non-empty, print its first element; else print 'empty list'.",
    code: 'L = ' + sb() + '  ' + sc('# e.g. [1,2,3] or []') + '\n' + sk('if') + ' L:\n  ' + sf('print') + '(L[0])\n' + sk('else') + ':\n  ' + sf('print') + '(' + ss('"empty list"') + ')',
    guidance: ["Empty list <code>[]</code> is falsy; non-empty list is truthy.", "So <code>if L:</code> is a common Python idiom."] },
  { id: 8, title: "if with not", topic: "if", difficulty: "medium",
    desc: "Print 'invalid' if age is not between 0 and 120. Otherwise print 'valid'.",
    code: 'age = ' + sb() + '\n' + sk('if') + ' ' + sk('not') + ' (0 <= age <= 120):\n  ' + sf('print') + '(' + ss('"invalid"') + ')\n' + sk('else') + ':\n  ' + sf('print') + '(' + ss('"valid"') + ')',
    guidance: ["<code>not (condition)</code> inverts the boolean.", "You can also write <code>if age < 0 or age > 120</code>."] },
  /* ─── for loop (15) ─── */
  { id: 9, title: "for over a List", topic: "loops", difficulty: "easy",
    desc: "Loop over a list of names and print each name with a greeting.",
    code: 'names = [' + ss('"Ali"') + ', ' + ss('"Bo"') + ', ' + ss('"Cat"') + ']\n' + sk('for') + ' name ' + sk('in') + ' names:\n  ' + sf('print') + '(' + ss('"Hi, "') + ' + ' + sb() + ')',
    guidance: ["<code>for item in sequence:</code> iterates over each element.", "Use the loop variable <code>name</code> in the print. Fill: <code>name</code>."] },
  { id: 10, title: "for with range(n)", topic: "loops", difficulty: "easy",
    desc: "Use for i in range(5) to print 0, 1, 2, 3, 4.",
    code: sk('for') + ' i ' + sk('in') + ' ' + sf('range') + '(5):\n  ' + sf('print') + '(' + sb() + ')',
    guidance: ["<code>range(5)</code> yields 0, 1, 2, 3, 4.", "Fill: <code>i</code>."] },
  { id: 11, title: "for with range(start, end)", topic: "loops", difficulty: "easy",
    desc: "Loop from 2 to 6 (exclusive) using range(2, 6) and print each number.",
    code: sk('for') + ' n ' + sk('in') + ' ' + sf('range') + '(2, 6):\n  ' + sf('print') + '(' + sb() + ')',
    guidance: ["<code>range(2, 6)</code> gives 2, 3, 4, 5.", "Fill: <code>n</code>."] },
  { id: 12, title: "for with range step", topic: "loops", difficulty: "easy",
    desc: "Use range(0, 10, 2) to print even numbers 0, 2, 4, 6, 8.",
    code: sk('for') + ' x ' + sk('in') + ' ' + sf('range') + '(0, 10, 2):\n  ' + sf('print') + '(' + sb() + ')',
    guidance: ["<code>range(start, stop, step)</code> — step of 2 skips every other.", "Fill: <code>x</code>."] },
  { id: 13, title: "Sum with for", topic: "loops", difficulty: "easy",
    desc: "Loop over nums = [10, 20, 30] and compute the sum. Print the sum.",
    code: 'nums = [10, 20, 30]\ntotal = 0\n' + sk('for') + ' n ' + sk('in') + ' nums:\n  total = total + ' + sb() + '\n' + sf('print') + '(total)   ' + sc('# 60'),
    guidance: ["Initialize <code>total = 0</code>, then add each <code>n</code> in the loop.", "Fill: <code>n</code>."] },
  { id: 14, title: "for over string", topic: "loops", difficulty: "easy",
    desc: "Loop over each character in s = 'Hi' and print each character.",
    code: 's = ' + ss('"Hi"') + '\n' + sk('for') + ' c ' + sk('in') + ' s:\n  ' + sf('print') + '(' + sb() + ')',
    guidance: ["Strings are iterable; <code>for c in s</code> gives each character.", "Fill: <code>c</code>. Output: H, then i."] },
  { id: 15, title: "Count with for", topic: "loops", difficulty: "easy",
    desc: "Count how many numbers in [3, 7, 2, 7, 9, 7] are equal to 7. Print the count.",
    code: 'vals = [3, 7, 2, 7, 9, 7]\ncount = 0\n' + sk('for') + ' v ' + sk('in') + ' vals:\n  ' + sk('if') + ' v == 7:\n    count = count + 1\n' + sf('print') + '(count)   ' + sc('# 3'),
    guidance: ["Use a counter; increment when <code>v == 7</code>.", "Result: 3."] },
  { id: 16, title: "for with list indices", topic: "loops", difficulty: "medium",
    desc: "Use for i in range(len(items)) to loop by index. Print each index and items[i].",
    code: 'items = [' + ss('"a"') + ', ' + ss('"b"') + ', ' + ss('"c"') + ']\n' + sk('for') + ' i ' + sk('in') + ' ' + sf('range') + '(' + sf('len') + '(items)):\n  ' + sf('print') + '(i, ' + sb() + ')',
    guidance: ["<code>len(items)</code> is 3; range(3) gives 0, 1, 2.", "Access element with <code>items[i]</code>. Fill: <code>items[i]</code>."] },
  { id: 17, title: "Build list in for", topic: "loops", difficulty: "easy",
    desc: "Loop over [1, 2, 3] and build a new list of doubles [2, 4, 6]. Print it.",
    code: 'nums = [1, 2, 3]\ndoubles = []\n' + sk('for') + ' x ' + sk('in') + ' nums:\n  doubles.' + sf('append') + '(' + sb() + ')\n' + sf('print') + '(doubles)',
    guidance: ["Start with empty list; append <code>x * 2</code> (or <code>x + x</code>) each time.", "Fill: <code>x * 2</code>."] },
  { id: 18, title: "for over dict keys", topic: "loops", difficulty: "easy",
    desc: "Loop over d = {'a': 1, 'b': 2} and print each key and its value.",
    code: 'd = {' + ss('"a"') + ': 1, ' + ss('"b"') + ': 2}\n' + sk('for') + ' k ' + sk('in') + ' d:\n  ' + sf('print') + '(k, ' + sb() + ')',
    guidance: ["<code>for k in d</code> iterates over keys.", "Value is <code>d[k]</code>. Fill: <code>d[k]</code>."] },
  { id: 19, title: "for with enumerate", topic: "loops", difficulty: "medium",
    desc: "Use for i, name in enumerate(['Ali', 'Bo']) and print index and name.",
    code: sk('for') + ' i, name ' + sk('in') + ' ' + sf('enumerate') + '([' + ss('"Ali"') + ', ' + ss('"Bo"') + ']):\n  ' + sf('print') + '(' + sb() + ', name)',
    guidance: ["<code>enumerate(seq)</code> yields (0, first), (1, second), ...", "Fill: <code>i</code>. Output: 0 Ali, 1 Bo."] },
  { id: 20, title: "Nested for (table)", topic: "loops", difficulty: "medium",
    desc: "Use two nested for loops: outer 1..2, inner 1..3. Print (i, j) for each pair.",
    code: sk('for') + ' i ' + sk('in') + ' ' + sf('range') + '(1, 3):\n  ' + sk('for') + ' j ' + sk('in') + ' range(1, 4):\n    ' + sf('print') + '(i, ' + sb() + ')',
    guidance: ["Inner loop runs fully for each outer value.", "Fill: <code>j</code>. Pairs: (1,1),(1,2),(1,3),(2,1),(2,2),(2,3)."] },
  { id: 21, title: "for-else (no break)", topic: "loops", difficulty: "medium",
    desc: "Loop over [2, 4, 6]; if you find 5, break. Use for-else: else block runs only if no break. Print 'found' or 'not found'.",
    code: sk('for') + ' x ' + sk('in') + ' [2, 4, 6]:\n  ' + sk('if') + ' x == 5:\n    ' + sf('print') + '(' + ss('"found"') + ')\n    ' + sk('break') + '\n' + sk('else') + ':\n  ' + sf('print') + '(' + ss('"not found"') + ')',
    guidance: ["<code>for</code> can have an <code>else</code> that runs when the loop ends without <code>break</code>.", "Here 5 is not in the list, so else runs → 'not found'."] },
  { id: 22, title: "Iterate backwards", topic: "loops", difficulty: "easy",
    desc: "Use range(4, 0, -1) or reversed(range(1,5)) to print 4, 3, 2, 1.",
    code: sk('for') + ' i ' + sk('in') + ' ' + sf('range') + '(4, 0, -1):\n  ' + sf('print') + '(' + sb() + ')',
    guidance: ["<code>range(4, 0, -1)</code> gives 4, 3, 2, 1 (step -1).", "Fill: <code>i</code>."] },
  { id: 23, title: "for over tuple", topic: "loops", difficulty: "easy",
    desc: "Loop over the tuple (10, 20, 30) and print each value.",
    code: 't = (10, 20, 30)\n' + sk('for') + ' v ' + sk('in') + ' t:\n  ' + sf('print') + '(' + sb() + ')',
    guidance: ["Tuples are iterable like lists.", "Fill: <code>v</code>."] },
  /* ─── while (5) ─── */
  { id: 24, title: "while Loop", topic: "loops", difficulty: "medium",
    desc: "Use a while loop to print 1, 2, 3 and then stop when the counter reaches 4.",
    code: 'i = 1\n' + sk('while') + ' i < 4:\n  ' + sf('print') + '(' + sb() + ')\n  i = i + ' + sn('1') + '\n' + sf('print') + '(' + ss('"Done"') + ')',
    guidance: ["<code>while condition:</code> repeats while the condition is True.", "Increment <code>i</code> inside the loop to avoid infinite loop.", "Fill the print with <code>i</code>."] },
  { id: 25, title: "while countdown", topic: "loops", difficulty: "easy",
    desc: "Use while to count down from 3 to 1, then print 'Go!'.",
    code: 'n = 3\n' + sk('while') + ' n >= 1:\n  ' + sf('print') + '(' + sb() + ')\n  n = n - 1\n' + sf('print') + '(' + ss('"Go!"') + ')',
    guidance: ["Condition: <code>n >= 1</code>. Decrement <code>n</code> each time.", "Fill: <code>n</code>. Output: 3, 2, 1, Go!"] },
  { id: 26, title: "while with user-style input", topic: "loops", difficulty: "medium",
    desc: "Simulate: keep adding 1 to total while total < 10. Start total=0. Print total at the end.",
    code: 'total = 0\n' + sk('while') + ' total < 10:\n  total = total + 1\n' + sf('print') + '(' + sb() + ')   ' + sc('# 10'),
    guidance: ["Loop until <code>total >= 10</code>.", "Fill: <code>total</code>. Result: 10."] },
  { id: 27, title: "while with break", topic: "loops", difficulty: "medium",
    desc: "Use while True; inside, increment i from 0. When i reaches 3, break. Print i after the loop.",
    code: 'i = 0\n' + sk('while') + ' True:\n  i = i + 1\n  ' + sk('if') + ' i == 3:\n    ' + sk('break') + '\n' + sf('print') + '(' + sb() + ')   ' + sc('# 3'),
    guidance: ["<code>while True</code> runs until <code>break</code>.", "Fill: <code>i</code>. i becomes 1, 2, then 3 and we break."] },
  { id: 28, title: "while until condition", topic: "loops", difficulty: "easy",
    desc: "Start with x = 0. While x < 4, print x and then set x = x + 2. What gets printed?",
    code: 'x = 0\n' + sk('while') + ' x < 4:\n  ' + sf('print') + '(' + sb() + ')\n  x = x + 2',
    guidance: ["First: x=0, print 0, x=2. Then: x=2, print 2, x=4. Then loop stops.", "Fill: <code>x</code>. Output: 0, 2."] },
  /* ─── break / continue (5) ─── */
  { id: 29, title: "break", topic: "control", difficulty: "medium",
    desc: "Loop over range(10) and break when you see 5. Print the number before breaking.",
    code: sk('for') + ' x ' + sk('in') + ' ' + sf('range') + '(10):\n  ' + sk('if') + ' x == 5:\n    ' + sf('print') + '(x)\n    ' + sk('break') + '\n' + sf('print') + '(' + ss('"After loop"') + ')',
    guidance: ["<code>break</code> exits the innermost loop immediately.", "So you print 5 and then exit; \"After loop\" prints once."] },
  { id: 30, title: "continue", topic: "control", difficulty: "medium",
    desc: "Loop 1 to 5; use continue to skip 3, so you only print 1, 2, 4, 5.",
    code: sk('for') + ' k ' + sk('in') + ' ' + sf('range') + '(1, 6):\n  ' + sk('if') + ' k == 3:\n    ' + sk('continue') + '\n  ' + sf('print') + '(' + sb() + ')',
    guidance: ["<code>continue</code> skips the rest of the iteration and goes to the next.", "Fill in: <code>k</code>. So 3 is skipped."] },
  { id: 31, title: "break in nested loop", topic: "control", difficulty: "medium",
    desc: "Nested for: outer 1..3, inner 1..3. Break from inner when inner equals 2. Print (i, j) only when not broken.",
    code: sk('for') + ' i ' + sk('in') + ' range(1, 4):\n  ' + sk('for') + ' j ' + sk('in') + ' range(1, 4):\n    ' + sk('if') + ' j == 2:\n      ' + sk('break') + '\n    ' + sf('print') + '(i, j)',
    guidance: ["<code>break</code> only exits the inner loop.", "So for each i you get (i, 1) then break. Output: (1,1), (2,1), (3,1)."] },
  { id: 32, title: "continue to skip evens", topic: "control", difficulty: "easy",
    desc: "Loop over range(1, 7). Use continue to skip even numbers. Print only odd numbers (1, 3, 5).",
    code: sk('for') + ' n ' + sk('in') + ' ' + sf('range') + '(1, 7):\n  ' + sk('if') + ' n % 2 == 0:\n    ' + sk('continue') + '\n  ' + sf('print') + '(' + sb() + ')',
    guidance: ["When <code>n % 2 == 0</code>, skip to next iteration.", "Fill: <code>n</code>. Result: 1, 3, 5."] },
  { id: 33, title: "break and else", topic: "control", difficulty: "medium",
    desc: "Loop over [1, 2, 3]. If you find 4, break. Use for-else to print 'not found' when loop completes without break.",
    code: sk('for') + ' x ' + sk('in') + ' [1, 2, 3]:\n  ' + sk('if') + ' x == 4:\n    ' + sk('break') + '\n' + sk('else') + ':\n  ' + sf('print') + '(' + ss('"not found"') + ')',
    guidance: ["<code>for</code>-<code>else</code>: else runs only if no break occurred.", "4 is not in the list, so we never break → else runs, prints 'not found'."] },
  /* ─── number & basic math logic (8) ─── */
  { id: 34, title: "Sum of Two Numbers", topic: "numbers", difficulty: "easy",
    desc: "Given a and b, compute and print their sum. Use variables and the + operator.",
    code: 'a = ' + sn('10') + '\nb = ' + sn('20') + '\n' + sf('print') + '(a ' + sb() + ' b)   ' + sc('# 30'),
    guidance: ["<code>a + b</code> gives the sum.", "Fill: <code>+</code>. Result: 30."] },
  { id: 35, title: "Even or Odd", topic: "numbers", difficulty: "easy",
    desc: "Check if n is even using n % 2 == 0. Print 'even' or 'odd' accordingly.",
    code: 'n = ' + sb() + '\n' + sk('if') + ' n % 2 == 0:\n  ' + sf('print') + '(' + ss('"even"') + ')\n' + sk('else') + ':\n  ' + sf('print') + '(' + ss('"odd"') + ')',
    guidance: ["<code>n % 2 == 0</code> is True for even numbers.", "Test with n=4 (even) or n=7 (odd)."] },
  { id: 36, title: "Absolute Difference", topic: "numbers", difficulty: "easy",
    desc: "Given two numbers x and y, print the absolute difference (always non-negative). Use abs() or an if.",
    code: 'x, y = 15, 8\n' + sf('print') + '(' + sf('abs') + '(x - y))   ' + sc('# 7'),
    guidance: ["<code>abs(x - y)</code> gives the positive difference.", "Or: <code>x - y if x >= y else y - x</code>."] },
  { id: 37, title: "Integer Division and Remainder", topic: "numbers", difficulty: "easy",
    desc: "For 17 divided by 5: print quotient (//) and remainder (%).",
    code: 'n, d = 17, 5\n' + sf('print') + '(n // d, n ' + sb() + ' d)   ' + sc('# 3 2'),
    guidance: ["<code>17 // 5</code> is 3 (quotient). <code>17 % 5</code> is 2 (remainder).", "Fill: <code>%</code>."] },
  { id: 38, title: "Larger of Two", topic: "numbers", difficulty: "easy",
    desc: "Given a and b, print the larger value. Use an if/else or max(a, b).",
    code: 'a, b = 7, 12\n' + sf('print') + '(' + sf('max') + '(a, ' + sb() + '))   ' + sc('# 12'),
    guidance: ["<code>max(a, b)</code> returns the larger of the two.", "Fill: <code>b</code>. Or use <code>a if a > b else b</code>."] },
  { id: 39, title: "Digit Sum (Two Digits)", topic: "numbers", difficulty: "medium",
    desc: "For a two-digit number n (e.g. 57), compute sum of digits: tens = n // 10, ones = n % 10. Print tens + ones.",
    code: 'n = 57\ntens = n // 10\nones = n ' + sb() + ' 10\n' + sf('print') + '(tens + ones)   ' + sc('# 12'),
    guidance: ["<code>n // 10</code> is 5 (tens). <code>n % 10</code> is 7 (ones).", "Fill: <code>%</code>. Sum: 12."] },
  { id: 40, title: "Positive, Negative or Zero", topic: "numbers", difficulty: "easy",
    desc: "Print 'positive', 'negative', or 'zero' based on the value of n using if/elif/else.",
    code: 'n = ' + sb() + '\n' + sk('if') + ' n > 0:\n  ' + sf('print') + '(' + ss('"positive"') + ')\n' + sk('elif') + ' n < 0:\n  ' + sf('print') + '(' + ss('"negative"') + ')\n' + sk('else') + ':\n  ' + sf('print') + '(' + ss('"zero"') + ')',
    guidance: ["Compare n with 0: <code>n > 0</code>, <code>n < 0</code>, else zero.", "Test with n=5, n=-3, n=0."] },
  { id: 41, title: "Average of Three", topic: "numbers", difficulty: "easy",
    desc: "Compute the average of three numbers a, b, c. Print (a + b + c) / 3.",
    code: 'a, b, c = 10, 20, 30\n' + sf('print') + '((a + b + c) ' + sb() + ' 3)   ' + sc('# 20.0'),
    guidance: ["Average = sum / count. <code>(a + b + c) / 3</code> gives 20.0.", "Fill: <code>/</code>. Use float division for decimal result."] },
  { id: 42, title: "GCD (Euclidean logic)", topic: "numbers", difficulty: "hard",
    desc: "Given two positive integers a and b, find the GCD using repeated remainder: while b != 0, set a, b = b, a % b. Print a (the GCD).",
    code: 'a, b = 48, 18\n' + sk('while') + ' b != 0:\n  a, b = b, a ' + sb() + ' b\n' + sf('print') + '(a)   ' + sc('# 6'),
    guidance: ["Euclidean algorithm: replace (a, b) with (b, a % b) until b is 0.", "Fill: <code>%</code>. GCD(48, 18) = 6."] },
  { id: 43, title: "Prime Check", topic: "numbers", difficulty: "hard",
    desc: "Check if n is prime: no divisor from 2 to int(n**0.5). Use a loop; if any divisor found, set is_prime = False and break.",
    code: 'n = ' + sb() + '\nis_prime = True\n' + sk('for') + ' d ' + sk('in') + ' range(2, int(n ** 0.5) + 1):\n  ' + sk('if') + ' n % d == 0:\n    is_prime = False\n    ' + sk('break') + '\n' + sf('print') + '(is_prime)',
    guidance: ["If <code>n % d == 0</code> for any d in 2..sqrt(n), n is not prime.", "Test with n=17 (True) or n=15 (False). Fill: e.g. <code>17</code>."] },
  /* ─── strings mastery (10) ─── */
  { id: 44, title: "Slice First and Last", topic: "strings", difficulty: "easy",
    desc: "Given s = 'Python', print the first character and the last character using indexing.",
    code: 's = ' + ss('"Python"') + '\n' + sf('print') + '(s[0], s[' + sb() + '])   ' + sc('# P n'),
    guidance: ["First: <code>s[0]</code>. Last: <code>s[-1]</code>.", "Fill: <code>-1</code>."] },
  { id: 45, title: "Reverse a String", topic: "strings", difficulty: "easy",
    desc: "Reverse the string 'hello' using slicing: s[::-1]. Print the result.",
    code: 's = ' + ss('"hello"') + '\n' + sf('print') + '(s[' + sb() + '])   ' + sc('# olleh'),
    guidance: ["<code>s[::-1]</code> means start:end:step with step -1 (reverse).", "Fill: <code>::-1</code>."] },
  { id: 46, title: "Upper and Lower", topic: "strings", difficulty: "easy",
    desc: "Convert a string to uppercase with .upper() and to lowercase with .lower(). Print both.",
    code: 's = ' + ss('"Hi There"') + '\n' + sf('print') + '(s.' + sf('upper') + '(), s.' + sf('lower') + '())',
    guidance: ["<code>.upper()</code> and <code>.lower()</code> return new strings.", "Result: HI THERE, hi there."] },
  { id: 47, title: "Strip Whitespace", topic: "strings", difficulty: "easy",
    desc: "Use .strip() to remove leading and trailing spaces from a string. Print the stripped result.",
    code: 's = ' + ss('"  hello  "') + '\n' + sf('print') + '(s.' + sf('strip') + '())',
    guidance: ["<code>.strip()</code> removes spaces (or specified chars) from both ends.", "Result: <code>hello</code>."] },
  { id: 48, title: "Replace Substring", topic: "strings", difficulty: "easy",
    desc: "Use .replace(old, new) to replace all 'cat' with 'dog' in the string. Print the result.",
    code: 's = ' + ss('"I have a cat and a cat"') + '\n' + sf('print') + '(s.' + sf('replace') + '(' + ss('"cat"') + ', ' + ss('"dog"') + '))',
    guidance: ["<code>s.replace(\"cat\", \"dog\")</code> returns a new string with all replacements.", "Result: I have a dog and a dog."] },
  { id: 49, title: "Split and Join", topic: "strings", difficulty: "medium",
    desc: "Split 'a,b,c' by comma to get a list, then join with '-'. Print the result 'a-b-c'.",
    code: 's = ' + ss('"a,b,c"') + '\nparts = s.' + sf('split') + '(' + ss('","') + ')\n' + sf('print') + '(' + ss('"-"') + '.' + sf('join') + '(' + sb() + '))',
    guidance: ["<code>s.split(\",\")</code> gives [\"a\", \"b\", \"c\"].", "\"-\".join(parts) gives \"a-b-c\". Fill: <code>parts</code>."] },
  { id: 50, title: "Count Occurrences", topic: "strings", difficulty: "easy",
    desc: "Use .count(sub) to count how many times 'a' appears in 'banana'. Print the count.",
    code: 's = ' + ss('"banana"') + '\n' + sf('print') + '(s.' + sf('count') + '(' + ss('"a"') + '))   ' + sc('# 3'),
    guidance: ["<code>s.count(\"a\")</code> returns the number of non-overlapping occurrences.", "Result: 3."] },
  { id: 51, title: "Starts With / Ends With", topic: "strings", difficulty: "easy",
    desc: "Use .startswith() and .endswith() to check if 'hello' starts with 'he' and ends with 'lo'. Print both results.",
    code: 's = ' + ss('"hello"') + '\n' + sf('print') + '(s.' + sf('startswith') + '(' + ss('"he"') + '), s.' + sf('endswith') + '(' + sb() + '))',
    guidance: ["<code>.startswith(\"he\")</code> is True. <code>.endswith(\"lo\")</code> is True.", "Fill: <code>\"lo\"</code>."] },
  { id: 52, title: "Find Index of Substring", topic: "strings", difficulty: "medium",
    desc: "Use .find('sub') to get the index of first occurrence. For 'hello', find index of 'll'. Print it (2).",
    code: 's = ' + ss('"hello"') + '\n' + sf('print') + '(s.' + sf('find') + '(' + ss('"ll"') + '))   ' + sc('# 2'),
    guidance: ["<code>s.find(\"ll\")</code> returns the starting index, or -1 if not found.", "Index of \"ll\" in \"hello\" is 2."] },
  { id: 53, title: "Format with f-string", topic: "strings", difficulty: "easy",
    desc: "Use an f-string to print 'Name: Alex, Age: 25' from variables name and age.",
    code: 'name, age = ' + ss('"Alex"') + ', 25\n' + sf('print') + '(f' + ss('"Name: {name}, Age: {age}"') + ')',
    guidance: ["f-string: <code>f\"Name: {name}, Age: {age}\"</code> inserts variable values.", "Result: Name: Alex, Age: 25."] },
  { id: 54, title: "First N Characters (slicing)", topic: "strings", difficulty: "easy",
    desc: "Using only slicing (no built-in methods), get the first 3 characters of s = 'Python'. Use s[:3]. Print it.",
    code: 's = ' + ss('"Python"') + '\n' + sf('print') + '(s[' + sb() + ':3])   ' + sc('# Pyt'),
    guidance: ["<code>s[:3]</code> is the slice from start up to (not including) index 3.", "Fill: leave blank or <code>0</code>. Result: Pyt."] },
  { id: 55, title: "Last N Characters (slicing)", topic: "strings", difficulty: "easy",
    desc: "Using slicing only, get the last 2 characters of s = 'hello'. Use s[-2:]. Print it.",
    code: 's = ' + ss('"hello"') + '\n' + sf('print') + '(s[' + sb() + ':])   ' + sc('# lo'),
    guidance: ["<code>s[-2:]</code> means from second-last to the end.", "Fill: <code>-2</code>. Result: lo."] },
  { id: 56, title: "Concatenate Two Strings", topic: "strings", difficulty: "easy",
    desc: "Without using any string methods, join two strings with +. Print 'Hello' + ' ' + 'World'.",
    code: sf('print') + '(' + ss('"Hello"') + ' + ' + ss('" "') + ' + ' + sb() + ')',
    guidance: ["The <code>+</code> operator concatenates strings.", "Fill: <code>\"World\"</code>. Result: Hello World."] },
  { id: 57, title: "Repeat String with *", topic: "strings", difficulty: "easy",
    desc: "Using only the * operator (no methods), repeat the string 'ab' three times. Print 'ab' * 3.",
    code: sf('print') + '(' + ss('"ab"') + ' * ' + sb() + ')   ' + sc('# ababab'),
    guidance: ["<code>string * n</code> repeats the string n times.", "Fill: <code>3</code>. Result: ababab."] },
  { id: 58, title: "Loop Over Each Character", topic: "strings", difficulty: "easy",
    desc: "Loop over s = 'Hi' with 'for c in s' and print each character. No built-in methods—just iteration.",
    code: 's = ' + ss('"Hi"') + '\n' + sk('for') + ' c ' + sk('in') + ' s:\n  ' + sf('print') + '(' + sb() + ')',
    guidance: ["Strings are iterable. <code>for c in s</code> gives each character.", "Fill: <code>c</code>. Output: H, then i."] },
  { id: 59, title: "String Traversal by Index", topic: "strings", difficulty: "easy",
    desc: "Traverse the string using index: for i in range(len(s)), print each s[i]. No string methods.",
    code: 's = ' + ss('"abc"') + '\n' + sk('for') + ' i ' + sk('in') + ' range(len(s)):\n  ' + sf('print') + '(s[' + sb() + '])',
    guidance: ["<code>range(len(s))</code> gives 0, 1, 2. Access character with <code>s[i]</code>.", "Fill: <code>i</code>. Output: a, b, c."] },
  { id: 60, title: "Frequency Counting", topic: "strings", difficulty: "medium",
    desc: "Count how many times each character appears in s = 'aabbbc'. Use a dict: loop for c in s, if c not in d: d[c]=0, then d[c]+=1. No .count().",
    code: 's = ' + ss('"aabbbc"') + '\nd = {}\n' + sk('for') + ' c ' + sk('in') + ' s:\n  ' + sk('if') + ' c ' + sk('not') + ' in d: d[c] = 0\n  d[c] = d[c] + 1\n' + sf('print') + '(d)',
    guidance: ["Build a dictionary: key = character, value = count.", "Initialize with <code>if c not in d: d[c] = 0</code> then <code>d[c] += 1</code>. Result: {\"a\":2, \"b\":3, \"c\":1}."] },
  { id: 61, title: "Anagrams (same character counts)", topic: "strings", difficulty: "medium",
    desc: "Check if two strings are anagrams: same characters, same frequencies. Build frequency dict for each (no .count() or sorted()): loop and use if c not in d: d[c]=0; d[c]+=1. Compare dicts.",
    code: 's1, s2 = ' + ss('"listen"') + ', ' + ss('"silent"') + '\nd1, d2 = {}, {}\n' + sk('for') + ' c ' + sk('in') + ' s1:\n  ' + sk('if') + ' c not in d1: d1[c] = 0\n  d1[c] = d1[c] + 1\n' + sk('for') + ' c in s2:\n  if c not in d2: d2[c] = 0\n  d2[c] = d2[c] + 1\n' + sf('print') + '(' + sb() + ')   ' + sc('# True'),
    guidance: ["Build <code>d1</code> from s1 and <code>d2</code> from s2 with the same loop pattern.", "Anagrams iff <code>d1 == d2</code>. Fill: <code>d1 == d2</code>."] },
  { id: 62, title: "All Substrings", topic: "strings", difficulty: "medium",
    desc: "Print all substrings of s = 'ab'. Use two loops: for i in range(len(s)), for j in range(i+1, len(s)+1), print s[i:j]. No string methods.",
    code: 's = ' + ss('"ab"') + '\n' + sk('for') + ' i ' + sk('in') + ' range(len(s)):\n  ' + sk('for') + ' j ' + sk('in') + ' range(i + 1, len(s) + 1):\n    ' + sf('print') + '(s[' + sb() + ':' + sb() + '])',
    guidance: ["<code>s[i:j]</code> is substring from index i to j-1.", "i from 0 to len(s)-1, j from i+1 to len(s). Fill: <code>i</code>, <code>j</code>. Output: a, b, ab."] },
  { id: 63, title: "Palindrome Check", topic: "strings", difficulty: "easy",
    desc: "Check if s reads the same forwards and backwards. Use slicing: s == s[::-1]. No string methods.",
    code: 's = ' + ss('"radar"') + '\n' + sf('print') + '(s == s[' + sb() + '])   ' + sc('# True'),
    guidance: ["<code>s[::-1]</code> reverses the string. Palindrome iff <code>s == s[::-1]</code>.", "Fill: <code>::-1</code>."] },
  { id: 64, title: "Remove Duplicates (order preserved)", topic: "strings", difficulty: "medium",
    desc: "Remove duplicate characters from s = 'aabbca' keeping first occurrence. Loop for c in s; if c not in result, add c to result. No set() or .count().",
    code: 's = ' + ss('"aabbca"') + '\nresult = ' + ss('""') + '\n' + sk('for') + ' c ' + sk('in') + ' s:\n  ' + sk('if') + ' c ' + sk('not') + ' in result:\n    result = result + ' + sb() + '\n' + sf('print') + '(result)   ' + sc('# abca'),
    guidance: ["Build <code>result</code> by adding each <code>c</code> only if <code>c not in result</code>.", "Fill: <code>c</code>. Result: abca."] },
  { id: 65, title: "First Non-Repeating Character", topic: "strings", difficulty: "medium",
    desc: "Find the first character that appears exactly once. Build frequency dict: for c in s, if c not in d: d[c]=0; d[c]+=1. Then loop s and print first c where d[c]==1.",
    code: 's = ' + ss('"aabbcde"') + '\nd = {}\n' + sk('for') + ' c ' + sk('in') + ' s:\n  ' + sk('if') + ' c not in d: d[c] = 0\n  d[c] = d[c] + 1\n' + sk('for') + ' c ' + sk('in') + ' s:\n  ' + sk('if') + ' d[c] == 1:\n    ' + sf('print') + '(' + sb() + ')\n    ' + sk('break') + '\n' + sc('# c'),
    guidance: ["First pass: build <code>d</code> with <code>if c not in d: d[c]=0</code> then <code>d[c]+=1</code>.", "Second pass: first <code>c</code> with <code>d[c] == 1</code>. Fill: <code>c</code>. Result: c."] },
  { id: 66, title: "Longest Common Prefix", topic: "strings", difficulty: "medium",
    desc: "Given words = ['abc','abd','abe'], find longest common prefix. Loop i; for each i check all words have same char at i (and i < len(word)); add to prefix else break. No .startswith().",
    code: 'words = [' + ss('"abc"') + ', ' + ss('"abd"') + ', ' + ss('"abe"') + ']\nprefix = ' + ss('""') + '\n' + sk('for') + ' i ' + sk('in') + ' range(len(words[0])):\n  c = words[0][i]\n  same = True\n  ' + sk('for') + ' j ' + sk('in') + ' range(len(words)):\n    ' + sk('if') + ' i >= len(words[j]) ' + sk('or') + ' words[j][i] != c:\n      same = False\n      ' + sk('break') + '\n  ' + sk('if') + ' not same: ' + sk('break') + '\n  prefix = prefix + ' + sb() + '\n' + sf('print') + '(prefix)   ' + sc('# ab'),
    guidance: ["For each i, set <code>c = words[0][i]</code>. Loop j: if <code>i >= len(words[j])</code> or <code>words[j][i] != c</code>, set same=False and break.", "If same, add <code>c</code> to prefix. Fill: <code>c</code>. Result: ab."] },
  /* ─── pattern (15) ─── */
  { id: 67, title: "Line of Stars", topic: "pattern", difficulty: "easy",
    desc: "Print a single line of 8 stars using string repeat (* character times 8).",
    code: sf('print') + '(' + ss('"*"') + ' * ' + sb() + ')',
    guidance: ["<code>\"*\" * 8</code> repeats the star 8 times.", "Result: <code>********</code>. Fill: <code>8</code>."] },
  { id: 68, title: "Right Triangle (4 rows)", topic: "pattern", difficulty: "easy",
    desc: "Print a right-aligned triangle: 1 star, then 2, then 3, then 4 stars (four separate lines).",
    code: sf('print') + '(' + ss('"*"') + ' * 1)\n' + sf('print') + '("*" * 2)\n' + sf('print') + '("*" * ' + sb() + ')\n' + sf('print') + '("*" * 4)',
    guidance: ["Each line uses <code>\"*\" * n</code> for n = 1, 2, 3, 4.", "Fill the third line: <code>3</code>. Output: *, **, ***, ****."] },
  { id: 69, title: "Square of Stars", topic: "pattern", difficulty: "easy",
    desc: "Print a 3x3 square: three lines, each line has 3 stars. Use one string for each line.",
    code: 'row = ' + ss('"*"') + ' * 3\n' + sf('print') + '(row)\n' + sf('print') + '(' + sb() + ')\n' + sf('print') + '(row)',
    guidance: ["<code>row = \"*\" * 3</code> gives <code>***</code>.", "Print row three times. Fill: <code>row</code>."] },
  { id: 70, title: "Repeating AB", topic: "pattern", difficulty: "easy",
    desc: "Print the pattern 'ABABAB' (AB repeated 3 times) using string repeat.",
    code: sf('print') + '(' + ss('"AB"') + ' * ' + sb() + ')',
    guidance: ["<code>\"AB\" * 3</code> produces <code>ABABAB</code>.", "Fill: <code>3</code>."] },
  { id: 71, title: "Number Row 1 to 5", topic: "pattern", difficulty: "easy",
    desc: "Print the numbers 1 2 3 4 5 in one line (space-separated). Use print(1, 2, 3, 4, 5).",
    code: sf('print') + '(' + sb() + ', 2, 3, 4, 5)',
    guidance: ["<code>print(1, 2, 3, 4, 5)</code> outputs <code>1 2 3 4 5</code>.", "Fill: <code>1</code>."] },
  { id: 72, title: "Pyramid Line 1", topic: "pattern", difficulty: "medium",
    desc: "Print the first line of a pyramid: 2 spaces then 1 star (so '  *'). Use string concatenation or repeat.",
    code: sf('print') + '(' + ss('" "') + ' * 2 + ' + ss('"*"') + ')',
    guidance: ["Two spaces plus one star: <code>\" \" * 2 + \"*\"</code>.", "Result: <code>  *</code>."] },
  { id: 73, title: "Hollow Rectangle Frame", topic: "pattern", difficulty: "medium",
    desc: "Print a 4-wide frame: first line '****', second line '*  *' (stars with 2 spaces in between).",
    code: sf('print') + '(' + ss('"*"') + ' * 4)\n' + sf('print') + '("*" + " " * ' + sb() + ' + "*")',
    guidance: ["Top: <code>\"*\" * 4</code>. Middle: <code>\"*\" + \" \" * 2 + \"*\"</code>.", "Fill: <code>2</code> (two spaces inside)."] },
  { id: 74, title: "Stair Step", topic: "pattern", difficulty: "easy",
    desc: "Print three steps: line 1 has 1 star, line 2 has 2 stars, line 3 has 3 stars.",
    code: sf('print') + '("*" * 1)\n' + sf('print') + '("*" * ' + sb() + ')\n' + sf('print') + '("*" * 3)',
    guidance: ["Three prints with 1, 2, 3 stars. Fill the middle: <code>2</code>."] },
  { id: 75, title: "Alternating Pattern", topic: "pattern", difficulty: "easy",
    desc: "Print one line with 5 alternating characters: '+*-*+' (plus, star, minus, star, plus).",
    code: sf('print') + '(' + ss('"+"') + ' + ' + ss('"*"') + ' + ' + ss('"-"') + ' + ' + ss('"*"') + ' + ' + sb() + ')',
    guidance: ["Concatenate: <code>\"+\" + \"*\" + \"-\" + \"*\" + \"+\"</code>.", "Fill: <code>\"+\"</code>."] },
  { id: 76, title: "Name Repeated 3 Times", topic: "pattern", difficulty: "easy",
    desc: "Store your name in a variable. Print it three times on one line with spaces (e.g. 'Ali Ali Ali').",
    code: 'name = ' + sb() + '\n' + sf('print') + '(name + " " + name + " " + name)',
    guidance: ["<code>name = \"Ali\"</code> then concatenate name, space, name, space, name.", "Or use <code>(name + \" \") * 2 + name</code>."] },
  { id: 77, title: "Digits in a Row", topic: "pattern", difficulty: "easy",
    desc: "Print the string '12345' by building it: use str(1)+str(2)+str(3)+str(4)+str(5) or ''.join.",
    code: sf('print') + '(' + sf('str') + '(1) + ' + sf('str') + '(2) + str(3) + str(4) + ' + sb() + ')',
    guidance: ["<code>str(1)+str(2)+...+str(5)</code> gives <code>\"12345\"</code>.", "Fill: <code>str(5)</code>."] },
  { id: 78, title: "Checker Row", topic: "pattern", difficulty: "easy",
    desc: "Print a checker pattern for 4 cells: '# # ' (hash, space, hash, space). Use repeat: ('# ' * 2).",
    code: sf('print') + '(' + ss('"# "') + ' * ' + sb() + ')',
    guidance: ["<code>\"# \" * 2</code> gives <code># # </code>.", "Fill: <code>2</code>."] },
  { id: 79, title: "Inverted Triangle", topic: "pattern", difficulty: "medium",
    desc: "Print 4 lines: 4 stars, then 3, then 2, then 1. Use four print statements with '*' * n.",
    code: sf('print') + '("*" * 4)\n' + sf('print') + '("*" * 3)\n' + sf('print') + '("*" * ' + sb() + ')\n' + sf('print') + '("*" * 1)',
    guidance: ["Lines use <code>\"*\" * 4</code>, <code>* 3</code>, <code>* 2</code>, <code>* 1</code>.", "Fill: <code>2</code>."] },
  { id: 80, title: "Plus Sign", topic: "pattern", difficulty: "medium",
    desc: "Print a simple plus: line 1 '  *  ', line 2 '  *  ', line 3 '*****', line 4 '  *  ', line 5 '  *  '. Build each with spaces and stars.",
    code: 's = "  *  "\n' + sf('print') + '(s)\n' + sf('print') + '(s)\n' + sf('print') + '("*" * 5)\n' + sf('print') + '(' + sb() + ')\n' + sf('print') + '(s)',
    guidance: ["<code>s = \"  *  \"</code> for the vertical bar. Middle line is <code>\"*\" * 5</code>.", "Fourth line same as first. Fill: <code>s</code>."] },
  { id: 81, title: "Border Box", topic: "pattern", difficulty: "medium",
    desc: "Print a 5-wide box: top and bottom '*****', middle line '*   *'. Use variables for the strings.",
    code: 'top = "*" * 5\nmid = "*" + " " * 3 + "*"\n' + sf('print') + '(top)\n' + sf('print') + '(' + sb() + ')\n' + sf('print') + '(top)',
    guidance: ["<code>top = \"*\"*5</code>, <code>mid = \"*\" + \" \"*3 + \"*\"</code>.", "Print top, mid, top. Fill: <code>mid</code>."] }
];

/* ─────────────────────────────────────────────
   CHAPTER 3 — Python Functions
   basics: 10 | advanced: 20 | scope: 7 | closures: 5
───────────────────────────────────────────── */
var ch3 = [
  /* ─── Basics (10): definition, call, return, parameters, arguments ─── */
  { id: 1, title: "Define and Call", topic: "basics", difficulty: "easy",
    desc: "Define a function greet() that takes no arguments and prints 'Hello!'. Then call it.",
    code: sk('def') + ' ' + sf('greet') + '():\n  ' + sf('print') + '(' + ss('"Hello!"') + ')\n\n' + sb() + '()',
    guidance: ["<code>def name():</code> defines a function with no parameters.", "Indent the body. Call with <code>greet()</code>. Fill the blank with <code>greet</code>."] },
  { id: 2, title: "Parameter and Return", topic: "basics", difficulty: "easy",
    desc: "Write a function double(n) that takes one parameter and returns n * 2. Print double(7).",
    code: sk('def') + ' ' + sf('double') + '(n):\n  ' + sk('return') + ' ' + sb() + ' * 2\n\n' + sf('print') + '(' + sf('double') + '(7))',
    guidance: ["Parameters go in parentheses: <code>def double(n):</code>.", "<code>return</code> sends a value back. Fill: <code>n</code>. Output: 14."] },
  { id: 3, title: "Multiple Parameters", topic: "basics", difficulty: "easy",
    desc: "Define add(a, b) that returns a + b. Call it with 3 and 5; print the result.",
    code: sk('def') + ' ' + sf('add') + '(a, b):\n  ' + sk('return') + ' a + b\n\n' + sf('print') + '(' + sf('add') + '(' + sb() + ', ' + sb() + '))  ' + sc('# 8'),
    guidance: ["Multiple parameters: <code>def add(a, b):</code>.", "Arguments are passed by position: <code>add(3, 5)</code> → 8."] },
  { id: 4, title: "Return and Use Value", topic: "basics", difficulty: "easy",
    desc: "Write square(x) that returns x**2. Store the result of square(4) in a variable and print it.",
    code: sk('def') + ' ' + sf('square') + '(x):\n  ' + sk('return') + ' x ** 2\n\nresult = ' + sf('square') + '(' + sn('4') + ')\n' + sf('print') + '(result)  ' + sc('# 16'),
    guidance: ["<code>return</code> sends a value back to the caller.", "Assign the return value: <code>result = square(4)</code>. Fill: <code>4</code>."] },
  { id: 5, title: "Parameters vs Arguments", topic: "basics", difficulty: "easy",
    desc: "Define greet(name). The parameter is 'name'; when you call greet('Ali'), the argument is 'Ali'. Print the greeting.",
    code: sk('def') + ' ' + sf('greet') + '(name):\n  ' + sf('print') + '(' + ss('"Hi, "') + ' + ' + sb() + ')\n\n' + sf('greet') + '(' + ss('"Ali"') + ')',
    guidance: ["<strong>Parameter</strong> is the name in the definition; <strong>argument</strong> is the value passed.", "Inside the function use the parameter name. Fill: <code>name</code>."] },
  { id: 6, title: "Call with Positional Arguments", topic: "basics", difficulty: "easy",
    desc: "Define repeat(s, n) that returns s * n. Call it with 'ab' and 3; print the result ('ababab').",
    code: sk('def') + ' ' + sf('repeat') + '(s, n):\n  ' + sk('return') + ' s * n\n\n' + sf('print') + '(' + sf('repeat') + '(' + ss('"ab"') + ', ' + sn('3') + '))',
    guidance: ["Positional arguments match parameters in order: first arg → first param, second → second.", "repeat(\"ab\", 3) gives \"ababab\"."] },
  { id: 7, title: "Return None", topic: "basics", difficulty: "easy",
    desc: "A function without a return statement returns None. Define say(msg) that only prints msg; then print the return value of say('hi').",
    code: sk('def') + ' ' + sf('say') + '(msg):\n  ' + sf('print') + '(msg)\n\n' + sf('print') + '(' + sf('say') + '(' + ss('"hi"') + '))  ' + sc('# None'),
    guidance: ["If there is no <code>return</code>, the function returns <code>None</code>.", "So print(say(\"hi\")) prints \"hi\" then None."] },
  { id: 8, title: "Function Returns a Value", topic: "basics", difficulty: "easy",
    desc: "Write is_even(n) that returns True if n % 2 == 0 else False. Print is_even(8) and is_even(7).",
    code: sk('def') + ' ' + sf('is_even') + '(n):\n  ' + sk('return') + ' n % 2 == ' + sn('0') + '\n\n' + sf('print') + '(' + sf('is_even') + '(8), ' + sf('is_even') + '(7))',
    guidance: ["Return the result of a boolean expression.", "8 % 2 == 0 is True; 7 % 2 == 0 is False."] },
  { id: 9, title: "Define and Call with One Argument", topic: "basics", difficulty: "easy",
    desc: "Define triple(x) that returns 3 * x. Call triple(5) and print the result.",
    code: sk('def') + ' ' + sf('triple') + '(x):\n  ' + sk('return') + ' 3 * x\n\n' + sf('print') + '(' + sf('triple') + '(' + sb() + '))  ' + sc('# 15'),
    guidance: ["One parameter <code>x</code>; one argument <code>5</code> when you call <code>triple(5)</code>.", "Fill: <code>5</code>."] },
  { id: 10, title: "Arguments in Call", topic: "basics", difficulty: "easy",
    desc: "Given def greet(first, last): print(first, last), call it so it prints 'Jane Doe'.",
    code: sk('def') + ' ' + sf('greet') + '(first, last):\n  ' + sf('print') + '(first, last)\n\n' + sf('greet') + '(' + sb() + ', ' + sb() + ')',
    guidance: ["Pass two arguments in order: first then last.", "Fill: <code>\"Jane\"</code>, <code>\"Doe\"</code> (or 'Jane', 'Doe')."] },

  /* ─── Advanced (20): multiple return, keyword/positional, *args, **kwargs, decorator, lambda (min 4), other ─── */
  { id: 11, title: "Multiple Return (tuple)", topic: "advanced", difficulty: "easy",
    desc: "Write min_max(a, b) that returns the smaller and larger as a tuple. Print min_max(10, 3).",
    code: sk('def') + ' ' + sf('min_max') + '(a, b):\n  ' + sk('if') + ' a < b:\n    ' + sk('return') + ' (a, b)\n  ' + sk('return') + ' (b, a)\n\n' + sf('print') + '(' + sf('min_max') + '(10, 3))  ' + sc('# (3, 10)'),
    guidance: ["You can return one tuple: <code>return (a, b)</code>.", "Return (b, a) when b is smaller so order is (min, max)."] },
  { id: 12, title: "Keyword Arguments", topic: "advanced", difficulty: "easy",
    desc: "Define greet(greeting, name) and call it using keyword arguments: name='Sam', greeting='Hi'.",
    code: sk('def') + ' ' + sf('greet') + '(greeting, name):\n  ' + sf('print') + '(greeting + ' + ss('" "') + ' + name)\n\n' + sf('greet') + '(name=' + ss('"Sam"') + ', greeting=' + ss('"Hi"') + ')',
    guidance: ["Keyword args: <code>greet(name=\"Sam\", greeting=\"Hi\")</code> — order does not matter.", "Output: Hi Sam."] },
  { id: 13, title: "Positional vs Keyword", topic: "advanced", difficulty: "easy",
    desc: "Define f(a, b, c). Call f(1, 2, 3) then f(1, c=3, b=2). Both should give the same result.",
    code: sk('def') + ' ' + sf('f') + '(a, b, c):\n  ' + sk('return') + ' a + b + c\n\n' + sf('print') + '(' + sf('f') + '(1, 2, 3), ' + sf('f') + '(1, ' + sb() + '=3, b=2))  ' + sc('# 6 6'),
    guidance: ["Positional: order matters. Keyword: name=value.", "Fill: <code>c</code> so f(1, c=3, b=2) is 6."] },
  { id: 14, title: "*args", topic: "advanced", difficulty: "medium",
    desc: "Define sum_all(*args) that returns the sum of all positional arguments. sum_all(1, 2, 3) → 6.",
    code: sk('def') + ' ' + sf('sum_all') + '(*args):\n  total = 0\n  ' + sk('for') + ' n ' + sk('in') + ' args:\n    total += n\n  ' + sk('return') + ' total\n\n' + sf('print') + '(' + sf('sum_all') + '(1, 2, 3))',
    guidance: ["<code>*args</code> collects extra positional arguments into a tuple.", "Loop over args and add to total."] },
  { id: 15, title: "**kwargs", topic: "advanced", difficulty: "medium",
    desc: "Define print_kw(**kwargs) that prints each key and value. Call print_kw(a=1, b=2).",
    code: sk('def') + ' ' + sf('print_kw') + '(**kwargs):\n  ' + sk('for') + ' k, v ' + sk('in') + ' kwargs.' + sf('items') + '():\n    ' + sf('print') + '(k, v)\n\n' + sf('print_kw') + '(a=1, b=2)',
    guidance: ["<code>**kwargs</code> collects keyword arguments into a dict.", "kwargs.items() gives (key, value) pairs."] },
  { id: 16, title: "*args and **kwargs", topic: "advanced", difficulty: "medium",
    desc: "Define f(*args, **kwargs) that returns (len(args), len(kwargs)). Print f(1, 2, x=3).",
    code: sk('def') + ' ' + sf('f') + '(*args, **kwargs):\n  ' + sk('return') + ' (' + sf('len') + '(args), ' + sf('len') + '(kwargs))\n\n' + sf('print') + '(' + sf('f') + '(1, 2, x=3))  ' + sc('# (2, 1)'),
    guidance: ["*args gets (1, 2); **kwargs gets {\"x\": 3}.", "len(args)==2, len(kwargs)==1."] },
  { id: 17, title: "Default and Keyword", topic: "advanced", difficulty: "easy",
    desc: "Define greet(name, greeting='Hello'). Call greet('A') then greet('B', greeting='Hi').",
    code: sk('def') + ' ' + sf('greet') + '(name, greeting=' + ss('"Hello"') + '):\n  ' + sf('print') + '(greeting, name)\n\n' + sf('greet') + '(' + ss('"A"') + ')\n' + sf('greet') + '(' + ss('"B"') + ', greeting=' + ss('"Hi"') + ')',
    guidance: ["Default: greet(\"A\") uses greeting='Hello'.", "Keyword overrides: greet(\"B\", greeting=\"Hi\")."] },
  { id: 18, title: "Decorator Basics", topic: "advanced", difficulty: "medium",
    desc: "Write a decorator log that prints 'calling' before invoking the function. Apply it to def hi(): print('hi').",
    code: sk('def') + ' ' + sf('log') + '(fn):\n  ' + sk('def') + ' wrapper():\n    ' + sf('print') + '(' + ss('"calling"') + ')\n    ' + sk('return') + ' fn()\n  ' + sk('return') + ' wrapper\n\n@' + sf('log') + '\n' + sk('def') + ' ' + sf('hi') + '():\n  ' + sf('print') + '(' + ss('"hi"') + ')\n\n' + sf('hi') + '()',
    guidance: ["Decorator takes a function and returns a wrapper.", "@log applies log to hi; calling hi() runs wrapper, which prints then fn()."] },
  { id: 19, title: "Decorator with Wrapper", topic: "advanced", difficulty: "medium",
    desc: "Write a decorator that doubles the return value of a function. Apply it to def two(): return 2 and print the result.",
    code: sk('def') + ' ' + sf('double_ret') + '(fn):\n  ' + sk('def') + ' wrapper():\n    ' + sk('return') + ' fn() * ' + sn('2') + '\n  ' + sk('return') + ' wrapper\n\n@' + sf('double_ret') + '\n' + sk('def') + ' two(): ' + sk('return') + ' 2\n\n' + sf('print') + '(' + sf('two') + '())  ' + sc('# 4'),
    guidance: ["Wrapper calls fn() and returns twice that value.", "two() returns 2; decorator makes it return 4."] },
  { id: 20, title: "Lambda: Add", topic: "advanced", difficulty: "easy",
    desc: "Create a lambda that adds 10 to its argument. Assign to add_10; print add_10(5) → 15.",
    code: 'add_10 = ' + sk('lambda') + ' x: x + 10\n' + sf('print') + '(add_10(' + sn('5') + '))  ' + sc('# 15'),
    guidance: ["<code>lambda x: x + 10</code> is an anonymous function.", "add_10(5) returns 15. Fill: 5."] },
  { id: 21, title: "Lambda: Double", topic: "advanced", difficulty: "easy",
    desc: "Create lambda double that multiplies its argument by 2. Print double(7).",
    code: 'double = ' + sk('lambda') + ' x: x * ' + sn('2') + '\n' + sf('print') + '(double(7))  ' + sc('# 14'),
    guidance: ["<code>lambda x: x * 2</code>.", "double(7) is 14. Fill: 2."] },
  { id: 22, title: "Lambda: Compare", topic: "advanced", difficulty: "easy",
    desc: "Create lambda is_positive that returns True if x > 0 else False. Print is_positive(5) and is_positive(-1).",
    code: 'is_positive = ' + sk('lambda') + ' x: x ' + sb() + ' 0\n' + sf('print') + '(is_positive(5), is_positive(-1))  ' + sc('# True False'),
    guidance: ["<code>lambda x: x > 0</code> returns a boolean.", "Fill: <code>&gt;</code> (greater than)."] },
  { id: 23, title: "Lambda: Multi-arg", topic: "advanced", difficulty: "easy",
    desc: "Lambda can take multiple parameters: area = lambda w, h: w * h. Print area(3, 4).",
    code: 'area = ' + sk('lambda') + ' w, h: w * h\n' + sf('print') + '(area(' + sn('3') + ', ' + sn('4') + '))  ' + sc('# 12'),
    guidance: ["<code>lambda w, h: w * h</code> takes two arguments.", "area(3, 4) is 12."] },
  { id: 24, title: "Keyword-Only (after *)", topic: "advanced", difficulty: "medium",
    desc: "Define f(a, *, b) so b must be passed by keyword. Call f(1, b=2) and print a + b.",
    code: sk('def') + ' ' + sf('f') + '(a, *, b):\n  ' + sk('return') + ' a + b\n\n' + sf('print') + '(' + sf('f') + '(1, b=' + sn('2') + '))  ' + sc('# 3'),
    guidance: ["After <code>*</code>, parameters are keyword-only.", "f(1, b=2) is valid; f(1, 2) would be invalid. Fill: 2."] },
  { id: 25, title: "Unpack List to *args", topic: "advanced", difficulty: "medium",
    desc: "Define add3(a,b,c) return a+b+c. Given nums = [1,2,3], call add3 with unpacking: add3(*nums).",
    code: sk('def') + ' ' + sf('add3') + '(a, b, c):\n  ' + sk('return') + ' a + b + c\n\nnums = [1, 2, 3]\n' + sf('print') + '(' + sf('add3') + '(*nums))  ' + sc('# 6'),
    guidance: ["<code>*nums</code> unpacks the list into three positional arguments.", "add3(*[1,2,3]) is add3(1, 2, 3)."] },
  { id: 26, title: "Unpack Dict to **kwargs", topic: "advanced", difficulty: "medium",
    desc: "Define greet(greeting, name). Given d = {'greeting':'Hi','name':'Jo'}, call greet(**d).",
    code: sk('def') + ' ' + sf('greet') + '(greeting, name):\n  ' + sf('print') + '(greeting, name)\n\nd = {' + ss('"greeting"') + ': ' + ss('"Hi"') + ', ' + ss('"name"') + ': ' + ss('"Jo"') + '}\n' + sf('greet') + '(**d)',
    guidance: ["<code>**d</code> unpacks the dict as keyword arguments.", "greet(**d) is greet(greeting='Hi', name='Jo')."] },
  { id: 27, title: "Return Multiple Unpack", topic: "advanced", difficulty: "easy",
    desc: "Write get_pair() that returns (10, 20). Call it and unpack into x, y; print x + y.",
    code: sk('def') + ' ' + sf('get_pair') + '():\n  ' + sk('return') + ' (10, 20)\n\nx, y = ' + sf('get_pair') + '()\n' + sf('print') + '(x + y)  ' + sc('# 30'),
    guidance: ["Return a tuple; assign with unpacking: <code>x, y = get_pair()</code>.", "x=10, y=20, so x+y=30."] },
  { id: 28, title: "Function as Object", topic: "advanced", difficulty: "medium",
    desc: "Assign a function to a variable: f = abs. Then call f(-5) and print the result.",
    code: 'f = ' + sf('abs') + '\n' + sf('print') + '(f(' + sn('-5') + '))  ' + sc('# 5'),
    guidance: ["In Python, functions are objects. <code>f = abs</code>; then <code>f(-5)</code> is abs(-5).", "Fill: -5."] },
  { id: 29, title: "Decorator with Args", topic: "advanced", difficulty: "hard",
    desc: "Write repeat(n) that returns a decorator which runs the function n times and returns the last result. Use @repeat(2) on def one(): return 1; print one() → 1.",
    code: sk('def') + ' ' + sf('repeat') + '(n):\n  ' + sk('def') + ' dec(fn):\n    ' + sk('def') + ' wrapper():\n      out = None\n      ' + sk('for') + ' _ ' + sk('in') + ' ' + sf('range') + '(n): out = fn()\n      ' + sk('return') + ' out\n    ' + sk('return') + ' wrapper\n  ' + sk('return') + ' dec\n\n@' + sf('repeat') + '(2)\n' + sk('def') + ' one(): ' + sk('return') + ' 1\n\n' + sf('print') + '(one())',
    guidance: ["repeat(n) returns a decorator dec. dec(fn) returns wrapper that calls fn() n times.", "Return the last result. one() is called twice, returns 1."] },
  { id: 30, title: "Lambda in sorted", topic: "advanced", difficulty: "medium",
    desc: "Sort [(1,2), (3,1), (2,3)] by the second element using key=lambda t: t[1]. Print result.",
    code: 'pairs = [(1, 2), (3, 1), (2, 3)]\n' + sf('print') + '(' + sf('sorted') + '(pairs, key=' + sk('lambda') + ' t: t[1]))  ' + sc('# [(3,1), (1,2), (2,3)]'),
    guidance: ["key=lambda t: t[1] uses the second element of each tuple for comparison.", "Sorted by 2, 1, 3 → (3,1), (1,2), (2,3)."] },
  { id: 71, title: "Decorator: Print Before and After", topic: "advanced", difficulty: "medium",
    desc: "Write a decorator that prints 'start' before calling the function and 'end' after. Apply it to a function that prints 'run'.",
    code: sk('def') + ' ' + sf('trace') + '(fn):\n  ' + sk('def') + ' wrapper():\n    ' + sf('print') + '(' + ss('"start"') + ')\n    fn()\n    ' + sf('print') + '(' + ss('"end"') + ')\n  ' + sk('return') + ' wrapper\n\n@' + sf('trace') + '\n' + sk('def') + ' run(): ' + sf('print') + '(' + ss('"run"') + ')\n\n' + sf('run') + '()',
    guidance: ["Call fn() in the middle of the wrapper; print before and after.", "Output: start, run, end."] },
  { id: 72, title: "Decorator: Wrapper with Arguments", topic: "advanced", difficulty: "medium",
    desc: "Write a decorator for a function that takes one argument. The wrapper should pass the argument through: def add_one(x): return x+1; @deco; add_one(5) → 6.",
    code: sk('def') + ' ' + sf('pass_through') + '(fn):\n  ' + sk('def') + ' wrapper(x):\n    ' + sk('return') + ' fn(x)\n  ' + sk('return') + ' wrapper\n\n@' + sf('pass_through') + '\n' + sk('def') + ' add_one(x): ' + sk('return') + ' x + 1\n\n' + sf('print') + '(' + sf('add_one') + '(5))  ' + sc('# 6'),
    guidance: ["Wrapper must accept the same arguments as the wrapped function.", "wrapper(x) receives 5, calls fn(5), returns 6."] },
  { id: 73, title: "Decorator: Caching (Memoization)", topic: "advanced", difficulty: "hard",
    desc: "Write a simple cache decorator: store results in a dict keyed by argument. On repeat call with same arg, return cached value. Apply to def slow(n): return n*2; print slow(3), slow(3).",
    code: sk('def') + ' ' + sf('cache') + '(fn):\n  saved = {}\n  ' + sk('def') + ' wrapper(x):\n    ' + sk('if') + ' x ' + sk('not') + ' ' + sk('in') + ' saved:\n      saved[x] = fn(x)\n    ' + sk('return') + ' saved[x]\n  ' + sk('return') + ' wrapper\n\n@' + sf('cache') + '\n' + sk('def') + ' slow(n): ' + sk('return') + ' n * 2\n\n' + sf('print') + '(slow(3), slow(3))  ' + sc('# 6 6'),
    guidance: ["Use a dict in the closure to store fn(x) by x.", "First slow(3) calls fn(3) and stores 6; second slow(3) returns saved[3] without calling fn."] },
  { id: 43, title: "Nested Function: Define and Call", topic: "advanced", difficulty: "medium",
    desc: "Define outer() that contains an inner function inner() which returns 42. outer() should call inner() and return its result. Print outer().",
    code: sk('def') + ' ' + sf('outer') + '():\n  ' + sk('def') + ' ' + sf('inner') + '():\n    ' + sk('return') + ' 42\n  ' + sk('return') + ' ' + sf('inner') + '()\n\n' + sf('print') + '(' + sf('outer') + '())  ' + sc('# 42'),
    guidance: ["You can define a function inside another function.", "inner() is only visible inside outer. outer() calls inner() and returns 42."] },
  { id: 44, title: "Nested Function: Access Enclosing Variable", topic: "advanced", difficulty: "medium",
    desc: "Define outer(x) with a nested inner() that returns x + 1. outer should call inner and return the result. Print outer(10).",
    code: sk('def') + ' ' + sf('outer') + '(x):\n  ' + sk('def') + ' ' + sf('inner') + '():\n    ' + sk('return') + ' x + 1\n  ' + sk('return') + ' ' + sf('inner') + '()\n\n' + sf('print') + '(' + sf('outer') + '(10))  ' + sc('# 11'),
    guidance: ["inner can read the enclosing scope: it sees <code>x</code> from outer.", "outer(10) calls inner(), which returns 10 + 1 = 11."] },
  { id: 45, title: "Nested Function: Return Inner Function", topic: "advanced", difficulty: "medium",
    desc: "Define outer(prefix) with nested greet(name) that returns prefix + ' ' + name. outer should return the greet function (not call it). Then f = outer('Hi'); print f('Ali').",
    code: sk('def') + ' ' + sf('outer') + '(prefix):\n  ' + sk('def') + ' ' + sf('greet') + '(name):\n    ' + sk('return') + ' prefix + ' + ss('" "') + ' + name\n  ' + sk('return') + ' greet\n\nf = ' + sf('outer') + '(' + ss('"Hi"') + ')\n' + sf('print') + '(f(' + ss('"Ali"') + '))  ' + sc('# Hi Ali'),
    guidance: ["Return the inner function without calling it: <code>return greet</code>.", "f = outer('Hi') gives f the greet that remembers prefix='Hi'. f('Ali') returns 'Hi Ali'."] },

  /* ─── Scope (7) ─── */
  { id: 31, title: "Local Scope", topic: "scope", difficulty: "medium",
    desc: "Inside a function, assign x = 10 and print x. Outside, print x (will error unless global).",
    code: sk('def') + ' ' + sf('set_x') + '():\n  x = 10\n  ' + sf('print') + '(x)\n\n' + sf('set_x') + '()\n' + sf('print') + '(x)  ' + sc('# NameError'),
    guidance: ["Variables assigned inside a function are <strong>local</strong>.", "x exists only inside set_x(). Outside, x is not defined."] },
  { id: 32, title: "Local vs Global", topic: "scope", difficulty: "medium",
    desc: "Global count = 0. Function increment() has local_count = 1. Return count + local_count.",
    code: 'count = 0\n\n' + sk('def') + ' ' + sf('increment') + '():\n  local_count = 1\n  ' + sk('return') + ' count + local_count\n\n' + sf('print') + '(increment())  ' + sc('# 1'),
    guidance: ["<strong>Global</strong> count is visible inside. <strong>Local</strong> local_count only in function.", "Return 0 + 1 = 1."] },
  { id: 33, title: "global Keyword", topic: "scope", difficulty: "medium",
    desc: "Use global to modify a variable from inside a function. Set total = 0; in add(n) do global total; total += n. Call add(5), add(3), print total.",
    code: 'total = 0\n\n' + sk('def') + ' ' + sf('add') + '(n):\n  ' + sk('global') + ' total\n  total += n\n\n' + sf('add') + '(5)\n' + sf('add') + '(3)\n' + sf('print') + '(total)  ' + sc('# 8'),
    guidance: ["<code>global total</code> says 'use the global total', not create a local.", "After add(5) and add(3), total is 8."] },
  { id: 34, title: "Same Name Local Shadows", topic: "scope", difficulty: "medium",
    desc: "Global x = 1. Define f() with local x = 2; print x inside f (prints 2). Print x after f (still 1).",
    code: 'x = 1\n\n' + sk('def') + ' ' + sf('f') + '():\n  x = 2\n  ' + sf('print') + '(x)\n\n' + sf('f') + '()\n' + sf('print') + '(x)  ' + sc('# 2 then 1'),
    guidance: ["Local <code>x = 2</code> shadows the global x inside f.", "Outside f, global x is still 1."] },
  { id: 35, title: "LEGB: Built-in", topic: "scope", difficulty: "medium",
    desc: "Inside a function, print(len([1,2,3])). len is found in built-in scope. What does it print?",
    code: sk('def') + ' ' + sf('demo') + '():\n  ' + sf('print') + '(' + sf('len') + '([1, 2, 3]))\n\n' + sf('demo') + '()  ' + sc('# 3'),
    guidance: ["LEGB: Local, Enclosing, Global, Built-in. len is built-in.", "Output: 3."] },
  { id: 36, title: "Enclosing Scope", topic: "scope", difficulty: "medium",
    desc: "Define outer() with x=10; define inner() that prints x. Call outer() which calls inner().",
    code: sk('def') + ' ' + sf('outer') + '():\n  x = 10\n  ' + sk('def') + ' ' + sf('inner') + '():\n    ' + sf('print') + '(x)\n  ' + sf('inner') + '()\n\n' + sf('outer') + '()  ' + sc('# 10'),
    guidance: ["inner looks up x; not local, so it uses enclosing (outer) scope.", "x is 10 in outer, so inner prints 10."] },
  { id: 37, title: "Read Global Without global", topic: "scope", difficulty: "easy",
    desc: "Global y = 5. Define get_y() that returns y (no assignment to y). Print get_y().",
    code: 'y = 5\n\n' + sk('def') + ' ' + sf('get_y') + '():\n  ' + sk('return') + ' y\n\n' + sf('print') + '(' + sf('get_y') + '())  ' + sc('# 5'),
    guidance: ["You can <strong>read</strong> a global without declaring global.", "Only need global when you <strong>assign</strong> to the name."] },

  /* ─── Closures (5) ─── */
  { id: 38, title: "Closure: make_adder", topic: "closures", difficulty: "medium",
    desc: "Define make_adder(n) that returns a function adding n to its argument. make_adder(3)(4) → 7.",
    code: sk('def') + ' ' + sf('make_adder') + '(n):\n  ' + sk('def') + ' adder(x):\n    ' + sk('return') + ' x + n\n  ' + sk('return') + ' adder\n\n' + sf('print') + '(make_adder(3)(4))  ' + sc('# 7'),
    guidance: ["adder closes over n. make_adder(3) returns a function that adds 3.", "That function(4) returns 7."] },
  { id: 39, title: "Closure: multiply_by", topic: "closures", difficulty: "medium",
    desc: "Define multiply_by(k) that returns a function. The returned function multiplies its argument by k. multiply_by(5)(4) → 20.",
    code: sk('def') + ' ' + sf('multiply_by') + '(k):\n  ' + sk('def') + ' inner(z):\n    ' + sk('return') + ' z * k\n  ' + sk('return') + ' inner\n\n' + sf('print') + '(multiply_by(5)(4))  ' + sc('# 20'),
    guidance: ["inner closes over k. multiply_by(5) returns a function that multiplies by 5.", "That function(4) returns 20."] },
  { id: 40, title: "Closure: Counter", topic: "closures", difficulty: "medium",
    desc: "Define make_counter() that returns a function. Each call to the returned function increments and returns a count (start at 0). First call → 1, second → 2.",
    code: sk('def') + ' ' + sf('make_counter') + '():\n  count = 0\n  ' + sk('def') + ' counter():\n    ' + sk('nonlocal') + ' count\n    count += 1\n    ' + sk('return') + ' count\n  ' + sk('return') + ' counter\n\nc = make_counter()\n' + sf('print') + '(c(), c())  ' + sc('# 1 2'),
    guidance: ["counter closes over count. Use <code>nonlocal count</code> to rebind in enclosing scope.", "First c() → 1, second c() → 2."] },
  { id: 41, title: "Closure: Greet Prefix", topic: "closures", difficulty: "easy",
    desc: "Define make_greeter(prefix) that returns a function. The returned function takes a name and returns prefix + ' ' + name. make_greeter('Hi')('Ali') → 'Hi Ali'.",
    code: sk('def') + ' ' + sf('make_greeter') + '(prefix):\n  ' + sk('def') + ' greet(name):\n    ' + sk('return') + ' prefix + ' + ss('" "') + ' + name\n  ' + sk('return') + ' greet\n\n' + sf('print') + '(make_greeter(' + ss('"Hi"') + ')(' + ss('"Ali"') + '))',
    guidance: ["greet closes over prefix. make_greeter('Hi') returns a function that prepends 'Hi '.", "That function('Ali') returns 'Hi Ali'."] },
  { id: 42, title: "Closure: Power", topic: "closures", difficulty: "medium",
    desc: "Define make_power(exp) that returns a function. The returned function raises its argument to exp. make_power(2)(5) → 25.",
    code: sk('def') + ' ' + sf('make_power') + '(exp):\n  ' + sk('def') + ' power(x):\n    ' + sk('return') + ' x ** exp\n  ' + sk('return') + ' power\n\n' + sf('print') + '(make_power(2)(5))  ' + sc('# 25'),
    guidance: ["power closes over exp. make_power(2) returns a function that squares.", "That function(5) returns 25."] },

  /* ─── Generator (5) ─── */
  { id: 46, title: "Generator: yield", topic: "generator", difficulty: "medium",
    desc: "Define a generator function count_to(n) that yields 1, 2, ..., n. Print list(count_to(3)).",
    code: sk('def') + ' ' + sf('count_to') + '(n):\n  i = 1\n  ' + sk('while') + ' i <= n:\n    ' + sk('yield') + ' i\n    i += 1\n\n' + sf('print') + '(' + sf('list') + '(' + sf('count_to') + '(3)))  ' + sc('# [1, 2, 3]'),
    guidance: ["Use <code>yield</code> instead of return; the function becomes a generator.", "list(count_to(3)) consumes the generator and gives [1, 2, 3]."] },
  { id: 47, title: "Generator: next()", topic: "generator", difficulty: "medium",
    desc: "Create a generator g = (x for x in range(3)). Call next(g) three times and print the values.",
    code: 'g = (x ' + sk('for') + ' x ' + sk('in') + ' ' + sf('range') + '(3))\n' + sf('print') + '(' + sf('next') + '(g), ' + sf('next') + '(g), ' + sf('next') + '(g))  ' + sc('# 0 1 2'),
    guidance: ["<code>(x for x in range(3))</code> is a generator expression.", "next(g) gets the next value; after 3 values the generator is exhausted."] },
  { id: 48, title: "Generator: Infinite Sequence", topic: "generator", difficulty: "medium",
    desc: "Define gen() that yields 0, 1, 2, ... forever. Get first 4 values with next() in a loop and print them.",
    code: sk('def') + ' ' + sf('gen') + '():\n  n = 0\n  ' + sk('while') + ' True:\n    ' + sk('yield') + ' n\n    n += 1\n\ng = gen()\n' + sf('print') + '([next(g) ' + sk('for') + ' _ ' + sk('in') + ' ' + sf('range') + '(4)])  ' + sc('# [0,1,2,3]'),
    guidance: ["Generators are lazy; they produce values on demand.", "next(g) in a loop gets 0, 1, 2, 3."] },
  { id: 49, title: "Generator: for Loop", topic: "generator", difficulty: "easy",
    desc: "Define a generator that yields 'a', 'b', 'c'. Iterate with for and collect into a list; print it.",
    code: sk('def') + ' ' + sf('letters') + '():\n  ' + sk('yield') + ' ' + ss('"a"') + '\n  ' + sk('yield') + ' ' + ss('"b"') + '\n  ' + sk('yield') + ' ' + ss('"c"') + '\n\n' + sf('print') + '([x ' + sk('for') + ' x ' + sk('in') + ' ' + sf('letters') + '()])',
    guidance: ["A generator can yield multiple values one by one.", "for x in letters() consumes the generator; list comp gives ['a','b','c']."] },
  { id: 50, title: "Generator Expression", topic: "generator", difficulty: "easy",
    desc: "Use a generator expression (x*2 for x in range(5)) and convert to list. Print the result.",
    code: 'g = (x * 2 ' + sk('for') + ' x ' + sk('in') + ' ' + sf('range') + '(5))\n' + sf('print') + '(' + sf('list') + '(g))  ' + sc('# [0, 2, 4, 6, 8]'),
    guidance: ["<code>(expr for x in iterable)</code> is a generator expression (parens, not brackets).", "list(g) consumes it: [0, 2, 4, 6, 8]."] },

  /* ─── List comprehension (5) ─── */
  { id: 51, title: "List Comp: Basic", topic: "list_comp", difficulty: "easy",
    desc: "Build a list of squares for 1 to 5 using list comprehension: [x**2 for x in range(1,6)]. Print it.",
    code: 'squares = [x ** 2 ' + sk('for') + ' x ' + sk('in') + ' ' + sf('range') + '(1, 6)]\n' + sf('print') + '(squares)  ' + sc('# [1, 4, 9, 16, 25]'),
    guidance: ["<code>[expr for x in iterable]</code> builds a list.", "range(1, 6) is 1..5; x**2 gives squares."] },
  { id: 52, title: "List Comp: With if", topic: "list_comp", difficulty: "easy",
    desc: "Build a list of even numbers from 0 to 9: [x for x in range(10) if x%2==0]. Print it.",
    code: 'evens = [x ' + sk('for') + ' x ' + sk('in') + ' ' + sf('range') + '(10) ' + sk('if') + ' x % 2 == 0]\n' + sf('print') + '(evens)  ' + sc('# [0, 2, 4, 6, 8]'),
    guidance: ["Add <code>if condition</code> at the end to filter.", "Only x where x%2==0 are included."] },
  { id: 53, title: "List Comp: From String", topic: "list_comp", difficulty: "easy",
    desc: "Build a list of uppercase letters from 'hello': [c.upper() for c in 'hello']. Print it.",
    code: 'upper_chars = [c.' + sf('upper') + '() ' + sk('for') + ' c ' + sk('in') + ' ' + ss('"hello"') + ']\n' + sf('print') + '(upper_chars)  ' + sc('# [H,E,L,L,O]'),
    guidance: ["Iterate over a string; each <code>c</code> is a character.", "c.upper() gives uppercase; result ['H','E','L','L','O']."] },
  { id: 54, title: "List Comp: Nested", topic: "list_comp", difficulty: "medium",
    desc: "Build a 2x3 matrix as list of lists: [[i*j for j in range(1,4)] for i in range(1,3)]. Print it.",
    code: 'matrix = [[i * j ' + sk('for') + ' j ' + sk('in') + ' ' + sf('range') + '(1, 4)] ' + sk('for') + ' i ' + sk('in') + ' ' + sf('range') + '(1, 3)]\n' + sf('print') + '(matrix)  ' + sc('# [[1,2,3], [2,4,6]]'),
    guidance: ["Inner comp builds a row; outer comp builds rows.", "i=1: [1,2,3]; i=2: [2,4,6]."] },
  { id: 55, title: "List Comp: With Else", topic: "list_comp", difficulty: "medium",
    desc: "Build list: ['even' if n%2==0 else 'odd' for n in [1,2,3,4]]. Print it.",
    code: 'labels = [' + ss('"even"') + ' ' + sk('if') + ' n % 2 == 0 ' + sk('else') + ' ' + ss('"odd"') + ' ' + sk('for') + ' n ' + sk('in') + ' [1, 2, 3, 4]]\n' + sf('print') + '(labels)  ' + sc('# [odd, even, odd, even]'),
    guidance: ["<code>a if cond else b for x in ...</code> uses conditional expression per item.", "Result: ['odd','even','odd','even']."] },

  /* ─── Tuple comprehension / tuple from iterable (5) ─── */
  { id: 56, title: "Tuple from List Comp", topic: "tuple_comp", difficulty: "easy",
    desc: "Build a tuple of doubles for 1..5: tuple([x*2 for x in range(1,6)]). Print it.",
    code: 't = ' + sf('tuple') + '([x * 2 ' + sk('for') + ' x ' + sk('in') + ' ' + sf('range') + '(1, 6)])\n' + sf('print') + '(t)  ' + sc('# (2, 4, 6, 8, 10)'),
    guidance: ["Python has no tuple comprehension syntax; use <code>tuple([...])</code> from a list comp.", "Or use tuple(generator_expression)."] },
  { id: 57, title: "Tuple from Generator", topic: "tuple_comp", difficulty: "easy",
    desc: "Build a tuple using a generator expression: tuple(x for x in range(5)). Print it.",
    code: 't = ' + sf('tuple') + '(x ' + sk('for') + ' x ' + sk('in') + ' ' + sf('range') + '(5))\n' + sf('print') + '(t)  ' + sc('# (0, 1, 2, 3, 4)'),
    guidance: ["<code>tuple(gen_expr)</code> consumes the generator and builds an immutable tuple.", "tuple(x for x in range(5)) → (0,1,2,3,4)."] },
  { id: 58, title: "Tuple Comp: Squares", topic: "tuple_comp", difficulty: "easy",
    desc: "Build tuple of squares of 1,2,3: tuple(x**2 for x in [1,2,3]). Print it.",
    code: 'squares = ' + sf('tuple') + '(x ** 2 ' + sk('for') + ' x ' + sk('in') + ' [1, 2, 3])\n' + sf('print') + '(squares)  ' + sc('# (1, 4, 9)'),
    guidance: ["Generator expression inside tuple(): (x**2 for x in [1,2,3]).", "Result: (1, 4, 9)."] },
  { id: 59, title: "Tuple Comp: With if", topic: "tuple_comp", difficulty: "medium",
    desc: "Build tuple of positive numbers from [-1, 2, -3, 4]: tuple(x for x in ... if x > 0). Print it.",
    code: 't = ' + sf('tuple') + '(x ' + sk('for') + ' x ' + sk('in') + ' [-1, 2, -3, 4] ' + sk('if') + ' x > 0)\n' + sf('print') + '(t)  ' + sc('# (2, 4)'),
    guidance: ["Filter in generator: <code>x for x in ... if x > 0</code>.", "Only 2 and 4 are positive."] },
  { id: 60, title: "Tuple from String", topic: "tuple_comp", difficulty: "easy",
    desc: "Build a tuple of characters from 'abc': tuple(c for c in 'abc'). Print it.",
    code: 'chars = ' + sf('tuple') + '(c ' + sk('for') + ' c ' + sk('in') + ' ' + ss('"abc"') + ')\n' + sf('print') + '(chars)  ' + sc('# (a, b, c)'),
    guidance: ["Iterate over string; tuple() collects the characters.", "Result: ('a', 'b', 'c')."] },

  /* ─── Set comprehension (5) ─── */
  { id: 61, title: "Set Comp: Basic", topic: "set_comp", difficulty: "easy",
    desc: "Build a set of squares for 1..5: {x**2 for x in range(1,6)}. Print it (order may vary).",
    code: 's = {x ** 2 ' + sk('for') + ' x ' + sk('in') + ' ' + sf('range') + '(1, 6)}\n' + sf('print') + '(s)  ' + sc('# {1, 4, 9, 16, 25}'),
    guidance: ["<code>{expr for x in iterable}</code> is set comprehension; result has no duplicates.", "Sets are unordered."] },
  { id: 62, title: "Set Comp: With if", topic: "set_comp", difficulty: "easy",
    desc: "Build set of even numbers from 0 to 9: {x for x in range(10) if x%2==0}. Print it.",
    code: 'evens = {x ' + sk('for') + ' x ' + sk('in') + ' ' + sf('range') + '(10) ' + sk('if') + ' x % 2 == 0}\n' + sf('print') + '(evens)  ' + sc('# {0, 2, 4, 6, 8}'),
    guidance: ["Set comp with filter: only even x.", "Result: {0, 2, 4, 6, 8} (order not guaranteed)."] },
  { id: 63, title: "Set Comp: From String", topic: "set_comp", difficulty: "easy",
    desc: "Build set of unique characters in 'hello': {c for c in 'hello'}. Print it.",
    code: 'unique = {c ' + sk('for') + ' c ' + sk('in') + ' ' + ss('"hello"') + '}\n' + sf('print') + '(unique)  ' + sc('# {h, e, l, o}'),
    guidance: ["Set automatically removes duplicates.", "'hello' → {'h','e','l','o'} (4 unique chars)."] },
  { id: 64, title: "Set Comp: Lengths", topic: "set_comp", difficulty: "easy",
    desc: "Build set of lengths of words: {len(w) for w in ['a','hi','foo']}. Print it.",
    code: 'lengths = {' + sf('len') + '(w) ' + sk('for') + ' w ' + sk('in') + ' [' + ss('"a"') + ', ' + ss('"hi"') + ', ' + ss('"foo"') + ']}\n' + sf('print') + '(lengths)  ' + sc('# {1, 2, 3}'),
    guidance: ["Expression can be any expression; len(w) for each word.", "Result: {1, 2, 3}."] },
  { id: 65, title: "Set Comp: Upper", topic: "set_comp", difficulty: "easy",
    desc: "Build set of uppercase letters from 'abc': {c.upper() for c in 'abc'}. Print it.",
    code: 'upper_set = {c.' + sf('upper') + '() ' + sk('for') + ' c ' + sk('in') + ' ' + ss('"abc"') + '}\n' + sf('print') + '(upper_set)  ' + sc('# {A, B, C}'),
    guidance: ["Set of transformed elements.", "Result: {'A', 'B', 'C'}."] },

  /* ─── Dict comprehension (5) ─── */
  { id: 66, title: "Dict Comp: Basic", topic: "dict_comp", difficulty: "easy",
    desc: "Build dict mapping 1..5 to their squares: {x: x**2 for x in range(1,6)}. Print it.",
    code: 'd = {x: x ** 2 ' + sk('for') + ' x ' + sk('in') + ' ' + sf('range') + '(1, 6)}\n' + sf('print') + '(d)  ' + sc('# {1:1, 2:4, 3:9, 4:16, 5:25}'),
    guidance: ["<code>{key_expr: value_expr for x in iterable}</code> builds a dict.", "x: x**2 gives 1→1, 2→4, ..."] },
  { id: 67, title: "Dict Comp: From Two Lists", topic: "dict_comp", difficulty: "medium",
    desc: "Build dict from keys ['a','b','c'] and values [1,2,3]: {k: v for k,v in zip(keys, values)}. Print it.",
    code: 'keys = [' + ss('"a"') + ', ' + ss('"b"') + ', ' + ss('"c"') + ']\nvals = [1, 2, 3]\nd = {k: v ' + sk('for') + ' k, v ' + sk('in') + ' ' + sf('zip') + '(keys, vals)}\n' + sf('print') + '(d)',
    guidance: ["zip(keys, vals) gives (a,1), (b,2), (c,3).", "Dict comp: {k: v for k,v in zip(...)} → {'a':1, 'b':2, 'c':3}."] },
  { id: 68, title: "Dict Comp: With if", topic: "dict_comp", difficulty: "medium",
    desc: "Build dict of even numbers only: {x: x*2 for x in range(10) if x%2==0}. Print it.",
    code: 'd = {x: x * 2 ' + sk('for') + ' x ' + sk('in') + ' ' + sf('range') + '(10) ' + sk('if') + ' x % 2 == 0}\n' + sf('print') + '(d)  ' + sc('# {0:0, 2:4, 4:8, 6:12, 8:16}'),
    guidance: ["Filter with if: only even x become keys.", "Result: {0:0, 2:4, 4:8, 6:12, 8:16}."] },
  { id: 69, title: "Dict Comp: Swap Key-Value", topic: "dict_comp", difficulty: "medium",
    desc: "Given d = {'a':1, 'b':2}, build reversed dict {v: k for k,v in d.items()}. Print it.",
    code: 'd = {' + ss('"a"') + ': 1, ' + ss('"b"') + ': 2}\nrev = {v: k ' + sk('for') + ' k, v ' + sk('in') + ' d.' + sf('items') + '()}\n' + sf('print') + '(rev)  ' + sc('# {1:a, 2:b}'),
    guidance: ["Iterate d.items(); use v as key and k as value.", "Result: {1:'a', 2:'b'}."] },
  { id: 70, title: "Dict Comp: From String", topic: "dict_comp", difficulty: "easy",
    desc: "Build dict mapping each character of 'ab' to its index: {c: i for i, c in enumerate('ab')}. Print it.",
    code: 'd = {c: i ' + sk('for') + ' i, c ' + sk('in') + ' ' + sf('enumerate') + '(' + ss('"ab"') + ')}\n' + sf('print') + '(d)  ' + sc('# {a:0, b:1}'),
    guidance: ["enumerate('ab') gives (0,'a'), (1,'b').", "Dict: {'a':0, 'b':1}."] }
];

/* ─────────────────────────────────────────────
   CHAPTER 4 — OOPs (70)
   class_basics: 10 | init_self: 8 | attributes: 6 | methods: 8 | inheritance: 10 | encapsulation: 5 | magic: 3 | polymorphism: 10 | abstraction: 10
───────────────────────────────────────────── */
var ch4 = [
  /* ─── Class basics (10) ─── */
  { id: 1, title: "Define a Class", topic: "class_basics", difficulty: "easy",
    desc: "Define an empty class named Dog using the class keyword. Then create an instance: d = Dog().",
    code: sk('class') + ' ' + sf('Dog') + ':\n  ' + sc('pass') + '\n\nd = ' + sf('Dog') + '()\n' + sf('print') + '(type(d))',
    guidance: ["<code>class Dog:</code> defines a class; use <code>pass</code> for an empty body.", "Create an instance with <code>Dog()</code>."] },
  { id: 2, title: "Create Instance", topic: "class_basics", difficulty: "easy",
    desc: "Define class Person. Create two instances p1 = Person() and p2 = Person(). Print whether they are the same object (p1 is p2).",
    code: sk('class') + ' Person: pass\np1 = Person()\np2 = Person()\n' + sf('print') + '(p1 ' + sk('is') + ' p2)  ' + sc('# False'),
    guidance: ["Each call to Person() creates a new instance.", "p1 is p2 is False (different objects)."] },
  { id: 3, title: "Class and type()", topic: "class_basics", difficulty: "easy",
    desc: "Define class Cat. Create c = Cat() and print type(c). It should show <class '__main__.Cat'>.",
    code: sk('class') + ' Cat: pass\nc = Cat()\n' + sf('print') + '(' + sf('type') + '(c))',
    guidance: ["type(obj) returns the class of the object.", "type(c) is the Cat class."] },
  { id: 4, title: "Dot Access", topic: "class_basics", difficulty: "easy",
    desc: "Define class Box with no body (pass). After creating b = Box(), assign b.value = 10 and print b.value.",
    code: sk('class') + ' Box: pass\nb = Box()\nb.value = 10\n' + sf('print') + '(b.value)  ' + sc('# 10'),
    guidance: ["You can add attributes to an instance with dot notation: b.value = 10.", "Read with b.value."] },
  { id: 5, title: "Multiple Instances", topic: "class_basics", difficulty: "easy",
    desc: "Define class Counter. Create c1 and c2, set c1.n = 1 and c2.n = 2. Print c1.n and c2.n.",
    code: sk('class') + ' Counter: pass\nc1 = Counter()\nc2 = Counter()\nc1.n = 1\nc2.n = 2\n' + sf('print') + '(c1.n, c2.n)  ' + sc('# 1 2'),
    guidance: ["Each instance has its own attributes; c1.n and c2.n are independent."] },
  { id: 6, title: "Class Name", topic: "class_basics", difficulty: "easy",
    desc: "Define class Animal. Print Animal.__name__ (the class name as string).",
    code: sk('class') + ' Animal: pass\n' + sf('print') + '(Animal.' + sb() + ')  ' + sc('# Animal'),
    guidance: ["Classes have a __name__ attribute. Fill: <code>__name__</code>."] },
  { id: 7, title: "Instance of Class", topic: "class_basics", difficulty: "easy",
    desc: "Define class Vehicle. Create v = Vehicle(). Use isinstance(v, Vehicle) and print the result.",
    code: sk('class') + ' Vehicle: pass\nv = Vehicle()\n' + sf('print') + '(' + sf('isinstance') + '(v, Vehicle))  ' + sc('# True'),
    guidance: ["<code>isinstance(obj, Class)</code> returns True if obj is an instance of Class (or subclass)."] },
  { id: 8, title: "Empty Class with pass", topic: "class_basics", difficulty: "easy",
    desc: "In Python a class body cannot be empty. Use 'pass' as a placeholder. Define class Empty with pass and create e = Empty().",
    code: sk('class') + ' Empty:\n  ' + sk('pass') + '\n\ne = Empty()\n' + sf('print') + '(e)',
    guidance: ["<code>pass</code> is a no-op; it satisfies the syntax for an empty block."] },
  { id: 9, title: "Assign Attribute After Creation", topic: "class_basics", difficulty: "easy",
    desc: "Create a class Item. Create obj = Item(), then set obj.name = 'apple' and obj.price = 1.5. Print both.",
    code: sk('class') + ' Item: pass\nobj = Item()\nobj.name = ' + ss('"apple"') + '\nobj.price = 1.5\n' + sf('print') + '(obj.name, obj.price)',
    guidance: ["Instance attributes can be added anytime after creation."] },
  { id: 10, title: "Class vs Instance", topic: "class_basics", difficulty: "easy",
    desc: "Define class C. Create a = C() and b = C(). Print a == b (False; different instances) and type(a) == type(b) (True).",
    code: sk('class') + ' C: pass\na = C()\nb = C()\n' + sf('print') + '(a == b, ' + sf('type') + '(a) == type(b))  ' + sc('# False True'),
    guidance: ["a and b are different objects so a == b is False.", "type(a) and type(b) are both C, so type(a)==type(b) is True."] },

  /* ─── __init__ and self (8) ─── */
  { id: 11, title: "__init__ Basics", topic: "init_self", difficulty: "easy",
    desc: "Define class Greeter with __init__(self, name) that sets self.name = name. Create g = Greeter('Ali') and print g.name.",
    code: sk('class') + ' Greeter:\n  ' + sk('def') + ' __init__(self, name):\n    self.name = name\ng = Greeter(' + ss('"Ali"') + ')\n' + sf('print') + '(g.name)  ' + sc('# Ali'),
    guidance: ["<code>__init__</code> is called when you create an instance; first parameter is <code>self</code>.", "Store arguments as self.attr."] },
  { id: 12, title: "self Parameter", topic: "init_self", difficulty: "easy",
    desc: "In a method, self refers to the instance. Define class Point with __init__(self, x, y) setting self.x and self.y. Create Point(3, 4) and print p.x, p.y.",
    code: sk('class') + ' Point:\n  ' + sk('def') + ' __init__(self, x, y):\n    self.x = x\n    self.y = y\np = Point(3, 4)\n' + sf('print') + '(p.x, p.y)  ' + sc('# 3 4'),
    guidance: ["Always list <code>self</code> first in instance methods.", "self.x = x assigns to the instance."] },
  { id: 13, title: "__init__ with Default", topic: "init_self", difficulty: "easy",
    desc: "Define class Counter with __init__(self, start=0) setting self.count = start. Create c = Counter() and c2 = Counter(10). Print c.count, c2.count.",
    code: sk('class') + ' Counter:\n  ' + sk('def') + ' __init__(self, start=0):\n    self.count = start\nc = Counter()\nc2 = Counter(10)\n' + sf('print') + '(c.count, c2.count)  ' + sc('# 0 10'),
    guidance: ["Default arguments work in __init__: start=0.", "Counter() uses 0; Counter(10) uses 10."] },
  { id: 14, title: "Multiple Attributes in __init__", topic: "init_self", difficulty: "easy",
    desc: "Define class Book with __init__(self, title, author). Set both on self. Create b = Book('Python', 'Guido') and print b.title, b.author.",
    code: sk('class') + ' Book:\n  ' + sk('def') + ' __init__(self, title, author):\n    self.title = title\n    self.author = author\nb = Book(' + ss('"Python"') + ', ' + ss('"Guido"') + ')\n' + sf('print') + '(b.title, b.author)',
    guidance: ["Assign each parameter to self.attr in __init__."] },
  { id: 15, title: "__init__ No Return", topic: "init_self", difficulty: "easy",
    desc: "__init__ should not return a value (other than None). Define class A with __init__(self) that only does pass. Create a = A().",
    code: sk('class') + ' A:\n  ' + sk('def') + ' __init__(self):\n    ' + sk('pass') + '\n\na = A()\n' + sf('print') + '(a)',
    guidance: ["__init__ is called for side effects (setting attributes). Returning something else can break instance creation."] },
  { id: 16, title: "self in __init__", topic: "init_self", difficulty: "easy",
    desc: "Define class Dog with __init__(self, name). Set self.name = name. Create d = Dog('Rex') and print d.name.",
    code: sk('class') + ' Dog:\n  ' + sk('def') + ' __init__(self, name):\n    self.name = ' + sb() + '\nd = Dog(' + ss('"Rex"') + ')\n' + sf('print') + '(d.name)  ' + sc('# Rex'),
    guidance: ["Use the parameter name: self.name = name. Fill: <code>name</code>."] },
  { id: 17, title: "Optional __init__ Arg", topic: "init_self", difficulty: "medium",
    desc: "Define class Config with __init__(self, env='dev'). Set self.env = env. Create Config() and Config('prod'); print both .env.",
    code: sk('class') + ' Config:\n  ' + sk('def') + ' __init__(self, env=' + ss('"dev"') + '):\n    self.env = env\nc1 = Config()\nc2 = Config(' + ss('"prod"') + ')\n' + sf('print') + '(c1.env, c2.env)  ' + sc('# dev prod'),
    guidance: ["Default env='dev'; Config() gives dev, Config('prod') gives prod."] },
  { id: 18, title: "__init__ and Validation", topic: "init_self", difficulty: "medium",
    desc: "Define class Age with __init__(self, n). Set self.years = n only if n >= 0 else 0. Create Age(25) and Age(-1); print .years.",
    code: sk('class') + ' Age:\n  ' + sk('def') + ' __init__(self, n):\n    self.years = n ' + sk('if') + ' n >= 0 ' + sk('else') + ' 0\na = Age(25)\nb = Age(-1)\n' + sf('print') + '(a.years, b.years)  ' + sc('# 25 0'),
    guidance: ["Use a conditional in __init__ to validate: self.years = n if n >= 0 else 0."] },

  /* ─── Attributes (6) ─── */
  { id: 19, title: "Instance vs Class Attribute", topic: "attributes", difficulty: "medium",
    desc: "Define class C with class attribute kind = 'C' and __init__(self, x) setting self.x = x. Create c = C(1). Print c.x and C.kind.",
    code: sk('class') + ' C:\n  kind = ' + ss('"C"') + '\n  ' + sk('def') + ' __init__(self, x): self.x = x\nc = C(1)\n' + sf('print') + '(c.x, C.kind)  ' + sc('# 1 C'),
    guidance: ["Attributes defined on the class are shared; those set in __init__ on self are per-instance."] },
  { id: 20, title: "Class Attribute Access", topic: "attributes", difficulty: "easy",
    desc: "Define class Animal with class attribute species = 'unknown'. Print Animal.species. Create a = Animal() and print a.species (same value).",
    code: sk('class') + ' Animal:\n  species = ' + ss('"unknown"') + '\n' + sf('print') + '(Animal.species)\na = Animal()\n' + sf('print') + '(a.species)',
    guidance: ["Instance can read class attribute: a.species looks up to Animal.species if not on a."] },
  { id: 21, title: "Shadowing Class Attr", topic: "attributes", difficulty: "medium",
    desc: "Class C has count = 0. In __init__ set self.count = 1. Create c = C(). Print c.count (1) and C.count (0).",
    code: sk('class') + ' C:\n  count = 0\n  ' + sk('def') + ' __init__(self): self.count = 1\nc = C()\n' + sf('print') + '(c.count, C.count)  ' + sc('# 1 0'),
    guidance: ["Assigning self.count creates an instance attribute that shadows the class attribute for that instance."] },
  { id: 22, title: "Default Mutable Warning", topic: "attributes", difficulty: "hard",
    desc: "Avoid using mutable default in __init__: def __init__(self, items=None): self.items = items if items is not None else []. Create two instances and append to one; other stays empty.",
    code: sk('class') + ' Bag:\n  ' + sk('def') + ' __init__(self, items=None):\n    self.items = items ' + sk('if') + ' items ' + sk('is') + ' ' + sk('not') + ' None ' + sk('else') + ' []\nb1 = Bag()\nb2 = Bag()\nb1.items.append(1)\n' + sf('print') + '(b1.items, b2.items)  ' + sc('# [1] []'),
    guidance: ["Using def __init__(self, items=[]): would share one list. Use None and assign [] instead."] },
  { id: 23, title: "hasattr and getattr", topic: "attributes", difficulty: "medium",
    desc: "Create class C with self.x = 5. Use hasattr(c, 'x') and getattr(c, 'x'). Print both.",
    code: sk('class') + ' C:\n  ' + sk('def') + ' __init__(self): self.x = 5\nc = C()\n' + sf('print') + '(' + sf('hasattr') + '(c, ' + ss('"x"') + '), ' + sf('getattr') + '(c, ' + ss('"x"') + '))  ' + sc('# True 5'),
    guidance: ["hasattr(obj, 'name') checks if attribute exists; getattr(obj, 'name') gets value."] },
  { id: 24, title: "setattr", topic: "attributes", difficulty: "medium",
    desc: "Define class Empty with pass. Create e = Empty(), then setattr(e, 'value', 42) and print e.value.",
    code: sk('class') + ' Empty: pass\ne = Empty()\n' + sf('setattr') + '(e, ' + ss('"value"') + ', 42)\n' + sf('print') + '(e.value)  ' + sc('# 42'),
    guidance: ["setattr(obj, 'name', value) is like obj.name = value when the name is in a variable."] },

  /* ─── Methods (8) ─── */
  { id: 25, title: "Instance Method", topic: "methods", difficulty: "easy",
    desc: "Define class Greeter with def greet(self): return 'Hello'. Create g = Greeter() and print g.greet().",
    code: sk('class') + ' Greeter:\n  ' + sk('def') + ' greet(self): ' + sk('return') + ' ' + ss('"Hello"') + '\ng = Greeter()\n' + sf('print') + '(g.greet())  ' + sc('# Hello'),
    guidance: ["Instance methods take <code>self</code> as first parameter. Call with obj.method()."] },
  { id: 26, title: "Method Using self", topic: "methods", difficulty: "easy",
    desc: "Define class Adder with __init__(self, n) and method add(self, x) returning self.n + x. Create a = Adder(10), print a.add(5).",
    code: sk('class') + ' Adder:\n  ' + sk('def') + ' __init__(self, n): self.n = n\n  ' + sk('def') + ' add(self, x): ' + sk('return') + ' self.n + x\na = Adder(10)\n' + sf('print') + '(a.add(5))  ' + sc('# 15'),
    guidance: ["Methods can read self.n and other instance attributes."] },
  { id: 27, title: "@classmethod", topic: "methods", difficulty: "medium",
    desc: "Define class C with @classmethod def get_name(cls): return cls.__name__. Create C and print C.get_name().",
    code: sk('class') + ' C:\n  @' + sf('classmethod') + '\n  ' + sk('def') + ' get_name(cls): ' + sk('return') + ' cls.__name__\n' + sf('print') + '(C.get_name())  ' + sc('# C'),
    guidance: ["@classmethod receives <code>cls</code> (the class) as first argument. Call as C.get_name()."] },
  { id: 28, title: "@staticmethod", topic: "methods", difficulty: "medium",
    desc: "Define class Math with @staticmethod def square(x): return x*x. Print Math.square(5).",
    code: sk('class') + ' Math:\n  @' + sf('staticmethod') + '\n  ' + sk('def') + ' square(x): ' + sk('return') + ' x * x\n' + sf('print') + '(Math.square(5))  ' + sc('# 25'),
    guidance: ["@staticmethod has no self or cls; it is just a function in the class namespace."] },
  { id: 29, title: "classmethod from Instance", topic: "methods", difficulty: "easy",
    desc: "Class C has @classmethod def info(cls): return cls.__name__. Create c = C(). Call c.info() and print (works; cls is C).",
    code: sk('class') + ' C:\n  @classmethod\n  ' + sk('def') + ' info(cls): ' + sk('return') + ' cls.__name__\nc = C()\n' + sf('print') + '(c.info())  ' + sc('# C'),
    guidance: ["Calling c.info() still passes C as cls; classmethods work from instances too."] },
  { id: 30, title: "Method Calling Method", topic: "methods", difficulty: "medium",
    desc: "Define class Calc with add(self, a, b) returning a+b and double_add(self, a, b) returning self.add(a,b)*2. Create c = Calc(), print c.double_add(1, 2).",
    code: sk('class') + ' Calc:\n  ' + sk('def') + ' add(self, a, b): ' + sk('return') + ' a + b\n  ' + sk('def') + ' double_add(self, a, b): ' + sk('return') + ' self.add(a, b) * 2\nc = Calc()\n' + sf('print') + '(c.double_add(1, 2))  ' + sc('# 6'),
    guidance: ["Use self.add(a, b) to call another method from the same class."] },
  { id: 31, title: "staticmethod No self", topic: "methods", difficulty: "easy",
    desc: "Define class Utils with @staticmethod def is_even(n): return n % 2 == 0. Print Utils.is_even(4) and Utils.is_even(5).",
    code: sk('class') + ' Utils:\n  @staticmethod\n  ' + sk('def') + ' is_even(n): ' + sk('return') + ' n % 2 == 0\n' + sf('print') + '(Utils.is_even(4), Utils.is_even(5))  ' + sc('# True False'),
    guidance: ["Static methods don't receive self; they're like module-level functions grouped in the class."] },
  { id: 32, title: "Factory classmethod", topic: "methods", difficulty: "medium",
    desc: "Define class Point with __init__(self, x, y) and @classmethod from_tuple(cls, t): return cls(t[0], t[1]). Create p = Point.from_tuple((2, 3)); print p.x, p.y.",
    code: sk('class') + ' Point:\n  ' + sk('def') + ' __init__(self, x, y): self.x, self.y = x, y\n  @classmethod\n  ' + sk('def') + ' from_tuple(cls, t): ' + sk('return') + ' cls(t[0], t[1])\np = Point.from_tuple((2, 3))\n' + sf('print') + '(p.x, p.y)  ' + sc('# 2 3'),
    guidance: ["from_tuple is an alternative constructor; cls(t[0], t[1]) creates a new instance."] },

  /* ─── Inheritance (10) ─── */
  { id: 33, title: "Simple Inheritance", topic: "inheritance", difficulty: "easy",
    desc: "Define class Animal with pass. Define class Dog(Animal) with pass. Create d = Dog(). Print isinstance(d, Dog) and isinstance(d, Animal).",
    code: sk('class') + ' Animal: pass\n' + sk('class') + ' Dog(Animal): pass\nd = Dog()\n' + sf('print') + '(' + sf('isinstance') + '(d, Dog), isinstance(d, Animal))  ' + sc('# True True'),
    guidance: ["Dog(Animal) means Dog inherits from Animal. d is instance of both Dog and Animal."] },
  { id: 34, title: "Override Method", topic: "inheritance", difficulty: "easy",
    desc: "Class Animal has def speak(self): return '?'. Class Dog(Animal) overrides with return 'woof'. Create d = Dog(), print d.speak().",
    code: sk('class') + ' Animal:\n  ' + sk('def') + ' speak(self): ' + sk('return') + ' ' + ss('"?"') + '\n' + sk('class') + ' Dog(Animal):\n  ' + sk('def') + ' speak(self): ' + sk('return') + ' ' + ss('"woof"') + '\nd = Dog()\n' + sf('print') + '(d.speak())  ' + sc('# woof'),
    guidance: ["Subclass can redefine a method; Dog.speak overrides Animal.speak."] },
  { id: 35, title: "super() Call Parent", topic: "inheritance", difficulty: "medium",
    desc: "Class A has greet(self): return 'A'. Class B(A) has greet(self): return super().greet() + 'B'. Create b = B(), print b.greet().",
    code: sk('class') + ' A:\n  ' + sk('def') + ' greet(self): ' + sk('return') + ' ' + ss('"A"') + '\n' + sk('class') + ' B(A):\n  ' + sk('def') + ' greet(self): ' + sk('return') + ' super().greet() + ' + ss('"B"') + '\nb = B()\n' + sf('print') + '(b.greet())  ' + sc('# AB'),
    guidance: ["super().greet() calls the parent's greet(); then add 'B'."] },
  { id: 36, title: "super() in __init__", topic: "inheritance", difficulty: "medium",
    desc: "Class Person has __init__(self, name): self.name = name. Class Employee(Person) has __init__(self, name, id): super().__init__(name); self.id = id. Create e = Employee('Jo', 1); print e.name, e.id.",
    code: sk('class') + ' Person:\n  ' + sk('def') + ' __init__(self, name): self.name = name\n' + sk('class') + ' Employee(Person):\n  ' + sk('def') + ' __init__(self, name, id):\n    super().__init__(name)\n    self.id = id\ne = Employee(' + ss('"Jo"') + ', 1)\n' + sf('print') + '(e.name, e.id)  ' + sc('# Jo 1'),
    guidance: ["Call super().__init__(name) first so self.name is set; then set self.id."] },
  { id: 37, title: "Inherited Attribute", topic: "inheritance", difficulty: "easy",
    desc: "Class A has __init__(self): self.x = 1. Class B(A) has pass. Create b = B(). B has no __init__ so A's is used. Print b.x.",
    code: sk('class') + ' A:\n  ' + sk('def') + ' __init__(self): self.x = 1\n' + sk('class') + ' B(A): pass\nb = B()\n' + sf('print') + '(b.x)  ' + sc('# 1'),
    guidance: ["B() calls A.__init__ (inherited); so b.x is set to 1."] },
  { id: 38, title: "issubclass", topic: "inheritance", difficulty: "easy",
    desc: "Define class Base and class Derived(Base). Print issubclass(Derived, Base) and issubclass(Base, Derived).",
    code: sk('class') + ' Base: pass\n' + sk('class') + ' Derived(Base): pass\n' + sf('print') + '(' + sf('issubclass') + '(Derived, Base), issubclass(Base, Derived))  ' + sc('# True False'),
    guidance: ["issubclass(Derived, Base) is True; Base is not a subclass of Derived."] },
  { id: 39, title: "Multiple Inheritance Intro", topic: "inheritance", difficulty: "medium",
    desc: "Define class A: pass and class B: pass. Define class C(A, B): pass. Create c = C(). Print C.__bases__ (tuple of base classes).",
    code: sk('class') + ' A: pass\n' + sk('class') + ' B: pass\n' + sk('class') + ' C(A, B): pass\nc = C()\n' + sf('print') + '(C.__bases__)  ' + sc('# (A, B)'),
    guidance: ["class C(A, B): inherits from both. __bases__ gives (A, B)."] },
  { id: 40, title: "Override and Extend", topic: "inheritance", difficulty: "medium",
    desc: "Class A has run(self): return 1. Class B(A) has run(self): return super().run() + 2. Create B(), print b.run().",
    code: sk('class') + ' A:\n  ' + sk('def') + ' run(self): ' + sk('return') + ' 1\n' + sk('class') + ' B(A):\n  ' + sk('def') + ' run(self): ' + sk('return') + ' super().run() + 2\nb = B()\n' + sf('print') + '(b.run())  ' + sc('# 3'),
    guidance: ["super().run() returns 1; add 2 gives 3."] },
  { id: 41, title: "Child Without __init__", topic: "inheritance", difficulty: "easy",
    desc: "Class Parent has __init__(self, x): self.x = x. Class Child(Parent): pass. Create c = Child(5). Parent's __init__ is used. Print c.x.",
    code: sk('class') + ' Parent:\n  ' + sk('def') + ' __init__(self, x): self.x = x\n' + sk('class') + ' Child(Parent): pass\nc = Child(5)\n' + sf('print') + '(c.x)  ' + sc('# 5'),
    guidance: ["Child has no __init__, so Parent.__init__ is called when Child(5) is used."] },
  { id: 42, title: "Override __init__ with super", topic: "inheritance", difficulty: "medium",
    desc: "Class Animal has __init__(self, name): self.name = name. Class Dog(Animal) has __init__(self, name, breed): super().__init__(name); self.breed = breed. Create Dog('Rex', 'Lab'); print name and breed.",
    code: sk('class') + ' Animal:\n  ' + sk('def') + ' __init__(self, name): self.name = name\n' + sk('class') + ' Dog(Animal):\n  ' + sk('def') + ' __init__(self, name, breed):\n    super().__init__(name)\n    self.breed = breed\nd = Dog(' + ss('"Rex"') + ', ' + ss('"Lab"') + ')\n' + sf('print') + '(d.name, d.breed)  ' + sc('# Rex Lab'),
    guidance: ["Always call super().__init__(name) in Dog before setting Dog-specific attributes."] },

  /* ─── Encapsulation (5) ─── */
  { id: 43, title: "Private Convention _name", topic: "encapsulation", difficulty: "medium",
    desc: "By convention, a single leading underscore _ means 'internal'. Define class C with __init__(self): self._x = 1. Create c = C(), print c._x (still accessible).",
    code: sk('class') + ' C:\n  ' + sk('def') + ' __init__(self): self._x = 1\nc = C()\n' + sf('print') + '(c._x)  ' + sc('# 1'),
    guidance: ["_x is a hint to developers; Python does not enforce it. It is still readable and writable."] },
  { id: 44, title: "Name Mangling __name", topic: "encapsulation", difficulty: "medium",
    desc: "Double underscore __ triggers name mangling: __x becomes _C__x inside class C. Define class C with self.__val = 10. Access via c._C__val or define a getter.",
    code: sk('class') + ' C:\n  ' + sk('def') + ' __init__(self): self.__val = 10\n  ' + sk('def') + ' get_val(self): ' + sk('return') + ' self.__val\nc = C()\n' + sf('print') + '(c.get_val())  ' + sc('# 10'),
    guidance: ["__val is mangled to _C__val. Use a method get_val() to expose it."] },
  { id: 45, title: "@property Getter", topic: "encapsulation", difficulty: "medium",
    desc: "Define class Circle with __init__(self, r): self._r = r and @property def radius(self): return self._r. Create c = Circle(5); print c.radius (no parentheses).",
    code: sk('class') + ' Circle:\n  ' + sk('def') + ' __init__(self, r): self._r = r\n  @property\n  ' + sk('def') + ' radius(self): ' + sk('return') + ' self._r\nc = Circle(5)\n' + sf('print') + '(c.radius)  ' + sc('# 5'),
    guidance: ["@property makes radius() callable as an attribute: c.radius, not c.radius()."] },
  { id: 46, title: "Property Setter", topic: "encapsulation", difficulty: "hard",
    desc: "Class C has _x = 0, @property def x(self): return self._x, @x.setter def x(self, v): self._x = max(0, v). Create c = C(); c.x = 5; c.x = -1; print c.x.",
    code: sk('class') + ' C:\n  _x = 0\n  @property\n  ' + sk('def') + ' x(self): ' + sk('return') + ' self._x\n  @x.setter\n  ' + sk('def') + ' x(self, v): self._x = max(0, v)\nc = C()\nc.x = 5\nc.x = -1\n' + sf('print') + '(c.x)  ' + sc('# 0'),
    guidance: ["Setter ensures _x is never negative; c.x = -1 stores 0 via max(0, v)."] },
  { id: 47, title: "Read-Only Property", topic: "encapsulation", difficulty: "medium",
    desc: "Define class ReadOnly with __init__(self, v): self._v = v and @property def value(self): return self._v (no setter). Create r = ReadOnly(42); print r.value. Assigning r.value = 0 would raise AttributeError.",
    code: sk('class') + ' ReadOnly:\n  ' + sk('def') + ' __init__(self, v): self._v = v\n  @property\n  ' + sk('def') + ' value(self): ' + sk('return') + ' self._v\nr = ReadOnly(42)\n' + sf('print') + '(r.value)  ' + sc('# 42'),
    guidance: ["Property without setter is read-only; r.value = 0 would error."] },

  /* ─── Magic methods (3) ─── */
  { id: 48, title: "__str__", topic: "magic", difficulty: "medium",
    desc: "Define class Person with __init__(self, name) and __str__(self): return self.name. Create p = Person('Ali'). print(p) uses __str__; print str(p).",
    code: sk('class') + ' Person:\n  ' + sk('def') + ' __init__(self, name): self.name = name\n  ' + sk('def') + ' __str__(self): ' + sk('return') + ' self.name\np = Person(' + ss('"Ali"') + ')\n' + sf('print') + '(p)  ' + sc('# Ali'),
    guidance: ["__str__ is used by print() and str(); return a human-readable string."] },
  { id: 49, title: "__repr__", topic: "magic", difficulty: "medium",
    desc: "Define class Point with __init__(self, x, y) and __repr__(self): return 'Point(%s, %s)' % (self.x, self.y). Create Point(1, 2); repr(p) or echo in REPL uses __repr__.",
    code: sk('class') + ' Point:\n  ' + sk('def') + ' __init__(self, x, y): self.x, self.y = x, y\n  ' + sk('def') + ' __repr__(self): ' + sk('return') + ' ' + ss('"Point(%s, %s)"') + ' % (self.x, self.y)\np = Point(1, 2)\n' + sf('print') + '(repr(p))  ' + sc('# Point(1, 2)'),
    guidance: ["__repr__ should be unambiguous; often like constructor call. Used by repr() and REPL."] },
  { id: 50, title: "__eq__", topic: "magic", difficulty: "medium",
    desc: "Define class Box with __init__(self, v) and __eq__(self, other): return isinstance(other, Box) and self.v == other.v. Create Box(1) and Box(1); print Box(1) == Box(1).",
    code: sk('class') + ' Box:\n  ' + sk('def') + ' __init__(self, v): self.v = v\n  ' + sk('def') + ' __eq__(self, other): ' + sk('return') + ' ' + sf('isinstance') + '(other, Box) and self.v == other.v\n' + sf('print') + '(Box(1) == Box(1))  ' + sc('# True'),
    guidance: ["__eq__ defines ==. Check type with isinstance; then compare attributes."] },

  /* ─── Polymorphism (10): scratch to advance ─── */
  { id: 51, title: "Same Method Name, Different Classes", topic: "polymorphism", difficulty: "easy",
    desc: "Define class Dog with speak(self): return 'woof'. Define class Cat with speak(self): return 'meow'. Create d = Dog(), c = Cat(); print d.speak(), c.speak().",
    code: sk('class') + ' Dog:\n  ' + sk('def') + ' speak(self): ' + sk('return') + ' ' + ss('"woof"') + '\n' + sk('class') + ' Cat:\n  ' + sk('def') + ' speak(self): ' + sk('return') + ' ' + ss('"meow"') + '\nd, c = Dog(), Cat()\n' + sf('print') + '(d.speak(), c.speak())  ' + sc('# woof meow'),
    guidance: ["Polymorphism: same method name <code>speak</code>, different behavior per class."] },
  { id: 52, title: "Loop Over Different Types", topic: "polymorphism", difficulty: "easy",
    desc: "Dog and Cat both have speak(). Put instances in a list: [Dog(), Cat()]. Loop and print each .speak().",
    code: sk('class') + ' Dog:\n  ' + sk('def') + ' speak(self): return ' + ss('"woof"') + '\n' + sk('class') + ' Cat:\n  ' + sk('def') + ' speak(self): return ' + ss('"meow"') + '\nfor obj in [Dog(), Cat()]:\n  ' + sf('print') + '(obj.speak())  ' + sc('# woof then meow'),
    guidance: ["One loop, one call obj.speak(); each object responds with its own implementation."] },
  { id: 53, title: "Polymorphic Function", topic: "polymorphism", difficulty: "easy",
    desc: "Write def make_sound(animal): return animal.speak(). Call with Dog() and Cat(); print both results.",
    code: sk('class') + ' Dog:\n  ' + sk('def') + ' speak(self): return ' + ss('"woof"') + '\n' + sk('class') + ' Cat:\n  ' + sk('def') + ' speak(self): return ' + ss('"meow"') + '\n' + sk('def') + ' make_sound(animal): ' + sk('return') + ' animal.speak()\n' + sf('print') + '(make_sound(Dog()), make_sound(Cat()))  ' + sc('# woof meow'),
    guidance: ["make_sound doesn't care about the concrete type; it only needs .speak()."] },
  { id: 54, title: "Override and Call Same Name", topic: "polymorphism", difficulty: "medium",
    desc: "Class Animal has speak(self): return '?'. Dog(Animal) overrides with 'woof'. Create a = Dog(); print a.speak() (uses Dog's version).",
    code: sk('class') + ' Animal:\n  ' + sk('def') + ' speak(self): return ' + ss('"?"') + '\n' + sk('class') + ' Dog(Animal):\n  ' + sk('def') + ' speak(self): return ' + ss('"woof"') + '\na = Dog()\n' + sf('print') + '(a.speak())  ' + sc('# woof'),
    guidance: ["Variable a is a Dog; a.speak() resolves to Dog.speak (override)."] },
  { id: 55, title: "Duck Typing", topic: "polymorphism", difficulty: "medium",
    desc: "Duck typing: if it has .quack(), use it. Define class Duck with quack(self): return 'quack'. Define class Person with quack(self): return 'fake quack'. Write def say_it(x): return x.quack(). Call with Duck() and Person().",
    code: sk('class') + ' Duck:\n  ' + sk('def') + ' quack(self): return ' + ss('"quack"') + '\n' + sk('class') + ' Person:\n  ' + sk('def') + ' quack(self): return ' + ss('"fake quack"') + '\n' + sk('def') + ' say_it(x): return x.quack()\n' + sf('print') + '(say_it(Duck()), say_it(Person()))  ' + sc('# quack fake quack'),
    guidance: ["No common base class; Python uses duck typing: same method name, different classes."] },
  { id: 56, title: "Operator Overloading __add__", topic: "polymorphism", difficulty: "medium",
    desc: "Define class Vector with __init__(self, x, y) and __add__(self, other): return Vector(self.x + other.x, self.y + other.y). Create v1 = Vector(1,0), v2 = Vector(0,1); print (v1+v2).x, (v1+v2).y.",
    code: sk('class') + ' Vector:\n  ' + sk('def') + ' __init__(self, x, y): self.x, self.y = x, y\n  ' + sk('def') + ' __add__(self, other): ' + sk('return') + ' Vector(self.x + other.x, self.y + other.y)\nv1, v2 = Vector(1, 0), Vector(0, 1)\nv = v1 + v2\n' + sf('print') + '(v.x, v.y)  ' + sc('# 1 1'),
    guidance: ["__add__ is called for +; return a new Vector. Polymorphism: + means different things for int vs Vector."] },
  { id: 57, title: "Polymorphism with len()", topic: "polymorphism", difficulty: "medium",
    desc: "Define class MyList with __init__(self, data): self.data = data and __len__(self): return len(self.data). Create m = MyList([1,2,3]); print len(m).",
    code: sk('class') + ' MyList:\n  ' + sk('def') + ' __init__(self, data): self.data = data\n  ' + sk('def') + ' __len__(self): ' + sk('return') + ' ' + sf('len') + '(self.data)\nm = MyList([1, 2, 3])\n' + sf('print') + '(' + sf('len') + '(m))  ' + sc('# 3'),
    guidance: ["Built-in len() calls __len__; your class can plug into the same interface."] },
  { id: 58, title: "Common Interface", topic: "polymorphism", difficulty: "medium",
    desc: "Define abstract interface: class Shape with area(self): pass. Rectangle(Shape) and Circle(Shape) override area(). Put [Rectangle(2,3), Circle(1)] in list; loop and print each .area().",
    code: sk('class') + ' Shape:\n  ' + sk('def') + ' area(self): ' + sk('pass') + '\n' + sk('class') + ' Rectangle(Shape):\n  ' + sk('def') + ' __init__(self, w, h): self.w, self.h = w, h\n  ' + sk('def') + ' area(self): return self.w * self.h\n' + sk('class') + ' Circle(Shape):\n  ' + sk('def') + ' __init__(self, r): self.r = r\n  ' + sk('def') + ' area(self): return 3.14 * self.r * self.r\nfor s in [Rectangle(2,3), Circle(1)]: ' + sf('print') + '(s.area())',
    guidance: ["Same .area() call; Rectangle and Circle behave differently (polymorphism)."] },
  { id: 59, title: "Method Resolution Order", topic: "polymorphism", difficulty: "hard",
    desc: "Class A: def go(self): return 'A'. Class B(A): def go(self): return 'B'. Class C(A): def go(self): return 'C'. Class D(B, C): pass. Create d = D(); print d.go(). Which parent wins? (MRO: D, B, C, A)",
    code: sk('class') + ' A:\n  ' + sk('def') + ' go(self): return ' + ss('"A"') + '\n' + sk('class') + ' B(A):\n  ' + sk('def') + ' go(self): return ' + ss('"B"') + '\n' + sk('class') + ' C(A):\n  ' + sk('def') + ' go(self): return ' + ss('"C"') + '\n' + sk('class') + ' D(B, C): pass\nd = D()\n' + sf('print') + '(d.go())  ' + sc('# B'),
    guidance: ["MRO: D -> B -> C -> A. First definition of go is in B, so d.go() returns 'B'."] },
  { id: 60, title: "Polymorphic __getitem__", topic: "polymorphism", difficulty: "hard",
    desc: "Define class Seq with __init__(self, data): self.data = data and __getitem__(self, i): return self.data[i]. Create s = Seq([10,20,30]); print s[1]. Now s[1] works like a list.",
    code: sk('class') + ' Seq:\n  ' + sk('def') + ' __init__(self, data): self.data = data\n  ' + sk('def') + ' __getitem__(self, i): ' + sk('return') + ' self.data[i]\ns = Seq([10, 20, 30])\n' + sf('print') + '(s[1])  ' + sc('# 20'),
    guidance: ["__getitem__ makes obj[i] work; same interface as list indexing (polymorphism)."] },

  /* ─── Abstraction (10): scratch to advance ─── */
  { id: 61, title: "Abstract Idea: Base with pass", topic: "abstraction", difficulty: "easy",
    desc: "Define class Animal with def speak(self): pass (no implementation). Subclass Dog(Animal) with speak(self): return 'woof'. Create d = Dog(); print d.speak().",
    code: sk('class') + ' Animal:\n  ' + sk('def') + ' speak(self): ' + sk('pass') + '\n' + sk('class') + ' Dog(Animal):\n  ' + sk('def') + ' speak(self): return ' + ss('"woof"') + '\nd = Dog()\n' + sf('print') + '(d.speak())  ' + sc('# woof'),
    guidance: ["Animal.speak does nothing; subclasses provide real implementation. Base is 'abstract' in idea."] },
  { id: 62, title: "ABC: Import and Inherit", topic: "abstraction", difficulty: "easy",
    desc: "from abc import ABC, abstractmethod. Define class Shape(ABC) with @abstractmethod def area(self): pass. Subclass Rectangle(Shape) with area(self): return 10. Create r = Rectangle(); print r.area().",
    code: 'from abc import ABC, abstractmethod\n' + sk('class') + ' Shape(ABC):\n  @abstractmethod\n  ' + sk('def') + ' area(self): ' + sk('pass') + '\n' + sk('class') + ' Rectangle(Shape):\n  ' + sk('def') + ' area(self): return 10\nr = Rectangle()\n' + sf('print') + '(r.area())  ' + sc('# 10'),
    guidance: ["ABC = Abstract Base Class. You cannot instantiate Shape(); only concrete subclasses like Rectangle."] },
  { id: 63, title: "Cannot Instantiate ABC", topic: "abstraction", difficulty: "medium",
    desc: "Class Shape(ABC) has @abstractmethod def area(self): pass. Try shape = Shape() — it raises TypeError. Only concrete subclasses that implement area() can be instantiated.",
    code: 'from abc import ABC, abstractmethod\n' + sk('class') + ' Shape(ABC):\n  @abstractmethod\n  ' + sk('def') + ' area(self): pass\n' + sc('# Shape()  TypeError: Can\'t instantiate abstract class'),
    guidance: ["Abstract methods force subclasses to implement them; Shape() is forbidden."] },
  { id: 64, title: "Multiple Abstract Methods", topic: "abstraction", difficulty: "medium",
    desc: "Define class Worker(ABC) with @abstractmethod def work(self): pass and @abstractmethod def rest(self): pass. Class Programmer(Worker) implements both. Create p = Programmer(), call p.work() and p.rest().",
    code: 'from abc import ABC, abstractmethod\n' + sk('class') + ' Worker(ABC):\n  @abstractmethod\n  ' + sk('def') + ' work(self): pass\n  @abstractmethod\n  ' + sk('def') + ' rest(self): pass\n' + sk('class') + ' Programmer(Worker):\n  ' + sk('def') + ' work(self): return ' + ss('"coding"') + '\n  ' + sk('def') + ' rest(self): return ' + ss('"coffee"') + '\np = Programmer()\n' + sf('print') + '(p.work(), p.rest())  ' + sc('# coding coffee'),
    guidance: ["All abstract methods must be implemented before the subclass can be instantiated."] },
  { id: 65, title: "Abstract Property", topic: "abstraction", difficulty: "medium",
    desc: "Class Base(ABC) has @abstractmethod def value(self): pass. Subclass Concrete(Base) has def value(self): return 42. Create c = Concrete(); print c.value().",
    code: 'from abc import ABC, abstractmethod\n' + sk('class') + ' Base(ABC):\n  @abstractmethod\n  ' + sk('def') + ' value(self): pass\n' + sk('class') + ' Concrete(Base):\n  ' + sk('def') + ' value(self): return 42\nc = Concrete()\n' + sf('print') + '(c.value())  ' + sc('# 42'),
    guidance: ["Abstract method can be a getter; subclasses must implement value()."] },
  { id: 66, title: "Concrete + Abstract in One Class", topic: "abstraction", difficulty: "medium",
    desc: "Class Animal(ABC) has @abstractmethod speak(self): pass and concrete method name(self): return self.__class__.__name__. Dog(Animal) implements speak. Create d = Dog(); print d.name(), d.speak().",
    code: 'from abc import ABC, abstractmethod\n' + sk('class') + ' Animal(ABC):\n  @abstractmethod\n  ' + sk('def') + ' speak(self): pass\n  ' + sk('def') + ' name(self): return self.__class__.__name__\n' + sk('class') + ' Dog(Animal):\n  ' + sk('def') + ' speak(self): return ' + ss('"woof"') + '\nd = Dog()\n' + sf('print') + '(d.name(), d.speak())  ' + sc('# Dog woof'),
    guidance: ["Abstract class can have both abstract and concrete methods; name() is shared."] },
  { id: 67, title: "Abstract Class as Type Hint", topic: "abstraction", difficulty: "hard",
    desc: "Define def process(s: Shape): return s.area(). Shape is ABC. Call process(Rectangle(2,3)) and process(Circle(1)). Polymorphism: same function, different shapes.",
    code: 'from abc import ABC, abstractmethod\n' + sk('class') + ' Shape(ABC):\n  @abstractmethod\n  ' + sk('def') + ' area(self): pass\n' + sk('class') + ' Rectangle(Shape):\n  ' + sk('def') + ' __init__(self,w,h): self.w,self.h = w,h\n  ' + sk('def') + ' area(self): return self.w*self.h\n' + sk('class') + ' Circle(Shape):\n  ' + sk('def') + ' __init__(self,r): self.r = r\n  ' + sk('def') + ' area(self): return 3.14*self.r*self.r\n' + sk('def') + ' process(s): return s.area()\n' + sf('print') + '(process(Rectangle(2,3)), process(Circle(1)))  ' + sc('# 6 3.14...'),
    guidance: ["process(s) works for any Shape; abstraction defines the contract."] },
  { id: 68, title: "Subclass Without Implementing", topic: "abstraction", difficulty: "medium",
    desc: "Shape(ABC) has @abstractmethod area(self): pass. Class Incomplete(Shape): pass. Try Incomplete() — TypeError: must implement area.",
    code: 'from abc import ABC, abstractmethod\n' + sk('class') + ' Shape(ABC):\n  @abstractmethod\n  ' + sk('def') + ' area(self): pass\n' + sk('class') + ' Incomplete(Shape): pass\n' + sc('# Incomplete()  TypeError'),
    guidance: ["Subclass must implement all abstract methods; Incomplete() is still abstract."] },
  { id: 69, title: "ABC with __init__", topic: "abstraction", difficulty: "hard",
    desc: "Abstract class Vehicle(ABC) has __init__(self, name): self.name = name and @abstractmethod def start(self): pass. Car(Vehicle) calls super().__init__(name) and implements start(). Create c = Car('Tesla'); print c.name, c.start().",
    code: 'from abc import ABC, abstractmethod\n' + sk('class') + ' Vehicle(ABC):\n  ' + sk('def') + ' __init__(self, name): self.name = name\n  @abstractmethod\n  ' + sk('def') + ' start(self): pass\n' + sk('class') + ' Car(Vehicle):\n  ' + sk('def') + ' start(self): return ' + ss('"running"') + '\nc = Car(' + ss('"Tesla"') + ')\n' + sf('print') + '(c.name, c.start())  ' + sc('# Tesla running'),
    guidance: ["Abstract class can have __init__; Car(name) calls super().__init__(name) then sets name."] },
  { id: 70, title: "Registering a Virtual Subclass", topic: "abstraction", difficulty: "hard",
    desc: "Shape(ABC) with @abstractmethod area(self): pass. Class MyShape has def area(self): return 99. Register: Shape.register(MyShape). Now isinstance(MyShape(), Shape) is True. Create m = MyShape(); print m.area().",
    code: 'from abc import ABC, abstractmethod\n' + sk('class') + ' Shape(ABC):\n  @abstractmethod\n  ' + sk('def') + ' area(self): pass\n' + sk('class') + ' MyShape:\n  ' + sk('def') + ' area(self): return 99\nShape.register(MyShape)\nm = MyShape()\n' + sf('print') + '(m.area(), ' + sf('isinstance') + '(m, Shape))  ' + sc('# 99 True'),
    guidance: ["register() makes MyShape a virtual subclass of Shape without inheriting; isinstance still works."] }
];

/* ─────────────────────────────────────────────
   PERSISTENCE
───────────────────────────────────────────── */
var STORAGE_KEY = 'python-workout-solved';
function loadSolvedFromStorage() {
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ch1: [], ch2: [], ch3: [], ch4: [] };
    var data = JSON.parse(raw);
    return {
      ch1: Array.isArray(data.ch1) ? data.ch1 : [],
      ch2: Array.isArray(data.ch2) ? data.ch2 : [],
      ch3: Array.isArray(data.ch3) ? data.ch3 : [],
      ch4: Array.isArray(data.ch4) ? data.ch4 : []
    };
  } catch (e) { return { ch1: [], ch2: [], ch3: [], ch4: [] }; }
}
function saveSolvedToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ch1: Array.from(solvedIds.ch1),
      ch2: Array.from(solvedIds.ch2),
      ch3: Array.from(solvedIds.ch3),
      ch4: Array.from(solvedIds.ch4)
    }));
  } catch (e) {}
}
var saved = loadSolvedFromStorage();
var solvedIds = { ch1: new Set(saved.ch1), ch2: new Set(saved.ch2), ch3: new Set(saved.ch3), ch4: new Set(saved.ch4) };

/* ─────────────────────────────────────────────
   RENDER
───────────────────────────────────────────── */
function dots(level) {
  var m = { easy: 1, medium: 2, hard: 3 };
  return [1, 2, 3].map(function (i) {
    return '<div class="dot ' + (i <= m[level] ? 'lit ' + level : '') + '"></div>';
  }).join('');
}

function renderCard(p, chapter, delay) {
  var chKey = 'ch' + chapter;
  return '<div class="card" data-id="' + p.id + '" data-topic="' + p.topic + '" style="animation-delay:' + delay + 's">' +
    '<div class="card-header">' +
      '<span class="problem-num">#' + String(p.id).padStart(2, '0') + '</span>' +
      '<span class="problem-title">' + p.title + '</span>' +
      '<span class="topic-tag tag-' + p.topic + '">' + p.topic + '</span>' +
    '</div>' +
    '<div class="card-body">' +
      '<p class="problem-desc">' + p.desc + '</p>' +
      '<div class="code-block">' + p.code + '</div>' +
      '<button type="button" class="write-code-btn" onclick="openCodeModal(this)" data-id="' + p.id + '" data-ch="' + chapter + '">✏️ Write code</button>' +
      '<button class="guidance-toggle" onclick="toggleG(this)">' +
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg> 💡 Show Guidance' +
      '</button>' +
      '<div class="guidance-panel"><ol>' + p.guidance.map(function (g) { return '<li>' + g + '</li>'; }).join('') + '</ol></div>' +
    '</div>' +
    '<div class="card-footer">' +
      '<div class="difficulty">' + dots(p.difficulty) + '</div>' +
      '<button class="done-btn" onclick="toggleSolved(this,' + p.id + ',\'' + chKey + '\')"><span>✓</span> Mark as Solved</button>' +
    '</div></div>';
}

/* ─────────────────────────────────────────────
   CODE MODAL — Python stub (add Pyodide for real execution)
───────────────────────────────────────────── */
function hasRealCode(code) {
  var s = (code || '').trim();
  if (!s) return false;
  var lines = s.split('\n').map(function (line) { return line.trim(); }).filter(function (line) {
    if (!line) return false;
    var rest = line.replace(/^\s*#/, '').trim();
    return rest.length > 0;
  });
  return lines.length > 0;
}

function runPythonCode(code) {
  if (!hasRealCode(code)) return { success: false, output: '', error: 'No code to run' };
  try {
    if (typeof pyodideRun === 'function') return pyodideRun(code);
  } catch (e) {}
  return { success: true, output: '(Stub: Run your code locally or add Pyodide for in-browser Python.)' };
}

function getProblemById(chKey, id) {
  var arr = chKey === 'ch1' ? ch1 : chKey === 'ch2' ? ch2 : chKey === 'ch3' ? ch3 : ch4;
  for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return arr[i];
  return null;
}

function openCodeModal(btn) {
  var id = parseInt(btn.dataset.id, 10);
  var ch = btn.dataset.ch;
  var chKey = 'ch' + ch;
  var p = getProblemById(chKey, id);
  if (!p) return;
  var overlay = document.getElementById('code-modal-overlay');
  var titleEl = document.getElementById('modal-title');
  var descEl = document.getElementById('modal-desc');
  var listEl = document.getElementById('modal-guidance-list');
  var editorEl = document.getElementById('modal-editor');
  var outputEl = document.getElementById('modal-output');
  if (!overlay || !titleEl || !descEl || !listEl || !editorEl || !outputEl) return;
  titleEl.textContent = p.title;
  descEl.textContent = p.desc;
  listEl.innerHTML = p.guidance.map(function (g) { return '<li>' + g + '</li>'; }).join('');
  editorEl.value = '';
  outputEl.textContent = '';
  outputEl.className = 'modal-output empty';
  overlay.dataset.currentId = id;
  overlay.dataset.currentCh = chKey;
  overlay.classList.add('modal-open');
  overlay.setAttribute('aria-hidden', 'false');
  resizeModalEditor();
  if (!editorEl._resizeBound) {
    editorEl.addEventListener('input', resizeModalEditor);
    editorEl._resizeBound = true;
  }
  editorEl.focus();
  var escHandler = function (e) {
    if (e.key === 'Escape') { closeCodeModal(); document.removeEventListener('keydown', escHandler); }
  };
  document.addEventListener('keydown', escHandler);
  overlay._escHandler = escHandler;
}

function closeCodeModal() {
  var overlay = document.getElementById('code-modal-overlay');
  if (overlay) {
    overlay.classList.remove('modal-open');
    overlay.setAttribute('aria-hidden', 'true');
    if (overlay._escHandler) {
      document.removeEventListener('keydown', overlay._escHandler);
      overlay._escHandler = null;
    }
  }
}

function resizeModalEditor() {
  var el = document.getElementById('modal-editor');
  if (!el) return;
  var minH = window.innerHeight * 0.45;
  var maxH = window.innerHeight * 0.75;
  el.style.height = 'auto';
  var h = Math.max(el.scrollHeight, minH);
  el.style.height = Math.min(h, maxH) + 'px';
  el.style.overflowY = h > maxH ? 'auto' : 'hidden';
}

function runCodeInModal() {
  var editorEl = document.getElementById('modal-editor');
  var outputEl = document.getElementById('modal-output');
  if (!editorEl || !outputEl) return;
  var result = runPythonCode(editorEl.value.trim());
  outputEl.textContent = result.output || result.error || '(no output)';
  outputEl.classList.remove('empty', 'error', 'success');
  if (result.success) outputEl.classList.add('success');
  else { outputEl.textContent = (result.output ? result.output + '\n' : '') + 'Error: ' + (result.error || 'Unknown'); outputEl.classList.add('error'); }
}

function submitCodeInModal() {
  var overlay = document.getElementById('code-modal-overlay');
  var editorEl = document.getElementById('modal-editor');
  var outputEl = document.getElementById('modal-output');
  if (!overlay || !editorEl || !outputEl) return;
  var id = parseInt(overlay.dataset.currentId, 10);
  var chKey = overlay.dataset.currentCh;
  if (!chKey || !solvedIds[chKey]) return;
  var code = editorEl.value.trim();
  if (!hasRealCode(code)) {
    outputEl.textContent = 'Write some code and run it successfully before submitting.';
    outputEl.classList.remove('empty', 'success');
    outputEl.classList.add('error');
    return;
  }
  var result = runPythonCode(code);
  outputEl.textContent = result.output || '';
  outputEl.classList.remove('empty', 'error', 'success');
  if (!result.success) {
    outputEl.textContent = (result.output ? result.output + '\n' : '') + 'Error: ' + (result.error || '');
    outputEl.classList.add('error');
    return;
  }
  outputEl.classList.add('success');
  outputEl.textContent = result.output + '\n✓ Run successful!';
  var grid = document.getElementById(chKey + '-grid');
  var card = grid ? grid.querySelector('.card[data-id="' + id + '"]') : null;
  var doneBtn = card ? card.querySelector('.done-btn') : null;
  if (doneBtn && !solvedIds[chKey].has(id)) toggleSolved(doneBtn, id, chKey);
  closeCodeModal();
}

/* ─────────────────────────────────────────────
   RENDER CHAPTERS
───────────────────────────────────────────── */
document.getElementById('ch1-grid').innerHTML = ch1.map(function (p, i) { return renderCard(p, 1, i * 0.04); }).join('');
document.getElementById('ch2-grid').innerHTML = ch2.map(function (p, i) { return renderCard(p, 2, i * 0.04); }).join('');
document.getElementById('ch3-grid').innerHTML = ch3.map(function (p, i) { return renderCard(p, 3, i * 0.04); }).join('');
var ch4Grid = document.getElementById('ch4-grid');
if (ch4Grid) ch4Grid.innerHTML = ch4.map(function (p, i) { return renderCard(p, 4, i * 0.04); }).join('');

document.getElementById('ch1-count').textContent = ch1.length;
document.getElementById('ch2-count').textContent = ch2.length;
document.getElementById('ch3-count').textContent = ch3.length;
var ch4Count = document.getElementById('ch4-count');
if (ch4Count) ch4Count.textContent = ch4.length;

function restoreSolvedUI() {
  ['ch1', 'ch2', 'ch3', 'ch4'].forEach(function (chKey) {
    var gridId = chKey + '-grid';
    solvedIds[chKey].forEach(function (id) {
      var card = document.querySelector('#' + gridId + ' .card[data-id="' + id + '"]');
      if (card) {
        card.classList.add('solved');
        var btn = card.querySelector('.done-btn');
        if (btn) { btn.classList.add('solved'); btn.innerHTML = '<span>🎉</span> Solved!'; }
      }
    });
  });
}
restoreSolvedUI();

/* ─────────────────────────────────────────────
   CHAPTER NAVIGATION
───────────────────────────────────────────── */
function updateChapter2Lock() {
  var ch2Tab = document.querySelector('.ch-tab[data-chapter="2"]');
  if (!ch2Tab) return;
  var ch1Complete = ch1.filter(function (p) { return solvedIds.ch1.has(p.id); }).length >= ch1.length;
  if (ch1Complete) {
    ch2Tab.classList.remove('ch-tab-locked');
    ch2Tab.classList.add('ch-tab-unlocked');
    ch2Tab.setAttribute('aria-disabled', 'false');
    ch2Tab.title = 'Control Flow';
  } else {
    ch2Tab.classList.add('ch-tab-locked');
    ch2Tab.classList.remove('ch-tab-unlocked');
    ch2Tab.setAttribute('aria-disabled', 'true');
    ch2Tab.title = 'Complete all ' + ch1.length + ' Chapter 1 problems to unlock';
  }
}
function updateChapter3Lock() {
  var ch3Tab = document.querySelector('.ch-tab[data-chapter="3"]');
  if (!ch3Tab) return;
  var ch2Complete = ch2.filter(function (p) { return solvedIds.ch2.has(p.id); }).length >= ch2.length;
  if (ch2Complete) {
    ch3Tab.classList.remove('ch-tab-locked');
    ch3Tab.classList.add('ch-tab-unlocked');
    ch3Tab.setAttribute('aria-disabled', 'false');
    ch3Tab.title = 'Python Functions';
  } else {
    ch3Tab.classList.add('ch-tab-locked');
    ch3Tab.classList.remove('ch-tab-unlocked');
    ch3Tab.setAttribute('aria-disabled', 'true');
    ch3Tab.title = 'Complete all ' + ch2.length + ' Chapter 2 problems to unlock';
  }
}
function updateChapter4Lock() {
  var ch4Tab = document.querySelector('.ch-tab[data-chapter="4"]');
  if (!ch4Tab) return;
  var ch3Complete = ch3.filter(function (p) { return solvedIds.ch3.has(p.id); }).length >= ch3.length;
  if (ch3Complete) {
    ch4Tab.classList.remove('ch-tab-locked');
    ch4Tab.classList.add('ch-tab-unlocked');
    ch4Tab.setAttribute('aria-disabled', 'false');
    ch4Tab.title = 'OOPs';
  } else {
    ch4Tab.classList.add('ch-tab-locked');
    ch4Tab.classList.remove('ch-tab-unlocked');
    ch4Tab.setAttribute('aria-disabled', 'true');
    ch4Tab.title = 'Complete all ' + ch3.length + ' Chapter 3 problems to unlock';
  }
}

document.querySelectorAll('.ch-tab').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var ch = btn.dataset.chapter;
    if ((ch === '2' || ch === '3' || ch === '4') && btn.classList.contains('ch-tab-locked')) return;
    document.querySelectorAll('.ch-tab').forEach(function (b) { b.classList.remove('active'); });
    document.querySelectorAll('.ch-section').forEach(function (s) { s.classList.remove('active'); });
    btn.classList.add('active');
    document.getElementById('chapter-' + ch).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
updateChapter2Lock();
updateChapter3Lock();
updateChapter4Lock();

/* ─────────────────────────────────────────────
   FILTERS
───────────────────────────────────────────── */
function renumberVisible(gridId) {
  var grid = document.getElementById(gridId);
  if (!grid) return;
  var visible = grid.querySelectorAll('.card:not(.hidden)');
  visible.forEach(function (card, index) {
    var numEl = card.querySelector('.problem-num');
    if (numEl) numEl.textContent = '#' + String(index + 1).padStart(2, '0');
  });
}
function setupFilter(barId, gridId) {
  document.querySelectorAll('#' + barId + ' .filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('#' + barId + ' .filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var topic = btn.dataset.topic;
      document.querySelectorAll('#' + gridId + ' .card').forEach(function (card) {
        card.classList.toggle('hidden', topic !== 'all' && card.dataset.topic !== topic);
      });
      renumberVisible(gridId);
    });
  });
}
setupFilter('ch1-filter-bar', 'ch1-grid');
setupFilter('ch2-filter-bar', 'ch2-grid');
setupFilter('ch3-filter-bar', 'ch3-grid');
var ch4FilterBar = document.getElementById('ch4-filter-bar');
if (ch4FilterBar) setupFilter('ch4-filter-bar', 'ch4-grid');

/* ─────────────────────────────────────────────
   GUIDANCE TOGGLE
───────────────────────────────────────────── */
function toggleG(btn) {
  var panel = btn.nextElementSibling;
  btn.classList.toggle('open');
  panel.classList.toggle('open');
  btn.innerHTML = btn.classList.contains('open') ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg> 💡 Hide Guidance' : '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg> 💡 Show Guidance';
}

/* ─────────────────────────────────────────────
   SOLVED TRACKING
───────────────────────────────────────────── */
function toggleSolved(btn, id, chKey) {
  var card = btn.closest('.card');
  var set = solvedIds[chKey];
  if (set.has(id)) {
    set.delete(id);
    card.classList.remove('solved');
    btn.classList.remove('solved');
    btn.innerHTML = '<span>✓</span> Mark as Solved';
  } else {
    set.add(id);
    card.classList.add('solved');
    btn.classList.add('solved');
    btn.innerHTML = '<span>🎉</span> Solved!';
  }
  updateProgress();
  saveSolvedToStorage();
}

function updateProgress() {
  var d1 = ch1.filter(function (p) { return solvedIds.ch1.has(p.id); }).length, t1 = ch1.length;
  var d2 = ch2.filter(function (p) { return solvedIds.ch2.has(p.id); }).length, t2 = ch2.length;
  var d3 = ch3.filter(function (p) { return solvedIds.ch3.has(p.id); }).length, t3 = ch3.length;
  var d4 = ch4.filter(function (p) { return solvedIds.ch4.has(p.id); }).length, t4 = ch4.length;
  document.getElementById('ch1-prog-text').textContent = d1 + ' / ' + t1 + ' solved';
  document.getElementById('ch1-prog-fill').style.width = (t1 ? Math.min(1, d1 / t1) * 100 : 0) + '%';
  document.getElementById('ch2-prog-text').textContent = d2 + ' / ' + t2 + ' solved';
  document.getElementById('ch2-prog-fill').style.width = (t2 ? Math.min(1, d2 / t2) * 100 : 0) + '%';
  document.getElementById('ch3-prog-text').textContent = d3 + ' / ' + t3 + ' solved';
  document.getElementById('ch3-prog-fill').style.width = (t3 ? Math.min(1, d3 / t3) * 100 : 0) + '%';
  var ch4ProgText = document.getElementById('ch4-prog-text');
  var ch4ProgFill = document.getElementById('ch4-prog-fill');
  if (ch4ProgText) ch4ProgText.textContent = d4 + ' / ' + t4 + ' solved';
  if (ch4ProgFill) ch4ProgFill.style.width = (t4 ? Math.min(1, d4 / t4) * 100 : 0) + '%';
  document.getElementById('total-count').textContent = d1 + d2 + d3 + d4;
  updateChapter2Lock();
  updateChapter3Lock();
  updateChapter4Lock();
}
updateProgress();
