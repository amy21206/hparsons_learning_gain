Introduction to AND, UPDATE, and JOIN
--------------------------------------

First, let's spend 8 minutes to learn about ``AND``, ``UPDATE``, and ``JOIN`` in SQL!

AND Keyword
==================================================

.. activecode:: mparsons_sql_ta_know_intro_and
    :language: sql
    :showlastsql:

    Here are Alice's bookkeeping entries in the table ``bookkeeping``:

    .. image:: https://i.ibb.co/yYZ9tyY/intro-bookkeeping.png

    Sometimes we want to select data with multiple constraints, and that can be done using ``AND``.

    ~~~~
    DROP TABLE IF EXISTS bookkeeping;
    create table "bookkeeping" ("date" DATE, "category" TEXT, "item" TEXT, "price" FLOAT);
    INSERT INTO bookkeeping (date,category,item,price) VALUES
        ('2022-10-27', 'electronics', 'keyboard', '98.8'),
        ('2022-10-30', 'food_drink', 'boba', '5.2'),
        ('2022-11-06', 'food_drink', 'ramen', '15'),
        ('2022-11-09', 'food_drink', 'boba', '5.5');
    ^^^^
    -- The following statement selects the "date", "item", and "price" of entries 
    -- that are in the "food_drink" "category", and "price" is over 10.
    SELECT date, item, price FROM bookkeeping WHERE category = "food_drink" AND price > 10


UPDATE Keyword
==================================================

.. activecode:: mparsons_sql_ta_know_intro_update
    :language: sql
    :showlastsql:

    With the same table ``bookkeeping``:

    .. image:: https://i.ibb.co/yYZ9tyY/intro-bookkeeping.png
    
    Sometimes we want to update certain records.

    ~~~~
    DROP TABLE IF EXISTS bookkeeping;
    create table "bookkeeping" ("date" DATE, "category" TEXT, "item" TEXT, "price" FLOAT);
    INSERT INTO bookkeeping (date,category,item,price) VALUES
        ('2022-10-27', 'electronics', 'keyboard', '98.8'),
        ('2022-10-30', 'food_drink', 'boba', '5.2'),
        ('2022-11-06', 'food_drink', 'ramen', '15'),
        ('2022-11-09', 'food_drink', 'boba', '5.5');
    ^^^^
    -- The following statement updates the entry which "item" is "keyboard",
    -- and sets its price to 100.
    UPDATE bookkeeping SET price = 100 WHERE item = "keyboard";


    -- The following statement updates all entries which "item" are "boba",
    -- and add 2 to their current price.
    UPDATE bookkeeping SET price = price + 2 WHERE item = "boba";

    -- The following line selects all data to display the change.
    SELECT * FROM bookkeeping 


JOIN Keyword
==================================================

.. activecode:: mparsons_sql_ta_know_intro_join
    :language: sql
    :showlastsql:

    Consider as a publishing company, we have two table ``authors`` and ``books``:

    .. image:: https://i.ibb.co/98D76Dh/intro-join.png
    
    Sometimes we want to merge the information from different tables.

    ~~~~
    DROP TABLE IF EXISTS authors;
    create table "authors" ("id" INTEGER, "name" TEXT, "nationality" TEXT);
    INSERT INTO authors (id,name,nationality) VALUES
        ('37', 'Ellen Writer', 'Americans'),
        ('15', 'Mu Li', 'Chinese'),
        ('24', 'Frank Schmidt', 'Germans');
    DROP TABLE IF EXISTS books;
    create table "books" ("id" INTEGER, "title" TEXT, "author_id" INTEGER);
    INSERT INTO books (id,title,author_id) VALUES
        ('1', 'Introduction to Python', '37'),
        ('2', 'European Fairy Tales', '24'),
        ('3', 'Healthy Food at Home', '15'),
        ('4', 'Modern AI Applications', '37');
    ^^^^
    -- The following statement will join information of the two tables by matching the "author_id"
    -- column of the "books" table and the "id" column of the "authors" table.
    SELECT books.title, authors.name, authors.nationality FROM books JOIN authors ON books.author_id = authors.id


What to do next
============================
.. raw:: html

    <div>
        Next, you will solve 6 SQL problems. 
        <b>
        Please "think aloud" during the process: verbalize what you are thinking while your are solving the problems, as if you were alone talking to yourself.
        <br>
        Please talk constantly.
        If you are quiet for a long time, the experimentor will ask you to keep talking.
        </b>
        
        <br>
        Click on the following link to go to the practice problems based on your participant number (please ask the experimenter):
        <br>
        <ul>
            <li><a href="A-WR-PB-PE.html">A</a></li>
            <li><a href="B-WR-PE-PB.html">B</a></li>
            <li><a href="C-PB-WR-PE.html">C</a></li>
            <li><a href="D-PB-PE-WR.html">D</a></li>
            <li><a href="E-PE-WR-PB.html">E</a></li>
            <li><a href="F-PE-PB-WR.html">F</a></li>
        </ul>
    </div>
