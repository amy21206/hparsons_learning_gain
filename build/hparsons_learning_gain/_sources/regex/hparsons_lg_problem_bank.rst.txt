Problem Bank for Practice Problems and Test Problems
-----------------------------------------------------

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
    :practice: T
    :autograde: unittest

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
    :practice: T
    :autograde: unittest

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


Practice problem 3: Character set ``\d`` and repetition
======================================================

explanation: write code answers could be: [0-9] instead of ``\d``.

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
    :practice: T
    :autograde: unittest

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
    :practice: T
    :autograde: unittest

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
    :practice: T
    :autograde: unittest

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


Practice problem 6: helpful pattern (ABABAB...A) 
==================================================

Explanation: parsons group might learn useful patter of (AB)+A to match ABAB..A

.. hparsons:: hparsons_lg_regex_6_hparsons
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Please write a regex to capture a URL that only consists of characters, numbers, underscore, and dots. 
    For example: www.abc.com, def_ghi.com, a678.cn
    Note that dots(".") should not appear consecutively, and should not appear as the first or last character. The dot must appear at least once.

    ~~~~
    --blocks--
    (\w+\.)
    +
    \w+
    \.


.. activecode:: hparsons_lg_regex_6_write
    :nocodelens:
    :practice: T
    :autograde: unittest

    Please write a regex to capture a URL that only consists of characters, numbers, underscore, and dots. 
    For example: www.abc.com, def_ghi.com, a678.cn
    Note that dots(".") should not appear consecutively, and should not appear as the first or last character. The dot must appear at least once.
    Replace "YOUR_REGEX" with your answer, but do not remove other symbols.

    ~~~~
    import re

    def match_URL(content):
        if re.match('^YOUR_REGEX$', content) != None:
            return True
        else:
            return False
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(match_URL('www.abc.com'), True, 'Should match "www.abc.com"')
            self.assertEqual(match_URL('def_ghi.com'), True, 'Should match "def_ghi.com"')
            self.assertEqual(match_URL('a678.cn'), True, 'Should match "a678.cn"')
            self.assertEqual(match_URL('com'), False, 'Should not match "com"')
            self.assertEqual(match_URL('abc*.com'), False, 'Should not match "abc*.com"')
            self.assertEqual(match_URL('abc..com'), False, 'Should not match "abc..com"')
    myTests().main()



.. mchoice:: hparsons_lg_regex_test_mcq_1

    What does a regex ``[^abc]`` mean?

    -   Match a character that is one of ^, a, b, or c.

        -

    -   Match a character that is not one of ^, a, b, or c.

        -

    -   Match a character that is not one of a, b, or c.

        +

    -   Match 3 characters in the sequence of "abc".

        -


.. mchoice:: hparsons_lg_regex_test_mcq_2

    What does the pattern ``\d`` do in regex?

    -   Matches any digit (0, 1, ..., 9).

        +

    -   Matches any date (yyyy-mm-dd).

        -

    -   Matches a dash.

        -

    -   Matches a dot.

        -

    -   I don't know.

        -

.. mchoice:: hparsons_lg_regex_test_mcq_3

    Which one of the following patterns should I use to treat "abc" as a group for repeating, but not make re.findall only return the content in the group?


    -   [abc]

        -

    -   (abc)

        -

    -   (?abc)

        -

    -   (?:abc)

        +

    -   I don't know.

        -

.. mchoice:: hparsons_lg_regex_test_mcq_4

    What does pattern ``\w`` mean?

    -   Any lowercase letter

        -

    -   Any lowercase or uppercase letter

        -

    -   Any lowercase or uppercase letter, or underscore

        +

    -   A word consisting of uppercase or lowercase letters

        -

    -   I don't know.

        -


.. mchoice:: hparsons_lg_regex_test_mcq_5

    Which of the following pattern would match "A"s separated by individual "B"s in between, for example, "AAABAABAA", "ABAAA"?
    Note that "B" should not appear consecutively, and should not appear as the first or last character. B must appear at least once.

    -   (A+B)+A+

        +

    -   (A+B)*A+

        -

    -   (AB)+A+

        -

    -   (A*B)+A+

        -

    -   I don't know.

        -


.. mchoice:: hparsons_lg_regex_test_mcq_6

    Which of the following pattern would match both words "attend" and "attendee"?

    -   attend|ee

        -
    
    -   attend(ee){1,}

        -

    -   attend(ee)?

        +

    -   attend[ee]

        -

    -   I don't know.

        -

