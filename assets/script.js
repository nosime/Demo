//Hàm ẩn và hiện màu thanh header khi lăn chuột
document.addEventListener("DOMContentLoaded", function() {
    let header = document.getElementById("header");
    
    let headerOffsetTop = header.offsetTop;
    let headerHeight = header.offsetHeight;
    let headerOpacity = 0; // Ban đầu, header ẩn (opacity = 0)
    let ticking = false; // Dùng để kiểm tra nếu requestAnimationFrame đã gọi
    
    function updateHeaderOpacity() {
      let scrollPos = window.pageYOffset;
      let a_title = document.getElementsByClassName("a_header");
      if (scrollPos >= headerOffsetTop -0) {
        header.style.opacity = "1";// Hiển thị header khi lăn xuống dưới header
        header.style.top = "0px";
        header.style.background = "#000";
       
    } else {
        // header.style.opacity = "0"; // Ẩn header khi lăn lên trên header
        header.style.background = "rgba(0, 0, 0, 0.1)";
        header.style.top = "0px";
       
       
      }
      
      ticking = false; // Cho phép gọi requestAnimationFrame lần tiếp theo
    }
    
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderOpacity); // Sử dụng requestAnimationFrame để đảm bảo hiệu ứng mượt mà
        ticking = true;
      }
    }
  
    window.addEventListener("scroll", onScroll);
  });

//Hàm hiển thị và ẩn bớt thông tin phim
function show_info(){
  const show= document.getElementById("show_info_film");
  const button = document.getElementById("btn_info");
  if (show.style.maxHeight) {
    show.style.maxHeight =null;
    button.textContent='Ẩn bớt';
  } else {
    show.style.maxHeight='200px';
    button.textContent='Hiển thị thêm';
  }
}