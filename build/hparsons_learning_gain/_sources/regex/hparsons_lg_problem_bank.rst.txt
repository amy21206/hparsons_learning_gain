Problem Bank for Practice Problems and Test Problems
-----------------------------------------------------




.. mchoice:: hparsons_lg_regex_test_mcq_1_pre

    What does a regex ``[^abc]`` mean?

    -   Match a character that is one of ^, a, b, or c.

        -

    -   Match a character that is not one of ^, a, b, or c.

        -

    -   Match a character that is not one of a, b, or c.

        +

    -   Match 3 characters in the sequence of "abc".

        -

.. mchoice:: hparsons_lg_regex_test_mcq_1_post

    What does a regex ``[^abc]`` mean?

    -   Match a character that is one of ^, a, b, or c.

        -

    -   Match a character that is not one of ^, a, b, or c.

        -

    -   Match a character that is not one of a, b, or c.

        +

    -   Match 3 characters in the sequence of "abc".

        -


.. mchoice:: hparsons_lg_regex_test_mcq_2_pre

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

.. mchoice:: hparsons_lg_regex_test_mcq_2_post

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

.. mchoice:: hparsons_lg_regex_test_mcq_3_pre

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

.. mchoice:: hparsons_lg_regex_test_mcq_3_post

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

.. mchoice:: hparsons_lg_regex_test_mcq_4_pre

    What does pattern ``\w`` mean?

    -   Any letter

        -

    -   Any letter or number

        -

    -   Any letter, digit, or underscore

        +

    -   A word consisting of letters

        -

    -   I don't know.

        -


.. mchoice:: hparsons_lg_regex_test_mcq_4_post

    What does pattern ``\w`` mean?

    -   Any letter

        -

    -   Any letter or number

        -

    -   Any letter, digit, or underscore

        +

    -   A word consisting of letters

        -

    -   I don't know.

        -


.. mchoice:: hparsons_lg_regex_test_mcq_5_pre

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


.. mchoice:: hparsons_lg_regex_test_mcq_5_post

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



.. mchoice:: hparsons_lg_regex_test_mcq_6_pre

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


.. mchoice:: hparsons_lg_regex_test_mcq_6_post

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

