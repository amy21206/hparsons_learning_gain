Practice Problems
-----------------------------------------------------

.. activecode:: hparsons_ta_sql_practice_0_wr_a
    :language: sql
    :showlastsql:

    In the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png
    
    Please write a SELECT statement to retrieve the ``student_id``, ``english``,
    and ``math`` of all entries whose ``test_name`` is ``midterm``.

    ~~~~
    DROP TABLE IF EXISTS grades;
    create table "grades" ("student_id" INTEGER, "test_name" TEXT, "english" INTEGER, "math" INTEGER);
    INSERT INTO grades (student_id,test_name,english,math) VALUES
        ('1', 'midterm', 62, 84),
        ('1', 'final', 70, 86),
        ('2', 'midterm', 50, 95),
        ('2', 'final', 80, 99),
        ('3', 'midterm', 55, 91);
    ^^^^
    ====
    assert 0,1 == 62
    assert 1,1 == 50
    assert 2,1 == 55


.. hparsons:: hparsons_ta_sql_practice_1_pb_a
    :language: sql
    :randomize:
    :blockanswer: 0 1 2 3 4 5

    In the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png
    
    Please write a SELECT statement to retrieve the ``student_id``, ``test_name``,
    and ``english`` of all entries whose ``english`` is lower than 60 and ``math`` is higher than 90.
    ~~~~
    --blocks--
    SELECT
    student_id, test_name, english
    FROM
    grades
    WHERE
    english < 60 AND math > 90
    english < 60 & math > 90



.. hparsons:: hparsons_ta_sql_practice_2_pe_a
    :language: sql
    :randomize:

    In the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png
    
    A student completed an extra assignment and got some additional points. 

    Please write an UPDATE statement to change the entry whose ``student_id`` is 1, and set their ``math`` score to 90 in the ``final`` test (``test_name`` column).
    ~~~~
    --hiddenprefix--
    DROP TABLE IF EXISTS grades;
    create table "grades" ("student_id" INTEGER, "test_name" TEXT, "english" INTEGER, "math" INTEGER);
    INSERT INTO grades (student_id,test_name,english,math) VALUES
        ('1', 'midterm', 62, 84),
        ('1', 'final', 70, 86),
        ('2', 'midterm', 50, 95),
        ('2', 'final', 80, 99),
        ('3', 'midterm', 55, 91);
    --blocks--
    UPDATE grades
    SET
    math = 90
    WHERE
    student_id = 1 AND test_name = "final"
    LET
    student_id = 1 AND test_name = final
    --hiddensuffix--
    SELECT * FROM grades;
    --unittest--
    assert 1,1 == final
    assert 1,3 == 90
    assert 3,3 == 99




.. activecode:: hparsons_ta_sql_practice_3_wr_a
    :language: sql
    :showlastsql:

    In the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png
    
    The instructors decided to add some points to all students as one test was too difficult.

    Please write an UPDATE statement to change all entries whose ``test_name`` is ``midterm``,
    and add 10 points to their ``english`` score.
    ~~~~
    DROP TABLE IF EXISTS grades;
    create table "grades" ("student_id" INTEGER, "test_name" TEXT, "english" INTEGER, "math" INTEGER);
    INSERT INTO grades (student_id,test_name,english,math) VALUES
        ('1', 'midterm', 62, 84),
        ('1', 'final', 70, 86),
        ('2', 'midterm', 50, 95),
        ('2', 'final', 80, 99),
        ('3', 'midterm', 55, 91);
    ^^^^
    -- Write your code here:

    -- The following line separates with your code and selects all data for testing. Please do not modify.
    ;
    SELECT * FROM grades 
    ====
    assert 0,2 == 72
    assert 1,2 == 70
    assert 2,2 == 60
    assert 3,2 == 80
    assert 4,2 == 65
  
.. hparsons:: hparsons_ta_sql_practice_4_pb_a
    :language: sql
    :randomize:
    :blockanswer: 0 1 2 3 4

    Aside from the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png

    We also have a ``students`` table:
    
    .. image:: https://i.ibb.co/m4KxSMC/practice-students.png
    
    Now we want to match the student name to their math grades.

    Please write a statement using SELECT and JOIN to: select the ``test_name`` and ``math``
    from the ``grades``  table and ``name`` from the ``students`` table, where the ``student_id``
    in the ``grades`` table is the same as the ``id`` in the ``students`` table.
    ~~~~
    --blocks--
    SELECT
    grades.test_name, grades.math, students.name
    FROM grades
    JOIN students
    ON students.id = grades.student_id
    ON students.id = grades.id


.. hparsons:: hparsons_ta_sql_practice_5_pe_a
    :language: sql
    :randomize:

    Aside from the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png

    We also have a ``tests`` table:
    
    .. image:: https://i.ibb.co/KVTGNXh/practice-tests.png
    
    Now we want to add the date information to the grades to see when the students took the tests.

    Please write a statement using SELECT and JOIN to: select the ``date`` and ``name``
    from the ``tests``  table and ``student_id`` from the ``grades`` table,
    where the ``test_name`` in the ``grades`` table is the same as the ``name`` in the ``tests`` table.
    ~~~~
    --hiddenprefix--
    DROP TABLE IF EXISTS grades;
    create table "grades" ("student_id" INTEGER, "test_name" TEXT, "english" INTEGER, "math" INTEGER);
    INSERT INTO grades (student_id,test_name,english,math) VALUES
        ('1', 'midterm', 62, 84),
        ('1', 'final', 70, 86),
        ('2', 'midterm', 50, 95),
        ('2', 'final', 80, 99),
        ('3', 'midterm', 55, 91);
    DROP TABLE IF EXISTS tests;
    create table "tests" ("name" TEXT, "date" DATE);
    INSERT INTO tests (name,date) VALUES
        ('midterm', '2022-10-15'),
        ('final', '2022-11-13');
    --blocks--
    SELECT
    tests.date, tests.name, grades.student_id
    FROM tests
    JOIN
    grades
    ON
    grades.test_name = tests.name
    --unittest--
    assert 0,0 == 2022-10-15
    assert 0,1 == midterm
    assert 0,2 == 1

