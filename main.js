// Thay đổi nội dung búc thư ở đây
var letterContent =" Ba năm học trôi qua với biết bao kỷ niệm cùng mọi người, từ những giờ học sôi nổi đến những lần vui đùa vô tư. Nhưng với tôi, tất cả chỉ là những điều thoáng qua, không níu giữ, không khắc sâu. Tôi chẳng tìm thấy điều gì để lưu luyến hay hoài niệm. Người ta trân trọng quá khứ, còn tôi chỉ muốn bước tiếp, để mọi thứ ngủ yên như nó vốn dĩ. Hãy quên tôi đi, như chưa từng có tôi trong những ký ức ấy, như một cơn gió thoảng qua không để lại dấu vết gì🫀."

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

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
