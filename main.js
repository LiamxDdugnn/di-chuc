// Thay đổi nội dung búc thư ở đây
var letterContent =" Cảm ơn vì đã từng ở bên tớ, vì đã kiên nhẫn và quan tâm, dù có lẽ tớ chưa từng thực sự xứng đáng. Cũng xin lỗi vì những lúc tớ im lặng, thu mình, đẩy mọi người ra xa mà không hề nhận ra. Tớ đã tự khiến mọi thứ vụn vỡ, và bây giờ, có lẽ chẳng còn gì để trân trọng nữa. Những kỷ niệm từng đẹp, nhưng giờ chỉ còn là thứ nhắc nhở tớ về những gì đã mất. Tớ không mong quay lại, cũng không mong được tha thứ—chỉ đơn giản là mọi thứ đã kết thúc, và như vậy có lẽ sẽ tốt hơn☹️"
// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 45 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
