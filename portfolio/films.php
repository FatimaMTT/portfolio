<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8"/>
    <title>Fatima's Porfolio Website</title>
    <meta name="description" content="Films">
    <meta name="author" content="Fatima Malo Torres Trueba">
    <link rel="stylesheet" type="text/css" href="style/global.css?random.number">
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
</head>

<body>
    <header><?php include("header.php"); ?></header>
    
    <main>
        <div id="films-page">
            <p id="animation">Animation</p>
            <div class="gallery" id="video1">
            <iframe allowFullScreen frameborder="0" height="127" mozallowfullscreen src="https://player.vimeo.com/video/258536496" webkitAllowFullScreen width="225"></iframe>
            <p>Computer Animation I <br> Final Project</p>
            </div>
            
            <div class="gallery" id="video2">
            <iframe allowFullScreen frameborder="0" height="127" mozallowfullscreen src="https://player.vimeo.com/video/258536213" webkitAllowFullScreen width="225"></iframe>
            <p>Haunted Room</p>
            </div>
            
            <div class="gallery" id="video3">
            <iframe allowFullScreen frameborder="0" height="127" mozallowfullscreen src="https://player.vimeo.com/video/258535526" webkitAllowFullScreen width="225"></iframe>
            <p>Pearl Divers</p>
            </div>
            
            
            <div class="gallery" id="video4">
            <iframe allowFullScreen frameborder="0" height="127" mozallowfullscreen src="https://player.vimeo.com/video/258535412" webkitAllowFullScreen width="225"></iframe>
            <p>2D Walk Cycle</p>
            </div>   
                
            <div class="gallery" id="video5">    
            <iframe allowFullScreen frameborder="0" height="127" mozallowfullscreen src="https://player.vimeo.com/video/258534928" webkitAllowFullScreen width="225"></iframe>
            <p>Hand Rotation</p>
            </div>    
            
            <div class="gallery" id="video6">
            <iframe allowFullScreen frameborder="0" height="127" mozallowfullscreen src="https://player.vimeo.com/video/258534734" webkitAllowFullScreen width="225"></iframe>
            <p>Making People Smile</p>
            </div>
             
            <p id="motion-graphics">Motion Graphics</p>
            <div class="gallery" id="video7">
            <iframe allowFullScreen frameborder="0" height="127" mozallowfullscreen src="https://player.vimeo.com/video/258903617" webkitAllowFullScreen width="225"></iframe>
            <p>Motion Graphics <br> Final Project</p>
            </div>
            
            <div class="gallery" id="video8">
            <iframe allowFullScreen frameborder="0" height="127" mozallowfullscreen src="https://player.vimeo.com/video/259524450" webkitAllowFullScreen width="225"></iframe>    
            <p>Motion Graphics <br> Noun Project</p>
            </div>
            
            <p id="live-action" id="video9">Live Action</p>
            <div class="gallery">
            <iframe allowFullScreen frameborder="0" height="127" mozallowfullscreen src="https://player.vimeo.com/video/258528738" webkitAllowFullScreen width="225"></iframe>
            <p>Long Shot</p>
            </div>
        
            <div class="gallery" id="video10">
            <iframe allowFullScreen frameborder="0" height="127" mozallowfullscreen src="https://player.vimeo.com/video/258528487" webkitAllowFullScreen width="225"></iframe>
            <p>Stop It</p>
            </div>    
            
            <div class="gallery" id="video11">
            <iframe allowFullScreen frameborder="0" height="127" mozallowfullscreen src="https://player.vimeo.com/video/258528378" webkitAllowFullScreen width="225"></iframe>
            <p>El movimiento del sol</p>
            </div>
                
        </div>
        <button onclick="topFunction()" id="top-button" title="Go to top">Top</button>
    </main>

    <footer><?php include("footer.php"); ?></footer>
    <script src="script/script.js"></script>
</body>
</html>