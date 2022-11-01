Practice Problems - Mixed-up Code
-----------------------------------------------------

Please answer
the following problems to the best of your ability without any
outside help. You can stop working on a problem after you worked
on it for about four minutes without solving it.

Problems
==============
.. hparsons:: test_hparsons_block_1
    :language: sql
    :dburl: /_static/test.db
    :randomize:
    :blockanswer: 0 1 2 3

    This is an example block-based horizontal parsons question

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

    This is an example execution-based horizontal parsons question
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


What to do next
============================
.. raw:: html

    <p>Click on the following link to go to the post test: <b><a id="hparsons_lg_sql_posttest"><font size="+2">Post Test</font></a></b></p>

.. raw:: html

    <script type="text/javascript" >

      function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
            }
        }
        return "";
      }

      window.onload = function() {

        a = document.getElementById("hparsons_lg_sql_posttest")
        a.href = "hparsons_lg_sql_posttest.html"

        // get prev set cookie
        var EXP_COOKIE = 'hparsons_lg_sql'
        var cond = getCookie(EXP_COOKIE);
        if (cond == 'wr') {
          window.location.href = "hparsons_lg_sql_pretest.html";
        }
      };

    </script>