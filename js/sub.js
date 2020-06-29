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
		
		/*SNB*/
		
		var snb=document.getElementById('snb_bar');
	 var snbTitle=snb.getElementsByTagName('ul')[0].children;
	
	for(var i=1;i<snbTitle.length;i++){
		snbTitle[i].num=i;
			var snbcurrentNum=1;
		snbTitle[i].onclick=function(){
			var snbList=this.getElementsByTagName('ul')[0];
			if(snbList.className=="snb_list"){
			snbTitle[snbcurrentNum].getElementsByTagName('ul')[0].className="snb_list";
			snbList.className="snb_list on";
			snbcurrentNum=this.num;
			}else{
				snbList.className="snb_list";
			}
			return false;
		}
	}
	
	/*share*/
	
	var shareOn=document.getElementById('shareOn');
	var shareList=document.getElementById('shareList');
	var shareOff=shareList.getElementsByTagName('a')[3];
	
	shareOn.onclick=function(){
		console.log('1')
					shareList.style.display="block"
	}
	shareOff.onclick=function(){
					shareList.style.display="none"
	}
	
	/*tab*/
		
	var introTab=document.getElementById('introduce_tab');
	var introTabLi=introTab.children;
	var introcurrentNum=0;
	
	for(var i=0;i<introTabLi.length;i++){
		var introBtn=introTabLi[i].children[0];
		introBtn.num=i;
		introBtn.onclick=function(){
			introTabLi[introcurrentNum].className="tab_title";
			introTabLi[this.num].className="tab_title on";
			
			introcurrentNum=this.num;
			
			return false;
		}
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
					
 
   window.onload=init;