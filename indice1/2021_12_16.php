<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Lock gift</title>
        <link rel="stylesheet" href="/indice1/index.css">
    </head>
    <body>
        <div class="page">
            <div class="clock">
                <div class="bande1" style="padding-left: CALC(50vw - 120px);">
                    <?php
                    for ($i = 0; $i < 24; $i++){
                        if($i < 10){
                            $i = "0".$i;
                        }
                        echo "<span>$i</span>";
                    }
                    ?>
                </div>
                <div class="bande2" style="padding-left: CALC(50vw + 30px);">
                    <?php
                    for ($i = 0; $i < 60; $i++){
                        if($i < 10){
                            $i = "0".$i;
                        }
                        echo "<span>$i</span>";
                    }
                    ?>
                </div>

                <div class="bande3" style="left: CALC(-2560px + 50vw);">
                    <?php
                    for ($i = 0; $i < 60; $i++){
                        if($i < 10){
                            $i = "0".$i;
                        }
                        echo "<span>$i</span>";
                    }
                    ?>
                </div>
            </div>
            <h1>INDICE N°1</h1>
            <div id="indice">
                <p>Bien qu'il convienne à tout le monde,<br>ce cadeau ne peut pas être commandé tant que l'on ne connait pas<br>l'identité de la personne à qui l'offrir.</p>
            </div>
        </div>

        <script src="/indice1/style.js"></script>
    </body>
</html>