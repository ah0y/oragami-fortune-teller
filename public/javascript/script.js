

$(document).ready(function () {
    $(".pushme").click(function () {
        console.log(this.attributes['data'].value)
        $(this).css("color", "red")
        document.getElementsByTagName('img')[0].style.display = 'block'
        setTimeout(function () {
            document.getElementsByTagName('img')[0].style.display = 'none'
        }, 2500)
        if (this.attributes['data'].value.split(',')[0].length % 2 == 0) {
            for (var i = 0; i < document.getElementsByClassName('even').length; i++) {
                document.getElementsByClassName('even')[i].style.display = 'block'
            }
            for (var i = 0; i < document.getElementsByClassName('odd').length; i++) {
                document.getElementsByClassName('odd')[i].style.display = 'none'
            }
        }
        else {
            for (var i = 0; i < document.getElementsByClassName('odd').length; i++) {
                document.getElementsByClassName('odd')[i].style.display = 'block'
            }
            for (var i = 0; i < document.getElementsByClassName('even').length; i++) {
                document.getElementsByClassName('even')[i].style.display = 'none'
            }
        }
    })
    $(".flap").click(function () {
        document.getElementsByTagName('img')[1].style.display = 'block'
        setTimeout(function () {
            document.getElementsByTagName('img')[1].style.display = 'none'
        }, 5000)

        if (this.className.split(' ')[3] == 'odd') {
            $(this).text(this.attributes['data'].value.split(',')[1]);
        }
        else {
            $(this).text(this.attributes['data'].value.split(',')[2])
        }
        $(this).css("color", "red")

    })

    $("#copyto").click(function copyToClipboard() {
       var copyText = document.getElementById("sharable");
       copyText.select();
       document.execCommand("Copy");
       alert("Copied the link to your clipboard")
      })

})
