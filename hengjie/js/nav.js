// 顶部导航
$('.nav-btn').on('click', function() {
    $('.nav').toggleClass('active')

})

// 导航的二级下拉菜单
$('.nav-menu').on('click', function() {
    // console.log($(this).next());
    $(this).next().slideToggle();

})

// 侧边栏导航

$('.side-nav').on('click', function() {
    $(this).toggleClass('active')
})