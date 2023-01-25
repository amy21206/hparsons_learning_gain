Problem Bank for Practice Problems and Test Problems
-----------------------------------------------------

.. activecode:: hparsons_lg_sql_test_bank_pre_select
    :language: sql
    :autograde: unittest

    We use SQL to manage the equipment in a gym. Our current table ``equipment`` looks like this:

    .. image:: https://i.ibb.co/S680Gxf/pretest-1.png
    
    To help us refill items of some sport that are low in stock, 
    please write a SELECT statement to retrieve the ``name`` and  ``brand`` of all items 
    in the table ``equipment`` that belongs to ``sport`` category of "table_tennis" and
    has a ``stock`` of less than 10.

    ~~~~
    DROP TABLE IF EXISTS equipment;
    create table "equipment" ("id" INTEGER, "name" TEXT, "sport" TEXT, "brand" TEXT, "stock" INTEGER);
    INSERT INTO equipment (id,name,sport,brand,stock) VALUES
        ('1', 'table_tennis_ball', 'table_tennis', 'stiga', '24'),
        ('2', 'table_tennis_racket', 'table_tennis', 'stiga', '6'),
        ('3', 'volleyball', 'volleyball', 'wilson', '10'),
        ('4', 'table_tennis_ball', 'table_tennis', 'dhs', '5'),
        ('5', 'basketball', 'basketball', 'nike', '7');
    ^^^^
    SELECT name, brand FROM equipment WHERE sport = "table_tennis" AND stock < 10
    ====
    assert 0,0 == table_tennis_racket
    assert 0,1 == stiga
    assert 1,0 == table_tennis_ball
    assert 1,1 == dhs


.. activecode:: hparsons_lg_sql_test_bank_pre_update
    :language: sql
    :autograde: unittest

    We just bought 5 more of every table tennis item in the table and need to update the
    same ``equipment`` table. 
    Please write an UPDATE statement to update all entries with ``sport`` of ``table_tennis``
    to add to the ``stock`` number by 5.
    ~~~~
    DROP TABLE IF EXISTS equipment;
    create table "equipment" ("id" INTEGER, "name" TEXT, "sport" TEXT, "brand" TEXT, "stock" INTEGER);
    INSERT INTO equipment (id,name,sport,brand,stock) VALUES
        ('1', 'table_tennis_ball', 'table_tennis', 'stiga', '24'),
        ('2', 'table_tennis_racket', 'table_tennis', 'stiga', '6'),
        ('3', 'volleyball', 'volleyball', 'wilson', '10'),
        ('4', 'table_tennis_ball', 'table_tennis', 'dhs', '5'),
        ('5', 'basketball', 'basketball', 'nike', '7');
    ^^^^
    -- Your code here:
    UPDATE equipment SET stock = stock + 5 WHERE sport = "table_tennis"

    -- The following line separates with your code and selects all data for testing. Please do not modify.
    ;
    SELECT * FROM equipment
    ====
    assert 0,4 == 29
    assert 1,4 == 11
    assert 2,4 == 10
    assert 3,4 == 10
    assert 4,4 == 7

.. activecode:: hparsons_lg_sql_test_bank_pre_join
    :language: sql
    :autograde: unittest

    As students can rent items from the gym, we have another table ``rental`` that looks like this:

    .. image:: https://i.ibb.co/vz8K8sx/pretest-2.png

    Where the "item" in this table refers to the ``id`` in the ``equipment`` table above.
    To provide sports-related recommendations for people, we want to know when each individual
    played a certain sport.
    Please write a statement using SELECT and JOIN to: select the ``sport`` from the ``equipment``
    table and ``name`` and ``date`` from the ``rental`` table, where the ``item`` in the ``rental``
    table is the same as the ``id`` in the ``equipment`` table.

    ~~~~
    DROP TABLE IF EXISTS equipment;
    create table "equipment" ("id" INTEGER, "name" TEXT, "sport" TEXT, "brand" TEXT, "stock" INTEGER);
    INSERT INTO equipment (id,name,sport,brand,stock) VALUES
        ('1', 'table_tennis_ball', 'table_tennis', 'stiga', '24'),
        ('2', 'table_tennis_racket', 'table_tennis', 'stiga', '6'),
        ('3', 'volleyball', 'volleyball', 'wilson', '10'),
        ('4', 'table_tennis_ball', 'table_tennis', 'dhs', '5'),
        ('5', 'basketball', 'basketball', 'nike', '7');
    DROP TABLE IF EXISTS rental;
    create table "rental" ("name" TEXT, "item" INTEGER, "date" DATE);
    INSERT INTO rental (name,item,date) VALUES
        ('Alex', '2', '2022-11-06'),
        ('Blake', '1', '2022-11-06'),
        ('Charlie', '3', '2022-11-08'),
        ('Dale', '5', '2022-11-09');
    ^^^^
    SELECT equipment.sport, rental.name, rental.date FROM equipment JOIN rental ON equipment.id = rental.item
    ====
    assert 2,1 == Charlie
    assert 3,1 == Dale
