function init(){
   
  /*GNB*/
   var gnb=document.getElementById('gnb');
   var menu1=gnb.children;
   
   for(var i=0; i<menu1.length; i++){
    menu1[i].num=i;
    menu1[i].onmouseover=function(){
					this.children[0].className="on"
     var menu2=menu1[this.num].children[1];
     menu2.className='gnb_sub_wrap on';
     var menu2Li=menu2.children[1].children;
     for(var i=0; i<menu2Li.length; i++){
      menu2Li[i].num=i;
       if(menu2Li[i].className=='depth_2'){
      menu2Li[i].onmouseover=function(){
       this.children[1].className='depth_3 on'
      }
      menu2Li[i].onmouseout=function(){
       this.children[1].className='depth_3'
        }
       }
      }
     }
    menu1[i].onmouseout=function(){
					this.children[0].className=""
     var menu2=menu1[this.num].children[1];
     menu2.className='gnb_sub_wrap';
     }
    }
  
  /*검색*/
  var srcIcon=document.getElementById('src_icon');
  var srcZone=document.getElementById('src_zone');
  
  srcIcon.onclick=function(){
   if(srcZone.className==''){
    srcZone.className='on'
   }else{
    srcZone.className=''
   }
  }
  
  var srcBar=srcZone.getElementsByTagName('input')[0];
  
  srcBar.onclick=function(){
  
  if(srcBar.value=='검색어를 입력하세요'){
   srcBar.value='';
   return;
   }
  }
  
  /*메인배너*/
  var mainBanner=document.getElementById('mainBanner');
  var MBBtn=document.getElementById('mainBannerBtn');
  var MBNum=MBBtn.getElementsByTagName('li')
  var MBWidth=788;
  var currentNum=0;
  var isnum=0;
  var MBsi;
  
  MBsi=setInterval(MBsiRoll,5000);
  var MBBtnA=MBBtn.getElementsByTagName('a');
  var MBBtnPrev=MBBtnA[0];
  var MBBtnStop=MBBtnA[4];
  var MBBtnNext=MBBtnA[5];
  
  function MBBannerRoll(num){
   
   if(currentNum!=num){
   mainBanner.style.left=-(MBWidth*num)+'px';
    MBNum[num].getElementsByTagName('a')[0].className='on';
    MBNum[currentNum].getElementsByTagName('a')[0].className='';
        
    currentNum=num;
    
   }
  }
  
  MBBtnPrev.onclick=function(){
   if(--isnum<0){
    isnum=2;
   }
   MBBannerRoll(isnum);
   MBBtnStop.className='btn_play';
   clearInterval(MBsi);
  }
  
  MBBtnNext.onclick=function(){
   if(++isnum>2){
    isnum=0;
   }
   MBBannerRoll(isnum);
   MBBtnStop.className='btn_play';
   clearInterval(MBsi);
  }
  function MBsiRoll(){
   if(++isnum>2){
    isnum=0;
   }
   MBBannerRoll(isnum)
  }
  MBBtnStop.onclick=function(){
   if(MBBtnStop.className=='btn_stop'){
    MBBtnStop.className='btn_play';
    clearInterval(MBsi);
   }else{
    MBBtnStop.className='btn_stop';
    clearInterval(MBsi);
    MBsi=setInterval(MBsiRoll,5000);
   }
  }
  
  for(var i=0; i<MBNum.length; i++){
   MBNum[i].num=i;
   MBNum[i].onmouseover=function(){
    clearInterval(MBsi);
    isnum=this.num;
    MBBannerRoll(isnum);
    MBBtnStop.className='btn_play';
    }
   MBNum[i].onmouseout=function(){
    clearInterval(MBsi);
    MBsi=setInterval(MBsiRoll,5000);
    MBBtnStop.className='btn_stop';
    }
   }
   
   /*공지사항*/
   
   var notice=document.getElementById('notice').children;
   var noticeNum=0;
  
   for(var i=0; i<notice.length; i++){
    
    notice[i].num=i;
   // console.log(notice[i])
    notice[i].onclick=function(){
     
     if(noticeNum!=this.num){
     this.getElementsByTagName('a')[0].className='on';
     notice[noticeNum].getElementsByTagName('a')[0].className='';
     
     this.getElementsByTagName('ul')[0].className='notice_list on';
     notice[noticeNum].getElementsByTagName('ul')[0].className='notice_list';
     
     noticeNum=this.num;
     }
     return false;
    }
   }
  
  /*갤러리 뉴스*/
  
  var news=document.getElementById('news').children;
  var newsNum=0;
  var newsLi=news[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
  var newsLiNum=0;
  
  for(var i=0; i<news.length; i++){
    
    news[i].num=i;
    news[i].onclick=function(){
     
     if(newsNum!=this.num){
     this.getElementsByTagName('a')[0].className='on';
     news[newsNum].getElementsByTagName('a')[0].className='';
     
     this.getElementsByTagName('ul')[0].className='news_list on';
     news[newsNum].getElementsByTagName('ul')[0].className='news_list';
     
     newsNum=this.num;
									var newsLi=news[1].getElementsByTagName('ul')[0].getElementsByTagName('li');
									
									for(var j=0; j<3; j++){
    
       newsLi[j].num=j;
       newsLi[j].onclick=function(){
           
        if(newsLiNum!=this.num){
         this.getElementsByTagName('div')[0].className='news_current on';
         newsLi[newsLiNum].getElementsByTagName('div')[0].className='news_current';
         
         newsLiNum=this.num
        }
       return false;
       }
      }
         
         
        }
         return false;
        }
     
				
      for(var j=0; j<3; j++){
    
       newsLi[j].num=j;
       newsLi[j].onclick=function(){
           
        if(newsLiNum!=this.num){
         this.getElementsByTagName('div')[0].className='news_current on';
         newsLi[newsLiNum].getElementsByTagName('div')[0].className='news_current';
         
         newsLiNum=this.num
        }
       return false;
       }
      }
  }
     
  /*알림판*/
     
    var bannerZone=document.getElementById('banner_zone').getElementsByTagName('ul')[0];
     
     var bannerBtn=document.getElementById('banner_btn').getElementsByTagName('a');
     var btnPrev=bannerBtn[0];
     var btnNext=bannerBtn[1];
     var btnStop=bannerBtn[2];
     var bannerRoll;
     
        function animate(){
        var bannerLi=bannerZone.children[0];
        bannerZone.appendChild(bannerLi);
        }
     
     bannerRoll=setInterval(animate,3000);
     
    btnPrev.onclick=function(){
        var bannerLi=bannerZone.children[5];
        bannerZone.insertBefore(bannerLi,bannerZone.firstChild)
        clearInterval(bannerRoll);
         btnStop.className='btn_play';
         return false;
    }    
    btnNext.onclick=function(){
        animate();
        clearInterval(bannerRoll);
         btnStop.className='btn_play';
        return false;
    }    
    btnStop.onclick=function(){
        clearInterval(bannerRoll);
        if(btnStop.className!='btn_stop'){
            btnStop.className='btn_stop';
            bannerRoll=setInterval(animate,3000);
        }else{
            btnStop.className='btn_play';
        }  
        return false;
    }    
   
			/*패밀리사이트*/

				var footerLink=document.getElementById('footer_wrap').children[0].getElementsByTagName('ul')[2].getElementsByTagName('li')
				
				for(var i=0;i<footerLink.length;i++){
								footerLink[i].num=i
								footerLink[i].onclick=function(){
												footerLinkLi=this.getElementsByTagName('ul')[0];
												if(footerLinkLi.className=="family_list"){
											footerLinkLi.className="family_list on"
												}else{
											footerLinkLi.className="family_list"
												}
												
												return false;
								}
				}	
				
 }/* //init  */
					
    /* 여행 */
					
     var tripCurrentNum=1;
					function trip(tripLi,num){
									if(tripCurrentNum!=num){
					var tripLi2=document.getElementById('trip').children[tripCurrentNum-1].getElementsByTagName('a')[0]
									tripLi.className='trip_icon0'+num+' on';
									tripLi2.className='trip_icon0'+tripCurrentNum+' off';
										
					var tripDiv=document.getElementById('trip').children[num-1];
					var tripDiv2=document.getElementById('trip').children[tripCurrentNum-1];
					
									tripDiv.children[1].className='trip_contents on';
									tripDiv2.children[1].className='trip_contents';	
													
									tripDiv.children[2].className='trip_aside on';
									tripDiv2.children[2].className='trip_aside';				
									
									tripCurrentNum=num;
									}
					}
    
  
  /*메뉴버튼*/
  
  function srvBtn(num,num2){
   var srvZone=document.getElementById('service_zone');
   srvZone.getElementsByTagName('ul')[num2].className='service_0'+num2+' on';
   srvZone.getElementsByTagName('ul')[num].className='service_0'+num+' off';
  }
        
 
   window.onload=init;