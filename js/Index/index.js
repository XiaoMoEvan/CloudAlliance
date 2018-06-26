$(function() {
    //var index = layer.load(2, { shade: false }); //0代表加载的风格，支持0-2
    var _fullpageOption = {
        loopBottom: true,
        keyboardScrolling: false,
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
        menu: '#cloud-nav-menu'
    };
    $('#cloud-container').fullpage(_fullpageOption); //初始化 fullPage
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
                    href: 'http://weibo.com/tzxiaomo56',
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

    // $(".navLink").click(function(e) {
    //     //e.preventDefault(); //阻止了表单提交 会影响fullpage绑定菜单
    //     $(this).parent().addClass("active").siblings().removeClass("active");
    // })

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
    })
    $("#cloud-nav-menu").mouseleave(function() {
        resetNavBLinePostion(this);
    })

    function resetNavBLinePostion(ele) {
        var $navBLine = $(".nav-bottom-line");
        $navBLine.hide();

        //1.获取当前激活的位置     
        var _activePostion = $(".active").index();
        var _toLeft = 0;
        for (var i = 0; i < _activePostion; i++) {
            _toLeft += $(ele).find("li").eq(i).width();
        }
        //2.重置线的位置
        $navBLine.css({
            "left": _toLeft
        });
    }

    function restIndexArea() {
        var _$indexArea = $(".indexArea");
        var _marginTopH = Number((312 / 2) - (_$indexArea.height() / 2));
        _$indexArea.css({
            "margin-top": _marginTopH + "px"
        })
    }

    function navLinkLineInit() {
        var $navLink = $(".head-nav").find(".navLink").eq(0);
        var $navBLine = $(".nav-bottom-line");
        var _w = $navLink.width();
        //$navLink.addClass("navActive");
        //$navBLine.width(_w);
        //$navBLine.removeClass("cloud-displayNone");
    }
    window.onload = function() {
        navLinkLineInit();
        //restIndexArea();
        $(".indexArea").removeClass("cloud-displayNone");
        resetNavBLinePostion($("#cloud-nav-menu"));

    }
    window.resize = function() {
        //restIndexArea();
    }
})