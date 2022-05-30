function reload(url) {
  fetch(url, { method: "GET" })
    .then((response) => response.text())
    .then((content) => {
      console.log(content);
      // $("body").html(content);
      $(".admin__main").load(url + " .admin__main>*", "");
      history.replaceState("", "", url);
    });
}

function formatDate(value) {
  // try {
  // alert("Ngày không hợp lệ");
  const date = new Date(value);
  const month = date.getMonth() + 1;
  return date.getDay() + "/" + month + "/" + date.getFullYear();
  // } catch (error) {
  alert("Ngày không hợp lệ");
  // }
}
// $("#form_size").on("submit", function (e) {
//   // $("#form_size").submit();
//   // alert("dfdf");
//   e.preventDefault();
//   console.log(location.href);
//   $.ajax({ url: location.href, type: "GET", dataType: "html" })
//     .done(function (data) {
//       $(".menu-wrapper").html(data);
//     })
//     .fail(function () {
//       console.log("Something went wrong!");
//     });
// });

// fetch('PATH_TO_URL',{
//   method:"POST",
//   body:JSON.stringify(data),
//   headers: { 'content-type': 'application/json' }

// $(function () {
//   $("form_limit").submit(function () {
//     $("#result").text(JSON.stringify($("form_limit").serializeObject()));
//     return false;
//   });
// });

// direct to /products/new
// var link_product_new = document.querySelector("a .products_new");
// link.addEventListener("click", function () {
//   fetch("/api/", method)
//   .then((response) => response.json())
//   .then
//   window.location.href = "/admin/products/new";
// });

//auth register
var form_reg = document.querySelector(".reg_form");
if (form_reg) {
  form_reg.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    const result = fetch("/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    }).then((respon) => respon.json());
    if (result.status == 200) {
      alert("thành cong");
    } else {
      alert(result);
    }
  });
}

// document.getElementById("username").value = "user3";
// document.getElementById("password").value = "1234566";
// admin login

// $(".sidebar__toggle").on("click", function (event) {
//   var sidebar = $(".sidebar");
//   sidebar.toggle("closed");
// });

// $(".select-limit").on("change", function () {
//   const column = $(this).attr("data-column");
//   const order = $(this).attr("data-order");
//   const uri =
//     "/categories?page=1&size=2&sort=" + column + "&sortorder=" + order;
//   fetch(url.trim(), { method: "GET" })
//     .then((response) => response.text())
//     .then((content) => $("body").html(content));
// });
// const ulTag = document.querySelector(".pagination__links");
// let totalPages = 20;
// let page = 10;
// function element(totalPages, page) {
//   let liTag = "";
//   let activeLi;
//   let beforePages = page - 1;
//   let afterPages = page + 1;
//   if (page > 1) {
//     liTag += `<li class="pagination__btn pagination__btn--prev"
//       onclick="element(totalPages, ${page - 1})">
//       <span><i class="fas fa-angle-left"></i></span>
//       </li>`;
//   }
//   if (page > 2) {
//     liTag += `<li class="pagination__link"
//       onclick="element(totalPages, 1)">
//       <span>1</span>
//       </li>`;
//     liTag += `<li class="pagination__dots"
//       <span>...</span>
//       </li>`;
//   }

//   if (page == totalPages) {
//     beforePages = beforePages - 2;
//   } else if (page == totalPages - 1) {
//     beforePages = beforePages - 1;
//   }

//   if (page == 1) {
//     afterPages = afterPages + 2;
//   } else if (page == 2) {
//     afterPages = afterPages + 1;
//   }

//   for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
//     if (pageLength > totalPages) {
//       continue;
//     }
//     if (pageLength == 0) {
//       pageLength = pageLength + 1;
//     }
//     if (page == pageLength) {
//       activeLi = "active";
//     } else {
//       activeLi = "";
//     }
//     liTag += `<li class="pagination__link ${activeLi}"
//       onclick="element(totalPages, ${pageLength})">
//       <span>${pageLength}</span>
//       </li>`;
//   }

//   if (page < totalPages - 1) {
//     if (page < totalPages - 2) {
//       liTag += `<li class="pagination__dots">
//         <span>...</span>
//         </li>`;
//     }
//     liTag += `<li class="pagination__link"
//       onclick="element(totalPages, ${totalPages})">
//       <span>${totalPages}</span>
//       </li>`;
//   }
//   if (page < totalPages) {
//     liTag += `<li class="pagination__btn pagination__btn--next"
//       onclick="element(totalPages, ${page + 1})">
//       <span><i class="fas fa-angle-right"></i></span>
//       </li>`;
//   }

//   ulTag.innerHTML = liTag;
// }
// if (ulTag) {
//   element(totalPages, 5);
// }
