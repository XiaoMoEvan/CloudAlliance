$(function() {
    //var index = layer.load(2, { shade: false }); //0代表加载的风格，支持0-2

    //$('#app').fullpage(); //初始化 fullPage
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init(); //初始化wowjs

    $(".enterIndex").click(function(e) {
        e.preventDefault();
        //示范一个公告层
        layer.open({
            type: 1,
            title: false, //不显示标题栏
            closeBtn: false,
            area: '300px;',
            shade: 0.8,
            id: 'LAY_layuipro', //设定一个id，防止重复弹出
            resize: false,
            btn: ['火速关注', '残忍拒绝'],
            btnAlign: 'c',
            moveType: 0, //拖拽模式，0或者1
            content: '<div style="text-align:center;padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;"> 官网正在开发当中<br/>敬请期待哦<hr/>不如先去关注一下微博吧</div>',
            success: function(layero) {
                var btn = layero.find('.layui-layer-btn');
                btn.find('.layui-layer-btn0').attr({
                    href: 'http://www.925i.cn',
                    target: '_blank'
                });
            }
        });
    })

    $(".openLayer").click(function(e) {
        e.preventDefault();
        layer.open({ //layer独立弹窗
            type: 1,
            offset: 'rb', //具体配置参考：offset参数项
            content: '<div style="padding: 20px 60px;">Wellcome to Cloud-Alliance</div>',
            btn: '关闭',
            btnAlign: 'c', //按钮居中
            shade: 0, //不显示遮罩                        
            yes: function() {
                layer.closeAll();
            }
        });
    })

    $(".navLink").click(function(e) {
        e.preventDefault();
        $(this).addClass("navActive").parent().siblings().find("a").removeClass("navActive");
    })

    $(".navLink").hover(function(e) {
        e.preventDefault();
        var $navBLine = $(".nav-bottom-line");
        $navBLine.show();
        var $prv = $(this).parent().prev();
        var _index = $(this).parent().index();
        $navBLine.css({
            "width": $(this).width(),
            "left": $prv.length == 0 ? 0 : $prv.width() * _index
        })
    }, function() {
        var $navBLine = $(".nav-bottom-line");
        $navBLine.hide();
    })

    function navLinkLineInit() {
        var $navLink = $(".head-nav").find(".navLink").eq(0);
        var _w = $navLink.width();
        $navLink.addClass("navActive");
        $(".nav-bottom-line").width(_w);
    }
    navLinkLineInit();
})