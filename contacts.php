<!doctype html>
<html class="no-js" lang="pt">

<?php include 'parts/head.php' ?>

<body>
<div class="scrollbar" id="style-3">
    <div class="force-overflow">

        <div class="row">
            <div class="col-2">

                <?php include 'parts/navbar.php' ?>
                <?php include 'parts/responsivenavbar.php' ?>

            </div>
            <div class="col-10">


    <h1 id="tit">CONTACTS</h1>

    <div id="address">
        <p>Fell free to contact us anytime.</p>

        <br>
        <i class="fa fa-map-marker" aria-hidden="true"></i>
       <p> Street Indústria do Papel, Nº 104 <br>
        3305-096 - Coimbra</p><br>
        <i class="fa fa-phone" aria-hidden="true"></i>
       <p> 21 239 329 1323</p>



    </div>
<div class="emailform">
    <i class="fa fa-envelope-o" aria-hidden="true"></i>
    <form action="envia.php" method="POST">
        <input type="text" name="name" placeholder="Name" required><br>
        <input type="text" name="email" placeholder="Email" required><br>
        <input id="messageBox" type="text" name="message" placeholder="Message" required><br>
        <input class="inputButton" type="submit" value="Send">
        <input class="inputButton" type="reset" value="Reset">
    </form>
</div>

    <footer>
        <p>GAEA® is a registered trademark.</p>
    </footer>
</div>
    </div>


        <?php include 'parts/bottomscripts.php' ?>

    </div>
</div>

<?php include 'parts/scroll.php' ?>
</body>
</html>
