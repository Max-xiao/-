
/**
* 添加标记
*/
function boldSelection() {
	//把标签导入
	var temp=document.getElementById("final").value;
	var i=0;
	var dif="";
	var mathrod="";
	var type="";
	while(temp.charAt(i)!='#'){
		dif=dif+temp.charAt(i);	
		i++;
	}
	i++;
	while(temp.charAt(i)!='#'){
		mathrod=mathrod+temp.charAt(i);	
		i++;
	}
	i++;
	while(temp.charAt(i)!='#'){
		type=type+temp.charAt(i);	
		i++;
	}
	i++;
	//制造新标签
	var text1="<dif="+dif+" method="+mathrod+" type="+type+">";
	var text2="</dif>";
	//加入新标签
    if (document.selection) { // 老IE
        var selecter = document.selection.createRange();
        selecter.select();
        var selectStr = selecter.text; //获取选中文本
        selecter.pasteHTML(text1); //替换为HTML元素，替换完会失去选取，如果选择的是textarea里的内容这里会报错
    } else { // 非老IE
        var selecter;
        if (window.getSelection()) {
            selecter = window.getSelection();
        } 
		else {
            selecter = document.getSelection();
        }
        //selecter = document.getSelection();
        var selectStr = selecter.toString();
		//var longs = selecter.rangeCount;
        if (selectStr.trim() != "") {
            var rang = selecter.getRangeAt(0);			
            rang.deleteContents(); // 删除选中内容
            rang.insertNode(document.createTextNode(text1+selectStr+text2)); //在选中内容的起始位置插入一个节点
            // chrome中的bug，如果选中的是textarea中的内容，就会在textarea前面插入节点
        }
    }
	
}
/**
* 删除
*/
function boldSelectio(text1,text2) {
    if (document.selection) { // 老IE
        var selecter = document.selection.createRange();
        selecter.select();
        var selectStr = selecter.text; //获取选中文本
        selecter.pasteHTML(text1); //替换为HTML元素，替换完会失去选取，如果选择的是textarea里的内容这里会报错
    } else { // 非老IE
        var selecter;
        if (window.getSelection()) {
            selecter = window.getSelection();
        } 
		else {
            selecter = document.getSelection();
        }
        var selectStr = selecter.toString();//获取选中文本的字符串
        if (selectStr.trim() != "") {
            var rang = selecter.getRangeAt(0);


            rang.deleteContents(); //                                 删除选中内容                   


        }
    }
	
}
/**
* 添加新标签
*/
function append_label(text1){
	var aaa=document.getElementById(text1).value;
	var editor = document.getElementById("final");
	editor.value=editor.value+htmlEncodeByRegExp(aaa)+"#";
}
/**
* 保存
*/
function boldSelecti(){
	var aaa=document.getElementById("asd").innerHTML;
	var editor = document.getElementById("firstname");
	editor.value=htmlEncodeByRegExp(aaa);
	var bbb=document.getElementById("idnumber").innerHTML;
	var editor = document.getElementById("id1");
	editor.value=htmlEncodeByRegExp(bbb);
}
/**
* 转义
*/
function htmlEncodeByRegExp(str){  
             var temp = "";
             if(str.length == 0) return "";
             temp = str.replace(/&amp;/g,"&");
             temp = temp.replace(/&lt;/g,"<");
             temp = temp.replace(/&gt;/g,">");
             temp = temp.replace(/&nbsp;/g," ");
             temp = temp.replace(/&#39;/g,"\'");
             temp = temp.replace(/&quot;/g,"\"");
             return temp;
        }
