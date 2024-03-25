if ($("#back-to-top").length) {
    var scrollTrigger = 100,
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $("#back-to-top").addClass("show");
            } else {
                $("#back-to-top").removeClass("show");
            }
        };
    backToTop();
    $(window).on("scroll", function () {
        backToTop();
    });
    $("#back-to-top").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate({ scrollTop: 0 }, 300);
    });
}
function load_livechat(lang) {
    var chatLang = "";
    var skill = "English";
    var getSubDomain = function (host) {
        if (host.indexOf("gp2") > -1 && (host.indexOf(".com") > -1 || host.indexOf(".net") > -1)) return "getlock";
        return "www";
    };
    switch (lang) {
        case "id-id":
            chatLang = "Bahasa";
            skill = "Bahasa";
            break;
        case "ja-jp":
            chatLang = "Japanese";
            skill = "Japanese";
            break;
        case "km-kh":
            chatLang = "Khmer";
            skill = "Khmer";
            break;
        case "ko-kr":
            chatLang = "Korean";
            skill = "Korean";
            break;
        case "th-th":
            chatLang = "Thailand";
            skill = "Thailand";
            break;
        case "vi-vn":
            chatLang = "Vietnamese";
            skill = "Vietnamese";
            break;
        case "zh-cn":
            chatLang = "Chinese";
            skill = "Chinese";
            break;
        default:
            chatLang = "English";
            break;
    }
    if (false) {
        window.open(
            "https://server.iad.liveperson.net/hc/88942816/?cmd=file&file=visitorWantsToChat&site=88942816&SV!skill=" +
                skill +
                "&leInsId=88942816527642465&skId=1&leEngId=88942816_29aeab82-a5fc-4de7-b801-c6a87c638106&leEngTypeId=8&leEngName=LiveHelp_default&leRepAvState=3&referrer=" +
                escape(document.location.href.replace("w88help.com", "w88help.com")) +
                "&SESSIONVAR!visitor_profile=" +
                chatLang,
            "livechat",
            "width=500,height=400,scrollbars=no,location=1,left=" + (screen.availWidth - 500) + ",top=0"
        );
    } else {
        var domain = "https://www.w88live.com";
        var host = location.host;
        var protocol = location.protocol;
        var hosts = host.split(".");
        if (!hosts || (hosts && hosts.length < 3))
            return window.open(
                domain + "/common/livechat.ashx?id=guest&platform=w88help&lang=" + lang + "&url=" + encodeURIComponent(window.location),
                "livechat",
                "width=500,height=400,scrollbars=no,location=1,left=" + (screen.availWidth - 500) + ",top=0"
            );
        if (hosts && hosts.length > 2) host = hosts.slice(1, 3).join(".");
        domain = protocol + "//" + getSubDomain(host) + "." + host;

        if(host == "secure2cast.net"){
        domain = protocol + '//getlock.gp2fun.net'
        }
        
        window.open(
            domain + "/common/livechat.ashx?id=guest&platform=w88help&lang=" + lang + "&url=" + encodeURIComponent(window.location),
            "livechat",
            "width=500,height=400,scrollbars=no,location=1,left=" + (screen.availWidth - 500) + ",top=0"
        );
    }
}
$(function () {
    $(window).on("hashchange", function () {
        if (location.hash) {
            $(location.hash).collapse("show");
            window.scrollTo(0, $(location.hash).position().top);
        }
    });
    $(window).trigger("hashchange");
});


(function(){
    var url = window.location.hostname;
    var link = document.getElementById("dynamicUrl");
    var lang = document.getElementById("dynamicUrl").getAttribute("lang");

    link.setAttribute("href", "https://rewards."+ url.toString() + "/FAQ/default.aspx?language="+lang);
})();