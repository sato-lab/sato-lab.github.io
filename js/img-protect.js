        $(function() {

            $("img").on("contextmenu", function() {
                return false;
            });

            var timer;
            $("img").on("touchstart", function() {
                timer = setTimeout(function() {
                    alert("画像は保存できません")
                }, 500)
                return false;
            });

            $("img").on("touchend", function() {
                clearTimeout(timer);
                return false;
            });
        });
        