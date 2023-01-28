Welcome to the study!
-----------------------------------------------------

Please "think aloud" during the process: talk constantly while you are solving the problems
as if you were alone, talking to yourself.


Solving Write Code Problems
==================================

If you see a problem like the one below you will need to write SQL statements
in the input area and pass the unittests.

See the video below for an example.

**TODO: replace this video**

.. youtube:: bNyHBwPA8Xk
    :divid: mparsons_sql_ta_intro_wr_video
    :optional:
    :width: 425
    :height: 344
    :align: center

Try to finish writing the code for the following problem.

.. activecode:: mparsons_sql_ta_intro_wr
    :language: sql
    :showlastsql:

    in the ``test`` table:

    .. image:: https://i.ibb.co/1s7NGNZ/test-database.png

    Please write a statement to select all data in the ``test`` table.

    ~~~~
    DROP TABLE IF EXISTS test;
    create table "test" ("id" INTEGER, "name" TEXT, "age" INTEGER);
    INSERT INTO test (id,name,age) VALUES
        ('1', 'Alice', 24),
        ('2', 'Bob', 46),
        ('3', 'Carol', 53);
    ^^^^
    ====
    assert 0,0 == 1
    assert 0,1 == Alice 
    assert 0,2 == 24
    assert 2,0 == 3
    assert 2,1 == Carol 
    assert 2,2 == 53
  

Solving Mixed-up Code Problems with Block Feedback
===================================================

If you see a problem like the one below you will need to put the mixed-up
code in the correct order on the bottom.
There will also be extra blocks that are not needed in a correct solution
that you can leave on the top row. 

Click the "Check" button to check your solution.
**It will highlight incorrect blocks if your answer is incorrect.**

See the video below for an example.

**TODO: replace this video**

.. youtube:: YehVhjxLae0
    :divid: mparsons_sql_ta_intro_pb_video
    :optional:
    :width: 650
    :height: 415
    :align: center

Try to solve the following mixed-up code problem with block feedback.


.. hparsons:: mparsons_sql_ta_intro_pb
    :language: sql
    :randomize:
    :blockanswer: 0 1 2

    in the ``test`` table:

    .. image:: https://i.ibb.co/1s7NGNZ/test-database.png

    Please write a statement to select all data in the ``test`` table.

    ~~~~
    --blocks--
    SELECT *
    FROM
    test
    temp


Solving Mixed-up Code Problems with Execution Feedback
======================================================

If you see a problem like the one below you will need to put the mixed-up
code in the correct order on the bottom.
There will also be extra blocks that are not needed in a correct solution
that you can leave on the top row. 

Click the "Check" button to check your solution.
**The difference between this problem and the previous one is that it will execute your code.**

See the video below for an example.

**TODO: replace this video**

.. youtube:: YehVhjxLae0
    :divid: mparsons_sql_ta_intro_pe_video
    :optional:
    :width: 650
    :height: 415
    :align: center

Try to solve the following mixed-up code problem with execution feedback.

.. hparsons:: mparsons_sql_ta_intro_pe
    :language: sql
    :randomize:

    in the ``test`` table:

    .. image:: https://i.ibb.co/1s7NGNZ/test-database.png

    Please write a statement to select all data in the ``test`` table.

    ~~~~
    --hiddenprefix--
    DROP TABLE IF EXISTS test;
    create table "test" ("id" INTEGER, "name" TEXT, "age" INTEGER);
    INSERT INTO test (id,name,age) VALUES
        ('1', 'Alice', 24),
        ('2', 'Bob', 46),
        ('3', 'Carol', 53);
    --blocks--
    SELECT *
    FROM
    test
    temp
    --unittest--
    assert 0,0 == 1
    assert 0,1 == Alice 
    assert 0,2 == 24
    assert 2,0 == 3
    assert 2,1 == Carol 
    assert 2,2 == 53


What to do next
============================
.. raw:: html

    <div>
        Click on the following link to move on to knowledge introduction of "AND", "UPDATE", and "JOIN":
        <ul>
            <li><a href="knowledge_intro.html">Knowledge Intro</a></li>
        </ul>
    </div>
