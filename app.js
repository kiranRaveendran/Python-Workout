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
    guidance: ["<code>pow(2, 10)</code> is 1024.", "<code>pow(2, 10, 1000)</code> is 1024 % 1000 = 24. Fill: <code>1000</code>."] }
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
───────────────────────────────────────────── */
var ch3 = [
  { id: 1, title: "Define and Call", topic: "definition", difficulty: "easy",
    desc: "Define a function greet() that takes no arguments and prints 'Hello!' Then call it.",
    code: sk('def') + ' ' + sf('greet') + '():\n  ' + sf('print') + '(' + ss('"Hello!"') + ')\n\n' + sb() + '()',
    guidance: ["<code>def name():</code> defines a function with no parameters.", "Indent the body. Call with <code>greet()</code>. Fill the blank with <code>greet</code>."] },
  { id: 2, title: "Parameter and Return", topic: "parameters", difficulty: "easy",
    desc: "Write a function double(n) that returns n * 2. Print the result of double(7).",
    code: sk('def') + ' ' + sf('double') + '(n):\n  ' + sk('return') + ' ' + sb() + ' * 2\n\n' + sf('print') + '(' + sf('double') + '(7))',
    guidance: ["Parameters go in parentheses: <code>def double(n):</code>.", "<code>return</code> sends a value back. Fill: <code>return n * 2</code>.", "Output: 14."] },
  { id: 3, title: "Default Argument", topic: "parameters", difficulty: "easy",
    desc: "Define greet(name, greeting='Hello') and call it with just a name; then with name and 'Hi'.",
    code: sk('def') + ' ' + sf('greet') + '(name, greeting=' + ss('"Hello"') + '):\n  ' + sf('print') + '(greeting + ' + ss('" "') + ' + name)\n\n' + sf('greet') + '(' + ss('"Alex"') + ')\n' + sf('greet') + '(' + ss('"Bo"') + ', ' + ss('"Hi"') + ')',
    guidance: ["Default values: <code>greeting='Hello'</code>.", "greet(\"Alex\") uses default → \"Hello Alex\".", "greet(\"Bo\", \"Hi\") → \"Hi Bo\"."] },
  { id: 4, title: "Local Scope", topic: "scope", difficulty: "medium",
    desc: "Inside a function, assign to a variable. Print it inside the function; then try to print it outside (it will error unless you use global).",
    code: sk('def') + ' ' + sf('set_x') + '():\n  x = ' + sn('10') + '\n  ' + sf('print') + '(x)\n\n' + sf('set_x') + '()\n' + sf('print') + '(x)  ' + sc('# NameError if x only exists inside set_x'),
    guidance: ["Variables assigned inside a function are <strong>local</strong>.", "After set_x(), x does not exist in the global scope.", "To modify a global, use <code>global x</code> (usually avoid)."] },
  { id: 5, title: "lambda", topic: "lambdas", difficulty: "easy",
    desc: "Create a lambda that adds 10 to its argument. Use it: (lambda x: x+10)(5) should be 15.",
    code: 'add_10 = ' + sk('lambda') + ' x: x + ' + sn('10') + '\n' + sf('print') + '(add_10(5))   ' + sc('# 15') + '\n' + sf('print') + '((' + sk('lambda') + ' x: x + 10)(' + sn('5') + '))',
    guidance: ["<code>lambda x: x + 10</code> is a small anonymous function.", "Call with <code>add_10(5)</code> or <code>(lambda x: x+10)(5)</code>.", "Fill the last print with <code>5</code> so it prints 15."] },
  { id: 6, title: "Closure", topic: "closures", difficulty: "medium",
    desc: "Define make_adder(n) that returns a function. The returned function adds n to its argument. Call make_adder(3)(4) and get 7.",
    code: sk('def') + ' ' + sf('make_adder') + '(n):\n  ' + sk('def') + ' ' + sf('adder') + '(x):\n    ' + sk('return') + ' x + ' + sb() + '\n  ' + sk('return') + ' adder\n\n' + sf('print') + '(' + sf('make_adder') + '(3)(4))  ' + sc('# 7'),
    guidance: ["<code>adder</code> closes over <code>n</code> from the outer scope.", "Fill the blank with <code>n</code>. So make_adder(3) returns a function that adds 3.", "Calling that with 4 gives 7."] },
  { id: 7, title: "Multiple Returns", topic: "definition", difficulty: "easy",
    desc: "Write a function min_max(a, b) that returns the smaller and larger of two numbers as a tuple.",
    code: sk('def') + ' ' + sf('min_max') + '(a, b):\n  ' + sk('if') + ' a < b:\n    ' + sk('return') + ' (a, b)\n  ' + sk('return') + ' (' + sb() + ', ' + sb() + ')\n\n' + sf('print') + '(' + sf('min_max') + '(10, 3))',
    guidance: ["Return a tuple: <code>return (a, b)</code>.", "In the else case return <code>(b, a)</code> so the smaller is first.", "Output: (3, 10)."] },
  { id: 8, title: "*args", topic: "parameters", difficulty: "medium",
    desc: "Define sum_all(*args) that returns the sum of all arguments. sum_all(1, 2, 3) should return 6.",
    code: sk('def') + ' ' + sf('sum_all') + '(*args):\n  total = ' + sn('0') + '\n  ' + sk('for') + ' n ' + sk('in') + ' args:\n    total = total + n\n  ' + sk('return') + ' total\n\n' + sf('print') + '(' + sf('sum_all') + '(1, 2, 3))',
    guidance: ["<code>*args</code> collects extra positional arguments into a tuple.", "Loop over <code>args</code> and add each to total.", "Initial value for total is 0."] },
  { id: 9, title: "Scope: Local vs Global", topic: "scope", difficulty: "medium",
    desc: "Define a function that uses a local variable and a global variable. Understand which is which.",
    code: 'count = ' + sn('0') + '  ' + sc('# global') + '\n\n' + sk('def') + ' ' + sf('increment') + '():\n  local_count = ' + sn('1') + '  ' + sc('# local') + '\n  ' + sk('return') + ' count + ' + sb() + '\n\n' + sf('print') + '(' + sf('increment') + '())',
    guidance: ["<strong>Global</strong> <code>count</code> is visible inside the function.", "<strong>Local</strong> <code>local_count</code> exists only inside the function.", "Fill the blank with <code>local_count</code> so the function returns 0 + 1 = 1.", "Understanding scope prevents bugs when reusing variable names."] }
];

/* ─────────────────────────────────────────────
   PERSISTENCE
───────────────────────────────────────────── */
var STORAGE_KEY = 'python-workout-solved';
function loadSolvedFromStorage() {
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ch1: [], ch2: [], ch3: [] };
    var data = JSON.parse(raw);
    return {
      ch1: Array.isArray(data.ch1) ? data.ch1 : [],
      ch2: Array.isArray(data.ch2) ? data.ch2 : [],
      ch3: Array.isArray(data.ch3) ? data.ch3 : []
    };
  } catch (e) { return { ch1: [], ch2: [], ch3: [] }; }
}
function saveSolvedToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ch1: Array.from(solvedIds.ch1),
      ch2: Array.from(solvedIds.ch2),
      ch3: Array.from(solvedIds.ch3)
    }));
  } catch (e) {}
}
var saved = loadSolvedFromStorage();
var solvedIds = { ch1: new Set(saved.ch1), ch2: new Set(saved.ch2), ch3: new Set(saved.ch3) };

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
  var arr = chKey === 'ch1' ? ch1 : chKey === 'ch2' ? ch2 : ch3;
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

document.getElementById('ch1-count').textContent = ch1.length;
document.getElementById('ch2-count').textContent = ch2.length;
document.getElementById('ch3-count').textContent = ch3.length;

function restoreSolvedUI() {
  ['ch1', 'ch2', 'ch3'].forEach(function (chKey) {
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

document.querySelectorAll('.ch-tab').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var ch = btn.dataset.chapter;
    if ((ch === '2' || ch === '3') && btn.classList.contains('ch-tab-locked')) return;
    document.querySelectorAll('.ch-tab').forEach(function (b) { b.classList.remove('active'); });
    document.querySelectorAll('.ch-section').forEach(function (s) { s.classList.remove('active'); });
    btn.classList.add('active');
    document.getElementById('chapter-' + ch).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
updateChapter2Lock();
updateChapter3Lock();

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
  document.getElementById('ch1-prog-text').textContent = d1 + ' / ' + t1 + ' solved';
  document.getElementById('ch1-prog-fill').style.width = (t1 ? Math.min(1, d1 / t1) * 100 : 0) + '%';
  document.getElementById('ch2-prog-text').textContent = d2 + ' / ' + t2 + ' solved';
  document.getElementById('ch2-prog-fill').style.width = (t2 ? Math.min(1, d2 / t2) * 100 : 0) + '%';
  document.getElementById('ch3-prog-text').textContent = d3 + ' / ' + t3 + ' solved';
  document.getElementById('ch3-prog-fill').style.width = (t3 ? Math.min(1, d3 / t3) * 100 : 0) + '%';
  document.getElementById('total-count').textContent = d1 + d2 + d3;
  updateChapter2Lock();
  updateChapter3Lock();
}
updateProgress();
