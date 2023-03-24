How to Use The Tool
-----------------------------------------------------

Solving Write Code Problems
==================================

If you see a problem like the one below you will need to write SQL statements
in the input area and pass the unittests.

See the video below for an example.

.. youtube:: pR_az72Q4kk
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
  

Solving Mixed-up Code Problems with Execution Feedback
======================================================

If you see a problem like the one below you will need to put the mixed-up
code in the correct order on the bottom.
Click or drag the blocks to form your answer.
Sometimes there will be extra blocks that are not needed in a correct solution
that you can leave on the top row. 

Click the "Run" button to execute your code.

See the video below for an example.

.. youtube:: 9OqabzxyKXE
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
            <li><a href="knowledge_intro.html">Introducing AND, UPDATE, and JOIN</a></li>
        </ul>
    </div>
