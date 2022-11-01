Pre Test
-----------------------------------------------------

Please try to solve each of the following problems to the best of your ability.
It is **OK** to not know the correct answers!  If you don't know the answer just select
option E (I don't know).

Problems
==============

.. timed:: hparsons_lg_sql_timed_pre
   :timelimit: 14
   :noresult:
   :nofeedback:
   :nopause:

   .. selectquestion:: hparsons_lg_sql_pretest_1
      :fromid: hparsons_lg_sql_test_mcq_example_pre
      :points: 1


What to do next
============================

.. raw:: html

    <p>Click on the following link to go the practice problems: <a id="hparsons_lg_sql_practice"><font size="+2">Practice Problems</font></a></p>
    <p>By the way, this time you will always get the same type of practice even if you navigate back and forth =)</p>

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

      function setCookie(cname, cvalue) {
         document.cookie = cname + "=" + cvalue + ";";
      }

      window.onload = function() {

         a = document.getElementById("hparsons_lg_sql_practice")

         // get prev set cookie
         var EXP_COOKIE = 'hparsons_lg_sql'
         var cond = getCookie(EXP_COOKIE);
         
         // if no prev set cookie: generate random condition and set cookie
         if (cond != 'wr' && cond != 'hp') {
            var v = Math.floor(Math.random() * 2);
            cond = v == 0 ? 'wr' : 'hp';
            setCookie(EXP_COOKIE, cond);
         }

         if (cond == 'wr') {
            a.href = "hparsons_lg_sql_practice_W.html"
         } else if (cond == 'hp') {
            a.href = "hparsons_lg_sql_practice_H.html"
         }

      };
    </script>
