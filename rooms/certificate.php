<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet/less" type="text/css" href="./style.less" />
    <link rel="stylesheet/less" type="text/css" href="./style/animations.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Heebo&display=swap" rel="stylesheet">
    <link rel="icon" href="./img/logo-small-white.png" type="image/x-icon" />
    <title>IEC</title>

</head>

<body id="certificate">
<?php
    $fn = $_GET["fname"];
    $ln = $_GET["lname"];
?>
    <main>
        <div id="page">
            <span id="p-logo"><img src="./img/logo.png" alt="IEC" width="70px"></span>
            <h1>וזאת לתעודה</h1>
            כי
            <div id="name">
                <span id="first"><?php echo "".$fn?></span>
                <span id="last"><?php echo "".$ln?></span>
            </div>
            <p>עבר/ה בהצלחה את חדר הבריחה של היחידה לחדשנות בחברת החשמל</p>
            <p id="signature">היחידה לחדשנות - חברת החשמל</p>
        </div>
    </main>
    <footer>
        <p>&copy;2021, חברת החשמל, כל הזכויות שמורות.<br>פותח ע"י עידו דור.</p>
    </footer>
    <script src="//cdn.jsdelivr.net/npm/less@4.1.1"></script>
</body>

</html>