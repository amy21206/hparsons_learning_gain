Problem Bank for Practice Problems
------------------------------------

Practice problem 1: Character set
==================================

explanation: write code answer might be `gr[ae]y` or `gray|grey`

.. hparsons:: hparsons_lg_regex_1_hparsons
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Please write a regex that would match both word "gray" and "grey".

    ~~~~
    --blocks--
    gr
    [ae]
    y
    a

.. activecode:: hparsons_lg_regex_1_write
    :nocodelens:

    Please write a regex that would match both word "gray" and "grey".
    Replace "YOUR_REGEX" with your answer, but do not remove other symbols.

    ~~~~
    import re

    def match_word(word):
        if re.match('^YOUR_REGEX$', word) != None:
            return True
        else:
            return False
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(match_word('gray'), True, 'Should match "gray"')
            self.assertEqual(match_word('grey'), True, 'Should match "grey"')
            self.assertEqual(match_word('gry'), False, 'Should not match "gry"')
    myTests().main()


Practice problem 2: Character range
=====================================

explanation: `\w` is different.

.. hparsons:: hparsons_lg_regex_2_hparsons
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Please write a regex that would match a word that starts with an uppercase letter and followed by at least one lowercase letters, like "Apple", "Banana", or "Carrot".
    ~~~~
    --blocks--
    [A-Z]
    [a-z]
    +
    \w

.. activecode:: hparsons_lg_regex_2_write
    :nocodelens:

    Please write a regex that would match a word that starts with an uppercase letter and followed by at least one lowercase letters, like "Apple", "Banana", or "Carrot".
    Replace "YOUR_REGEX" with your answer, but do not remove other symbols.

    ~~~~
    import re

    def match_word(word):
        if re.match('^YOUR_REGEX$', word) != None:
            return True
        else:
            return False
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(match_word('Apple'), True, 'Should match "Apple"')
            self.assertEqual(match_word('Banana'), True, 'Should match "Banana"')
            self.assertEqual(match_word('It'), False, 'Should not match "It"')
            self.assertEqual(match_word('FRUIT'), False, 'Should not match "FRUIT"')
            self.assertEqual(match_word('vegetable'), False, 'Should not match "vegetable"')
    myTests().main()


Practice problem 3: Character set `\\d` and repetition
======================================================

explanation: write code answers could be: [0-9] instead of `\d`.

.. hparsons:: hparsons_lg_regex_3_hparsons
    :language: regex
    :randomize:
    :blockanswer: 0 1

    Please write a regex to capture numbers with 5-7 digits. For example: 48105, 103028, 1234567.
    ~~~~
    --blocks--
    \d
    {5,7}
    {5}

.. activecode:: hparsons_lg_regex_3_write
    :nocodelens:

    Please write a regex to capture numbers with 5-7 digits. For example: 48105, 103028, 1234567.
    Replace "YOUR_REGEX" with your answer, but do not remove other symbols.

    ~~~~
    import re

    def match_number(word):
        if re.match('^YOUR_REGEX$', word) != None:
            return True
        else:
            return False
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(match_number('48105'), True, 'Should match "48105"')
            self.assertEqual(match_number('103028'), True, 'Should match "103028"')
            self.assertEqual(match_number('1234567'), True, 'Should match "1234567"')
            self.assertEqual(match_number('123'), False, 'Should not match "123"')
            self.assertEqual(match_number('12345678'), False, 'Should not match "12345678"')
            self.assertEqual(match_number('words'), False, 'Should not match "words"')
    myTests().main()


Practice problem 4: negate character set
=========================================

explanation: write code answers might use [bcde....] instead of [^aeiou].

.. hparsons:: hparsons_lg_regex_4_hparsons
    :language: regex
    :randomize:
    :blockanswer: 0 1 2 3

    Capture words that start with a vowel (a, e, i, o, u), but end with a consonant (any letters that are not a, e, i, o, u).
    For example, it should match "unicorn", "it", and "element".
    ~~~~
    --blocks--
    [aeiou]
    [a-z]
    *
    [^aeiou]
    +

.. activecode:: hparsons_lg_regex_4_write
    :nocodelens:

    Capture words that start with a vowel (a, e, i, o, u), but end with a consonant (any letters that are not a, e, i, o, u).
    For example, it should match "unicorn", "it", and "element".
    Replace "YOUR_REGEX" with your answer, but do not remove other symbols.

    ~~~~
    import re

    def match_word(word):
        if re.match('^YOUR_REGEX$', word) != None:
            return True
        else:
            return False
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(match_word('unicorn'), True, 'Should match "unicorn"')
            self.assertEqual(match_word('it'), True, 'Should match "it"')
            self.assertEqual(match_word('element'), True, 'Should match "element"')
            self.assertEqual(match_word('banana'), False, 'Should not match "banana"')
            self.assertEqual(match_word('apple'), False, 'Should not match "apple"')
            self.assertEqual(match_word('tick'), False, 'Should not match "tick"')
    myTests().main()


Practice problem 5: non-capturing group
========================================

explanation: write code answers might not use (?:...).

.. hparsons:: hparsons_lg_regex_5_hparsons
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Please write a regex to replace the 'YOUR_REGEX' below to match any price in the form of $3.45 or $23.32 or $400.
    Note that we are using re.findall(), so please make sure your regex would return the full match string.

    .. code-block:: python

        def find_price(content):
            return re.findall('YOUR_REGEX', content)

    ~~~~
    --blocks--
    \$\d+
    (?:\.\d\d)
    ?
    (\.\d\d)


.. activecode:: hparsons_lg_regex_5_write
    :nocodelens:

    Please write a regex to replace the 'YOUR_REGEX' below to match any price in the form of $3.45 or $23.32 or $400.
    Note that we are using re.findall(), so please make sure your regex would return the full match string.

    ~~~~
    import re

    def find_price(content):
        return re.findall('YOUR_REGEX', content)

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(find_price('The price of the apple is $3.45.'), ['$3.45'], 'The price of the apple is $3.45.')
            self.assertEqual(find_price('I spent $23.32 for the book.'), ['$23.32'], 'I spent $23.32 for the book.')
            self.assertEqual(find_price('The gift cost me $400, and the cake was $40.26.'), ['$400', '$40.26'], 'The gift cost me $400, and the cake was $40.26.')
    myTests().main()
