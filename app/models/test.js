




headers = { 
  'api-key': api_key, 
  'Content-Type': 'application/json' 
} 

body = { 
  sender: { 
    email: ENV['SENDINBLUE_USERNAME'] 
  }, 
  to: [ 
    { 
      email: to 
    } 
  ], 
  subject: 'HC_External_Email', 
  htmlContent: "<p>id:#{ID}</p>" 
}.to_json

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<!-- Copyright (c) 2006 Microsoft Corporation.  All rights reserved. -->
<!-- OwaPage = ASP.forms_basic_basicmessageview_aspx -->


<html>

<head>

<meta http-equiv="Content-Type" content="text/html; CHARSET=utf-8">

<title>Inbox - Outlook</title>

<link type="text/css" rel="stylesheet" href="15.2.397.3/themes/basic/basic.css">

<link type="text/css" rel="stylesheet" href="15.2.397.3/themes/basic/basic_owafont.css">

<script type="text/javascript" src="forms/basic/BasicClientStrings.aspx?v=15.2.397.3&l=en-US"></script><script>function _htmlDec(s){var o=document.createElement("DIV");o.innerHTML=s;return o.innerText||o.textContent;}function chkEn(){var s1 = "你好A";
if(_htmlDec("&#20320;&#22909;&#65;")!=s1){alert(_htmlDec("&#79;&#117;&#116;&#108;&#111;&#111;&#107;&#32;&#114;&#101;&#113;&#117;&#105;&#114;&#101;&#115;&#32;&#121;&#111;&#117;&#114;&#32;&#98;&#114;&#111;&#119;&#115;&#101;&#114;&#32;&#116;&#111;&#32;&#117;&#115;&#101;&#32;&#85;&#84;&#70;&#45;&#56;&#32;&#101;&#110;&#99;&#111;&#100;&#105;&#110;&#103;&#46;&#32;&#70;&#111;&#114;&#32;&#121;&#111;&#117;&#114;&#32;&#112;&#114;&#111;&#116;&#101;&#99;&#116;&#105;&#111;&#110;&#44;&#32;&#121;&#111;&#117;&#39;&#108;&#108;&#32;&#98;&#101;&#32;&#115;&#105;&#103;&#110;&#101;&#100;&#32;&#111;&#117;&#116;&#46;&#32;&#80;&#108;&#101;&#97;&#115;&#101;&#32;&#115;&#101;&#116;&#32;&#121;&#111;&#117;&#114;&#32;&#98;&#114;&#111;&#119;&#115;&#101;&#114;&#32;&#101;&#110;&#99;&#111;&#100;&#105;&#110;&#103;&#32;&#116;&#111;&#32;&#85;&#84;&#70;&#45;&#56;&#32;&#97;&#110;&#100;&#32;&#115;&#105;&#103;&#110;&#32;&#105;&#110;&#32;&#97;&#103;&#97;&#105;&#110;&#46;"));try{window.top.document.location="\/owa\/logoff.owa?canary=8nKLeJpBpkmvq6dkFD_Ai3_Z5_S2MdsIzPxTBCfKhXeY5XrL6fMam7jtwulkg9y63ouNrlBZS3o.&X-OWA-CANARY=lXQFhRVJa0ysnHaEQxRVyfBPZMrtMNsIhixb0aX1fpMYYNd5W4YABKN9S417ea7bc-T6ONTDNNQ.";}catch(e){}}}chkEn();</script>

<script type="text/javascript" src="15.2.397.3/scripts/basic/cmn.js"></script>

<script type="text/javascript" src="15.2.397.3/scripts/basic/msglst.js"></script>

<script type="text/javascript">

<!--

    var a_sAe = "StartPage";

    var a_sT = "";

    var a_sFldId = "LgAAAABZKjP%2boeYsTI96YpF0is%2beAQBTP54%2bAt2NRpDvwkMzO2AHAAAAAAEMAAAB";

    var a_iIsDlFld = 0;

    var a_iIsDrftFld = 0;

    var a_fIsJnkFld = 0;

    var a_sPg = "1";

	var a_sEmptyMsg = "Are you sure you want to move all items in this folder to the Deleted Items folder?";

    var a_iNM = 0;

    var a_fWP = 0;

    var a_iSlUsng = 0;

    var a_fIsSch = 0;



	var a_fShOofDlg = 0;



-->

</script>

     <style>

        .ie9banner {

            position: absolute;

            bottom: 15px;

            z-index: 3000;

            background-color: #ffc;

            width: 90%;

            margin-left: 5%;

            border-width: 1px;

            border-style: solid;

            border-radius: 10px;

            box-shadow: 0 1px 1px rgba(0,0,0,0.16), 0 1px 1px rgba(0,0,0,0.23);

            display: none;

        }



        .ie9content {

            padding: 15px 15px 15px 15px;

            font-size: 14px;

            display: table-cell;

        }



        .floatLeft {

            float:left;

        }



        .floatRight {

            float:right;

        }



		.floatRight a

		{

			text-decoration:none;

			color:black

		}

              

    </style>

</head>

<body>

<script>chkClickJack();</script>

<form id="frm" method="post">

<noscript><div id="divIB"><div id=dvErr><table cellpadding="0" cellspacing="0"><tr><td valign="top" rowspan="1"><img src="15.2.397.3/themes/basic/warn.png" alt=""></td><td class="w100"><div class="w100"><h1>To use Outlook, browser settings must allow scripts to run. For information about how to allow scripts, consult the Help for your browser. If your browser doesn&#39;t support scripts, you can download <a href="https://go.microsoft.com/fwlink/?linkid=2009667&clcid=0x409">Windows Internet Explorer</a> for access to Outlook.</h1></div></td></tr></table></div></div></noscript>

<table class="mnTbl" cellspacing=0 cellpadding=0>

<tr>

	<td colspan=2><img src="15.2.397.3/themes/basic/logob.png" id="imgLogo" title="" alt="">	</td>

	<td><table cellpadding=0 cellspacing=0><tr><td class="w100"><table id="tblSch" cellspacing=0 cellpadding=0><caption>Search</caption><tr><td><input type="text" id="txtSch" value="Type here to search" class="noSch" title="Search" onKeyPress="return onEOSch(event);" onFocus="onFOSch(this);" maxlength=256></td><td><select id="selSch" onKeyPress="return onEOSch(event);"><option value="?ae=Folder&t=IPF.Note&newSch=1&scp=0&id=LgAAAABZKjP%2boeYsTI96YpF0is%2beAQBTP54%2bAt2NRpDvwkMzO2AHAAAAAAEMAAAB&slUsng=0">This Folder</option><option value="?ae=Folder&t=IPF.Note&newSch=1&scp=3&id=LgAAAABZKjP%2boeYsTI96YpF0is%2beAQBTP54%2bAt2NRpDvwkMzO2AHAAAAAAEMAAAB&slUsng=0" selected>Entire Mailbox</option><option value="?ae=Dialog&t=AddressBook&ab=&ctx=1" class="cb">Address Book</option><option value="?ae=Folder&t=IPF.Contact&newSch=1&scp=1" class="cb">Contacts</option></select></td><td><a id="schBtn" href="#" onClick="return onClkSch();" title="Search"><img src="15.2.397.3/themes/basic/bsearch.gif" alt="Search"></a></tr></table></td><td><table class="ob" cellpadding=0 cellspacing=0><caption>Settings, Address Book, and Help</caption><tr><td nowrap><div class="sch"><a class="btn" onClick="return onClkAB();" href="?ae=Dialog&t=AddressBook&ctx=1" title="Address Book"><img src="15.2.397.3/themes/basic/addrbook.png" alt="Address Book"></a></div></td><td class="dv"><img src="15.2.397.3/themes/basic/obdv.gif" alt=""></td><td nowrap><td nowrap><div class="sch"><a class="btn" onClick="return onClkOp();" href="?ae=Options&t=Messaging" title="Options"><img src="15.2.397.3/themes/basic/options.gif" alt="">Options</a></div></td><td class="dv"><img src="15.2.397.3/themes/basic/obdv.gif" alt=""></td><td nowrap><div class="sch"><a id="hlp" class="btn" href="#" onClick="opnHlp('http:\/\/o15.officeredir.microsoft.com\/r\/rlidOfficeWebHelp?p1=OLWALIGHT&clid=1033&ver=15&v=15.2.397.3&mode=Desktop&helpid=ms.exch.owal.MailLight')" title="Help"><img src="15.2.397.3/themes/basic/help.png" alt="Help"></a></div></td><td class="dv"><img src="15.2.397.3/themes/basic/obdv.gif" alt=""></td><td nowrap><div class="sch"><a id="lo" class="btn" href="#" onClick="return onClkLgf('8nKLeJpBpkmvq6dkFD_Ai3_Z5_S2MdsIzPxTBCfKhXeY5XrL6fMam7jtwulkg9y63ouNrlBZS3o.');" title="Sign out"><img class="noSrc" src="15.2.397.3/themes/basic/clear.gif" alt="">Sign out</a></div></td></tr></table></td></tr></table></td>

</tr>

<tr>

	<td class="nvtp">

		<table cellspacing=0 cellpadding=0 class="nvwh100">

			<tr>

				<td><table cellspacing=0 cellpadding=0 class="pnt"><caption>Navigation</caption><tr><td class="ml" nowrap><img src="15.2.397.3/themes/basic/crvtplt.gif" class="crv" alt=""><a href="#" id="lnkNavMail" onclick="return onClkPN(0);" title="Mail" class="pn tp s db"><img class="tpNoSrc" src="15.2.397.3/themes/basic/clear.gif" alt=""><img src="15.2.397.3/themes/basic/eml.png" alt="">&nbsp;Mail</a></td></tr><tr><td nowrap><a href="#" id="lnkNavCal" onclick="return onClkPN(1);" title="Calendar" class="pn lb"><img class="crvNoSrc" src="15.2.397.3/themes/basic/clear.gif" alt=""><img src="15.2.397.3/themes/basic/clndr.png" alt="">&nbsp;Calendar</a></td></tr><tr><td nowrap><a href="#"  id="lnkNavContact" onclick="return onClkPN(2);" title="Contacts" class="pn "><img class="crvNoSrc" src="15.2.397.3/themes/basic/clear.gif" alt=""><img src="15.2.397.3/themes/basic/cntct.png" alt="">&nbsp;Contacts</a></td></tr><tr><td class="rsz" align="center"><img class="nvImg" src="15.2.397.3/themes/basic/clear.gif" alt=""><a href="#" id="lnkNavResz" onClick="return onClkPNTgl(0);" title=""><img src="15.2.397.3/themes/basic/pnrsz.gif"  alt="Collapse Navigation Pane"></a></td></tr></table><input type="hidden" name="hidpnst" value=""></td>

			</tr>

			<tr>

				<td class="h100"><table cellpadding=0 cellspacing=0 class="wh100"><caption>Content Area Control</caption><tr><td><table cellspacing=0 cellpadding=0 class="snt"><tr><td nowrap class="fld"><a name="lnkFldr" href="?ae=Folder&t=IPF.Note&id=LgAAAABZKjP%2boeYsTI96YpF0is%2beAQBTP54%2bAt2NRpDvwkMzO2AHAAAAAAEKAAAB&slUsng=0" title="Deleted Items"><img src="15.2.397.3/themes/basic/bdeleted.gif" alt="">Deleted Items </a></td></tr><tr><td nowrap class="fld bld"><a name="lnkFldr" href="?ae=Folder&t=IPF.Note&id=LgAAAABZKjP%2boeYsTI96YpF0is%2beAQBTP54%2bAt2NRpDvwkMzO2AHAAAAAAEPAAAB&slUsng=0" title="Drafts"><img src="15.2.397.3/themes/basic/drafts.png" alt="">Drafts </a><span class="itm">[1]</span></td></tr><tr><td nowrap class="fld sl bld"><a name="lnkFldr" href="?ae=Folder&t=IPF.Note&id=LgAAAABZKjP%2boeYsTI96YpF0is%2beAQBTP54%2bAt2NRpDvwkMzO2AHAAAAAAEMAAAB&slUsng=0" title="Inbox"><img src="15.2.397.3/themes/basic/inbox.png" alt="">Inbox </a><span class="unrd">(40)</span></td></tr><tr><td nowrap class="fld"><a name="lnkFldr" href="?ae=Folder&t=IPF.Note&id=LgAAAABZKjP%2boeYsTI96YpF0is%2beAQBTP54%2bAt2NRpDvwkMzO2AHAAAAAAEiAAAB&slUsng=0" title="Junk Email"><img src="15.2.397.3/themes/basic/junkemail.gif" alt="">Junk Email </a></td></tr><tr><td nowrap class="fld"><a name="lnkFldr" href="?ae=Folder&t=IPF.Note&id=LgAAAABZKjP%2boeYsTI96YpF0is%2beAQBTP54%2bAt2NRpDvwkMzO2AHAAAAAAEJAAAB&slUsng=0" title="Sent Items"><img src="15.2.397.3/themes/basic/sentitems.png" alt="">Sent Items </a></td></tr></table><table cellspacing=0 cellpadding=0 class="brwst"><tr><td align="center" nowrap><a class="lnk" id="lnkBrwsAllFldrs" href="#" onClick="return onClkBrwsFld();">Click to view all folders<img src="15.2.397.3/themes/basic/expnd.gif" alt=""></a></td></tr></table><input type="hidden" name="hidactbrfld" value=""><table cellspacing=0 cellpadding=0 class="snfmb"><tr><td nowrap><a href="#" id="lnkMngFldr" onClick="return onClkFM()"><img src="15.2.397.3/themes/basic/root.png" alt="">Manage Folders...</a></td></tr></table></td></tr></table></td>

			</tr>

		</table>

	</td>

	<td class="spc" rowspan=2><img width="2" height="2" 

		src="15.2.397.3/themes/basic/clear.gif" alt=""></td>

	<td class="cntnttp">

		<table cellspacing=0 cellpadding=0 class="cntntwh100">

			<tr>

				<td><table class="tbhd" cellpadding=0 cellspacing=0><caption>Toolbar</caption><tr><td nowrap><a href="#" onClick="return onClkTb('newmsg');" class="btn" title="New Message" id="lnkHdrnewmsg"><img src="15.2.397.3/themes/basic/newemail.png" alt=""> New Message</a></td><td class="dv"><img src="15.2.397.3/themes/basic/tbdv.gif" alt=""></td><td nowrap><a href="#" onClick="return onClkTb('move');" class="btn" title="Move" id="lnkHdrmove"><img src="15.2.397.3/themes/basic/move.gif" alt=""> Move</a></td><td>&nbsp;</td><td nowrap><a href="#" onClick="return onClkTb('delete');" class="btn" title="Delete" id="lnkHdrdelete"><img src="15.2.397.3/themes/basic/delete.png" alt=""> Delete</a></td><td>&nbsp;</td><td class="dv"><img src="15.2.397.3/themes/basic/tbdv.gif" alt=""></td><td nowrap><a href="#" onClick="return onClkTb('markread');" class="btn" title="Mark as Read" id="lnkHdrmarkread"><img src="15.2.397.3/themes/basic/msg-rd.png" alt="Mark as Read"></a></td><td>&nbsp;</td><td nowrap><a href="#" onClick="return onClkTb('markunread');" class="btn" title="Mark as Unread" id="lnkHdrmarkunread"><img src="15.2.397.3/themes/basic/msg-unrd.png" alt="Mark as Unread"></a></td><td class="dv"><img src="15.2.397.3/themes/basic/tbdv.gif" alt=""></td><td nowrap><a href="#" onClick="return onClkTb('checkmessages');" class="btn" title="Check Messages" id="lnkHdrcheckmessages"><img src="15.2.397.3/themes/basic/sr.png" alt="Check Messages"></a></td><td class="w100">&nbsp;</td><td class="pImg"><img border="0" src="15.2.397.3/themes/resources/fpg.gif" title="First Page" alt=""></td><td class="pImg"><img border="0" src="15.2.397.3/themes/resources/ppg.gif" title="Previous Page" alt=""></td><td class="pImg"><a href="#" id="lnkNxtPgHdr" onClick="return onClkPg('2');"><img border="0" src="15.2.397.3/themes/resources/np.gif" title="Next Page" alt="Next Page"></a></td><td class="pImg"><a href="#" id="lnkLstPgHdr" onClick="return onClkPg('3');"><img border="0" src="15.2.397.3/themes/resources/lp.gif" title="Last Page" alt="Last Page"></a></td><td align="right" class="crvTp"><img src="15.2.397.3/themes/basic/crvtprt.gif" alt=""></td></tr></table></td>

			</tr>

			

			<tr>

				<td class="h100">

					<div class="cntnt">

						<table class="lvw" cellpadding=0 cellspacing=0><caption>Content Area</caption><tr><th align="center" class="chd lt" style="width:15;" 
            nowrap><a href="#" id="lnkColImportance" onClick="return onClkSrt('6','1');" title=""><img src="15.2.397.3/themes/basic/ih.gif" class="ih" 
            alt="Sort by Importance">&nbsp;</a></th><th align="center" class="chd" style="width:20;" nowrap><a href="#" id="lnkColMailIcon" onClick="return 
            onClkSrt('0','0');" title=""><img src="15.2.397.3/themes/basic/email.png" class="eml" alt="Sort by Message Type">&nbsp;</a></th><th align="center" 
            class="chd" style="width:16;" nowrap><a href="#" id="lnkColHasAttachment" onClick="return onClkSrt('5','1');" title=""><img src="15.2.397.3/themes/basic/attch.png" 
            class="attch" alt="Sort by Attachments">&nbsp;</a></th><th align="center" class="chd" style="width:20;" nowrap><input type="checkbox" name="chkhd" onClick="onClkSlAll();" 
            title="Select All Items">&nbsp;</th><th align="left" class="chd" style="width:26.5%;" nowrap><a href="#" id="lnkColFrom" onClick="return onClkSrt('1','0');" 
            title="Sort by From">From&nbsp;</a></th><th align="left" class="chd" style="width:64.7%;" nowrap><a href="#" id="lnkColSubject" onClick="return onClkSrt('3','0');" 
            title="Sort by Subject">Subject&nbsp;</a></th><th align="left" class="shd" style="width:90;" nowrap><a href="#" id="lnkColDeliveryTime" onClick="return onClkSrt('7','0');" 
            title="Sort by Received">Received&nbsp;&nbsp;&nbsp;&nbsp;<img class="srt" src="15.2.397.3/themes/basic/bsd.gif" alt="Descending">&nbsp;&nbsp;</a></th><th align="right" 
            class="chd rt" style="width:8.800003%;" nowrap><a href="#" id="lnkColSize" onClick="return onClkSrt('9','1');" title="Sort by Size">Size&nbsp;</a></th></tr><tr><td class="ohdv" 
            colspan=8>
            <table cellspacing=0 cellpadding=0 class="hdvt"><tr><td class="ihdv"><img src="15.2.397.3/themes/basic/clear.gif" 
            alt=""></td></tr></table></td></tr>
            <tr style="font-weight:bold;"><td nowrap align="center" class="frst">&nbsp;</td><td nowrap align="center" 
            class="frst"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center" class="frst">&nbsp;</td><td nowrap align="center" 
            class="frst"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQSAAAJ" 
            title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td>
            <td nowrap class="frst">hcpowertrain@gma...&nbsp;</td><td nowrap class="frst">
            <h1 class="bld">
            <a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 0, 0);">hc_test3</a></h1>&nbsp;</td><td nowrap class="sc frst">3/30/2023&nbsp;12:09 PM&nbsp;</td><td nowrap 
            align="right" class="frst">62 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td><td nowrap align="center">
            <img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" 
            name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQRAAAJ" 
            title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1 class="bld"><a href="#" 
            onClick="onClkRdMsg(this, 'IPM.Note', 1, 0);">hc_test3</a></h1>&nbsp;</td><td nowrap class="sc">3/30/2023&nbsp;11:29 AM&nbsp;</td><td 
            nowrap align="right">62 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td><td nowrap align="center">
            <img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" 
            name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQQAAAJ" title="Select Item" 
            onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1 class="bld"><a href="#" 
            onClick="onClkRdMsg(this, 'IPM.Note', 2, 0);">hc_test3</a></h1>&nbsp;</td><td nowrap class="sc">3/30/2023&nbsp;11:21 AM&nbsp;
            </td><td nowrap align="right">62 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;
            </td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">
            &nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQPAAAJ" 
            title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1 class="bld"><a href="#" 
            onClick="onClkRdMsg(this, 'IPM.Note', 3, 0);">hc_test3</a></h1>&nbsp;</td><td nowrap class="sc">3/30/2023&nbsp;11:16 AM&nbsp;</td>
            <td nowrap align="right">62 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td><td nowrap align="center">
            <img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" 
            name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQOAAAJ" title="Select Item" 
            onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg
            (this, 'IPM.Note', 4, 0);">hc_test3</a></h1>&nbsp;</td><td nowrap class="sc">3/30/2023&nbsp;12:48 AM&nbsp;</td><td nowrap align="right">62 KB&nbsp;
            </td></tr><tr><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-rd.png" >&nbsp;</td><td nowrap align="center">
            &nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQNAAAJ"
             title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 5, 0);">
             [BULK] hc_test3</a></h1>&nbsp;</td><td nowrap class="sc">3/30/2023&nbsp;12:46 AM&nbsp;</td><td nowrap align="right">62 KB&nbsp;</td></tr><tr><td nowrap align="center">
             &nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-rd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center">
             <input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQMAAAJ" title="Select Item" 
             onclick="onClkChkBx(this);">&nbsp;</td>
             <td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 6, 0);">hc_test3</a></h1>&nbsp;</td>
             <td nowrap class="sc">3/29/2023&nbsp;8:02 AM&nbsp;</td><td nowrap align="right">62 KB&nbsp;</td></tr><tr><td nowrap align="center">&nbsp;</td>
             <td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-rd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td>
             <td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQLAAAJ" 
             title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td>
             <td nowrap><h1><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 7, 0);">hc_test3</a></h1>&nbsp;</td><td nowrap class="sc">3/28/2023&nbsp;3:34 PM&nbsp;</td>
             <td nowrap align="right">61 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td>
             <td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td>
             <td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQKAAAJ"
             title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td>
             <td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 8, 0);">hc_test2</a></h1>&nbsp;</td>
             <td nowrap class="sc">3/28/2023&nbsp;3:10 PM&nbsp;</td><td nowrap align="right">61 KB&nbsp;</td></tr><tr style="font-weight:bold;">
             <td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td>
             <td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQJAAAJ" 
             title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td>
             <td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 9, 0);">hc_test</a></h1>&nbsp;</td>
             <td nowrap class="sc">3/28/2023&nbsp;2:59 PM&nbsp;</td><td nowrap align="right">61 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td>
             <td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td>
             <td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQIAAAJ" 
             title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td>
             <td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 10, 0);">5</a></h1>&nbsp;</td>
             <td nowrap class="sc">3/28/2023&nbsp;2:57 PM&nbsp;</td><td nowrap align="right">62 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td>
             <td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td>
             <td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQHAAAJ" 
             title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td>
             <td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 11, 0);">&lt;p&gt;5&lt;/p&gt;</a></h1>&nbsp;</td>
             <td nowrap class="sc">3/28/2023&nbsp;2:57 PM&nbsp;</td>
             <td nowrap align="right">61 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td>
             <td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td>
             <td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQGAAAJ" 
             title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td>
             <td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 12, 0);">test</a></h1>&nbsp;</td>
             <td nowrap class="sc">3/28/2023&nbsp;2:57 PM&nbsp;</td><td nowrap align="right">62 KB&nbsp;</td></tr><tr style="font-weight:bold;">
             <td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td>
             <td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQFAAAJ"
             title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td>
             <td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 13, 0);">hc_test</a></h1>&nbsp;</td>
             <td nowrap class="sc">3/28/2023&nbsp;2:57 PM&nbsp;</td><td nowrap align="right">61 KB&nbsp;</td></tr><tr style="font-weight:bold;">
             <td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td>
             <td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQEAAAJ" 
             title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td>
             <td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 14, 0);">405073</a></h1>&nbsp;</td>
             <td nowrap class="sc">3/28/2023&nbsp;2:39 PM&nbsp;</td><td nowrap align="right">61 KB&nbsp;</td></tr><tr><td nowrap align="center">&nbsp;</td>
             <td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-rd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td>
             <td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQDAAAJ" 
             title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td>
             <td nowrap><h1><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 15, 0);">630083</a></h1>&nbsp;</td>
             <td nowrap class="sc">3/28/2023&nbsp;2:14 PM&nbsp;</td><td nowrap align="right">61 KB&nbsp;</td></tr><tr>
             <td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-rd.png" >&nbsp;</td>
             <td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQCAAAJ" 
             title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td>
             <td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 16, 0);">2023-03-28 14:04:47 +0500</a></h1>&nbsp;</td><td nowrap class="sc">3/28/2023&nbsp;2:04 PM&nbsp;</td>
             <td nowrap align="right">62 KB&nbsp;</td></tr><tr><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-rd.png" >&nbsp;</td>
             <td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQBAAAJ" 
             title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td>
             <td nowrap><h1><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 17, 0);">2023-03-28 13:01:24 +0500</a></h1>&nbsp;</td><td nowrap class="sc">3/28/2023&nbsp;1:01 PM&nbsp;</td>
             <td nowrap align="right">62 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td>
             <td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td>
             <td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQAAAAJ" 
             title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td>
             <td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 18, 0);">2023-03-28 12:58:53 +0500</a></h1>&nbsp;</td><td nowrap class="sc">3/28/2023&nbsp;12:59 PM&nbsp;</td>
             <td nowrap align="right">62 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td>
             <td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td>
             <td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbP/AAAJ" 
             title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td>
             <td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 19, 0);">2023-03-28 12:53:06 +0500</a></h1>&nbsp;</td>
             <td nowrap class="sc">3/28/2023&nbsp;12:53 PM&nbsp;</td><td nowrap align="right">62 KB&nbsp;</td></tr></table>

					</div>

				</td>

			</tr>

		</table>

	</td>

</tr>

<tr>

	<td class="nvft">

		<table cellspacing=0 cellpadding=0 class="hdvt"><tr><td class="ihdv"><img src="15.2.397.3/themes/basic/clear.gif" alt=""></td></tr></table><table cellspacing=0 cellpadding=0 class="qbt"><tr><td colspan=2 class="txt">&nbsp;</td></tr><tr><td class="crv"><img src="15.2.397.3/themes/basic/crvbtmlt.gif" alt=""></td><td class="btm"><img src="15.2.397.3/themes/basic/clear.gif" alt=""></td></tr></table>

	</td>

	<td valign="bottom">

		<table cellspacing=0 cellpadding=0 class="hdvt"><tr><td class="ihdv"><img src="15.2.397.3/themes/basic/clear.gif" alt=""></td></tr></table><table class="tbft" cellpadding=0 cellspacing=0><caption>Paging and Bottom Toolbar</caption><tr><td nowrap><a href="#" onClick="return onClkTb('move');" class="btn" title="Move" id="lnkFtrmove"><img src="15.2.397.3/themes/basic/move.gif" alt=""> Move</a></td><td>&nbsp;</td><td nowrap><a href="#" onClick="return onClkTb('delete');" class="btn" title="Delete" id="lnkFtrdelete"><img src="15.2.397.3/themes/basic/delete.png" alt=""> Delete</a></td><td class="w100">&nbsp;</td><td class="pl" nowrap>Page:</td><td class="pTxt">1</td><td class="pTxt"><a href="#" id="lnkPgNm2" onClick="return onClkPg('2');">2</a></td><td class="pTxt"><a href="#" id="lnkPgNm3" onClick="return onClkPg('3');">3</a></td><td>&nbsp;</td><td class="pImg"><img border="0" src="15.2.397.3/themes/resources/fpg.gif" title="First Page" alt=""></td><td class="pImg"><img border="0" src="15.2.397.3/themes/resources/ppg.gif" title="Previous Page" alt=""></td><td class="pImg"><a href="#" id="lnkNxtPg" onClick="return onClkPg('2');"><img border="0" src="15.2.397.3/themes/resources/np.gif" title="Next Page" alt="Next Page"></a></td><td class="pImg"><a href="#" id="lnkLstPg" onClick="return onClkPg('3');"><img border="0" src="15.2.397.3/themes/resources/lp.gif" title="Last Page" alt="Last Page"></a></td><td align="right" class="crvBtm"><img src="15.2.397.3/themes/basic/crvbtmrt.gif" alt=""></td></tr></table>

	</td>

</tr>

<tr>

	<td colspan=3 align="right" class="tdLogoB">Connected to Microsoft Exchange</td>

</tr>

</table>

<input type="hidden" name="hidcmdpst" value="">

<input type="hidden" name="hidcid" value="">

<input type="hidden" name="hidso" value="">

<input type=hidden name="hidpid" value="MessageView"><input type=hidden name="hidcanary" value="8nKLeJpBpkmvq6dkFD_Aiwo56fS2MdsIa1x72ZW7E6R2T1GhZWI2Cq3j5l8RS_IMW3JLWkKNSNI."><input type=hidden name="X-OWA-CANARY" value="lXQFhRVJa0ysnHaEQxRVyfBPZMrtMNsIhixb0aX1fpMYYNd5W4YABKN9S417ea7bc-T6ONTDNNQ.">

  <div id="EndOfLifeMessageDiv" class="ie9banner">

		    <div class="ie9content floatLeft">

            It looks like you may be using an unsupported browser. For the best Outlook experience on the web, the latest version of a modern browser is recommended. Please see <a href="https://products.office.com/en-US/office-system-requirements">System requirements for Office</a> for more details and a list of supported browsers.

            </div>

            <div class="ie9content floatRight">

			

				<a href="#" onclick="displayEndOfLifeMessageIE(false)">X</a>

			

            </div>

    </div>

</form>

</body>

</html>


Here is result from browser console: Email status: not_received; Emails: undefined; 
Page title: Inbox - Outlook;; Current URL: https://10.134.9.108/owa/#path=/mail/inbox. 
Must be parser was unable to find required row containing both 'hcpowertrain' and 'hc_test3' in the inbox page content. Here is complete inbox page content for your refrence:  

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<!-- Copyright (c) 2006 Microsoft Corporation.  All rights reserved. -->
<!-- OwaPage = ASP.forms_basic_basicmessageview_aspx -->


<html>

<head>

<meta http-equiv="Content-Type" content="text/html; CHARSET=utf-8">

<title>Inbox - Outlook</title>

<link type="text/css" rel="stylesheet" href="15.2.397.3/themes/basic/basic.css">

<link type="text/css" rel="stylesheet" href="15.2.397.3/themes/basic/basic_owafont.css">

<script type="text/javascript" src="forms/basic/BasicClientStrings.aspx?v=15.2.397.3&l=en-US"></script><script>function _htmlDec(s){var o=document.createElement("DIV");o.innerHTML=s;return o.innerText||o.textContent;}function chkEn(){var s1 = "你好A";
if(_htmlDec("&#20320;&#22909;&#65;")!=s1){alert(_htmlDec("&#79;&#117;&#116;&#108;&#111;&#111;&#107;&#32;&#114;&#101;&#113;&#117;&#105;&#114;&#101;&#115;&#32;&#121;&#111;&#117;&#114;&#32;&#98;&#114;&#111;&#119;&#115;&#101;&#114;&#32;&#116;&#111;&#32;&#117;&#115;&#101;&#32;&#85;&#84;&#70;&#45;&#56;&#32;&#101;&#110;&#99;&#111;&#100;&#105;&#110;&#103;&#46;&#32;&#70;&#111;&#114;&#32;&#121;&#111;&#117;&#114;&#32;&#112;&#114;&#111;&#116;&#101;&#99;&#116;&#105;&#111;&#110;&#44;&#32;&#121;&#111;&#117;&#39;&#108;&#108;&#32;&#98;&#101;&#32;&#115;&#105;&#103;&#110;&#101;&#100;&#32;&#111;&#117;&#116;&#46;&#32;&#80;&#108;&#101;&#97;&#115;&#101;&#32;&#115;&#101;&#116;&#32;&#121;&#111;&#117;&#114;&#32;&#98;&#114;&#111;&#119;&#115;&#101;&#114;&#32;&#101;&#110;&#99;&#111;&#100;&#105;&#110;&#103;&#32;&#116;&#111;&#32;&#85;&#84;&#70;&#45;&#56;&#32;&#97;&#110;&#100;&#32;&#115;&#105;&#103;&#110;&#32;&#105;&#110;&#32;&#97;&#103;&#97;&#105;&#110;&#46;"));try{window.top.document.location="\/owa\/logoff.owa?canary=I-Sy7047fEGKnS3S2fPs_1vuBRi-MdsIvft-cGBVF8QekehIdD_3kTB4z617-VLTRBSacqch-jQ.&X-OWA-CANARY=HFbRQAv0qke3WPOneSG55uCLgu30MNsI5MCTScfoILTsBswB-eRbwyz36Smp3dtT1cTMzqfWQQM.";}catch(e){}}}chkEn();</script>

<script type="text/javascript" src="15.2.397.3/scripts/basic/cmn.js"></script>

<script type="text/javascript" src="15.2.397.3/scripts/basic/msglst.js"></script>

<script type="text/javascript">

<!--

    var a_sAe = "StartPage";

    var a_sT = "";

    var a_sFldId = "LgAAAABZKjP%2boeYsTI96YpF0is%2beAQBTP54%2bAt2NRpDvwkMzO2AHAAAAAAEMAAAB";

    var a_iIsDlFld = 0;

    var a_iIsDrftFld = 0;

    var a_fIsJnkFld = 0;

    var a_sPg = "1";

	var a_sEmptyMsg = "Are you sure you want to move all items in this folder to the Deleted Items folder?";

    var a_iNM = 0;

    var a_fWP = 0;

    var a_iSlUsng = 0;

    var a_fIsSch = 0;



	var a_fShOofDlg = 0;



-->

</script>

     <style>

        .ie9banner {

            position: absolute;

            bottom: 15px;

            z-index: 3000;

            background-color: #ffc;

            width: 90%;

            margin-left: 5%;

            border-width: 1px;

            border-style: solid;

            border-radius: 10px;

            box-shadow: 0 1px 1px rgba(0,0,0,0.16), 0 1px 1px rgba(0,0,0,0.23);

            display: none;

        }



        .ie9content {

            padding: 15px 15px 15px 15px;

            font-size: 14px;

            display: table-cell;

        }



        .floatLeft {

            float:left;

        }



        .floatRight {

            float:right;

        }



		.floatRight a

		{

			text-decoration:none;

			color:black

		}

              

    </style>

</head>

<body>

<script>chkClickJack();</script>

<form id="frm" method="post">

<noscript><div id="divIB"><div id=dvErr><table cellpadding="0" cellspacing="0"><tr><td valign="top" rowspan="1"><img src="15.2.397.3/themes/basic/warn.png" alt=""></td><td class="w100"><div class="w100"><h1>To use Outlook, browser settings must allow scripts to run. For information about how to allow scripts, consult the Help for your browser. If your browser doesn&#39;t support scripts, you can download <a href="https://go.microsoft.com/fwlink/?linkid=2009667&clcid=0x409">Windows Internet Explorer</a> for access to Outlook.</h1></div></td></tr></table></div></div></noscript>

<table class="mnTbl" cellspacing=0 cellpadding=0>

<tr>

	<td colspan=2><img src="15.2.397.3/themes/basic/logob.png" id="imgLogo" title="" alt="">	</td>

	<td><table cellpadding=0 cellspacing=0><tr><td class="w100"><table id="tblSch" cellspacing=0 cellpadding=0><caption>Search</caption><tr><td><input type="text" id="txtSch" value="Type here to search" class="noSch" title="Search" onKeyPress="return onEOSch(event);" onFocus="onFOSch(this);" maxlength=256></td><td><select id="selSch" onKeyPress="return onEOSch(event);"><option value="?ae=Folder&t=IPF.Note&newSch=1&scp=0&id=LgAAAABZKjP%2boeYsTI96YpF0is%2beAQBTP54%2bAt2NRpDvwkMzO2AHAAAAAAEMAAAB&slUsng=0">This Folder</option><option value="?ae=Folder&t=IPF.Note&newSch=1&scp=3&id=LgAAAABZKjP%2boeYsTI96YpF0is%2beAQBTP54%2bAt2NRpDvwkMzO2AHAAAAAAEMAAAB&slUsng=0" selected>Entire Mailbox</option><option value="?ae=Dialog&t=AddressBook&ab=&ctx=1" class="cb">Address Book</option><option value="?ae=Folder&t=IPF.Contact&newSch=1&scp=1" class="cb">Contacts</option></select></td><td><a id="schBtn" href="#" onClick="return onClkSch();" title="Search"><img src="15.2.397.3/themes/basic/bsearch.gif" alt="Search"></a></tr></table></td><td><table class="ob" cellpadding=0 cellspacing=0><caption>Settings, Address Book, and Help</caption><tr><td nowrap><div class="sch"><a class="btn" onClick="return onClkAB();" href="?ae=Dialog&t=AddressBook&ctx=1" title="Address Book"><img src="15.2.397.3/themes/basic/addrbook.png" alt="Address Book"></a></div></td><td class="dv"><img src="15.2.397.3/themes/basic/obdv.gif" alt=""></td><td nowrap><td nowrap><div class="sch"><a class="btn" onClick="return onClkOp();" href="?ae=Options&t=Messaging" title="Options"><img src="15.2.397.3/themes/basic/options.gif" alt="">Options</a></div></td><td class="dv"><img src="15.2.397.3/themes/basic/obdv.gif" alt=""></td><td nowrap><div class="sch"><a id="hlp" class="btn" href="#" onClick="opnHlp('http:\/\/o15.officeredir.microsoft.com\/r\/rlidOfficeWebHelp?p1=OLWALIGHT&clid=1033&ver=15&v=15.2.397.3&mode=Desktop&helpid=ms.exch.owal.MailLight')" title="Help"><img src="15.2.397.3/themes/basic/help.png" alt="Help"></a></div></td><td class="dv"><img src="15.2.397.3/themes/basic/obdv.gif" alt=""></td><td nowrap><div class="sch"><a id="lo" class="btn" href="#" onClick="return onClkLgf('I-Sy7047fEGKnS3S2fPs_2EVBhi-MdsI9U4wG4MTS1rF87aYLE-PaeX4Xhn4mvQyrnCy5fjfZNA.');" title="Sign out"><img class="noSrc" src="15.2.397.3/themes/basic/clear.gif" alt="">Sign out</a></div></td></tr></table></td></tr></table></td>

</tr>

<tr>

	<td class="nvtp">

		<table cellspacing=0 cellpadding=0 class="nvwh100">

			<tr>

				<td><table cellspacing=0 cellpadding=0 class="pnt"><caption>Navigation</caption><tr><td class="ml" nowrap><img src="15.2.397.3/themes/basic/crvtplt.gif" class="crv" alt=""><a href="#" id="lnkNavMail" onclick="return onClkPN(0);" title="Mail" class="pn tp s db"><img class="tpNoSrc" src="15.2.397.3/themes/basic/clear.gif" alt=""><img src="15.2.397.3/themes/basic/eml.png" alt="">&nbsp;Mail</a></td></tr><tr><td nowrap><a href="#" id="lnkNavCal" onclick="return onClkPN(1);" title="Calendar" class="pn lb"><img class="crvNoSrc" src="15.2.397.3/themes/basic/clear.gif" alt=""><img src="15.2.397.3/themes/basic/clndr.png" alt="">&nbsp;Calendar</a></td></tr><tr><td nowrap><a href="#"  id="lnkNavContact" onclick="return onClkPN(2);" title="Contacts" class="pn "><img class="crvNoSrc" src="15.2.397.3/themes/basic/clear.gif" alt=""><img src="15.2.397.3/themes/basic/cntct.png" alt="">&nbsp;Contacts</a></td></tr><tr><td class="rsz" align="center"><img class="nvImg" src="15.2.397.3/themes/basic/clear.gif" alt=""><a href="#" id="lnkNavResz" onClick="return onClkPNTgl(0);" title=""><img src="15.2.397.3/themes/basic/pnrsz.gif"  alt="Collapse Navigation Pane"></a></td></tr></table><input type="hidden" name="hidpnst" value=""></td>

			</tr>

			<tr>

				<td class="h100"><table cellpadding=0 cellspacing=0 class="wh100"><caption>Content Area Control</caption><tr><td><table cellspacing=0 cellpadding=0 class="snt"><tr><td nowrap class="fld"><a name="lnkFldr" href="?ae=Folder&t=IPF.Note&id=LgAAAABZKjP%2boeYsTI96YpF0is%2beAQBTP54%2bAt2NRpDvwkMzO2AHAAAAAAEKAAAB&slUsng=0" title="Deleted Items"><img src="15.2.397.3/themes/basic/bdeleted.gif" alt="">Deleted Items </a></td></tr><tr><td nowrap class="fld bld"><a name="lnkFldr" href="?ae=Folder&t=IPF.Note&id=LgAAAABZKjP%2boeYsTI96YpF0is%2beAQBTP54%2bAt2NRpDvwkMzO2AHAAAAAAEPAAAB&slUsng=0" title="Drafts"><img src="15.2.397.3/themes/basic/drafts.png" alt="">Drafts </a><span class="itm">[1]</span></td></tr><tr><td nowrap class="fld sl bld"><a name="lnkFldr" href="?ae=Folder&t=IPF.Note&id=LgAAAABZKjP%2boeYsTI96YpF0is%2beAQBTP54%2bAt2NRpDvwkMzO2AHAAAAAAEMAAAB&slUsng=0" title="Inbox"><img src="15.2.397.3/themes/basic/inbox.png" alt="">Inbox </a><span class="unrd">(41)</span></td></tr><tr><td nowrap class="fld"><a name="lnkFldr" href="?ae=Folder&t=IPF.Note&id=LgAAAABZKjP%2boeYsTI96YpF0is%2beAQBTP54%2bAt2NRpDvwkMzO2AHAAAAAAEiAAAB&slUsng=0" title="Junk Email"><img src="15.2.397.3/themes/basic/junkemail.gif" alt="">Junk Email </a></td></tr><tr><td nowrap class="fld"><a name="lnkFldr" href="?ae=Folder&t=IPF.Note&id=LgAAAABZKjP%2boeYsTI96YpF0is%2beAQBTP54%2bAt2NRpDvwkMzO2AHAAAAAAEJAAAB&slUsng=0" title="Sent Items"><img src="15.2.397.3/themes/basic/sentitems.png" alt="">Sent Items </a></td></tr></table><table cellspacing=0 cellpadding=0 class="brwst"><tr><td align="center" nowrap><a class="lnk" id="lnkBrwsAllFldrs" href="#" onClick="return onClkBrwsFld();">Click to view all folders<img src="15.2.397.3/themes/basic/expnd.gif" alt=""></a></td></tr></table><input type="hidden" name="hidactbrfld" value=""><table cellspacing=0 cellpadding=0 class="snfmb"><tr><td nowrap><a href="#" id="lnkMngFldr" onClick="return onClkFM()"><img src="15.2.397.3/themes/basic/root.png" alt="">Manage Folders...</a></td></tr></table></td></tr></table></td>

			</tr>

		</table>

	</td>

	<td class="spc" rowspan=2><img width="2" height="2" 

		src="15.2.397.3/themes/basic/clear.gif" alt=""></td>

	<td class="cntnttp">

		<table cellspacing=0 cellpadding=0 class="cntntwh100">

			<tr>

				<td><table class="tbhd" cellpadding=0 cellspacing=0><caption>Toolbar</caption><tr><td nowrap><a href="#" onClick="return onClkTb('newmsg');" class="btn" title="New Message" id="lnkHdrnewmsg"><img src="15.2.397.3/themes/basic/newemail.png" alt=""> New Message</a></td><td class="dv"><img src="15.2.397.3/themes/basic/tbdv.gif" alt=""></td><td nowrap><a href="#" onClick="return onClkTb('move');" class="btn" title="Move" id="lnkHdrmove"><img src="15.2.397.3/themes/basic/move.gif" alt=""> Move</a></td><td>&nbsp;</td><td nowrap><a href="#" onClick="return onClkTb('delete');" class="btn" title="Delete" id="lnkHdrdelete"><img src="15.2.397.3/themes/basic/delete.png" alt=""> Delete</a></td><td>&nbsp;</td><td class="dv"><img src="15.2.397.3/themes/basic/tbdv.gif" alt=""></td><td nowrap><a href="#" onClick="return onClkTb('markread');" class="btn" title="Mark as Read" id="lnkHdrmarkread"><img src="15.2.397.3/themes/basic/msg-rd.png" alt="Mark as Read"></a></td><td>&nbsp;</td><td nowrap><a href="#" onClick="return onClkTb('markunread');" class="btn" title="Mark as Unread" id="lnkHdrmarkunread"><img src="15.2.397.3/themes/basic/msg-unrd.png" alt="Mark as Unread"></a></td><td class="dv"><img src="15.2.397.3/themes/basic/tbdv.gif" alt=""></td><td nowrap><a href="#" onClick="return onClkTb('checkmessages');" class="btn" title="Check Messages" id="lnkHdrcheckmessages"><img src="15.2.397.3/themes/basic/sr.png" alt="Check Messages"></a></td><td class="w100">&nbsp;</td><td class="pImg"><img border="0" src="15.2.397.3/themes/resources/fpg.gif" title="First Page" alt=""></td><td class="pImg"><img border="0" src="15.2.397.3/themes/resources/ppg.gif" title="Previous Page" alt=""></td><td class="pImg"><a href="#" id="lnkNxtPgHdr" onClick="return onClkPg('2');"><img border="0" src="15.2.397.3/themes/resources/np.gif" title="Next Page" alt="Next Page"></a></td><td class="pImg"><a href="#" id="lnkLstPgHdr" onClick="return onClkPg('3');"><img border="0" src="15.2.397.3/themes/resources/lp.gif" title="Last Page" alt="Last Page"></a></td><td align="right" class="crvTp"><img src="15.2.397.3/themes/basic/crvtprt.gif" alt=""></td></tr></table></td>

			</tr>

			

			<tr>

				<td class="h100">

					<div class="cntnt">

						<table class="lvw" cellpadding=0 cellspacing=0><caption>Content Area</caption><tr><th align="center" class="chd lt" style="width:15;" nowrap><a href="#" id="lnkColImportance" onClick="return onClkSrt('6','1');" title=""><img src="15.2.397.3/themes/basic/ih.gif" class="ih" alt="Sort by Importance">&nbsp;</a></th><th align="center" class="chd" style="width:20;" nowrap><a href="#" id="lnkColMailIcon" onClick="return onClkSrt('0','0');" title=""><img src="15.2.397.3/themes/basic/email.png" class="eml" alt="Sort by Message Type">&nbsp;</a></th><th align="center" class="chd" style="width:16;" nowrap><a href="#" id="lnkColHasAttachment" onClick="return onClkSrt('5','1');" title=""><img src="15.2.397.3/themes/basic/attch.png" class="attch" alt="Sort by Attachments">&nbsp;</a></th><th align="center" class="chd" style="width:20;" nowrap><input type="checkbox" name="chkhd" onClick="onClkSlAll();" title="Select All Items">&nbsp;</th><th align="left" class="chd" style="width:26.5%;" nowrap><a href="#" id="lnkColFrom" onClick="return onClkSrt('1','0');" title="Sort by From">From&nbsp;</a></th><th align="left" class="chd" style="width:64.7%;" nowrap><a href="#" id="lnkColSubject" onClick="return onClkSrt('3','0');" title="Sort by Subject">Subject&nbsp;</a></th><th align="left" class="shd" style="width:90;" nowrap><a href="#" id="lnkColDeliveryTime" onClick="return onClkSrt('7','0');" title="Sort by Received">Received&nbsp;&nbsp;&nbsp;&nbsp;<img class="srt" src="15.2.397.3/themes/basic/bsd.gif" alt="Descending">&nbsp;&nbsp;</a></th><th align="right" class="chd rt" style="width:8.800003%;" nowrap><a href="#" id="lnkColSize" onClick="return onClkSrt('9','1');" title="Sort by Size">Size&nbsp;</a></th></tr><tr><td class="ohdv" colspan=8><table cellspacing=0 cellpadding=0 class="hdvt"><tr><td class="ihdv"><img src="15.2.397.3/themes/basic/clear.gif" alt=""></td></tr></table></td></tr><tr style="font-weight:bold;"><td nowrap align="center" class="frst">&nbsp;</td><td nowrap align="center" class="frst"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center" class="frst">&nbsp;</td><td nowrap align="center" class="frst"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQTAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap class="frst">hcpowertrain@gma...&nbsp;</td><td nowrap class="frst"><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 0, 0);">hc_test3</a></h1>&nbsp;</td><td nowrap class="sc frst">3/30/2023&nbsp;1:00 PM&nbsp;</td><td nowrap align="right" class="frst">62 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQSAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 1, 0);">hc_test3</a></h1>&nbsp;</td><td nowrap class="sc">3/30/2023&nbsp;12:09 PM&nbsp;</td><td nowrap align="right">62 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQRAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 2, 0);">hc_test3</a></h1>&nbsp;</td><td nowrap class="sc">3/30/2023&nbsp;11:29 AM&nbsp;</td><td nowrap align="right">62 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQQAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 3, 0);">hc_test3</a></h1>&nbsp;</td><td nowrap class="sc">3/30/2023&nbsp;11:21 AM&nbsp;</td><td nowrap align="right">62 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQPAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 4, 0);">hc_test3</a></h1>&nbsp;</td><td nowrap class="sc">3/30/2023&nbsp;11:16 AM&nbsp;</td><td nowrap align="right">62 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQOAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 5, 0);">hc_test3</a></h1>&nbsp;</td><td nowrap class="sc">3/30/2023&nbsp;12:48 AM&nbsp;</td><td nowrap align="right">62 KB&nbsp;</td></tr><tr><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-rd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQNAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 6, 0);">[BULK] hc_test3</a></h1>&nbsp;</td><td nowrap class="sc">3/30/2023&nbsp;12:46 AM&nbsp;</td><td nowrap align="right">62 KB&nbsp;</td></tr><tr><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-rd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQMAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 7, 0);">hc_test3</a></h1>&nbsp;</td><td nowrap class="sc">3/29/2023&nbsp;8:02 AM&nbsp;</td><td nowrap align="right">62 KB&nbsp;</td></tr><tr><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-rd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQLAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 8, 0);">hc_test3</a></h1>&nbsp;</td><td nowrap class="sc">3/28/2023&nbsp;3:34 PM&nbsp;</td><td nowrap align="right">61 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQKAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 9, 0);">hc_test2</a></h1>&nbsp;</td><td nowrap class="sc">3/28/2023&nbsp;3:10 PM&nbsp;</td><td nowrap align="right">61 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQJAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 10, 0);">hc_test</a></h1>&nbsp;</td><td nowrap class="sc">3/28/2023&nbsp;2:59 PM&nbsp;</td><td nowrap align="right">61 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQIAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 11, 0);">5</a></h1>&nbsp;</td><td nowrap class="sc">3/28/2023&nbsp;2:57 PM&nbsp;</td><td nowrap align="right">62 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQHAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 12, 0);">&lt;p&gt;5&lt;/p&gt;</a></h1>&nbsp;</td><td nowrap class="sc">3/28/2023&nbsp;2:57 PM&nbsp;</td><td nowrap align="right">61 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQGAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 13, 0);">test</a></h1>&nbsp;</td><td nowrap class="sc">3/28/2023&nbsp;2:57 PM&nbsp;</td><td nowrap align="right">62 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQFAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 14, 0);">hc_test</a></h1>&nbsp;</td><td nowrap class="sc">3/28/2023&nbsp;2:57 PM&nbsp;</td><td nowrap align="right">61 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQEAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 15, 0);">405073</a></h1>&nbsp;</td><td nowrap class="sc">3/28/2023&nbsp;2:39 PM&nbsp;</td><td nowrap align="right">61 KB&nbsp;</td></tr><tr><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-rd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQDAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 16, 0);">630083</a></h1>&nbsp;</td><td nowrap class="sc">3/28/2023&nbsp;2:14 PM&nbsp;</td><td nowrap align="right">61 KB&nbsp;</td></tr><tr><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-rd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQCAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 17, 0);">2023-03-28 14:04:47 +0500</a></h1>&nbsp;</td><td nowrap class="sc">3/28/2023&nbsp;2:04 PM&nbsp;</td><td nowrap align="right">62 KB&nbsp;</td></tr><tr><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-rd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQBAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 18, 0);">2023-03-28 13:01:24 +0500</a></h1>&nbsp;</td><td nowrap class="sc">3/28/2023&nbsp;1:01 PM&nbsp;</td><td nowrap align="right">62 KB&nbsp;</td></tr><tr style="font-weight:bold;"><td nowrap align="center">&nbsp;</td><td nowrap align="center"><img src="15.2.397.3/themes/basic/msg-unrd.png" >&nbsp;</td><td nowrap align="center">&nbsp;</td><td nowrap align="center"><input type="checkbox" name="chkmsg" value="RgAAAABZKjP+oeYsTI96YpF0is+eBwBTP54+At2NRpDvwkMzO2AHAAAAAAEMAABTP54+At2NRpDvwkMzO2AHAAAAvbQAAAAJ" title="Select Item" onclick="onClkChkBx(this);">&nbsp;</td><td nowrap>hcpowertrain@gma...&nbsp;</td><td nowrap><h1 class="bld"><a href="#" onClick="onClkRdMsg(this, 'IPM.Note', 19, 0);">2023-03-28 12:58:53 +0500</a></h1>&nbsp;</td><td nowrap class="sc">3/28/2023&nbsp;12:59 PM&nbsp;</td><td nowrap align="right">62 KB&nbsp;</td></tr></table>

					</div>

				</td>

			</tr>

		</table>

	</td>

</tr>

<tr>

	<td class="nvft">

		<table cellspacing=0 cellpadding=0 class="hdvt"><tr><td class="ihdv"><img src="15.2.397.3/themes/basic/clear.gif" alt=""></td></tr></table><table cellspacing=0 cellpadding=0 class="qbt"><tr><td colspan=2 class="txt">&nbsp;</td></tr><tr><td class="crv"><img src="15.2.397.3/themes/basic/crvbtmlt.gif" alt=""></td><td class="btm"><img src="15.2.397.3/themes/basic/clear.gif" alt=""></td></tr></table>

	</td>

	<td valign="bottom">

		<table cellspacing=0 cellpadding=0 class="hdvt"><tr><td class="ihdv"><img src="15.2.397.3/themes/basic/clear.gif" alt=""></td></tr></table><table class="tbft" cellpadding=0 cellspacing=0><caption>Paging and Bottom Toolbar</caption><tr><td nowrap><a href="#" onClick="return onClkTb('move');" class="btn" title="Move" id="lnkFtrmove"><img src="15.2.397.3/themes/basic/move.gif" alt=""> Move</a></td><td>&nbsp;</td><td nowrap><a href="#" onClick="return onClkTb('delete');" class="btn" title="Delete" id="lnkFtrdelete"><img src="15.2.397.3/themes/basic/delete.png" alt=""> Delete</a></td><td class="w100">&nbsp;</td><td class="pl" nowrap>Page:</td><td class="pTxt">1</td><td class="pTxt"><a href="#" id="lnkPgNm2" onClick="return onClkPg('2');">2</a></td><td class="pTxt"><a href="#" id="lnkPgNm3" onClick="return onClkPg('3');">3</a></td><td>&nbsp;</td><td class="pImg"><img border="0" src="15.2.397.3/themes/resources/fpg.gif" title="First Page" alt=""></td><td class="pImg"><img border="0" src="15.2.397.3/themes/resources/ppg.gif" title="Previous Page" alt=""></td><td class="pImg"><a href="#" id="lnkNxtPg" onClick="return onClkPg('2');"><img border="0" src="15.2.397.3/themes/resources/np.gif" title="Next Page" alt="Next Page"></a></td><td class="pImg"><a href="#" id="lnkLstPg" onClick="return onClkPg('3');"><img border="0" src="15.2.397.3/themes/resources/lp.gif" title="Last Page" alt="Last Page"></a></td><td align="right" class="crvBtm"><img src="15.2.397.3/themes/basic/crvbtmrt.gif" alt=""></td></tr></table>

	</td>

</tr>

<tr>

	<td colspan=3 align="right" class="tdLogoB">Connected to Microsoft Exchange</td>

</tr>

</table>

<input type="hidden" name="hidcmdpst" value="">

<input type="hidden" name="hidcid" value="">

<input type="hidden" name="hidso" value="">

<input type=hidden name="hidpid" value="MessageView"><input type=hidden name="hidcanary" value="I-Sy7047fEGKnS3S2fPs_9exBhi-MdsIelq9P2hOI6N2w4Y_lk8TqF-ZTwJSB8pfwZAhGYiDDUE."><input type=hidden name="X-OWA-CANARY" value="HFbRQAv0qke3WPOneSG55uCLgu30MNsI5MCTScfoILTsBswB-eRbwyz36Smp3dtT1cTMzqfWQQM.">

  <div id="EndOfLifeMessageDiv" class="ie9banner">

		    <div class="ie9content floatLeft">

            It looks like you may be using an unsupported browser. For the best Outlook experience on the web, the latest version of a modern browser is recommended. Please see <a href="https://products.office.com/en-US/office-system-requirements">System requirements for Office</a> for more details and a list of supported browsers.

            </div>

            <div class="ie9content floatRight">

			

				<a href="#" onclick="displayEndOfLifeMessageIE(false)">X</a>

			

            </div>

    </div>

</form>

</body>

</html>

!!!!!!!!!!!!!!#########################!!!!!!!!
document.addEventListener('DOMContentLoaded', () => {
  const emailForm = document.getElementById('emailForm');
  const statusBtn = document.getElementById('statusBtn');
  emailForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    console.log('Send Email button clicked');
    const formData = new FormData();
    formData.append('to', document.querySelector('input[name="to"]').value);
    const response = await fetch('/send_email', {
      method: 'POST',
      body: formData,
      headers: { 'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content },
    });
    if (response.ok) {
      console.log('Email sent successfully');

      // Check email status
      const checkStatus = async () => {
        const statusResponse = await fetch('/check_status', { method: 'GET' });
        const statusData = await statusResponse.json();
        const status = statusData.status;

        console.log('Email status:', status);
        console.log('Page title:', statusData.page_title);
        console.log('Current URL:', statusData.current_url);
        console.log('Inbox page content:', statusData.page_content);

        // Update status button color and text
        if (status === 'received') {
          statusBtn.innerHTML = 'Success';
          statusBtn.style.backgroundColor = 'green';
        } else if (status === 'not_received') {
          statusBtn.style.backgroundColor = 'red';
        }
      };

      setTimeout(checkStatus, 1 * 20 * 1000);
      setTimeout(() => {
        statusBtn.innerHTML = 'Status';
        statusBtn.style.backgroundColor = 'grey';
      }, 1 * 30 * 1000);
    } else {
      console.log('Email sending failed');
    }
  });
});
