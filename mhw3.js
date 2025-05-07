document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".explore");
    const menu = document.querySelector(".explore-menu");
  
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
  
    document.addEventListener("click", function () {
      menu.style.display = "none";
    });
  
    // contatore per i like usando document.createElement() e cambio di colore del cuore se si mette o si toglie il like usando classList()
    const like = document.querySelectorAll(".like");
  
    like.forEach(like => {
      const like_button = like.querySelector(".like-button");
      const counter_container = like.querySelector(".like-counter");
  
      const counter = document.createElement("span");
      counter.className = "click-like-counter";
      let count = 100;
      counter.textContent = count;
      counter_container.appendChild(counter);
    
      const svg_like = like_button.querySelector("svg");
      const svg_like_clone = svg_like.cloneNode(true);
      // mi clono l'svg così da non riscriverlo dopo
      like_button.addEventListener("click", () => {

        const svg_like = like_button.querySelector("svg");
        if(!like_button.classList.contains("liked") && svg_like)
        {
            const like_img = document.createElement("img");
            like_img.src = "https://www.svgrepo.com/show/404857/blue-heart.svg";
            like_img.style.width = "24px";
            like_img.style.height = "24px";
            svg_like.replaceWith(like_img);
            count ++;
            counter.textContent = count;
            like_button.classList.add("liked");
        }
        else if(like_button.classList.contains("liked"))
        {
            const like_img = like_button.querySelector("img");
            like_img.replaceWith(svg_like_clone);
            count--;
            counter.textContent = count;
            like_button.classList.remove("liked");
        }
      });
    });    
  });
  
