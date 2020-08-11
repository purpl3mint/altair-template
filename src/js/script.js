const changeRange = () => {
  const blogRange = document.getElementById("blog-range");
  const blogWidth = document.querySelector(".main__blog-articles").offsetWidth;

  console.log(blogRange);

  blogRange.addEventListener("input", () => {
    const screenWidth = document.body.clientWidth;
    const rangeValue = blogRange.value;
    const mainBlogArticles = document.querySelector(".main__blog-articles");
    const offset = Math.floor(
      (rangeValue * (blogWidth - screenWidth + 50)) / 100
    );

    console.log(offset);

    mainBlogArticles.style.left = "-" + offset + "px";
  });
};

changeRange();
