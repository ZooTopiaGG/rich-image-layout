let options = {
  str: '', // 文本字符串
  flg: '', // 需要插入的值 可为空
  splitStr1: '', // 需要分割的标签
}
export default {
    insert_flg(str, flg, splitStr1, splitStr2, url){
      var newstr="";
      var tmp1=str.split(splitStr1)
      var tmp2 = tmp1[1].split(splitStr2)
      newstr = `${splitStr1}${tmp1[0]} ${flg} ${tmp2[0]}${splitStr2}${url} style="max-width:100%">`;
      // newstr1 = tmp[0]+' '+flg+' '+ splitStr + url + ' style="max-width:100%">';
      return newstr;
  },
  // 正则表达式处理
  rich_image_layout(options) {
    const regexSrc = /src=[\'\"]?([^\'\"]*)[\'\"]?/i
    const regexPImg =new RegExp("<"+options.splitStr1+"><img.*?(?:>|/>)","gi")
    // const regexPImg = /<p><img.*?(?:>|\/>)/gi 
    let pImg = options.str.match(regexPImg)
    for (let i=0; i<pImg.length; i++) {
        let srcArray = pImg[i].match(regexSrc)
        // 替换插入需要的值
        let newPimg = this.insert_flg(pImg[i], options.flg, `<${options.splitStr1}`, ' src=', `"${srcArray[1]}?s=500"`)
        // 正则替换富文本内的img标签
        let htmls = options.str.replace(regexPImg, newPimg)
        return htmls
    }
  },
}
