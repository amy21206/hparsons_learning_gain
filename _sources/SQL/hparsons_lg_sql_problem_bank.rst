Problem Bank for Practice Problems and Test Problems
-----------------------------------------------------

.. hparsons:: test_hparsons_block_1
    :language: sql
    :dburl: /_static/test.db
    :randomize:
    :blockanswer: 0 1 2 3

    This is a horizontal Parsons problem! Feedback is based on block for this problem.
    The blocks are randomized, but cannot be reused ;)
    ~~~~
    --blocks--
    SELECT
    *
    FROM
    test


.. hparsons:: test_hparsons_sql_1
    :language: sql
    :dburl: /_static/test.db
    :randomize:

    This is a horizontal Parsons problem! Feedback is based on code execution.
    The blocks are randomized, but cannot be reused ;)
    ~~~~
    --blocks--
    SELECT
    *
    FROM
    test
    --unittest--
    assert 1,1 == world
    assert 0,1 == hello
    assert 2,1 == 42



